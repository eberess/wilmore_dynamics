# Diagnostic CrowdSec + Caddy

**Objectif :** Vérifier que CrowdSec bloque bien les attaques sur votre formulaire

---

## 🔍 Vérifications à Faire Immédiatement

### 1. Vérifier que CrowdSec est actif

```bash
# Sur le serveur CrowdSec
sudo systemctl status crowdsec

# Voir la version
sudo cscli version

# Voir les bouncers connectés
sudo cscli bouncers list
```

**Résultat attendu :**
```
[Bouncer Info]
├─ Name: caddy-bouncer (ou similar)
├─ Status: ✓ active
└─ Last Pull: just now
```

---

### 2. Vérifier que Caddy a un bouncer CrowdSec

```bash
# Voir les plugins Caddy
caddy list-modules | grep crowdsec

# Ou vérifier le Caddyfile
grep -i crowdsec /etc/caddy/Caddyfile
```

**Résultat attendu :**
- Vous devriez voir une ligne avec `crowdsec` ou un plugin `http.handlers.crowdsec`
- Si rien ne s'affiche → besoin de configurer

---

### 3. Vérifier les collections CrowdSec

```bash
# Voir les scénarios actifs
sudo cscli scenarios list

# Rechercher les scénarios applicables
sudo cscli scenarios list | grep -i "http\|api"
```

**Résultat attendu :**
```
crowdsec/http-cve-*
crowdsec/http-generic-slow
crowdsec/http-path-traversal
crowdsec/http-xss-attempt
crowdsec/http-sqli-attempt
crowdsec/http-protocol-detection
```

---

### 4. Vérifier les sources de données

```bash
# Voir ce que CrowdSec analyse
sudo cscli datasources list

# Voir la configuration de Caddy
sudo cscli datasources inspect caddy
```

**Résultat attendu :**
```
[caddy]
├─ State: enabled
├─ Source: /var/log/caddy/access.log
└─ Format: json
```

---

### 5. Checker les décisions actives

```bash
# Voir les IPs bloquées actuellement
sudo cscli decisions list

# Voir les décisions pour une durée
sudo cscli decisions list --duration 24h
```

---

## 📋 Checklist Configuration CrowdSec + Caddy

### Sur le serveur CrowdSec

- [ ] `sudo systemctl status crowdsec` = active
- [ ] `sudo cscli version` = dernière version
- [ ] `sudo cscli bouncers list` = au moins 1 bouncer actif
- [ ] `sudo cscli collections list` = collections installées
- [ ] `sudo cscli scenarios list | wc -l` = > 10 scénarios

### Configuration Caddyfile

```caddyfile
# MINIMUM requis pour CrowdSec

(log_json) {
  log {
    output file /var/log/caddy/access.log {
      roll_size 100mb
      roll_keep 10
    }
    format json
  }
}

wilmoredynamics.com {
  import log_json
  
  # Reverse proxy vers Docker
  reverse_proxy localhost:3000
}
```

- [ ] Logs Caddy en JSON
- [ ] Fichier `/var/log/caddy/access.log` existe
- [ ] CrowdSec peut lire le fichier : `sudo tail /var/log/caddy/access.log`

---

## 🧪 Tests de Sécurité

### Test 1 : Vérifier que CrowdSec détecte une tentative XSS

```bash
# Depuis votre machine (pas le serveur CrowdSec)
curl -v "https://wilmoredynamics.com/api/contact" \
  -H "Content-Type: application/json" \
  -d '{
    "firstname": "<img src=x onerror=alert(1)>",
    "lastname": "Test",
    "email": "test@test.com",
    "subject": "XSS Test",
    "message": "Test message"
  }'

# Résultat attendu: 400 Bad Request (rejeté par validation Zod)
```

**Vérifier dans CrowdSec :**
```bash
# Sur le serveur CrowdSec
sudo tail -f /var/log/crowdsec.log | grep "YOUR_IP"

# Voir les décisions
sudo cscli decisions list
```

### Test 2 : Spammer des requêtes (DoS)

```bash
# Faire 10 requêtes rapides
for i in {1..10}; do
  curl -X POST "https://wilmoredynamics.com/api/contact" \
    -H "Content-Type: application/json" \
    -d '{
      "firstname": "Test",
      "lastname": "Test",
      "email": "test@test.com",
      "subject": "Test",
      "message": "Message test"
    }'
done

# Résultat attendu: Après 5-6 requêtes, HTTP 429 Too Many Requests
```

**Vérifier dans CrowdSec :**
```bash
sudo tail -f /var/log/crowdsec.log
# Devrait détecter "http-generic-slow" ou "http-rate-limit"
```

### Test 3 : Injection SQL (même si vous n'avez pas de BD)

```bash
curl -v "https://wilmoredynamics.com/api/contact" \
  -H "Content-Type: application/json" \
  -d '{
    "firstname": "Test\" OR \"1\"=\"1",
    "lastname": "Test",
    "email": "test@test.com",
    "subject": "Test",
    "message": "Test"
  }'

# CrowdSec doit détecter le pattern SQLi
```

---

## 🛠️ Configurations Recommandées pour Caddyfile

