"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Image from "next/image";
import type { Application } from "../types";

type ApplicationModalProps = {
  app: Application | null;
  isOpen: boolean;
  onClose: () => void;
};

export function ApplicationModal({ app, isOpen, onClose }: ApplicationModalProps) {
  if (!app) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-[420px] bg-white dark:bg-gray-900 rounded-2xl shadow-xl flex flex-col max-h-[85vh] relative transform transition-all">
              {/* Bouton fermeture */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/[0.05] transition-colors"
                aria-label="Fermer"
              >
                <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Header avec badge catégorie */}
              <div className="p-6 border-b border-gray-200 dark:border-white/[0.1]">
                <div className="flex items-start gap-4">
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${app.bgColor}`} />
                    <Image
                      src={app.image}
                      alt={app.name}
                      fill
                      className="object-contain p-3"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex px-2 py-0.5 text-xs font-medium rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                        {app.category}
                      </span>
                    </div>
                    <Dialog.Title className="text-xl font-medium text-gray-900 dark:text-white">
                      {app.name}
                    </Dialog.Title>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                      {app.tagline}
                    </p>
                  </div>
                </div>
              </div>

              {/* Contenu scrollable */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-6">
                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {app.description}
                  </p>

                  {/* Alternatives avec une approche plus professionnelle */}
                  {app.alternatives && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                        Alternative à
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {app.alternatives.map((alt, index) => (
                          <span 
                            key={index}
                            className="
                              px-3 py-1.5 
                              text-sm 
                              bg-gradient-to-br from-gray-50 to-gray-100 dark:from-white/[0.05] dark:to-white/[0.02]
                              text-gray-700 dark:text-gray-300 
                              rounded-full 
                              border border-gray-200/50 dark:border-white/[0.05]
                              flex items-center
                            "
                          >
                            {alt}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Solution open source moderne et performante
                      </p>
                    </div>
                  )}

                  {/* Points clés avec icônes */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                      Points clés
                    </h3>
                    <div className="space-y-2">
                      {app.highlights.map((highlight, index) => (
                        <div 
                          key={index}
                          className="
                            flex items-center gap-2
                            p-2
                            rounded-lg
                            bg-gradient-to-br from-gray-50 to-gray-100 dark:from-white/[0.02] dark:to-white/[0.01]
                          "
                        >
                          <span className="text-blue-600 dark:text-blue-400">•</span>
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            {highlight.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {app.technologies?.map((tech, index) => (
                        <span 
                          key={index}
                          className="
                            px-2.5 py-1 
                            text-xs font-medium 
                            bg-blue-50 dark:bg-blue-900/20 
                            text-blue-600 dark:text-blue-400 
                            rounded-md
                            border border-blue-100 dark:border-blue-800
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              
              <div className="p-6 border-t border-gray-200 dark:border-white/[0.1] space-y-4">
                <div className="space-y-3">
                  <a
                    href="/contact#form"
                    className="
                      flex items-center justify-center 
                      w-full px-4 py-3 
                      rounded-full
                      bg-gradient-to-r from-blue-600 to-blue-500 
                      text-white text-sm font-medium 
                      hover:from-blue-700 hover:to-blue-600 
                      transition-all duration-300 
                      transform hover:scale-[1.02]
                    "
                  >
                    Déployer maintenant
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>

                  <a
                    href={`https://github.com/search?q=${app.name.toLowerCase()}&type=repositories`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center justify-center 
                      w-full px-4 py-3 
                      rounded-full
                      bg-gray-100 dark:bg-white/[0.05]
                      text-gray-700 dark:text-gray-300 
                      text-sm font-medium
                      hover:bg-gray-200 dark:hover:bg-white/[0.1]
                      transition-colors
                      gap-2
                    "
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                    </svg>
                    Documentation
                  </a>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
} 