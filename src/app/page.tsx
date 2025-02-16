import Image from "next/image";
import Navbar from "@/components/Navbar";
import ScrollToTop from '@/components/ScrollToTop';
import FadeIn from '@/components/FadeIn';
import ContactForm from '@/components/ContactForm';

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
                    title: "Architecture Cloud Native",
                    description: "Applications modernes, scalables et résilientes",
                    icon: (
                      <svg className="w-8 h-8 text-[#1a73e8] dark:text-[#8ab4f8]" viewBox="0 0 24 24" fill="none">
                        <path d="M3 15C3 17.2091 4.79086 19 7 19H16C18.7614 19 21 16.7614 21 14C21 11.2386 18.7614 9 16 9C15.9666 9 15.9334 9.00033 15.9002 9.001C15.4373 6.71476 13.4193 5 11 5C8.23858 5 6 7.23858 6 10C6 10.3768 6.04169 10.7439 6.12071 11.097C4.33457 11.4976 3 13.0929 3 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ),
                    features: ["Microservices", "Conteneurs", "Auto-scaling", "Haute disponibilité"]
                  },
                  {
                    title: "DevOps & Automatisation",
                    description: "Déploiement continu et monitoring avancé",
                    icon: (
                      <svg className="w-8 h-8 text-[#1a73e8] dark:text-[#8ab4f8]" viewBox="0 0 24 24" fill="none">
                        <path d="M8 9L4 12L8 15M16 9L20 12L16 15M14 4L10 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ),
                    features: ["CI/CD", "Infrastructure as Code", "Monitoring", "Alerting"]
                  },
                  {
                    title: "Sécurité & Conformité",
                    description: "Protection des données et respect des normes",
                    icon: (
                      <svg className="w-8 h-8 text-[#1a73e8] dark:text-[#8ab4f8]" viewBox="0 0 24 24" fill="none">
                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ),
                    features: ["Chiffrement", "RGPD", "Audit", "Veille sécurité"]
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
                        description: "Architectures modernes et solutions robustes conçues selon les meilleures pratiques"
                      },
                      {
                        title: "Innovation continue",
                        description: "Veille technologique permanente et adoption des technologies les plus performantes"
                      },
                      {
                        title: "Support réactif",
                        description: "Accompagnement personnalisé et support technique par nos experts"
                      },
                      {
                        title: "Méthodologie éprouvée",
                        description: "Processus itératif et collaboratif pour garantir la réussite de vos projets"
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex gap-6 group">
                        <div className="mt-1">
                          <div className="w-6 h-6 rounded-full bg-[#1a73e8] dark:bg-[#8ab4f8] group-hover:scale-110 transition-transform">
                            <div className="w-full h-full flex items-center justify-center">
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
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a73e8]/10 dark:from-[#8ab4f8]/10 to-transparent rounded-[40px]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/category_24dp_E8EAED_FILL1_wght200_GRAD0_opsz24.svg"
                      alt="Expertise Illustration"
                      width={400}
                      height={400}
                      className="relative z-10 invert-0 dark:invert opacity-75"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Contact Section */}
        <FadeIn delay={300}>
          <section className="py-20 px-4" id="contact">
            <div className="max-w-[1200px] mx-auto">
              <div className="bg-white dark:bg-white/[0.02] rounded-[40px] border border-gray-100 dark:border-white/[0.1] p-8 md:p-16">
                <div className="grid md:grid-cols-2 gap-16">
                  <div>
                    <span className="text-[#1a73e8] dark:text-[#8ab4f8] text-sm font-medium mb-4 block">
                      CONTACT
                    </span>
                    <h2 className="text-[44px] leading-[1.2] font-bold mb-6">
                      Démarrons votre projet
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                      Transformez vos idées en solutions concrètes avec notre expertise
                    </p>
                    
                    <div className="space-y-6 mb-12">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-[#1a73e8]/10 dark:bg-[#8ab4f8]/10">
                          <svg className="w-6 h-6 text-[#1a73e8] dark:text-[#8ab4f8]" viewBox="0 0 24 24" fill="none">
                            <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" 
                              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Email</h3>
                          <a href="mailto:contact@wilmoredynamics.com" 
                             className="text-[#1a73e8] dark:text-[#8ab4f8] hover:opacity-80 transition-opacity">
                            contact@wilmoredynamics.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-[#1a73e8]/10 dark:bg-[#8ab4f8]/10">
                          <svg className="w-6 h-6 text-[#1a73e8] dark:text-[#8ab4f8]" viewBox="0 0 24 24" fill="none">
                            <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" 
                              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Délai de réponse</h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            Sous 24h ouvrées
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1a73e8]/5 dark:from-[#8ab4f8]/5 to-transparent rounded-[28px]" />
                    <div className="relative">
                      <ContactForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Process Section */}
        <FadeIn delay={100}>
          <section className="py-20 px-4 bg-gray-50/50 dark:bg-black/[0.2]">
            <div className="max-w-[1200px] mx-auto">
              <span className="text-[#1a73e8] dark:text-[#8ab4f8] text-sm font-medium mb-4 block text-center">
                NOTRE APPROCHE
              </span>
              <h2 className="text-[44px] leading-[1.2] font-bold mb-6 text-center">
                Comment nous travaillons
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-[540px] mx-auto text-center mb-16">
                Une méthodologie éprouvée pour garantir le succès de vos projets
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  {
                    step: "01",
                    title: "Analyse",
                    description: "Étude approfondie de vos besoins et objectifs",
                    features: ["Audit technique", "Analyse des besoins", "Définition des objectifs"],
                    icon: (
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
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
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
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
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
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
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                        <path d="M12 15V3M12 15L8 11M12 15L16 11M2 17L2.621 19.485C2.72915 19.9177 2.97882 20.3018 3.33033 20.5763C3.68184 20.8508 4.11501 20.9999 4.561 21H19.439C19.885 20.9999 20.3182 20.8508 20.6697 20.5763C21.0212 20.3018 21.2708 19.9177 21.379 19.485L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )
                  }
                ].map((step, index) => (
                  <div key={index} className="group relative">
                    <div className="p-8 rounded-[28px] bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/[0.1] hover:shadow-lg transition-all duration-300 h-full">
                      <div className="mb-6">
                        <div className="w-16 h-16 rounded-full bg-[#1a73e8]/10 dark:bg-[#8ab4f8]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <span className="text-[#1a73e8] dark:text-[#8ab4f8] text-xl font-bold">
                            {step.step}
                          </span>
                        </div>
                        <div className="text-[#1a73e8] dark:text-[#8ab4f8] group-hover:scale-110 transition-transform">
                          {step.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-[#1a73e8] dark:group-hover:text-[#8ab4f8] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        {step.description}
                      </p>
                      <div className="space-y-2">
                        {step.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#1a73e8] dark:bg-[#8ab4f8] opacity-75" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Tech Stack Section */}
        <FadeIn delay={200}>
          <section className="py-20 px-4">
            <div className="max-w-[1200px] mx-auto">
              <div className="text-center mb-16">
                <span className="text-[#1a73e8] dark:text-[#8ab4f8] text-sm font-medium mb-4 block">
                  TECHNOLOGIES
                </span>
                <h2 className="text-[44px] leading-[1.2] font-bold mb-6">
                  Notre stack technologique
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-[540px] mx-auto">
                  Les meilleurs outils pour des solutions performantes et évolutives
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {[
                  {
                    name: "React",
                    logo: "/tech/react.svg",
                    category: "Frontend"
                  },
                  {
                    name: "Next.js",
                    logo: "/tech/nextjs.svg",
                    category: "Framework"
                  },
                  {
                    name: "TypeScript",
                    logo: "/tech/typescript.svg",
                    category: "Language"
                  },
                  {
                    name: "Node.js",
                    logo: "/tech/nodejs.svg",
                    category: "Backend"
                  },
                  {
                    name: "Python",
                    logo: "/tech/python.svg",
                    category: "Backend"
                  },
                  {
                    name: "Kubernetes",
                    logo: "/tech/kubernetes.svg",
                    category: "Infrastructure"
                  },
                  {
                    name: "Docker",
                    logo: "/tech/docker.svg",
                    category: "Infrastructure"
                  },
                  {
                    name: "AWS",
                    logo: "/tech/aws.svg",
                    category: "Cloud"
                  },
                  {
                    name: "MongoDB",
                    logo: "/tech/mongodb.svg",
                    category: "Database",
                    size: 40
                  },
                  {
                    name: "PostgreSQL",
                    logo: "/tech/postgresql.svg",
                    category: "Database"
                  }
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="group relative p-6 bg-white dark:bg-white/[0.02] rounded-[20px] border border-gray-200 dark:border-white/[0.1] hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 mb-4 relative flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Image
                          src={tech.logo}
                          alt={tech.name}
                          width={tech.size || 48}
                          height={tech.size || 48}
                          className="object-contain"
                        />
                      </div>
                      <h3 className="text-base font-medium mb-1 group-hover:text-[#1a73e8] dark:group-hover:text-[#8ab4f8] transition-colors">
                        {tech.name}
                      </h3>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {tech.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Section Open Source & Self-Hosted */}
        <FadeIn delay={200}>
          <section className="py-20 px-4 bg-gray-50/50 dark:bg-black/[0.2]">
            <div className="max-w-[1200px] mx-auto">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <span className="text-[#1a73e8] dark:text-[#8ab4f8] text-sm font-medium mb-4 block">
                    SOLUTIONS OPEN SOURCE
                  </span>
                  <h2 className="text-[44px] leading-[1.2] font-bold mb-6">
                    Reprenez le contrôle <br/>de vos données
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                    Des solutions open source auto-hébergées pour une indépendance totale et une sécurité maximale
                  </p>

                  <div className="space-y-6 mb-8">
                    {[
                      {
                        title: "Souveraineté des données",
                        description: "Gardez le contrôle total sur vos données sensibles"
                      },
                      {
                        title: "Sécurité renforcée",
                        description: "Infrastructure isolée et protocoles de sécurité avancés"
                      },
                      {
                        title: "Personnalisation totale",
                        description: "Solutions adaptées à vos besoins spécifiques"
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#1a73e8]/10 dark:bg-[#8ab4f8]/10 flex items-center justify-center">
                          <svg className="w-6 h-6 text-[#1a73e8] dark:text-[#8ab4f8]" viewBox="0 0 24 24" fill="none">
                            <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="/open-source"
                      className="px-8 py-3 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white transition-colors text-[15px] font-medium inline-flex items-center justify-center"
                    >
                      En savoir plus →
                    </a>
                    <a
                      href="#contact"
                      className="px-8 py-3 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/[0.15] text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-white/[0.1] transition-colors text-[15px] font-medium inline-flex items-center justify-center"
                    >
                      Nous contacter
                    </a>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a73e8]/5 dark:from-[#8ab4f8]/5 to-transparent rounded-[40px]" />
                  <div className="relative">
                    <Image
                      src="/open-source-illustration.svg"
                      alt="Open Source Illustration"
                      width={600}
                      height={600}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Section Tech News */}
        <FadeIn delay={200}>
          <section className="py-20 px-4">
            <div className="max-w-[1200px] mx-auto">
              <div className="text-center mb-16">
                <span className="text-[#1a73e8] dark:text-[#8ab4f8] text-sm font-medium mb-4 block">
                  VEILLE TECHNOLOGIQUE
                </span>
                <h2 className="text-[44px] leading-[1.2] font-bold mb-6">
                  Dernières tendances
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-[540px] mx-auto">
                  Notre analyse des innovations qui façonnent l'avenir du numérique
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "L'impact de l'IA générative sur le développement",
                    date: "Mars 2024",
                    description: "Comment les LLMs transforment les pratiques de développement et l'automatisation",
                    category: "Intelligence Artificielle",
                    image: "/news/ai-dev.webp"
                  },
                  {
                    title: "Web Assembly : le futur du web",
                    date: "Février 2024",
                    description: "Performance native dans le navigateur : cas d'usage et perspectives",
                    category: "Web Technologies",
                    image: "/news/webassembly.webp"
                  },
                  {
                    title: "DevSecOps : sécurité by design",
                    date: "Janvier 2024",
                    description: "Intégrer la sécurité dès la conception de vos applications cloud natives",
                    category: "Sécurité",
                    image: "/news/devsecops.webp"
                  }
                ].map((news, index) => (
                  <div
                    key={index}
                    className="group bg-white dark:bg-white/[0.02] rounded-[28px] border border-gray-200 dark:border-white/[0.1] overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <div className="aspect-[16/9] relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                      <Image
                        src={news.image}
                        alt={news.title}
                        width={600}
                        height={338}
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-sm bg-white/90 dark:bg-black/90 text-[#1a73e8] dark:text-[#8ab4f8] font-medium">
                        {news.category}
                      </span>
                    </div>
                    <div className="p-8">
                      <span className="text-sm text-gray-600 dark:text-gray-400 mb-2 block">
                        {news.date}
                      </span>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-[#1a73e8] dark:group-hover:text-[#8ab4f8] transition-colors">
                        {news.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        {news.description}
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
