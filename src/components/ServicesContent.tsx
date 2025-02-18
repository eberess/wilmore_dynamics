"use client";

import { useState, useRef } from 'react';
import Image from "next/image";
import FadeIn from './FadeIn';
import { COLORS, GRADIENTS, ANIMATIONS, COMMON_CLASSES } from '@/constants/styles';
import Section from './Section';
import ServiceModal from './ServiceModal';
import type { ServiceProps } from '@/app/services/page';

type ServicesContentProps = {
  servicesData: ServiceProps[];
};

export default function ServicesContent({ servicesData }: ServicesContentProps) {
  const [selectedService, setSelectedService] = useState<ServiceProps | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setCardRef = (index: number) => (el: HTMLDivElement | null) => {
    cardRefs.current[index] = el;
  };

  return (
    <main className="min-h-screen" role="main">
      <section 
        aria-labelledby="hero-title"
        className="relative min-h-[65vh] sm:min-h-[75vh] md:min-h-[85vh] flex flex-col items-center justify-center px-4 pb-8 sm:pb-16 pt-20 sm:pt-0"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute right-[-10%] top-1/3 w-[800px] h-[800px] transform rotate-12">
            <div className={`w-full h-full ${GRADIENTS.BG_DECORATIVE} rounded-[60px] blur-3xl`} />
          </div>
          <div className="absolute left-[-10%] bottom-1/3 w-[800px] h-[800px] transform -rotate-12">
            <div className={`w-full h-full ${GRADIENTS.BG_DECORATIVE} rounded-[60px] blur-3xl`} />
          </div>
        </div>

        <FadeIn>
          <div className="max-w-[800px] mx-auto text-center relative z-10 mt-8 sm:mt-0">
            <span className={`${COMMON_CLASSES.badge} !mb-4 sm:!mb-8`}>
              EXPERTISE CLOUD
            </span>
            <h1 
              id="hero-title" 
              className={`${COMMON_CLASSES.sectionTitle} !text-5xl sm:!text-6xl md:!text-7xl lg:!text-8xl mb-6 sm:mb-8 text-center`}
            >
              Solutions
              <span className={`${COMMON_CLASSES.gradientText} block mt-1 sm:mt-2`}>
                nouvelle génération
              </span>
            </h1>
            <p className={`${COMMON_CLASSES.sectionDescription} text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-12`}>
              Des solutions modernes et évolutives pour transformer votre infrastructure et accélérer votre innovation
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 sm:mb-0">
              <a 
                href="/#contact" 
                className={`${COMMON_CLASSES.primaryButton} !px-12 !py-6 text-lg group relative overflow-hidden ${ANIMATIONS.shine}`}
                aria-label="Démarrer votre projet de transformation digitale"
              >
                <span className="relative z-10">Démarrer votre projet</span>
                <span className={`${ANIMATIONS.linkHover} group-hover:translate-x-2 relative z-10`}>→</span>
              </a>
              <a 
                href="#services" 
                className={`${COMMON_CLASSES.secondaryButton} !px-12 !py-6 text-lg group w-full sm:w-auto`}
              >
                Explorer nos services
                <span className={`${ANIMATIONS.linkHover} group-hover:translate-x-2`}>→</span>
              </a>
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
        className="py-20"
        role="region"
        aria-label="Nos services"
      >
        {/* Carte principale */}
        <div 
          ref={setCardRef(0)}
          className={`mb-20 group ${ANIMATIONS.scaleHover}`}
        >
          <div className={`${COMMON_CLASSES.cardWrapper} p-12 lg:p-16 relative overflow-hidden ${ANIMATIONS.shine}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className={`text-center lg:text-left space-y-8 ${ANIMATIONS.fadeUp}`}>
                <div className="relative w-48 h-48 mx-auto lg:mx-0">
                  <div className={`absolute inset-0 ${GRADIENTS.BG_CARD} rounded-3xl blur-2xl opacity-40`} />
                  <Image
                    src={servicesData[0].image}
                    alt="Illustration du développement cloud native montrant une architecture microservices moderne"
                    width={192}
                    height={192}
                    className={`relative z-10 w-full h-full object-contain ${ANIMATIONS.hover}`}
                  />
                </div>
                <div className="space-y-4">
                  <span className={COMMON_CLASSES.badge}>
                    {servicesData[0].subtitle}
                  </span>
                  <h3 className={`text-3xl font-medium ${COMMON_CLASSES.cardHover}`}>
                    {servicesData[0].title}
                  </h3>
                  <p className={`${COMMON_CLASSES.textContainer} lg:max-w-md`}>
                    {servicesData[0].description}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {servicesData[0].features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-6 rounded-xl bg-gray-50/50 dark:bg-white/[0.02] transition-all duration-300 hover:bg-gray-100/50 dark:hover:bg-white/[0.04]"
                  >
                    <div className={`${COMMON_CLASSES.iconContainer} !w-8 !h-8 !rounded-lg shrink-0`}>
                      <span className={`text-[${COLORS.primary.light}] dark:text-[${COLORS.primary.dark}] text-sm font-medium`}>
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                    </div>
                    <span className={COMMON_CLASSES.textContainer}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-start mt-8">
              <button 
                onClick={() => setSelectedService(servicesData[0])}
                className={`text-[${COLORS.primary.light}] dark:text-[${COLORS.primary.dark}] text-sm font-medium group inline-flex items-center gap-2 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[${COLORS.primary.light}]`}
                aria-label={`En savoir plus sur ${servicesData[0].title}`}
                aria-expanded={selectedService?.title === servicesData[0].title}
              >
                En savoir plus
                <span className={ANIMATIONS.linkHover} aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Cartes secondaires */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {servicesData.slice(1).map((service, index) => (
            <div 
              key={index}
              ref={setCardRef(index + 1)}
              className={`group ${ANIMATIONS.scaleHover}`}
            >
              <div className={`${COMMON_CLASSES.cardWrapper} p-8 sm:p-12 relative overflow-hidden ${ANIMATIONS.shine}`}>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
                  <div className={`relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 ${ANIMATIONS.fadeUp}`}>
                    <div className={`absolute inset-0 ${GRADIENTS.BG_CARD} rounded-2xl blur-xl opacity-50`} />
                    <Image
                      src={service.image}
                      alt={`Illustration ${service.title.toLowerCase()} représentant ${
                        service.title === "Infrastructure & DevOps" 
                          ? "une infrastructure cloud moderne et des pipelines CI/CD"
                          : "des services de conseil et d'audit technique"
                      }`}
                      width={96}
                      height={96}
                      className={`relative z-10 w-full h-full object-contain ${ANIMATIONS.hover}`}
                    />
                  </div>

                  <div className={`flex-grow space-y-6 text-center sm:text-left ${ANIMATIONS.fadeUp}`}>
                    <div className="space-y-4">
                      <span className={`${COMMON_CLASSES.badge} !text-xs inline-block`}>
                        {service.subtitle}
                      </span>
                      <h3 className={`text-xl font-medium ${COMMON_CLASSES.cardHover}`}>
                        {service.title}
                      </h3>
                      <p className={`${COMMON_CLASSES.textContainer}`}>
                        {service.description}
                      </p>
                    </div>
                    <div className="space-y-4">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center gap-4 justify-center sm:justify-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                          <span className={`${COMMON_CLASSES.textContainer} text-sm`}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-white/[0.1] text-center sm:text-left">
                  <button 
                    onClick={() => setSelectedService(service)}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-[${COLORS.primary.light}] dark:hover:text-[${COLORS.primary.dark}] transition-colors"
                    aria-label={`Découvrir les détails de ${service.title}`}
                    aria-expanded={selectedService?.title === service.title}
                  >
                    Découvrir <span aria-hidden="true">→</span>
                  </button>
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
            <a 
              href="/#contact" 
              className={`${COMMON_CLASSES.primaryButton} !px-12 !py-6 text-lg group relative overflow-hidden ${ANIMATIONS.shine}`}
              aria-label="Démarrer votre projet de transformation digitale"
            >
              <span className="relative z-10">Démarrer votre projet</span>
              <span className={`${ANIMATIONS.linkHover} group-hover:translate-x-2 relative z-10`}>→</span>
            </a>
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