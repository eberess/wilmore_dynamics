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

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => (
        <div 
          key={index} 
          className="rounded-lg bg-white dark:bg-gray-800 shadow-lg border border-gray-300 dark:border-gray-600 overflow-hidden"
        >
          <button
            onClick={() => toggleQuestion(index)}
            className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <h3 className="font-bold text-xl text-blue-600 dark:text-blue-400">{item.question}</h3>
            <span className={`transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
          <div 
            className={`
              transition-all duration-200 ease-in-out
              ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
              overflow-hidden
            `}
          >
            <p className="p-6 text-gray-700 dark:text-gray-300">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ; 