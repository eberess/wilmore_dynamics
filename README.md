# 🚀 Wilmore Dynamics - Site Web Officiel

Ce dépôt contient le code source du site web de Wilmore Dynamics, l'entreprise spécialisée dans le développement de logiciels et de services open-source.

---

## 🌟 Mission Open Source

Chez Wilmore Dynamics, nous croyons au partage et à la transparence. Ce site est lui-même un projet open source, et nous encourageons la communauté à l'examiner, à signaler des problèmes ou à proposer des améliorations.

---

## 📦 Prérequis

Assurez-vous que les logiciels suivants sont installés sur votre machine :

* **Docker et Docker Compose**
* **Git**

---

## 📂 Structure du Projet

Le site web est une application Next.js conteneurisée, construite selon l'architecture suivante :

* **compose.yaml** : Configuration Docker Compose pour le déploiement
* **.env** : Variables d'environnement (à créer depuis .env.example)
* **src/** : Code source de l'application Next.js
* **src/Dockerfile** : Instructions de construction de l'image Docker
* **package.json** : Dépendances et scripts npm

---

## ⚙️ Configuration

### Variables d'environnement

Le projet nécessite un serveur SMTP pour le formulaire de contact. Créez un fichier `.env` à la racine du projet avec les variables suivantes :

```env
# Configuration SMTP (obligatoire pour le formulaire de contact)
SMTP_HOST=votre-serveur-smtp.com
SMTP_PORT=465
SMTP_USER=votre-email@domaine.com
SMTP_PASS=votre-mot-de-passe
SMTP_FROM=votre-email@domaine.com
CONTACT_EMAIL=email-de-reception@domaine.com
SMTP_TLS=true
SMTP_SECURE=true

# Configuration de l'application
NODE_APP_PORT=3000
```

**⚠️ Important :** Ne jamais commiter le fichier `.env` dans le dépôt Git. Il contient des informations sensibles.

---

## 🚀 Installation et Démarrage

### 1. Cloner le projet
```bash
git clone https://github.com/votre-username/wilmore-dynamics.git
cd wilmore-dynamics
```

### 2. Configuration
```bash
# Copier le fichier d'exemple des variables d'environnement
cp .env.example .env

# Éditer le fichier .env avec vos propres valeurs
nano .env
```

### 3. Lancement avec Docker
```bash
# Construction et démarrage du conteneur
docker-compose up --build

# Ou en arrière-plan
docker-compose up -d --build
```

Le site sera accessible sur `http://localhost:3000`

### 4. Développement local (optionnel)
Si vous préférez développer sans Docker :

```bash
# Installation des dépendances
npm install

# Démarrage en mode développement
npm run dev
```

---

## 🛠️ Scripts Disponibles

* `npm run dev` : Démarrage en mode développement
* `npm run build` : Construction pour la production
* `npm run start` : Démarrage en mode production
* `npm run lint` : Vérification du code avec ESLint

---

## 📧 Fonctionnalités

### Formulaire de Contact
Le site inclut un formulaire de contact fonctionnel qui :
- Envoie les messages à l'équipe via SMTP
- Envoie une confirmation automatique à l'expéditeur
- Inclut une protection anti-spam (délai entre les envois)
- Valide les données côté client et serveur

### Pages Principales
- **Accueil** : Présentation de l'entreprise
- **Services** : Détail des services proposés
- **Communes** : Solutions dédiées aux collectivités
- **Contact** : Formulaire de contact et informations

---

## 🛑 Arrêter et Nettoyer

Pour arrêter les conteneurs :
```bash
docker-compose down
```
Pour nettoyer les volumes et les réseaux :
```bash
docker-compose down -v
```

--- 

## ⚖️ Licence et Attribution

Ce projet est sous licence MIT. Bien que l'attribution ne soit pas une obligation légale, nous encourageons la citation de ce dépôt si vous utilisez notre architecture ou nos composants dans votre propre travail.

* Lien du Dépôt : https://github.com/eberess/wilmore_dynamics.git

---

## 📧 Contact

Pour les questions liées à ce code ou aux contributions :

* **Problèmes/Bugs** : Créez une nouvelle "Issue" dans ce dépôt.

* **Email** : [Contact](mailto:contact@wilmoredynamics.com)

* **LinkedIn** : [LinkedIn](https://www.linkedin.com/in/el-beressa/)

