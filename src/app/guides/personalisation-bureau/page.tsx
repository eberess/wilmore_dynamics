import React from 'react';
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";

export default function PersonalisationBureauGuide() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-x-hidden">
        <Section
          id="guide-personalisation"
          badge="GUIDE"
          title={
            <div className="text-center max-w-[800px] mx-auto mb-16">
              <h1 className="text-[2.75rem] sm:text-[3.5rem] leading-[1.1] font-medium tracking-[-0.02em] text-blue-600 dark:text-blue-400">
                Personnalisation de votre Environnement de Bureau
              </h1>
              <p className="mt-6 text-xl text-gray-600/90 dark:text-gray-300/90 max-w-[640px] mx-auto">
                Guide complet pour personnaliser et optimiser votre environnement de bureau Linux
              </p>
            </div>
          }
          className="py-24"
        >
          <article className="prose prose-lg max-w-4xl mx-auto dark:prose-invert">
            <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg mb-8">
              <h3 className="text-orange-600 dark:text-orange-400">Points Essentiels</h3>
              <ul className="mt-2">
                <li>Choix de l&apos;environnement de bureau</li>
                <li>Personnalisation des thèmes et icônes</li>
                <li>Configuration des raccourcis clavier</li>
                <li>Optimisation de l&apos;espace de travail</li>
                <li>Extensions et widgets</li>
              </ul>
            </div>

            <h2>Environnements de Bureau Populaires</h2>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6">
              <h3>GNOME</h3>
              <p>L&apos;environnement par défaut d&apos;Ubuntu, moderne et élégant.</p>
              <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                sudo apt install gnome-shell gnome-tweaks
              </code>

              <h3 className="mt-6">KDE Plasma</h3>
              <p>Hautement personnalisable et riche en fonctionnalités.</p>
              <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                sudo apt install kde-plasma-desktop
              </code>

              <h3 className="mt-6">XFCE</h3>
              <p>Léger et performant, idéal pour les ordinateurs moins puissants.</p>
              <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                sudo apt install xfce4
              </code>
            </div>

            <h2>Personnalisation des Thèmes</h2>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6">
              <h3>Installation des Outils de Personnalisation</h3>
              <p>Pour GNOME :</p>
              <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                sudo apt install gnome-tweaks gnome-shell-extensions
              </code>

              <p className="mt-4">Pour KDE :</p>
              <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                sudo apt install kde-style-breeze breeze-icon-theme
              </code>

              <div className="mt-6">
                <p className="mb-2">Installation de thèmes GTK :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  # Créer le dossier des thèmes<br />
                  mkdir -p ~/.themes ~/.icons
                </code>
              </div>
            </div>

            <h2>Extensions GNOME</h2>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6">
              <h3>Installation du Gestionnaire d&apos;Extensions</h3>
              <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                sudo apt install chrome-gnome-shell
              </code>
              
              <p className="mt-4">Extensions recommandées :</p>
              <ul>
                <li>Dash to Dock - Dock personnalisable</li>
                <li>System Monitor - Surveillance système</li>
                <li>Weather - Météo intégrée</li>
                <li>Clipboard Indicator - Gestionnaire de presse-papier</li>
              </ul>
            </div>

            <h2>Personnalisation des Raccourcis</h2>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6">
              <h3>Raccourcis Essentiels</h3>
              <ul>
                <li><code className="bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white px-2 py-1 rounded">Super + D</code> - Afficher le bureau</li>
                <li><code className="bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white px-2 py-1 rounded">Super + L</code> - Verrouiller l&apos;écran</li>
                <li><code className="bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white px-2 py-1 rounded">Super + Tab</code> - Changer de fenêtre</li>
                <li><code className="bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white px-2 py-1 rounded">Ctrl + Alt + T</code> - Ouvrir le terminal</li>
              </ul>

              <p className="mt-4">Configuration des raccourcis personnalisés :</p>
              <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                gsettings set org.gnome.desktop.wm.keybindings switch-applications &quot;[&apos;&lt;Alt&gt;Tab&apos;&quot;
              </code>
            </div>

            <h2>Conky - Widgets de Bureau</h2>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6">
              <h3>Installation de Conky</h3>
              <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                sudo apt install conky-all
              </code>

              <p className="mt-4">Configuration de base :</p>
              <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                # Créer le fichier de configuration<br />
                mkdir -p ~/.config/conky<br />
                cp /etc/conky/conky.conf ~/.config/conky/
              </code>
            </div>

            <h2>Optimisation des Polices</h2>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6">
              <h3>Installation de Polices Supplémentaires</h3>
              <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                sudo apt install fonts-firacode fonts-roboto fonts-noto
              </code>

              <p className="mt-4">Configuration du lissage des polices :</p>
              <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                # Activer le lissage des polices<br />
                gsettings set org.gnome.desktop.interface font-antialiasing &quot;rgba&quot;
              </code>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg mt-8">
              <h3 className="text-blue-600 dark:text-blue-400">Conseils de Personnalisation</h3>
              <ul>
                <li>Faites des sauvegardes de vos configurations avant toute modification majeure</li>
                <li>Testez différents thèmes et extensions pour trouver ce qui vous convient le mieux</li>
                <li>Organisez vos espaces de travail de manière logique</li>
                <li>Utilisez des raccourcis clavier pour augmenter votre productivité</li>
              </ul>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg mt-8">
              <h3 className="text-yellow-600 dark:text-yellow-400">Attention</h3>
              <p>
                Certaines personnalisations peuvent affecter les performances du système. 
                Surveillez l&apos;utilisation des ressources, particulièrement si vous utilisez 
                beaucoup d&apos;extensions ou de widgets.
              </p>
            </div>
          </article>
        </Section>
      </main>
    </>
  );
} 