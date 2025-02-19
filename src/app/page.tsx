import Image from "next/image";
import Navbar from "@/components/Navbar";
import ScrollToTop from '@/components/ScrollToTop';
import FadeIn from '@/components/FadeIn';
import ContactForm from '@/components/ContactForm';
import Badge from '@/components/Badge';
import { Metadata } from 'next';
import { COLORS, GRADIENTS, ANIMATIONS, COMMON_CLASSES } from '@/constants/styles';
import Section from '@/components/Section';

export const metadata: Metadata = {
  metadataBase: new URL('https://wilmoredynamics.com'),
  title: 'Wilmore Dynamics | Solutions Cloud Native & DevOps en France',
  description: 'Expert en solutions Cloud Native, DevOps et Open Source en France. Modernisez votre infrastructure avec des solutions sur mesure, évolutives et sécurisées.',
  applicationName: 'Wilmore Dynamics',
  authors: [{ name: 'Wilmore Dynamics' }],
  generator: 'Next.js',
  keywords: [
    'développement web',
    'cloud native',
    'devops',
    'open source',
    'kubernetes',
    'automatisation',
    'microservices',
    'infrastructure',
    'solutions technologiques',
    'transformation digitale'
  ],
  referrer: 'origin-when-cross-origin',
  creator: 'Wilmore Dynamics',
  publisher: 'Wilmore Dynamics',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://wilmoredynamics.com',
    title: 'Wilmore Dynamics | Solutions Cloud Native & DevOps',
    description: 'Expert en solutions Cloud Native, DevOps et Open Source en France',
    siteName: 'Wilmore Dynamics',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Wilmore Dynamics - Solutions technologiques innovantes'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wilmore Dynamics',
    description: 'Solutions technologiques innovantes',
    creator: '@wilmoredynamics',
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://wilmoredynamics.com',
    languages: {
      'fr-FR': 'https://wilmoredynamics.com',
      'en-US': 'https://wilmoredynamics.com/en'
    }
  },
  verification: {
    google: 'votre-vrai-code-google',
    yandex: 'votre-vrai-code-yandex',
    yahoo: 'votre-vrai-code-yahoo',
  },
  category: 'technology',
  icons: {
    icon: [
      { url: '/logo.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Wilmore Dynamics",
  "url": "https://wilmoredynamics.com",
  "logo": "https://wilmoredynamics.com/logo.svg",
  "description": "Expert en solutions Cloud Native, DevOps et Open Source en France",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "FR"
  },
  "sameAs": [
    "https://github.com/wilmore-dynamics",
    "https://linkedin.com/company/wilmore-dynamics"
  ]
};

// Ajout d'IDs cohérents pour toutes les sections
const SECTION_IDS = {
  hero: 'hero',
  solutions: 'solutions',
  about: 'about',
  contact: 'contact',
  process: 'process',
  stack: 'stack',
  openSource: 'open-source',
  news: 'news'
} as const;

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="min-h-screen">
        <h1 className="sr-only">Wilmore Dynamics - Solutions Cloud Native et DevOps en France</h1>
        
        {/* Hero Section */}
        <section aria-labelledby="hero-heading" className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute right-[-10%] top-1/3 w-[800px] h-[800px] transform rotate-12">
              <div className="w-full h-full bg-gradient-to-r from-blue-600/30 to-blue-500/30 rounded-[60px] blur-3xl" />
            </div>
            <div className="absolute left-[-10%] bottom-1/3 w-[800px] h-[800px] transform -rotate-12">
              <div className="w-full h-full bg-gradient-to-r from-blue-600/30 to-blue-500/30 rounded-[60px] blur-3xl" />
            </div>
          </div>

          {/* Content */}
          <div className="max-w-[800px] mx-auto text-center relative z-10">
            <h2 id="hero-heading" className="text-[52px] md:text-[96px] leading-[1.1] font-medium tracking-[-0.02em] mb-8">
              Des solutions
              <span className="block bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                qui transforment
              </span>
              <span className="block text-[40px] md:text-[64px] mt-4 font-normal text-gray-600 dark:text-gray-300">
                votre entreprise
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-[640px] mx-auto mb-16 leading-relaxed">
              Nous concevons des expériences technologiques innovantes pour propulser votre croissance
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="#contact" className="group px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 text-[17px] font-medium hover:scale-[1.03]">
                Démarrer un projet
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a href="#solutions" className="group px-8 py-4 rounded-full bg-gray-100 dark:bg-white/[0.08] hover:bg-gray-200 dark:hover:bg-white/[0.12] text-gray-700 dark:text-gray-300 transition-all duration-300 text-[17px] font-medium hover:scale-[1.03]">
                En savoir plus
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </section>

        <Section
          id={SECTION_IDS.solutions}
          badge="NOS SOLUTIONS"
          title="Technologies de pointe pour"
          subtitle="votre transformation digitale"
          hasGradientBg
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Architecture Cloud Native",
                description: "Applications modernes et scalables conçues pour le cloud",
                icon: (
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none">
                    <path d="M3 15C3 17.2091 4.79086 19 7 19H16C18.7614 19 21 16.7614 21 14C21 11.2386 18.7614 9 16 9C15.9666 9 15.9334 9.00033 15.9002 9.001C15.4373 6.71476 13.4193 5 11 5C8.23858 5 6 7.23858 6 10C6 10.3768 6.04169 10.7439 6.12071 11.097C4.33457 11.4976 3 13.0929 3 15Z" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                features: ["Microservices", "Conteneurisation", "Auto-scaling", "Haute disponibilité"]
              },
              {
                title: "DevOps & Automatisation",
                description: "Optimisez vos processus de développement et de déploiement",
                icon: (
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none">
                    <path d="M8 9L4 12L8 15M16 9L20 12L16 15M14 4L10 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                features: ["CI/CD", "Infrastructure as Code", "Monitoring", "Alerting"]
              },
              {
                title: "Sécurité & Conformité",
                description: "Protégez vos données et respectez les normes en vigueur",
                icon: (
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                features: ["Chiffrement", "RGPD", "Audit", "Veille sécurité"]
              }
            ].map((solution, index) => (
              <div key={index} className="group relative p-8 rounded-[32px] bg-white/50 dark:bg-white/[0.02] border border-gray-200/50 dark:border-white/[0.1] hover:bg-white dark:hover:bg-white/[0.03] transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-500/[0.08] flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-medium mt-6 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {solution.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                  {solution.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {solution.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-3 py-1 rounded-full text-sm bg-blue-50 dark:bg-blue-500/[0.08] text-blue-600 dark:text-blue-400 font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id={SECTION_IDS.about}
          badge="POURQUOI NOUS CHOISIR"
          title={
            <div className="
              text-[2.75rem] sm:text-[3.5rem]
              leading-[1.1]
              font-medium
              tracking-[-0.02em]
              text-gray-900 dark:text-white
              mb-4
            ">
              Une expertise
              <span className="
                text-[2rem] sm:text-[2.75rem]
                block
                bg-gradient-to-r from-blue-600 to-blue-500
                bg-clip-text text-transparent
              ">
                qui fait la différence
              </span>
            </div>
          }
          hasGradientBg
        >
          <div className="grid md:grid-cols-2 gap-20">
            <div className="flex flex-col">
              <p className="
                text-[1.125rem]
                leading-[1.6]
                text-gray-600/90 dark:text-gray-300/90
                mb-12
              ">
                Notre approche combine excellence technique et vision stratégique pour des résultats exceptionnels
              </p>

              <div className="space-y-12 flex-grow">
                {[
                  {
                    title: "Excellence technique",
                    description: "Solutions robustes conçues selon les standards les plus exigeants",
                    icon: "⚡️"
                  },
                  {
                    title: "Innovation continue",
                    description: "Veille technologique et adoption des meilleures pratiques",
                    icon: "💡"
                  },
                  {
                    title: "Support réactif",
                    description: "Accompagnement personnalisé et support technique expert",
                    icon: "🎯"
                  },
                  {
                    title: "Méthodologie éprouvée",
                    description: "Processus itératif et collaboratif pour des projets réussis",
                    icon: "⚙️"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-5 group">
                    <div className="
                      flex-shrink-0 
                      w-10 h-10 
                      rounded-xl
                      bg-blue-50/80 dark:bg-blue-500/[0.08]
                      flex items-center justify-center
                      transition-all duration-300
                      group-hover:scale-105
                      group-hover:bg-blue-50 dark:group-hover:bg-blue-500/[0.12]
                    ">
                      <span className="text-xl">
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <h3 className="
                        text-[1rem]
                        font-medium
                        text-gray-900 dark:text-white
                        mb-1
                      ">
                        {item.title}
                      </h3>
                      <p className="
                        text-[0.9375rem]
                        leading-[1.5]
                        text-gray-600/80 dark:text-gray-300/80
                      ">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex items-center">
              <div className={`relative w-full aspect-square group ${ANIMATIONS.hover}`}>
                <div className={`absolute inset-0 ${GRADIENTS.BG_CARD} rounded-[40px] ${ANIMATIONS.backgroundHover}`} />
                <div className={`absolute inset-0 flex items-center justify-center ${ANIMATIONS.contentHover}`}>
                  <Image
                    src="/expertise-illustration.svg"
                    alt="Expertise Illustration"
                    width={540}
                    height={540}
                    className={`relative z-10 w-[85%] h-[85%] object-contain ${ANIMATIONS.imageHover}`}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id={SECTION_IDS.contact}
          badge="CONTACT"
          title="Démarrons votre"
          subtitle="transformation digitale"
        >
          <div className={COMMON_CLASSES.contactCard}>
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <p className={COMMON_CLASSES.sectionDescription}>
                  Transformez vos idées en solutions concrètes avec notre expertise
                </p>
                
                <div className="space-y-8 mb-12">
                  {/* Contact Info Items */}
                  {[
                    {
                      title: "Email",
                      value: "contact@wilmoredynamics.com",
                      icon: (
                        <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none">
                          <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" 
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )
                    },
                    {
                      title: "Délai de réponse",
                      value: "Sous 24h ouvrées",
                      icon: (
                        <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none">
                          <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" 
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className={`${COMMON_CLASSES.iconContainer} ${ANIMATIONS.iconHover}`}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-medium mb-2">{item.title}</h3>
                        {item.title === "Email" ? (
                          <a href={`mailto:${item.value}`} 
                             className={`text-[${COLORS.primary.light}] dark:text-[${COLORS.primary.dark}] hover:opacity-80 transition-opacity`}>
                            {item.value}
                          </a>
                        ) : (
                          <p className={COMMON_CLASSES.textContainer}>{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`relative group ${ANIMATIONS.cardHover}`}>
                <div className={`absolute inset-0 ${GRADIENTS.BG_CARD} rounded-[32px]`} />
                <div className="relative p-8 md:p-10">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id={SECTION_IDS.process}
          badge="NOTRE APPROCHE"
          title="Comment nous"
          subtitle="transformons vos idées"
          hasGradientBg
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Analyse",
                description: "Étude approfondie de vos besoins et objectifs",
                features: ["Audit technique", "Analyse des besoins", "Définition des objectifs"],
                icon: (
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                step: "02",
                title: "Conception",
                description: "Architecture et solutions sur mesure",
                features: ["Architecture", "Choix technologiques", "Planning détaillé"],
                icon: (
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none">
                    <path d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 8H16M8 12H16M8 16H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                step: "03",
                title: "Développement",
                description: "Réalisation itérative et tests continus",
                features: ["Cycles courts", "Tests automatisés", "Revue de code"],
                icon: (
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none">
                    <path d="M8 9L4 12L8 15M16 9L20 12L16 15M14 4L10 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                step: "04",
                title: "Déploiement",
                description: "Mise en production et accompagnement",
                features: ["CI/CD", "Monitoring", "Support"],
                icon: (
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none">
                    <path d="M12 15V3M12 15L8 11M12 15L16 11M2 17L2.621 19.485C2.72915 19.9177 2.97882 20.3018 3.33033 20.5763C3.68184 20.8508 4.11501 20.9999 4.561 21H19.439C19.885 20.9999 20.3182 20.8508 20.6697 20.5763C21.0212 20.3018 21.2708 19.9177 21.379 19.485L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              }
            ].map((step, index) => (
              <div key={index} className="group relative">
                <div className={`p-10 ${COMMON_CLASSES.cardWrapper} ${ANIMATIONS.cardHover}`}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`${COMMON_CLASSES.iconContainer} ${ANIMATIONS.iconHover}`}>
                      <span className={`text-[${COLORS.primary.light}] dark:text-[${COLORS.primary.dark}] text-xl font-bold`}>
                        {step.step}
                      </span>
                    </div>
                    <div className={`text-[${COLORS.primary.light}] dark:text-[${COLORS.primary.dark}] ${ANIMATIONS.groupHover}`}>
                      {step.icon}
                    </div>
                  </div>
                  <h3 className={COMMON_CLASSES.cardHover}>
                    {step.title}
                  </h3>
                  <p className={COMMON_CLASSES.textContainer}>
                    {step.description}
                  </p>
                  <div className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className={`flex items-center gap-2 text-sm ${COMMON_CLASSES.textContainer}`}>
                        <div className={`w-1.5 h-1.5 rounded-full bg-[${COLORS.primary.light}] dark:bg-[${COLORS.primary.dark}] opacity-75`} />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id={SECTION_IDS.stack}
          badge="TECHNOLOGIES"
          title="Notre stack"
          subtitle="technologique"
          hasGradientBg
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { name: "React", icon: "/tech/react.svg", type: "Frontend" },
              { name: "Next.js", icon: "/tech/nextjs.svg", type: "Framework" },
              { name: "TypeScript", icon: "/tech/typescript.svg", type: "Language" },
              { name: "Node.js", icon: "/tech/nodejs.svg", type: "Backend" },
              { name: "Python", icon: "/tech/python.svg", type: "Backend" },
              { name: "Kubernetes", icon: "/tech/kubernetes.svg", type: "Infrastructure" },
              { name: "Docker", icon: "/tech/docker.svg", type: "Infrastructure" },
              { name: "AWS", icon: "/tech/aws.svg", type: "Cloud" },
              { name: "PostgreSQL", icon: "/tech/postgresql.svg", type: "Database" },
              { name: "MongoDB", icon: "/tech/mongodb.svg", type: "Database" }
            ].map((tool, index) => (
              <div key={index} className="group">
                <div className="p-6 rounded-[32px] bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/[0.1] hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full flex flex-col items-center justify-center gap-4">
                  <div className={`${COMMON_CLASSES.iconContainer} ${ANIMATIONS.iconHover}`}>
                    <Image
                      src={tool.icon}
                      alt={tool.name}
                      width={40}
                      height={40}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-medium mb-1 group-hover:text-[#1a73e8] dark:group-hover:text-[#8ab4f8] transition-colors">
                      {tool.name}
                    </h3>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {tool.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id={SECTION_IDS.openSource}
          badge="OPEN SOURCE"
          title={
            <div className={COMMON_CLASSES.sectionTitle}>
              Solutions
              <span className={COMMON_CLASSES.sectionSubtitle}>
                open source
              </span>
            </div>
          }
        >
          <div className="grid md:grid-cols-2 gap-20">
            <div className="flex flex-col">
              <p className="
                text-[1.125rem]
                leading-[1.6]
                text-gray-600/90 dark:text-gray-300/90
                mb-12
              ">
                Des solutions transparentes et personnalisables pour garder le contrôle de vos données
              </p>

              <div className="space-y-12 flex-grow">
                {[
                  {
                    title: "Transparence totale",
                    description: "Code source accessible et auditable",
                    icon: "🔍"
                  },
                  {
                    title: "Personnalisation complète",
                    description: "Adaptez les solutions à vos besoins spécifiques",
                    icon: "⚙️"
                  },
                  {
                    title: "Indépendance",
                    description: "Aucune dépendance à des services propriétaires",
                    icon: "🔒"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex gap-5 group">
                    <div className="
                      flex-shrink-0 
                      w-10 h-10 
                      rounded-xl
                      bg-blue-50/80 dark:bg-blue-500/[0.08]
                      flex items-center justify-center
                      transition-all duration-300
                      group-hover:scale-105
                      group-hover:bg-blue-50 dark:group-hover:bg-blue-500/[0.12]
                    ">
                      <span className="text-xl">
                        {feature.icon}
                      </span>
                    </div>
                    <div>
                      <h3 className="
                        text-[1rem]
                        font-medium
                        text-gray-900 dark:text-white
                        mb-1
                      ">
                        {feature.title}
                      </h3>
                      <p className="
                        text-[0.9375rem]
                        leading-[1.5]
                        text-gray-600/80 dark:text-gray-300/80
                      ">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <a 
                href="/apps" 
                className={`
                  group
                  inline-flex
                  items-center
                  gap-2.5
                  px-6
                  py-2.5
                  mt-8
                  w-fit
                  text-[13px]
                  font-medium
                  text-white
                  bg-blue-600/95 hover:bg-blue-600
                  dark:bg-blue-500/95 dark:hover:bg-blue-500
                  rounded-[20px]
                  transition-all
                  duration-200
                  shadow-sm
                  hover:shadow-md
                  hover:translate-y-[-1px]
                  focus:outline-none 
                  focus:ring-2 
                  focus:ring-blue-500/50
                  focus:ring-offset-1
                  leading-relaxed
                `}
              >
                Explorer nos applications
                <svg 
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13 7l5 5m0 0l-5 5m5-5H6" 
                  />
                </svg>
              </a>
            </div>

            <div className="relative flex items-center">
              <div className={`relative w-full aspect-square group ${ANIMATIONS.hover}`}>
                <div className={`absolute inset-0 ${GRADIENTS.BG_CARD} rounded-[40px] ${ANIMATIONS.backgroundHover}`} />
                <div className={`absolute inset-0 flex items-center justify-center ${ANIMATIONS.contentHover}`}>
                  <Image
                    src="/expertise-illustration.svg"
                    alt="Expertise Illustration"
                    width={540}
                    height={540}
                    className={`relative z-10 w-[85%] h-[85%] object-contain ${ANIMATIONS.imageHover}`}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
}