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
        {/* Hero Section avec style Google/Apple */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 overflow-hidden">
          {/* Background Pattern simplifié et plus subtil */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute right-[-10%] top-1/3 w-[800px] h-[800px] transform rotate-12">
              <div className="w-full h-full bg-gradient-to-br from-[#1a73e8]/[0.03] via-[#4285f4]/[0.02] to-transparent rounded-[60px] blur-3xl" />
            </div>
            <div className="absolute left-[-10%] bottom-1/3 w-[800px] h-[800px] transform -rotate-12">
              <div className="w-full h-full bg-gradient-to-tr from-[#1a73e8]/[0.03] via-[#4285f4]/[0.02] to-transparent rounded-[60px] blur-3xl" />
            </div>
          </div>

          {/* Content avec style plus épuré */}
          <div className="max-w-[800px] mx-auto text-center relative z-10">
            <h1 className="text-[52px] md:text-[96px] leading-[1.1] font-medium tracking-[-0.02em] mb-8 animate-fade-in">
              Des solutions
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#1a73e8] via-[#4285f4] to-[#8ab4f8] dark:from-[#8ab4f8] dark:via-[#4285f4] dark:to-[#1a73e8] animate-gradient bg-[length:200%_200%]">
                qui transforment
              </span>
              <span className="block text-[40px] md:text-[64px] mt-4 font-normal text-gray-600 dark:text-gray-300">
                votre entreprise
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-[640px] mx-auto mb-16 leading-relaxed">
              Nous concevons des expériences technologiques innovantes pour propulser votre croissance
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="#contact"
                className="group px-8 py-4 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white transition-all duration-300 text-[17px] font-medium hover:scale-[1.03]"
              >
                Démarrer un projet
                <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="#solutions"
                className="group px-8 py-4 rounded-full bg-gray-100 dark:bg-white/[0.08] hover:bg-gray-200 dark:hover:bg-white/[0.12] text-gray-700 dark:text-gray-300 transition-all duration-300 text-[17px] font-medium hover:scale-[1.03]"
              >
                En savoir plus
                <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <FadeIn>
          <section className="py-32 px-4" id="solutions">
            <div className="max-w-[1200px] mx-auto">
              {/* Header */}
              <div className="text-center mb-32">
                <span className="inline-block text-[#1a73e8] dark:text-[#8ab4f8] text-sm font-medium px-4 py-2 rounded-full bg-[#1a73e8]/[0.05] dark:bg-[#8ab4f8]/[0.05] mb-6 animate-fade-in">
                  NOS SOLUTIONS
                </span>
                <h2 className="text-4xl md:text-6xl leading-[1.2] font-medium tracking-[-0.02em] mb-6">
                  Technologies de pointe pour
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#1a73e8] via-[#4285f4] to-[#8ab4f8] dark:from-[#8ab4f8] dark:via-[#4285f4] dark:to-[#1a73e8] animate-gradient bg-[length:200%_200%]">
                    votre transformation digitale
                  </span>
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-[640px] mx-auto leading-relaxed">
                  Des solutions innovantes et évolutives pour répondre aux défis de demain
                </p>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Architecture Cloud Native",
                    description: "Applications modernes et scalables conçues pour le cloud",
                    icon: (
                      <svg className="w-8 h-8 text-[#1a73e8] dark:text-[#8ab4f8]" viewBox="0 0 24 24" fill="none">
                        <path d="M3 15C3 17.2091 4.79086 19 7 19H16C18.7614 19 21 16.7614 21 14C21 11.2386 18.7614 9 16 9C15.9666 9 15.9334 9.00033 15.9002 9.001C15.4373 6.71476 13.4193 5 11 5C8.23858 5 6 7.23858 6 10C6 10.3768 6.04169 10.7439 6.12071 11.097C4.33457 11.4976 3 13.0929 3 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ),
                    features: ["Microservices", "Conteneurisation", "Auto-scaling", "Haute disponibilité"]
                  },
                  {
                    title: "DevOps & Automatisation",
                    description: "Optimisez vos processus de développement et de déploiement",
                    icon: (
                      <svg className="w-8 h-8 text-[#1a73e8] dark:text-[#8ab4f8]" viewBox="0 0 24 24" fill="none">
                        <path d="M8 9L4 12L8 15M16 9L20 12L16 15M14 4L10 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ),
                    features: ["CI/CD", "Infrastructure as Code", "Monitoring", "Alerting"]
                  },
                  {
                    title: "Sécurité & Conformité",
                    description: "Protégez vos données et respectez les normes en vigueur",
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
                    className="group relative p-8 rounded-[32px] bg-white dark:bg-white/[0.02] hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-all duration-500 border border-gray-200 dark:border-white/[0.1] hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      {solution.icon}
                    </div>
                    <h3 className="text-2xl font-medium mb-4 group-hover:text-[#1a73e8] dark:group-hover:text-[#8ab4f8] transition-colors duration-300">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                      {solution.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {solution.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-3 py-1 rounded-full text-sm bg-[#1a73e8]/[0.05] dark:bg-white/[0.05] text-[#1a73e8] dark:text-[#8ab4f8] font-medium"
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
          <section className="py-32 px-4 bg-gradient-to-b from-gray-50/50 via-white/0 to-white/0 dark:from-black/[0.2] dark:via-black/0 dark:to-black/0" id="about">
            <div className="max-w-[1200px] mx-auto">
              <div className="grid md:grid-cols-2 gap-20 items-start">
                <div className="sticky top-32 pt-12">
                  <span className="inline-block text-[#1a73e8] dark:text-[#8ab4f8] text-sm font-medium px-4 py-2 rounded-full bg-[#1a73e8]/[0.05] dark:bg-[#8ab4f8]/[0.05] mb-6 animate-fade-in">
                    POURQUOI NOUS CHOISIR
                  </span>
                  <h2 className="text-4xl md:text-5xl leading-[1.2] font-medium tracking-[-0.02em] mb-6">
                    Une expertise
                    <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#1a73e8] via-[#4285f4] to-[#8ab4f8] dark:from-[#8ab4f8] dark:via-[#4285f4] dark:to-[#1a73e8] animate-gradient bg-[length:200%_200%]">
                      qui fait la différence
                    </span>
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-400 mb-16 leading-relaxed max-w-[540px]">
                    Notre approche combine excellence technique et vision stratégique pour des résultats exceptionnels
                  </p>
                  <div className="space-y-12">
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
                      <div key={index} className="flex gap-6 group">
                        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#1a73e8]/[0.05] dark:bg-[#8ab4f8]/[0.05] flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 group-hover:bg-[#1a73e8]/[0.08] dark:group-hover:bg-[#8ab4f8]/[0.08] transition-all duration-300">
                          <span className="text-2xl transition-transform duration-300 group-hover:-rotate-3">{item.icon}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-medium mb-2 group-hover:text-[#1a73e8] dark:group-hover:text-[#8ab4f8] transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="md:h-[800px] flex items-center justify-center pt-12">
                  <div className="relative w-full max-w-[540px] aspect-square group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1a73e8]/[0.06] dark:from-[#8ab4f8]/[0.06] to-transparent rounded-[40px] transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:translate-y-[-5px]">
                      <Image
                        src="/expertise-illustration.svg"
                        alt="Expertise Illustration"
                        width={540}
                        height={540}
                        className="relative z-10 w-[85%] h-[85%] object-contain transition-transform duration-500 group-hover:scale-105"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Contact Section */}
        <FadeIn delay={300}>
          <section className="py-32 px-4" id="contact">
            <div className="max-w-[1200px] mx-auto">
              <div className="bg-gradient-to-b from-white to-gray-50/50 dark:from-white/[0.02] dark:to-white/[0.01] rounded-[48px] border border-gray-100 dark:border-white/[0.1] p-8 md:p-16 shadow-[0_0_80px_-15px_rgba(26,115,232,0.03)] transition-all duration-500 hover:shadow-[0_0_100px_-15px_rgba(26,115,232,0.05)]">
                <div className="grid md:grid-cols-2 gap-16">
                  <div>
                    <span className="inline-block text-[#1a73e8] dark:text-[#8ab4f8] text-sm font-medium px-4 py-2 rounded-full bg-[#1a73e8]/[0.05] dark:bg-[#8ab4f8]/[0.05] mb-6 animate-fade-in">
                      CONTACT
                    </span>
                    <h2 className="text-4xl md:text-5xl leading-[1.2] font-medium tracking-[-0.02em] mb-6">
                      Démarrons votre
                      <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#1a73e8] via-[#4285f4] to-[#8ab4f8] dark:from-[#8ab4f8] dark:via-[#4285f4] dark:to-[#1a73e8] animate-gradient bg-[length:200%_200%]">
                        transformation digitale
                      </span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-16 leading-relaxed max-w-[540px]">
                      Transformez vos idées en solutions concrètes avec notre expertise
                    </p>
                    
                    <div className="space-y-8 mb-12">
                      <div className="flex items-start gap-4 group">
                        <div className="p-3 rounded-2xl bg-[#1a73e8]/[0.05] dark:bg-[#8ab4f8]/[0.05] group-hover:scale-110 group-hover:bg-[#1a73e8]/[0.08] dark:group-hover:bg-[#8ab4f8]/[0.08] transition-all duration-300">
                          <svg className="w-6 h-6 text-[#1a73e8] dark:text-[#8ab4f8]" viewBox="0 0 24 24" fill="none">
                            <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" 
                              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Email</h3>
                          <a href="mailto:contact@wilmoredynamics.com" 
                             className="text-[#1a73e8] dark:text-[#8ab4f8] hover:opacity-80 transition-opacity">
                            contact@wilmoredynamics.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 group">
                        <div className="p-3 rounded-2xl bg-[#1a73e8]/[0.05] dark:bg-[#8ab4f8]/[0.05] group-hover:scale-110 group-hover:bg-[#1a73e8]/[0.08] dark:group-hover:bg-[#8ab4f8]/[0.08] transition-all duration-300">
                          <svg className="w-6 h-6 text-[#1a73e8] dark:text-[#8ab4f8]" viewBox="0 0 24 24" fill="none">
                            <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" 
                              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Délai de réponse</h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            Sous 24h ouvrées
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1a73e8]/[0.03] dark:from-[#8ab4f8]/[0.03] to-transparent rounded-[32px] transition-all duration-500 group-hover:from-[#1a73e8]/[0.05] dark:group-hover:from-[#8ab4f8]/[0.05]" />
                    <div className="relative p-8 md:p-10">
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
          <section className="py-32 px-4 bg-gradient-to-b from-gray-50/50 via-white/0 to-white/0 dark:from-black/[0.2] dark:via-black/0 dark:to-black/0">
            <div className="max-w-[1200px] mx-auto">
              <div className="text-center mb-32">
                <span className="inline-block text-[#1a73e8] dark:text-[#8ab4f8] text-sm font-medium px-4 py-2 rounded-full bg-[#1a73e8]/[0.05] dark:bg-[#8ab4f8]/[0.05] mb-6 animate-fade-in">
                  NOTRE APPROCHE
                </span>
                <h2 className="text-4xl md:text-5xl leading-[1.2] font-medium tracking-[-0.02em] mb-6">
                  Comment nous
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#1a73e8] via-[#4285f4] to-[#8ab4f8] dark:from-[#8ab4f8] dark:via-[#4285f4] dark:to-[#1a73e8] animate-gradient bg-[length:200%_200%]">
                    transformons vos idées
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-[640px] mx-auto leading-relaxed">
                  Une méthodologie éprouvée pour garantir le succès de vos projets
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  {
                    step: "01",
                    title: "Analyse",
                    description: "Étude approfondie de vos besoins et objectifs",
                    features: ["Audit technique", "Analyse des besoins", "Définition des objectifs"],
                    icon: (
                      <svg className="w-8 h-8 text-[#1a73e8] dark:text-[#8ab4f8]" viewBox="0 0 24 24" fill="none">
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
                      <svg className="w-8 h-8 text-[#1a73e8] dark:text-[#8ab4f8]" viewBox="0 0 24 24" fill="none">
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
                      <svg className="w-8 h-8 text-[#1a73e8] dark:text-[#8ab4f8]" viewBox="0 0 24 24" fill="none">
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
                      <svg className="w-8 h-8 text-[#1a73e8] dark:text-[#8ab4f8]" viewBox="0 0 24 24" fill="none">
                        <path d="M12 15V3M12 15L8 11M12 15L16 11M2 17L2.621 19.485C2.72915 19.9177 2.97882 20.3018 3.33033 20.5763C3.68184 20.8508 4.11501 20.9999 4.561 21H19.439C19.885 20.9999 20.3182 20.8508 20.6697 20.5763C21.0212 20.3018 21.2708 19.9177 21.379 19.485L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )
                  }
                ].map((step, index) => (
                  <div key={index} className="group relative">
                    <div className="p-10 rounded-[32px] bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/[0.1] hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full group-hover:bg-gray-50/50 dark:group-hover:bg-white/[0.03]">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 rounded-2xl bg-[#1a73e8]/[0.05] dark:bg-[#8ab4f8]/[0.05] flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                          <span className="text-[#1a73e8] dark:text-[#8ab4f8] text-xl font-bold">
                            {step.step}
                          </span>
                        </div>
                        <div className="text-[#1a73e8] dark:text-[#8ab4f8] group-hover:scale-110 transition-transform duration-300">
                          {step.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-medium mb-3 group-hover:text-[#1a73e8] dark:group-hover:text-[#8ab4f8] transition-colors">
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

        {/* Stack Section */}
        <FadeIn delay={200}>
          <section className="py-32 px-4 bg-gradient-to-b from-gray-50/50 via-white/0 to-white/0 dark:from-black/[0.2] dark:via-black/0 dark:to-black/0">
            <div className="max-w-[1200px] mx-auto">
              <div className="text-center mb-32">
                <span className="inline-block text-[#1a73e8] dark:text-[#8ab4f8] text-sm font-medium px-4 py-2 rounded-full bg-[#1a73e8]/[0.05] dark:bg-[#8ab4f8]/[0.05] mb-6 animate-fade-in">
                  TECHNOLOGIES
                </span>
                <h2 className="text-4xl md:text-5xl leading-[1.2] font-medium tracking-[-0.02em] mb-6">
                  Notre stack
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#1a73e8] via-[#4285f4] to-[#8ab4f8] dark:from-[#8ab4f8] dark:via-[#4285f4] dark:to-[#1a73e8] animate-gradient bg-[length:200%_200%]">
                    technologique
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-[640px] mx-auto leading-relaxed">
                  Les meilleurs outils pour des solutions performantes et évolutives
                </p>
              </div>

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
                      <div className="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-white/[0.03] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
            </div>
          </section>
        </FadeIn>

        {/* Section Open Source & Self-Hosted */}
        <FadeIn delay={300}>
          <section className="py-32 px-4">
            <div className="max-w-[1200px] mx-auto">
              <div className="grid md:grid-cols-2 gap-20">
                {/* Colonne de gauche */}
                <div>
                  <span className="inline-block text-[#1a73e8] dark:text-[#8ab4f8] text-sm font-medium px-4 py-2 rounded-full bg-[#1a73e8]/[0.05] dark:bg-[#8ab4f8]/[0.05] mb-6 animate-fade-in">
                    OPEN SOURCE
                  </span>
                  <h2 className="text-4xl md:text-5xl leading-[1.2] font-medium tracking-[-0.02em] mb-6">
                    Solutions
                    <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#1a73e8] via-[#4285f4] to-[#8ab4f8] dark:from-[#8ab4f8] dark:via-[#4285f4] dark:to-[#1a73e8] animate-gradient bg-[length:200%_200%]">
                      open source
                    </span>
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed max-w-[540px]">
                    Des solutions transparentes et personnalisables pour garder le contrôle de vos données
                  </p>

                  <div className="space-y-8">
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
                      <div key={index} className="flex gap-6 group">
                        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#1a73e8]/[0.05] dark:bg-[#8ab4f8]/[0.05] flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 group-hover:bg-[#1a73e8]/[0.08] dark:group-hover:bg-[#8ab4f8]/[0.08] transition-all duration-300">
                          <span className="text-2xl transition-transform duration-300 group-hover:-rotate-3">
                            {feature.icon}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-xl font-medium mb-2 group-hover:text-[#1a73e8] dark:group-hover:text-[#8ab4f8] transition-colors">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Ajout du CTA */}
                  <a
                    href="/apps"
                    className="group inline-flex items-center px-8 py-4 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white transition-all duration-300 text-[17px] font-medium hover:scale-[1.03] mt-8"
                  >
                    Explorer nos applications
                    <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>

                {/* Colonne de droite */}
                <div className="relative">
                  <div className="sticky top-32 pt-12">
                    <div className="relative w-full aspect-square group">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#1a73e8]/[0.06] dark:from-[#8ab4f8]/[0.06] to-transparent rounded-[40px] transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:translate-y-[-5px]">
                        <Image
                          src="/open-source-illustration.svg"
                          alt="Open Source Illustration"
                          width={540}
                          height={540}
                          className="relative z-10 w-[85%] h-[85%] object-contain transition-transform duration-500 group-hover:scale-105"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Section Tech News */}
        <FadeIn delay={200}>
          <section className="py-32 px-4 bg-gradient-to-b from-gray-50/50 via-white/0 to-white/0 dark:from-black/[0.2] dark:via-black/0 dark:to-black/0">
            <div className="max-w-[1200px] mx-auto">
              <div className="text-center mb-32">
                <span className="inline-block text-[#1a73e8] dark:text-[#8ab4f8] text-sm font-medium px-4 py-2 rounded-full bg-[#1a73e8]/[0.05] dark:bg-[#8ab4f8]/[0.05] mb-6 animate-fade-in">
                  VEILLE TECHNOLOGIQUE
                </span>
                <h2 className="text-4xl md:text-5xl leading-[1.2] font-medium tracking-[-0.02em] mb-6">
                  Dernières
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#1a73e8] via-[#4285f4] to-[#8ab4f8] dark:from-[#8ab4f8] dark:via-[#4285f4] dark:to-[#1a73e8] animate-gradient bg-[length:200%_200%]">
                    tendances
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-[640px] mx-auto leading-relaxed">
                  Notre analyse des innovations qui façonnent l'avenir du numérique
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "L'essor de l'IA générative",
                    description: "Comment l'IA transforme le développement logiciel et ouvre de nouvelles possibilités",
                    date: "28 Mars 2024",
                    tag: "Intelligence Artificielle",
                    gradient: "from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10"
                  },
                  {
                    title: "Cloud Native en 2024",
                    description: "Les meilleures pratiques et tendances pour des applications cloud natives modernes",
                    date: "21 Mars 2024",
                    tag: "Cloud Computing",
                    gradient: "from-emerald-500/20 to-cyan-500/20 dark:from-emerald-500/10 dark:to-cyan-500/10"
                  },
                  {
                    title: "Sécurité & DevSecOps",
                    description: "Intégrer la sécurité au cœur du cycle de développement logiciel",
                    date: "14 Mars 2024",
                    tag: "Sécurité",
                    gradient: "from-orange-500/20 to-red-500/20 dark:from-orange-500/10 dark:to-red-500/10"
                  }
                ].map((article, index) => (
                  <div key={index} className="group">
                    <div className="rounded-[32px] bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/[0.1] overflow-hidden hover:shadow-xl transition-all duration-500 h-full hover:-translate-y-1">
                      <div className={`h-48 bg-gradient-to-br ${article.gradient} p-8 flex items-center justify-center`}>
                        <div className="w-16 h-16 rounded-2xl bg-white/[0.9] dark:bg-white/[0.05] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          {article.tag === "Intelligence Artificielle" && (
                            <svg className="w-8 h-8 text-[#1a73e8] dark:text-[#8ab4f8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 2a9 9 0 0 1 9 9c0 3.18-2.45 6.92-7.34 11.23a.75.75 0 0 1-.99.07l-.13-.07C7.65 17.92 5.2 14.18 5.2 11a9 9 0 0 1 9-9z"/>
                              <circle cx="12" cy="11" r="3"/>
                            </svg>
                          )}
                          {article.tag === "Cloud Computing" && (
                            <svg className="w-8 h-8 text-[#1a73e8] dark:text-[#8ab4f8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M4 16.242A7 7 0 1 1 15.758 4.242"/>
                              <path d="M20 20H7.5a2.5 2.5 0 1 1 0-5H18a4 4 0 0 0 2-7.5"/>
                            </svg>
                          )}
                          {article.tag === "Sécurité" && (
                            <svg className="w-8 h-8 text-[#1a73e8] dark:text-[#8ab4f8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 2s8 4 8 10v4c0 2-2 4-4 4H8c-2 0-4-2-4-4v-4c0-6 8-10 8-10z"/>
                              <path d="M9 16v-5"/>
                              <path d="M15 16v-5"/>
                              <path d="M12 16v-2"/>
                            </svg>
                          )}
                        </div>
                      </div>
                      <div className="p-8">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="px-3 py-1 rounded-full text-sm bg-[#1a73e8]/[0.05] dark:bg-[#8ab4f8]/[0.05] text-[#1a73e8] dark:text-[#8ab4f8] font-medium">
                            {article.tag}
                          </span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {article.date}
                          </span>
                        </div>
                        <h3 className="text-xl font-medium mb-3 group-hover:text-[#1a73e8] dark:group-hover:text-[#8ab4f8] transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">
                          {article.description}
                        </p>
                        <a 
                          href={`/blog/${article.title.toLowerCase().replace(/ /g, '-')}`}
                          className="inline-flex items-center text-[#1a73e8] dark:text-[#8ab4f8] font-medium group/link"
                        >
                          Lire la suite
                          <span className="inline-block ml-2 transform group-hover/link:translate-x-1 transition-transform">→</span>
                        </a>
                      </div>
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
