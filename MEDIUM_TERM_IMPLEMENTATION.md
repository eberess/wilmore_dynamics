# Guide d'Implémentation - Moyen Terme

## ✅ Prérequis Installés

```bash
✅ html-entities     # Échappement HTML
✅ zod               # Validation schema
✅ ioredis           # Client Redis
✅ Redis 7-alpine    # Cache + sessions (Docker)
```

---

## 📦 Fichiers Créés pour Moyen Terme

### 1. **Librairies de Sécurité**
- `src/lib/rateLimit.ts` - Rate limiting distribué avec Redis
- `src/lib/csrf.ts` - Gestion CSRF tokens avec Redis

### 2. **Endpoints API**
- `src/app/api/csrf/route.ts` - GET /api/csrf pour générer tokens
- `src/app/api/contact/route.ts` - POST amélioré avec CSRF + rate limit

### 3. **Infrastructure**
- `compose.yaml` - Redis service ajouté
- `.env.example` - Configuration Redis

---

## 🚀 Implémentation du Formulaire (React)

### Étape 1 : Mettre à jour le composant ContactForm

**Fichier : `src/components/ContactForm.tsx`**

```typescript
'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const contactSchema = z.object({
  firstname: z.string().min(1, 'Prénom requis'),
  lastname: z.string().min(1, 'Nom requis'),
  email: z.string().email('Email invalide'),
  subject: z.string().min(1, 'Sujet requis'),
  message: z.string().min(10, 'Message trop court'),
  collectivite: z.string().optional(),
  type: z.enum(['commune', 'epci', 'autre']).optional(),
  taille: z.string().optional(),
  fonction: z.string().optional(),
  telephone: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [csrfToken, setCSRFToken] = useState<string>('');
  const [sessionId, setSessionId] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [retryAfter, setRetryAfter] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  // Récupérer un nouveau token CSRF au chargement
  useEffect(() => {
    const getCsrfToken = async () => {
      try {
        const response = await fetch('/api/csrf');
        if (!response.ok) throw new Error('Failed to get CSRF token');
        const { sessionId: sid, token } = await response.json();
        setSessionId(sid);
        setCSRFToken(token);
      } catch (error) {
        console.error('Error fetching CSRF token:', error);
        setErrorMessage('Erreur de sécurité. Veuillez rafraîchir la page.');
      }
    };

    getCsrfToken();
  }, []);

  // Soumettre le formulaire
  const onSubmit = async (data: ContactFormData) => {
    if (!csrfToken || !sessionId) {
      setErrorMessage('Erreur de sécurité. Veuillez réessayer.');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          sessionId,
          csrfToken,
        }),
      });

      // Récupérer les headers de rate limit
      const remaining = response.headers.get('X-RateLimit-Remaining');
      const limit = response.headers.get('X-RateLimit-Limit');

      if (!response.ok) {
        if (response.status === 429) {
          const retryAfterHeader = response.headers.get('Retry-After');
          const seconds = retryAfterHeader ? parseInt(retryAfterHeader) : 60;
          setRetryAfter(seconds);
          setErrorMessage(
            `Trop de requêtes. Réessayez dans ${seconds} secondes.`
          );
          
          // Countdown du retry-after
          const interval = setInterval(() => {
            setRetryAfter((prev) => {
              if (prev === null || prev <= 1) {
                clearInterval(interval);
                return null;
              }
              return prev - 1;
            });
          }, 1000);
        } else if (response.status === 403) {
          setErrorMessage('Validation de sécurité échouée. Veuillez réessayer.');
          // Récupérer un nouveau token CSRF
          const csrfResponse = await fetch('/api/csrf');
          if (csrfResponse.ok) {
            const { sessionId: sid, token } = await csrfResponse.json();
            setSessionId(sid);
            setCSRFToken(token);
          }
        } else {
          const errorData = await response.json();
          setErrorMessage(
            errorData.error || 'Une erreur est survenue. Veuillez réessayer.'
          );
        }
      } else {
        setSuccessMessage('Message envoyé avec succès ! Nous vous répondrons bientôt.');
        reset();
        
        // Afficher les informations de rate limit
        if (remaining && limit) {
          console.log(
            `Rate limit: ${remaining}/${limit} requêtes restantes`
          );
        }

        // Récupérer un nouveau token CSRF pour le prochain message
        const csrfResponse = await fetch('/api/csrf');
        if (csrfResponse.ok) {
          const { sessionId: sid, token } = await csrfResponse.json();
          setSessionId(sid);
          setCSRFToken(token);
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage('Erreur réseau. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  const isRetryDisabled = retryAfter !== null && retryAfter > 0;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Messages de statut */}
      {successMessage && (
        <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-400">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400">
          {errorMessage}
        </div>
      )}

      {/* Champs du formulaire */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Prénom</label>
          <input
            type="text"
            placeholder="Votre prénom"
            {...register('firstname')}
            disabled={isLoading || isRetryDisabled}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          />
          {errors.firstname && (
            <span className="text-sm text-red-500">{errors.firstname.message}</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Nom</label>
          <input
            type="text"
            placeholder="Votre nom"
            {...register('lastname')}
            disabled={isLoading || isRetryDisabled}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          />
          {errors.lastname && (
            <span className="text-sm text-red-500">{errors.lastname.message}</span>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          placeholder="votre@email.com"
          {...register('email')}
          disabled={isLoading || isRetryDisabled}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        />
        {errors.email && (
          <span className="text-sm text-red-500">{errors.email.message}</span>
        )}
      </div>

      {/* Sujet */}
      <div>
        <label className="block text-sm font-medium mb-2">Sujet</label>
        <input
          type="text"
          placeholder="Sujet du message"
          {...register('subject')}
          disabled={isLoading || isRetryDisabled}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        />
        {errors.subject && (
          <span className="text-sm text-red-500">{errors.subject.message}</span>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium mb-2">Message</label>
        <textarea
          placeholder="Votre message..."
          rows={5}
          {...register('message')}
          disabled={isLoading || isRetryDisabled}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed resize-none"
        />
        {errors.message && (
          <span className="text-sm text-red-500">{errors.message.message}</span>
        )}
      </div>

      {/* Champs optionnels */}
      <details className="text-sm">
        <summary className="cursor-pointer font-medium">
          Informations additionnelles (optionnel)
        </summary>
        <div className="mt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Collectivité</label>
            <input
              type="text"
              placeholder="Nom de la collectivité"
              {...register('collectivite')}
              disabled={isLoading || isRetryDisabled}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Type</label>
            <select
              {...register('type')}
              disabled={isLoading || isRetryDisabled}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg"
            >
              <option value="">Sélectionner...</option>
              <option value="commune">Commune</option>
              <option value="epci">EPCI</option>
              <option value="autre">Autre</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Fonction</label>
            <input
              type="text"
              placeholder="Votre fonction"
              {...register('fonction')}
              disabled={isLoading || isRetryDisabled}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Téléphone</label>
            <input
              type="tel"
              placeholder="Votre numéro"
              {...register('telephone')}
              disabled={isLoading || isRetryDisabled}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg"
            />
          </div>
        </div>
      </details>

      {/* Bouton submit */}
      <button
        type="submit"
        disabled={isLoading || isRetryDisabled || !csrfToken}
        className="w-full px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium rounded-lg transition-colors disabled:cursor-not-allowed"
      >
        {isLoading && 'Envoi en cours...'}
        {isRetryDisabled && `Réessayez dans ${retryAfter}s`}
        {!isLoading && !isRetryDisabled && 'Envoyer le message'}
      </button>

      {/* Token CSRF caché (pour débogage) */}
      <input type="hidden" name="sessionId" value={sessionId} />
      <input type="hidden" name="csrfToken" value={csrfToken} />
    </form>
  );
}
```

