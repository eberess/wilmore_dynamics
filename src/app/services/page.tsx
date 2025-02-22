import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import type { Metadata } from 'next';
import { COLORS, GRADIENTS, ANIMATIONS, COMMON_CLASSES } from '@/constants/styles';
import Image from "next/image";
import FadeIn from '@/components/FadeIn';

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
    ],
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Wilmore Dynamics'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services Cloud Native & DevOps | Wilmore Dynamics',
    description: 'Expertise en développement cloud native, infrastructure DevOps et conseil IT.',
    images: ['/og/services.jpg'],
  }
};

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-x-hidden">
        {/* Hero Section */}
        <section aria-labelledby="hero-heading" className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 overflow-hidden">
          <div className="max-w-[1200px] mx-auto text-center relative z-10 px-4 sm:px-6 lg:px-8">
            <div role="presentation" className="relative z-10">
              <FadeIn>
                <span className="
                  inline-flex
                  items-center
                  text-blue-600/90 dark:text-blue-400/90
                  text-[11px]
                  font-semibold
                  tracking-[0.06em]
                  uppercase
                  px-2.5
                  py-1
                  rounded-[20px]
                  bg-blue-50/60 backdrop-blur-sm
                  dark:bg-blue-500/[0.08]
                  border border-blue-100/40
                  dark:border-blue-400/[0.06]
                  mb-8
                  animate-fade-in
                  z-10
                  shadow-sm
                  transition-all
                  duration-300
                  hover:bg-blue-50/80
                  dark:hover:bg-blue-500/[0.12]
                  hover:scale-[1.02]
                ">
                  Nos Services
                </span>
                
                <h1 id="hero-heading" className="text-[44px] sm:text-[64px] md:text-[96px] leading-[1.1] font-medium tracking-[-0.02em] mb-8">
                  Solutions
                  <span className="block bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mt-2">
                    cloud native
                  </span>
                </h1>

                <p className="text-xl sm:text-2xl text-gray-600/90 dark:text-gray-300/90 max-w-[640px] mx-auto mb-12 leading-relaxed">
                  Des solutions modernes et évolutives pour votre transformation digitale
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <a 
                    href="#contact" 
                    className="group px-8 py-4 rounded-full bg-blue-600 text-white transition-colors duration-300 text-[17px] font-medium hover:bg-blue-700"
                    aria-label="Démarrer votre projet de transformation digitale"
                  >
                    <span className="flex items-center gap-2">
                      Démarrer un projet
                      <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </a>
                  
                  <a 
                    href="#services" 
                    className="group px-8 py-4 rounded-full border border-gray-200/50 dark:border-white/[0.1] hover:bg-gray-50 dark:hover:bg-white/[0.02] text-gray-600 dark:text-gray-300 transition-all duration-300 text-[17px] font-medium"
                    aria-label="En savoir plus sur nos services"
                  >
                    En savoir plus
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Cloud Native Section */}
        <Section
          id="services-cloud-native"
          badge="CLOUD NATIVE"
          title={
            <div className="text-center max-w-[800px] mx-auto mb-16">
              <h2 className="text-[2.75rem] sm:text-[3.5rem] leading-[1.1] font-medium tracking-[-0.02em] text-gray-900 dark:text-white">
                Applications
                <span className="block bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  nouvelle génération
                </span>
              </h2>
              <p className="mt-6 text-xl text-gray-600/90 dark:text-gray-300/90 max-w-[640px] mx-auto">
                Des solutions modernes qui s'adaptent à votre croissance
              </p>
            </div>
          }
          className="py-24"
        >
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="space-y-12">
                <div className="space-y-6">
                  <h3 className="text-2xl font-medium text-gray-900 dark:text-white">
                    Architecture Cloud Native
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Nous concevons des applications modernes qui s'adaptent naturellement à votre croissance. Notre approche garantit performance, sécurité et évolutivité.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  {[
                    "Microservices",
                    "Conteneurisation",
                    "Auto-scaling",
                    "Haute disponibilité"
                  ].map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 text-gray-600 dark:text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600/40 dark:bg-blue-500/40" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div>
                  <a 
                    href="#contact"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 group"
                  >
                    <span className="text-lg">En savoir plus</span>
                    <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="relative aspect-square group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-[32px] transition-opacity duration-500 group-hover:opacity-75" />
                <Image
                  src="/services/cloud-native.svg"
                  alt="Cloud Native Architecture Illustration"
                  width={600}
                  height={600}
                  className="relative z-10 w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                  priority
                  quality={90}
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Infrastructure & DevOps Section */}
        <Section
          id="services-infrastructure"
          badge="INFRASTRUCTURE"
          title={
            <div className="text-center max-w-[800px] mx-auto mb-16">
              <h2 className="text-[2.75rem] sm:text-[3.5rem] leading-[1.1] font-medium tracking-[-0.02em] text-gray-900 dark:text-white">
                Infrastructure
                <span className="block bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  & DevOps
                </span>
              </h2>
              <p className="mt-6 text-xl text-gray-600/90 dark:text-gray-300/90 max-w-[640px] mx-auto">
                Une plateforme robuste et évolutive pour vos applications
              </p>
            </div>
          }
          className="py-24"
        >
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-square group order-2 md:order-1">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-[32px] transition-opacity duration-500 group-hover:opacity-75" />
                <Image
                  src="/services/devops.svg"
                  alt="Infrastructure & DevOps Illustration"
                  width={600}
                  height={600}
                  className="relative z-10 w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>

              <div className="space-y-12 order-1 md:order-2">
                <div className="space-y-6">
                  <h3 className="text-2xl font-medium text-gray-900 dark:text-white">
                    Automatisation & Performance
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Nous optimisons et sécurisons votre infrastructure cloud avec des pratiques DevOps modernes. Notre expertise garantit fiabilité et performance.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  {[
                    "Infrastructure as Code",
                    "CI/CD Pipelines",
                    "Monitoring 24/7",
                    "Cloud Optimization"
                  ].map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 text-gray-600 dark:text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600/40 dark:bg-blue-500/40" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div>
                  <a 
                    href="#contact"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 group"
                    aria-label="En savoir plus sur nos services d'infrastructure et DevOps"
                  >
                    <span className="text-lg">En savoir plus</span>
                    <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Conseil & Audit Section */}
        <Section
          id="services-conseil"
          badge="CONSEIL"
          title={
            <div className="text-center max-w-[800px] mx-auto mb-16">
              <h2 className="text-[2.75rem] sm:text-[3.5rem] leading-[1.1] font-medium tracking-[-0.02em] text-gray-900 dark:text-white">
                Expertise
                <span className="block bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  stratégique
                </span>
              </h2>
              <p className="mt-6 text-xl text-gray-600/90 dark:text-gray-300/90 max-w-[640px] mx-auto">
                Un accompagnement sur mesure pour votre transformation digitale
              </p>
            </div>
          }
          className="py-24"
        >
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="space-y-12">
                <div className="space-y-6">
                  <h3 className="text-2xl font-medium text-gray-900 dark:text-white">
                    Audit & Accompagnement
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Nous vous guidons dans vos choix technologiques avec une approche pragmatique. Notre expertise vous permet d'optimiser vos solutions et d'accélérer votre croissance.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  {[
                    "Audit technique",
                    "Optimisation",
                    "Formation",
                    "Roadmap"
                  ].map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 text-gray-600 dark:text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600/40 dark:bg-blue-500/40" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div>
                  <a 
                    href="#contact"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 group"
                    aria-label="En savoir plus sur nos services de conseil et audit"
                  >
                    <span className="text-lg">En savoir plus</span>
                    <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="relative aspect-square group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-[32px] transition-opacity duration-500 group-hover:opacity-75" />
                <Image
                  src="/services/consulting.svg"
                  alt="Conseil et Audit Illustration"
                  width={600}
                  height={600}
                  className="relative z-10 w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Support & Maintenance Section */}
        <Section
          id="support"
          badge="SUPPORT"
          title={
            <div className="text-center max-w-[800px] mx-auto mb-16">
              <h2 className="text-[2.75rem] sm:text-[3.5rem] leading-[1.1] font-medium tracking-[-0.02em] text-gray-900 dark:text-white">
                Support
                <span className="block bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  & maintenance
                </span>
              </h2>
              <p className="mt-6 text-xl text-gray-600/90 dark:text-gray-300/90 max-w-[640px] mx-auto">
                Un accompagnement continu pour la pérennité de vos solutions
              </p>
            </div>
          }
          className="py-24"
        >
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-square group order-2 md:order-1">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-[32px] transition-opacity duration-500 group-hover:opacity-75" />
                <Image
                  src="/services/support.svg"
                  alt="Support et Maintenance Illustration"
                  width={600}
                  height={600}
                  className="relative z-10 w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>

              <div className="space-y-12 order-1 md:order-2">
                <div className="space-y-6">
                  <h3 className="text-2xl font-medium text-gray-900 dark:text-white">
                    Accompagnement continu
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Une équipe dédiée pour maintenir et faire évoluer vos solutions. Nous assurons la disponibilité et la performance de vos applications 24/7.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  {[
                    "Support 24/7",
                    "Maintenance proactive",
                    "Mises à jour régulières",
                    "Monitoring avancé"
                  ].map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 text-gray-600 dark:text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600/40 dark:bg-blue-500/40" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div>
                  <a 
                    href="#contact"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 group"
                    aria-label="En savoir plus sur nos services de support et maintenance"
                  >
                    <span className="text-lg">En savoir plus</span>
                    <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Expertise Section */}
        <Section
          id="expertise"
          badge="EXPERTISE"
          title={
            <div className="text-center max-w-[800px] mx-auto mb-16">
              <h2 className="text-[2.75rem] sm:text-[3.5rem] leading-[1.1] font-medium tracking-[-0.02em] text-gray-900 dark:text-white">
                Nos domaines
                <span className="block bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  d'expertise
                </span>
              </h2>
              <p className="mt-6 text-xl text-gray-600/90 dark:text-gray-300/90 max-w-[640px] mx-auto">
                Une expertise pointue dans les technologies modernes
              </p>
            </div>
          }
          className="py-24"
        >
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Open Source",
                  description: "Solutions transparentes et personnalisables",
                  icon: (
                    <svg className="w-8 h-8 text-blue-600/90 dark:text-blue-400/90" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  ),
                  features: ["Linux", "Kubernetes", "PostgreSQL", "Node.js"]
                },
                {
                  title: "Cloud",
                  description: "Infrastructure évolutive et performante",
                  icon: (
                    <svg className="w-8 h-8 text-blue-600/90 dark:text-blue-400/90" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  ),
                  features: ["AWS", "GCP", "Azure", "Private Cloud"]
                },
                {
                  title: "DevSecOps",
                  description: "Automatisation et sécurité intégrée",
                  icon: (
                    <svg className="w-8 h-8 text-blue-600/90 dark:text-blue-400/90" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  features: ["CI/CD", "IaC", "Zero Trust", "Monitoring"]
                },
                {
                  title: "Architecture",
                  description: "Solutions modernes et scalables",
                  icon: (
                    <svg className="w-8 h-8 text-blue-600/90 dark:text-blue-400/90" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  ),
                  features: ["Microservices", "Event-Driven", "API First", "Cloud Native"]
                }
              ].map((domain, index) => (
                <div 
                  key={index}
                  className="group p-8 rounded-[32px] bg-white/50 dark:bg-white/[0.02] border border-gray-200/50 dark:border-white/[0.1] hover:bg-white dark:hover:bg-white/[0.03] transition-all duration-500"
                >
                  <div className="text-4xl mb-6">{domain.icon}</div>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                    {domain.title}
                  </h3>
                  <p className="text-gray-600/90 dark:text-gray-400/90 mb-6">
                    {domain.description}
                  </p>
                  <ul className="space-y-2">
                    {domain.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-sm"
                      >
                        <div className="w-1 h-1 rounded-full bg-blue-600/40 dark:bg-blue-500/40" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* CTA Final */}
        <Section
          id="contact"
          badge="CONTACT"
          title={
            <div className="text-center max-w-[800px] mx-auto mb-16">
              <h2 className="text-[2.75rem] sm:text-[3.5rem] leading-[1.1] font-medium tracking-[-0.02em] text-gray-900 dark:text-white">
                Prêt à démarrer
                <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent ml-3">
                  votre projet
                </span>
                ?
              </h2>
            </div>
          }
          className="py-24 bg-gradient-to-b from-transparent to-blue-50/50 dark:to-blue-950/[0.03]"
        >
          <div className="max-w-[1200px] mx-auto text-center">
            <FadeIn>
              <p className="text-xl text-gray-600/90 dark:text-gray-300/90 max-w-[640px] mx-auto mb-12">
                Discutons de vos projets et voyons comment nous pouvons vous aider à atteindre vos objectifs.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a 
                  href="#contact"
                  className="group px-8 py-4 rounded-full bg-blue-600 text-white transition-colors duration-300 text-[17px] font-medium hover:bg-blue-700"
                  aria-label="Démarrer votre projet de transformation digitale"
                >
                  <span className="flex items-center gap-2">
                    Démarrer un projet
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>

                <a 
                  href="mailto:contact@wilmore-dynamics.com"
                  className="group text-[17px] font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                  aria-label="Nous contacter par email"
                >
                  contact@wilmore-dynamics.com
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-2">→</span>
                </a>
              </div>
            </FadeIn>
          </div>
        </Section>
      </main>
    </>
  );
}
