# Plan d'Implémentation Sécurité - Court & Moyen Terme

**Contexte :** Production business-critical | CrowdSec + Caddy | 100-1000 req/jour

---

## 📋 COURT TERME (1-2 semaines)

### 1. ✅ Vérifier Configuration CrowdSec + Caddy

**Importance :** CRITIQUE - Vous avez l'outil mais besoin de vérifier

#### A. Vérifier que CrowdSec bloque bien `/api/contact`

```bash
# Sur le serveur CrowdSec
sudo cscli collections list
sudo cscli scenarios list
sudo cscli bouncers list

# Vérifier les logs CrowdSec
sudo tail -f /var/log/crowdsec.log
```

#### B. Vérifier la configuration Caddyfile

Votre Caddyfile doit inclure :

```caddyfile
# Configuration CrowdSec dans Caddy
(crowdsec) {
  security {
    crowdsec {
      enabled
      api_url http://crowdsec:8080
      api_key YOUR_API_KEY
      log_level debug
    }
  }
}

wilmoredynamics.com {
  import crowdsec
  
  # Reverse proxy vers Docker
  reverse_proxy localhost:3000
  
  # Logs
  log {
    output file /var/log/caddy/access.log
    format json
  }
}
```

**Checklist :**
- [ ] CrowdSec a accès aux logs Caddy
- [ ] Les règles HTTP 429 (trop de requêtes) sont détectées
- [ ] Les patterns d'attaque XSS sont bloqués
- [ ] API contact a une règle spéciale dans CrowdSec

---

### 2. ✅ Ajouter Rate Limiting dans Caddy

**Pourquoi :** Votre rate limiting Node.js est basique (1 req/min global)

```caddyfile
wilmoredynamics.com {
  import crowdsec
  
  # Rate limiting global
  rate_limit /api/* 10/m   # 10 requêtes par minute
  rate_limit /api/contact 5/m   # 5 req/min pour le contact
  
  reverse_proxy localhost:3000 {
    # Logs des erreurs 429
    header_down X-Rate-Limit-Remaining {http.response.header.X-Rate-Limit-Remaining}
  }
}
```

**Avantages :**
- Bloque avant que Node.js ne reçoive la requête
- Économise les ressources
- Retourne HTTP 429 (CrowdSec peut le monitorer)

---

### 3. ✅ Améliorer Logs Caddy pour Sécurité

**Configuration avancée :**

```caddyfile
wilmoredynamics.com {
  log {
    output file /var/log/caddy/access.log {
      roll_size 100mb
      roll_keep 10
      roll_keep_days 30
    }
    format json {
      "timestamp": "{ts}",
      "request": "{method} {uri}",
      "status": {status},
      "response_time": {duration},
      "user_agent": "{http.request.header.User-Agent}",
      "remote_addr": "{http.request.remote}",
      "referer": "{http.request.header.Referer}"
    }
  }
}
```

**Action :** Vérifier que CrowdSec scanne ce fichier
```bash
sudo cscli collections describe crowdsec/caddy
```

---

### 4. ✅ Tester le Formulaire de Contact

**Points à tester :**

```bash
# Test 1: Injection XSS basique
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "firstname": "<script>alert(1)</script>",
    "lastname": "Test",
    "email": "test@test.com",
    "subject": "Test",
    "message": "Message test"
  }'
# Résultat attendu: 400 Bad Request (validation échoue)

# Test 2: Payload énorme (DoS)
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "firstname": "Test",
    "lastname": "Test",
    "email": "test@test.com",
    "subject": "Test",
    "message": "'$(python3 -c "print('x'*10000)')'
  }'
# Résultat attendu: 400 Bad Request (trop long)

# Test 3: Email invalide
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "firstname": "Test",
    "lastname": "Test",
    "email": "invalid-email",
    "subject": "Test",
    "message": "Message test"
  }'
# Résultat attendu: 400 Bad Request (email invalide)

# Test 4: Multiple requêtes rapides
for i in {1..10}; do
  curl -X POST http://localhost:3000/api/contact \
    -H "Content-Type: application/json" \
    -d '{...}'
done
# Résultat attendu: 429 Too Many Requests (après 5 req)
```

---

### 5. ✅ Audit du Fichier .env

```bash
# Vérifier que .env n'est pas commité
cat .gitignore | grep -E "^\.env"

# Vérifier les permissions
ls -la .env
# Doit être: -rw------- (600)

# Renouveler SMTP_PASS (déjà fait ✅)
grep SMTP_PASS .env
```

---

## ⏱️ MOYEN TERME (2-4 semaines)

### 1. 🔍 Implémenter Redis Rate Limiting Distribué

**Problème actuel :** Rate limiting stocké en mémoire (perdu au redémarrage)

#### A. Ajouter Redis

