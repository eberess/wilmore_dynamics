"use client";

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import type { ServiceProps } from '@/app/services/page';

type ServiceModalProps = {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceProps | null;
  cardRef: React.MutableRefObject<(HTMLDivElement | null)[]>;
  cardIndex: number;
};

export default function ServiceModal({ isOpen, onClose, service, cardRef, cardIndex }: ServiceModalProps) {
  if (!service) return null;

  const card = cardRef.current[cardIndex];
  const cardRect = card?.getBoundingClientRect();

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>

        <div className="fixed inset-0">
          <div className="flex min-h-full items-start justify-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom={`opacity-0 translate-x-[${cardRect?.left}px] translate-y-[${cardRect?.top}px] scale-[0.95]`}
              enterTo="opacity-100 translate-x-0 translate-y-0 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-x-0 translate-y-0 scale-100"
              leaveTo={`opacity-0 translate-x-[${cardRect?.left}px] translate-y-[${cardRect?.top}px] scale-[0.95]`}
            >
              <Dialog.Panel 
                style={{
                  position: 'absolute',
                  top: cardRect?.top,
                  left: cardRect?.left,
                  width: cardRect?.width,
                  height: cardRect?.height
                }}
                className="
                  transform
                  overflow-hidden
                  rounded-[32px]
                  bg-white/[0.98] 
                  dark:bg-gray-900/[0.98]
                  p-8 md:p-12
                  text-left
                  shadow-2xl
                  transition-all
                  duration-300
                "
              >
                <button 
                  onClick={onClose}
                  className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <span className="sr-only">Fermer</span>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="space-y-6">
                  <Dialog.Title className="
                    text-[1.75rem]
                    leading-[1.3]
                    font-medium
                    tracking-[-0.01em]
                    text-gray-900 dark:text-white
                  ">
                    {service.title}
                  </Dialog.Title>
                  <div className="
                    prose 
                    dark:prose-invert 
                    max-w-none
                    prose-p:text-gray-600/85 
                    dark:prose-p:text-gray-300/85
                    prose-p:leading-[1.6]
                    prose-p:text-[1.0625rem]
                  ">
                    {service.modalContent.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
} 