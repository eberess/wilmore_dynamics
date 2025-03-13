'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "Pourquoi choisir Linux plutôt que Windows ?",
    answer: "Linux offre de nombreux avantages : gratuité, sécurité renforcée, performances optimales même sur ancien matériel, et personnalisation totale. De plus, la communauté active assure un support continu."
  },
  {
    question: "La migration est-elle compliquée ?",
    answer: "Avec un accompagnement professionnel, la migration est progressive et maîtrisée. Nous assurons la formation des utilisateurs et le support technique pour une transition en douceur."
  },
  {
    question: "Mes logiciels seront-ils compatibles ?",
    answer: "La plupart des logiciels ont des équivalents Linux performants. Pour les cas spécifiques, des solutions de compatibilité existent. Nous réalisons un audit complet pour identifier les meilleures alternatives."
  },
  {
    question: "Quel est le coût réel d'une migration ?",
    answer: "Le coût dépend de votre infrastructure, mais Linux étant gratuit, vous économisez sur les licences. L'investissement principal concerne l'accompagnement et la formation, rapidement rentabilisés."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto divide-y divide-gray-200 dark:divide-gray-700">
      {faqs.map((faq, index) => (
        <div key={index} className="py-6">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex justify-between items-start w-full text-left"
          >
            <span className="text-lg font-medium text-gray-900 dark:text-white">
              {faq.question}
            </span>
            <span className="ml-6 flex-shrink-0">
              <svg
                className={`w-6 h-6 transform ${openIndex === index ? 'rotate-180' : ''} 
                           text-gray-400 transition-transform duration-300`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
          <div
            className={`mt-2 transition-all duration-300 overflow-hidden
                       ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <p className="text-gray-600 dark:text-gray-400">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
} 