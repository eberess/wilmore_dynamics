interface AppDetails {
  features: string[];
  requirements: {
    cpu: string;
    memory: string;
    other?: string[];
  };
  installation: {
    command: string;
    guide: string;
  };
  documentation: string;
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
  features?: string[];
  requirements?: {
    cpu: string;
    memory: string;
    other?: string;
  };
  installation?: string;
  documentation?: string;
  details?: AppDetails;
}

export const apps: App[] = [
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    description: "Système open source pour automatiser le déploiement, la mise à l'échelle et la gestion des applications conteneurisées",
    longDescription: "Kubernetes est une plateforme portable et extensible pour la gestion des charges de travail et des services conteneurisés. Elle facilite l'automatisation et la configuration déclarative. Elle dispose d'un écosystème vaste et en rapide expansion.",
    category: 'Infrastructure',
    logo: '/apps/kubernetes.svg',
    url: 'https://kubernetes.io',
    tags: ['Container', 'Orchestration', 'Cloud Native'],
    features: [
      'Déploiement automatisé',
      "Mise à l'échelle horizontale",
      "Équilibrage de charge",
      'Auto-réparation',
      'Gestion de la configuration'
    ],
    requirements: {
      cpu: '2 CPU',
      memory: '2GB RAM',
      other: 'Docker ou autre runtime de conteneur'
    },
    installation: 'curl -sfL https://get.k3s.io | sh -',
    documentation: 'https://kubernetes.io/docs'
  },
  {
    id: 'grafana',
    name: 'Grafana',
    description: "Plateforme de visualisation et d'analyse pour vos métriques, logs et traces",
    longDescription: "Grafana est la plateforme open source leader pour la visualisation et l'analyse de données opérationnelles. Elle permet de créer des tableaux de bord dynamiques et d'explorer vos données en temps réel.",
    category: 'Monitoring',
    logo: '/apps/grafana.svg',
    url: 'https://grafana.com',
    tags: ['Monitoring', 'Visualisation', 'Observability'],
    features: [
      'Tableaux de bord personnalisables',
      'Support multi-sources de données',
      'Alerting avancé',
      'Exploration de logs',
      'Visualisation de traces'
    ],
    requirements: {
      cpu: '1 CPU',
      memory: '256MB RAM',
      other: 'Compatible avec la plupart des bases de données'
    },
    installation: 'docker run -d -p 3000:3000 grafana/grafana',
    documentation: 'https://grafana.com/docs'
  },
  // ... autres apps
];

export const categories = [
  'Toutes',
  'Infrastructure',
  'Monitoring',
  'Base de données',
  'Sécurité',
  // ... autres catégories
]; 