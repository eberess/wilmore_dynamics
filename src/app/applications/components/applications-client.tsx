"use client";

import Section from "@/components/Section";
import Image from "next/image";
import { useState } from 'react';
import { ApplicationModal } from "./application-modal";
import type { Application } from "../types";

// Types et données des applications
type Category = 'Toutes' | 'Infrastructure' | 'Collaboration' | 'Productivité' | 'Marketing' | 'Automatisation' | 'Gestion'  | 'Sécurité' | 'Média';
type SortOption = 'recent' | 'popular' | 'name';

const categories: Category[] = ['Toutes', 'Infrastructure', 'Collaboration', 'Productivité', 'Marketing', 'Automatisation', 'Gestion','Sécurité', 'Média'];

const applications = [
  {
    name: "Proxmox",
    tagline: "Virtualisation open source puissante",
    description: "Plateforme de virtualisation complète pour le datacenter, combinant virtualisation KVM et conteneurs. Proxmox VE inclut une interface web pour une gestion facile de vos machines virtuelles, stockage, réseau et haute disponibilité.",
    category: "Infrastructure",
    image: "/apps/proxmox.svg",
    bgColor: "from-orange-500/5 to-red-500/5",
    highlights: [
      { title: "Virtualisation KVM" },
      { title: "Conteneurs LXC" },
      { title: "Haute disponibilité" }
    ],
    technologies: ["KVM", "LXC", "ZFS", "Ceph", "Debian"],
    alternatives: ["VMware", "Hyper-V"]
  },
  {
    name: "Element",
    tagline: "Messagerie sécurisée et décentralisée",
    description: "Client Matrix élégant pour une communication sécurisée et décentralisée. Profitez du chiffrement de bout en bout, des salons publics/privés, et d'une collaboration en temps réel sans compromettre votre vie privée.",
    category: "Collaboration",
    image: "/apps/element.svg",
    bgColor: "from-green-500/5 to-emerald-500/5",
    highlights: [
      { title: "Chiffrement E2E" },
      { title: "Fédération Matrix" },
      { title: "Multi-plateformes" }
    ],
    technologies: ["Matrix", "React", "TypeScript", "WebRTC", "Rust"],
    alternatives: ["Slack", "Microsoft Teams", "Discord"]
  },
  {
    name: "Gitea",
    tagline: "Forge Git légère et puissante",
    description: "Alternative Git auto-hébergée légère et performante. Gitea offre toutes les fonctionnalités essentielles pour la gestion de code : repositories, issues, pull requests, et plus encore, le tout avec une empreinte système minimale.",
    category: "Productivité",
    image: "/applications/gitea.svg",
    bgColor: "from-teal-500/5 to-green-500/5",
    highlights: [
      { title: "Installation facile" },
      { title: "Faible consommation" },
      { title: "Compatible GitHub" }
    ],
    technologies: ["Go", "Vue.js", "PostgreSQL", "Git"],
    alternatives: ["GitHub", "Bitbucket"]
  },
  {
    name: "Matomo",
    tagline: "Analytics respectueux de la vie privée",
    description: "Alternative éthique à Google Analytics. Matomo vous offre des analyses web complètes tout en respectant la vie privée de vos utilisateurs et en gardant le contrôle total de vos données.",
    category: "Marketing",
    image: "/apps/matomo.svg",
    bgColor: "from-purple-500/5 to-indigo-500/5",
    highlights: [
      { title: "RGPD compatible" },
      { title: "Données en propriété" },
      { title: "Analyses avancées" }
    ],
    technologies: ["PHP", "MySQL", "Vue.js", "GeoIP", "Redis"],
    alternatives: ["Google Analytics", "Adobe Analytics"]
  },
  {
    name: "Nextcloud",
    tagline: "Votre cloud privé tout-en-un",
    description: "Solution cloud complète pour héberger vos fichiers, calendriers, contacts et plus encore. Nextcloud vous offre un contrôle total sur vos données avec une interface moderne et des fonctionnalités collaboratives avancées.",
    category: "Collaboration",
    image: "/applications/nextcloud.svg",
    bgColor: "from-blue-500/5 to-sky-500/5",
    highlights: [
      { title: "Stockage sécurisé" },
      { title: "Collaboration en temps réel" },
      { title: "Apps intégrées" }
    ],
    technologies: ["PHP", "MySQL", "Redis", "JavaScript", "WebDAV"],
    alternatives: ["Google Drive", "Dropbox", "OneDrive"]
  },
  {
    name: "n8n",
    tagline: "Automatisation de workflow puissante",
    description: "Plateforme d'automatisation extensible pour connecter vos applications et données. Créez des workflows complexes avec une interface visuelle intuitive et plus de 200 intégrations prêtes à l'emploi.",
    category: "Automatisation",
    image: "/apps/n8n.svg",
    bgColor: "from-emerald-500/5 to-teal-500/5",
    highlights: [
      { title: "Interface visuelle" },
      { title: "200+ intégrations" },
      { title: "Self-hosted" }
    ],
    technologies: ["Node.js", "TypeScript", "Vue.js", "PostgreSQL"],
    alternatives: ["Zapier", "Make", "IFTTT"]
  },
  {
    name: "Authentik",
    tagline: "Gestion d'identité moderne",
    description: "Solution IAM (Identity and Access Management) flexible et moderne. Authentik centralise l'authentification de vos applications avec le SSO, le MFA, et des politiques d'accès granulaires.",
    category: "Gestion",
    image: "/apps/authentik.svg",
    bgColor: "from-indigo-500/5 to-violet-500/5",
    highlights: [
      { title: "SSO / SAML2" },
      { title: "MFA intégré" },
      { title: "Politiques flexibles" }
    ],
    technologies: ["Python", "Django", "PostgreSQL", "Redis", "Docker"],
    alternatives: ["Okta", "Auth0", "Azure AD"]
  },
  {
    name: "Paperless-ngx",
    tagline: "Gestion documentaire intelligente",
    description: "Solution de gestion documentaire moderne et efficace. Paperless-ngx numérise, classe et indexe automatiquement vos documents papier pour une recherche instantanée et une organisation optimale.",
    category: "Productivité",
    image: "/applications/paperless-ngx.svg",
    bgColor: "from-cyan-500/5 to-teal-500/5",
    highlights: [
      { title: "OCR multilingue" },
      { title: "Classification auto" },
      { title: "API complète" }
    ],
    technologies: ["Python", "Django", "PostgreSQL", "Tesseract"],
    alternatives: ["Evernote", "Microsoft SharePoint", "Nuxeo"]
  },
  {
    name: "Rocket.Chat",
    tagline: "Communication d'équipe sécurisée",
    description: "Plateforme de communication collaborative open source. Rocket.Chat combine messagerie instantanée, vidéoconférence et partage de fichiers dans une interface moderne et personnalisable.",
    category: "Collaboration",
    image: "/applications/rocket-chat.svg",
    bgColor: "from-red-500/5 to-pink-500/5",
    highlights: [
      { title: "Chat en temps réel" },
      { title: "Vidéoconférence" },
      { title: "Hautement personnalisable" }
    ],
    technologies: ["Node.js", "MongoDB", "React", "WebRTC"]
  },
  {
    name: "Discourse",
    tagline: "Forum moderne et communauté",
    description: "Plateforme de discussion moderne pour construire une communauté engagée. Discourse offre un forum intelligent avec des fonctionnalités avancées comme la catégorisation, les badges, et une modération efficace.",
    category: "Collaboration",
    image: "/apps/discourse.svg",
    bgColor: "from-pink-500/5 to-rose-500/5",
    highlights: [
      { title: "Discussions structurées" },
      { title: "Modération avancée" },
      { title: "Gamification intégrée" }
    ],
    technologies: ["Ruby", "Rails", "PostgreSQL", "Redis", "Ember.js"],
    alternatives: ["Vanilla Forums", "Khoros", "Tribe"]
  },
  {
    name: "Umami",
    tagline: "Analytics minimaliste et privé",
    description: "Alternative légère et respectueuse de la vie privée à Google Analytics. Umami vous offre des statistiques web essentielles sans compromettre les performances de votre site ou la confidentialité de vos visiteurs.",
    category: "Marketing",
    image: "/applications/umami.svg",
    bgColor: "from-violet-500/5 to-purple-500/5",
    highlights: [
      { title: "Sans cookies" },
      { title: "Interface épurée" },
      { title: "Installation simple" }
    ],
    technologies: ["Next.js", "PostgreSQL", "Chart.js", "TypeScript"],
    alternatives: ["Google Analytics", "Plausible", "Fathom"]
  },
  {
    name: "Mattermost",
    tagline: "Communication sécurisée pour les équipes",
    description: "Plateforme de collaboration open source pour les équipes exigeantes. Mattermost combine messagerie, partage de fichiers et intégrations dans un environnement hautement sécurisé et personnalisable.",
    category: "Collaboration",
    image: "/apps/mattermost.svg",
    bgColor: "from-blue-500/5 to-indigo-500/5",
    highlights: [
      { title: "Messagerie sécurisée" },
      { title: "Intégrations DevOps" },
      { title: "Déploiement flexible" }
    ],
    technologies: ["Go", "React", "PostgreSQL", "ElasticSearch"],
    alternatives: ["Slack", "Microsoft Teams", "Discord"]
  },
  {
    name: "Draw.io",
    tagline: "Diagrammes et schémas professionnels",
    description: "Outil de création de diagrammes complet et intuitif. Draw.io vous permet de créer des schémas, organigrammes et wireframes avec une interface intuitive et de nombreuses bibliothèques de formes.",
    category: "Productivité",
    image: "/apps/drawio.svg",
    bgColor: "from-orange-500/5 to-amber-500/5",
    highlights: [
      { title: "Bibliothèques riches" },
      { title: "Export multiple" },
      { title: "Collaboration temps réel" }
    ],
    technologies: ["JavaScript", "mxGraph", "Electron"],
    alternatives: ["Lucidchart", "Visio", "Miro"]
  },
  {
    name: "Docusaurus",
    tagline: "Documentation moderne et évolutive",
    description: "Générateur de sites de documentation optimisé pour les développeurs. Docusaurus transforme vos fichiers Markdown en un site web moderne avec recherche intégrée, versioning et internationalisation.",
    category: "Productivité",
    image: "/applications/docusaurus.svg",
    bgColor: "from-green-500/5 to-teal-500/5",
    highlights: [
      { title: "MDX Support" },
      { title: "Versioning intégré" },
      { title: "Déploiement facile" }
    ],
    technologies: ["React", "Node.js", "MDX", "TypeScript"],
    alternatives: ["GitBook", "ReadTheDocs", "Confluence"]
  },
  {
    name: "Wiki.js",
    tagline: "Wiki moderne et performant",
    description: "La plateforme wiki la plus puissante et extensible. Wiki.js offre une expérience de documentation collaborative avec éditeur WYSIWYG, gestion des droits avancée et de nombreuses options de stockage.",
    category: "Collaboration",
    image: "/apps/wikijs.svg",
    bgColor: "from-blue-500/5 to-indigo-500/5",
    highlights: [
      { title: "Éditeur visuel" },
      { title: "Multi-stockage" },
      { title: "API GraphQL" }
    ],
    technologies: ["Node.js", "Vue.js", "PostgreSQL", "GraphQL"],
    alternatives: ["Confluence", "MediaWiki", "Notion"]
  },
  {
    name: "Excalidraw",
    tagline: "Tableaux blancs collaboratifs",
    description: "Outil de dessin minimaliste pour créer des diagrammes qui ressemblent à des croquis. Excalidraw est parfait pour les brainstormings, les architectures et les présentations avec un style unique.",
    category: "Productivité",
    image: "/apps/excalidraw.webp",
    bgColor: "from-purple-500/5 to-pink-500/5",
    highlights: [
      { title: "Style main levée" },
      { title: "Collaboration live" },
      { title: "Export multiple" }
    ],
    technologies: ["React", "TypeScript", "WebRTC", "Canvas"],
    alternatives: ["Miro", "FigJam", "Whimsical"]
  },
  {
    name: "Papermark",
    tagline: "Partage de documents intelligent",
    description: "Solution moderne pour partager et suivre vos documents professionnels. Papermark vous permet de savoir quand et comment vos documents sont consultés, avec des analyses détaillées et un contrôle d'accès granulaire.",
    category: "Productivité",
    image: "/applications/papermark.svg",
    bgColor: "from-yellow-500/5 to-amber-500/5",
    highlights: [
      { title: "Analytics avancés" },
      { title: "Contrôle d'accès" },
      { title: "Personnalisation" }
    ],
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
    alternatives: ["DocSend", "PandaDoc", "DocuSign"]
  },
  {
    name: "Penpot",
    tagline: "Design et prototypage open source",
    description: "Premier outil de design et prototypage open source pour les équipes produit. Penpot est basé sur les standards du web et permet une collaboration fluide entre designers et développeurs.",
    category: "Productivité",
    image: "/applications/penpot.svg",
    bgColor: "from-rose-500/5 to-red-500/5",
    highlights: [
      { title: "Format SVG natif" },
      { title: "Multi-plateforme" },
      { title: "Design Systems" }
    ],
    technologies: ["Clojure", "ClojureScript", "PostgreSQL", "SVG"],
    alternatives: ["Figma", "Adobe XD", "Sketch"]
  },
  {
    name: "Invoice Ninja",
    tagline: "Facturation professionnelle gratuite",
    description: "Solution complète de facturation et gestion financière. Invoice Ninja automatise vos factures, devis et paiements avec un design professionnel et des fonctionnalités avancées de personnalisation et de suivi.",
    category: "Gestion",
    image: "/applications/invoice-ninja.svg",
    bgColor: "from-purple-500/5 to-indigo-500/5",
    highlights: [
      { title: "Factures personnalisables" },
      { title: "Paiements en ligne" },
      { title: "Suivi des dépenses" }
    ],
    technologies: ["PHP", "Laravel", "Vue.js", "MySQL"],
    alternatives: ["Freshbooks", "QuickBooks", "Zoho Invoice"]
  },
  {
    name: "Listmonk",
    tagline: "Emailing moderne et performant",
    description: "Plateforme d'email marketing auto-hébergée haute performance. Listmonk offre une interface moderne pour gérer vos listes, créer des campagnes et analyser vos résultats, le tout en respectant la vie privée.",
    category: "Marketing",
    image: "/apps/listmonk.webp",
    bgColor: "from-emerald-500/5 to-green-500/5",
    highlights: [
      { title: "Haute délivrabilité" },
      { title: "Templates drag & drop" },
      { title: "Analytics détaillés" }
    ],
    technologies: ["Go", "PostgreSQL", "React", "Redis"],
    alternatives: ["Mailchimp", "Sendinblue", "Campaign Monitor"]
  },
  {
    name: "NetBird",
    tagline: "VPN nouvelle génération",
    description: "Solution VPN moderne basée sur WireGuard. NetBird simplifie la gestion de votre réseau privé avec une configuration automatique, une interface intuitive et des performances optimales.",
    category: "Infrastructure",
    image: "/applications/netbird.svg",
    bgColor: "from-sky-500/5 to-blue-500/5",
    highlights: [
      { title: "Configuration auto" },
      { title: "Basé sur WireGuard" },
      { title: "Multi-cloud" }
    ],
    technologies: ["Go", "WireGuard", "WebRTC", "SQLite"],
    alternatives: ["Tailscale", "ZeroTier", "OpenVPN"]
  },
  {
    name: "Coolify",
    tagline: "Déploiement simplifié",
    description: "Alternative open source à Heroku et Netlify. Coolify vous permet de déployer vos applications, bases de données et services en quelques clics sur votre propre infrastructure.",
    category: "Infrastructure",
    image: "/applications/coolify.svg",
    bgColor: "from-cyan-500/5 to-teal-500/5",
    highlights: [
      { title: "One-click deploy" },
      { title: "Auto-scaling" },
      { title: "Monitoring intégré" }
    ],
    technologies: ["Node.js", "Docker", "Vue.js", "PostgreSQL"],
    alternatives: ["Heroku", "Netlify", "DigitalOcean App Platform"]
  },
  {
    name: "Documenso",
    tagline: "Signatures électroniques open source",
    description: "Alternative éthique à DocuSign. Documenso offre une solution complète de signature électronique avec une interface moderne, un workflow intuitif et une conformité légale garantie.",
    category: "Productivité",
    image: "/apps/documenso.svg",
    bgColor: "from-fuchsia-500/5 to-pink-500/5",
    highlights: [
      { title: "Signatures légales" },
      { title: "Workflow intuitif" },
      { title: "API complète" }
    ],
    technologies: ["Next.js", "Prisma", "PostgreSQL", "PDF.js"],
    alternatives: ["DocuSign", "Adobe Sign", "HelloSign"]
  },
  {
    name: "GLPI",
    tagline: "Gestion des services IT complète",
    description: "Solution de gestion des services IT (ITSM) complète. GLPI vous permet de gérer votre parc informatique, vos tickets, vos actifs et vos processus IT avec une interface moderne et personnalisable.",
    category: "Gestion",
    image: "/applications/glpi.svg",
    bgColor: "from-blue-500/5 to-cyan-500/5",
    highlights: [
      { title: "Inventaire automatisé" },
      { title: "Gestion des tickets" },
      { title: "Processus ITIL" }
    ],
    technologies: ["PHP", "MariaDB", "JavaScript", "REST API"],
    alternatives: ["ServiceNow", "Jira Service Management", "Fresh Service"]
  },
  {
    name: "Appsmith",
    tagline: "Création d'applications internes",
    description: "Plateforme low-code pour créer rapidement des applications internes. Appsmith vous permet de construire des tableaux de bord, des outils d'administration et des interfaces métier en connectant vos données existantes.",
    category: "Automatisation",
    image: "/applications/appsmith.webp",
    bgColor: "from-yellow-500/5 to-orange-500/5",
    highlights: [
      { title: "Drag & Drop" },
      { title: "Connexions multiples" },
      { title: "Widgets prêts à l'emploi" }
    ],
    technologies: ["Java", "React", "MongoDB", "Docker"],
    alternatives: ["Retool", "Internal.io", "Budibase"]
  },
  {
    name: "RustDesk",
    tagline: "Bureau à distance open source",
    description: "Alternative sécurisée à TeamViewer. RustDesk offre une solution de bureau à distance rapide, sécurisée et facile à utiliser, sans nécessiter de configuration complexe du réseau.",
    category: "Infrastructure",
    image: "/apps/rustdesk.webp",
    bgColor: "from-red-500/5 to-rose-500/5",
    highlights: [
      { title: "Multi-plateforme" },
      { title: "Haute performance" },
      { title: "Auto-hébergeable" }
    ],
    technologies: ["Rust", "Flutter", "WebRTC", "SQLite"],
    alternatives: ["TeamViewer", "AnyDesk", "Chrome Remote Desktop"]
  },
  {
    name: "Plane",
    tagline: "Gestion de projet moderne",
    description: "Alternative open source à Jira. Plane offre une expérience moderne et fluide pour la gestion de projets agiles, avec des vues personnalisables, des cycles et une collaboration en temps réel.",
    category: "Productivité",
    image: "/applications/plane.svg",
    bgColor: "from-violet-500/5 to-purple-500/5",
    highlights: [
      { title: "Interface intuitive" },
      { title: "Vues multiples" },
      { title: "Cycles et sprints" }
    ],
    technologies: ["Next.js", "Django", "PostgreSQL", "Redis"],
    alternatives: ["Jira", "Linear", "ClickUp"]
  },
  {
    name: "Docassemble",
    tagline: "Automatisation de documents juridiques",
    description: "Plateforme d'automatisation de documents et de processus juridiques. Docassemble permet de créer des workflows interactifs pour générer des documents juridiques complexes et guider les utilisateurs.",
    category: "Automatisation",
    image: "/applications/docassemble.svg",
    bgColor: "from-emerald-500/5 to-green-500/5",
    highlights: [
      { title: "Logique complexe" },
      { title: "Multi-langues" },
      { title: "Signatures intégrées" }
    ],
    technologies: ["Python", "Flask", "PostgreSQL", "LaTeX"],
    alternatives: ["DocuSign", "Clio", "NetDocuments"]
  },
  {
    name: "Syncthing",
    tagline: "Synchronisation de fichiers P2P",
    description: "Solution de synchronisation de fichiers décentralisée et sécurisée. Syncthing vous permet de synchroniser vos fichiers entre plusieurs appareils sans dépendre d'un serveur central, avec un chiffrement de bout en bout.",
    category: "Infrastructure",
    image: "/applications/syncthing.svg",
    bgColor: "from-blue-500/5 to-indigo-500/5",
    highlights: [
      { title: "Synchronisation P2P" },
      { title: "Chiffrement E2E" },
      { title: "Multi-plateforme" }
    ],
    technologies: ["Go", "React", "SQLite", "Protocol Buffers"],
    alternatives: ["Dropbox", "Google Drive", "OneDrive"]
  },
  {
    name: "Coder",
    tagline: "Environnements de développement cloud",
    description: "Plateforme pour créer et gérer des environnements de développement à distance. Coder permet aux équipes de développer dans des environnements cloud standardisés, avec tous les outils nécessaires préconfigurés.",
    category: "Infrastructure",
    image: "/applications/coder.svg",
    bgColor: "from-teal-500/5 to-emerald-500/5",
    highlights: [
      { title: "Dev Environments as Code" },
      { title: "IDE Web intégré" },
      { title: "Gestion centralisée" }
    ],
    technologies: ["Go", "TypeScript", "Docker", "Terraform"],
    alternatives: ["GitHub Codespaces", "GitPod", "AWS Cloud9"]
  },
  {
    name: "HeyForm",
    tagline: "Formulaires professionnels et analytics",
    description: "Solution de formulaires avancée avec analytics intégrés. HeyForm vous permet de créer des formulaires professionnels avec une expérience utilisateur optimale et des analyses détaillées des réponses.",
    category: "Marketing",
    image: "/applications/heyform.svg",
    bgColor: "from-purple-500/5 to-violet-500/5",
    highlights: [
      { title: "Templates prêts à l'emploi" },
      { title: "Analytics avancés" },
      { title: "Intégration facile" }
    ],
    technologies: ["Next.js", "PostgreSQL", "Chart.js", "TailwindCSS"],
    alternatives: ["Typeform", "Google Forms", "JotForm"]
  },
  {
    name: "Forgejo",
    tagline: "Forge logicielle complète",
    description: "Plateforme de développement logiciel tout-en-un. Forgejo combine gestion de code, CI/CD, gestion de projet et documentation dans une interface unifiée et moderne.",
    category: "Productivité",
    image: "/apps/forgejo.svg",
    bgColor: "from-rose-500/5 to-pink-500/5",
    highlights: [
      { title: "Git intégré" },
      { title: "CI/CD native" },
      { title: "Gestion de projet" }
    ],
    technologies: ["Rust", "Vue.js", "PostgreSQL", "Docker"],
    alternatives: ["GitLab", "GitHub", "Bitbucket"]
  },
  {
    name: "Serpbear",
    tagline: "Suivi de positions SEO",
    description: "Outil de suivi des positions SEO simple et efficace. SerpBear vous permet de suivre le positionnement de vos mots-clés dans les moteurs de recherche et de générer des rapports détaillés.",
    category: "Marketing",
    image: "/applications/serpbear.webp",
    bgColor: "from-amber-500/5 to-yellow-500/5",
    highlights: [
      { title: "Suivi en temps réel" },
      { title: "Rapports personnalisés" },
      { title: "Multi-moteurs" }
    ],
    technologies: ["Next.js", "Prisma", "SQLite", "TailwindCSS"],
    alternatives: ["Ahrefs", "SEMrush", "Rank Tracker"]
  },
  {
    name: "Pingvin",
    tagline: "Partage de fichiers élégant",
    description: "Solution de partage de fichiers moderne et sécurisée. Pingvin offre une interface élégante pour partager vos fichiers avec des liens publics ou privés, des dates d'expiration et des statistiques détaillées.",
    category: "Productivité",
    image: "/applications/pingvin-share.svg",
    bgColor: "from-sky-500/5 to-blue-500/5",
    highlights: [
      { title: "Liens sécurisés" },
      { title: "Stats détaillées" },
      { title: "Expiration auto" }
    ],
    technologies: ["PHP", "Laravel", "Vue.js", "PostgreSQL"],
    alternatives: ["WeTransfer", "Dropbox Transfer", "Firefox Send"]
  },
  {
    name: "Huginn",
    tagline: "Automatisation personnalisée",
    description: "Créez vos agents d'automatisation personnalisés. Huginn vous permet de surveiller et d'agir sur vos flux de données web avec des agents personnalisables pour automatiser vos tâches quotidiennes.",
    category: "Automatisation",
    image: "/applications/huginn.svg",
    bgColor: "from-orange-500/5 to-red-500/5",
    highlights: [
      { title: "Agents personnalisables" },
      { title: "Scénarios complexes" },
      { title: "Intégration web" }
    ],
    technologies: ["Ruby", "Rails", "MySQL", "React"],
    alternatives: ["Zapier", "IFTTT", "Microsoft Power Automate"]
  },
  {
    name: "Kitsu",
    tagline: "Gestion de production créative",
    description: "Solution de gestion pour studios d'animation et créatifs. Kitsu (par CGWire) facilite la gestion de projets créatifs avec un suivi des tâches, des assets et une collaboration en temps réel.",
    category: "Gestion",
    image: "/apps/kitsu.png",
    bgColor: "from-purple-500/5 to-indigo-500/5",
    highlights: [
      { title: "Suivi de production" },
      { title: "Revue d'assets" },
      { title: "Planning visuel" }
    ],
    technologies: ["Python", "Vue.js", "PostgreSQL", "Flask"],
    alternatives: ["Shotgun", "ftrack", "Frame.io"]
  },
  {
    name: "Opensign",
    tagline: "Signatures numériques sécurisées",
    description: "Plateforme de signature électronique open source. Opensign offre une solution complète pour la signature de documents avec validation légale, workflow personnalisable et intégration API.",
    category: "Productivité",
    image: "/applications/opensign.webp",
    bgColor: "from-emerald-500/5 to-green-500/5",
    highlights: [
      { title: "Validation légale" },
      { title: "Workflow flexible" },
      { title: "API complète" }
    ],
    technologies: ["Node.js", "React", "MongoDB", "Redis"],
    alternatives: ["DocuSign", "Adobe Sign", "SignNow"]
  },
  {
    name: "Openchangelog",
    tagline: "Gestion de changelog moderne",
    description: "Plateforme de gestion et publication de changelogs. Openchangelog simplifie la communication des mises à jour de vos produits avec une interface moderne et des intégrations développeurs.",
    category: "Productivité",
    image: "/applications/openchangelog.svg",
    bgColor: "from-fuchsia-500/5 to-pink-500/5",
    highlights: [
      { title: "Markdown natif" },
      { title: "Notifications auto" },
      { title: "Intégration Git" }
    ],
    technologies: ["Next.js", "Prisma", "PostgreSQL", "TailwindCSS"],
    alternatives: ["Headway", "Beamer", "ProductBoard"]
  },
  {
    name: "Wireguard",
    tagline: "VPN nouvelle génération",
    description: "Solution VPN moderne, rapide et sécurisée. Wireguard offre des performances exceptionnelles avec une configuration minimale et une sécurité cryptographique de pointe.",
    category: "Infrastructure",
    image: "/applications/wireguard.svg",
    bgColor: "from-red-500/5 to-rose-500/5",
    highlights: [
      { title: "Ultra performant" },
      { title: "Configuration simple" },
      { title: "Cryptographie moderne" }
    ],
    technologies: ["C", "Go", "Linux Kernel", "Cryptography"],
    alternatives: ["OpenVPN", "IPsec", "Cisco AnyConnect"]
  },
  {
    name: "Docmost",
    tagline: "Collaboration documentaire unifiée",
    description: "Plateforme de collaboration documentaire tout-en-un. Docmost centralise vos documents, notes et connaissances dans un espace de travail moderne avec une recherche puissante.",
    category: "Collaboration",
    image: "/apps/docmost.webp",
    bgColor: "from-violet-500/5 to-purple-500/5",
    highlights: [
      { title: "Édition collaborative" },
      { title: "Base de connaissances" },
      { title: "Recherche avancée" }
    ],
    technologies: ["Next.js", "PostgreSQL", "Redis", "ElasticSearch"],
    alternatives: ["Notion", "Confluence", "Coda"]
  },
  {
    name: "Peppermint",
    tagline: "Gestion des tickets simplifiée",
    description: "Solution de helpdesk légère et intuitive. Peppermint simplifie la gestion de vos tickets support avec une interface moderne et des workflows personnalisables.",
    category: "Gestion",
    image: "/applications/peppermint.svg",
    bgColor: "from-emerald-500/5 to-green-500/5",
    highlights: [
      { title: "Interface intuitive" },
      { title: "Automatisation" },
      { title: "Personnalisable" }
    ],
    technologies: ["PHP", "Laravel", "Vue.js", "MySQL"],
    alternatives: ["Zendesk", "Freshdesk", "Help Scout"]
  },
  {
    name: "OpenPanel",
    tagline: "Gestion de serveurs simplifiée",
    description: "OpenPanel est une solution de gestion de serveurs qui facilite le déploiement et la gestion de vos applications.",
    category: "Infrastructure",
    image: "/applications/openpanel.svg",
    bgColor: "from-blue-500/5 to-cyan-500/5",
    highlights: [
      { title: "Interface intuitive" },
      { title: "Déploiement rapide" },
      { title: "Gestion centralisée" }
    ],
    technologies: ["PHP", "MySQL", "JavaScript"],
    alternatives: ["cPanel", "Plesk"]
  },
  {
    name: "ActivePieces",
    tagline: "Automatisation des workflows",
    description: "ActivePieces permet d'automatiser vos workflows en connectant différentes applications et services.",
    category: "Automatisation",
    image: "/applications/activepieces.svg",
    bgColor: "from-green-500/5 to-emerald-500/5",
    highlights: [
      { title: "Connecteurs multiples" },
      { title: "Interface visuelle" },
      { title: "Automatisation sans code" }
    ],
    technologies: ["Node.js", "React"],
    alternatives: ["Zapier", "Integromat"]
  },
  {
    name: "Adminer",
    tagline: "Gestion de base de données simplifiée",
    description: "Adminer est un outil de gestion de base de données léger et complet, supportant plusieurs systèmes de gestion de bases de données.",
    category: "Productivité",
    image: "/applications/adminer.svg",
    bgColor: "from-orange-500/5 to-amber-500/5",
    highlights: [
      { title: "Support multi-SGBD" },
      { title: "Interface simple" },
      { title: "Installation facile" }
    ],
    technologies: ["PHP"],
    alternatives: ["phpMyAdmin", "HeidiSQL"]
  },
  {
    name: "Jitsi",
    tagline: "Conférences vidéo sécurisées",
    description: "Jitsi est une plateforme de vidéoconférence open source qui permet des réunions sécurisées et sans limites.",
    category: "Collaboration",
    image: "/applications/jitsi-meet.svg",
    bgColor: "from-purple-500/5 to-indigo-500/5",
    highlights: [
      { title: "Conférences illimitées" },
      { title: "Chiffrement de bout en bout" },
      { title: "Open source" }
    ],
    technologies: ["JavaScript", "WebRTC"],
    alternatives: ["Zoom", "Google Meet"]
  },
  {
    name: "BigBlueButton",
    tagline: "Plateforme de webinaire open source",
    description: "BigBlueButton est une solution de webinaire open source conçue pour l'enseignement à distance.",
    category: "Collaboration",
    image: "/applications/bigbluebutton.svg",
    bgColor: "from-red-500/5 to-pink-500/5",
    highlights: [
      { title: "Outils d'enseignement" },
      { title: "Enregistrement des sessions" },
      { title: "Intégration LMS" }
    ],
    technologies: ["Ruby", "JavaScript"],
    alternatives: ["Webex", "Microsoft Teams"]
  },
  {
    name: "Aegis",
    tagline: "Gestion de mots de passe sécurisée",
    description: "Aegis est une application de gestion de mots de passe open source qui vous permet de stocker vos mots de passe de manière sécurisée.",
    category: "Gestion",
    image: "/applications/aegis.webp",
    bgColor: "from-green-500/5 to-emerald-500/5",
    highlights: [
      { title: "Chiffrement fort" },
      { title: "Interface utilisateur simple" },
      { title: "Sauvegarde sécurisée" }
    ],
    technologies: ["Java", "Android"],
    alternatives: ["Bitwarden", "LastPass"]
  },
  {
    name: "Affine",
    tagline: "Outils de visualisation de données",
    description: "Affine est une plateforme de visualisation de données qui vous aide à analyser et à comprendre vos données de manière intuitive.",
    category: "Productivité",
    image: "/applications/affine.svg",
    bgColor: "from-blue-500/5 to-cyan-500/5",
    highlights: [
      { title: "Visualisations interactives" },
      { title: "Collaboration en temps réel" },
      { title: "Intégration de données" }
    ],
    technologies: ["JavaScript", "React"],
    alternatives: ["Tableau", "Power BI"]
  },
  {
    name: "anonaddy",
    tagline: "Service d'email temporaire",
    description: "anonaddy est un service d'email temporaire qui vous permet de créer des adresses email jetables pour protéger votre vie privée.",
    category: "Sécurité",
    image: "/applications/anonaddy.svg",
    bgColor: "from-purple-500/5 to-indigo-500/5",
    highlights: [
      { title: "Protection de la vie privée" },
      { title: "Facilité d'utilisation" },
      { title: "Gestion des alias" }
    ],
    technologies: ["PHP", "Laravel"],
    alternatives: ["Guerrilla Mail", "Mailinator"]
  },
  {
    name: "Ansible",
    tagline: "Automatisation de l'infrastructure",
    description: "Ansible est un outil d'automatisation open source qui simplifie la gestion de l'infrastructure et le déploiement d'applications.",
    category: "Infrastructure",
    image: "/applications/ansible.svg",
    bgColor: "from-red-500/5 to-pink-500/5",
    highlights: [
      { title: "Configuration as Code" },
      { title: "Gestion des serveurs" },
      { title: "Automatisation des déploiements" }
    ],
    technologies: ["Python"],
    alternatives: ["Puppet", "Chef"]
  },
  {
    name: "Anytype",
    tagline: "Gestion de contenu décentralisée",
    description: "Anytype est une application de gestion de contenu décentralisée qui vous permet de créer et d'organiser vos notes et documents.",
    category: "Productivité",
    image: "/applications/anytype.svg",
    bgColor: "from-teal-500/5 to-emerald-500/5",
    highlights: [
      { title: "Décentralisation" },
      { title: "Interface intuitive" },
      { title: "Collaboration en temps réel" }
    ],
    technologies: ["JavaScript", "React"],
    alternatives: ["Notion", "Obsidian"]
  },
  {
    name: "Apprise",
    tagline: "Notifications multiplateformes",
    description: "Apprise est une bibliothèque de notifications qui permet d'envoyer des notifications à presque toutes les plateformes de notification populaires, telles que Telegram, Discord, Slack, et bien d'autres.",
    category: "Productivité",
    image: "/applications/apprise.webp",
    bgColor: "from-blue-500/5 to-cyan-500/5",
    highlights: [
      { title: "Support de nombreuses plateformes" },
      { title: "Syntaxe de notification intuitive" },
      { title: "Envoi asynchrone pour des temps de réponse rapides" }
    ],
    technologies: ["Python"],
    alternatives: ["Pushover", "Pushbullet"]
  },
  {
    name: "Appwrite",
    tagline: "Backend as a Service",
    description: "Appwrite est un backend open source pour les applications web et mobiles, offrant des fonctionnalités comme l'authentification, la base de données et le stockage.",
    category: "Infrastructure",
    image: "/applications/appwrite.svg",
    bgColor: "from-green-500/5 to-emerald-500/5",
    highlights: [
      { title: "API RESTful" },
      { title: "Facilité d'intégration" },
      { title: "Sécurité intégrée" }
    ],
    technologies: ["Node.js", "Docker"],
    alternatives: ["Firebase", "Supabase"]
  },
  {
    name: "Ara Records Ansible",
    tagline: "Gestion de configuration avec Ansible",
    description: "Ara Records est un outil de gestion de configuration qui s'intègre avec Ansible pour fournir des rapports et des visualisations.",
    category: "Infrastructure",
    image: "/applications/ara-records-ansible.svg",
    bgColor: "from-purple-500/5 to-indigo-500/5",
    highlights: [
      { title: "Rapports détaillés" },
      { title: "Visualisation des tâches" },
      { title: "Intégration Ansible" }
    ],
    technologies: ["Python", "Ansible"],
    alternatives: ["AWX", "Rundeck"]
  },
  {
    name: "Argo CD",
    tagline: "Déploiement continu pour Kubernetes",
    description: "Argo CD est un outil de déploiement continu pour Kubernetes qui permet de gérer les applications à l'aide de GitOps.",
    category: "Infrastructure",
    image: "/applications/argo-cd.svg",
    bgColor: "from-red-500/5 to-pink-500/5",
    highlights: [
      { title: "Gestion des applications Kubernetes" },
      { title: "Déploiement basé sur Git" },
      { title: "Interface utilisateur intuitive" }
    ],
    technologies: ["Go", "Kubernetes"],
    alternatives: ["Flux", "Jenkins X"]
  },
  {
    name: "Authelia",
    tagline: "Authentification et autorisation",
    description: "Authelia est une solution d'authentification et d'autorisation pour les applications web, offrant une sécurité renforcée.",
    category: "Sécurité",
    image: "/applications/authelia.svg",
    bgColor: "from-blue-500/5 to-cyan-500/5",
    highlights: [
      { title: "Authentification à deux facteurs" },
      { title: "Gestion des utilisateurs" },
      { title: "Intégration facile" }
    ],
    technologies: ["Go", "Docker"],
    alternatives: ["Keycloak", "OAuth2 Proxy"]
  },
  {
    name: "Authman",
    tagline: "Gestion des identités et des accès",
    description: "Authman est une solution de gestion des identités et des accès qui permet de sécuriser vos applications et services.",
    category: "Sécurité",
    image: "/applications/authman.svg",
    bgColor: "from-blue-500/5 to-cyan-500/5",
    highlights: [
      { title: "Authentification unique (SSO)" },
      { title: "Gestion des utilisateurs" },
      { title: "Intégration facile" }
    ],
    technologies: ["Node.js", "Express"],
    alternatives: ["Keycloak", "Okta"]
  },
  {
    name: "AutoKitteh",
    tagline: "Automatisation des tâches",
    description: "AutoKitteh est un outil d'automatisation qui permet de simplifier et d'automatiser vos tâches quotidiennes.",
    category: "Automatisation",
    image: "/applications/autokitteh.svg",
    bgColor: "from-green-500/5 to-emerald-500/5",
    highlights: [
      { title: "Interface utilisateur intuitive" },
      { title: "Automatisation sans code" },
      { title: "Intégration avec plusieurs services" }
    ],
    technologies: ["Python", "JavaScript"],
    alternatives: ["Zapier", "Integromat"]
  },
  {
    name: "Automad",
    tagline: "CMS léger et flexible",
    description: "Automad est un CMS open source qui permet de créer des sites web dynamiques avec une interface simple et intuitive.",
    category: "Productivité",
    image: "/applications/automad.svg",
    bgColor: "from-purple-500/5 to-indigo-500/5",
    highlights: [
      { title: "Simplicité d'utilisation" },
      { title: "Pas de base de données requise" },
      { title: "Flexible et extensible" }
    ],
    technologies: ["PHP"],
    alternatives: ["WordPress", "Grav"]
  },
  {
    name: "Auto-MCS",
    tagline: "Gestion de configuration pour serveurs",
    description: "Auto-MCS est un outil de gestion de configuration qui facilite la gestion et le déploiement de serveurs.",
    category: "Infrastructure",
    image: "/applications/auto-mcs.webp",
    bgColor: "from-red-500/5 to-pink-500/5",
    highlights: [
      { title: "Déploiement automatisé" },
      { title: "Gestion des configurations" },
      { title: "Support multi-plateformes" }
    ],
    technologies: ["Python", "Ansible"],
    alternatives: ["Puppet", "Chef"]
  },
  {
    name: "Baikal",
    tagline: "Serveur CalDAV et CardDAV",
    description: "Baikal est un serveur CalDAV et CardDAV léger qui permet de synchroniser vos calendriers et contacts.",
    category: "Infrastructure",
    image: "/applications/baikal.webp",
    bgColor: "from-blue-500/5 to-cyan-500/5",
    highlights: [
      { title: "Support des protocoles standards" },
      { title: "Interface simple" },
      { title: "Gestion des calendriers et contacts" }
    ],
    technologies: ["PHP", "SQLite"],
    alternatives: ["Nextcloud", "Radicale"]
  },
  {
    name: "Baserow",
    tagline: "Base de données sans code",
    description: "Baserow est une plateforme de base de données sans code qui permet de créer et de gérer des bases de données facilement.",
    category: "Productivité",
    image: "/applications/baserow.svg",
    bgColor: "from-blue-500/5 to-cyan-500/5",
    highlights: [
      { title: "Interface intuitive" },
      { title: "Collaboration en temps réel" },
      { title: "API RESTful" }
    ],
    technologies: ["Python", "Django"],
    alternatives: ["Airtable", "Notion"]
  },
  {
    name: "Beszel",
    tagline: "Surveillance de serveur légère",
    description: "Beszel est un outil de surveillance de serveur léger qui suit l'utilisation des ressources de vos conteneurs Docker et envoie des alertes configurables.",
    category: "Infrastructure",
    image: "/applications/beszel.svg",
    bgColor: "from-green-500/5 to-emerald-500/5",
    highlights: [
      { title: "Statistiques Docker" },
      { title: "Alertes configurables" },
      { title: "Interface simple" }
    ],
    technologies: ["Docker", "Node.js"],
    alternatives: ["Prometheus", "Grafana"]
  },
  {
    name: "Bitwarden",
    tagline: "Gestionnaire de mots de passe open source",
    description: "Bitwarden est un gestionnaire de mots de passe open source qui vous permet de stocker et de gérer vos mots de passe en toute sécurité.",
    category: "Sécurité",
    image: "/applications/bitwarden.svg",
    bgColor: "from-purple-500/5 to-indigo-500/5",
    highlights: [
      { title: "Chiffrement de bout en bout" },
      { title: "Accès multiplateforme" },
      { title: "Partage sécurisé" }
    ],
    technologies: ["C#", "JavaScript"],
    alternatives: ["LastPass", "1Password"]
  },
  {
    name: "Blue Iris",
    tagline: "Surveillance vidéo et sécurité",
    description: "Blue Iris est un logiciel de surveillance vidéo qui vous permet de gérer vos caméras de sécurité et de surveiller votre propriété.",
    category: "Sécurité",
    image: "/applications/blue-iris.webp",
    bgColor: "from-red-500/5 to-pink-500/5",
    highlights: [
      { title: "Support de plusieurs caméras" },
      { title: "Alertes en temps réel" },
      { title: "Interface utilisateur personnalisable" }
    ],
    technologies: ["C++"],
    alternatives: ["ZoneMinder", "iSpy"]
  },
  {
    name: "Bookstack",
    tagline: "Documentation et gestion de contenu",
    description: "Bookstack est une plateforme de documentation open source qui permet de créer et de gérer des documents et des wikis.",
    category: "Productivité",
    image: "/applications/bookstack.svg",
    bgColor: "from-blue-500/5 to-cyan-500/5",
    highlights: [
      { title: "Interface simple" },
      { title: "Organisation par livres" },
      { title: "Collaboration en temps réel" }
    ],
    technologies: ["PHP", "Laravel"],
    alternatives: ["Confluence", "MediaWiki"]
  },
  {
    name: "Bricktracker",
    tagline: "Suivi de LEGO simplifié",
    description: "Bricktracker est une application web pour organiser et suivre les ensembles LEGO, les pièces et les minifigures. Utilise l'API Rebrickable pour récupérer les données LEGO et permet aux utilisateurs de suivre les pièces manquantes et l'état de leur collection.",
    category: "Productivité",
    image: "/applications/bricktracker.webp",
    bgColor: "from-green-500/5 to-emerald-500/5",
    highlights: [
      { title: "Suivi de plusieurs ensembles LEGO" },
      { title: "Marquer les ensembles comme vérifiés/collectés" },
      { title: "Suivi des pièces manquantes" }
    ],
    technologies: ["Python", "JavaScript"],
    alternatives: ["Brickset", "Rebrickable"]
  },
  {
    name: "Budibase",
    tagline: "Création d'applications internes",
    description: "Budibase est une plateforme low-code pour créer des applications internes rapidement et facilement.",
    category: "Automatisation",
    image: "/applications/budibase.svg",
    bgColor: "from-purple-500/5 to-indigo-500/5",
    highlights: [
      { title: "Interface drag-and-drop" },
      { title: "Intégration avec des bases de données" },
      { title: "Déploiement facile" }
    ],
    technologies: ["JavaScript", "Node.js"],
    alternatives: ["AppSheet", "OutSystems"]
  },
  {
    name: "Cal.com",
    tagline: "Planification de rendez-vous simplifiée",
    description: "Cal.com est une plateforme de planification de rendez-vous open source qui facilite la gestion de votre temps et la prise de rendez-vous.",
    category: "Productivité",
    image: "/applications/cal-com.svg",
    bgColor: "from-blue-500/5 to-cyan-500/5",
    highlights: [
      { title: "Intégration avec les calendriers" },
      { title: "Interface utilisateur intuitive" },
      { title: "Personnalisation des rendez-vous" }
    ],
    technologies: ["JavaScript", "React"],
    alternatives: ["Calendly", "Acuity Scheduling"]
  },
  {
    name: "Canine",
    tagline: "Déploiement simplifié",
    description: "Canine est une plateforme de déploiement open source qui facilite le déploiement et la gestion de vos applications, tout en offrant une expérience similaire à Heroku.",
    category: "Infrastructure",
    image: "/applications/canine.webp",
    bgColor: "from-green-500/5 to-emerald-500/5",
    highlights: [
      { title: "Déploiement en un clic" },
      { title: "Gestion des certificats SSL" },
      { title: "Support de plus de 200 fournisseurs de cloud" }
    ],
    technologies: ["Docker", "Kubernetes"],
    alternatives: ["Heroku", "Render"]
  },
  {
    name: "Casdoor",
    tagline: "Gestion des identités et des accès",
    description: "Casdoor est une plateforme de gestion des identités et des accès (IAM) qui prend en charge l'authentification unique (SSO) et plusieurs protocoles d'authentification.",
    category: "Sécurité",
    image: "/applications/casdoor.webp",
    bgColor: "from-purple-500/5 to-indigo-500/5",
    highlights: [
      { title: "Support OAuth 2.0 et SAML" },
      { title: "Interface utilisateur conviviale" },
      { title: "Multi-langue" }
    ],
    technologies: ["Go", "JavaScript"],
    alternatives: ["Keycloak", "Auth0"]
  },
  {
    name: "Castopod",
    tagline: "Gestion de podcasts",
    description: "Castopod est une solution open source pour gérer et héberger vos podcasts, avec des outils pour la publication et l'analyse.",
    category: "Média",
    image: "/applications/castopod.svg",
    bgColor: "from-blue-500/5 to-cyan-500/5",
    highlights: [
      { title: "Interface simple pour la gestion des épisodes" },
      { title: "Statistiques d'écoute" },
      { title: "Support des flux RSS" }
    ],
    technologies: ["PHP", "Laravel"],
    alternatives: ["Podbean", "Anchor"]
  },
  {
    name: "Changedetection",
    tagline: "Surveillance de site web",
    description: "Changedetection est un outil qui surveille les changements sur les sites web et vous alerte lorsque des modifications sont détectées.",
    category: "Automatisation",
    image: "/applications/changedetection.svg",
    bgColor: "from-green-500/5 to-emerald-500/5",
    highlights: [
      { title: "Alertes par email" },
      { title: "Interface utilisateur simple" },
      { title: "Support des pages dynamiques" }
    ],
    technologies: ["Python"],
    alternatives: ["Visualping", "Distill.io"]
  },
  {
    name: "ChartDB",
    tagline: "Base de données pour les graphiques",
    description: "ChartDB est une base de données conçue pour stocker et gérer des données de graphiques, facilitant l'analyse et la visualisation.",
    category: "Productivité",
    image: "/applications/chartdb.webp",
    bgColor: "from-purple-500/5 to-indigo-500/5",
    highlights: [
      { title: "Stockage optimisé pour les graphiques" },
      { title: "API RESTful" },
      { title: "Visualisation intégrée" }
    ],
    technologies: ["Node.js", "MongoDB"],
    alternatives: ["Grafana", "Tableau"]
  },
  {
    name: "ClamAV",
    tagline: "Antivirus open source",
    description: "ClamAV est un antivirus open source qui détecte les virus, les malwares et autres menaces sur les systèmes.",
    category: "Sécurité",
    image: "/applications/clamav.svg",
    bgColor: "from-red-500/5 to-pink-500/5",
    highlights: [
      { title: "Détection de virus en temps réel" },
      { title: "Mises à jour fréquentes des signatures" },
      { title: "Support multi-plateformes" }
    ],
    technologies: ["C", "C++"],
    alternatives: ["Sophos", "McAfee"]
  },
  {
    name: "CrowdSec",
    tagline: "Sécurité collaborative",
    description: "CrowdSec est une solution de sécurité open source qui utilise une approche collaborative pour protéger vos serveurs et applications.",
    category: "Sécurité",
    image: "/applications/crowdsec.svg",
    bgColor: "from-blue-500/5 to-cyan-500/5",
    highlights: [
      { title: "Protection contre les attaques" },
      { title: "Partage d'intelligence entre utilisateurs" },
      { title: "Interface utilisateur conviviale" }
    ],
    technologies: ["Go"],
    alternatives: ["Fail2Ban", "OSSEC"]
  },
  {
    name: "CryptPad",
    tagline: "Collaboration sécurisée",
    description: "CryptPad est une suite d'outils de collaboration en ligne qui protège votre vie privée grâce à un chiffrement de bout en bout.",
    category: "Collaboration",
    image: "/applications/cryptpad.svg",
    bgColor: "from-purple-500/5 to-indigo-500/5",
    highlights: [
      { title: "Chiffrement de bout en bout" },
      { title: "Édition collaborative en temps réel" },
      { title: "Pas de traçage des utilisateurs" }
    ],
    technologies: ["JavaScript", "Node.js"],
    alternatives: ["Google Docs", "Etherpad"]
  },
  {
    name: "Docspell",
    tagline: "Gestion documentaire intelligente",
    description: "Docspell est une solution de gestion documentaire qui vous aide à organiser et à retrouver vos documents facilement.",
    category: "Productivité",
    image: "/applications/docspell.svg",
    bgColor: "from-green-500/5 to-emerald-500/5",
    highlights: [
      { title: "OCR intégré" },
      { title: "Recherche avancée" },
      { title: "Gestion des métadonnées" }
    ],
    technologies: ["Java", "Spring"],
    alternatives: ["Paperless", "Mayan EDMS"]
  },
  {
    name: "Docuseal",
    tagline: "Signature électronique sécurisée",
    description: "Docuseal est une solution de signature électronique qui permet de signer des documents en toute sécurité.",
    category: "Sécurité",
    image: "/applications/docuseal.svg",
    bgColor: "from-blue-500/5 to-cyan-500/5",
    highlights: [
      { title: "Signature légale" },
      { title: "Interface simple" },
      { title: "Suivi des documents" }
    ],
    technologies: ["PHP", "JavaScript"],
    alternatives: ["DocuSign", "HelloSign"]
  },
  {
    name: "Enclosed",
    tagline: "Gestion de fichiers sécurisée",
    description: "Enclosed est une solution de gestion de fichiers qui permet de stocker et de partager des fichiers de manière sécurisée.",
    category: "Sécurité",
    image: "/applications/enclosed.svg",
    bgColor: "from-red-500/5 to-pink-500/5",
    highlights: [
      { title: "Chiffrement des fichiers" },
      { title: "Partage sécurisé" },
      { title: "Interface utilisateur intuitive" }
    ],
    technologies: ["Python", "Django"],
    alternatives: ["Tresorit", "Sync.com"]
  },
  {
    name: "Fider",
    tagline: "Feedback et suggestions",
    description: "Fider est une plateforme open source qui permet de recueillir des retours et des suggestions de vos utilisateurs.",
    category: "Productivité",
    image: "/applications/fider.svg",
    bgColor: "from-blue-500/5 to-cyan-500/5",
    highlights: [
      { title: "Interface simple pour les utilisateurs" },
      { title: "Gestion des retours" },
      { title: "Intégration facile" }
    ],
    technologies: ["Ruby on Rails"],
    alternatives: ["UserVoice", "Canny"]
  },
  {
    name: "Moodle",
    tagline: "Plateforme d'apprentissage open source",
    description: "Moodle est un système de gestion de l'apprentissage (LMS) qui permet aux éducateurs de créer des cours en ligne, de gérer des contenus et d'interagir avec les étudiants.",
    category: "Collaboration",
    image: "/applications/moodle.svg",
    bgColor: "from-blue-500/5 to-cyan-500/5",
    highlights: [
      { title: "Interface intuitive" },
      { title: "Support multi-langue" },
      { title: "Personnalisation des cours" }
    ],
    technologies: ["PHP", "MySQL", "JavaScript"],
    alternatives: ["Blackboard", "Canvas", "Google Classroom"]
  },
  {
    name: "Grafana",
    tagline: "Visualisation et analyse de données",
    description: "Grafana est une plateforme open source pour la visualisation et l'analyse de données, permettant de créer des tableaux de bord interactifs.",
    category: "Productivité",
    image: "/applications/grafana.svg",
    bgColor: "from-blue-500/5 to-cyan-500/5",
    highlights: [
      { title: "Tableaux de bord personnalisables" },
      { title: "Support multi-source" },
      { title: "Alertes en temps réel" }
    ],
    technologies: ["Go", "JavaScript"],
    alternatives: ["Kibana", "Chronograf"]
  },
  {
    name: "Prometheus",
    tagline: "Système de surveillance et d'alerte",
    description: "Prometheus est un système de surveillance et d'alerte open source, conçu pour la fiabilité et la scalabilité.",
    category: "Infrastructure",
    image: "/applications/prometheus.svg",
    bgColor: "from-red-500/5 to-orange-500/5",
    highlights: [
      { title: "Collecte de métriques" },
      { title: "Alertes flexibles" },
      { title: "Support des conteneurs" }
    ],
    technologies: ["Go"],
    alternatives: ["Graphite", "InfluxDB"]
  },
  {
    name: "Plausible",
    tagline: "Analytics respectueux de la vie privée",
    description: "Plausible est une alternative à Google Analytics, offrant des statistiques web simples et respectueuses de la vie privée.",
    category: "Marketing",
    image: "/applications/plausible.svg",
    bgColor: "from-green-500/5 to-teal-500/5",
    highlights: [
      { title: "Pas de cookies" },
      { title: "Interface simple" },
      { title: "Rapports en temps réel" }
    ],
    technologies: ["JavaScript", "Node.js"],
    alternatives: ["Google Analytics", "Matomo"]
  },
  {
    name: "Supabase",
    tagline: "Backend open source pour applications",
    description: "Supabase est une alternative open source à Firebase, fournissant une base de données, authentification et stockage.",
    category: "Infrastructure",
    image: "/applications/supabase.svg",
    bgColor: "from-purple-500/5 to-indigo-500/5",
    highlights: [
      { title: "Base de données PostgreSQL" },
      { title: "API RESTful" },
      { title: "Authentification intégrée" }
    ],
    technologies: ["PostgreSQL", "JavaScript"],
    alternatives: ["Firebase", "Hasura"]
  },
  {
    name: "Vikunja",
    tagline: "Gestion de tâches open source",
    description: "Vikunja est une application de gestion de tâches open source qui vous aide à organiser vos projets et tâches.",
    category: "Productivité",
    image: "/applications/vikunja.svg",
    bgColor: "from-blue-500/5 to-cyan-500/5",
    highlights: [
      { title: "Interface intuitive" },
      { title: "Support des sous-tâches" },
      { title: "Collaboration en temps réel" }
    ],
    technologies: ["Go", "Vue.js"],
    alternatives: ["Todoist", "Trello"]
  },
  {
    name: "Ollama",
    tagline: "Gestion de modèles de langage",
    description: "Ollama est une plateforme pour gérer et déployer des modèles de langage, facilitant l'intégration de l'IA dans vos applications.",
    category: "Infrastructure",
    image: "/applications/ollama.svg",
    bgColor: "from-green-500/5 to-teal-500/5",
    highlights: [
      { title: "Déploiement facile" },
      { title: "Support multi-modèles" },
      { title: "API simple" }
    ],
    technologies: ["Python", "Docker"],
    alternatives: ["Hugging Face", "OpenAI"]
  },
  {
    name: "Fireshare",
    tagline: "Partage de fichiers sécurisé",
    description: "Fireshare est une solution de partage de fichiers sécurisée qui permet de partager des fichiers de manière simple et rapide.",
    category: "Productivité",
    image: "/applications/fireshare.webp",
    bgColor: "from-orange-500/5 to-red-500/5",
    highlights: [
      { title: "Partage rapide" },
      { title: "Sécurité renforcée" },
      { title: "Interface utilisateur simple" }
    ],
    technologies: ["JavaScript", "Node.js"],
    alternatives: ["WeTransfer", "Dropbox"]
  },
  {
    name: "Flarum",
    tagline: "Forum moderne et léger",
    description: "Flarum est une plateforme de forum open source, rapide et légère, conçue pour être simple à utiliser et à personnaliser.",
    category: "Collaboration",
    image: "/applications/flarum.svg",
    bgColor: "from-blue-500/5 to-cyan-500/5",
    highlights: [
      { title: "Interface moderne" },
      { title: "Extensible avec des extensions" },
      { title: "Support des discussions" }
    ],
    technologies: ["PHP", "JavaScript"],
    alternatives: ["Discourse", "Vanilla Forums"]
  },
  {
    name: "Frigate",
    tagline: "Surveillance vidéo avec détection d'objets",
    description: "Frigate est une solution de surveillance vidéo qui utilise la détection d'objets pour surveiller votre propriété.",
    category: "Sécurité",
    image: "/applications/frigate.svg",
    bgColor: "from-red-500/5 to-pink-500/5",
    highlights: [
      { title: "Détection d'objets en temps réel" },
      { title: "Intégration avec Home Assistant" },
      { title: "Interface utilisateur intuitive" }
    ],
    technologies: ["Python", "Docker"],
    alternatives: ["ZoneMinder", "Blue Iris"]
  },
  {
    name: "Guacamole",
    tagline: "Accès à distance sans client",
    description: "Apache Guacamole est une solution d'accès à distance qui permet d'accéder à vos machines via un navigateur web, sans client à installer.",
    category: "Infrastructure",
    image: "/applications/guacamole.webp",
    bgColor: "from-green-500/5 to-teal-500/5",
    highlights: [
      { title: "Accès à distance via le navigateur" },
      { title: "Support de plusieurs protocoles" },
      { title: "Configuration simple" }
    ],
    technologies: ["Java", "HTML5"],
    alternatives: ["TeamViewer", "AnyDesk"]
  },
  {
    name: "Healthchecks",
    tagline: "Surveillance des tâches cron",
    description: "Healthchecks est un service de surveillance pour vos tâches cron, vous alertant en cas de défaillance.",
    category: "Infrastructure",
    image: "/applications/healthchecks.svg",
    bgColor: "from-purple-500/5 to-indigo-500/5",
    highlights: [
      { title: "Alertes en temps réel" },
      { title: "Interface simple" },
      { title: "Support des tâches récurrentes" }
    ],
    technologies: ["Python", "Django"],
    alternatives: ["Cronitor", "Dead Man's Snitch"]
  },
  {
    name: "Jenkins",
    tagline: "Automatisation de l'intégration continue",
    description: "Jenkins est un serveur d'automatisation open source qui aide à automatiser les parties du développement logiciel liées à la construction, au test et au déploiement.",
    category: "Infrastructure",
    image: "/applications/jenkins.svg",
    bgColor: "from-blue-500/5 to-cyan-500/5",
    highlights: [
      { title: "Intégration continue" },
      { title: "Extensible avec des plugins" },
      { title: "Support multi-plateforme" }
    ],
    technologies: ["Java"],
    alternatives: ["Travis CI", "CircleCI"]
  },
  {
    name: "Joplin",
    tagline: "Prise de notes open source",
    description: "Joplin est une application de prise de notes open source qui vous permet de gérer vos notes et tâches de manière sécurisée.",
    category: "Productivité",
    image: "/applications/joplin.svg",
    bgColor: "from-green-500/5 to-teal-500/5",
    highlights: [
      { title: "Synchronisation multi-appareils" },
      { title: "Support Markdown" },
      { title: "Chiffrement des notes" }
    ],
    technologies: ["Electron", "Node.js"],
    alternatives: ["Evernote", "Notion"]
  },
  {
    name: "Kestra",
    tagline: "Orchestration de workflows",
    description: "Kestra est une plateforme d'orchestration de workflows qui permet de gérer et d'automatiser des processus complexes.",
    category: "Automatisation",
    image: "/applications/kestra.svg",
    bgColor: "from-purple-500/5 to-indigo-500/5",
    highlights: [
      { title: "Interface utilisateur intuitive" },
      { title: "Support des workflows complexes" },
      { title: "Intégration avec de nombreux services" }
    ],
    technologies: ["Java", "Spring"],
    alternatives: ["Apache Airflow", "Prefect"]
  },
  {
    name: "Keycloak",
    tagline: "Gestion des identités et des accès",
    description: "Keycloak est une solution open source pour la gestion des identités et des accès, offrant des fonctionnalités telles que l'authentification unique (SSO).",
    category: "Sécurité",
    image: "/applications/keycloak.svg",
    bgColor: "from-red-500/5 to-pink-500/5",
    highlights: [
      { title: "Authentification unique (SSO)" },
      { title: "Gestion des utilisateurs" },
      { title: "Intégration facile" }
    ],
    technologies: ["Java", "Docker"],
    alternatives: ["Auth0", "Okta"]
  },
  {
    name: "Khoj",
    tagline: "Votre assistant de recherche personnalisé",
    description: "Khoj est un outil qui simplifie la recherche d'informations et l'organisation de vos données, vous permettant de trouver rapidement ce dont vous avez besoin.",
    category: "Productivité",
    image: "/applications/khoj.svg",
    bgColor: "from-blue-500/5 to-cyan-500/5",
    highlights: [
      { title: "Recherche intelligente" },
      { title: "Personnalisation des résultats" },
      { title: "Interface utilisateur intuitive" }
    ],
    technologies: ["JavaScript", "Node.js"],
    alternatives: ["Google Search", "DuckDuckGo"]
  },
  {
    name: "LibreOffice",
    tagline: "Suite bureautique open source",
    description: "LibreOffice est une suite bureautique open source qui comprend des applications pour le traitement de texte, les tableurs, les présentations, et plus encore.",
    category: "Productivité",
    image: "/applications/libreoffice.svg",
    bgColor: "from-green-500/5 to-teal-500/5",
    highlights: [
      { title: "Compatible avec Microsoft Office" },
      { title: "Support multi-langue" },
      { title: "Gratuit et open source" }
    ],
    technologies: ["C++", "Java"],
    alternatives: ["Microsoft Office", "Google Workspace"]
  },
  {
    name: "Mautic",
    tagline: "Automatisation marketing open source",
    description: "Mautic est la plus grande plateforme d'automatisation marketing open source, permettant aux entreprises de gérer leurs campagnes marketing de manière efficace et personnalisée.",
    category: "Marketing",
    image: "/applications/mautic.svg",
    bgColor: "from-blue-500/5 to-cyan-500/5",
    highlights: [
      { title: "Automatisation des campagnes" },
      { title: "Gestion des contacts illimitée" },
      { title: "Intégration avec de nombreux outils" }
    ],
    technologies: ["PHP", "JavaScript"],
    alternatives: ["HubSpot", "Mailchimp", "ActiveCampaign"]
  },
  {
    name: "OnlyOffice",
    tagline: "Suite bureautique collaborative",
    description: "OnlyOffice est une suite bureautique open source qui permet de créer, éditer et collaborer sur des documents en ligne.",
    category: "Productivité",
    image: "/applications/onlyoffice.svg",
    bgColor: "from-green-500/5 to-teal-500/5",
    highlights: [
      { title: "Édition collaborative en temps réel" },
      { title: "Compatible avec Microsoft Office" },
      { title: "Intégration avec Nextcloud et ownCloud" }
    ],
    technologies: ["JavaScript", "PHP"],
    alternatives: ["Google Docs", "Microsoft Office Online"]
  },
  {
    name: "OPNSense",
    tagline: "Firewall et routeur open source",
    description: "OPNSense est une solution de pare-feu et de routeur open source basée sur FreeBSD, offrant des fonctionnalités avancées de sécurité réseau.",
    category: "Sécurité",
    image: "/applications/opnsense.svg",
    bgColor: "from-red-500/5 to-pink-500/5",
    highlights: [
      { title: "Interface web intuitive" },
      { title: "VPN intégré" },
      { title: "Surveillance du réseau" }
    ],
    technologies: ["FreeBSD", "PHP"],
    alternatives: ["pfSense", "MikroTik"]
  },
  {
    name: "Passbolt",
    tagline: "Gestionnaire de mots de passe open source",
    description: "Passbolt est un gestionnaire de mots de passe open source conçu pour les équipes, permettant de stocker et partager des mots de passe en toute sécurité.",
    category: "Sécurité",
    image: "/applications/passbolt.svg",
    bgColor: "from-purple-500/5 to-indigo-500/5",
    highlights: [
      { title: "Chiffrement de bout en bout" },
      { title: "Partage sécurisé" },
      { title: "Interface utilisateur simple" }
    ],
    technologies: ["PHP", "JavaScript"],
    alternatives: ["LastPass", "1Password"]
  },
  {
    name: "Stirling PDF",
    tagline: "Création et gestion de PDF",
    description: "Stirling PDF est une application qui permet de créer, éditer et gérer des fichiers PDF de manière simple et efficace.",
    category: "Productivité",
    image: "/applications/stirling-pdf.svg",
    bgColor: "from-green-500/5 to-teal-500/5",
    highlights: [
      { title: "Édition facile" },
      { title: "Conversion de fichiers" },
      { title: "Annotations et commentaires" }
    ],
    technologies: ["JavaScript", "HTML5"],
    alternatives: ["Adobe Acrobat", "PDF-XChange Editor"]
  },
  {
    name: "Zitadel",
    tagline: "Gestion des identités et des accès",
    description: "Zitadel est une solution open source pour la gestion des identités et des accès, offrant des fonctionnalités avancées de sécurité et d'authentification.",
    category: "Sécurité",
    image: "/applications/zitadel.svg",
    bgColor: "from-blue-500/5 to-cyan-500/5",
    highlights: [
      { title: "Authentification unique (SSO)" },
      { title: "Gestion des utilisateurs" },
      { title: "Intégration facile avec des applications" }
    ],
    technologies: ["Go", "PostgreSQL"],
    alternatives: ["Keycloak", "Auth0"]
  },
  {
    name: "WordPress",
    tagline: "Système de gestion de contenu open source",
    description: "WordPress est le système de gestion de contenu (CMS) le plus populaire au monde, permettant de créer des sites web et des blogs facilement.",
    category: "Productivité",
    image: "/applications/wordpress.svg",
    bgColor: "from-blue-500/5 to-cyan-500/5",
    highlights: [
      { title: "Facilité d'utilisation" },
      { title: "Extensible avec des plugins" },
      { title: "Thèmes personnalisables" }
    ],
    technologies: ["PHP", "MySQL", "JavaScript"],
    alternatives: ["Joomla", "Drupal", "Squarespace"]
  }
];

