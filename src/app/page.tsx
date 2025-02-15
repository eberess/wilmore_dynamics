import Image from "next/image";
import Navbar from "@/components/Navbar";
import ScrollToTop from '@/components/ScrollToTop';
import FadeIn from '@/components/FadeIn';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute right-[-20%] md:right-[-10%] top-1/3 w-[300px] md:w-[600px] h-[300px] md:h-[600px] transform rotate-12">
              <div className="w-full h-full bg-gradient-to-br from-[#1a73e8]/[0.02] dark:from-[#8ab4f8]/[0.02] to-transparent rounded-[40px] backdrop-blur-sm" />
              <Image
                src="/category_24dp_E8EAED_FILL1_wght200_GRAD0_opsz24.svg"
                alt="Pattern"
                width={400}
                height={400}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.03] dark:opacity-[0.05] rotate-12 scale-[0.75] md:scale-150 invert-0 dark:invert"
              />
            </div>
            <div className="absolute left-[-20%] md:left-[-5%] bottom-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] transform -rotate-12">
              <div className="w-full h-full bg-gradient-to-tr from-[#1a73e8]/[0.02] dark:from-[#8ab4f8]/[0.02] to-transparent rounded-[40px] backdrop-blur-sm" />
              <Image
                src="/category_24dp_E8EAED_FILL1_wght200_GRAD0_opsz24.svg"
                alt="Pattern"
                width={300}
                height={300}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.03] dark:opacity-[0.05] -rotate-12 scale-[0.75] md:scale-125 invert-0 dark:invert"
              />
            </div>
          </div>

          {/* Content */}
          <div className="max-w-[640px] mx-auto text-center relative z-10">
            <div className="flex justify-center mb-12">
              <Image
                src="/category_24dp_E8EAED_FILL1_wght200_GRAD0_opsz24.svg"
                alt="Wilmore Icon"
                width={48}
                height={48}
                className="invert-0 dark:invert"
                priority
              />
            </div>
            
            <h1 className="text-[44px] md:text-[64px] leading-[1.1] font-bold mb-8">
              Solutions
              <span className="block text-[#4285f4] dark:text-[#8ab4f8]">
                intelligentes
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-[480px] mx-auto px-4 md:px-0">
              Nous créons des expériences technologiques exceptionnelles qui transforment les entreprises.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 md:px-0">
              <a
                href="#contact"
                className="px-8 py-3 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white transition-colors text-[15px] font-medium"
              >
                Démarrer un projet →
              </a>
              <a
                href="#solutions"
                className="px-8 py-3 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/[0.15] text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-white/[0.1] transition-colors text-[15px] font-medium"
              >
                En savoir plus
              </a>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <FadeIn>
          <section className="py-20 px-4" id="solutions">
            <div className="max-w-[1200px] mx-auto">
              <div className="text-center mb-24">
                <span className="text-[#1a73e8] dark:text-[#8ab4f8] text-sm font-medium mb-4 block">
                  NOS SOLUTIONS
                </span>
                <h2 className="text-[44px] leading-[1.2] font-bold mb-6">
                  Technologies de pointe
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-[540px] mx-auto">
                  Des solutions innovantes pour répondre aux défis de demain
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Intelligence Artificielle",
                    description: "Automatisation intelligente des processus et aide à la décision basée sur les données",
                    icon: (
                      <svg className="w-8 h-8 text-[#1a73e8] dark:text-[#8ab4f8]" viewBox="0 0 24 24" fill="none">
                        <path d="M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    ),
                    features: ["Machine Learning", "Deep Learning", "NLP"]
                  },
                  {
                    title: "Cloud Computing",
                    description: "Infrastructure évolutive et sécurisée pour vos applications critiques",
                    icon: (
                      <svg className="w-8 h-8 text-[#1a73e8] dark:text-[#8ab4f8]" viewBox="0 0 24 24" fill="none">
                        <path d="M3 15C3 17.2091 4.79086 19 7 19H16C18.7614 19 21 16.7614 21 14C21 11.2386 18.7614 9 16 9C15.9666 9 15.9334 9.00033 15.9002 9.001C15.4373 6.71476 13.4193 5 11 5C8.23858 5 6 7.23858 6 10C6 10.3768 6.04169 10.7439 6.12071 11.097C4.33457 11.4976 3 13.0929 3 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ),
                    features: ["Auto-scaling", "Haute disponibilité", "Sécurité"]
                  },
                  {
                    title: "Développement",
                    description: "Applications modernes et performantes avec une expérience utilisateur optimale",
                    icon: (
                      <svg className="w-8 h-8 text-[#1a73e8] dark:text-[#8ab4f8]" viewBox="0 0 24 24" fill="none">
                        <path d="M8 9L4 12L8 15M16 9L20 12L16 15M14 4L10 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ),
                    features: ["Web", "Mobile", "API"]
                  }
                ].map((solution, index) => (
                  <div
                    key={index}
                    className="group p-8 rounded-[28px] bg-white dark:bg-white/[0.02] hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-all duration-300 border border-gray-200 dark:border-white/[0.1] hover:shadow-lg"
                  >
                    <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
                      {solution.icon}
                    </div>
                    <h3 className="text-[22px] font-semibold mb-3 group-hover:text-[#1a73e8] dark:group-hover:text-[#8ab4f8] transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      {solution.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {solution.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-3 py-1 rounded-full text-sm bg-[#1a73e8]/[0.08] dark:bg-white/[0.05] text-[#1a73e8] dark:text-[#8ab4f8] font-medium border border-[#1a73e8]/10 dark:border-white/[0.1]"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Why Us Section */}
        <FadeIn delay={200}>
          <section className="py-20 px-4 bg-gray-50/50 dark:bg-black/[0.2]" id="about">
            <div className="max-w-[1200px] mx-auto">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <span className="text-[#1a73e8] dark:text-[#8ab4f8] text-sm font-medium mb-4 block">
                    POURQUOI NOUS CHOISIR
                  </span>
                  <h2 className="text-[44px] leading-[1.2] font-bold mb-6">
                    Une expertise unique
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
                    Notre approche combine excellence technique et vision stratégique pour des résultats exceptionnels
                  </p>
                  <div className="space-y-8">
                    {[
                      {
                        title: "Excellence technique",
                        description: "Solutions robustes et évolutives conçues selon les meilleures pratiques"
                      },
                      {
                        title: "Innovation continue",
                        description: "Veille technologique permanente et adoption des dernières technologies"
                      },
                      {
                        title: "Support premium",
                        description: "Accompagnement personnalisé 24/7 par nos experts"
                      },
                      {
                        title: "Méthodologie agile",
                        description: "Processus itératif et collaboratif pour des résultats optimaux"
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex gap-6 group">
                        <div className="mt-1">
                          <div className="w-6 h-6 rounded-full bg-[#1a73e8] group-hover:scale-110 transition-transform">
                            <div className="w-full h-full rounded-full bg-[#1a73e8] flex items-center justify-center">
                              <div className="w-2 h-2 rounded-full bg-white" />
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 group-hover:text-[#1a73e8] dark:group-hover:text-[#8ab4f8] transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative aspect-square">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#1a73e8]/10 to-transparent dark:from-[#8ab4f8]/10 rounded-[40px]" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-3/4 h-3/4 relative">
                          <div className="absolute inset-0 border-2 border-[#1a73e8]/20 dark:border-[#8ab4f8]/20 rounded-[32px] transform rotate-6" />
                          <div className="absolute inset-0 border-2 border-[#1a73e8]/20 dark:border-[#8ab4f8]/20 rounded-[32px] transform -rotate-6" />
                          <Image
                            src="/category_24dp_E8EAED_FILL1_wght200_GRAD0_opsz24.svg"
                            alt="Pattern"
                            width={400}
                            height={400}
                            className="text-gray-900 dark:text-white opacity-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Contact Section avec design amélioré */}
        <section className="py-20 px-4" id="contact">
          <div className="max-w-[1200px] mx-auto">
            <div className="bg-white dark:bg-white/[0.02] rounded-[40px] border border-gray-100 dark:border-white/[0.1] p-16">
              <div className="max-w-[640px] mx-auto text-center">
                <span className="text-[#1a73e8] dark:text-[#8ab4f8] text-sm font-medium mb-4 block">
                  CONTACT
                </span>
                <h2 className="text-[44px] leading-[1.2] font-bold mb-6">
                  Démarrons votre projet
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
                  Transformez vos idées en solutions concrètes avec notre expertise
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:contact@wilmore-dynamics.com"
                    className="inline-flex px-8 py-3 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white transition-all duration-300 text-[15px] font-medium hover:scale-105 items-center justify-center"
                  >
                    <span className="mr-2">Nous contacter</span>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a
                    href="tel:+33123456789"
                    className="inline-flex px-8 py-3 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/[0.15] transition-all duration-300 text-[15px] font-medium items-center justify-center"
                  >
                    +33 1 23 45 67 89
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section avec design amélioré */}
        <FadeIn delay={100}>
          <section className="py-20 px-4 bg-gray-50/50 dark:bg-black/[0.2]">
            <div className="max-w-[1200px] mx-auto">
              <span className="text-[#1a73e8] dark:text-[#8ab4f8] text-sm font-medium mb-4 block text-center">
                NOTRE APPROCHE
              </span>
              <h2 className="text-[44px] leading-[1.2] font-bold mb-16 text-center">
                Comment nous travaillons
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  {
                    step: "01",
                    title: "Analyse",
                    description: "Compréhension approfondie de vos besoins et objectifs",
                    icon: (
                      <svg className="w-8 h-8 text-[#1a73e8] dark:text-[#8ab4f8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )
                  },
                  {
                    step: "02",
                    title: "Conception",
                    description: "Élaboration d'une solution sur mesure adaptée à vos besoins",
                    icon: (
                      <svg className="w-8 h-8 text-[#1a73e8] dark:text-[#8ab4f8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 8H16M8 12H16M8 16H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )
                  },
                  {
                    step: "03",
                    title: "Développement",
                    description: "Création avec les meilleures pratiques et technologies",
                    icon: (
                      <svg className="w-8 h-8 text-[#1a73e8] dark:text-[#8ab4f8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 9L4 12L8 15M16 9L20 12L16 15M14 4L10 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )
                  },
                  {
                    step: "04",
                    title: "Déploiement",
                    description: "Mise en production et accompagnement continu",
                    icon: (
                      <svg className="w-8 h-8 text-[#1a73e8] dark:text-[#8ab4f8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )
                  }
                ].map((process, index) => (
                  <div key={index} className="relative group">
                    <div className="p-8 rounded-[28px] bg-white dark:bg-white/[0.02] border border-gray-100 dark:border-white/[0.1] transition-all duration-300 hover:shadow-lg">
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[#1a73e8] dark:text-[#8ab4f8] font-medium text-sm">
                            {process.step}
                          </span>
                          <div className="transition-transform duration-300 group-hover:scale-110">
                            {process.icon}
                          </div>
                        </div>
                        <h3 className="text-[22px] font-semibold mb-3 group-hover:text-[#1a73e8] dark:group-hover:text-[#8ab4f8] transition-colors">
                          {process.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {process.description}
                        </p>
                      </div>
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                        <svg className="w-8 h-8 text-[#1a73e8]/20 dark:text-[#8ab4f8]/20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Tech Stack Section avec design épuré */}
        <FadeIn delay={200}>
          <section className="py-20 px-4">
            <div className="max-w-[1200px] mx-auto text-center">
              <span className="text-[#1a73e8] dark:text-[#8ab4f8] text-sm font-medium mb-4 block">
                TECHNOLOGIES
              </span>
              <h2 className="text-[44px] leading-[1.2] font-bold mb-6">
                Notre stack technologique
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-[540px] mx-auto mb-16">
                Les meilleurs outils pour des solutions performantes et évolutives
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { name: "React", logo: "/tech/react.svg" },
                  { name: "Next.js", logo: "/tech/nextjs.svg" },
                  { name: "TypeScript", logo: "/tech/typescript.svg" },
                  { name: "Node.js", logo: "/tech/nodejs.svg" },
                  { name: "MongoDB", logo: "/tech/mongodb.svg" },
                  { name: "GraphQL", logo: "/tech/graphql.svg" },
                  { name: "AWS", logo: "/tech/aws.svg" },
                  { name: "Docker", logo: "/tech/docker.svg" }
                ].map((tech) => (
                  <div
                    key={tech.name}
                    className="aspect-square rounded-[28px] bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/[0.1] p-6 flex flex-col items-center justify-center group hover:border-[#1a73e8] dark:hover:border-[#8ab4f8]/20 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="relative w-16 h-16 mb-4 transition-transform duration-500 group-hover:scale-110">
                      <Image
                        src={tech.logo}
                        alt={`Logo ${tech.name}`}
                        fill
                        className="object-contain text-gray-800 dark:text-white"
                        sizes="(max-width: 768px) 64px, 64px"
                        priority={tech.name === "React" || tech.name === "Next.js"}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-400 group-hover:text-[#1a73e8] dark:group-hover:text-[#8ab4f8] transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Section Open Source & Self-Hosted */}
        <FadeIn delay={200}>
          <section className="py-20 px-4">
            <div className="max-w-[1200px] mx-auto">
              <span className="text-[#1a73e8] dark:text-[#8ab4f8] text-sm font-medium mb-4 block">
                SOLUTIONS OPEN SOURCE
              </span>
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-[44px] leading-[1.2] font-bold mb-6">
                    Reprenez le contrôle de vos données
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
                    Des solutions open source auto-hébergées pour une indépendance totale et une sécurité maximale
                  </p>
                  <div className="space-y-8">
                    {[
                      {
                        title: "Auto-hébergement",
                        description: "Gardez le contrôle total de vos données et de votre infrastructure"
                      },
                      {
                        title: "Open Source",
                        description: "Code source transparent et communauté active pour plus de sécurité"
                      },
                      {
                        title: "Personnalisation",
                        description: "Adaptez les solutions à vos besoins spécifiques"
                      },
                      {
                        title: "Indépendance",
                        description: "Libérez-vous des services cloud propriétaires et de leurs contraintes"
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex gap-6 group">
                        <div className="mt-1">
                          <div className="w-6 h-6 rounded-full bg-[#1a73e8] group-hover:scale-110 transition-transform">
                            <div className="w-full h-full rounded-full bg-[#1a73e8] flex items-center justify-center">
                              <div className="w-2 h-2 rounded-full bg-white" />
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 group-hover:text-[#1a73e8] dark:group-hover:text-[#8ab4f8] transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    {
                      name: "Nextcloud",
                      logo: "/apps/nextcloud.webp",
                      color: "from-[#0082C9]/5 to-transparent"
                    },
                    {
                      name: "Coolify",
                      logo: "/apps/coolify.webp",
                      color: "from-[#58CC02]/5 to-transparent"
                    },
                    {
                      name: "Matrix",
                      logo: "/apps/synapse.webp",
                      color: "from-[#0DBD8B]/5 to-transparent"
                    },
                    {
                      name: "Jitsi",
                      logo: "/apps/jitsi.webp",
                      color: "from-[#FF8A00]/5 to-transparent"
                    },
                    {
                      name: "Proxmox",
                      logo: "/apps/proxmox.webp",
                      color: "from-[#000000]/5 to-transparent"
                    },
                    {
                      name: "Mattermost",
                      logo: "/apps/mattermost.webp",
                      color: "from-[#0058CC]/5 to-transparent"
                    }
                  ].map((app, index) => (
                    <div
                      key={index}
                      className="group flex flex-col items-center gap-4"
                    >
                      <div className="relative w-32 h-32 rounded-[32px] bg-white dark:bg-white/[0.02] shadow-lg shadow-gray-200/50 dark:shadow-none overflow-hidden hover:scale-105 transition-all duration-300">
                        <Image
                          src={app.logo}
                          alt={app.name}
                          fill
                          className="object-contain p-0"
                        />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        {app.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 text-center">
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-[#1a73e8] dark:text-[#8ab4f8] hover:opacity-80 transition-opacity text-sm font-medium"
                >
                  Découvrir toutes nos solutions
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Section Actualités */}
        <FadeIn delay={200}>
          <section className="py-20 px-4 bg-gray-50/50 dark:bg-black/[0.2]">
            <div className="max-w-[1200px] mx-auto">
              <span className="text-[#1a73e8] dark:text-[#8ab4f8] text-sm font-medium mb-4 block">
                ACTUALITÉS
              </span>
              <div className="flex justify-between items-end mb-16">
                <h2 className="text-[44px] leading-[1.2] font-bold">
                  Dernières actualités
                </h2>
                <a 
                  href="#" 
                  className="hidden md:inline-flex items-center text-[#1a73e8] dark:text-[#8ab4f8] hover:opacity-80 transition-opacity"
                >
                  Voir toutes les actualités
                  <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "L'impact de l'IA sur le développement moderne",
                    excerpt: "Découvrez comment l'intelligence artificielle transforme les pratiques de développement et améliore la productivité des équipes.",
                    date: "15 Mars 2024",
                    readTime: "5 min",
                    category: "Innovation"
                  },
                  {
                    title: "Optimiser les performances de vos applications React",
                    excerpt: "Guide pratique pour améliorer significativement les performances de vos applications React avec les dernières best practices.",
                    date: "10 Mars 2024",
                    readTime: "4 min",
                    category: "Développement"
                  },
                  {
                    title: "Sécurité et Cloud Computing en 2024",
                    excerpt: "Les meilleures pratiques pour sécuriser vos applications cloud et protéger vos données sensibles.",
                    date: "5 Mars 2024",
                    readTime: "6 min",
                    category: "Sécurité"
                  }
                ].map((post, index) => (
                  <div 
                    key={index}
                    className="group rounded-[28px] bg-white dark:bg-white/[0.02] border border-gray-100 dark:border-white/[0.1] overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <div className="aspect-[16/9] relative bg-gray-100 dark:bg-white/[0.05]">
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                          <path d="M4 16L8.586 11.414C9.367 10.633 10.633 10.633 11.414 11.414L16 16M14 14L15.586 12.414C16.367 11.633 17.633 11.633 18.414 12.414L20 14M14 8H14.01M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-sm text-[#1a73e8] dark:text-[#8ab4f8] font-medium">
                          {post.category}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {post.date}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {post.readTime} de lecture
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-[#1a73e8] dark:group-hover:text-[#8ab4f8] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <a 
                        href="#" 
                        className="inline-flex items-center text-[#1a73e8] dark:text-[#8ab4f8] hover:opacity-80 transition-opacity text-sm font-medium"
                      >
                        Lire la suite
                        <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center md:hidden">
                <a 
                  href="#" 
                  className="inline-flex items-center text-[#1a73e8] dark:text-[#8ab4f8] hover:opacity-80 transition-opacity"
                >
                  Voir toutes les actualités
                  <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Footer */}
        <footer className="py-16 px-4 border-t border-gray-200 dark:border-white/[0.1]">
          <div className="max-w-[1200px] mx-auto flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Image
                src="/category_24dp_E8EAED_FILL1_wght200_GRAD0_opsz24.svg"
                alt="Wilmore Dynamics"
                width={24}
                height={24}
                className="invert-0 dark:invert"
              />
              <span className="text-sm">© 2024 Wilmore Dynamics</span>
            </div>
            <nav className="flex gap-6">
              <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                Mentions légales
              </a>
            </nav>
          </div>
        </footer>

        <ScrollToTop />
      </main>
    </>
  );
}
