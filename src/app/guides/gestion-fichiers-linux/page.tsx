import React from 'react';
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";

export default function GestionFichiersGuide() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-x-hidden">
        <Section
          id="guide-fichiers"
          badge="GUIDE"
          title={
            <div className="text-center max-w-[800px] mx-auto mb-16">
              <h1 className="text-[2.75rem] sm:text-[3.5rem] leading-[1.1] font-medium tracking-[-0.02em] text-blue-600 dark:text-blue-400">
                Gestion des Fichiers et Dossiers sur Linux
              </h1>
              <p className="mt-6 text-xl text-gray-600/90 dark:text-gray-300/90 max-w-[640px] mx-auto">
                Guide complet pour maîtriser la gestion des fichiers et dossiers sous Linux
              </p>
            </div>
          }
          className="py-24"
        >
          <article className="prose prose-lg max-w-4xl mx-auto dark:prose-invert">
            <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg mb-8">
              <h3 className="text-orange-600 dark:text-orange-400">Points Essentiels</h3>
              <ul className="mt-2">
                <li>Structure des répertoires Linux</li>
                <li>Gestion avancée des fichiers</li>
                <li>Permissions et propriété</li>
                <li>Liens symboliques et physiques</li>
                <li>Recherche et organisation</li>
                <li>Compression et archivage</li>
              </ul>
            </div>

            <h2>Structure des Répertoires Linux</h2>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6">
              <h3>Répertoires Principaux</h3>
              <ul>
                <li><code className="bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white px-2 py-1 rounded">/</code> - Racine du système</li>
                <li><code className="bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white px-2 py-1 rounded">/home</code> - Répertoires personnels des utilisateurs</li>
                <li><code className="bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white px-2 py-1 rounded">/etc</code> - Fichiers de configuration</li>
                <li><code className="bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white px-2 py-1 rounded">/usr</code> - Programmes et bibliothèques</li>
                <li><code className="bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white px-2 py-1 rounded">/var</code> - Données variables (logs, cache)</li>
                <li><code className="bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white px-2 py-1 rounded">/tmp</code> - Fichiers temporaires</li>
              </ul>
            </div>

            <h2>Gestion Avancée des Fichiers</h2>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6">
              <div className="mb-4">
                <p className="mb-2">Copie récursive de dossiers :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  cp -r source destination     # Copie récursive<br />
                  cp -a source destination     # Préserve les attributs
                </code>
              </div>

              <div className="mb-4">
                <p className="mb-2">Déplacement et renommage avancé :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  mv -i source destination     # Demande confirmation<br />
                  mv -n source destination     # Ne pas écraser
                </code>
              </div>

              <div className="mb-4">
                <p className="mb-2">Suppression sécurisée :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  rm -i fichier               # Demande confirmation<br />
                  rm -rf dossier              # Suppression récursive forcée
                </code>
              </div>
            </div>

            <h2>Permissions et Propriété</h2>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6">
              <div className="mb-4">
                <p className="mb-2">Comprendre les permissions :</p>
                <pre className="bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  drwxr-xr-x    # Structure type
                  |_________    # d = dossier, - = fichier
                   |__|__|__   # rwx = user, group, others
                </pre>
              </div>

              <div className="mb-4">
                <p className="mb-2">Modifier les permissions :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  chmod 755 fichier           # Mode octal<br />
                  chmod u+x fichier           # Mode symbolique<br />
                  chmod -R 644 dossier        # Récursif
                </code>
              </div>

              <div className="mb-4">
                <p className="mb-2">Changer le propriétaire :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  chown user:group fichier    # Changer user et groupe<br />
                  chown -R user dossier       # Récursif
                </code>
              </div>
            </div>

            <h2>Liens Symboliques et Physiques</h2>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6">
              <div className="mb-4">
                <p className="mb-2">Créer des liens symboliques :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  ln -s source lien           # Créer un lien symbolique<br />
                  ln source lien              # Créer un lien physique
                </code>
              </div>

              <div className="mb-4">
                <p className="mb-2">Gérer les liens :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  readlink lien               # Lire la destination<br />
                  unlink lien                 # Supprimer un lien
                </code>
              </div>
            </div>

            <h2>Recherche et Organisation</h2>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6">
              <div className="mb-4">
                <p className="mb-2">Recherche avancée avec find :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  find . -type f -name &quot;*.txt&quot;     # Par nom<br />
                  find . -mtime -7                 # Modifiés depuis 7 jours<br />
                  find . -size +100M               # Plus de 100 Mo
                </code>
              </div>

              <div className="mb-4">
                <p className="mb-2">Recherche avec locate :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  sudo updatedb                    # Mettre à jour la base<br />
                  locate fichier                   # Rechercher rapidement
                </code>
              </div>
            </div>

            <h2>Compression et Archivage</h2>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6">
              <div className="mb-4">
                <p className="mb-2">Compression avec tar :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  tar -czf archive.tar.gz dossier  # Créer archive gzip<br />
                  tar -xzf archive.tar.gz          # Extraire archive gzip<br />
                  tar -cjf archive.tar.bz2 dossier # Créer archive bzip2
                </code>
              </div>

              <div className="mb-4">
                <p className="mb-2">Autres formats de compression :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  zip -r archive.zip dossier       # Créer archive zip<br />
                  unzip archive.zip                # Extraire archive zip<br />
                  7z a archive.7z dossier          # Créer archive 7zip
                </code>
              </div>
            </div>

            <h2>Outils de Synchronisation</h2>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6">
              <div className="mb-4">
                <p className="mb-2">Synchronisation avec rsync :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  rsync -av source destination     # Synchronisation locale<br />
                  rsync -avz source user@host:dest # Synchronisation distante
                </code>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg mt-8">
              <h3 className="text-blue-600 dark:text-blue-400">Bonnes Pratiques</h3>
              <ul>
                <li>Organisez vos fichiers de manière logique et cohérente</li>
                <li>Utilisez des noms de fichiers descriptifs et évitez les espaces</li>
                <li>Faites des sauvegardes régulières de vos données importantes</li>
                <li>Vérifiez toujours les permissions avant de modifier des fichiers système</li>
                <li>Utilisez la complétion automatique pour éviter les erreurs de frappe</li>
              </ul>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg mt-8">
              <h3 className="text-yellow-600 dark:text-yellow-400">Attention</h3>
              <p>
                Les commandes de suppression et de modification sont irréversibles. 
                Soyez particulièrement vigilant avec les commandes comme rm -rf et 
                vérifiez toujours deux fois avant d&apos;exécuter des commandes en tant que root.
              </p>
            </div>
          </article>
        </Section>
      </main>
    </>
  );
} 