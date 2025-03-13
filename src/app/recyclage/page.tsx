import type { Metadata } from 'next';
import Section from '@/components/Section';
import FadeIn from '@/components/FadeIn';
import Image from 'next/image';
import ContactForm from './components/ContactForm';
import FAQ from './components/FAQ';

export const metadata: Metadata = {
  title: 'Recyclage & Récupération de Matériel Informatique | Wilmore Dynamics',
  description: 'Service professionnel de recyclage et récupération de matériel informatique. Collecte gratuite, effacement sécurisé des données et recyclage responsable.',
  openGraph: {
    title: 'Recyclage & Récupération de Matériel Informatique | Wilmore Dynamics',
    description: 'Service professionnel de recyclage et récupération de matériel informatique. Collecte gratuite, effacement sécurisé des données et recyclage responsable.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://wilmoredynamics.com/recyclage'
  },
  other: {
    'script:ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Service de Recyclage Informatique',
      'provider': {
        '@type': 'Organization',
        'name': 'Wilmore Dynamics'
      },
      'description': 'Service professionnel de recyclage et récupération de matériel informatique',
      'serviceType': 'Recyclage Informatique',
      'areaServed': 'FR',
      'offers': {
        '@type': 'Offer',
        'availability': 'https://schema.org/InStock',
        'priceSpecification': {
          '@type': 'PriceSpecification',
          'price': '0',
          'priceCurrency': 'EUR'
        }
      }
    })
  }
};

export default function RecyclagePage() {
  return (
    <main className="min-h-screen overflow-x-hidden" role="main">
      <Section
        id="recyclage"
        badge="RECYCLAGE"
        title={
          <div className="text-center max-w-[800px] mx-auto mb-16">
            <div className="mb-8 flex justify-center" aria-hidden="true">
              <div className="w-24 h-24 relative">
                <Image
                  src="/services/recycling.svg"
                  alt=""
                  fill
                  priority
                  className="object-contain [filter:invert(45%)_sepia(90%)_saturate(1000%)_hue-rotate(190deg)_brightness(100%)_contrast(95%)]"
                />
              </div>
            </div>
            <h1 className="text-[44px] sm:text-[64px] leading-[1.1] font-medium tracking-[-0.02em]">
              Recyclage
              <span className="block bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mt-2">
                responsable
              </span>
            </h1>
          </div>
        }
        className="py-24"
      >
        <FadeIn>
          <div className="max-w-[800px] mx-auto prose dark:prose-invert">
            <h2>Notre engagement pour l&apos;environnement</h2>
            <p>
              Le recyclage du matériel informatique est un enjeu crucial pour notre avenir. 
              Chez Wilmore Dynamics, nous nous engageons à offrir des solutions responsables 
              pour la gestion de vos équipements en fin de vie.
            </p>

            <h2>Nos services de recyclage</h2>
            <ul>
              <li>Collecte gratuite sur site de votre matériel</li>
              <li>Diagnostic complet et évaluation des possibilités</li>
              <li>Reconditionnement des équipements réutilisables</li>
              <li>Recyclage écologique des composants</li>
              <li>Effacement sécurisé des données</li>
              <li>Traçabilité complète du processus</li>
            </ul>

            <h2>Processus de recyclage</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose mb-12">
              {[
                {
                  step: 1,
                  title: "Contact",
                  description: "Décrivez votre matériel et vos besoins"
                },
                {
                  step: 2,
                  title: "Collecte",
                  description: "Nous organisons l&apos;enlèvement"
                },
                {
                  step: 3,
                  title: "Traitement",
                  description: "Recyclage ou reconditionnement"
                }
              ].map((card) => (
                <div 
                  key={card.step}
                  className="text-center p-6 rounded-lg bg-white/[0.05] border border-white/[0.1] 
                           transition-all duration-300 hover:scale-105 hover:bg-white/[0.1] 
                           hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full 
                                w-12 h-12 flex items-center justify-center mx-auto mb-4 
                                transition-transform duration-300 group-hover:scale-110">
                    {card.step}
                  </div>
                  <h3 className="font-semibold mb-2">{card.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

            <h2>Impact environnemental</h2>
            <p className="lead">
              Chaque année, des millions de tonnes de déchets électroniques sont générés dans le monde. 
              Notre action contribue à réduire cet impact environnemental.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose mb-12">
              <div className="p-6 rounded-lg bg-white/[0.05] border border-white/[0.1] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full -mr-8 -mt-8"></div>
                <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">53.6M</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Tonnes de déchets électroniques produits mondialement en 2019
                </p>
                <div className="mt-4 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full"></div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-white/[0.05] border border-white/[0.1] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 rounded-full -mr-8 -mt-8"></div>
                <h3 className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">17.4%</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Taux de recyclage documenté des déchets électroniques en 2019
                </p>
                <div className="mt-4 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full w-1/4 bg-gradient-to-r from-green-600 to-green-500 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose mb-12">
              <div className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  70%
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  des métaux lourds dans les décharges proviennent des déchets électroniques
                </p>
              </div>
              <div className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  95%
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  des composants d&apos;un ordinateur sont recyclables ou réutilisables
                </p>
              </div>
              <div className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  20kg
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  de CO₂ évités en moyenne par appareil reconditionné
                </p>
              </div>
            </div>

            <h2>Contactez-nous</h2>
            <ContactForm />

            <h2 className="mt-16">Questions fréquentes</h2>
            <FAQ />

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-12">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        </FadeIn>
      </Section>
    </main>
  );
} 