---

## 🧪 Tester l'Implémentation

### 1. Démarrer Redis + Application

```bash
# Vérifier que .env est correctement configuré
cat .env | grep REDIS

# Démarrer les services
docker-compose up -d

# Vérifier que Redis est actif
docker-compose exec redis redis-cli -a YOUR_PASSWORD ping
# Résultat attendu: PONG
```

### 2. Tester les Endpoints

```bash
# Test 1: Récupérer un token CSRF
curl -X GET http://localhost:3000/api/csrf
# Résultat: {"sessionId":"...", "token":"..."}

# Test 2: Soumettre le formulaire avec CSRF
CSRF_RESPONSE=$(curl -X GET http://localhost:3000/api/csrf)
SESSION_ID=$(echo $CSRF_RESPONSE | jq -r '.sessionId')
CSRF_TOKEN=$(echo $CSRF_RESPONSE | jq -r '.token')

curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "firstname": "Test",
    "lastname": "User",
    "email": "test@example.com",
    "subject": "Test",
    "message": "Test message content here",
    "sessionId": "'$SESSION_ID'",
    "csrfToken": "'$CSRF_TOKEN'"
  }'
# Résultat attendu: 200 OK avec "Message envoyé avec succès"

# Test 3: Rate limiting (5 req/min)
for i in {1..10}; do
  curl -X POST http://localhost:3000/api/contact \
    -H "Content-Type: application/json" \
    -d '{"firstname":"Test",...}' 
done
# Après 5 requêtes: 429 Too Many Requests
```

