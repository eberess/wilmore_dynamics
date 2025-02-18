'use client';

import Image from "next/image";
import Navbar from "@/components/Navbar";
import FadeIn from '@/components/FadeIn';
import { TransitionStep } from './components/TransitionStep';
import { apps, features, transitionSteps } from './data';
import { FeatureCard } from './components/FeatureCard';
import { AppCard } from './components/AppCard';

export default function OpenSource() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4">
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute right-[-10%] top-1/3 w-[800px] h-[800px] transform rotate-12 motion-safe:animate-float">
              <div className="w-full h-full bg-gradient-to-br from-[#1a73e8]/[0.03] dark:from-[#8ab4f8]/[0.03] to-transparent rounded-[60px]" />
            </div>
          </div>

          <FadeIn>
            <div className="max-w-[800px] mx-auto text-center relative z-10">
              <h1 className="text-[44px] md:text-[80px] leading-[1.1] font-medium mb-8">
                Créez votre
                <span className="block p-1 bg-clip-text text-transparent bg-gradient-to-r from-[#1a73e8] to-[#8ab4f8]">
                  avenir digital
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-[640px] mx-auto mb-16 leading-relaxed">
                Des solutions open source qui vous donnent le pouvoir d'innover
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <a
                  href="/open-source/apps"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-12 py-4 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white text-lg font-medium transition-all duration-300 hover:scale-105"
                >
                  Découvrir les solutions
                  <svg className="ml-2 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="/#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-12 py-4 rounded-full text-[#1a73e8] hover:text-[#1557b0] text-lg font-medium transition-colors duration-300"
                >
                  Nous contacter
                </a>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Features Section */}
        <FadeIn delay={200}>
          <section className="py-40 px-4">
            <div className="max-w-[1200px] mx-auto">
              {/* Header */}
              <div className="text-center mb-32">
                <h2 className="text-4xl md:text-6xl font-medium mb-8">
                  L'open source <br/>
                  réinventé
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-[600px] mx-auto leading-relaxed">
                  La puissance du libre, la simplicité en plus
                </p>
              </div>

              {/* Features Grid avec plus d'espace */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                {features.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Applications Section */}
        <FadeIn delay={250}>
          <section className="py-40 px-4 bg-gradient-to-b from-white to-gray-50/50 dark:from-transparent dark:to-white/[0.02]">
            <div className="max-w-[1200px] mx-auto">
              <div className="text-center mb-24">
                <h2 className="text-4xl md:text-6xl font-medium mb-6">
                  Des outils pour <br/>
                  chaque besoin
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-[600px] mx-auto leading-relaxed">
                  Une suite complète d'applications open source
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                {apps.map((app, index) => (
                  <AppCard key={index} {...app} />
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Transition Process Section */}
        <FadeIn delay={200}>
          <section className="py-40 px-4 bg-gradient-to-b from-gray-50/80 via-white to-white dark:from-black/[0.2] dark:via-transparent dark:to-transparent">
            <div className="max-w-[1200px] mx-auto">
              <div className="text-center mb-32">
                <h2 className="text-4xl md:text-6xl font-medium mb-8">
                  Une expérience <br/>
                  unique
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-[600px] mx-auto leading-relaxed">
                  Votre parcours vers la liberté numérique
                </p>
              </div>

              {/* Steps Grid - Sans ligne de connexion */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                {transitionSteps.map((step, index) => (
                  <TransitionStep 
                    key={index} 
                    {...step} 
                  />
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* CTA Section */}
        <FadeIn delay={300}>
          <section className="py-40 px-4 relative overflow-hidden">
            {/* Fond avec gradient subtil */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.01] to-transparent dark:via-blue-400/[0.02]" />
              <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-[0.02]" />
            </div>
            
            <div className="max-w-[800px] mx-auto text-center relative">
              <h2 className="text-4xl md:text-6xl font-medium mb-6">
                Adoptez l'open source
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-[600px] mx-auto leading-relaxed">
                Rejoignez les entreprises qui ont choisi la liberté
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <a
                  href="/open-source/apps"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-12 py-4 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white text-lg font-medium transition-all duration-300 hover:scale-105"
                >
                  Explorer nos solutions
                </a>
              <a
                href="/#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-12 py-4 rounded-full text-[#1a73e8] hover:text-[#1557b0] text-lg font-medium transition-colors duration-300"
              >
                Nous contacter
                <svg className="ml-2 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              </div>
            </div>
          </section>
        </FadeIn>
      </main>
    </>
  );
} 