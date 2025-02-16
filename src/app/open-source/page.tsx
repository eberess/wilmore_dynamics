import Image from "next/image";
import Navbar from "@/components/Navbar";
import FadeIn from '@/components/FadeIn';
import { openSourceMetadata } from '../metadata';

export const metadata = openSourceMetadata;

export default function OpenSource() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-4">
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute right-[-10%] top-1/3 w-[600px] h-[600px] transform rotate-12 motion-safe:animate-float">
              <div className="w-full h-full bg-gradient-to-br from-[#1a73e8]/[0.02] dark:from-[#8ab4f8]/[0.02] to-transparent rounded-[40px]" />
            </div>
          </div>

          <FadeIn>
            <div className="max-w-[800px] mx-auto text-center relative z-10">
              <h1 className="text-[44px] md:text-[80px] leading-[1.1] font-medium mb-8">
                Open Source
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#1a73e8] to-[#8ab4f8] dark:from-[#8ab4f8] dark:to-[#1a73e8]">
                  & Self-Hosted
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-[640px] mx-auto mb-12">
                Des solutions transparentes et maîtrisées pour votre souveraineté numérique
              </p>
            </div>
          </FadeIn>
        </section>

        {/* Avantages Section */}
        <FadeIn delay={200}>
          <section className="py-24 px-4 relative overflow-hidden">
            {/* Fond subtil */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a73e8]/[0.01] to-transparent dark:via-[#8ab4f8]/[0.01] backdrop-blur-3xl" />
            
            <div className="max-w-[1200px] mx-auto relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                {/* Illustration */}
                <div className="order-2 lg:order-1">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1a73e8]/[0.1] to-transparent rounded-[40px] blur-3xl" />
                    <Image
                      src="/open-source/values.svg"
                      alt="Open Source Values"
                      width={600}
                      height={600}
                      className="relative z-10 text-[#1a73e8] dark:text-[#8ab4f8]"
                    />
                  </div>
                </div>

                {/* Contenu */}
                <div className="order-1 lg:order-2">
                  <h2 className="text-3xl md:text-5xl font-medium mb-8">
                    Pourquoi choisir <br/>
                    l'open source ?
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-400 mb-16 leading-relaxed">
                    Optez pour des solutions transparentes et maîtrisées, garantissant votre indépendance technologique.
                  </p>

                  <div className="space-y-12">
                    {[
                      {
                        title: "Transparence totale",
                        description: "Code source accessible et auditable pour une confiance maximale",
                        icon: (
                          <div className="w-12 h-12 rounded-2xl bg-[#1a73e8]/[0.1] dark:bg-[#8ab4f8]/[0.1] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6 text-[#1a73e8] dark:text-[#8ab4f8]" viewBox="0 0 24 24" fill="none">
                              <path d="M12 15V3M12 15L8 11M12 15L16 11M2 17L2.621 19.485C2.72915 19.9177 2.97882 20.3018 3.33033 20.5763C3.68184 20.8508 4.11501 20.9999 4.561 21H19.439C19.885 20.9999 20.3182 20.8508 20.6697 20.5763C21.0212 20.3018 21.2708 19.9177 21.379 19.485L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        )
                      },
                      {
                        title: "Contrôle total",
                        description: "Infrastructure auto-hébergée pour une maîtrise complète de vos données",
                        icon: (
                          <div className="w-12 h-12 rounded-2xl bg-[#1a73e8]/[0.1] dark:bg-[#8ab4f8]/[0.1] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6 text-[#1a73e8] dark:text-[#8ab4f8]" viewBox="0 0 24 24" fill="none">
                              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        )
                      },
                      {
                        title: "Personnalisation",
                        description: "Adaptez les solutions à vos besoins spécifiques",
                        icon: (
                          <div className="w-12 h-12 rounded-2xl bg-[#1a73e8]/[0.1] dark:bg-[#8ab4f8]/[0.1] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6 text-[#1a73e8] dark:text-[#8ab4f8]" viewBox="0 0 24 24" fill="none">
                              <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        )
                      }
                    ].map((feature, index) => (
                      <div key={index} className="flex gap-6">
                        {feature.icon}
                        <div>
                          <h3 className="text-xl font-medium mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Solutions Open Source Section */}
        <FadeIn delay={250}>
          <section className="py-24 px-4 relative overflow-hidden">
            {/* Fond subtil */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a73e8]/[0.01] to-transparent dark:via-[#8ab4f8]/[0.01]" />
            
            <div className="max-w-[1200px] mx-auto relative">
              <div className="text-center mb-24">
                <span className="text-sm text-[#1a73e8] dark:text-[#8ab4f8] font-medium mb-4 block">
                  NOS SOLUTIONS
                </span>
                <h2 className="text-3xl md:text-5xl font-medium mb-6">
                  Des alternatives open source <br/>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1a73e8] to-[#8ab4f8] dark:from-[#8ab4f8] dark:to-[#1a73e8]">
                    performantes et éthiques
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-[640px] mx-auto">
                  Reprenez le contrôle avec des solutions transparentes et maîtrisées
                </p>
                <div className="mt-8">
                  <a 
                    href="/open-source/apps"
                    className="inline-flex items-center text-[#1a73e8] dark:text-[#8ab4f8] hover:underline"
                  >
                    Voir toutes nos applications →
                  </a>
                </div>
              </div>

              <div className="space-y-40">
                {[
                  {
                    title: "Infrastructure Cloud",
                    description: "Plateforme cloud privée basée sur OpenStack et Kubernetes",
                    features: [
                      "Orchestration de conteneurs",
                      "Load balancing automatique",
                      "Stockage distribué",
                      "Haute disponibilité"
                    ],
                    techStack: ["Kubernetes", "OpenStack", "Ceph", "Prometheus"],
                    image: "/open-source/cloud-platform.svg",
                    imagePosition: "right"
                  },
                  {
                    title: "Collaboration",
                    description: "Suite collaborative complète et sécurisée",
                    features: [
                      "Messagerie chiffrée",
                      "Partage de fichiers",
                      "Visioconférence",
                      "Calendrier partagé"
                    ],
                    techStack: ["Matrix", "Nextcloud", "Jitsi", "OnlyOffice"],
                    image: "/open-source/collaboration.svg",
                    imagePosition: "left"
                  }
                ].map((solution, index) => (
                  <FadeIn key={index} delay={index * 100}>
                    <div className="group">
                      <div className={`flex flex-col ${solution.imagePosition === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-20`}>
                        {/* Contenu */}
                        <div className="flex-1 max-w-xl">
                          <h3 className="text-3xl font-medium mb-6">
                            {solution.title}
                          </h3>
                          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
                            {solution.description}
                          </p>
                          
                          <div className="space-y-8">
                            <div>
                              <h4 className="text-sm text-[#1a73e8] dark:text-[#8ab4f8] font-medium mb-4">
                                FONCTIONNALITÉS
                              </h4>
                              <div className="grid grid-cols-2 gap-4">
                                {solution.features.map((feature, featureIndex) => (
                                  <div key={featureIndex} className="flex items-center gap-3 group/feature">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#1a73e8] dark:bg-[#8ab4f8] group-hover/feature:scale-150 transition-transform duration-300" />
                                    <span className="text-gray-600 dark:text-gray-400 group-hover/feature:text-[#1a73e8] dark:group-hover/feature:text-[#8ab4f8] transition-colors">
                                      {feature}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="text-sm text-[#1a73e8] dark:text-[#8ab4f8] font-medium mb-4">
                                TECHNOLOGIES
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {solution.techStack.map((tech, techIndex) => (
                                  <span
                                    key={techIndex}
                                    className="px-4 py-2 rounded-full text-sm bg-[#1a73e8]/[0.08] dark:bg-white/[0.05] text-[#1a73e8] dark:text-[#8ab4f8] font-medium transition-all duration-300 hover:bg-[#1a73e8]/[0.12] dark:hover:bg-white/[0.08]"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Image */}
                        <div className="flex-1">
                          <div className="rounded-[40px] overflow-hidden relative after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/5 after:to-transparent after:opacity-0 group-hover:after:opacity-100 after:transition-opacity">
                            <Image
                              src={solution.image}
                              alt={solution.title}
                              width={600}
                              height={600}
                              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* CTA Section */}
        <FadeIn delay={300}>
          <section className="py-24 px-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a73e8]/[0.02] to-transparent dark:via-[#8ab4f8]/[0.02]" />
            
            <div className="max-w-[800px] mx-auto text-center relative">
              <h2 className="text-3xl md:text-5xl font-medium mb-8">
                Reprenez le contrôle de vos données
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
                Découvrez comment nos solutions open source peuvent sécuriser votre infrastructure
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center px-12 py-4 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white text-lg font-medium transition-all duration-300 hover:scale-105"
              >
                Nous contacter
                <svg className="ml-2 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </section>
        </FadeIn>
      </main>
    </>
  );
} 