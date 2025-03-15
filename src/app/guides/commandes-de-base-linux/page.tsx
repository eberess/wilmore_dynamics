import React from 'react';
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";

export default function CommandesBaseLinuxGuide() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-x-hidden">
        <Section
          id="guide-commandes"
          badge="GUIDE"
          title={
            <div className="text-center max-w-[800px] mx-auto mb-16">
              <h1 className="text-[2.75rem] sm:text-[3.5rem] leading-[1.1] font-medium tracking-[-0.02em] text-blue-600 dark:text-blue-400">
                Introduction aux Commandes de Base de Linux
              </h1>
              <p className="mt-6 text-xl text-gray-600/90 dark:text-gray-300/90 max-w-[640px] mx-auto">
                Guide essentiel pour maîtriser les commandes fondamentales du terminal Linux
              </p>
            </div>
          }
          className="py-24"
        >
          <article className="prose prose-lg max-w-4xl mx-auto dark:prose-invert">
            <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg mb-8">
              <h3 className="text-orange-600 dark:text-orange-400">Points Essentiels</h3>
              <ul className="mt-2">
                <li>Navigation dans les répertoires</li>
                <li>Gestion des fichiers et dossiers</li>
                <li>Manipulation du texte</li>
                <li>Gestion des processus</li>
                <li>Gestion des utilisateurs</li>
              </ul>
            </div>

            <h2>Navigation dans le Système de Fichiers</h2>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6">
              <h3>Commandes de Base</h3>
              
              <div className="mb-4">
                <p className="mb-2">Afficher le répertoire courant :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  pwd
                </code>
              </div>

              <div className="mb-4">
                <p className="mb-2">Lister le contenu d&apos;un répertoire :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  ls          # Liste simple<br />
                  ls -l       # Liste détaillée<br />
                  ls -la      # Inclut les fichiers cachés<br />
                  ls -lh      # Tailles lisibles
                </code>
              </div>

              <div className="mb-4">
                <p className="mb-2">Changer de répertoire :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  cd /chemin/vers/dossier  # Aller vers un dossier<br />
                  cd ..                    # Remonter d&apos;un niveau<br />
                  cd ~                     # Aller au dossier personnel<br />
                  cd -                     # Retourner au dossier précédent
                </code>
              </div>
            </div>

            <h2>Gestion des Fichiers et Dossiers</h2>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6">
              <div className="mb-4">
                <p className="mb-2">Créer des dossiers :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  mkdir dossier            # Créer un dossier<br />
                  mkdir -p a/b/c          # Créer une arborescence
                </code>
              </div>

              <div className="mb-4">
                <p className="mb-2">Créer et éditer des fichiers :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  touch fichier.txt        # Créer un fichier vide<br />
                  nano fichier.txt         # Éditer avec Nano<br />
                  vim fichier.txt          # Éditer avec Vim
                </code>
              </div>

              <div className="mb-4">
                <p className="mb-2">Copier, déplacer et supprimer :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  cp source destination    # Copier<br />
                  mv ancien nouveau        # Déplacer/renommer<br />
                  rm fichier              # Supprimer un fichier<br />
                  rm -r dossier           # Supprimer un dossier
                </code>
              </div>
            </div>

            <h2>Manipulation du Texte</h2>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6">
              <div className="mb-4">
                <p className="mb-2">Afficher le contenu des fichiers :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  cat fichier             # Afficher tout le contenu<br />
                  less fichier            # Afficher page par page<br />
                  head fichier            # Afficher les 10 premières lignes<br />
                  tail fichier            # Afficher les 10 dernières lignes
                </code>
              </div>

              <div className="mb-4">
                <p className="mb-2">Rechercher dans les fichiers :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  grep motif fichier      # Rechercher un motif<br />
                  grep -r motif dossier   # Recherche récursive<br />
                  find . -name &quot;*.txt&quot;    # Rechercher des fichiers
                </code>
              </div>
            </div>

            <h2>Gestion des Processus</h2>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6">
              <div className="mb-4">
                <p className="mb-2">Afficher les processus :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  ps                      # Processus de l&apos;utilisateur<br />
                  ps aux                  # Tous les processus<br />
                  top                     # Moniteur de processus
                </code>
              </div>

              <div className="mb-4">
                <p className="mb-2">Contrôler les processus :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  kill PID                # Arrêter un processus<br />
                  killall nom             # Arrêter par nom<br />
                  Ctrl + C                # Arrêter le processus en cours<br />
                  Ctrl + Z                # Mettre en pause
                </code>
              </div>
            </div>

            <h2>Gestion des Utilisateurs</h2>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6">
              <div className="mb-4">
                <p className="mb-2">Commandes utilisateur :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  whoami                  # Afficher son nom d&apos;utilisateur<br />
                  id                      # Afficher les IDs<br />
                  su - utilisateur        # Changer d&apos;utilisateur<br />
                  sudo commande           # Exécuter en tant que root
                </code>
              </div>
            </div>

            <h2>Informations Système</h2>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6">
              <div className="mb-4">
                <p className="mb-2">Commandes système :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  uname -a                # Informations système<br />
                  df -h                   # Espace disque<br />
                  free -h                 # Mémoire disponible<br />
                  uptime                  # Temps de fonctionnement
                </code>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg mt-8">
              <h3 className="text-blue-600 dark:text-blue-400">Conseils d&apos;Utilisation</h3>
              <ul>
                <li>Utilisez la touche Tab pour l&apos;autocomplétion des commandes et chemins</li>
                <li>Utilisez les flèches haut/bas pour naviguer dans l&apos;historique des commandes</li>
                <li>Ajoutez --help après une commande pour voir son aide</li>
                <li>Utilisez man commande pour voir le manuel détaillé</li>
              </ul>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg mt-8">
              <h3 className="text-yellow-600 dark:text-yellow-400">Attention</h3>
              <p>
                Soyez particulièrement prudent avec les commandes de suppression (rm) 
                et les commandes utilisant sudo. Une erreur peut avoir des conséquences 
                importantes sur votre système.
              </p>
            </div>
          </article>
        </Section>
      </main>
    </>
  );
} 