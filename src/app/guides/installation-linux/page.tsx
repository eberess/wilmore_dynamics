import React from 'react';
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";

export default function InstallationLinuxGuide() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-x-hidden">
        <Section
          id="guide-installation"
          badge="GUIDE"
          title={
            <div className="text-center max-w-[800px] mx-auto mb-16">
              <h1 className="text-[2.75rem] sm:text-[3.5rem] leading-[1.1] font-medium tracking-[-0.02em] text-blue-600 dark:text-blue-400">
                Guide d&apos;Installation de Linux
              </h1>
              <p className="mt-6 text-xl text-gray-600/90 dark:text-gray-300/90 max-w-[640px] mx-auto">
                Un guide complet pour installer Linux sur votre ordinateur
              </p>
            </div>
          }
          className="py-24"
        >
          <article className="prose prose-lg max-w-4xl mx-auto dark:prose-invert">
            <h2>Prérequis</h2>
            <ul>
              <li>Un ordinateur avec au moins 4 Go de RAM</li>
              <li>20 Go d&apos;espace disque libre</li>
              <li>Une clé USB de 8 Go minimum</li>
            </ul>

            <h2>Étapes d&apos;installation</h2>
            
            <h3>1. Téléchargement de l&apos;image ISO</h3>
            <p>
              Commencez par télécharger l&apos;image ISO de la distribution Linux de votre choix. 
              Nous recommandons Ubuntu pour les débutants.
            </p>

            <h3>2. Création de la clé USB bootable</h3>
            <p>
              Utilisez un logiciel comme Balena Etcher pour créer une clé USB bootable 
              avec l&apos;image ISO téléchargée.
            </p>

            <h3>3. Configuration du BIOS/UEFI</h3>
            <p>
              Redémarrez votre ordinateur et accédez au BIOS/UEFI pour modifier 
              l&apos;ordre de démarrage et démarrer sur la clé USB.
            </p>

            <h3>4. Installation du système</h3>
            <p>
              Suivez l&apos;assistant d&apos;installation en sélectionnant :
            </p>
            <ul>
              <li>La langue du système</li>
              <li>La disposition du clavier</li>
              <li>Le type d&apos;installation (complète ou aux côtés de Windows)</li>
              <li>Le fuseau horaire</li>
              <li>Les informations utilisateur</li>
            </ul>

            <h2>Après l&apos;installation</h2>
            <p>
              Une fois l&apos;installation terminée, nous vous recommandons de :
            </p>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6">
              <h4>Mise à jour du système</h4>
              <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                sudo apt update && sudo apt upgrade
              </code>

              <h4 className="mt-4">Installation des pilotes</h4>
              <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                ubuntu-drivers devices
              </code>
              <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono mt-2">
                sudo ubuntu-drivers autoinstall
              </code>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg mt-8">
              <h3 className="text-blue-600 dark:text-blue-400">Besoin d&apos;aide ?</h3>
              <p>
                Si vous rencontrez des difficultés pendant l&apos;installation, 
                n&apos;hésitez pas à consulter notre guide de dépannage ou à 
                contacter notre équipe de support.
              </p>
            </div>
          </article>
        </Section>
      </main>
    </>
  );
} 