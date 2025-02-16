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
    .filter(app => 
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

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
      <main className="min-h-screen">
        {/* Hero */}
        <section className="pt-40 pb-32 px-4 relative overflow-hidden">
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
        <div className="sticky top-0 z-10 bg-background/30 backdrop-blur-md border-b border-gray-200/30 dark:border-gray-800/30">
          <div className="max-w-[1200px] mx-auto px-4 py-4">
            <motion.div 
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Barre de recherche */}
              <div className="relative max-w-2xl mx-auto w-full">
                <input
                  type="search"
                  aria-label="Rechercher une application"
                  placeholder="Rechercher une application..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-11 px-5 rounded-lg bg-white/40 dark:bg-white/[0.02] backdrop-blur-sm outline-none border border-gray-200/50 dark:border-gray-800/50 focus:border-[#1a73e8] dark:focus:border-[#8ab4f8] text-[15px] transition-all duration-300 focus:ring-1 ring-[#1a73e8]/5 dark:ring-[#8ab4f8]/5 placeholder:text-gray-500"
                />
                <svg 
                  className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                >
                  <path 
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" 
                    strokeWidth="1.5" 
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Filtres */}
              <div className="flex justify-center gap-3 overflow-x-auto scrollbar-hide">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    aria-current={selectedCategory === category ? 'true' : undefined}
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
            </motion.div>
          </div>
        </div>

        {/* Grille d'applications */}
        <section className="py-20 px-4 md:px-6">
          <div className="max-w-[1200px] mx-auto">
            <AnimatePresence mode="wait">
              {filteredApps.length === 0 ? (
                <motion.div 
                  key="empty"
                  className="text-center py-32"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-xl text-gray-500 dark:text-gray-400">
                    Aucune application ne correspond à votre recherche
                  </p>
                </motion.div>
              ) : (
                <motion.div 
                  key={gridKey}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {filteredApps.map((app, index) => (
                    <motion.div
                      key={app.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: {
                          delay: index * 0.05,
                          duration: 0.3,
                          ease: [0.22, 1, 0.36, 1]
                        }
                      }}
                    >
                      <motion.div 
                        className="group relative p-6 md:p-8 bg-background rounded-2xl border border-gray-200/60 dark:border-gray-800/60 transition-all duration-300 cursor-pointer"
                        whileHover={{ y: -1 }}
                        onClick={(e) => handleAppClick(e, app)}
                      >
                        <div className="flex items-start gap-4 mb-6">
                          <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-gray-100/60 dark:bg-white/[0.02] border border-gray-200/40 dark:border-gray-800/40">
                            <Image
                              src={app.logo}
                              alt={app.name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 56px, 96px"
                              priority={index < 6}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-medium truncate group-hover:text-[#1a73e8] dark:group-hover:text-[#8ab4f8] transition-colors">
                              {app.name}
                            </h3>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
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
                              className="px-3 py-1 text-[13px] text-gray-500 dark:text-gray-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>
      
      <AppModal 
        app={selectedApp} 
        onClose={() => setSelectedApp(null)} 
      />
    </>
  );
} 