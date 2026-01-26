import { Redis } from 'ioredis';

// Configuration Redis
const redis = new Redis({
  host: process.env.REDIS_HOST || 'redis',
  port: parseInt(process.env.REDIS_PORT || '6379'),
  password: process.env.REDIS_PASSWORD,
  retryStrategy: (times) => Math.min(times * 50, 2000),
  enableReadyCheck: false,
  enableOfflineQueue: false,
});

// Gestion des erreurs Redis
redis.on('error', (err) => {
  console.error('Redis connection error:', err);
});

redis.on('connect', () => {
  console.log('Redis connected successfully');
});

interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetIn: number;
  limit: number;
}

/**
 * Vérifier le rate limit pour un identifiant donné
 * @param identifier - Clé unique (IP, user ID, etc.)
 * @param limit - Nombre de requêtes autorisées
 * @param window - Fenêtre de temps en millisecondes (défaut: 1 minute)
 * @returns Résultat du rate limit
 */
export async function checkRateLimit(
  identifier: string,
  limit: number = 5,
  window: number = 60000 // 1 minute par défaut
): Promise<RateLimitResult> {
  try {
    const key = `ratelimit:${identifier}`;
    const windowSeconds = Math.ceil(window / 1000);

    // Incrémenter le compteur
    const current = await redis.incr(key);

    // Définir la clé pour la première fois
    if (current === 1) {
      await redis.expire(key, windowSeconds);
    }

    // Obtenir le TTL (time to live) en millisecondes
    const ttl = await redis.pttl(key);

    const remaining = Math.max(0, limit - current);
    const resetIn = ttl > 0 ? ttl : 0;

    return {
      allowed: current <= limit,
      remaining,
      resetIn,
      limit,
    };
  } catch (error) {
    console.error('Rate limit check error:', error);
    // En cas d'erreur Redis, permettre la requête (fail-open)
    return {
      allowed: true,
      remaining: limit,
      resetIn: 0,
      limit,
    };
  }
}

/**
 * Obtenir les statistiques de rate limit pour un identifiant
 */
export async function getRateLimitStats(identifier: string): Promise<{
  count: number;
  ttl: number;
} | null> {
  try {
    const key = `ratelimit:${identifier}`;
    const count = await redis.get(key);
    const ttl = await redis.pttl(key);

    if (count === null) {
      return null;
    }

    return {
      count: parseInt(count),
      ttl: Math.max(0, ttl),
    };
  } catch (error) {
    console.error('Get rate limit stats error:', error);
    return null;
  }
}

/**
 * Réinitialiser le rate limit pour un identifiant
 */
export async function resetRateLimit(identifier: string): Promise<void> {
  try {
    const key = `ratelimit:${identifier}`;
    await redis.del(key);
  } catch (error) {
    console.error('Reset rate limit error:', error);
  }
}

/**
 * Faire une liste blanche (whitelist) d'IPs
 */
export async function whitelistIP(ip: string, duration: number = 3600): Promise<void> {
  try {
    const key = `whitelist:${ip}`;
    await redis.setex(key, duration, '1');
  } catch (error) {
    console.error('Whitelist IP error:', error);
  }
}

/**
 * Vérifier si une IP est whitelistée
 */
export async function isIPWhitelisted(ip: string): Promise<boolean> {
  try {
    const key = `whitelist:${ip}`;
    const result = await redis.exists(key);
    return result === 1;
  } catch (error) {
    console.error('Check whitelist error:', error);
    return false;
  }
}

/**
 * Mettre en cache une requête suspecte
 */
export async function logSuspiciousActivity(
  identifier: string,
  details: Record<string, any>,
  duration: number = 86400 // 24 heures
): Promise<void> {
  try {
    const key = `suspicious:${identifier}`;
    const value = JSON.stringify({
      ...details,
      timestamp: new Date().toISOString(),
    });
    await redis.setex(key, duration, value);
  } catch (error) {
    console.error('Log suspicious activity error:', error);
  }
}

/**
 * Vérifier si une IP a des activités suspectes
 */
export async function hasSuspiciousActivity(identifier: string): Promise<boolean> {
  try {
    const key = `suspicious:${identifier}`;
    const result = await redis.exists(key);
    return result === 1;
  } catch (error) {
    console.error('Check suspicious activity error:', error);
    return false;
  }
}

/**
 * Fermer la connexion Redis (utile pour les tests)
 */
export async function closeRedis(): Promise<void> {
  await redis.quit();
}

// Export l'instance Redis pour utilisation directe si besoin
export { redis };
