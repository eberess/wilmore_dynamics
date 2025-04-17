import type { Metadata } from 'next';
import Section from '@/components/Section';
import FadeIn from '@/components/FadeIn';
import Image from 'next/image';
import ContactForm from './components/ContactForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Solutions de Sécurité Numérique pour Communes et EPCI | Wilmore Dynamics',
  description: 'Solutions de cybersécurité adaptées aux communes et EPCI de moins de 3500 habitants. Sécurisation des données, conformité RGPD, accompagnement personnalisé et solutions gratuites.',
  openGraph: {
    title: 'Solutions de Sécurité Numérique pour Communes et EPCI | Wilmore Dynamics',
    description: 'Solutions de cybersécurité adaptées aux communes et EPCI de moins de 3500 habitants. Sécurisation des données, conformité RGPD, accompagnement personnalisé et solutions gratuites.',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://wilmoredynamics.com/communes',
    images: [
      {
        url: 'https://wilmoredynamics.com/services/communes.svg',
        width: 800,
        height: 600,
        alt: 'Solutions pour les communes et EPCI'
      }
    ]
  },
  alternates: {
    canonical: 'https://wilmoredynamics.com/communes'
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1
  },
  keywords: 'communes, EPCI, cybersécurité, sécurité numérique, RGPD, ANSSI, collectivités territoriales, solutions gratuites'
};

