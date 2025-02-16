export type Category =
  | 'Toutes'
  | 'Infrastructure'
  | 'Sécurité'
  | 'Communication'
  | 'Développement'
  | 'Productivité';

type MaturityStatus = 'Stable' | 'En croissance' | 'Émergent';

interface ProjectInfo {
  github: string;        // Lien GitHub
  license: string;       // Type de licence
}

export interface App {
  id: string;
  name: string;
  description: string;      // Description courte pour la carte
  longDescription: string;  // Description détaillée pour le modal
  category: Category;       // Catégorie principale
  logo: string;            // Chemin vers le logo
  url: string;             // Site officiel
  tags: string[];          // Mots-clés (max 3)
  highlights: string[];    // Points clés (max 3)
  maturity: MaturityStatus;
  projectInfo: ProjectInfo;
  alternatives: string[];      // Solutions propriétaires alternatives
  integrations?: string[];     // Intégrations principales pertinentes
}

export const CommonTags = {
  SECURITY: 'Security',
  MONITORING: 'Monitoring',
  COLLABORATION: 'Collaboration',
  DEVOPS: 'DevOps',
  DOCUMENTATION: 'Documentation',
  ANALYTICS: 'Analytics',
  // ... etc
} as const;

type CommonTag = typeof CommonTags[keyof typeof CommonTags];

export type SubCategory = {
  Infrastructure: 'Virtualisation' | 'Storage' | 'Containers';
  Sécurité: 'Identity' | 'VPN' | 'Secrets';
  // ... etc
}; 