import React from 'react';

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section aria-labelledby="hero-heading" className="relative bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-black/[0.95]">
        <div className="relative pt-24 pb-20 sm:pt-32 sm:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative z-10">
              <div className="text-center">
                <h1 id="hero-heading" className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl">
                  À propos de Wilmore Dynamics
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Découvrez l'équipe passionnée derrière Wilmore Dynamics et notre engagement 
                  à créer des solutions technologiques innovantes qui transforment le monde numérique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contenu principal */}
      <section aria-label="Contenu principal" className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-lg dark:prose-invert">
          <p className="mb-6">
            Bienvenue sur notre plateforme dédiée à l'innovation et à la créativité. 
            Notre mission est de créer des solutions numériques qui font la différence 
            dans le quotidien de nos utilisateurs.
          </p>

          <h2 id="vision" className="text-2xl font-semibold mt-8 mb-4">Notre Vision</h2>
          <p className="mb-6">
            Nous croyons en un monde où la technologie est accessible à tous et 
            contribue positivement à la société. Notre équipe travaille sans relâche 
            pour concrétiser cette vision à travers nos produits et services.
          </p>

          <h2 id="equipe" className="text-2xl font-semibold mt-8 mb-4">Notre Équipe</h2>
          <p className="mb-6">
            Composée de passionnés du numérique, notre équipe réunit des talents 
            variés et complémentaires. Développeurs, designers et experts en 
            expérience utilisateur collaborent pour vous offrir la meilleure 
            expérience possible.
          </p>

          <h2 id="valeurs" className="text-2xl font-semibold mt-8 mb-4">Nos Valeurs</h2>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Innovation constante</li>
            <li className="mb-2">Qualité et excellence</li>
            <li className="mb-2">Transparence et intégrité</li>
            <li className="mb-2">Satisfaction client</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-12 mb-4">Notre Philosophie Open Source</h2>
          <p className="mb-6">
            Chez Wilmore Dynamics, nous sommes de fervents défenseurs du mouvement open source. 
            Nous croyons que le partage des connaissances et la collaboration ouverte sont les 
            moteurs de l'innovation technologique. Notre engagement envers l'open source se 
            manifeste à travers :
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">
              La contribution active aux projets open source qui façonnent l'avenir du développement logiciel
            </li>
            <li className="mb-2">
              Le partage de nos propres outils et bibliothèques avec la communauté
            </li>
            <li className="mb-2">
              L'utilisation et la promotion de solutions open source dans nos projets
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-12 mb-4">Notre Engagement pour le Logiciel Libre</h2>
          <p className="mb-6">
            Le logiciel libre représente plus qu'une simple approche technique - c'est un 
            mouvement qui incarne nos valeurs fondamentales de transparence et d'autonomie. 
            Nous nous engageons à :
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">
              Privilégier les solutions libres dans notre stack technologique
            </li>
            <li className="mb-2">
              Former nos clients aux avantages du logiciel libre
            </li>
            <li className="mb-2">
              Participer activement à la communauté du logiciel libre
            </li>
            <li className="mb-2">
              Libérer le code de nos projets internes lorsque possible
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-12 mb-4">Impact et Responsabilité</h2>
          <p className="mb-6">
            Notre approche du développement logiciel va au-delà de la simple création de 
            solutions techniques. Nous nous efforçons de créer un impact positif sur 
            l'écosystème technologique en :
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">
              Promouvant des pratiques de développement durables et éthiques
            </li>
            <li className="mb-2">
              Encourageant la diversité et l'inclusion dans la tech
            </li>
            <li className="mb-2">
              Partageant nos connaissances à travers des articles, des conférences et des formations
            </li>
            <li className="mb-2">
              Soutenant les initiatives locales de développement technologique
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export const metadata = {
  title: 'À propos de Wilmore Dynamics | Notre Histoire et Nos Valeurs',
  description: "Découvrez l'histoire de Wilmore Dynamics, notre équipe passionnée, notre vision et notre engagement envers l'innovation technologique et l'open source.",
  openGraph: {
    title: 'À propos de Wilmore Dynamics | Notre Histoire et Nos Valeurs',
    description: "Découvrez l'histoire de Wilmore Dynamics, notre équipe passionnée, notre vision et notre engagement envers l'innovation technologique et l'open source.",
    type: 'website',
  },
  other: {
    'script:ld+json': {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Wilmore Dynamics',
      'description': "Entreprise spécialisée dans le développement de solutions technologiques innovantes et l'open source",
      'url': 'https://wilmoredynamics.com',
      'knowsAbout': [
        'Développement logiciel',
        'Open Source',
        'Innovation technologique',
        'Solutions numériques'
      ],
      'ethicsPolicy': {
        '@type': 'CreativeWork',
        'name': 'Valeurs et Engagement',
        'text': 'Innovation constante, Qualité et excellence, Transparence et intégrité, Satisfaction client'
      },
      'sameAs': [
        'https://github.com/wilmore-dynamics',
        'https://linkedin.com/company/wilmore-dynamics'
      ]
    }
  }
}; 