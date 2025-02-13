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
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4">
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image
              src="/category_24dp_E8EAED_FILL1_wght200_GRAD0_opsz24.svg"
              alt="Pattern"
              width={400}
              height={400}
              className="absolute right-[-10%] top-1/3 opacity-[0.03] dark:opacity-[0.07] rotate-12 scale-150"
            />
            <Image
              src="/category_24dp_E8EAED_FILL1_wght200_GRAD0_opsz24.svg"
              alt="Pattern"
              width={300}
              height={300}
              className="absolute left-[-5%] bottom-1/4 opacity-[0.02] dark:opacity-[0.05] -rotate-12 scale-125"
            />
          </div>

          {/* Content */}
          <div className="max-w-[640px] mx-auto text-center">
            <div className="flex justify-center mb-12">
              <Image
                src="/category_24dp_E8EAED_FILL1_wght200_GRAD0_opsz24.svg"
                alt="Wilmore Icon"
                width={48}
                height={48}
                className="dark:invert opacity-80"
              />
            </div>
            
            <h1 className="text-[64px] leading-[1.1] font-bold tracking-tight mb-8">
              Solutions
              <span className="block text-[#4285f4] dark:text-[#8ab4f8]">
                intelligentes
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-[480px] mx-auto">
              Nous créons des expériences technologiques exceptionnelles qui transforment les entreprises.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-3 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white transition-colors text-[15px] font-medium"
              >
                Démarrer un projet →
              </a>
              <a
                href="#solutions"
                className="px-8 py-3 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/[0.15] transition-colors text-[15px] font-medium"
              >
                En savoir plus
              </a>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <FadeIn>
          <section className="py-32 px-4" id="solutions">
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
                    description: "Optimisation des processus et prise de décision assistée par l'IA",
                    icon: "/category_24dp_E8EAED_FILL1_wght200_GRAD0_opsz24.svg",
                    color: "hover:border-blue-500/20"
                  },
                  {
                    title: "Cloud Computing",
                    description: "Infrastructure cloud sécurisée et hautement disponible",
                    icon: "/category_24dp_E8EAED_FILL1_wght200_GRAD0_opsz24.svg",
                    color: "hover:border-purple-500/20"
                  },
                  {
                    title: "Développement",
                    description: "Applications performantes et expériences utilisateur uniques",
                    icon: "/category_24dp_E8EAED_FILL1_wght200_GRAD0_opsz24.svg",
                    color: "hover:border-orange-500/20"
                  }
                ].map((solution, index) => (
                  <div
                    key={index}
                    className={`group p-8 rounded-[28px] bg-white dark:bg-white/[0.02] hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-all duration-300 border border-gray-100 dark:border-white/[0.1] ${solution.color}`}
                  >
                    <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
                      <Image
                        src={solution.icon}
                        alt={solution.title}
                        width={32}
                        height={32}
                        className="dark:invert"
                      />
                    </div>
                    <h3 className="text-[22px] font-semibold mb-3 group-hover:text-[#1a73e8] dark:group-hover:text-[#8ab4f8] transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Why Us Section */}
        <FadeIn delay={200}>
          <section className="py-32 px-4 bg-gray-50/50 dark:bg-black/[0.2]" id="about">
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
                            className="dark:invert opacity-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
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
        <section className="py-32 px-4" id="contact">
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
          <section className="py-32 px-4 bg-gray-50/50 dark:bg-black/[0.2]">
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

        {/* Tech Stack Section avec technologies réelles */}
        <FadeIn delay={200}>
          <section className="py-32 px-4">
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
                  {
                    name: "React",
                    icon: (
                      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"/>
                        <path d="M12 21.35a2.06 2.06 0 0 1-1-.2c-.83-.42-1.13-2-1.13-4.12 0-1.44.45-3.12.45-3.12a24.13 24.13 0 0 1-2.36-3.54A7.68 7.68 0 0 1 7 6.2c0-2.65 2.24-3.55 3-3.55s2.35.4 3 3.55a24.13 24.13 0 0 1 .95 4.17s.45 1.68.45 3.12c0 2.16-.3 3.7-1.13 4.12a2.06 2.06 0 0 1-1 .2Z"/>
                      </svg>
                    ),
                    category: "Frontend"
                  },
                  {
                    name: "Next.js",
                    icon: (
                      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.292-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/>
                      </svg>
                    ),
                    category: "Framework"
                  },
                  {
                    name: "Node.js",
                    icon: (
                      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.277-.072-.314.496-.165.588-.201 1.101-.493.056-.037.129-.02.185.017l1.87 1.12c.074.036.166.036.22 0l7.319-4.237c.074-.036.11-.11.11-.202V7.768c0-.091-.036-.165-.11-.201l-7.319-4.219c-.074-.036-.166-.036-.22 0L4.552 7.566c-.073.036-.11.129-.11.201v8.457c0 .073.037.166.11.202l2 1.157c1.082.548 1.762-.095 1.762-.735V8.502c0-.11.091-.221.22-.221h.926c.11 0 .22.092.22.221v8.347c0 1.449-.788 2.294-2.164 2.294-.422 0-.752 0-1.688-.46l-1.925-1.099a1.55 1.55 0 0 1-.771-1.34V7.786c0-.55.293-1.064.771-1.339l7.316-4.237a1.637 1.637 0 0 1 1.544 0l7.317 4.237c.479.274.771.789.771 1.339v8.458c0 .549-.293 1.063-.771 1.34l-7.317 4.236c-.241.11-.516.165-.773.165zm2.256-5.816c-3.21 0-3.87-1.468-3.87-2.714 0-.11.092-.221.22-.221h.943c.11 0 .201.073.201.184.147.971.568 1.449 2.507 1.449 1.541 0 2.2-.35 2.2-1.175 0-.477-.183-.825-2.585-1.063-2.006-.183-3.246-.643-3.246-2.238 0-1.485 1.247-2.366 3.339-2.366 2.347 0 3.503.809 3.649 2.568a.297.297 0 0 1-.056.165c-.037.036-.091.073-.146.073h-.952a.212.212 0 0 1-.202-.164c-.221-1.012-.789-1.34-2.292-1.34-1.689 0-1.891.587-1.891 1.027 0 .531.237.696 2.514.99 2.256.293 3.317.715 3.317 2.294-.02 1.615-1.339 2.531-3.645 2.531z"/>
                      </svg>
                    ),
                    category: "Backend"
                  },
                  {
                    name: "TypeScript",
                    icon: (
                      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
                      </svg>
                    ),
                    category: "Language"
                  },
                  {
                    name: "AWS",
                    icon: (
                      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.383.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z"/>
                      </svg>
                    ),
                    category: "Cloud"
                  },
                  {
                    name: "Docker",
                    icon: (
                      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z"/>
                      </svg>
                    ),
                    category: "DevOps"
                  },
                  {
                    name: "MongoDB",
                    icon: (
                      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.53-.95-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/>
                      </svg>
                    ),
                    category: "Database"
                  },
                  {
                    name: "GraphQL",
                    icon: (
                      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.372 0 0 5.372 0 12 12 12 12 12 12 12 12 12s5.372 5.372 5.372 5.372S12 12 12 12zm0 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25zm0 1.5a8.25 8.25 0 100 16.5 8.25 8.25 0 000-16.5zM7.5 6h9v2.25h-9V6zm0 3.75h9V12h-9V9.75zm0 3.75h9v2.25h-9v-2.25z"/>
                      </svg>
                    ),
                    category: "API"
                  }
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="aspect-square rounded-[28px] bg-white dark:bg-white/[0.02] border border-gray-100 dark:border-white/[0.1] p-6 flex flex-col items-center justify-center group hover:border-[#1a73e8]/20 dark:hover:border-[#8ab4f8]/20 transition-all duration-300"
                  >
                    <div className="text-gray-400 dark:text-gray-500 group-hover:text-[#1a73e8] dark:group-hover:text-[#8ab4f8] transition-colors">
                      {tech.icon}
                    </div>
                    <span className="mt-4 text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-[#1a73e8] dark:group-hover:text-[#8ab4f8] transition-colors">
                      {tech.name}
                    </span>
                    <span className="mt-1 text-xs text-gray-400 dark:text-gray-500">
                      {tech.category}
                    </span>
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
                className="dark:invert"
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