```yaml
# compose.yaml
services:
  wilmore:
    # ... configuration existante
    depends_on:
      - redis
    environment:
      REDIS_URL: redis://redis:6379

  redis:
    image: redis:7-alpine
    container_name: wilmore-redis
    restart: unless-stopped
    volumes:
      - redis-data:/data
    command: redis-server --appendonly yes --requirepass ${REDIS_PASSWORD}
    security_opt:
      - no-new-privileges:true
    read_only: true
    tmpfs:
      - /tmp
    healthcheck:
      test: ["CMD", "redis-cli", "--raw", "incr", "ping"]
      interval: 10s
      timeout: 5s
      retries: 5

volumes:
  redis-data:
```

#### B. Implémenter Rate Limiting avec Redis

**Fichier : `src/lib/rateLimit.ts`**

```typescript
import { Redis } from 'ioredis';

const redis = new Redis({
  host: process.env.REDIS_HOST || 'redis',
  port: parseInt(process.env.REDIS_PORT || '6379'),
  password: process.env.REDIS_PASSWORD,
});

export async function checkRateLimit(
  identifier: string,
  limit: number = 5,
  window: number = 60000 // 1 minute
): Promise<{ allowed: boolean; remaining: number; resetIn: number }> {
  const key = `ratelimit:${identifier}`;
  
  const current = await redis.incr(key);
  if (current === 1) {
    await redis.expire(key, Math.ceil(window / 1000));
  }
  
  const ttl = await redis.pttl(key);
  const remaining = Math.max(0, limit - current);
  
  return {
    allowed: current <= limit,
    remaining,
    resetIn: ttl > 0 ? ttl : 0
  };
}
```

#### C. Utiliser dans l'API

```typescript
import { checkRateLimit } from '@/lib/rateLimit';

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  
  const { allowed, remaining, resetIn } = await checkRateLimit(
    `contact:${ip}`,
    5,  // 5 requêtes
    60000  // par minute
  );
  
  if (!allowed) {
    return NextResponse.json(
      { error: 'Trop de requêtes. Réessayez dans ' + Math.ceil(resetIn/1000) + 's' },
      { status: 429, headers: {
        'Retry-After': String(Math.ceil(resetIn/1000)),
        'X-RateLimit-Remaining': String(remaining)
      }}
    );
  }
  
  // ... reste du code
}
```

**Avantages :**
- Persiste après redémarrage
- Fonctionne avec plusieurs instances Docker
- Intégration CrowdSec possible

---

### 2. 🛡️ Ajouter CSRF Token

**Fichier : `src/lib/csrf.ts`**

```typescript
import crypto from 'crypto';
import { Redis } from 'ioredis';

const redis = new Redis({
  host: process.env.REDIS_HOST || 'redis',
  port: parseInt(process.env.REDIS_PORT || '6379'),
  password: process.env.REDIS_PASSWORD,
});

export function generateCSRFToken(): string {
  return crypto.randomBytes(32).toString('hex');
}

export async function storeCSRFToken(token: string, sessionId: string): Promise<void> {
  await redis.setex(`csrf:${sessionId}`, 3600, token);
}

export async function verifyCSRFToken(token: string, sessionId: string): Promise<boolean> {
  const stored = await redis.get(`csrf:${sessionId}`);
  return stored === token;
}
```

**Utilisation dans formulaire :**

```typescript
// Dans le composant React
const [csrfToken, setCsrfToken] = useState('');

useEffect(() => {
  fetch('/api/csrf')
    .then(r => r.json())
    .then(d => setCsrfToken(d.token));
}, []);

// Soumettre avec le token
const handleSubmit = async (data) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken
    },
    body: JSON.stringify(data)
  });
};
```

**Endpoints API :**

```typescript
// GET /api/csrf - Retourner un token
export async function GET(request: Request) {
  const sessionId = crypto.randomUUID();
  const token = generateCSRFToken();
  await storeCSRFToken(token, sessionId);
  
  return NextResponse.json({ 
    token,
    sessionId 
  });
}

// POST /api/contact - Vérifier le token
export async function POST(request: Request) {
  const token = request.headers.get('x-csrf-token');
  const sessionId = request.headers.get('x-session-id');
  
  if (!await verifyCSRFToken(token, sessionId)) {
    return NextResponse.json(
      { error: 'CSRF validation failed' },
      { status: 403 }
    );
  }
  
  // ... reste du code
}
```

---

### 3. 📊 Implémenter CAPTCHA (hCaptcha ou Turnstile)

**Option recommandée : Cloudflare Turnstile (gratuit, performant)**

#### A. Configuration Turnstile

```env
# .env
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_site_key
TURNSTILE_SECRET_KEY=your_secret_key
```

#### B. Composant React

