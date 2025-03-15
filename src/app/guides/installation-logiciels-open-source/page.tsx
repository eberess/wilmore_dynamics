import React from 'react';
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";

export default function InstallationLogicielsGuide() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-x-hidden">
        <Section
          id="guide-logiciels"
          badge="GUIDE"
          title={
            <div className="text-center max-w-[800px] mx-auto mb-16">
              <h1 className="text-[2.75rem] sm:text-[3.5rem] leading-[1.1] font-medium tracking-[-0.02em] text-blue-600 dark:text-blue-400">
                Guide d&apos;Installation de Logiciels Open Source
              </h1>
              <p className="mt-6 text-xl text-gray-600/90 dark:text-gray-300/90 max-w-[640px] mx-auto">
                Découvrez comment installer et configurer les logiciels open source essentiels
              </p>
            </div>
          }
          className="py-24"
        >
          <article className="prose prose-lg max-w-4xl mx-auto dark:prose-invert">
            <h2>Gestionnaires de Paquets</h2>
            <p>
              Les gestionnaires de paquets sont le moyen le plus simple d&apos;installer des logiciels sous Linux.
              Voici les principaux gestionnaires selon votre distribution :
            </p>
            <ul>
              <li><strong>Ubuntu/Debian</strong> : apt, apt-get</li>
              <li><strong>Fedora</strong> : dnf</li>
              <li><strong>Arch Linux</strong> : pacman</li>
            </ul>

            <h2>Logiciels Essentiels</h2>
            
            <h3>Bureautique</h3>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6">
              <h4>LibreOffice</h4>
              <p>Suite bureautique complète compatible avec Microsoft Office</p>
              <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                sudo apt install libreoffice
              </code>
            </div>

            <h3>Navigation Web</h3>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6">
              <h4>Firefox</h4>
              <p>Navigateur web rapide et respectueux de la vie privée</p>
              <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                sudo apt install firefox
              </code>
            </div>

            <h3>Multimédia</h3>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6">
              <h4>VLC</h4>
              <p>Lecteur multimédia polyvalent</p>
              <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                sudo apt install vlc
              </code>
            </div>

            <h2>Installation via Flatpak</h2>
            <p>
              Flatpak est un système moderne d&apos;installation de logiciels qui fonctionne 
              sur toutes les distributions Linux.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6">
              <h4>Installation de Flatpak</h4>
              <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                sudo apt install flatpak
              </code>
              <p className="mt-4">Ajout du dépôt Flathub :</p>
              <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
              </code>
            </div>

            <h2>Installation via Snap</h2>
            <p>
              Snap est un autre système de paquets universel, développé par Canonical.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6">
              <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                sudo apt install snapd
              </code>
            </div>

            <h2>Bonnes Pratiques</h2>
            <ul>
              <li>Toujours mettre à jour la liste des paquets avant d&apos;installer un nouveau logiciel</li>
              <li>Privilégier les dépôts officiels de votre distribution</li>
              <li>Vérifier la réputation et les avis avant d&apos;installer un logiciel</li>
              <li>Faire des sauvegardes régulières de vos données</li>
            </ul>

            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg mt-8">
              <h3 className="text-blue-600 dark:text-blue-400">Conseil de Sécurité</h3>
              <p>
                N&apos;installez que des logiciels provenant de sources fiables et vérifiez 
                toujours les signatures des paquets lorsque c&apos;est possible.
              </p>
            </div>
          </article>
        </Section>
      </main>
    </>
  );
} 