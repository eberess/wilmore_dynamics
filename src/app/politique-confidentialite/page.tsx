import Navbar from "@/components/Navbar";
import Section from '@/components/Section';
import type { Metadata } from 'next';
import FadeIn from '@/components/FadeIn';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Politique de confidentialité - Protection des données des collectivités | Wilmore Dynamics',
  description: 'Découvrez comment Wilmore Dynamics protège les données de votre collectivité. RGPD, sécurité renforcée, hébergement en France, et conformité aux normes de l\'ANSSI.',
  openGraph: {
    title: 'Politique de confidentialité - Protection des données des collectivités | Wilmore Dynamics',
    description: 'Découvrez comment Wilmore Dynamics protège les données de votre collectivité. RGPD, sécurité renforcée, hébergement en France, et conformité aux normes de l\'ANSSI.',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://wilmoredynamics.com/politique-confidentialite',
  },
  alternates: {
    canonical: 'https://wilmoredynamics.com/politique-confidentialite'
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1
  }
};

export default function PrivacyPolicy() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Politique de confidentialité - Protection des données des collectivités",
    "description": "Découvrez comment Wilmore Dynamics protège les données de votre collectivité. RGPD, sécurité renforcée, hébergement en France, et conformité aux normes de l'ANSSI.",
    "publisher": {
      "@type": "Organization",
      "name": "Wilmore Dynamics",
      "url": "https://wilmoredynamics.com"
    },
    "inLanguage": "fr-FR",
    "dateModified": new Date().toISOString(),
    "mainEntity": {
      "@type": "WebContent",
      "about": {
        "@type": "Thing",
        "name": "Protection des données personnelles",
        "description": "Politique de confidentialité et mesures de protection des données pour les collectivités territoriales"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Communes et EPCI"
      }
    }
  };

  return (
    <>
      <JsonLd data={schemaData} />
      <Navbar />
      <main className="min-h-screen overflow-x-hidden">
        <Section
          id="privacy"
          badge="CONFIDENTIALITÉ"
          title={
            <div className="text-center max-w-[800px] mx-auto mb-16">
              <h1 className="text-[44px] sm:text-[64px] leading-[1.1] font-medium tracking-[-0.02em]">
                Politique de
                <span className="block bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent py-2 mt-2">
                  confidentialité
                </span>
              </h1>
            </div>
          }
          className="py-24"
        >
          <FadeIn>
            <div className="max-w-[800px] mx-auto prose dark:prose-invert">
              <h2>Notre engagement</h2>
              <p>
                Chez Wilmore Dynamics, la protection de vos données personnelles est une priorité. 
                Cette politique détaille comment nous collectons, utilisons et protégeons vos informations, 
                particulièrement dans le contexte des collectivités territoriales.
              </p>

              <h2>Données collectées</h2>
              <p>
                Dans le cadre de nos services aux collectivités, nous collectons :
              </p>
              <ul>
                <li>Informations de contact professionnelles (nom, prénom, fonction)</li>
                <li>Coordonnées de la collectivité</li>
                <li>Informations sur la taille et le type de collectivité</li>
                <li>Contenus des échanges et demandes</li>
              </ul>

              <h2>Utilisation des données</h2>
              <p>
                Vos données sont utilisées exclusivement pour :
              </p>
              <ul>
                <li>Répondre à vos demandes d&apos;information</li>
                <li>Vous fournir nos services de sécurisation numérique</li>
                <li>Personnaliser nos solutions selon vos besoins</li>
                <li>Assurer le suivi de notre relation</li>
              </ul>

              <h2>Protection des données</h2>
              <p>
                Nous mettons en œuvre des mesures de sécurité renforcées :
              </p>
              <ul>
                <li>Hébergement sécurisé en France</li>
                <li>Chiffrement des données sensibles</li>
                <li>Accès restreint aux personnes habilitées</li>
                <li>Mise à jour régulière de nos systèmes de sécurité</li>
              </ul>

              <h2>Conservation des données</h2>
              <p>
                Les données sont conservées pendant la durée nécessaire aux finalités pour lesquelles 
                elles sont collectées, dans le respect des obligations légales et réglementaires.
              </p>

              <h2>Vos droits</h2>
              <p>
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul>
                <li>Droit d&apos;accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l&apos;effacement</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité des données</li>
                <li>Droit d&apos;opposition</li>
              </ul>

              <h2>Exercer vos droits</h2>
              <p>
                Pour exercer vos droits ou pour toute question sur le traitement de vos données, 
                vous pouvez nous contacter à : contact@wilmoredynamics.com
              </p>

              <h2>Cookies et traceurs</h2>
              <p>
                Notre site utilise uniquement des cookies techniques essentiels au fonctionnement 
                du site et des cookies analytiques anonymisés pour améliorer nos services. 
                Aucune donnée personnelle n&apos;est collectée via ces cookies.
              </p>

              <h2>Modifications</h2>
              <p>
                Nous nous réservons le droit de modifier cette politique de confidentialité. 
                Les modifications entrent en vigueur dès leur publication sur le site.
              </p>

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
    </>
  );
} 