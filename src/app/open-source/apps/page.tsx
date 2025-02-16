'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { apps, categories } from './data';
import type { App } from './types';
import FadeIn from '@/components/FadeIn';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { AppModal } from './components/AppModal';

export default function OpenSourceApps() {
  const [selectedCategory, setSelectedCategory] = useState('Toutes');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedApp, setSelectedApp] = useState<App | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const filteredApps = apps
    .filter(app => selectedCategory === 'Toutes' || app.category === selectedCategory)
    .filter(app => {
      const searchLower = searchQuery.toLowerCase();
      return (
        app.name.toLowerCase().includes(searchLower) ||
        app.description.toLowerCase().includes(searchLower) ||
        app.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
        app.alternatives.some(alt => alt.toLowerCase().includes(searchLower))
      );
    });

  const handleAppClick = (e: React.MouseEvent, app: App) => {
    e.preventDefault(); // Empêche l'ouverture du lien
    setSelectedApp(app);
  };

  // Ajout d'une clé pour forcer l'animation lors du changement de filtre
  const gridKey = `${selectedCategory}-${searchQuery}`;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen" role="main">
        {/* Hero */}
        <section className="pt-40 pb-32 px-4 relative overflow-hidden" role="banner">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute right-[-20%] top-1/4 w-[1200px] h-[1200px] transform rotate-[12deg]">
              <div className="w-full h-full bg-gradient-to-br from-[#1a73e8]/[0.01] dark:from-[#8ab4f8]/[0.01] to-transparent rounded-[100px]" />
            </div>
          </div>

          <div className="max-w-[800px] mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-[72px] leading-[1.1] font-medium mb-8">
                Open Source
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#1a73e8] to-[#8ab4f8] dark:from-[#8ab4f8] dark:to-[#1a73e8] font-medium">
                  Store
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-normal max-w-[600px] leading-relaxed">
                Découvrez et déployez des alternatives open source pour votre infrastructure
              </p>
            </motion.div>
          </div>
        </section>

        {/* Barre de recherche et filtres */}
        <div 
          className="sticky top-0 z-10 bg-background/30 backdrop-blur-md border-b border-gray-200/30 dark:border-gray-800/30"
          role="search"
        >
          <div className="max-w-[1200px] mx-auto px-4 py-4">
            <div className="relative max-w-2xl mx-auto w-full">
              <input
                type="search"
                aria-label="Rechercher une application"
                placeholder="Rechercher une application ou un équivalent propriétaire..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-11 px-5 rounded-lg bg-white/40 dark:bg-white/[0.02] backdrop-blur-sm outline-none border border-gray-200/50 dark:border-gray-800/50 focus:border-[#1a73e8] dark:focus:border-[#8ab4f8] text-[15px] transition-all duration-300 focus:ring-1 ring-[#1a73e8]/5 dark:ring-[#8ab4f8]/5 placeholder:text-gray-500"
              />
              <svg 
                className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                aria-hidden="true"
                role="presentation"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path 
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" 
                  strokeWidth="1.5" 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Filtres */}
            <div 
              role="tablist" 
              aria-label="Filtrer par catégorie"
              className="flex justify-center gap-3 overflow-x-auto scrollbar-hide"
            >
              {categories.map(category => (
                <button
                  key={category}
                  role="tab"
                  aria-selected={selectedCategory === category}
                  aria-controls="apps-grid"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? 'text-[#1a73e8] dark:text-[#8ab4f8]'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grille d'applications */}
        <section 
          className="py-20 px-4 md:px-6" 
          aria-label="Liste des applications open source"
        >
          <div 
            id="apps-grid"
            role="tabpanel"
            aria-label={`Applications dans la catégorie ${selectedCategory}`}
            className="max-w-[1200px] mx-auto"
          >
            {filteredApps.length === 0 ? (
              <p 
                className="text-xl text-gray-500 dark:text-gray-400 text-center py-32"
                role="status"
              >
                Aucune application ne correspond à votre recherche
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredApps.map((app, index) => (
                  <article 
                    key={app.id}
                    role="article"
                    tabIndex={0}
                    onClick={(e) => handleAppClick(e, app)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleAppClick(e as any, app);
                      }
                    }}
                    aria-label={`${app.name} - ${app.description}`}
                    className="group relative p-6 md:p-8 bg-background rounded-2xl border border-gray-200/60 dark:border-gray-800/60 transition-all duration-300 cursor-pointer hover:border-gray-300 dark:hover:border-gray-700/60"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-gray-100/60 dark:bg-white/[0.02] border border-gray-200 dark:border-gray-800/60">
                        <Image
                          src={app.logo}
                          alt={app.name}
                          fill
                          className={`object-cover ${app.logoBackground ? 'bg-white p-2' : ''}`}
                          sizes="(max-width: 768px) 56px, 96px"
                          priority={index < 6}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-medium truncate mb-1 group-hover:text-[#1a73e8] dark:group-hover:text-[#8ab4f8] transition-colors">
                          {app.name}
                        </h3>
                        <span className="text-sm text-gray-500/90 dark:text-gray-400/90">
                          {app.category}
                        </span>
                      </div>
                    </div>
                    <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">
                      {app.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {app.tags.slice(0, 3).map((tag) => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 text-[13px] text-gray-500 dark:text-gray-400 transition-colors group-hover:text-gray-600 dark:group-hover:text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      
      <AppModal 
        app={selectedApp} 
        onClose={() => setSelectedApp(null)} 
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Open Source Store",
            "description": "Découvrez et déployez des alternatives open source pour votre infrastructure",
            "publisher": {
              "@type": "Organization",
              "name": "Wilmore Dynamics",
              "logo": {
                "@type": "ImageObject",
                "url": "https://wilmoredynamics.com/logo.png"
              }
            },
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": apps.map((app, index) => ({
                "@type": "SoftwareApplication",
                "position": index + 1,
                "name": app.name,
                "description": app.description,
                "applicationCategory": app.category,
                "operatingSystem": "Any",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "EUR"
                }
              }))
            }
          })
        }}
      />
    </>
  );
} 