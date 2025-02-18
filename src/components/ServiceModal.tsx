"use client";

import { Dialog } from '@headlessui/react';
import { COMMON_CLASSES } from '@/constants/styles';
import type { ServiceProps } from '@/app/services/page';

type ServiceModalProps = {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceProps | null;
  cardRef: React.RefObject<(HTMLDivElement | null)[]>;
  cardIndex: number;
};

const ServiceModal = ({ isOpen, onClose, service, cardRef, cardIndex }: ServiceModalProps) => {
  if (!service || !cardRef.current || cardIndex === -1) return null;

  const currentCard = cardRef.current[cardIndex];
  if (!currentCard) return null;

  const rect = currentCard.getBoundingClientRect();
  const isMainCard = cardIndex === 0;

  return (
    <Dialog 
      open={isOpen} 
      onClose={onClose} 
      className="relative z-50"
      aria-labelledby={`modal-title-${service.title}`}
    >
      <div 
        className="fixed bg-[#1d1d1f]/[0.98] transition-all duration-300 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        style={{
          top: `${rect.top}px`,
          left: `${rect.left}px`,
          width: `${rect.width}px`,
          height: `${rect.height}px`,
          borderRadius: isMainCard ? '24px' : '32px',
        }}
      >
        <div className="p-8 text-white h-full flex flex-col">
          <div className="space-y-6">
            <span className={COMMON_CLASSES.badge} role="text">
              {service.subtitle}
            </span>
            <h3 
              id={`modal-title-${service.title}`}
              className="text-2xl font-medium"
            >
              {service.title}
            </h3>
            <div className="space-y-4 text-gray-300" role="article">
              {service.modalContent.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="mt-auto pt-8">
            <button
              onClick={onClose}
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