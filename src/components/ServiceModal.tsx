"use client";

import { Dialog } from '@headlessui/react';
import { COMMON_CLASSES, ANIMATIONS } from '@/constants/styles';
import type { ServiceProps } from '@/app/services/page';
import { useEffect } from 'react';

type ServiceModalProps = {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceProps | null;
  cardRef: React.RefObject<(HTMLDivElement | null)[]>;
  cardIndex: number;
};

const ServiceModal = ({ isOpen, onClose, service, cardRef, cardIndex }: ServiceModalProps) => {
  // Gérer le retour haptique sur mobile
  const handleClose = () => {
    if ('vibrate' in navigator) {
      navigator.vibrate(10); // Légère vibration de 10ms
    }
    onClose();
  };

  // Gérer la fermeture avec Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  if (!service || !cardRef.current || cardIndex === -1) return null;

  const currentCard = cardRef.current[cardIndex];
  if (!currentCard) return null;

  const rect = currentCard.getBoundingClientRect();
  const isMainCard = cardIndex === 0;

  return (
    <Dialog 
      open={isOpen} 
      onClose={handleClose}
      className="relative z-50"
      aria-labelledby={`modal-title-${service.title}`}
    >
      <div 
        className={`
          fixed bg-[#1d1d1f]/[0.98] overflow-y-auto max-h-[80vh]
          transition-all duration-300 ease-out
          ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
        `}
        role="dialog"
        aria-modal="true"
        style={{
          top: `${Math.max(rect.top, window.innerHeight * 0.1)}px`,
          left: `${rect.left}px`,
          width: `${rect.width}px`,
          minHeight: `${rect.height}px`,
          borderRadius: isMainCard ? '24px' : '32px',
        }}
      >
        <div className={`
          p-8 text-white h-full flex flex-col
          transition-transform duration-200 ease-out
          ${isOpen ? 'translate-y-0' : 'translate-y-4'}
        `}>
          <div className="space-y-6">
            <span className={`${COMMON_CLASSES.badge} ${ANIMATIONS.fadeUp}`} role="text">
              {service.subtitle}
            </span>
            <h3 
              id={`modal-title-${service.title}`}
              className={`text-2xl font-medium ${ANIMATIONS.fadeUp}`}
            >
              {service.title}
            </h3>
            <div className={`space-y-4 text-gray-300 ${ANIMATIONS.fadeUp}`} role="article">
              {service.modalContent.split('\n\n').map((paragraph, index) => (
                <p key={index} className="transition-all duration-200 delay-100">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className={`mt-auto pt-8 ${ANIMATIONS.fadeUp}`}>
            <button
              onClick={handleClose}
              className="text-white/80 hover:text-white transition-colors duration-200"
              aria-label={`Fermer les détails de ${service.title}`}
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ServiceModal; 