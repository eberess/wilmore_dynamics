# Politique de Sécurité - Wilmore Dynamics

## 🔒 Mesures de Sécurité Implémentées

### 1. Protection contre l'Injection HTML/XSS

**Problème :** Les données utilisateur n'étaient pas échappées dans les templates d'email.

**Solution Implémentée :**
- Utilisation de la bibliothèque `html-entities` pour un échappement robuste
- Toutes les données utilisateur sont échappées avant insertion dans le HTML
- Protection contre les attaques XSS, injection HTML, et autres attaques par injection

```typescript
import { escapeHtml } from 'html-entities';
const escapedData = escapeHtml(userInput);
```

### 2. Validation des Données avec Zod

**Problème :** Absence de validation stricte des données POST.

**Solution Implémentée :**
- Schéma de validation Zod pour tous les champs
- Validation des longueurs pour éviter les DoS
- Validation du format email RFC
- Validation des énums (type de collectivité)
- Regex de validation pour les numéros de téléphone

```typescript
const ContactFormSchema = z.object({
  firstname: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(254),
  message: z.string().trim().min(10).max(5000),
  // ... autres validations
});
```

### 3. Suppression de l'Exposition des Secrets

**Problème :** Les variables d'environnement (identifiants SMTP) étaient exposées en logs.

**Solution Implémentée :**
- Suppression complète des logs exposant les secrets
- Gestion d'erreurs robuste sans exposition de détails sensibles
- Logs génériques en production

### 4. Headers de Sécurité

**Implémentation :**
- `X-Content-Type-Options: nosniff` - Prévient la détection MIME
- `X-Frame-Options: DENY` - Prévient le clickjacking
- `X-XSS-Protection: 1; mode=block` - Protection XSS du navigateur
- `Referrer-Policy: strict-origin-when-cross-origin` - Contrôle du referrer
- `Strict-Transport-Security` - Force HTTPS
- `Content-Security-Policy` - Politique de sécurité stricte

### 5. Conteneurs Docker Sécurisés

**Implémentation :**
- Image minimale `node:24-alpine3.21`
- Installation des patches de sécurité
- Utilisateur non-root (uid: 1001)
- Système de fichiers en lecture seule sauf `/app/.next` et `/tmp`
- `dumb-init` pour une gestion correcte des signaux
- Limite des ressources CPU et mémoire

### 6. Configuration Docker Compose Sécurisée

**Implémentation :**
- `no-new-privileges:true` - Prévient l'escalade de privilèges
- `read_only: true` - Système de fichiers en lecture seule
- Politique de redémarrage `on-failure:5`
- Limites de ressources
- Healthcheck configuré
- Logs limités en taille

### 7. Validation des Requêtes

**Implémentation :**
- Parsing JSON sécurisé avec gestion d'erreurs
- Rate limiting basique
- Rejet des requêtes malformées
- Validation CSRF implicite (POST uniquement)

---

## 🚀 Recommandations Supplémentaires

### À Court Terme
1. **Renouveler les identifiants SMTP** - Le mot de passe a été exposé dans les logs
2. **Implémenter un WAF** - Web Application Firewall
3. **Auditer les logs de production** - Détecter les accès suspects
4. **Activer HTTPS/TLS** - En production

### À Moyen Terme
1. **Rate Limiting Avancé** - Redis + middleware rate limiting
2. **CSRF Token** - Pour les formulaires
3. **Authentification CAPTCHA** - Sur le formulaire de contact
4. **Monitoring de sécurité** - Alertes sur comportements suspects
5. **Audit de sécurité régulier** - Pentest annuel

### À Long Terme
1. **Certificat SSL/TLS** avec renouvellement automatique
2. **Logs centralisés** avec ELK ou Splunk
3. **Reverse proxy** (Nginx/Caddy) avec configurations de sécurité
4. **Système de déploiement sécurisé** avec vérification des signatures
5. **Programme de bug bounty** - Pour les chercheurs en sécurité

---

## 📋 Checklist de Sécurité

- ✅ Injection HTML/XSS - Corrigé
- ✅ Exposition secrets - Corrigé
- ✅ Validation données - Ajoutée
- ✅ Headers de sécurité - Implémentés
- ✅ Docker sécurisé - Configuré
- ✅ Gestion d'erreurs - Améliorée
- ✅ Rate limiting basique - Implémenté
- ⏳ WAF - À implémenter
- ⏳ HTTPS - À configurer
- ⏳ Monitoring - À mettre en place

---

## 🔐 Variables d'Environnement Obligatoires

```bash
# SMTP Configuration
SMTP_HOST=smtp.example.com
SMTP_PORT=465
SMTP_USER=user@example.com
SMTP_PASS=your-secure-password
SMTP_FROM=sender@example.com
SMTP_TLS=true
SMTP_SECURE=true

# Application
CONTACT_EMAIL=contact@wilmoredynamics.com
NODE_APP_PORT=3000
NODE_ENV=production

# Analytics (optionnel)
UMAMI_WEBSITE_ID=your-id
UMAMI_SCRIPT_URL=https://umami.example.com/script.js
```

**⚠️ IMPORTANT :** Ne jamais committer le fichier `.env` - Ajouter `.env` au `.gitignore`

---

## 📞 Signaler une Vulnérabilité

Si vous découvrez une vulnérabilité de sécurité, contactez immédiatement :
- Email : security@wilmoredynamics.com
- Ne pas publier la vulnérabilité publiquement

---

## Références de Sécurité

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [CWE/SANS Top 25](https://cwe.mitre.org/top25/)
- [Node.js Security Checklist](https://nodejs.org/en/docs/guides/security/)
- [Docker Security Best Practices](https://docs.docker.com/engine/security/)
- [Next.js Security](https://nextjs.org/docs/basic-features/environment-variables)

---

Dernière mise à jour : 2026-01-26
