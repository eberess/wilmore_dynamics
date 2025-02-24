'use client';

import { useState } from 'react';

const faqItems = [
  {
    question: "Quels types d'équipements acceptez-vous ?",
    answer: "Nous acceptons tous types de matériel informatique : ordinateurs, serveurs, écrans, imprimantes, périphériques, smartphones, tablettes et équipements réseaux. Qu'ils soient fonctionnels ou non."
  },
  {
    question: "Comment garantissez-vous la sécurité des données ?",
    answer: "Nous utilisons des méthodes d'effacement sécurisé conformes aux normes internationales (DoD 5220.22-M). Pour les disques non fonctionnels, nous procédons à leur destruction physique certifiée."
  },
  {
    question: "Le service de collecte est-il vraiment gratuit ?",
    answer: "Oui, la collecte est gratuite à partir d'un certain volume. Nous évaluons chaque demande et vous proposons la solution la plus adaptée à votre situation."
  },
  {
    question: "Que devient le matériel collecté ?",
    answer: "Après diagnostic, le matériel fonctionnel est reconditionné pour une seconde vie. Les équipements non réparables sont démontés et leurs composants sont recyclés dans des filières spécialisées."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="not-prose space-y-4" role="region" aria-label="Questions fréquentes">
      {faqItems.map((item, index) => (
        <div 
          key={index}
          className="rounded-lg bg-white/[0.05] border border-white/[0.1] overflow-hidden transition-all duration-300 hover:border-blue-500/30"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full p-6 text-left flex justify-between items-center"
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
            id={`faq-question-${index}`}
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {item.question}
            </h3>
            <span 
              className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
              aria-hidden="true"
            >
              ▼
            </span>
          </button>
          <div 
            id={`faq-answer-${index}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
            className={`transition-all duration-300 overflow-hidden ${
              openIndex === index ? 'max-h-48' : 'max-h-0'
            }`}
          >
            <p className="px-6 pb-6 text-gray-600 dark:text-gray-400">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
} 