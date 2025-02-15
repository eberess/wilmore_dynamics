import Image from "next/image";
import Navbar from "@/components/Navbar";
import FadeIn from '@/components/FadeIn';
import { servicesMetadata } from '../metadata';

export const metadata = servicesMetadata;

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <FadeIn>
          <section className="py-20 px-4">
            <div className="max-w-[1200px] mx-auto">
              <div className="text-center mb-16">
                <span className="text-[#1a73e8] dark:text-[#8ab4f8] text-sm font-medium mb-4 block">
                  NOS SERVICES
                </span>
                <h1 className="text-[44px] md:text-[64px] leading-[1.1] font-bold mb-8">
                  Expertise technique
                  <span className="block text-[#4285f4] dark:text-[#8ab4f8]">
                    sur mesure
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-[640px] mx-auto">
                  Des solutions adaptées à vos besoins, de la conception au déploiement
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Développement",
                    icon: (
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                        <path d="M8 9L4 12L8 15M16 9L20 12L16 15M14 4L10 20" 
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ),
                    description: "Applications web et mobiles sur mesure",
                    features: [
                      "Frontend React/Next.js",
                      "Backend Node.js/Python",
                      "Applications mobiles React Native",
                      "APIs RESTful & GraphQL"
                    ]
                  },
                  {
                    title: "Cloud & DevOps",
                    icon: (
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                        <path d="M3 15C3 17.2091 4.79086 19 7 19H16C18.7614 19 21 16.7614 21 14C21 11.2386 18.7614 9 16 9C15.9666 9 15.9334 9.00033 15.9002 9.001C15.4373 6.71476 13.4193 5 11 5C8.23858 5 6 7.23858 6 10C6 10.3768 6.04169 10.7439 6.12071 11.097C4.33457 11.4976 3 13.0929 3 15Z" 
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ),
                    description: "Infrastructure cloud moderne et automatisée",
                    features: [
                      "Architecture cloud native",
                      "CI/CD pipelines",
                      "Containerisation Docker",
                      "Orchestration Kubernetes"
                    ]
                  },
                  {
                    title: "Conseil & Audit",
                    icon: (
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ),
                    description: "Expertise technique et stratégique",
                    features: [
                      "Architecture logicielle",
                      "Audit de sécurité",
                      "Optimisation des performances",
                      "Formation des équipes"
                    ]
                  }
                ].map((service, index) => (
                  <div
                    key={index}
                    className="group p-8 rounded-[28px] bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/[0.1] hover:shadow-lg transition-all duration-300"
                  >
                    <div className="mb-6 text-[#1a73e8] dark:text-[#8ab4f8] transition-transform duration-300 group-hover:scale-110">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-[#1a73e8] dark:text-[#8ab4f8] flex-shrink-0" viewBox="0 0 24 24" fill="none">
                            <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span className="text-gray-700 dark:text-gray-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Méthodologie Section */}
        <FadeIn>
          <section className="py-20 px-4 bg-gray-50/50 dark:bg-black/[0.2]">
            <div className="max-w-[1200px] mx-auto">
              <div className="text-center mb-16">
                <span className="text-[#1a73e8] dark:text-[#8ab4f8] text-sm font-medium mb-4 block">
                  NOTRE APPROCHE
                </span>
                <h2 className="text-[44px] leading-[1.2] font-bold mb-6">
                  Méthodologie agile
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-[640px] mx-auto">
                  Une approche itérative et collaborative pour des résultats optimaux
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  {
                    step: "01",
                    title: "Discovery",
                    description: "Analyse approfondie de vos besoins et objectifs"
                  },
                  {
                    step: "02",
                    title: "Design",
                    description: "Conception de solutions techniques adaptées"
                  },
                  {
                    step: "03",
                    title: "Développement",
                    description: "Implémentation itérative et tests continus"
                  },
                  {
                    step: "04",
                    title: "Déploiement",
                    description: "Mise en production et support continu"
                  }
                ].map((step, index) => (
                  <div key={index} className="relative">
                    <div className="p-8 rounded-[28px] bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/[0.1] group hover:shadow-lg transition-all duration-300">
                      <span className="text-[#1a73e8] dark:text-[#8ab4f8] text-sm font-medium mb-4 block">
                        {step.step}
                      </span>
                      <h3 className="text-2xl font-semibold mb-3 group-hover:text-[#1a73e8] dark:group-hover:text-[#8ab4f8] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {step.description}
                      </p>
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                        <svg className="w-8 h-8 text-[#1a73e8]/20 dark:text-[#8ab4f8]/20" viewBox="0 0 24 24" fill="none">
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

        {/* Technologies Section */}
        <FadeIn>
          <section className="py-20 px-4">
            <div className="max-w-[1200px] mx-auto">
              <div className="text-center mb-16">
                <span className="text-[#1a73e8] dark:text-[#8ab4f8] text-sm font-medium mb-4 block">
                  TECHNOLOGIES
                </span>
                <h2 className="text-[44px] leading-[1.2] font-bold mb-6">
                  Stack technique
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-[640px] mx-auto">
                  Les meilleures technologies pour des solutions performantes
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { name: "React", logo: "/tech/react.svg" },
                  { name: "Next.js", logo: "/tech/nextjs.svg" },
                  { name: "Node.js", logo: "/tech/nodejs.svg" },
                  { name: "Python", logo: "/tech/python.svg" },
                  { name: "AWS", logo: "/tech/aws.svg" },
                  { name: "Docker", logo: "/tech/docker.svg" },
                  { name: "Kubernetes", logo: "/tech/kubernetes.svg" },
                  { name: "GraphQL", logo: "/tech/graphql.svg" }
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="aspect-square rounded-[28px] bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/[0.1] p-6 flex flex-col items-center justify-center group hover:border-[#1a73e8] dark:hover:border-[#8ab4f8] transition-all duration-300"
                  >
                    <div className="relative w-16 h-16 mb-4 transition-transform duration-300 group-hover:scale-110">
                      <Image
                        src={tech.logo}
                        alt={tech.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* CTA Section */}
        <FadeIn>
          <section className="py-20 px-4">
            <div className="max-w-[800px] mx-auto text-center">
              <h2 className="text-[44px] leading-[1.2] font-bold mb-6">
                Démarrons votre projet
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
                Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-3 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white transition-colors text-[15px] font-medium"
                >
                  Nous contacter →
                </a>
                <a
                  href="#"
                  className="px-8 py-3 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/[0.15] text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-white/[0.1] transition-colors text-[15px] font-medium"
                >
                  Voir nos réalisations
                </a>
              </div>
            </div>
          </section>
        </FadeIn>
      </main>
    </>
  );
} 