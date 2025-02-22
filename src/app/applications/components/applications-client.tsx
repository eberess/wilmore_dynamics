"use client";

import Section from "@/components/Section";
import Image from "next/image";
import FadeIn from '@/components/FadeIn';
import { useState } from 'react';
import { ApplicationModal } from "./application-modal";
import type { Application } from "../types";

// Types et données des applications
type Category = 'Toutes' | 'Infrastructure' | 'Collaboration' | 'Productivité' | 'Marketing' | 'Automatisation' | 'Gestion';
type SortOption = 'recent' | 'popular' | 'name';

const categories: Category[] = ['Toutes', 'Infrastructure', 'Collaboration', 'Productivité', 'Marketing', 'Automatisation', 'Gestion'];

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
    image: "/apps/gitea.svg",
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
    image: "/apps/nextcloud.webp",
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
    image: "/apps/paperless-ngx.webp",
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
    image: "/apps/rocket_chat.webp",
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
    image: "/apps/umami.svg",
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
    image: "/apps/docusaurus.webp",
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
    image: "/apps/papermark.webp",
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
    image: "/apps/penpot.svg",
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
    image: "/apps/invoice-ninja.svg",
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
    image: "/apps/netbird.webp",
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
    image: "/apps/coolify.webp",
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
    image: "/apps/glpi.webp",
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
    image: "/apps/appsmith.webp",
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
    image: "/apps/plane.webp",
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
    image: "/apps/docassemble.webp",
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
    image: "/apps/syncthing.webp",
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
    image: "/apps/coder.webp",
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
    image: "/apps/heyform.webp",
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
    name: "Forjeo",
    tagline: "Forge logicielle complète",
    description: "Plateforme de développement logiciel tout-en-un. Forjeo combine gestion de code, CI/CD, gestion de projet et documentation dans une interface unifiée et moderne.",
    category: "Productivité",
    image: "/apps/forjeo.webp",
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
    image: "/apps/serpbear_dark.webp",
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
    image: "/apps/pingvin.webp",
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
    image: "/apps/huggin.webp",
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
    image: "/apps/kitsu.svg",
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
    image: "/apps/opensign.webp",
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
    image: "/apps/openchangelog.webp",
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
    image: "/apps/wireguard.webp",
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
    image: "/apps/peppermint.webp",
    bgColor: "from-emerald-500/5 to-green-500/5",
    highlights: [
      { title: "Interface intuitive" },
      { title: "Automatisation" },
      { title: "Personnalisable" }
    ],
    technologies: ["PHP", "Laravel", "Vue.js", "MySQL"],
    alternatives: ["Zendesk", "Freshdesk", "Help Scout"]
  }
];

export default function ApplicationsClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('Toutes');
  const [sortBy, setSortBy] = useState<SortOption>('popular');
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
    });

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