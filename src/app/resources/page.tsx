import React from 'react';
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";

export default function Resources() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-x-hidden">
        <Section
          id="resources"
          badge="RESSOURCES"
          title={
            <div className="text-center max-w-[800px] mx-auto mb-16">
              <h1 className="text-[2.75rem] sm:text-[3.5rem] leading-[1.1] font-medium tracking-[-0.02em] text-blue-600 dark:text-blue-400">
                Ressources
              </h1>
              <p className="mt-6 text-xl text-gray-600/90 dark:text-gray-300/90 max-w-[640px] mx-auto">
                Explorez nos guides et outils pour faciliter votre passage vers des solutions open source.
              </p>
            </div>
          }
          className="py-24"
        >
          <div className="text-center pb-16">
            <p className="text-lg">Voici quelques ressources utiles :</p>
          </div>
          <section>
          <div className="max-w-4xl mx-auto">
            <ul className="list-disc pl-6">
              <li className="mb-4">
                <h3 className="text-xl font-semibold">
                  <a href="/guides/kit-experience-linux" className="text-blue-600 hover:underline" aria-label="Lire le guide sur le Kit d'Expérience Employé">Linux au Travail : Le Kit d&apos;Expérience Employé</a>
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Un guide complet pour vous aider à passer à Linux en toute simplicité.
                </p>
              </li>
              <li className="mb-4">
                <h3 className="text-xl font-semibold">
                  <a href="/guides/installation-logiciels-open-source" className="text-blue-600 hover:underline" aria-label="Lire le guide sur l'installation de logiciels open source">Guide d&apos;Installation de Logiciels Open Source</a>
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Un guide pour aider les utilisateurs à installer des logiciels open source populaires sur Linux.
                </p>
              </li>
              <li className="mb-4">
                <h3 className="text-xl font-semibold">
                <a href="/guides/securite-linux" className="text-blue-600 hover:underline" aria-label="Lire le guide sur la sécurité Linux">Sécurité sur Linux : Bonnes Pratiques</a>
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Un guide sur les meilleures pratiques de sécurité pour les utilisateurs de Linux.
                </p>
              </li>
              <li className="mb-4">
                <h3 className="text-xl font-semibold">
                  <a href="/guides/personalisation-bureau" className="text-blue-600 hover:underline" aria-label="Lire le guide sur la personnalisation de l'environnement de bureau">Personnalisation de votre Environnement de Bureau</a>
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Un guide pour personnaliser l&apos;interface utilisateur de Linux selon vos préférences.
                </p>
              </li>
              <li className="mb-4">
                <h3 className="text-xl font-semibold">
                  <a href="/guides/depannage-linux" className="text-blue-600 hover:underline" aria-label="Lire le guide sur le dépannage commun sur Linux">Guide de Dépannage Commun sur Linux</a>
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Un guide pour aider les utilisateurs à résoudre les problèmes courants rencontrés sur Linux.
                </p>
              </li>
              <li className="mb-4">
                <h3 className="text-xl font-semibold">
                  <a href="/guides/commandes-de-base-linux" className="text-blue-600 hover:underline" aria-label="Lire le guide sur les commandes de base de Linux">Introduction aux Commandes de Base de Linux</a>
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Un guide pour familiariser les utilisateurs avec les commandes de base du terminal Linux.
                </p>
              </li>
              <li className="mb-4">
                <h3 className="text-xl font-semibold">
                  <a href="/guides/gestion-fichiers-linux" className="text-blue-600 hover:underline" aria-label="Lire le guide sur la gestion des fichiers et dossiers sur Linux">Gestion des Fichiers et Dossiers sur Linux</a>
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Un guide sur la gestion efficace des fichiers et dossiers dans l&apos;environnement Linux.
                </p>
              </li>
            </ul>
          </div>
          </section>
        </Section>
      </main>
    </>
  );
} 