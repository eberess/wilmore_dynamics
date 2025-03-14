import type { Metadata } from 'next';
import Section from '@/components/Section';
import FadeIn from '@/components/FadeIn';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Choisir Linux | Alternative Libre et Performante | Wilmore Dynamics',
  description: 'Découvrez comment migrer vers Linux pour moderniser vos PC et Mac existants. Solution gratuite, sécurisée et écologique pour prolonger la vie de vos appareils. Accompagnement personnalisé et support expert.',
  openGraph: {
    title: 'Choisir Linux | Alternative Libre et Performante | Wilmore Dynamics',
    description: 'Découvrez comment migrer vers Linux pour moderniser vos PC et Mac existants. Solution gratuite, sécurisée et écologique pour prolonger la vie de vos appareils.',
    type: 'website',
    images: [
      {
        url: '/linux/desktop-preview.webp',
        width: 1200,
        height: 630,
        alt: 'Interface moderne Linux avec applications'
      }
    ]
  },
  alternates: {
    canonical: 'https://wilmoredynamics.com/linux'
  },
  keywords: [
    'Linux',
    'Migration Linux',
    'Ubuntu',
    'Linux Mint',
    'Pop!_OS',
    'Fedora',
    'elementary OS',
    'Manjaro',
    'Alternative Windows',
    'Système exploitation libre',
    'Gaming Linux',
    'Support Linux entreprise'
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Linux : Le système d'exploitation moderne",
  "description": "Découvrez comment migrer vers Linux pour moderniser vos PC et Mac existants...",
  "provider": {
    "@type": "Organization",
    "name": "Wilmore Dynamics",
    "url": "https://wilmoredynamics.com"
  }
};

