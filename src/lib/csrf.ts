import crypto from 'crypto';
import { redis } from './rateLimit';

interface CSRFSession {
  token: string;
  createdAt: number;
  expiresAt: number;
}

/**
 * Générer un token CSRF sécurisé
 */
export function generateCSRFToken(): string {
  return crypto.randomBytes(32).toString('hex');
}

/**
 * Générer un session ID
 */
export function generateSessionId(): string {
  return crypto.randomUUID();
}

/**
 * Stocker un token CSRF associé à une session
 * @param sessionId - Identifiant unique de la session
 * @param token - Token CSRF à stocker
 * @param ttl - Durée de vie en secondes (défaut: 1 heure)
 */
export async function storeCSRFToken(
  sessionId: string,
  token: string,
  ttl: number = 3600
): Promise<void> {
  try {
    const key = `csrf:${sessionId}`;
    const session: CSRFSession = {
      token,
      createdAt: Date.now(),
      expiresAt: Date.now() + ttl * 1000,
    };
    await redis.setex(key, ttl, JSON.stringify(session));
  } catch (error) {
    console.error('Store CSRF token error:', error);
    throw new Error('Failed to store CSRF token');
  }
}

/**
 * Vérifier un token CSRF
 * @param sessionId - Identifiant unique de la session
 * @param token - Token CSRF à vérifier
 * @param deleteAfterVerification - Supprimer le token après vérification (défaut: true)
 */
export async function verifyCSRFToken(
  sessionId: string,
  token: string,
  deleteAfterVerification: boolean = true
): Promise<boolean> {
  try {
    const key = `csrf:${sessionId}`;
    const stored = await redis.get(key);

    if (!stored) {
      console.warn(`CSRF token not found for session: ${sessionId}`);
      return false;
    }

    let session: CSRFSession;
    try {
      session = JSON.parse(stored);
    } catch (error) {
      console.error('Failed to parse CSRF session:', error);
      return false;
    }

    // Vérifier que le token correspond
    const isValid = session.token === token;

    // Vérifier que le token n'a pas expiré
    if (isValid && session.expiresAt > Date.now()) {
      // Supprimer le token après vérification pour éviter les replay attacks
      if (deleteAfterVerification) {
        await redis.del(key);
      }
      return true;
    }

    // Token expiré ou invalide, le supprimer
    if (!isValid) {
      await redis.del(key);
      console.warn(
        `Invalid CSRF token for session: ${sessionId}. Token does not match.`
      );
    } else {
      console.warn(
        `Expired CSRF token for session: ${sessionId}. Expires at: ${new Date(
          session.expiresAt
        ).toISOString()}`
      );
    }

    return false;
  } catch (error) {
    console.error('CSRF token verification error:', error);
    return false;
  }
}

/**
 * Obtenir un nouveau token CSRF et session
 * Utile pour le endpoint GET /api/csrf
 */
export async function getNewCSRFToken(
  ttl: number = 3600
): Promise<{ sessionId: string; token: string }> {
  try {
    const sessionId = generateSessionId();
    const token = generateCSRFToken();
    await storeCSRFToken(sessionId, token, ttl);
    return { sessionId, token };
  } catch (error) {
    console.error('Get new CSRF token error:', error);
    throw new Error('Failed to generate CSRF token');
  }
}

/**
 * Invalider un token CSRF (forcer la déconnexion)
 */
export async function invalidateCSRFToken(sessionId: string): Promise<void> {
  try {
    const key = `csrf:${sessionId}`;
    await redis.del(key);
  } catch (error) {
    console.error('Invalidate CSRF token error:', error);
  }
}

/**
 * Nettoyer les vieux tokens CSRF (pour maintenance)
 * Note: Redis gère automatiquement l'expiration via TTL
 */
export async function cleanupExpiredCSRFTokens(): Promise<number> {
  try {
    // Redis gère automatiquement l'expiration, donc pas besoin de nettoyer manuellement
    // Cette fonction est ici pour documentation
    console.log('CSRF token cleanup: Redis handles automatic expiration via TTL');
    return 0;
  } catch (error) {
    console.error('Cleanup CSRF tokens error:', error);
    return 0;
  }
}
