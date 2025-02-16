'use client';

import { Dialog } from '@headlessui/react';
import { App } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface AppModalProps {
  app: App | null;
  onClose: () => void;
}

export function AppModal({ app, onClose }: AppModalProps) {
  if (!app) return null;

  return (
    <AnimatePresence>
      <Dialog 
        open={true} 
        onClose={onClose}
        className="relative z-50"
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
        
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="relative w-full max-w-3xl overflow-hidden">
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
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.2 }}
                    className="relative w-24 h-24 rounded-[24px] overflow-hidden bg-gray-100/80 dark:bg-white/[0.02] border border-gray-200/60 dark:border-gray-800/60 flex-shrink-0"
                  >
                    <Image
                      src={app.logo}
                      alt={app.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  
                  <div className="flex-1 min-w-0">
                    <Dialog.Title className="text-3xl font-medium mb-3">
                      {app.name}
                    </Dialog.Title>
                    <span className="inline-block px-4 py-1.5 text-sm rounded-full bg-gray-100/60 dark:bg-white/[0.02] text-gray-600 dark:text-gray-400">
                      {app.category}
                    </span>
                  </div>

                  <button
                    onClick={onClose}
                    className="absolute top-6 md:top-10 right-6 md:right-10 p-2 rounded-full text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M6 18L18 6M6 6l12 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>

                {/* Contenu */}
                <div className="space-y-8">
                  <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                    {app.longDescription}
                  </p>

                  {app.highlights && (
                    <div>
                      <h3 className="text-lg font-medium mb-4">Points clés</h3>
                      <ul className="grid grid-cols-1 gap-3">
                        {app.highlights.map((highlight, index) => (
                          <li 
                            key={index}
                            className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                          >
                            <svg className="w-5 h-5 mt-0.5 text-[#1a73e8] dark:text-[#8ab4f8]" viewBox="0 0 20 20" fill="currentColor">
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
                  >
                    <span>Site officiel</span>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </a>

                  <a
                    href="/#contact"
                    className="px-8 py-3 rounded-full bg-[#1a73e8] hover:opacity-90 text-white transition-opacity"
                  >
                    Nous contacter
                  </a>
                </div>
              </div>
            </motion.div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </AnimatePresence>
  );
} 