export default function LinuxPage() {
  return (
    <main className="min-h-screen overflow-x-hidden" role="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
        }}
      />
      {/* Hero Section */}
      <div className="w-full">
        <Section
          id="linux-hero"
          className="min-h-screen relative flex flex-col items-center justify-center py-16 sm:py-32 overflow-hidden"
          badge="LINUX"
          title={
            <div className="relative z-10 text-center max-w-[1000px] mx-auto px-4 sm:px-0">
              <h1 className="text-[36px] sm:text-[80px] leading-[1.1] font-medium tracking-[-0.02em]">
                Linux : Le système d&apos;exploitation moderne
                <span className="block text-[24px] sm:text-[44px] mt-4 sm:mt-8 bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent font-normal">
                  Rapide, sécurisé et open source
                </span>
              </h1>
              <p className="mt-6 sm:mt-10 text-base sm:text-2xl leading-relaxed text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
                Une solution pérenne pour moderniser vos systèmes
              </p>
              
              {/* Image principale */}
              <div className="relative mt-16 sm:mt-24 mx-auto max-w-[1200px] aspect-[16/9]">
                <Image
                  src="/linux/desktop-preview.webp"
                  alt="Interface moderne de Linux montrant un environnement de bureau personnalisé avec dock et applications"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 1200px"
                  quality={90}
                />
              </div>
            </div>
          }
        >
          {/* Fond avec effet de gradient */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
          </div>
        </Section>
      </div>

      {/* Contenu principal */}
      <div className="w-full">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Avantages */}
          <FadeIn 
            className="transition-all duration-300"
          >
            <div 
              id="linux-features" 
              className="relative mb-16 sm:mb-32 scroll-mt-16"
              aria-labelledby="linux-features-title"
            >
              <div 
                className="w-full"
                role="region"
                aria-labelledby="linux-features-title"
              >
                <div className="text-center mb-12 sm:mb-24 px-4 sm:px-0">
                  <span 
                    className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm font-medium bg-blue-500/10 text-blue-500 mb-4"
                    aria-hidden="true"
                  >
                    INTERFACE LINUX
                  </span>
                  <h2 
                    id="linux-features-title"
                    className="text-2xl sm:text-5xl font-semibold"
                  >
                    Une expérience fluide et intuitive
                  </h2>
                  <p className="mt-4 sm:mt-6 text-base sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Un système moderne qui s&apos;adapte à vos besoins
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 sm:gap-24 items-center">
                  <div>
                    <div className="space-y-16">
                      {[
                        {
                          title: "Interface moderne",
                          description: "Un design épuré et personnalisable qui s'adapte à vos besoins",
                          icon: (
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                                    d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
                              <path strokeLinecap="round" strokeWidth={1.5} d="M4 9h16M8 4v4" />
                            </svg>
                          )
                        },
                        {
                          title: "Performances optimales",
                          description: "Redonnez vie à votre machine avec un système léger et rapide",
                          icon: (
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          )
                        },
                        {
                          title: "Applications intégrées",
                          description: "Tout ce dont vous avez besoin, préinstallé et prêt à l'emploi",
                          icon: (
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                                    d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                          )
                        }
                      ].map((feature) => (
                        <div key={feature.title} className="flex gap-6">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-400/20 
                                        flex items-center justify-center flex-shrink-0
                                        border border-blue-500/10">
                            <div className="text-blue-500">{feature.icon}</div>
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative h-[600px] rounded-2xl overflow-hidden 
                                  border border-gray-200/50 dark:border-white/[0.1]
                                  shadow-2xl shadow-blue-500/10">
                    <Image
                      src="/linux/interface-preview.webp"
                      alt="Interface Linux moderne"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Section Gaming */}
          <section 
            aria-labelledby="linux-gaming-title"
            className="mb-16 sm:mb-32"
          >
            <div className="text-center mb-16 sm:mb-24">
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-blue-500/10 text-blue-500 mb-4">
                GAMING SUR LINUX
              </span>
              <h2 
                id="linux-gaming-title"
                className="mt-4 text-3xl sm:text-5xl font-semibold"
              >
                Jouez sans compromis
              </h2>
              <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Des milliers de jeux Windows directement sur Linux grâce à Steam et Proton
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-12 sm:mb-24">
              {[
                {
                  value: "84%",
                  label: "des jeux Steam",
                  sublabel: "compatibles"
                },
                {
                  value: "7000+",
                  label: "jeux certifiés",
                  sublabel: "Platinum"
                },
                {
                  value: "80%",
                  label: "du top 100",
                  sublabel: "disponible"
                },
                {
                  type: "image",
                  label: "Steam Deck",
                  sublabel: "Verified"
                }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent 
                             border border-gray-200/50 dark:border-white/[0.1] 
                             hover:border-blue-500/50 transition-all duration-300
                             hover:shadow-lg hover:shadow-blue-500/10"
                >
                  {stat.type === "image" ? (
                    <div className="flex justify-center mb-3 sm:mb-4">
                      <div className="relative w-12 sm:w-16 h-12 sm:h-16">
                        <Image
                          src="/linux/steamdeck.svg"
                          alt="Steam Deck"
                          fill
                          className="object-contain dark:invert dark:brightness-75"
                          priority
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="text-4xl sm:text-5xl font-bold text-blue-500 mb-3 sm:mb-4">
                      {stat.value}
                    </div>
                  )}
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    {stat.label}<br/>{stat.sublabel}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent 
                        border border-gray-200/50 dark:border-white/[0.1]
                        hover:border-blue-500/50 transition-all duration-300
                        hover:shadow-lg hover:shadow-blue-500/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-400/20 
                              flex items-center justify-center flex-shrink-0
                              border border-blue-500/10">
                    <Image
                      src="/linux/steam.svg"
                      alt=""
                      width={24}
                      height={24}
                      className="text-blue-500"
                      priority
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">SteamOS</h3>
                    <p className="text-gray-600 dark:text-gray-400">Système optimisé pour le gaming</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Une expérience console avec la puissance d&apos;un PC. 
                  Optimisé pour votre salon et le Steam Deck.
                </p>
                <a 
                  href="https://store.steampowered.com/steamos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors"
                >
                  Découvrir SteamOS
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent 
                        border border-gray-200/50 dark:border-white/[0.1]
                        hover:border-blue-500/50 transition-all duration-300
                        hover:shadow-lg hover:shadow-blue-500/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-400/20 
                              flex items-center justify-center flex-shrink-0
                              border border-purple-500/10">
                    <svg 
                      className="w-8 h-8 text-purple-500" 
                      viewBox="0 0 491 491"
                    >
                      <path 
                        fill="currentColor"
                        d="M245.5 20.5c124.3 0 225 100.7 225 225s-100.7 225-225 225-225-100.7-225-225 100.7-225 225-225zm0 97.5c-70.4 0-127.5 57.1-127.5 127.5S175.1 372.5 245.5 372.5 373 315.4 373 245.5 315.9 118 245.5 118z"
                      />
                      <circle 
                        cx="245.5" 
                        cy="245.5" 
                        r="85"
                        className="fill-white dark:fill-white"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">ProtonDB</h3>
                    <p className="text-gray-600 dark:text-gray-400">Base de données de compatibilité</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Jouez à vos jeux Windows préférés avec des performances 
                  optimales grâce à la technologie Proton.
                </p>
                <a 
                  href="https://www.protondb.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-500 hover:text-purple-400 transition-colors"
                >
                  Vérifier la compatibilité
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </section>

          {/* Section Distributions */}
          <FadeIn className="transition-all duration-300">
            <div className="mb-16 sm:mb-32">
              <div className="text-center mb-16 sm:mb-24">
                <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-blue-500/10 text-blue-500 mb-4">
                  DISTRIBUTIONS LINUX
                </span>
                <h2 className="text-3xl sm:text-5xl font-semibold mb-6">Le choix vous appartient</h2>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Chaque distribution Linux est unique. Trouvez celle qui vous correspond.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8" role="list" aria-label="Liste des distributions Linux disponibles">
                {[
                  {
                    name: "Ubuntu",
                    description: "Distribution Linux idéale pour débuter, avec une interface intuitive similaire à Windows et une grande communauté de support",
                    icon: "/distros/ubuntu.svg",
                    useCase: "Usage quotidien et bureautique",
                    color: "orange"
                  },
                  {
                    name: "Linux Mint",
                    description: "Distribution Linux stable et légère, offrant une expérience familière pour les utilisateurs Windows avec une interface traditionnelle et des outils préconfigurés",
                    icon: "/distros/mint.svg",
                    useCase: "Utilisateurs Windows",
                    color: "green"
                  },
                  {
                    name: "Pop!_OS",
                    description: "Distribution Linux moderne optimisée pour les créatifs et développeurs, avec support natif du GPU et des outils de développement intégrés",
                    icon: "/distros/pop-os.svg",
                    useCase: "Développement et création",
                    color: "blue"
                  },
                  {
                    name: "Fedora",
                    description: "Distribution Linux à la pointe de la technologie, offrant les dernières innovations open source dans un environnement stable et professionnel",
                    icon: "/distros/fedora.svg",
                    useCase: "Développeurs et tech enthusiasts",
                    color: "blue"
                  },
                  {
                    name: "elementary OS",
                    description: "Distribution Linux élégante avec une interface inspirée de macOS, parfaite pour les créatifs cherchant simplicité et productivité",
                    icon: "/distros/elementary.svg",
                    useCase: "Utilisateurs Apple",
                    color: "gray"
                  },
                  {
                    name: "Manjaro",
                    description: "Distribution Linux rolling release alliant stabilité et accès aux derniers logiciels, idéale pour les utilisateurs expérimentés",
                    icon: "/distros/manjaro.svg",
                    useCase: "Utilisateurs avancés",
                    color: "green"
                  }
                ].map((distro) => (
                  <div 
                    key={distro.name}
                    className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent 
                               border border-gray-200/50 dark:border-white/[0.1]
                               hover:border-blue-500/50 transition-all duration-300
                               hover:shadow-lg hover:shadow-blue-500/10"
                    role="listitem"
                    tabIndex={0}
                  >
                    <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="h-10 w-10 sm:h-12 sm:w-12 relative flex-shrink-0">
                        <Image
                          src={distro.icon}
                          alt={`Logo ${distro.name}`}
                          fill
                          className={`object-contain ${distro.name === "elementary OS" ? "dark:invert" : ""}`}
                        />
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <h3 className="text-lg sm:text-xl font-semibold">{distro.name}</h3>
                        <div className="inline-flex px-2 sm:px-3 py-1 text-xs sm:text-sm 
                                      bg-gradient-to-r from-blue-500/10 to-blue-400/10
                                      text-blue-500 dark:text-blue-400 
                                      rounded-full border border-blue-500/20">
                          {distro.useCase}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                      {distro.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Section Nos Engagements */}
          <FadeIn className="transition-all duration-300">
            <div className="mb-16 sm:mb-32">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-blue-500/10 text-blue-500 mb-4">
                  NOS ENGAGEMENTS
                </span>
                <h2 className="text-3xl sm:text-5xl font-semibold mb-6">Nos engagements</h2>
                <p className="text-base sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                  Une transition réussie vers Linux, en toute confiance
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Expertise Linux",
                    description: "Plus de 10 ans d'expérience dans la migration et le support Linux pour entreprises et particuliers",
                    icon: (
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.25 16.25l-5.5-5.5m-1 4.5H4.75m3-9h8m-8 4.5h4.5" />
                      </svg>
                    )
                  },
                  {
                    title: "Support personnalisé",
                    description: "Accompagnement sur mesure, formation des utilisateurs et assistance technique continue",
                    icon: (
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    )
                  },
                  {
                    title: "Solution clé en main",
                    description: "De l'audit initial à la migration complète, nous gérons tout le processus de transition",
                    icon: (
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    )
                  },
                  {
                    title: "Confidentialité garantie",
                    description: "Protection maximale de vos données avec un contrôle total sur vos informations personnelles",
                    icon: (
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    )
                  },
                  {
                    title: "Performances optimales",
                    description: "Configuration optimisée pour tirer le meilleur parti de votre matériel existant",
                    icon: (
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    )
                  },
                  {
                    title: "Écologique",
                    description: "Prolongez la durée de vie de vos appareils tout en réduisant votre empreinte carbone",
                    icon: (
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    )
                  }
                ].map((feature) => (
                  <div 
                    key={feature.title}
                    className="p-8 rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent 
                               border border-gray-200/50 dark:border-white/[0.1]
                               hover:border-blue-500/50 transition-all duration-300
                               hover:shadow-lg hover:shadow-blue-500/10"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-400/20 
                                  flex items-center justify-center flex-shrink-0 mb-6
                                  border border-blue-500/10">
                      <div className="text-blue-500 dark:text-blue-400">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Section FAQ */}
          <section 
            aria-labelledby="linux-faq-title"
            className="mb-16 sm:mb-32"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-semibold mb-6">Questions fréquentes</h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Tout ce que vous devez savoir sur la migration vers Linux
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: "Combien coûte une migration vers Linux ?",
                  answer: "Le coût dépend de vos besoins spécifiques. Linux étant gratuit, vous ne payez que pour notre accompagnement. Nous établissons un devis personnalisé après analyse de votre infrastructure."
                },
                {
                  question: "Combien de temps prend une migration ?",
                  answer: "Une migration typique prend entre 2 et 4 semaines, incluant l'audit initial, la migration des données, la configuration et la formation des utilisateurs. Le planning est adapté à vos contraintes."
                },
                {
                  question: "Mes logiciels métiers seront-ils compatibles ?",
                  answer: "Nous réalisons un audit complet de vos logiciels. La plupart ont des alternatives Linux natives ou fonctionnent via des solutions de compatibilité. Nous vous proposons les meilleures options pour chaque cas."
                },
                {
                  question: "Proposez-vous des formations ?",
                  answer: "Oui, nous incluons des sessions de formation adaptées à chaque profil d'utilisateur. Nous assurons également un suivi post-migration et une assistance continue pour garantir une transition en douceur."
                },
                {
                  question: "Que se passe-t-il après la migration ?",
                  answer: "Nous restons à vos côtés avec un support technique dédié. Nous assurons la maintenance, les mises à jour et continuons à optimiser votre système selon vos besoins."
                },
                {
                  question: "Puis-je tester avant de migrer ?",
                  answer: "Absolument ! Nous pouvons mettre en place un environnement de test représentatif de votre futur système. Cela permet de valider la compatibilité et de former vos équipes sans risque."
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="p-8 rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent 
                             border border-gray-200/50 dark:border-white/[0.1]
                             hover:border-blue-500/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-4">{item.question}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.answer}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Vous avez d&apos;autres questions ?
              </p>
              <a 
                href="/contact#form"
                className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors"
                aria-label="Contactez nos experts pour en savoir plus"
              >
                Contactez nos experts
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </section>

          {/* CTA final */}
          <section 
            aria-label="Contactez-nous"
            className="text-center py-12 sm:py-32 px-4 sm:px-8 mb-16 sm:mb-32 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-blue-500/5 
                            rounded-2xl sm:rounded-3xl border border-gray-200/50 dark:border-white/[0.1]
                            backdrop-blur-sm">
            <h2 className="text-2xl sm:text-5xl font-semibold mb-4 sm:mb-8">
              Prêt à découvrir Linux ?
            </h2>
            <p className="text-base sm:text-xl text-gray-700 dark:text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto">
              Commencez votre transition vers un système plus performant, plus sécurisé et plus respectueux de l&apos;environnement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="/contact#form"
                className="w-full sm:w-auto px-12 py-6 bg-gradient-to-r from-blue-600 to-blue-500 
                          text-white text-xl rounded-2xl font-semibold 
                          hover:opacity-90 transition-all duration-300"
              >
                Démarrer votre projet
              </a>
              <a 
                href="/contact#form"
                className="text-xl text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              >
                Planifier un audit →
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 