### 3. Vérifier Redis

```bash
# Entrer dans le shell Redis
docker-compose exec redis redis-cli -a YOUR_PASSWORD

# Voir les clés stockées
KEYS *

# Exemple de résultats:
# 1) "ratelimit:127.0.0.1:contact"  (rate limit)
# 2) "csrf:uuid-here"                (CSRF token)
# 3) "suspicious:127.0.0.1"          (activités suspectes)

# Voir le contenu d'une clé CSRF
GET csrf:uuid-here
# Résultat: {"token":"...","createdAt":1234567890,"expiresAt":1234571490}

# Voir le TTL
TTL csrf:uuid-here
# Résultat: 3599 (secondes restantes)
```

---

## 📋 Checklist Moyen Terme

### Court terme (déjà fait) ✅
- [x] HTML-entities pour XSS
- [x] Zod pour validation
- [x] Suppression des logs secrets
- [x] Headers de sécurité
- [x] Docker sécurisé

### Moyen terme (juste implémenté)
- [x] Redis installé (Docker)
- [x] Rate limiting distribué
- [x] CSRF token protection
- [x] Endpoints API améliorés
- [x] Formulaire React avec CSRF
- [ ] Tests complets
- [ ] Déploiement en production

### Moyen terme (prochaines étapes)
- [ ] CAPTCHA Turnstile
- [ ] Monitoring Loki/Grafana
- [ ] SPF/DKIM/DMARC email
- [ ] Alertes CrowdSec avancées

---

## 🚀 Déployer en Production

### 1. Générer des variables sécurisées

```bash
# Générer Redis password fort
openssl rand -hex 32

# Mettre à jour .env
cat >> .env << EOF
REDIS_PASSWORD=your-generated-password-here
EOF

# IMPORTANT: Vérifier que .env n'est pas commité
git check-ignore .env
```

### 2. Redémarrer les services

```bash
# Arrêter les services
docker-compose down

# Démarrer avec la nouvelle configuration
docker-compose up -d

# Vérifier que tout fonctionne
docker-compose logs -f wilmore
```

### 3. Vérifier la sécurité

```bash
# Tester le formulaire
curl -X POST https://wilmoredynamics.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{...}'

# Vérifier les logs
docker-compose logs wilmore

# Vérifier Redis
docker-compose exec redis redis-cli -a PASSWORD ping
```

---

## 🎯 Prochaine Phase : CAPTCHA

Pour l'étape suivante, installer Turnstile :

```bash
npm install @marsidev/react-turnstile

# Ajouter à .env
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_site_key
TURNSTILE_SECRET_KEY=your_secret_key
```

---

**Vous êtes prêt à implémenter !** 🚀

Des questions sur la configuration Redis ou le composant React ?
