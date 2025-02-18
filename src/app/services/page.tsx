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
      <main className="min-h-screen" role="main">
        <section 
          aria-labelledby="hero-title"
          className="relative min-h-[85vh] flex flex-col items-center justify-center px-4 pb-16"
        >
          <h1 id="hero-title" className="sr-only">Solutions Cloud Natives - Architecture nouvelle génération</h1>
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
              <span className={`${COMMON_CLASSES.badge} !mb-8`}>
                SOLUTIONS CLOUD NATIVES
              </span>
              <h1 className={`${COMMON_CLASSES.sectionTitle} !text-7xl md:!text-8xl mb-8`}>
                Solutions
                <span className={`${COMMON_CLASSES.gradientText} block mt-2`}>
                  cloud natives
                </span>
              </h1>
              <p className={`${COMMON_CLASSES.sectionDescription} max-w-2xl mx-auto mb-12`}>
                Des solutions modernes et évolutives pour transformer votre infrastructure et accélérer votre innovation
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  href="#contact" 
                  className={`${COMMON_CLASSES.primaryButton} !px-12 !py-6 text-lg group relative overflow-hidden ${ANIMATIONS.shine}`}
                  aria-label="Démarrer votre projet de transformation digitale"
                >
                  <span className="relative z-10">Démarrer votre projet</span>
                  <span className={`${ANIMATIONS.linkHover} group-hover:translate-x-2 relative z-10`}>→</span>
                </a>
                <a 
                  href="#services" 
                  className={`${COMMON_CLASSES.secondaryButton} !px-12 !py-6 text-lg group w-full sm:w-auto`}
                >
                  Explorer nos services
                  <span className={`${ANIMATIONS.linkHover} group-hover:translate-x-2`}>→</span>
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-white/20 flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-gray-400 dark:bg-white/20 rounded-full" />
            </div>
          </div>
        </section>

        <Section
          id="services"
          badge="NOS EXPERTISES"
          title="Des solutions"
          subtitle="sur mesure"
          hasGradientBg
          className="py-20"
          role="region"
          aria-label="Nos services"
        >
          {/* Carte principale */}
          <div className={`mb-20 group ${ANIMATIONS.scaleHover}`}>
            <div className={`${COMMON_CLASSES.cardWrapper} p-12 lg:p-16 relative overflow-hidden ${ANIMATIONS.shine}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Image avec animation subtile */}
                <div className={`text-center lg:text-left space-y-8 ${ANIMATIONS.fadeUp}`}>
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
                
                {/* Features avec hover effect */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {SERVICES_DATA[0].features.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-4 p-6 rounded-xl bg-gray-50/50 dark:bg-white/[0.02] transition-all duration-300 hover:bg-gray-100/50 dark:hover:bg-white/[0.04]"
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
              <div className="flex items-center justify-start mt-8">
                <a 
                  href={`#contact?service=${SERVICES_DATA[0].title.toLowerCase()}`}
                  className={`text-[${COLORS.primary.light}] dark:text-[${COLORS.primary.dark}] text-sm font-medium group inline-flex items-center gap-2 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[${COLORS.primary.light}]`}
                  aria-label={`En savoir plus sur ${SERVICES_DATA[0].title}`}
                >
                  En savoir plus
                  <span className={ANIMATIONS.linkHover}>→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Cartes secondaires */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {SERVICES_DATA.slice(1).map((service, index) => (
              <div key={index} className={`group ${ANIMATIONS.scaleHover}`}>
                <div className={`${COMMON_CLASSES.cardWrapper} p-12 relative overflow-hidden ${ANIMATIONS.shine}`}>
                  <div className="flex items-start gap-8">
                    {/* Icône avec animation de fade */}
                    <div className={`relative w-24 h-24 shrink-0 ${ANIMATIONS.fadeUp}`}>
                      <div className={`absolute inset-0 ${GRADIENTS.BG_CARD} rounded-2xl blur-xl opacity-50`} />
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={96}
                        height={96}
                        className={`relative z-10 w-full h-full object-contain ${ANIMATIONS.hover}`}
                      />
                    </div>

                    {/* Contenu avec animation progressive */}
                    <div className={`flex-grow space-y-6 ${ANIMATIONS.fadeUp}`}>
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
                  <div className="mt-6 pt-4 border-t border-gray-100 dark:border-white/[0.1]">
                    <a 
                      href={`#contact?service=${service.title.toLowerCase()}`}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-[${COLORS.primary.light}] dark:hover:text-[${COLORS.primary.dark}] transition-colors"
                      aria-label={`En savoir plus sur ${service.title}`}
                    >
                      Découvrir →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="cta"
          title="Prêt à démarrer"
          subtitle="votre projet ?"
          hasGradientBg
          className="py-24 lg:py-32"
        >
          <div className="max-w-[800px] mx-auto text-center">
            <div className="mb-12 space-y-6">
              <p className={`${COMMON_CLASSES.sectionDescription} text-xl`}>
                Nos experts vous accompagnent à chaque étape
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium">Démarrage en 24h</span>
                </span>
                <span className="hidden sm:inline text-2xl">•</span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium">Support dédié</span>
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="#contact" 
                className={`${COMMON_CLASSES.primaryButton} !px-12 !py-6 text-lg group relative overflow-hidden ${ANIMATIONS.shine}`}
                aria-label="Démarrer votre projet de transformation digitale"
              >
                <span className="relative z-10">Démarrer votre projet</span>
                <span className={`${ANIMATIONS.linkHover} group-hover:translate-x-2 relative z-10`}>→</span>
              </a>
              <a 
                href="mailto:contact@example.com" 
                className={`${COMMON_CLASSES.secondaryButton} !px-12 !py-6 text-lg group`}
              >
                Nous contacter
                <span className={`${ANIMATIONS.linkHover} group-hover:translate-x-2`}>→</span>
              </a>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
} 