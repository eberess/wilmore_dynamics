'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Comment se déroule un projet avec Wilmore Dynamics ?",
      answer: "Notre processus se déroule en plusieurs étapes : une phase de découverte pour comprendre vos besoins, une proposition détaillée avec planning et budget, des sprints de développement avec des démonstrations régulières, et un accompagnement post-déploiement. Notre approche agile permet des ajustements continus pour garantir votre satisfaction."
    },
    {
      question: "Quelles technologies utilisez-vous ?",
      answer: "Nous utilisons des technologies modernes et éprouvées : Kubernetes pour l'orchestration de conteneurs, AWS/GCP/Azure pour le cloud, React et Next.js pour le développement frontend, Node.js et Go pour le backend. Notre stack est choisie pour sa robustesse, sa scalabilité et sa maintenabilité."
    },
    {
      question: "Proposez-vous un accompagnement après la mise en production ?",
      answer: "Oui, nous proposons plusieurs niveaux de support et maintenance : monitoring 24/7, mises à jour de sécurité, optimisations continues, formation des équipes, et support technique dédié. Nous assurons également la documentation complète de vos solutions."
    },
    {
      question: "Quels types de projets réalisez-vous ?",
      answer: "Nous intervenons sur différents types de projets : modernisation d'infrastructures legacy, mise en place de pipelines CI/CD, développement d'applications cloud natives, automatisation DevOps, migration vers le cloud, et conseil en architecture logicielle."
    },
    {
      question: "Comment assurez-vous la sécurité des projets ?",
      answer: "La sécurité est intégrée à chaque étape : audit régulier des dépendances, tests de pénétration, chiffrement des données, mise en place de politiques IAM strictes, conformité RGPD, et surveillance continue des vulnérabilités."
    },
    {
      question: "Quel est votre processus de facturation ?",
      answer: "Nous proposons différents modèles de facturation adaptés à vos besoins : forfait projet, régie, ou contrat de maintenance. Les paiements sont échelonnés selon les jalons du projet, avec une transparence totale sur les coûts."
    }
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="rounded-2xl bg-white dark:bg-white/[0.02] border border-gray-200/50 dark:border-white/[0.1] overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full p-6 text-left flex items-center justify-between gap-4 group"
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <h3 
              id={`faq-question-${index}`} 
              className="text-lg font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
            >
              {faq.question}
            </h3>
            <div className={`
              shrink-0 p-2 rounded-xl bg-gray-50/80 dark:bg-white/[0.02]
              text-gray-400 dark:text-gray-500
              group-hover:bg-blue-50 dark:group-hover:bg-blue-500/[0.08]
              group-hover:text-blue-600 dark:group-hover:text-blue-400
              transition-all duration-200
              ${openIndex === index ? 'rotate-180 !bg-blue-50 dark:!bg-blue-500/[0.08] !text-blue-600 dark:!text-blue-400' : ''}
            `}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-200/50 dark:border-white/[0.1] pt-4">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
} 