```typescript
// src/components/ContactForm.tsx
import { Turnstile } from "@marsidev/react-turnstile";

export function ContactForm() {
  const [token, setToken] = useState<string>('');
  
  return (
    <form>
      {/* ... autres champs ... */}
      
      <Turnstile
        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
        onSuccess={(t) => setToken(t)}
      />
      
      <button type="submit" disabled={!token}>
        Envoyer
      </button>
    </form>
  );
}
```

#### C. Vérification serveur

```typescript
// src/lib/turnstile.ts
export async function verifyTurnstileToken(token: string): Promise<boolean> {
  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: JSON.stringify({
      secret: process.env.TURNSTILE_SECRET_KEY,
      response: token,
    }),
  });
  
  const data = await response.json();
  return data.success && data.score > 0.3;  // Score > 0.3 = pas un bot
}

// Dans POST /api/contact
const isValid = await verifyTurnstileToken(captchaToken);
if (!isValid) {
  return NextResponse.json(
    { error: 'CAPTCHA validation failed' },
    { status: 400 }
  );
}
```

---

### 4. 📈 Monitoring & Alertes Avancés

#### A. Logs centralisés avec loki (Docker)

```yaml
# compose.yaml
services:
  loki:
    image: grafana/loki:latest
    ports:
      - "3100:3100"
    volumes:
      - loki-data:/loki
    restart: unless-stopped

  promtail:
    image: grafana/promtail:latest
    volumes:
      - /var/log/caddy:/var/log/caddy
      - /var/lib/docker/containers:/var/lib/docker/containers:ro
    command: -config.file=/etc/promtail/config.yml

  grafana:
    image: grafana/grafana:latest
    ports:
      - "3001:3000"
    environment:
      GF_SECURITY_ADMIN_PASSWORD: ${GRAFANA_PASSWORD}
    volumes:
      - grafana-data:/var/lib/grafana
```

#### B. Alertes CrowdSec

```bash
# Configuration CrowdSec pour alertes sur /api/contact
cscli notifications add email
cscli alerts send test email
```

---

### 5. 🔐 Améliorer Sécurité Email

#### A. SPF / DKIM / DMARC

```dns
# Chez votre registrar DNS

# SPF
v=spf1 include:smtp.ionos.fr ~all

# DKIM (générer via IONOS)
default._domainkey TXT "v=DKIM1; k=rsa; p=..."

# DMARC
v=DMARC1; p=reject; rua=mailto:security@wilmoredynamics.com
```

#### B. Vérifier depuis Node.js

```bash
npm install nodemailer-check-verification
```

---

## 📊 Résumé Court Terme

| Tâche | Durée | Priorité | Impact |
|-------|-------|----------|---------|
| Vérifier CrowdSec | 30 min | 🔴 HAUTE | Détection attaques |
| Rate Limiting Caddy | 30 min | 🔴 HAUTE | Prévention DoS |
| Tester formulaire | 1h | 🔴 HAUTE | Confirmation sécurité |
| Logs Caddy avancés | 30 min | 🟠 MOYENNE | Audit trail |

**Temps total : 3-4 heures**

---

## 📊 Résumé Moyen Terme

| Tâche | Durée | Priorité | Impact |
|-------|-------|----------|---------|
| Redis Rate Limiting | 4h | 🔴 HAUTE | Scalabilité |
| CSRF Token | 3h | 🟠 MOYENNE | CSRF protection |
| CAPTCHA | 2h | 🟠 MOYENNE | Bot prevention |
| Monitoring Loki | 3h | 🟠 MOYENNE | Visibility |
| Email security (SPF/DKIM) | 1h | 🟠 MOYENNE | Email trust |

**Temps total : 13-14 heures**

---

## 🎯 Priorités Recommandées

### Semaine 1 : Court terme ✅
1. Vérifier CrowdSec (CRITIQUE)
2. Rate Limiting Caddy
3. Tester le formulaire
4. Logs avancés Caddy

### Semaine 2-3 : Moyen terme
1. Redis Rate Limiting (scalabilité)
2. CSRF Token
3. CAPTCHA Turnstile
4. SPF/DKIM/DMARC

### Semaine 4+ : Long terme
1. Monitoring centralisé
2. Alertes avancées
3. Pentest interne
4. Documentation de sécurité

---

## 🚀 Configuration Finale Proposée

Après implémentation, votre stack de sécurité sera :

```
🌐 Client (navigateur)
  ↓
🔒 Caddy (HTTPS + Rate Limit + Logs)
  ↓
🛡️ CrowdSec (Détection attaques)
  ↓
🐳 Docker Container
  ├─ Node.js/Next.js
  ├─ Redis (Rate Limiting + Sessions)
  ├─ nodemailer (SMTP sécurisé)
  └─ Healthcheck
  ↓
💾 Monitoring
  ├─ Caddy Logs (JSON)
  ├─ Loki (centralisation)
  ├─ Grafana (alertes)
  └─ CrowdSec (IDS)
```

---

**Vous pensez par où commencer ? Court terme d'abord ?**
