import Image from "next/image";
import Navbar from "@/components/Navbar";
import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';
import Section from '@/components/Section';
import ScrollIcon from '@/components/ScrollIcon';

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
      url: '/og-image.webp',
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
    images: ['/og-image.webp']
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
    "https://git.wilmoredynamics.com",
/*    "https://linkedin.com/company/wilmore-dynamics" */
  ]
};

// IDs cohérents pour toutes les sections
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
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen overflow-x-hidden">
        <h1 className="sr-only">Wilmore Dynamics - Solutions Cloud Native et DevOps en France</h1>
        
        {/* Hero Section */}
        <Section
          id={SECTION_IDS.hero}
          badge="ACCUEIL"
          title={
            <div className="text-center max-w-[800px] mx-auto mb-16">
              <h1 className="text-[40px] sm:text-[52px] md:text-[96px] leading-[1.1] font-medium tracking-[-0.02em]">
                Des solutions
                <span className="block bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  qui transforment
                </span>
                <span className="block text-[32px] sm:text-[40px] md:text-[64px] mt-2 sm:mt-4 font-normal text-gray-600 dark:text-gray-300">
                  votre entreprise
                </span>
              </h1>
              <p className="mt-6 text-xl text-gray-600/90 dark:text-gray-300/90 max-w-[640px] mx-auto">
                Nous concevons des expériences technologiques innovantes pour propulser votre croissance
              </p>
            </div>
          }
          className="min-h-[90vh] flex flex-col items-center justify-center relative"
        >
          {/* Content */}
          <div className="max-w-[800px] mx-auto text-center relative z-10">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="#contact" aria-label="Démarrer un projet" className="group px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 text-[17px] font-medium hover:scale-[1.03]">
                Démarrer un projet
              </a>
              <a href="#solutions" aria-label="En savoir plus sur nos solutions" className="group px-8 py-4 rounded-full bg-gray-100 dark:bg-white/[0.08] hover:bg-gray-200 dark:hover:bg-white/[0.12] text-gray-700 dark:text-gray-300 transition-all duration-300 text-[17px] font-medium hover:scale-[1.03]">
                En savoir plus
              </a>
            </div>
          </div>
          
          {/* Ajout de l'icône de scroll, supprime si pas besoin */}
          <ScrollIcon targetId={SECTION_IDS.solutions} aria-label="Faites défiler vers les solutions" />
        </Section>

        <Section
          id={SECTION_IDS.solutions}
          badge="NOS SOLUTIONS"
          title="Technologies de pointe pour"
          subtitle="votre transformation digitale"
          hasGradientBg
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 px-4 sm:px-0 h-full">
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
              <div key={index} className="group relative h-full p-4 sm:p-8 rounded-[24px] sm:rounded-[32px] bg-white/50 dark:bg-white/[0.02] border border-gray-200/50 dark:border-white/[0.1] hover:bg-white dark:hover:bg-white/[0.03] transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                <div className="flex flex-col h-full">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-500/[0.08] flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-medium mt-6 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 flex-grow">
                    {solution.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
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
              </div>
            ))}
          </div>
        </Section>

        <Section
          id={SECTION_IDS.about}
          badge="POURQUOI NOUS CHOISIR"
          title={
            <div className="text-center max-w-[800px] mx-auto mb-16">
              <h2 className="text-[2.75rem] sm:text-[3.5rem] leading-[1.1] font-medium tracking-[-0.02em] text-gray-900 dark:text-white">
                Une expertise qui fait
                <span className="block bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mt-2">
                  la différence
                </span>
              </h2>
              <p className="mt-6 text-xl text-gray-600/90 dark:text-gray-300/90 max-w-[640px] mx-auto">
                Nous combinons innovation technologique et excellence opérationnelle pour créer des solutions qui transforment votre entreprise
              </p>
            </div>
          }
          className="py-24"
        >
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-16">
              {[
                {
                  title: "Excellence technique",
                  description: "Notre équipe d'experts conçoit des solutions robustes selon les plus hauts standards de l'industrie",
                  icon: (
                    <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                {
                  title: "Innovation continue",
                  description: "Nous restons à la pointe de la technologie pour vous offrir les solutions les plus performantes",
                  icon: (
                    <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  )
                },
                {
                  title: "Support personnalisé",
                  description: "Un accompagnement sur mesure et un support réactif pour garantir votre succès",
                  icon: (
                    <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  )
                }
              ].map((item, index) => (
                <div key={index} className="group flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-500/[0.08] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="relative aspect-square rounded-[40px] overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10 group-hover:scale-105 transition-transform duration-500" />
                <svg
                  width="600"
                  height="600"
                  viewBox="0 0 600 600"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                >
                  {/* Fond avec motif hexagonal subtil */}
                  <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse">
                    <path
                      d="M25 0L50 14.4v28.8L25 43.4L0 28.8V14.4L25 0z"
                      fill="none"
                      stroke="#1a73e8"
                      strokeWidth="0.5"
                      strokeOpacity="0.1"
                    />
                  </pattern>
                  <rect width="600" height="600" fill="url(#hexagons)" />

                  {/* Symboles Cloud Native */}
                  <g className="dark:opacity-80">
                    {/* Container/Pod central */}
                    <path
                      d="M300 250 L350 280 L350 340 L300 370 L250 340 L250 280 Z"
                      fill="none"
                      stroke="#1a73e8"
                      strokeWidth="2"
                    />
                    
                    {/* Microservices connectés */}
                    {[0, 120, 240].map((angle) => (
                      <g key={angle} transform={`rotate(${angle} 300 300)`}>
                        <path
                          d="M380 300 L420 300"
                          stroke="#1a73e8"
                          strokeWidth="2"
                          strokeDasharray="4 4"
                        />
                        <rect
                          x="420"
                          y="280"
                          width="40"
                          height="40"
                          rx="8"
                          fill="none"
                          stroke="#1a73e8"
                          strokeWidth="2"
                        />
                      </g>
                    ))}
                  </g>

                  {/* Symboles DevOps (CI/CD) */}
                  <g transform="translate(0, 100)">
                    <path
                      d="M250 400 Q300 350 350 400"
                      fill="none"
                      stroke="#1a73e8"
                      strokeWidth="2"
                      strokeDasharray="6 4"
                    />
                    <circle cx="250" cy="400" r="15" fill="#1a73e8" fillOpacity="0.1" stroke="#1a73e8" strokeWidth="2" />
                    <circle cx="350" cy="400" r="15" fill="#1a73e8" fillOpacity="0.1" stroke="#1a73e8" strokeWidth="2" />
                  </g>

                  {/* Texte minimaliste */}
                  <g className="dark:opacity-60">
                    <text x="260" y="180" fill="#1a73e8" fontSize="14" fontFamily="monospace">
                      {'cloud.native()'}
                    </text>
                    <text x="260" y="450" fill="#1a73e8" fontSize="14" fontFamily="monospace">
                      {'devops.transform()'}
                    </text>
                  </g>

                  {/* Définitions des dégradés */}
                  <defs>
                    <linearGradient
                      id="grid-gradient"
                      x1="0"
                      y1="0"
                      x2="600"
                      y2="600"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#1a73e8" stopOpacity="0.03" />
                      <stop offset="100%" stopColor="#8ab4f8" stopOpacity="0.03" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 w-20 sm:w-40 h-20 sm:h-40 bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-3xl" />
            </div>
          </div>
        </Section>

        <Section
          id={SECTION_IDS.contact}
          badge="CONTACT"
          title={
            <div className="text-center max-w-[800px] mx-auto mb-16">
              <h2 className="text-[2.75rem] sm:text-[3.5rem] leading-[1.1] font-medium tracking-[-0.02em] text-gray-900 dark:text-white">
                Démarrons votre
                <span className="block bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  transformation
                </span>
              </h2>
              <p className="mt-6 text-xl text-gray-600/90 dark:text-gray-300/90 max-w-[640px] mx-auto">
                Experts en solutions Cloud Native et DevOps
              </p>
            </div>
          }
          className="py-24"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Informations de contact */}
            <div className="space-y-8">
              <div className="space-y-6">
                {[
                  {
                    icon: (
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    title: "Email",
                    value: "contact@wilmoredynamics.com",
                    link: "mailto:contact@wilmoredynamics.com"
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    ),
                    title: "Nouveau projet",
                    value: "Réponse sous 24h",
                    description: "Du lundi au vendredi, 9h-18h"
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group p-4 rounded-2xl hover:bg-gray-50/80 dark:hover:bg-white/[0.02] transition-colors duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-xl bg-blue-50/50 dark:bg-blue-500/[0.08] text-blue-600 dark:text-blue-400">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">{item.title}</h3>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div>
                            <p className="text-gray-600 dark:text-gray-400">{item.value}</p>
                            {item.description && (
                              <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                                {item.description}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-gray-200/50 dark:border-white/[0.1]">
                <h3 className="text-lg font-medium mb-4">
                  Suivez-nous
                </h3>
                <div className="flex gap-3">
                  {[
                    { name: 'GitHub', href: 'https://git.wilmoredynamics.com', icon: '/social/github.svg' },
                /*    { name: 'LinkedIn', href: 'https://linkedin.com/company/wilmore-dynamics', icon: '/social/linkedin.svg' }" */
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="p-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.02] hover:bg-gray-100 dark:hover:bg-white/[0.05] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={social.icon}
                        alt={social.name}
                        width={20}
                        height={20}
                        className="opacity-60 group-hover:opacity-100 transition-opacity dark:invert"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/5 via-blue-400/5 to-blue-500/5 dark:from-blue-500/[0.02] dark:via-blue-400/[0.02] dark:to-blue-500/[0.02] rounded-[32px] blur-lg" />
              <div className="relative p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-[24px] border border-gray-200/50 dark:border-white/[0.1] transition duration-300">
                <ContactForm />
              </div>
            </div>
          </div>
        </Section>

        <Section
          id={SECTION_IDS.process}
          badge="NOTRE APPROCHE"
          title={
            <div className="text-center max-w-[800px] mx-auto mb-16">
              <h2 className="text-[2.75rem] sm:text-[3.5rem] leading-[1.1] font-medium tracking-[-0.02em] text-gray-900 dark:text-white">
                Une méthodologie
                <span className="block bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  éprouvée
                </span>
              </h2>
              <p className="mt-6 text-xl text-gray-600/90 dark:text-gray-300/90 max-w-[640px] mx-auto">
                Un processus simple et efficace pour transformer vos idées en solutions
              </p>
            </div>
          }
          className="py-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {[
              {
                number: "01",
                title: "Analyse",
                description: "Compréhension approfondie de vos besoins",
                features: ["Audit technique", "Analyse des besoins", "Définition des objectifs"]
              },
              {
                number: "02",
                title: "Conception",
                description: "Élaboration d'une architecture moderne et évolutive",
                features: ["Architecture Cloud Native", "Choix technologiques", "Planning détaillé"]
              },
              {
                number: "03",
                title: "Réalisation",
                description: "Développement itératif avec des cycles courts",
                features: ["Développement Agile", "Tests continus", "Revue de code"]
              },
              {
                number: "04",
                title: "Déploiement",
                description: "Mise en production sécurisée et monitoring",
                features: ["CI/CD", "Monitoring", "Support continu"]
              }
            ].map((step, index) => (
              <div key={index} className="group relative">
                <div className="flex gap-8 items-start p-8 rounded-3xl bg-white dark:bg-white/[0.02] border border-gray-200/50 dark:border-white/[0.1] hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors duration-500">
                  <span className="text-[2.5rem] font-medium text-blue-600/20 dark:text-blue-500/20">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {step.description}
                    </p>
                    <ul className="space-y-3">
                      {step.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600/40 dark:bg-blue-500/40" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id={SECTION_IDS.stack}
          badge="TECHNOLOGIES"
          title={
            <div className="text-center max-w-[800px] mx-auto mb-16">
              <h2 className="text-[2.75rem] sm:text-[3.5rem] leading-[1.1] font-medium tracking-[-0.02em] text-gray-900 dark:text-white">
                Notre stack
                <span className="block bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  technologique
                </span>
              </h2>
              <p className="mt-6 text-xl text-gray-600/90 dark:text-gray-300/90 max-w-[640px] mx-auto">
                Des technologies modernes pour des solutions innovantes
              </p>
            </div>
          }
          className="py-24"
        >
          <div className="max-w-[1200px] mx-auto">
            <div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-16 sm:gap-24 py-16"
              role="list"
              aria-label="Liste des technologies"
            >
              {[
                { name: "React", icon: "/tech/react.svg" },
                { name: "Next.js", icon: "/tech/nextjs.svg" },
                { name: "Kubernetes", icon: "/tech/kubernetes.svg" },
                { name: "Docker", icon: "/tech/docker.svg" },
                { name: "Node.js", icon: "/tech/nodejs.svg" },
                { name: "TypeScript", icon: "/tech/typescript.svg" },
                { name: "AWS", icon: "/tech/aws.svg" },
                { name: "PostgreSQL", icon: "/tech/postgresql.svg" }
              ].map((tool, index) => (
                <div 
                  key={index} 
                  className="group flex flex-col items-center"
                  role="listitem"
                  aria-label={`Technologie ${tool.name}`}
                >
                  <div className="relative w-24 h-24 mb-8 transition-transform duration-500 group-hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Image
                      src={tool.icon}
                      alt={`Logo ${tool.name}`}
                      width={96}
                      height={96}
                      priority={index < 4}
                      className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-all duration-500"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-500">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section
          id={SECTION_IDS.openSource}
          badge="OPEN SOURCE"
          title={
            <div className="text-center max-w-[800px] mx-auto mb-16">
              <h2 className="text-[2.75rem] sm:text-[3.5rem] leading-[1.1] font-medium tracking-[-0.02em] text-gray-900 dark:text-white">
                Solutions
                <span className="block bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  open source
                </span>
              </h2>
              <p className="mt-6 text-xl text-gray-600/90 dark:text-gray-300/90 max-w-[640px] mx-auto">
                Des solutions transparentes et personnalisables pour votre indépendance
              </p>
            </div>
          }
          className="py-24"
        >
          <div className="max-w-[1200px] mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] to-blue-400/[0.02] dark:from-blue-500/[0.01] dark:to-blue-400/[0.01] rounded-[32px]" />
              <div className="relative p-8 sm:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div className="flex flex-col justify-center">
                    <div className="space-y-12" role="list" aria-label="Caractéristiques open source">
                      {[
                        {
                          title: "Transparence totale",
                          description: "Code source accessible et auditable",
                          icon: "🔍"
                        },
                        {
                          title: "Contrôle absolu",
                          description: "Maîtrisez vos données et votre infrastructure",
                          icon: "🛡️"
                        },
                        {
                          title: "Sur mesure",
                          description: "Adaptez les solutions à vos besoins",
                          icon: "⚡"
                        }
                      ].map((feature, index) => (
                        <div 
                          key={index} 
                          className="flex items-start gap-6 group"
                          role="listitem"
                          aria-label={`Caractéristique ${feature.title}`}
                        >
                          <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-500/[0.08] flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110">
                            {feature.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                              {feature.title}
                            </h3>
                            <p className="text-gray-600/90 dark:text-gray-400/90">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-12">
                      <a 
                        href="/applications" 
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 group"
                        aria-label="Explorer notre catalogue d'applications open source"
                      >
                        <span className="text-lg">Explorer nos applications</span>
                        <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div className="relative aspect-square group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-[32px] transition-opacity duration-500 group-hover:opacity-75" />
                    <Image
                      src="/open-source-illustration.svg"
                      alt="Open Source Illustration"
                      width={600}
                      height={600}
                      className="relative z-10 w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
}