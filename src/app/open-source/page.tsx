import Image from "next/image";
import Navbar from "@/components/Navbar";
import FadeIn from '@/components/FadeIn';
import { openSourceMetadata } from '../metadata';

export const metadata = openSourceMetadata;

export default function OpenSource() {
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
                  SOLUTIONS OPEN SOURCE
                </span>
                <h1 className="text-[44px] md:text-[64px] leading-[1.1] font-bold mb-8">
                  Reprenez le contrôle de
                  <span className="block text-[#4285f4] dark:text-[#8ab4f8]">
                    vos données
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-[640px] mx-auto">
                  Des solutions open source auto-hébergées pour une indépendance totale et une sécurité maximale
                </p>
              </div>

              {/* Solutions Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Nextcloud",
                    logo: "/apps/nextcloud.webp",
                    description: "Stockage et collaboration sécurisés",
                    features: ["Partage de fichiers", "Calendrier", "Contacts", "Visioconférence"],
                    color: "from-[#0082C9]/5"
                  },
                  {
                    name: "Matrix",
                    logo: "/apps/synapse.webp",
                    description: "Communication chiffrée en temps réel",
                    features: ["Messagerie", "Appels vidéo", "Chiffrement E2E", "Fédération"],
                    color: "from-[#0DBD8B]/5"
                  },
                  {
                    name: "Mattermost",
                    logo: "/apps/mattermost.webp",
                    description: "Collaboration d'équipe sécurisée",
                    features: ["Chat", "Canaux", "Intégrations", "Recherche"],
                    color: "from-[#0058CC]/5"
                  }
                ].map((solution, index) => (
                  <div
                    key={index}
                    className="group p-8 rounded-[28px] bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/[0.1] hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative w-20 h-20 mb-6">
                      <Image
                        src={solution.logo}
                        alt={solution.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">
                      {solution.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {solution.description}
                    </p>
                    <ul className="space-y-3">
                      {solution.features.map((feature, featureIndex) => (
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

        {/* Avantages Section */}
        <FadeIn>
          <section className="py-20 px-4 bg-gray-50/50 dark:bg-black/[0.2]">
            <div className="max-w-[1200px] mx-auto">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <span className="text-[#1a73e8] dark:text-[#8ab4f8] text-sm font-medium mb-4 block">
                    POURQUOI L'OPEN SOURCE
                  </span>
                  <h2 className="text-[44px] leading-[1.2] font-bold mb-6">
                    Les avantages de l'open source
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
                    Découvrez pourquoi de plus en plus d'entreprises choisissent les solutions open source
                  </p>
                  <div className="space-y-8">
                    {[
                      {
                        title: "Transparence totale",
                        description: "Code source accessible et auditable pour une confiance maximale"
                      },
                      {
                        title: "Indépendance",
                        description: "Aucun verrouillage propriétaire, vous gardez le contrôle"
                      },
                      {
                        title: "Sécurité renforcée",
                        description: "Revue de code communautaire et corrections rapides"
                      },
                      {
                        title: "Personnalisation",
                        description: "Adaptez les solutions à vos besoins spécifiques"
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex gap-6 group">
                        <div className="mt-1">
                          <div className="w-6 h-6 rounded-full bg-[#1a73e8] group-hover:scale-110 transition-transform">
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
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a73e8]/10 to-transparent dark:from-[#8ab4f8]/10 rounded-[40px]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/open-source-illustration.svg" // À créer
                      alt="Open Source Illustration"
                      width={400}
                      height={400}
                      className="relative z-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* CTA Section */}
        <FadeIn>
          <section className="py-20 px-4">
            <div className="max-w-[800px] mx-auto text-center">
              <h2 className="text-[44px] leading-[1.2] font-bold mb-6">
                Prêt à reprendre le contrôle ?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
                Contactez-nous pour découvrir comment nos solutions open source peuvent répondre à vos besoins
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-3 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white transition-colors text-[15px] font-medium"
                >
                  Démarrer un projet →
                </a>
                <a
                  href="#"
                  className="px-8 py-3 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/[0.15] text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-white/[0.1] transition-colors text-[15px] font-medium"
                >
                  Voir la documentation
                </a>
              </div>
            </div>
          </section>
        </FadeIn>
      </main>
    </>
  );
} 