export default function CommunesPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Solutions de Sécurité Numérique pour Communes et EPCI",
    "provider": {
      "@type": "Organization",
      "name": "Wilmore Dynamics",
      "url": "https://wilmoredynamics.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Paris",
        "postalCode": "75011",
        "streetAddress": "95 Bis Boulevard Richard Lenoir",
        "addressCountry": "FR"
      }
    },
    "description": "Solutions de cybersécurité adaptées aux communes et EPCI de moins de 3500 habitants. Sécurisation des données, conformité RGPD, accompagnement personnalisé et solutions gratuites.",
    "areaServed": {
      "@type": "Country",
      "name": "France"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Communes et EPCI de moins de 3500 habitants"
    },
    "offers": {
      "@type": "Offer",
      "description": "Services de base gratuits pour les collectivités éligibles",
      "eligibleCustomerType": "Communes < 3500 habitants, EPCI < 15000 habitants"
    },
    "serviceType": "Cybersécurité et transformation numérique",
    "termsOfService": "https://wilmoredynamics.com/politique-confidentialite"
  };

  return (
    <>
      <JsonLd data={schemaData} />
      <main className="min-h-screen overflow-x-hidden" role="main">
        <Section
          id="communes"
          badge="COMMUNES"
          title={
            <div className="text-center max-w-[800px] mx-auto mb-16">
              <div className="mb-8 flex justify-center">
                <div className="w-24 h-24 relative">
                  <Image
                    src="/services/communes.svg"
                    alt="Icône représentant les services pour les communes"
                    fill
                    priority
                    sizes="(max-width: 768px) 96px, 96px"
                    className="object-contain [filter:invert(45%)_sepia(90%)_saturate(1000%)_hue-rotate(190deg)_brightness(100%)_contrast(95%)]"
                  />
                </div>
              </div>
              <h1 className="text-[44px] sm:text-[64px] leading-[1.1] font-medium tracking-[-0.02em]">
                Solutions pour les
                <span className="block bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mt-2">
                  Communes
                </span>
              </h1>
            </div>
          }
          className="py-24"
        >
          <FadeIn>
            <div className="max-w-[800px] mx-auto prose dark:prose-invert">
              <section aria-labelledby="engagement-title">
                <h2 id="engagement-title">Notre engagement envers les territoires</h2>
                <p>
                  Les communes et collectivités locales font face à des défis majeurs : transformation numérique, 
                  développement durable, participation citoyenne. Wilmore Dynamics s&apos;engage à vous accompagner 
                  dans ces transitions avec des solutions adaptées à vos besoins spécifiques.
                </p>
              </section>

              <section aria-labelledby="expertise-title">
                <h2 id="expertise-title">Nos domaines d&apos;expertise</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12" role="list">
                  {[
                    {
                      title: "Transformation Numérique",
                      description: "Modernisation des services publics, dématérialisation des procédures et amélioration de l'expérience citoyenne"
                    },
                    {
                      title: "Gestion des Services Publics",
                      description: "Optimisation des processus administratifs et amélioration de l'efficacité des services municipaux"
                    },
                    {
                      title: "Développement Durable",
                      description: "Accompagnement dans la mise en place de projets écologiques et la transition énergétique"
                    },
                    {
                      title: "Participation Citoyenne",
                      description: "Solutions pour favoriser l'engagement citoyen et la démocratie participative"
                    }
                  ].map((card, index) => (
                    <div 
                      key={card.title}
                      className="text-center p-6 rounded-lg bg-white/[0.05] border border-white/[0.1] 
                               transition-all duration-300 hover:scale-105 hover:bg-white/[0.1] 
                               hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10"
                      role="listitem"
                      aria-labelledby={`expertise-${index}`}
                    >
                      <h3 id={`expertise-${index}`} className="font-semibold mb-2">{card.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {card.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section aria-labelledby="stats-title">
                <h2 id="stats-title" className="sr-only">Statistiques clés</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose mb-12">
                  <div 
                    className="p-4 text-center" 
                    role="region" 
                    aria-label="Statistique sur les messageries"
                  >
                    <div 
                      className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2"
                      aria-label="75 pourcent"
                    >
                      75%
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      des messageries utilisent des domaines génériques
                    </p>
                  </div>
                  <div 
                    className="p-4 text-center" 
                    role="region" 
                    aria-label="Statistique sur les compromissions"
                  >
                    <div 
                      className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2"
                      aria-label="50 pourcent"
                    >
                      50%
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      des messageries ont été compromises
                    </p>
                  </div>
                  <div 
                    className="p-4 text-center" 
                    role="region" 
                    aria-label="Statistique sur les incidents"
                  >
                    <div 
                      className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2"
                      aria-label="18 incidents"
                    >
                      18
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      incidents cyber par mois en moyenne
                    </p>
                  </div>
                </div>
              </section>

              <section aria-labelledby="faq-title">
                <h2 id="faq-title">Questions fréquentes</h2>
                <div className="space-y-6 not-prose mb-12" role="list">
                  {[
                    {
                      question: "Quelles sont les conditions d'éligibilité ?",
                      answer: "La Suite territoriale est accessible aux communes de moins de 3 500 habitants et aux EPCI de moins de 15 000 habitants. Pour les collectivités plus importantes, nous proposons des solutions adaptées à votre échelle."
                    },
                    {
                      question: "Comment se déroule la mise en place ?",
                      answer: "Notre approche se déroule en plusieurs phases : diagnostic initial, proposition de solutions, déploiement progressif et accompagnement continu. Nous assurons une transition en douceur pour ne pas perturber vos services."
                    },
                    {
                      question: "Quels sont les coûts ?",
                      answer: "Les services de base de la Suite territoriale sont gratuits pour les collectivités éligibles. Pour les solutions personnalisées, nous établissons un devis adapté à vos besoins spécifiques."
                    },
                    {
                      question: "Comment garantir la sécurité des données ?",
                      answer: "Nous appliquons les normes de sécurité les plus strictes (ANSSI, RGPD) et utilisons des infrastructures souveraines. Vos données sont stockées en France et protégées par des mesures de sécurité renforcées."
                    }
                  ].map((faq, index) => (
                    <div 
                      key={index}
                      className="p-6 rounded-lg bg-white/[0.05] border border-white/[0.1]"
                      role="listitem"
                    >
                      <h3 
                        id={`faq-question-${index}`} 
                        className="font-semibold mb-2"
                      >
                        {faq.question}
                      </h3>
                      <p 
                        className="text-gray-600 dark:text-gray-400"
                        aria-labelledby={`faq-question-${index}`}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section aria-labelledby="contact-title">
                <h2 id="contact-title">Contactez-nous</h2>
                <p className="mb-8">
                  Prêt à transformer votre commune ? Remplissez le formulaire ci-dessous pour discuter 
                  de vos projets et découvrir nos solutions adaptées.
                </p>
                <div role="form" aria-label="Formulaire de contact">
                  <ContactForm />
                </div>
              </section>

              <footer className="mt-12" role="contentinfo">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </footer>
            </div>
          </FadeIn>
        </Section>
      </main>
    </>
  );
} 