### Configuration complète sécurisée

```caddyfile
# /etc/caddy/Caddyfile

# Logs JSON pour CrowdSec
(caddy_logs) {
  log {
    output file /var/log/caddy/access.log {
      roll_size 100mb
      roll_keep 10
      roll_keep_days 30
    }
    format json {
      "timestamp": "{ts}",
      "method": "{method}",
      "uri": "{uri}",
      "status": {status},
      "response_time": {duration},
      "user_agent": "{http.request.header.User-Agent}",
      "remote_addr": "{http.request.remote}",
      "request_id": "{http.request.header.X-Request-ID}"
    }
  }
}

# Rate limiting pour la sécurité
(rate_limit) {
  rate_limit /api/* 10/m
  rate_limit /api/contact 5/m
}

wilmoredynamics.com {
  import caddy_logs
  import rate_limit
  
  # Headers de sécurité
  header {
    X-Content-Type-Options "nosniff"
    X-Frame-Options "DENY"
    Referrer-Policy "strict-origin-when-cross-origin"
  }
  
  # Reverse proxy vers Docker
  reverse_proxy localhost:3000 {
    header_up X-Forwarded-For {http.request.remote}
    header_up X-Forwarded-Proto {scheme}
    header_up X-Real-IP {http.request.remote}
  }
  
  # Compression
  encode gzip
}
```

### Permissions des fichiers

```bash
# S'assurer que CrowdSec peut lire les logs Caddy
sudo chmod 755 /var/log/caddy
sudo chmod 644 /var/log/caddy/access.log

# Vérifier
ls -la /var/log/caddy/
# Doit afficher : -rw-r--r-- caddy caddy access.log
```

---

## 📊 Monitoring CrowdSec

### Voir les alertes en temps réel

```bash
# Suivre les attaques détectées
sudo cscli alerts list -a

# Suivre les décisions (bloques)
watch -n 5 "sudo cscli decisions list | head -20"

# Logs CrowdSec en temps réel
sudo journalctl -u crowdsec -f -n 50
```

### Exporter les métriques Prometheus

```bash
# CrowdSec expose les métriques sur :8080
curl http://localhost:8080/metrics

# Pour Grafana, ajouter datasource Prometheus
# URL: http://crowdsec:8080/metrics
```

---

## ⚠️ Problèmes Courants

### Problème 1 : CrowdSec ne bloque pas

**Diagnostic :**
```bash
# Vérifier que le bouncer est actif
sudo cscli bouncers list

# Vérifier les décisions
sudo cscli decisions list

# Vérifier les scénarios
sudo cscli scenarios list -a
```

**Solution :**
```bash
# Réinstaller le bouncer
sudo apt remove crowdsec-caddy
sudo apt install crowdsec-caddy

# Redémarrer CrowdSec
sudo systemctl restart crowdsec
sudo systemctl restart caddy
```

---

### Problème 2 : CrowdSec ne lit pas les logs Caddy

**Diagnostic :**
```bash
# Vérifier le format des logs
sudo tail /var/log/caddy/access.log | head -1

# Doit être valide JSON
sudo tail /var/log/caddy/access.log | jq . | head -20
```

**Solution :**
```bash
# Dans Caddyfile, s'assurer du format json
log {
  output file /var/log/caddy/access.log
  format json
}

# Redémarrer Caddy
sudo systemctl restart caddy

# Attendre quelques secondes et vérifier
sleep 5
sudo tail /var/log/caddy/access.log | jq .
```

---

### Problème 3 : Faux positifs (blocage légitime)

**Voir les décisions :**
```bash
sudo cscli decisions list

# Voir les détails d'une décision
sudo cscli decisions list -i YOUR_IP

# Supprimer une décision
sudo cscli decisions delete -i YOUR_IP
```

---

## 🚀 Prochaines Étapes

Après vérification, vous pouvez :

1. **Court terme (aujourd'hui)**
   - [ ] Vérifier CrowdSec actif
   - [ ] Vérifier logs Caddy en JSON
   - [ ] Tester détection XSS
   - [ ] Tester détection DoS

2. **Court terme (cette semaine)**
   - [ ] Ajouter Rate Limiting Caddy
   - [ ] Vérifier CrowdSec bloque bien
   - [ ] Configurer alertes email

3. **Moyen terme (prochaines semaines)**
   - [ ] Ajouter Redis Rate Limiting
   - [ ] Implémenter CSRF Token
   - [ ] Ajouter CAPTCHA

---

## 📞 Besoin d'Aide ?

**Questions à se poser :**
1. CrowdSec est-il sur le même serveur que Caddy ? → Oui/Non
2. Caddy a-t-il un plugin CrowdSec ? → Installez-le si non
3. Les logs Caddy sont-ils en JSON ? → Vérifiez le format

**Si vous n'êtes pas sûr, exécutez ceci :**
```bash
# Script de diagnostic complet
curl https://raw.githubusercontent.com/crowdsecurity/crowdsec/master/scripts/dashboard.sh | bash
```

---

**Vous pouvez me partager les résultats de ces vérifications pour que je vous aide à corriger ?**