export default function ApplicationsClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('Toutes');
  const [sortBy, setSortBy] = useState<SortOption>('name');
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);

  const filteredApps = applications
    .filter(app => {
      if (selectedCategory !== 'Toutes' && app.category !== selectedCategory) return false;
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          app.name.toLowerCase().includes(query) ||
          app.description.toLowerCase().includes(query) ||
          app.tagline.toLowerCase().includes(query) ||
          app.alternatives?.some(alt => alt.toLowerCase().includes(query)) ||
          false
        );
      }
      return true;
    })
    .sort((a, b) => a.name.localeCompare(b.name)); // Tri par ordre alphabétique

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Section principale avec titre et filtres */}
      <Section
        id="applications"
        badge="APP STORE"
        title={
          <div className="text-center max-w-[800px] mx-auto">
            <h1 className="text-[2.75rem] sm:text-[3.5rem] leading-[1.1] font-medium tracking-[-0.02em] text-gray-900 dark:text-white">
              Solutions
              <span className="block bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                open source
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600/90 dark:text-gray-300/90">
              Des outils modernes pour optimiser votre infrastructure
            </p>
          </div>
        }
        className="pt-24"
      >
        {/* Barre de recherche et filtres */}
        <div className="max-w-[1200px] mx-auto px-4 py-12 space-y-6">
          {/* Recherche */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="search"
                placeholder="Rechercher une application ou une alternative (ex: Slack, Google Analytics...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="
                  w-full
                  px-4 py-3.5
                  pl-12
                  bg-white dark:bg-white/[0.02]
                  border border-gray-200 dark:border-white/[0.1]
                  rounded-[24px]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500/30
                  text-base
                  transition-all
                  hover:border-gray-300 dark:hover:border-white/[0.15]
                "
              />
              <svg 
                className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" 
                viewBox="0 0 24 24" 
                fill="none"
              >
                <path 
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Filtres */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Catégories */}
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`
                    px-4 py-2
                    rounded-full
                    text-sm
                    font-medium
                    whitespace-nowrap
                    transition-all
                    ${selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/[0.1] text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:hover:border-white/[0.15]'
                    }
                  `}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Tri */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="
                px-4 py-2
                bg-white dark:bg-white/[0.02]
                border border-gray-200 dark:border-white/[0.1]
                rounded-full
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500/30
                text-sm
                transition-all
                hover:border-gray-300 dark:hover:border-white/[0.15]
                min-w-[160px]
              "
            >
              <option value="recent">Plus récents</option>
              <option value="popular">Plus populaires</option>
              <option value="name">Alphabétique</option>
            </select>
          </div>
        </div>

        {/* Grille d'applications */}
        <div className="max-w-[1200px] mx-auto px-4">
          {filteredApps.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Aucune application ne correspond à votre recherche
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {filteredApps.map((app, index) => (
                <div 
                  key={index} 
                  className="group cursor-pointer" 
                  onClick={() => setSelectedApp(app)}
                >
                  <div className="
                    relative
                    p-4
                    rounded-2xl
                    transition-all
                    duration-300
                    hover:bg-gray-50 dark:hover:bg-white/[0.02]
                  ">
                    {/* Icône */}
                    <div className="relative w-full aspect-square mb-3">
                      <div className={`
                        absolute 
                        inset-0 
                        rounded-[20px]
                        bg-gradient-to-br ${app.bgColor}
                      `} />
                      <Image
                        src={app.image}
                        alt={app.name}
                        fill
                        className="object-contain p-4"
                      />
                    </div>

                    {/* Infos minimalistes */}
                    <div className="text-center">
                      <h2 className="text-[15px] font-medium text-gray-900 dark:text-white truncate">
                        {app.name}
                      </h2>
                      <p className="text-[13px] text-gray-600/90 dark:text-gray-400/90 truncate mt-0.5">
                        {app.tagline}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Section>

      <ApplicationModal
        app={selectedApp}
        isOpen={selectedApp !== null}
        onClose={() => setSelectedApp(null)}
      />
    </main>
  );
} 