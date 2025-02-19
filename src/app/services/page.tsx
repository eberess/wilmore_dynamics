import Navbar from "@/components/Navbar";
import ServicesContent from "@/components/ServicesContent";
import type { Metadata } from 'next';
import { COLORS, GRADIENTS, ANIMATIONS, COMMON_CLASSES } from '@/constants/styles';

export type ServiceProps = {
  title: string;
  subtitle: string;
  description: string;
  modalContent: string;
  features: string[];
  image: string;
};

const SERVICES_DATA = [
  {
    title: "Développement Cloud Native",
    subtitle: "Applications nouvelle génération",
    description: "Nous concevons et développons des applications modernes qui s'adaptent à votre croissance. De l'architecture à la mise en production, nous garantissons performance et évolutivité.",
    modalContent: `En tant qu'experts du Cloud Native, nous accompagnons les entreprises dans leur transformation numérique avec une approche pragmatique et éprouvée.

Notre équipe d'architectes et développeurs seniors conçoit des applications modernes qui s'adaptent naturellement à votre croissance. Nous utilisons les dernières technologies cloud (Kubernetes, Docker, microservices) tout en garantissant la stabilité et la sécurité de vos systèmes.

Nos solutions sont pensées pour répondre aux enjeux business : réduction des coûts d'infrastructure, time-to-market accéléré, et scalabilité à la demande.`,
    features: [
      "Architecture microservices évolutive",
      "Développement full-stack moderne (React, Node.js)",
      "APIs RESTful & GraphQL optimisées",
      "Tests automatisés et qualité code",
      "Intégration continue (CI/CD)",
      "Migration d'applications legacy"
    ],
    image: "/services/cloud-native.svg"
  },
  {
    title: "Infrastructure & DevOps",
    subtitle: "Plateforme robuste",
    description: "Nous gérons et optimisons votre infrastructure cloud. Notre expertise garantit sécurité, performance et maîtrise des coûts.",
    modalContent: `Notre expertise DevOps permet d'industrialiser et de sécuriser vos déploiements tout en optimisant vos coûts d'infrastructure.

Nous mettons en place des pipelines CI/CD robustes et automatisés, permettant des déploiements fréquents et fiables. Notre approche Infrastructure as Code (IaC) avec Terraform garantit reproductibilité et traçabilité.

Nos ingénieurs certifiés AWS, GCP et Azure vous accompagnent dans l'optimisation continue de votre infrastructure, avec un focus sur la sécurité, la performance et la maîtrise des coûts.`,
    features: [
      "Infrastructure as Code (Terraform)",
      "Orchestration Kubernetes",
      "Monitoring & Alerting 24/7",
      "Sécurité et conformité (ISO 27001)",
      "Optimisation des coûts cloud",
      "Disaster Recovery & Backup"
    ],
    image: "/services/devops.svg"
  },
  {
    title: "Conseil & Audit",
    subtitle: "Expertise stratégique",
    description: "Nous vous accompagnons dans votre transformation digitale avec une approche pragmatique et des solutions sur mesure.",
    modalContent: `Forts de notre expérience auprès de grands comptes et de scale-ups, nous vous guidons dans vos choix technologiques et organisationnels.

    Nos consultants expérimentés réalisent des audits approfondis de votre infrastructure et de vos applications. Nous identifions les axes d'amélioration et établissons une feuille de route claire et alignée avec vos objectifs commerciaux.
    
    Notre accompagnement inclut également le développement des compétences de vos équipes grâce à des formations personnalisées et un transfert de connaissances continu.`,
    features: [
      "Audit d'architecture technique",
      "Optimisation des performances",
      "Revue de sécurité approfondie",
      "Formation des équipes",
      "Accompagnement AGILE",
      "Roadmap technologique"
    ],
    image: "/services/consulting.svg"
  }
];

const baseUrl = process.env.NODE_ENV === 'production' 
  ? 'https://wilmore-dynamics.com'
  : 'http://localhost:3000';

export const metadata: Metadata = {
  title: 'Services Cloud Native & DevOps | Wilmore Dynamics',
  description: 'Expertise en développement cloud native, infrastructure DevOps et conseil IT. Solutions modernes et évolutives pour transformer votre infrastructure.',
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: 'Services Cloud Native & DevOps | Wilmore Dynamics',
    description: 'Expertise en développement cloud native, infrastructure DevOps et conseil IT. Solutions modernes et évolutives pour transformer votre infrastructure.',
    images: [
      {
        url: '/og/services.jpg',
        width: 1200,
        height: 630,
        alt: 'Services Cloud Native & DevOps Wilmore Dynamics'
      }
    ]
  }
};

export default function Services() {
  return (
    <>
      <Navbar />
      <ServicesContent servicesData={SERVICES_DATA} />
    </>
  );
}
