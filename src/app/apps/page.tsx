"use client";

import Badge from '@/components/Badge';
import Image from 'next/image';
import { GRADIENTS, ANIMATIONS, COMMON_CLASSES } from '@/constants/styles';
import { useState } from 'react';

// Types
type Category = 'Tous' | 'Infrastructure' | 'Sécurité' | 'DevOps' | 'Monitoring';
type SortOption = 'recent' | 'popular' | 'name';

const categories: Category[] = ['Tous', 'Infrastructure', 'Sécurité', 'DevOps', 'Monitoring'];

const applications = [
  {
    name: "CloudFlow",
    tagline: "Gestion cloud native simplifiée",
    description: "Orchestrez et gérez vos applications cloud natives avec une interface intuitive et puissante.",
    category: "Infrastructure",
    image: "/apps/cloudflow.svg",
    bgColor: "from-blue-500/5 to-cyan-500/5",
    highlights: [
      {
        title: "Déploiement automatisé",
        description: "Déployez vos applications en quelques clics avec des workflows préconfigurés"
      },
      {
        title: "Monitoring temps réel",
        description: "Visualisez les performances et la santé de vos applications en temps réel"
      },
      {
        title: "Auto-scaling intelligent",
        description: "Optimisez vos ressources automatiquement selon vos besoins"
      }
    ]
  },
  {
    name: "SecureVault",
    tagline: "La sécurité en toute simplicité",
    description: "Protégez et gérez vos secrets d'entreprise avec une solution robuste et conforme.",
    category: "Sécurité",
    image: "/apps/securevault.svg",
    bgColor: "from-purple-500/5 to-pink-500/5",
    highlights: [
      {
        title: "Chiffrement de bout en bout",
        description: "Protection maximale de vos données sensibles"
      },
      {
        title: "Gestion des accès granulaire",
        description: "Contrôlez précisément qui accède à quoi"
      },
      {
        title: "Audit complet",
        description: "Suivez toutes les actions avec des logs détaillés"
      }
    ]
  }
];

export default function AppsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('Tous');
  const [sortBy, setSortBy] = useState<SortOption>('popular');

  // Filtrer et trier les applications
  const filteredApps = applications
    .filter(app => {
      if (selectedCategory !== 'Tous' && app.category !== selectedCategory) return false;
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          app.name.toLowerCase().includes(query) ||
          app.description.toLowerCase().includes(query) ||
          app.tagline.toLowerCase().includes(query)
        );
      }
      return true;
    });

  return (
    <main className="min-h-screen">
      {/* Hero réduit */}
      <section className="relative py-24 flex flex-col items-center justify-center px-4">
        <div className="max-w-[800px] mx-auto text-center">
          <Badge>APP STORE</Badge>
          <h1 className="text-[40px] md:text-[56px] leading-[1.1] font-medium tracking-[-0.02em] mb-6">
            Applications
            <span className={COMMON_CLASSES.gradientText}>Open Source</span>
          </h1>
        </div>
      </section>

      {/* Barre de recherche et filtres */}
      <div className="sticky top-16 z-30 bg-transparent border-b border-gray-200 dark:border-white/[0.1]">
        <div className="max-w-[1200px] mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Recherche */}
            <div className="relative flex-grow">
              <input
                type="search"
                placeholder="Rechercher une application..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="
                  w-full
                  px-4 py-2.5
                  pl-10
                  bg-white dark:bg-white/[0.02]
                  border border-gray-200 dark:border-white/[0.1]
                  rounded-[20px]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500/30
                  text-sm
                  transition-all
                  hover:border-gray-300 dark:hover:border-white/[0.15]
                "
              />
              <svg 
                className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" 
                viewBox="0 0 24 24" 
                fill="none"
              >
                <path 
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Catégories */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`
                    px-4 py-2
                    rounded-full
                    text-sm
                    font-medium
                    whitespace-nowrap
                    transition-all
                    ${selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/[0.1] text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:hover:border-white/[0.15]'
                    }
                  `}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Tri */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="
                px-4 py-2
                bg-white dark:bg-white/[0.02]
                border border-gray-200 dark:border-white/[0.1]
                rounded-full
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500/30
                text-sm
                transition-all
                hover:border-gray-300 dark:hover:border-white/[0.15]
              "
            >
              <option value="recent">Plus récents</option>
              <option value="popular">Plus populaires</option>
              <option value="name">Alphabétique</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grille d'applications */}
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-4">
          {filteredApps.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Aucune application ne correspond à votre recherche
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredApps.map((app, index) => (
                <div key={index} className="group">
                  <div className={`
                    h-full
                    rounded-[24px]
                    p-6
                    bg-gradient-to-br ${app.bgColor}
                    border border-gray-200 dark:border-white/[0.1]
                    transition-all duration-500
                    hover:shadow-lg
                    hover:-translate-y-1
                  `}>
                    <div className="aspect-[4/3] relative mb-6">
                      <Image
                        src={app.image}
                        alt={app.name}
                        fill
                        className="object-contain p-4"
                      />
                    </div>

                    <div>
                      <div className="text-sm font-medium text-blue-600/90 dark:text-blue-400/90 mb-2">
                        {app.category}
                      </div>
                      <h2 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                        {app.name}
                      </h2>
                      <p className="text-base text-gray-600 dark:text-gray-400 mb-2">
                        {app.tagline}
                      </p>
                      <p className="text-sm text-gray-600/90 dark:text-gray-400/90">
                        {app.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-white/[0.1]">
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">
                        Points clés
                      </h3>
                      <ul className="space-y-3">
                        {app.highlights.map((highlight, i) => (
                          <li key={i} className="flex gap-2">
                            <svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none">
                              <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="text-sm text-gray-600/80 dark:text-gray-400/80">
                              {highlight.title}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
} 