import { App, Category } from './types';

export const apps: App[] = [
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    description: "Système open source pour automatiser le déploiement et la gestion des applications conteneurisées",
    longDescription: "Plateforme open source qui automatise le déploiement, la mise à l'échelle et la gestion des applications conteneurisées. Conçue pour évoluer sans augmenter votre équipe d'ops.",
    category: 'Infrastructure',
    logo: '/apps/kubernetes.svg',
    url: 'https://kubernetes.io',
    tags: ['Container', 'Orchestration', 'Cloud Native'],
    highlights: [
      'Auto-scaling automatique',
      'Haute disponibilité',
      'Déploiement sans interruption'
    ],
    maturity: 'Stable',
    projectInfo: {
      github: 'kubernetes/kubernetes',
      license: 'Apache-2.0'
    },
    alternatives: [
      'Amazon EKS',
      'Google GKE',
      'Azure AKS'
    ],
    integrations: [
      'Prometheus',
      'Grafana',
      'Istio'
    ]
  },
  {
    id: 'grafana',
    name: 'Grafana',
    description: "Plateforme de visualisation et d'analyse pour vos métriques",
    longDescription: "Solution open source de visualisation et d'analyse qui vous permet de créer des tableaux de bord élégants et de comprendre facilement vos données.",
    category: 'Infrastructure',
    logo: '/apps/grafana.svg',
    url: 'https://grafana.com',
    tags: ['Monitoring', 'Visualisation', 'Observability'],
    highlights: [
      'Tableaux de bord intuitifs',
      'Multi-sources de données',
      'Alerting intelligent'
    ],
    maturity: 'Stable',
    projectInfo: {
      github: 'grafana/grafana',
      license: 'AGPL-3.0'
    },
    alternatives: [
      'Datadog',
      'New Relic',
      'Kibana'
    ],
    integrations: [
      'Prometheus',
      'Elasticsearch',
      'InfluxDB',
      'Loki'
    ]
  },
  {
    id: 'nextcloud',
    name: 'Nextcloud',
    description: 'Alternative à Google Drive et Office 365. Stockage, partage de fichiers et collaboration en temps réel.',
    longDescription: 'Suite collaborative open source qui vous permet de garder le contrôle total sur vos données. Alternative complète aux services cloud propriétaires.',
    category: 'Communication',
    logo: '/apps/nextcloud.webp',
    url: 'https://nextcloud.com',
    tags: ['Stockage', 'Collaboration', 'Office'],
    highlights: [
      'Stockage et synchronisation',
      'Édition collaborative',
      'Visioconférence intégrée'
    ],
    maturity: 'Stable',
    projectInfo: {
      github: 'nextcloud/server',
      license: 'AGPL-3.0'
    },
    alternatives: [
      'Google Workspace',
      'Microsoft 365',
      'Dropbox'
    ],
    integrations: [
      'OnlyOffice',
      'Collabora Online',
      'Talk'
    ]
  },
  {
    id: 'matrix-synapse',
    name: 'Matrix Synapse',
    description: 'Messagerie décentralisée et chiffrée. Alternative à Slack et Microsoft Teams.',
    longDescription: 'Serveur de communication décentralisé pour des solutions de messagerie sécurisées et interopérables. Alternative open source aux plateformes propriétaires.',
    category: 'Communication',
    logo: '/apps/synapse.webp',
    url: 'https://matrix.org',
    tags: ['Chat', 'Visio', 'E2E'],
    highlights: [
      'Chiffrement de bout en bout',
      'Appels vidéo',
      'Fédération décentralisée'
    ],
    maturity: 'Stable',
    projectInfo: {
      github: 'matrix-org/synapse',
      license: 'Apache-2.0'
    },
    alternatives: [
      'Slack',
      'Microsoft Teams',
      'Discord'
    ],
    integrations: [
      'Element',
      'FluffyChat',
      'Jitsi Meet'
    ]
  },
  {
    id: 'prometheus',
    name: 'Prometheus',
    description: 'Système de monitoring et alerting pour vos applications et infrastructure.',
    longDescription: 'Système de monitoring et d\'alerting open source conçu pour la fiabilité. Collecte et analyse vos métriques pour une visibilité complète de votre infrastructure.',
    category: 'Infrastructure',
    logo: '/apps/prometheus.svg',
    url: 'https://prometheus.io',
    tags: ['Monitoring', 'Alerting', 'Metrics'],
    highlights: [
      'Collecte de métriques temps réel',
      'Requêtes et alertes puissantes',
      'Service discovery intégré'
    ],
    maturity: 'Stable',
    projectInfo: {
      github: 'prometheus/prometheus',
      license: 'Apache-2.0'
    },
    alternatives: [
      'Datadog',
      'New Relic',
      'Dynatrace'
    ],
    integrations: [
      'Grafana',
      'Alertmanager',
      'Node Exporter'
    ]
  },
  {
    id: 'vault',
    name: 'HashiCorp Vault',
    description: 'Gestion sécurisée des secrets et des accès pour vos applications.',
    longDescription: "Solution de gestion des secrets qui permet de sécuriser, stocker et contrôler l'accès aux jetons, mots de passe, certificats et clés de chiffrement. ",
    category: 'Sécurité',
    logo: '/apps/vault.svg',
    tags: ['Secrets', 'PKI', 'Encryption'],
    url: 'https://www.vaultproject.io',
    highlights: [
      'Gestion des secrets',
      'PKI dynamique',
      "Contrôle d'accès"
    ],
    maturity: 'Stable',
    projectInfo: {
      github: 'hashicorp/vault',
      license: 'MPL-2.0'
    },
    alternatives: [
      'AWS Secrets Manager',
      'Azure Key Vault',
      'CyberArk'
    ],
    integrations: [
      'Kubernetes',
      'Terraform',
      'Consul'
    ]
  },
  {
    id: 'keycloak',
    name: 'Keycloak',
    description: 'Solution d\'authentification et d\'autorisation pour vos applications.',
    longDescription: 'Solution IAM open source qui sécurise vos applications et services avec une gestion centralisée des identités et des accès.',
    category: 'Sécurité',
    logo: '/apps/keycloak.svg',
    tags: ['IAM', 'SSO', 'OAuth2'],
    url: 'https://www.keycloak.org',
    highlights: [
      'Single Sign-On (SSO)',
      'Support des standards OAuth2',
      'Intégration simplifiée'
    ],
    maturity: 'Stable',
    projectInfo: {
      github: 'keycloak/keycloak',
      license: 'Apache-2.0'
    },
    alternatives: [
      'Okta',
      'Auth0',
      'Azure AD'
    ],
    integrations: [
      'OpenID Connect',
      'SAML',
      'LDAP'
    ]
  },
  {
    id: 'gitea',
    name: 'Gitea',
    description: 'Forge logicielle légère et performante. Alternative à GitHub.',
    longDescription: 'Plateforme de développement collaborative légère et auto-hébergée qui simplifie la gestion de vos projets Git.',
    category: 'Développement',
    logo: '/apps/gitea.svg',
    tags: ['Git', 'CI/CD', 'DevOps'],
    url: 'https://gitea.io',
    highlights: [
      'Interface intuitive',
      'Faible consommation de ressources',
      'Installation simple'
    ],
    maturity: 'Stable',
    projectInfo: {
      github: 'go-gitea/gitea',
      license: 'MIT'
    },
    alternatives: [
      'GitHub',
      'GitLab',
      'Bitbucket'
    ],
    integrations: [
      'Jenkins',
      'Drone CI',
      'Actions'
    ]
  },
  {
    id: 'minio',
    name: 'MinIO',
    description: 'Stockage objet S3 haute performance. Alternative à Amazon S3.',
    longDescription: 'Solution de stockage objet compatible S3 conçue pour les charges de travail exigeantes et l\'IA/ML.',
    category: 'Infrastructure',
    logo: '/apps/minio.svg',
    tags: ['S3', 'Storage', 'Cloud'],
    url: 'https://min.io',
    highlights: [
      'Compatible Amazon S3',
      'Performances élevées',
      'Architecture moderne'
    ],
    maturity: 'Stable',
    projectInfo: {
      github: 'minio/minio',
      license: 'AGPL-3.0'
    },
    alternatives: [
      'Amazon S3',
      'Google Cloud Storage',
      'Azure Blob Storage'
    ],
    integrations: [
      'Kubernetes',
      'Docker',
      'Terraform'
    ]
  },
  {
    id: 'strapi',
    name: 'Strapi',
    description: 'CMS headless flexible et auto-hébergé. Alternative à Contentful et WordPress.',
    longDescription: 'CMS headless qui vous donne la liberté de créer, gérer et exposer votre contenu via API.',
    category: 'Développement',
    logo: '/apps/strapi.svg',
    tags: ['CMS', 'API', 'Headless'],
    url: 'https://strapi.io',
    highlights: [
      'API générée automatiquement',
      'Interface d\'administration personnalisable',
      'Extensible via plugins'
    ],
    maturity: 'Stable',
    projectInfo: {
      github: 'strapi/strapi',
      license: 'MIT'
    },
    alternatives: [
      'Contentful',
      'WordPress',
      'Sanity'
    ],
    integrations: [
      'GraphQL',
      'REST API',
      'NextJS'
    ]
  },
  {
    id: 'directus',
    name: 'Directus',
    description: 'Plateforme de gestion de contenu et API automatique pour vos données.',
    longDescription: 'Plateforme qui transforme votre base de données en API et interface d\'administration intuitives.',
    category: 'Développement',
    logo: '/apps/directus.svg',
    tags: ['CMS', 'API', 'Database'],
    url: 'https://directus.io',
    highlights: [
      'API REST et GraphQL',
      'Gestion fine des permissions',
      'Interface moderne'
    ],
    maturity: 'Stable',
    projectInfo: {
      github: 'directus/directus',
      license: 'GPL-3.0'
    },
    alternatives: [
      'Airtable',
      'Baserow',
      'Nocodb'
    ],
    integrations: [
      'GraphQL',
      'REST API',
      'OAuth2'
    ]
  },
  {
    id: 'ghost',
    name: 'Ghost',
    description: 'Plateforme de publication moderne et performante. Alternative à Medium.',
    longDescription: 'Plateforme de publication moderne conçue pour les créateurs de contenu et les équipes éditoriales.',
    category: 'Productivité',
    logo: '/apps/ghost.png',
    tags: ['Blog', 'CMS', 'Publishing'],
    url: 'https://ghost.org',
    highlights: [
      'Éditeur moderne',
      'Optimisé pour le SEO',
      'Système de membres intégré'
    ],
    maturity: 'Stable',
    projectInfo: {
      github: 'TryGhost/Ghost',
      license: 'MIT'
    },
    alternatives: [
      'Medium',
      'Substack',
      'WordPress'
    ],
    integrations: [
      'Stripe',
      'Mailgun',
      'Zapier'
    ]
  },
  {
    id: 'matomo',
    name: 'Matomo',
    description: 'Solution d\'analyse web respectueuse de la vie privée. Alternative à Google Analytics.',
    longDescription: 'Plateforme d\'analyse web qui vous donne le contrôle total de vos données tout en respectant la vie privée de vos utilisateurs.',
    category: 'Productivité',
    logo: '/apps/matomo.svg',
    url: 'https://matomo.org',
    tags: ['Analytics', 'Privacy', 'RGPD'],
    highlights: [
      'Propriété totale des données',
      'Respect de la vie privée',
      'Analyses avancées'
    ],
    maturity: 'Stable',
    projectInfo: {
      github: 'matomo-org/matomo',
      license: 'GPL-3.0'
    },
    alternatives: [
      'Google Analytics',
      'Plausible',
      'Fathom'
    ],
    integrations: [
      'WordPress',
      'WooCommerce',
      'PrestaShop'
    ]
  },
  {
    id: 'mattermost',
    name: 'Mattermost',
    description: 'Plateforme de collaboration sécurisée. Alternative à Slack et Microsoft Teams.',
    longDescription: 'Plateforme de communication d\'équipe open source qui combine la messagerie, le partage de fichiers et la gestion de projet.',
    category: 'Communication',
    logo: '/apps/mattermost.svg',
    url: 'https://mattermost.com',
    tags: ['Chat', 'Collaboration', 'DevOps'],
    highlights: [
      'Communication sécurisée',
      'Intégrations DevOps',
      'Personnalisation complète'
    ],
    maturity: 'Stable',
    projectInfo: {
      github: 'mattermost/mattermost',
      license: 'AGPL-3.0'
    },
    alternatives: [
      'Slack',
      'Microsoft Teams',
      'Discord'
    ],
    integrations: [
      'GitLab',
      'Jenkins',
      'Jira'
    ]
  },
  {
    id: 'n8n',
    name: 'n8n',
    description: 'Automatisation de flux de travail flexible et extensible. Alternative à Zapier.',
    longDescription: 'Plateforme d\'automatisation qui vous permet de connecter n\'importe quel service et de créer des workflows complexes.',
    category: 'Productivité',
    logo: '/apps/n8n.svg',
    url: 'https://n8n.io',
    tags: ['Automation', 'Workflow', 'Integration'],
    highlights: [
      'Interface visuelle intuitive',
      'Plus de 200 intégrations',
      'Extensible via code'
    ],
    maturity: 'Stable',
    projectInfo: {
      github: 'n8n-io/n8n',
      license: 'Apache-2.0'
    },
    alternatives: [
      'Zapier',
      'Make (Integromat)',
      'Pipedream'
    ],
    integrations: [
      'Slack',
      'GitHub',
      'Google Workspace'
    ]
  },
  {
    id: 'proxmox',
    name: 'Proxmox',
    description: 'Plateforme de virtualisation complète. Alternative à VMware ESXi.',
    longDescription: 'Solution de virtualisation enterprise qui combine la gestion de machines virtuelles et de conteneurs dans une interface unifiée.',
    category: 'Infrastructure',
    logo: '/apps/proxmox.svg',
    url: 'https://www.proxmox.com',
    tags: ['Virtualisation', 'Conteneurs', 'Backup'],
    highlights: [
      'Gestion VMs et conteneurs',
      'Haute disponibilité',
      'Sauvegarde intégrée'
    ],
    maturity: 'Stable',
    projectInfo: {
      github: 'proxmox/pve-manager',
      license: 'AGPL-3.0'
    },
    alternatives: [
      'VMware ESXi',
      'Hyper-V',
      'XenServer'
    ],
    integrations: [
      'Ceph',
      'ZFS',
      'LDAP'
    ]
  },
  {
    id: 'authentik',
    name: 'Authentik',
    description: 'Solution moderne de gestion des identités et des accès. Alternative à Okta.',
    longDescription: 'Plateforme IAM moderne qui unifie l\'authentification et l\'autorisation pour tous vos services.',
    category: 'Sécurité',
    logo: '/apps/authentik.svg',
    url: 'https://goauthentik.io',
    tags: ['IAM', 'SSO', 'MFA'],
    highlights: [
      'Interface moderne',
      'Flux adaptatifs',
      'Multi-tenant natif'
    ],
    maturity: 'Stable',
    projectInfo: {
      github: 'goauthentik/authentik',
      license: 'GPL-3.0'
    },
    alternatives: [
      'Okta',
      'Auth0',
      'Azure AD'
    ],
    integrations: [
      'SAML',
      'LDAP',
      'OAuth2'
    ]
  },
  {
    id: 'umami',
    name: 'Umami',
    description: 'Analytics web simple et rapide. Alternative légère à Google Analytics.',
    longDescription: 'Solution d\'analyse web minimaliste qui respecte la vie privée de vos utilisateurs tout en offrant les métriques essentielles.',
    category: 'Productivité',
    logo: '/apps/umami.svg',
    url: 'https://umami.is',
    tags: ['Analytics', 'Privacy', 'Performance'],
    highlights: [
      'Installation simple',
      'Interface épurée',
      'Temps réel natif'
    ],
    maturity: 'Stable',
    projectInfo: {
      github: 'umami-software/umami',
      license: 'MIT'
    },
    alternatives: [
      'Google Analytics',
      'Plausible',
      'Fathom'
    ],
    integrations: [
      'Vercel',
      'Netlify',
      'WordPress'
    ]
  },
  {
    id: 'paperless-ngx',
    name: 'Paperless-ngx',
    description: 'Système de gestion documentaire intelligent. Alternative à Evernote.',
    longDescription: 'Solution de gestion documentaire qui numérise, indexe et organise automatiquement tous vos documents papier.',
    category: 'Productivité',
    logo: '/apps/paperless-ngx.svg',
    url: 'https://docs.paperless-ngx.com',
    tags: ['Documents', 'OCR', 'Archive'],
    highlights: [
      'OCR automatique',
      'Classification intelligente',
      'Recherche avancée'
    ],
    maturity: 'Stable',
    projectInfo: {
      github: 'paperless-ngx/paperless-ngx',
      license: 'GPL-3.0'
    },
    alternatives: [
      'Evernote',
      'DEVONthink',
      'Neat'
    ],
    integrations: [
      'IMAP',
      'S3',
      'Gotenberg'
    ]
  },
  {
    id: 'wikijs',
    name: 'Wiki.js',
    description: 'Plateforme de documentation moderne et performante. Alternative à Confluence.',
    longDescription: 'Wiki nouvelle génération avec éditeur WYSIWYG, recherche temps réel et support multi-langues.',
    category: 'Développement',
    logo: '/apps/wikijs.svg',
    url: 'https://js.wiki',
    tags: ['Wiki', 'Documentation', 'Markdown'],
    highlights: [
      'Éditeur visuel moderne',
      'Gestion des droits granulaire',
      'Multi-langues natif'
    ],
    maturity: 'Stable',
    projectInfo: {
      github: 'Requarks/wiki',
      license: 'AGPL-3.0'
    },
    alternatives: [
      'Confluence',
      'BookStack',
      'MediaWiki'
    ],
    integrations: [
      'OpenID Connect',
      'Git',
      'S3'
    ]
  },
  {
    id: 'appsmith',
    name: 'Appsmith',
    description: 'Plateforme de création d\'applications internes. Alternative à Retool.',
    longDescription: 'Créez rapidement des applications métier personnalisées avec une interface drag-and-drop et des connexions à vos données.',
    category: 'Développement',
    logo: '/apps/appsmith.svg',
    url: 'https://www.appsmith.com',
    tags: ['Low-Code', 'Internal Tools', 'Dashboard'],
    highlights: [
      'Drag-and-drop intuitif',
      'Connexion multi-sources',
      'Déploiement simplifié'
    ],
    maturity: 'Stable',
    projectInfo: {
      github: 'appsmithorg/appsmith',
      license: 'Apache-2.0'
    },
    alternatives: [
      'Retool',
      'Internal.io',
      'Budibase'
    ],
    integrations: [
      'PostgreSQL',
      'MongoDB',
      'REST API'
    ]
  },
  {
    id: 'discourse',
    name: 'Discourse',
    description: 'Plateforme de forum moderne et communautaire. Alternative à Vanilla Forums.',
    longDescription: 'Forum de discussion nouvelle génération qui modernise les échanges communautaires avec des fonctionnalités modernes et une interface intuitive.',
    category: 'Communication',
    logo: '/apps/discourse.svg',
    url: 'https://www.discourse.org',
    tags: ['Forum', 'Communauté', 'Discussion'],
    highlights: [
      'Interface responsive moderne',
      'Modération intelligente',
      'Gamification intégrée'
    ],
    maturity: 'Stable',
    projectInfo: {
      github: 'discourse/discourse',
      license: 'GPL-2.0'
    },
    alternatives: [
      'Vanilla Forums',
      'Flarum',
      'NodeBB'
    ],
    integrations: [
      'OAuth2',
      'SMTP',
      'S3'
    ]
  },
  {
    id: 'element',
    name: 'Element',
    description: 'Client de messagerie sécurisé basé sur Matrix. Alternative à Slack.',
    longDescription: 'Application de messagerie professionnelle qui offre un contrôle total sur vos communications avec chiffrement de bout en bout.',
    category: 'Communication',
    logo: '/apps/element.svg',
    url: 'https://element.io',
    tags: ['Chat', 'E2E', 'Collaboration'],
    highlights: [
      'Chiffrement de bout en bout',
      'Salles de discussion',
      'Collaboration avancée'
    ],
    maturity: 'Stable',
    projectInfo: {
      github: 'vector-im/element-web',
      license: 'Apache-2.0'
    },
    alternatives: [
      'Slack',
      'Discord',
      'Microsoft Teams'
    ],
    integrations: [
      'Matrix',
      'Jitsi',
      'Widgets API'
    ]
  },
  {
    id: 'rustdesk',
    name: 'RustDesk',
    description: 'Solution de bureau à distance open source. Alternative à TeamViewer.',
    longDescription: 'Outil de contrôle à distance sécurisé et performant qui ne nécessite pas de configuration réseau complexe.',
    category: 'Productivité',
    logo: '/apps/rustdesk.svg',
    url: 'https://rustdesk.com',
    tags: ['Remote Desktop', 'Support', 'Collaboration'],
    highlights: [
      'Sans configuration réseau',
      'Performances natives',
      'Multi-plateforme'
    ],
    maturity: 'Stable',
    projectInfo: {
      github: 'rustdesk/rustdesk',
      license: 'AGPL-3.0'
    },
    alternatives: [
      'TeamViewer',
      'AnyDesk',
      'Parsec'
    ],
    integrations: [
      'Wayland',
      'RDP',
      'NAT Traversal'
    ]
  },
  {
    id: 'excalidraw',
    name: 'Excalidraw',
    description: 'Tableau blanc collaboratif minimaliste. Alternative à Miro.',
    longDescription: 'Outil de dessin collaboratif qui permet de créer des diagrammes et des croquis avec un style manuscrit élégant.',
    category: 'Communication',
    logo: '/apps/excalidraw.svg',
    url: 'https://excalidraw.com',
    tags: ['Whiteboard', 'Diagrammes', 'Collaboration'],
    highlights: [
      'Style manuscrit unique',
      'Collaboration en temps réel',
      'Export multiple formats'
    ],
    maturity: 'Stable',
    projectInfo: {
      github: 'excalidraw/excalidraw',
      license: 'MIT'
    },
    alternatives: [
      'Miro',
      'FigJam',
      'Whimsical'
    ],
    integrations: [
      'Live Collaboration',
      'VS Code',
      'Notion'
    ]
  },
  {
    id: 'glpi',
    name: 'GLPI',
    description: 'Solution complète de gestion de parc informatique. Alternative à ServiceNow.',
    longDescription: 'Plateforme ITSM open source qui gère l\'inventaire, le support et les services IT de votre organisation.',
    category: 'Infrastructure',
    logo: '/apps/glpi.svg',
    url: 'https://glpi-project.org',
    tags: ['ITSM', 'Helpdesk', 'Inventaire'],
    highlights: [
      'Gestion d\'inventaire complète',
      'Tickets et workflows',
      'Portail utilisateur'
    ],
    maturity: 'Stable',
    projectInfo: {
      github: 'glpi-project/glpi',
      license: 'GPL-3.0'
    },
    alternatives: [
      'ServiceNow',
      'Jira Service Management',
      'FreshService'
    ],
    integrations: [
      'OCS Inventory',
      'FusionInventory',
      'Active Directory'
    ]
  },
  {
    id: 'listmonk',
    name: 'Listmonk',
    description: 'Plateforme de newsletter auto-hébergée. Alternative à Mailchimp.',
    longDescription: 'Solution de gestion de campagnes email performante et respectueuse de la vie privée pour vos newsletters et communications.',
    category: 'Communication',
    logo: '/apps/listmonk.svg',
    url: 'https://listmonk.app',
    tags: ['Email', 'Newsletter', 'Marketing'],
    highlights: [
      'Performances optimisées',
      'Templates personnalisables',
      'Analytics intégrés'
    ],
    maturity: 'Stable',
    projectInfo: {
      github: 'knadh/listmonk',
      license: 'AGPL-3.0'
    },
    alternatives: [
      'Mailchimp',
      'Sendinblue',
      'Mailjet'
    ],
    integrations: [
      'SMTP',
      'Amazon SES',
      'PostgreSQL'
    ]
  },
  {
    id: 'docusaurus',
    name: 'Docusaurus',
    description: 'Générateur de documentation moderne. Alternative à ReadTheDocs.',
    longDescription: 'Outil de documentation technique qui transforme vos fichiers markdown en un site web moderne et optimisé pour le référencement.',
    category: 'Développement',
    logo: '/apps/docusaurus.svg',
    url: 'https://docusaurus.io',
    tags: ['Documentation', 'Markdown', 'React'],
    highlights: [
      'Documentation versionnée',
      'Recherche intégrée',
      'Déploiement optimisé'
    ],
    maturity: 'Stable',
    projectInfo: {
      github: 'facebook/docusaurus',
      license: 'MIT'
    },
    alternatives: [
      'ReadTheDocs',
      'GitBook',
      'VuePress'
    ],
    integrations: [
      'MDX',
      'Algolia',
      'GitHub Pages'
    ]
  },
  {
    id: 'drawio',
    name: 'Draw.io',
    description: 'Outil de diagrammes et de schémas. Alternative à Lucidchart.',
    longDescription: 'Éditeur de diagrammes complet qui permet de créer tous types de schémas techniques et professionnels.',
    category: 'Développement',
    logo: '/apps/drawio.svg',
    url: 'https://www.drawio.com',
    tags: ['Diagrammes', 'UML', 'Flowcharts'],
    highlights: [
      'Large bibliothèque de formes',
      'Export multi-formats',
      'Intégration facile'
    ],
    maturity: 'Stable',
    projectInfo: {
      github: 'jgraph/drawio',
      license: 'Apache-2.0'
    },
    alternatives: [
      'Lucidchart',
      'Visio',
      'Diagrams.net'
    ],
    integrations: [
      'Confluence',
      'VS Code',
      'GitHub'
    ]
  },
  {
    id: 'penpot',
    name: 'Penpot',
    description: 'Plateforme de design et de prototypage. Alternative à Figma.',
    longDescription: 'Premier outil de design et de prototypage open source conçu pour les équipes de design et de développement.',
    category: 'Développement',
    logo: '/apps/penpot.svg',
    url: 'https://penpot.app',
    tags: ['Design', 'Prototypage', 'SVG'],
    highlights: [
      'Format SVG natif',
      'Collaboration en temps réel',
      'Design Systems'
    ],
    maturity: 'Stable',
    projectInfo: {
      github: 'penpot/penpot',
      license: 'MPL-2.0'
    },
    alternatives: [
      'Figma',
      'Adobe XD',
      'Sketch'
    ],
    integrations: [
      'Git',
      'Slack',
      'Design Systems'
    ]
  },
  {
    id: 'coolify',
    name: 'Coolify',
    description: 'Plateforme de déploiement auto-hébergée. Alternative à Heroku.',
    longDescription: 'Solution de déploiement qui simplifie l\'hébergement de vos applications, bases de données et services en quelques clics.',
    category: 'Développement',
    logo: '/apps/coolify.svg',
    url: 'https://coolify.io',
    tags: ['PaaS', 'Déploiement', 'DevOps'],
    highlights: [
      'Interface intuitive',
      'Déploiement automatisé',
      'Multi-technologies'
    ],
    maturity: 'En croissance',
    projectInfo: {
      github: 'coollabsio/coolify',
      license: 'Apache-2.0'
    },
    alternatives: [
      'Heroku',
      'CapRover',
      'Dokku'
    ],
    integrations: [
      'Docker',
      'Git',
      'Traefik'
    ]
  },
  {
    id: 'wordpress',
    name: 'WordPress',
    description: 'CMS le plus populaire au monde. Alternative à Wix et Webflow.',
    longDescription: 'Système de gestion de contenu flexible qui propulse plus d\'un tiers du web avec une grande communauté.',
    category: 'Productivité',
    logo: '/apps/wordpress.svg',
    url: 'https://wordpress.org',
    tags: ['CMS', 'Blog', 'eCommerce'],
    highlights: [
      'Extensible via plugins',
      'Thèmes personnalisables',
      'Grande communauté'
    ],
    maturity: 'Stable',
    projectInfo: {
      github: 'WordPress/WordPress',
      license: 'GPL-2.0'
    },
    alternatives: [
      'Wix',
      'Webflow',
      'Squarespace'
    ],
    integrations: [
      'WooCommerce',
      'Elementor',
      'Yoast SEO'
    ]
  },
  {
    id: 'coder',
    name: 'Coder',
    description: 'Environnements de développement à distance. Alternative à GitHub Codespaces.',
    longDescription: 'Plateforme qui permet aux équipes de développement de créer, partager et sécuriser des environnements de développement à distance.',
    category: 'Développement',
    logo: '/apps/coder.svg',
    url: 'https://coder.com',
    tags: ['IDE', 'Remote', 'DevOps'],
    highlights: [
      'Environnements standardisés',
      'Sécurité renforcée',
      'Intégration DevOps'
    ],
    maturity: 'Stable',
    projectInfo: {
      github: 'coder/coder',
      license: 'AGPL-3.0'
    },
    alternatives: [
      'GitHub Codespaces',
      'GitPod',
      'Cloud9'
    ],
    integrations: [
      'Terraform',
      'Docker',
      'Kubernetes'
    ]
  },
  {
    id: 'answer',
    name: 'Answer',
    description: 'Plateforme Q&A open source. Alternative à Stack Overflow Enterprise.',
    longDescription: 'Solution de questions-réponses qui permet de créer une base de connaissances collaborative pour votre entreprise ou communauté.',
    category: 'Communication',
    logo: '/apps/answer.svg',
    url: 'https://answer.dev',
    tags: ['Q&A', 'Knowledge Base', 'Community'],
    highlights: [
      'Interface moderne',
      'Gamification intégrée',
      'Personnalisation avancée'
    ],
    maturity: 'En croissance',
    projectInfo: {
      github: 'answerdev/answer',
      license: 'Apache-2.0'
    },
    alternatives: [
      'Stack Overflow Enterprise',
      'Discourse',
      'Question2Answer'
    ],
    integrations: [
      'OAuth2',
      'Markdown',
      'ElasticSearch'
    ]
  },
  {
    id: 'docassemble',
    name: 'Docassemble',
    description: 'Automatisation de documents juridiques. Alternative à DocuSign.',
    longDescription: 'Plateforme d\'automatisation de documents qui simplifie la création et le traitement de documents juridiques complexes.',
    category: 'Productivité',
    logo: '/apps/docassemble.svg',
    url: 'https://docassemble.org',
    tags: ['Legal Tech', 'Automation', 'Documents'],
    highlights: [
      'Workflows complexes',
      'Logique conditionnelle',
      'Multi-langues'
    ],
    maturity: 'Stable',
    projectInfo: {
      github: 'jhpyle/docassemble',
      license: 'MIT'
    },
    alternatives: [
      'DocuSign',
      'Adobe Sign',
      'PandaDoc'
    ],
    integrations: [
      'Python',
      'PDF',
      'API REST'
    ]
  },
  {
    id: 'documenso',
    name: 'Documenso',
    description: 'Solution de signature électronique open source. Alternative à DocuSign.',
    longDescription: 'Plateforme de signature électronique qui permet de signer et gérer vos documents de manière sécurisée et conforme.',
    category: 'Productivité',
    logo: '/apps/documenso.svg',
    url: 'https://documenso.com',
    tags: ['E-Signature', 'Documents', 'Legal'],
    highlights: [
      'Signatures légales',
      'Workflow personnalisable',
      'Audit trail complet'
    ],
    maturity: 'En croissance',
    projectInfo: {
      github: 'documenso/documenso',
      license: 'AGPL-3.0'
    },
    alternatives: [
      'DocuSign',
      'HelloSign',
      'SignNow'
    ],
    integrations: [
      'PDF',
      'OAuth2',
      'API REST'
    ]
  },
  {
    id: 'docmost',
    name: 'Docmost',
    description: 'Plateforme de documentation collaborative. Alternative à Notion.',
    longDescription: 'Solution de documentation d\'entreprise qui combine notes, wikis et gestion de documents dans une interface moderne.',
    category: 'Communication',
    logo: '/apps/docmost.svg',
    url: 'https://docmost.com',
    tags: ['Documentation', 'Wiki', 'Collaboration'],
    highlights: [
      'Éditeur WYSIWYG',
      'Organisation flexible',
      'Partage sécurisé'
    ],
    maturity: 'En croissance',
    projectInfo: {
      github: 'docmost/docmost',
      license: 'MIT'
    },
    alternatives: [
      'Notion',
      'Confluence',
      'Coda'
    ],
    integrations: [
      'Markdown',
      'Git',
      'API REST'
    ]
  },
  {
    id: 'invoice-ninja',
    name: 'Invoice Ninja',
    description: 'Gestion de facturation et comptabilité. Alternative à Freshbooks.',
    longDescription: 'Solution complète de facturation et de gestion financière pour les freelances et les petites entreprises.',
    category: 'Productivité',
    logo: '/apps/invoice-ninja.svg',
    url: 'https://invoiceninja.com',
    tags: ['Facturation', 'Comptabilité', 'Paiements'],
    highlights: [
      'Facturation automatisée',
      'Paiements en ligne',
      'Suivi du temps'
    ],
    maturity: 'Stable',
    projectInfo: {
      github: 'invoiceninja/invoiceninja',
      license: 'AAL'
    },
    alternatives: [
      'FreshBooks',
      'QuickBooks',
      'Wave'
    ],
    integrations: [
      'Stripe',
      'PayPal',
      'API REST'
    ]
  },
  {
    id: 'netbird',
    name: 'Netbird',
    description: 'Réseau privé virtuel simple et sécurisé. Alternative à Tailscale.',
    longDescription: 'Solution VPN moderne qui simplifie la connexion sécurisée entre vos appareils et services.',
    category: 'Sécurité',
    logo: '/apps/netbird.svg',
    url: 'https://netbird.io',
    tags: ['VPN', 'Mesh', 'Networking'],
    highlights: [
      'Configuration automatique',
      'Réseau maillé',
      'Gestion centralisée'
    ],
    maturity: 'En croissance',
    projectInfo: {
      github: 'netbirdio/netbird',
      license: 'BSD-3-Clause'
    },
    alternatives: [
      'Tailscale',
      'ZeroTier',
      'Nebula'
    ],
    integrations: [
      'WireGuard',
      'OAuth2',
      'LDAP'
    ]
  },
  {
    id: 'openchangelog',
    name: 'OpenChangelog',
    description: 'Gestion de changelogs pour vos produits. Alternative à ProductBoard.',
    longDescription: 'Plateforme de gestion des changements qui permet de communiquer efficacement les évolutions de vos produits.',
    category: 'Développement',
    logo: '/apps/openchangelog.svg',
    url: 'https://openchangelog.com',
    tags: ['Changelog', 'Product', 'Communication'],
    highlights: [
      'Publication automatisée',
      'Personnalisation complète',
      'Notifications intégrées'
    ],
    maturity: 'En croissance',
    projectInfo: {
      github: 'openchangelog/openchangelog',
      license: 'MIT'
    },
    alternatives: [
      'ProductBoard',
      'Beamer',
      'LaunchNotes'
    ],
    integrations: [
      'GitHub',
      'GitLab',
      'Slack'
    ]
  },
  {
    id: 'papermark',
    name: 'Papermark',
    description: 'Plateforme de partage de documents sécurisé. Alternative à DocSend.',
    longDescription: 'Solution de partage de documents qui permet de suivre et de contrôler l\'accès à vos documents sensibles.',
    category: 'Productivité',
    logo: '/apps/papermark.svg',
    url: 'https://papermark.io',
    tags: ['Documents', 'Analytics', 'Sécurité'],
    highlights: [
      'Suivi des consultations',
      'Contrôle d\'accès granulaire',
      'Analytics détaillés'
    ],
    maturity: 'En croissance',
    projectInfo: {
      github: 'mfts/papermark',
      license: 'AGPL-3.0'
    },
    alternatives: [
      'DocSend',
      'PandaDoc',
      'DocuSign'
    ],
    integrations: [
      'Google Drive',
      'Dropbox',
      'Analytics'
    ]
  },
  {
    id: 'plane',
    name: 'Plane',
    description: 'Gestion de projet open source. Alternative à Jira.',
    longDescription: 'Outil de gestion de projet qui combine simplicité et puissance pour les équipes de toutes tailles.',
    category: 'Développement',
    logo: '/apps/plane.svg',
    url: 'https://plane.so',
    tags: ['Project', 'Agile', 'Collaboration'],
    highlights: [
      'Interface intuitive',
      'Vues personnalisables',
      'Intégrations DevOps'
    ],
    maturity: 'En croissance',
    projectInfo: {
      github: 'makeplane/plane',
      license: 'AGPL-3.0'
    },
    alternatives: [
      'Jira',
      'Linear',
      'ClickUp'
    ],
    integrations: [
      'GitHub',
      'GitLab',
      'Discord'
    ]
  },
  {
    id: 'syncthing',
    name: 'Syncthing',
    description: 'Synchronisation de fichiers décentralisée. Alternative à Dropbox.',
    longDescription: 'Solution de synchronisation de fichiers qui respecte votre vie privée en synchronisant vos données directement entre vos appareils.',
    category: 'Productivité',
    logo: '/apps/syncthing.svg',
    url: 'https://syncthing.net',
    tags: ['Sync', 'P2P', 'Privacy'],
    highlights: [
      'Synchronisation P2P',
      'Chiffrement de bout en bout',
      'Sans serveur central'
    ],
    maturity: 'Stable',
    projectInfo: {
      github: 'syncthing/syncthing',
      license: 'MPL-2.0'
    },
    alternatives: [
      'Dropbox',
      'Google Drive',
      'Resilio Sync'
    ],
    integrations: [
      'WebDAV',
      'FUSE',
      'inotify'
    ]
  },
  {
    id: 'wireguard',
    name: 'WireGuard',
    description: 'VPN moderne et performant. Alternative à OpenVPN.',
    longDescription: 'Protocole VPN nouvelle génération qui offre des performances supérieures avec une configuration simplifiée.',
    category: 'Sécurité',
    logo: '/apps/wireguard.svg',
    url: 'https://www.wireguard.com',
    tags: ['VPN', 'Networking', 'Security'],
    highlights: [
      'Performances optimales',
      'Configuration simple',
      'Cryptographie moderne'
    ],
    maturity: 'Stable',
    projectInfo: {
      github: 'WireGuard/wireguard-linux',
      license: 'GPL-2.0'
    },
    alternatives: [
      'OpenVPN',
      'IPsec',
      'Cisco AnyConnect'
    ],
    integrations: [
      'NetworkManager',
      'systemd',
      'pfSense'
    ]
  },
  {
    id: 'heyform',
    name: 'HeyForm',
    description: 'Création de formulaires avancés. Alternative à Typeform.',
    longDescription: 'Plateforme de création de formulaires qui permet de concevoir des expériences de collecte de données engageantes et personnalisées.',
    category: 'Productivité',
    logo: '/apps/heyform.svg',
    url: 'https://heyform.net',
    tags: ['Forms', 'Surveys', 'Data Collection'],
    highlights: [
      'Formulaires interactifs',
      'Logique conditionnelle',
      'Analytics intégrés'
    ],
    maturity: 'En croissance',
    projectInfo: {
      github: 'heyform/heyform',
      license: 'MIT'
    },
    alternatives: [
      'Typeform',
      'JotForm',
      'Google Forms'
    ],
    integrations: [
      'Zapier',
      'Webhooks',
      'REST API'
    ]
  }
];

export const categories: Category[] = [
  'Infrastructure',  // Outils d'infrastructure et monitoring
  'Sécurité',       // Sécurité et contrôle d'accès
  'Communication',   // Collaboration et communication
  'Développement',   // Outils de développement et documentation
  'Productivité',   // Outils métier et productivité
  'Toutes'          // Toujours en dernier
]; 