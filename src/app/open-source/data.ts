import React from 'react';
import { ExpertiseIcon, ControlIcon, SupportIcon, DiscoveryIcon, DesignIcon, DeployIcon, EvolveIcon } from './components/Icons';

export interface Feature {
  title: string;
  description: string;
  icon: () => React.ReactElement;
  color: string;
}

export interface App {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  category: string;
  logo: string;
  url: string;
  tags: string[];
  gradient: string;
  highlights?: string[];
}

export const features: Feature[] = [
  {
    title: "Liberté totale",
    description: "Vos données, vos choix. Une maîtrise complète de votre environnement numérique",
    icon: ExpertiseIcon,
    color: "blue"
  },
  {
    title: "Simplicité native",
    description: "Une expérience intuitive qui s'adapte naturellement à votre façon de travailler",
    icon: ControlIcon,
    color: "purple"
  },
  {
    title: "Évolution continue",
    description: "Des solutions qui grandissent avec vous, enrichies par une communauté mondiale",
    icon: SupportIcon,
    color: "green"
  }
];

export const apps = [
  {
    id: 'nextcloud',
    name: 'Nextcloud',
    description: "Votre espace de travail tout-en-un",
    longDescription: "Collaborez, partagez et créez en toute liberté",
    category: 'Collaboration',
    logo: '/apps/nextcloud.webp',
    url: 'https://nextcloud.com',
    tags: ['Stockage', 'Collaboration', 'Productivité'],
    gradient: "from-[#0082c9] to-[#30b6ff]",
    highlights: [
      "Tous vos fichiers, accessibles partout",
      "Suite bureautique collaborative",
      "Synchronisation en temps réel"
    ]
  },
  {
    id: 'mattermost',
    name: 'Mattermost',
    description: "La communication d'équipe réinventée",
    longDescription: "Échangez et collaborez en toute sécurité",
    category: 'Communication',
    logo: '/apps/mattermost.svg',
    url: 'https://mattermost.com',
    tags: ['Chat', 'Collaboration', 'Équipe'],
    gradient: "from-[#0058cc] to-[#339cff]"
  },
  {
    id: 'keycloak',
    name: 'Keycloak',
    description: "La sécurité simplifiée",
    longDescription: "Une authentification unifiée pour toutes vos applications",
    category: 'Sécurité',
    logo: '/apps/keycloak.svg',
    url: 'https://keycloak.org',
    tags: ['Sécurité', 'SSO', 'Identité'],
    gradient: "from-[#4b4b4b] to-[#7d7d7d]"
  }
];

export const transitionSteps = [
  {
    number: "01",
    title: "Découverte",
    description: "Explorez un nouvel horizon digital",
    icon: DiscoveryIcon,
    color: "blue"
  },
  {
    number: "02",
    title: "Design",
    description: "Créez votre expérience idéale",
    icon: DesignIcon,
    color: "purple"
  },
  {
    number: "03",
    title: "Déploiement",
    description: "Transformez votre vision en réalité",
    icon: DeployIcon,
    color: "green"
  },
  {
    number: "04",
    title: "Réussite",
    description: "Profitez de votre liberté numérique",
    icon: EvolveIcon,
    color: "orange"
  }
]; 