'use client';

import { Dialog } from '@headlessui/react';
import { App } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useFocusTrap } from '@/hooks/useFocusTrap';

interface AppModalProps {
  app: App | null;
  onClose: () => void;
}

export function AppModal({ app, onClose }: AppModalProps) {
  if (!app) return null;

  const initialFocusRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  useFocusTrap(modalRef, app !== null);

  // Gestion du focus et de la touche Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      <Dialog 
        open={true} 
        onClose={onClose}
        className="relative z-50"
        initialFocus={initialFocusRef}
      >
        {/* Overlay */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm"
          aria-hidden="true"
          onClick={onClose}
        />
        
        <div 
          className="fixed inset-0 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Dialog.Panel 
            ref={modalRef}
            className="relative w-full max-w-3xl overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="bg-background backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 dark:border-white/[0.05]"
            >
              <div className="p-6 md:p-10">
                {/* En-tête */}
                <div className="flex items-start gap-8 mb-12">
                  <div 
                    className="relative w-24 h-24 rounded-[24px] overflow-hidden bg-gray-100/80 dark:bg-white/[0.02] border border-gray-200 dark:border-gray-800/60 flex-shrink-0"
                    aria-hidden="true"
                  >
                    <Image
                      src={app.logo}
                      alt=""
                      fill
                      className={`object-cover ${app.logoBackground ? 'bg-white p-2' : ''}`}
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <Dialog.Title 
                      id="modal-title"
                      className="text-3xl font-medium mb-3"
                    >
                      {app.name}
                    </Dialog.Title>
                    <span 
                      className="inline-block px-4 py-1.5 text-sm rounded-full bg-gray-100/60 dark:bg-white/[0.02] text-gray-600 dark:text-gray-400"
                      role="text"
                    >
                      {app.category}
                    </span>
                  </div>

                  <button
                    ref={initialFocusRef}
                    onClick={onClose}
                    className="absolute top-6 md:top-10 right-6 md:right-10 p-2 rounded-full text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
                    aria-label="Fermer la fenêtre"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                      <path d="M6 18L18 6M6 6l12 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>

                {/* Contenu */}
                <div className="space-y-8">
                  <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                    {app.longDescription}
                  </p>

                  {/* Alternatives */}
                  <div role="region" aria-label="Alternatives propriétaires">
                    <h3 className="text-lg font-medium mb-4">Alternatives propriétaires</h3>
                    <div className="flex flex-wrap gap-2">
                      {app.alternatives.map((alternative, index) => (
                        <span 
                          key={`alt-${index}-${alternative}`}
                          className="inline-block px-4 py-2 rounded-lg bg-gray-100/60 dark:bg-white/[0.02] text-gray-600 dark:text-gray-400"
                          role="listitem"
                        >
                          {alternative}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Points clés */}
                  {app.highlights && (
                    <div role="region" aria-label="Points clés">
                      <h3 className="text-lg font-medium mb-4">Points clés</h3>
                      <ul className="grid grid-cols-1 gap-3" role="list">
                        {app.highlights.map((highlight, index) => (
                          <li 
                            key={`highlight-${index}-${highlight.slice(0, 10)}`}
                            className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                          >
                            <svg className="w-5 h-5 mt-0.5 text-[#1a73e8] dark:text-[#8ab4f8]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-12 pt-10 border-t border-gray-200/40 dark:border-white/[0.03]">
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#1a73e8] dark:text-[#8ab4f8] hover:opacity-70 transition-opacity"
                    aria-label={`Visiter le site officiel de ${app.name}`}
                  >
                    <span>Site officiel</span>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </a>

                  <a
                    href="/#contact"
                    className="px-8 py-3 rounded-full bg-[#1a73e8] hover:opacity-90 text-white transition-opacity"
                    aria-label="Nous contacter à propos de cette application"
                    role="button"
                  >
                    Nous contacter
                  </a>
                </div>

                {/* Description pour les lecteurs d'écran */}
                <p id="modal-description" className="sr-only">
                  Détails de l'application {app.name}, {app.description}
                </p>

                {/* Informations du projet avec meilleure accessibilité */}
                <div 
                  className="mt-8 flex flex-wrap gap-4"
                  role="region" 
                  aria-label="Informations du projet"
                >
                  <a
                    href={`https://github.com/${app.projectInfo.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100/60 dark:bg-white/[0.02] text-gray-600 dark:text-gray-400 hover:bg-gray-200/60 dark:hover:bg-white/[0.04] transition-colors"
                    aria-label={`Voir le code source de ${app.name} sur GitHub`}
                  >
                    <svg className="w-5 h-5" aria-hidden="true">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    <span>GitHub</span>
                  </a>

                  <div 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100/60 dark:bg-white/[0.02] text-gray-600 dark:text-gray-400"
                    role="status"
                    aria-label="Licence du projet"
                  >
                    <svg className="w-5 h-5" aria-hidden="true">
                      <path d="M3 6l9 4 9-4M3 12l9 4 9-4M3 18l9 4 9-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{app.projectInfo.license}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </Dialog.Panel>
        </div>
      </Dialog>
      <div 
        role="status" 
        aria-live="polite" 
        className="sr-only"
      >
        {app ? `Modal ouvert : ${app.name}` : 'Modal fermé'}
      </div>
      <div className="sr-only">
        Utilisez la touche Tab pour naviguer et Échap pour fermer la fenêtre
      </div>
    </AnimatePresence>
  );
} 