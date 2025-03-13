"use client";

import { useState, useRef } from 'react';
import Image from "next/image";
import Link from "next/link";
import FadeIn from './FadeIn';
import { ANIMATIONS, COMMON_CLASSES } from '@/constants/styles';
import Section from './Section';
import ServiceModal from './ServiceModal';
import type { ServiceProps } from '@/app/services/page';
import Badge from './Badge';

type ServicesContentProps = {
  servicesData: ServiceProps[];
};

export default function ServicesContent({ servicesData }: ServicesContentProps) {
  const [selectedService, setSelectedService] = useState<ServiceProps | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <main className="min-h-screen" role="main">
      <section 
        aria-labelledby="hero-title"
        className="relative min-h-[65vh] sm:min-h-[75vh] md:min-h-[85vh] flex flex-col items-center justify-center px-4 pb-8 sm:pb-16 pt-20 sm:pt-0"
      >
        <FadeIn>
          <div className="max-w-[800px] mx-auto text-center relative z-10 mt-8 sm:mt-0">
            <Badge>
              EXPERTISE CLOUD
            </Badge>
            <h1 
              id="hero-title" 
              className={`
                text-[2.75rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem]
                leading-[1.1]
                font-medium
                tracking-[-0.02em]
                mb-6 sm:mb-8
                text-center
                text-gray-900 dark:text-white
              `}
            >
              Solutions
              <span className={`
                ${COMMON_CLASSES.gradientText}
                block 
                mt-2 sm:mt-3
                text-[2rem] sm:text-[2.75rem] md:text-[3.5rem] lg:text-[4rem]
              `}>
                nouvelle génération
              </span>
            </h1>
            <p className={`
              text-[1.125rem] sm:text-[1.25rem] md:text-[1.5rem]
              leading-[1.6]
              text-gray-600/90 dark:text-gray-300/90
              max-w-2xl 
              mx-auto 
              mb-8 sm:mb-12
            `}>
              Des solutions modernes et évolutives pour transformer votre infrastructure
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 sm:mb-0">
              <Link 
                href="/#contact" 
                className={`${COMMON_CLASSES.primaryButton} !px-12 !py-6 text-lg group relative overflow-hidden ${ANIMATIONS.shine}`}
                aria-label="Démarrer votre projet de transformation digitale"
              >
                <span className="relative z-10">Démarrer votre projet</span>
                <span className={`${ANIMATIONS.linkHover} group-hover:translate-x-2 relative z-10`}>→</span>
              </Link>
              <Link 
                href="#services" 
                className={`${COMMON_CLASSES.secondaryButton} !px-12 !py-6 text-lg group w-full sm:w-auto`}
              >
                Explorer nos services
                <span className={`${ANIMATIONS.linkHover} group-hover:translate-x-2`}>→</span>
              </Link>
            </div>
          </div>
        </FadeIn>

        <div className="hidden sm:block absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-white/20 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-gray-400 dark:bg-white/20 rounded-full" />
          </div>
        </div>
      </section>

      <Section
        id="services"
        badge="NOS SERVICES"
        title="Développement"
        subtitle="& Infrastructure"
        hasGradientBg
        className="py-20 scroll-mt-20 motion-safe:transition-all motion-safe:duration-1000"
        role="region"
        aria-label="Nos services"
      >
        {/* Carte principale */}
        <div className="mb-16">
          <div className="bg-white dark:bg-black/20 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="text-center lg:text-left space-y-6">
                <Image
                  src={servicesData[0].image}
                  alt="Illustration du développement cloud native"
                  width={120}
                  height={120}
                  className="mx-auto lg:mx-0"
                />
                <div>
                  <h3 className="text-2xl font-medium mb-4">
                    {servicesData[0].title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {servicesData[0].description}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {servicesData[0].features.map((feature, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-xl bg-gray-50 dark:bg-white/[0.02]"
                  >
                    <span className="text-gray-600 dark:text-gray-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Cartes secondaires */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {servicesData.slice(1).map((service, index) => (
            <div key={index} className="bg-white dark:bg-black/20 rounded-2xl p-8">
              <div className="flex flex-col sm:flex-row gap-6">
                <Image
                  src={service.image}
                  alt={`Illustration ${service.title}`}
                  width={80}
                  height={80}
                />
                <div>
                  <h3 className="text-xl font-medium mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-1 h-1 rounded-full bg-blue-500" />
                        <span className="text-gray-600 dark:text-gray-300 text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="cta"
        title="Prêt à démarrer"
        subtitle="votre projet ?"
        hasGradientBg
        className="py-24 lg:py-32"
      >
        <div className="max-w-[800px] mx-auto text-center">
          <div className="mb-12 space-y-6">
            <p className={`${COMMON_CLASSES.sectionDescription} text-xl`}>
              Nos experts vous accompagnent à chaque étape
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">Démarrage en 24h</span>
              </span>
              <span className="hidden sm:inline text-2xl">•</span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">Support dédié</span>
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="/#contact" 
              className={`${COMMON_CLASSES.primaryButton} !px-12 !py-6 text-lg group relative overflow-hidden ${ANIMATIONS.shine}`}
              aria-label="Démarrer votre projet de transformation digitale"
            >
              <span className="relative z-10">Démarrer votre projet</span>
              <span className={`${ANIMATIONS.linkHover} group-hover:translate-x-2 relative z-10`}>→</span>
            </Link>
            <a 
              href="mailto:contact@example.com" 
              className={`${COMMON_CLASSES.secondaryButton} !px-12 !py-6 text-lg group`}
            >
              Nous contacter
              <span className={`${ANIMATIONS.linkHover} group-hover:translate-x-2`}>→</span>
            </a>
          </div>
        </div>
      </Section>

      <ServiceModal 
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService}
        cardRef={cardRefs}
        cardIndex={servicesData.findIndex(s => s.title === selectedService?.title)}
      />
    </main>
  );
} 