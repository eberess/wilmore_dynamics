import Image from "next/image";
import Navbar from "@/components/Navbar";
import FadeIn from '@/components/FadeIn';
import { servicesMetadata } from '../metadata';
import { COLORS, GRADIENTS, ANIMATIONS, COMMON_CLASSES } from '@/constants/styles';
import Section from '@/components/Section';

export const metadata = servicesMetadata;

type ServiceProps = {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
};

const SERVICES_DATA = [
  {
    title: "Développement Cloud Native",
    subtitle: "Applications nouvelle génération",
    description: "Nous concevons et développons des applications modernes qui s'adaptent à votre croissance. De l'architecture à la mise en production, nous garantissons performance et évolutivité.",
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

type CTACardProps = {
  title: string;
  description: string;
  icon: string;
};

const CTA_CARDS: CTACardProps[] = [
  {
    title: "Expertise Technique",
    description: "Une équipe d'experts certifiés AWS, GCP et Azure",
    icon: "💡"
  },
  {
    title: "Accompagnement",
    description: "Support dédié et transfert de compétences",
    icon: "🤝"
  },
  {
    title: "Résultats",
    description: "Performance, sécurité et ROI mesurables",
    icon: "📈"
  }
];

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section aria-labelledby="hero-heading" className="relative min-h-[90vh] flex flex-col items-center justify-center px-4">
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute right-[-10%] top-1/3 w-[800px] h-[800px] transform rotate-12">
              <div className={`w-full h-full ${GRADIENTS.BG_DECORATIVE} rounded-[60px] blur-3xl`} />
            </div>
            <div className="absolute left-[-10%] bottom-1/3 w-[800px] h-[800px] transform -rotate-12">
              <div className={`w-full h-full ${GRADIENTS.BG_DECORATIVE} rounded-[60px] blur-3xl`} />
            </div>
          </div>

          <FadeIn>
            <div className="max-w-[800px] mx-auto text-center relative z-10">
              <span className={COMMON_CLASSES.badge}>
                NOS SERVICES
              </span>
              <h1 className={`${COMMON_CLASSES.sectionTitle} !text-[80px]`}>
                Solutions
                <span className={COMMON_CLASSES.gradientText}>
                  cloud natives
                </span>
              </h1>
              <p className={COMMON_CLASSES.sectionDescription}>
                Des applications modernes et évolutives pour transformer votre entreprise
              </p>
              <div className="flex items-center justify-center gap-4 mt-12">
                <a href="#contact" className={COMMON_CLASSES.primaryButton}>
                  Démarrer un projet
                  <span className={ANIMATIONS.linkHover}>→</span>
                </a>
                <a href="#services" className={COMMON_CLASSES.secondaryButton}>
                  Découvrir nos services
                  <span className={ANIMATIONS.linkHover}>→</span>
                </a>
              </div>
            </div>
          </FadeIn>
        </section>

        <Section
          id="services"
          badge="NOS SOLUTIONS"
          title="Architecture"
          subtitle="nouvelle génération"
          hasGradientBg
          className="py-24"
        >
          {/* Carte principale - Développement */}
          <div className="mb-24">
            <div className={`${COMMON_CLASSES.cardWrapper} p-16`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Côté gauche - Image et titre */}
                <div className="text-center lg:text-left space-y-8">
                  <div className="relative w-48 h-48 mx-auto lg:mx-0">
                    <div className={`absolute inset-0 ${GRADIENTS.BG_CARD} rounded-3xl blur-2xl opacity-40`} />
                    <Image
                      src={SERVICES_DATA[0].image}
                      alt={SERVICES_DATA[0].title}
                      width={192}
                      height={192}
                      className={`relative z-10 w-full h-full object-contain ${ANIMATIONS.hover}`}
                    />
                  </div>
                  <div className="space-y-4">
                    <span className={COMMON_CLASSES.badge}>
                      {SERVICES_DATA[0].subtitle}
                    </span>
                    <h3 className={`text-3xl font-medium ${COMMON_CLASSES.cardHover}`}>
                      {SERVICES_DATA[0].title}
                    </h3>
                    <p className={`${COMMON_CLASSES.textContainer} lg:max-w-md`}>
                      {SERVICES_DATA[0].description}
                    </p>
                  </div>
                </div>

                {/* Côté droit - Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {SERVICES_DATA[0].features.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-4 p-6 rounded-xl bg-gray-50/50 dark:bg-white/[0.02]"
                    >
                      <div className={`${COMMON_CLASSES.iconContainer} !w-8 !h-8 !rounded-lg shrink-0`}>
                        <span className={`text-[${COLORS.primary.light}] dark:text-[${COLORS.primary.dark}] text-sm font-medium`}>
                          {(index + 1).toString().padStart(2, '0')}
                        </span>
                      </div>
                      <span className={COMMON_CLASSES.textContainer}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Cartes secondaires */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {SERVICES_DATA.slice(1).map((service, index) => (
              <div key={index} className="group">
                <div className={`${COMMON_CLASSES.cardWrapper} p-12`}>
                  <div className="flex items-start gap-8">
                    {/* Icône */}
                    <div className="relative w-24 h-24 shrink-0">
                      <div className={`absolute inset-0 ${GRADIENTS.BG_CARD} rounded-2xl blur-xl opacity-50`} />
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={96}
                        height={96}
                        className={`relative z-10 w-full h-full object-contain ${ANIMATIONS.hover}`}
                      />
                    </div>

                    {/* Contenu */}
                    <div className="flex-grow space-y-6">
                      <div className="space-y-4">
                        <span className={`${COMMON_CLASSES.badge} !text-xs`}>
                          {service.subtitle}
                        </span>
                        <h3 className={`text-xl font-medium ${COMMON_CLASSES.cardHover}`}>
                          {service.title}
                        </h3>
                        <p className={`${COMMON_CLASSES.textContainer}`}>
                          {service.description}
                        </p>
                      </div>
                      <div className="space-y-4">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <div key={index} className="flex items-center gap-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                            <span className={`${COMMON_CLASSES.textContainer} text-sm`}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="cta"
          badge="COMMENCER"
          title="Transformez"
          subtitle="votre infrastructure"
        >
          <div className="relative">
            {/* Background Patterns */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute right-[-5%] top-1/2 w-[600px] h-[600px] transform -translate-y-1/2">
                <div className={`w-full h-full ${GRADIENTS.BG_DECORATIVE} rounded-[40px] blur-2xl opacity-40`} />
              </div>
              <div className="absolute left-[-5%] bottom-[-20%] w-[400px] h-[400px]">
                <div className={`w-full h-full ${GRADIENTS.BG_DECORATIVE} rounded-[40px] blur-2xl opacity-30`} />
              </div>
            </div>

            {/* Content */}
            <div className="relative">
              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {CTA_CARDS.map((item, index) => (
                  <div key={index} className={`${COMMON_CLASSES.card} text-center group hover:scale-105`}>
                    <span className="text-3xl mb-4 block">{item.icon}</span>
                    <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                    <p className={COMMON_CLASSES.textContainer}>{item.description}</p>
                  </div>
                ))}
              </div>

              {/* CTA Content */}
              <div className="max-w-[600px] mx-auto text-center">
                <p className={`${COMMON_CLASSES.sectionDescription} mb-12`}>
                  Nos experts vous accompagnent dans votre transformation digitale
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <a 
                    href="#contact" 
                    className={`${COMMON_CLASSES.primaryButton} !px-12 !py-6 text-lg`}
                  >
                    Démarrer votre projet
                    <span className={ANIMATIONS.linkHover}>→</span>
                  </a>
                  <a 
                    href="tel:+33100000000" 
                    className={`${COMMON_CLASSES.secondaryButton} !px-12 !py-6 text-lg`}
                  >
                    Nous appeler
                    <span className={ANIMATIONS.linkHover}>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
} 