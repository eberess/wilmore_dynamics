import React from 'react';
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";

export default function DepannageLinuxGuide() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-x-hidden">
        <Section
          id="guide-depannage"
          badge="GUIDE"
          title={
            <div className="text-center max-w-[800px] mx-auto mb-16">
              <h1 className="text-[2.75rem] sm:text-[3.5rem] leading-[1.1] font-medium tracking-[-0.02em] text-blue-600 dark:text-blue-400">
                Guide de Dépannage Commun sur Linux
              </h1>
              <p className="mt-6 text-xl text-gray-600/90 dark:text-gray-300/90 max-w-[640px] mx-auto">
                Solutions aux problèmes fréquemment rencontrés sur Linux
              </p>
            </div>
          }
          className="py-24"
        >
          <article className="prose prose-lg max-w-4xl mx-auto dark:prose-invert">
            <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg mb-8">
              <h3 className="text-orange-600 dark:text-orange-400">Points Essentiels</h3>
              <ul className="mt-2">
                <li>Problèmes de démarrage</li>
                <li>Problèmes de réseau</li>
                <li>Problèmes de son</li>
                <li>Problèmes d&apos;affichage</li>
                <li>Gestion des pilotes</li>
                <li>Problèmes de stockage</li>
              </ul>
            </div>

            <h2>Problèmes de Démarrage</h2>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6">
              <h3>GRUB ne démarre pas</h3>
              <div className="mb-4">
                <p className="mb-2">1. Réparer GRUB depuis un Live USB :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  sudo mount /dev/sdaX /mnt       # Monter la partition racine<br />
                  sudo grub-install --root-directory=/mnt /dev/sda<br />
                  sudo update-grub
                </code>
              </div>

              <h3>Écran noir au démarrage</h3>
              <div className="mb-4">
                <p className="mb-2">Ajouter des paramètres de démarrage :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  # Éditer GRUB et ajouter :<br />
                  nomodeset nouveau.modeset=0
                </code>
              </div>
            </div>

            <h2>Problèmes de Réseau</h2>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6">
              <h3>Connexion Wi-Fi instable</h3>
              <div className="mb-4">
                <p className="mb-2">1. Vérifier l&apos;état du réseau :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  nmcli device wifi list          # Liste des réseaux<br />
                  iwconfig                        # État de la connexion
                </code>
              </div>

              <div className="mb-4">
                <p className="mb-2">2. Redémarrer le service réseau :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  sudo systemctl restart NetworkManager
                </code>
              </div>
            </div>

            <h2>Problèmes de Son</h2>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6">
              <h3>Pas de son</h3>
              <div className="mb-4">
                <p className="mb-2">1. Vérifier les périphériques audio :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  aplay -l                        # Liste des cartes son<br />
                  pulseaudio -k                   # Redémarrer PulseAudio<br />
                  alsamixer                       # Réglages du volume
                </code>
              </div>

              <div className="mb-4">
                <p className="mb-2">2. Réinstaller les pilotes audio :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  sudo apt install --reinstall alsa-base pulseaudio
                </code>
              </div>
            </div>

            <h2>Problèmes d&apos;Affichage</h2>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6">
              <h3>Résolution incorrecte</h3>
              <div className="mb-4">
                <p className="mb-2">1. Lister les résolutions disponibles :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  xrandr                          # Afficher les modes<br />
                  xrandr --output HDMI-1 --mode 1920x1080  # Définir résolution
                </code>
              </div>

              <h3>Problèmes de pilotes graphiques</h3>
              <div className="mb-4">
                <p className="mb-2">Installation des pilotes propriétaires :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  ubuntu-drivers devices          # Voir pilotes disponibles<br />
                  sudo ubuntu-drivers autoinstall # Installer automatiquement
                </code>
              </div>
            </div>

            <h2>Gestion des Pilotes</h2>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6">
              <h3>Pilotes manquants</h3>
              <div className="mb-4">
                <p className="mb-2">1. Identifier le matériel :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  lspci                           # Périphériques PCI<br />
                  lsusb                           # Périphériques USB<br />
                  dmesg | grep -i error          # Messages d&apos;erreur
                </code>
              </div>

              <div className="mb-4">
                <p className="mb-2">2. Installer les pilotes manquants :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  sudo apt install linux-headers-$(uname -r)<br />
                  sudo apt install dkms
                </code>
              </div>
            </div>

            <h2>Problèmes de Stockage</h2>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6">
              <h3>Disque plein</h3>
              <div className="mb-4">
                <p className="mb-2">1. Analyser l&apos;utilisation du disque :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  df -h                           # Espace disque<br />
                  du -sh /*                       # Taille des dossiers<br />
                  ncdu                            # Analyseur interactif
                </code>
              </div>

              <div className="mb-4">
                <p className="mb-2">2. Nettoyer le système :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  sudo apt clean                  # Nettoyer le cache apt<br />
                  sudo apt autoremove            # Supprimer paquets inutiles<br />
                  journalctl --vacuum-time=3d     # Nettoyer les journaux
                </code>
              </div>
            </div>

            <h2>Outils de Diagnostic</h2>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6">
              <div className="mb-4">
                <p className="mb-2">Journaux système :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  journalctl -xe                  # Derniers messages<br />
                  tail -f /var/log/syslog         # Suivi en temps réel<br />
                  dmesg | less                    # Messages du noyau
                </code>
              </div>

              <div className="mb-4">
                <p className="mb-2">Surveillance système :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  top                             # Processus actifs<br />
                  htop                            # Version améliorée<br />
                  iotop                           # Activité disque
                </code>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg mt-8">
              <h3 className="text-blue-600 dark:text-blue-400">Conseils Généraux</h3>
              <ul>
                <li>Sauvegardez toujours vos données importantes avant toute intervention</li>
                <li>Consultez les journaux système pour identifier la source du problème</li>
                <li>Testez les solutions dans un ordre logique, une à la fois</li>
                <li>Documentez les changements que vous effectuez</li>
                <li>N&apos;hésitez pas à chercher de l&apos;aide sur les forums communautaires</li>
              </ul>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg mt-8">
              <h3 className="text-yellow-600 dark:text-yellow-400">Attention</h3>
              <p>
                Certaines commandes de dépannage nécessitent des privilèges root. 
                Assurez-vous de comprendre l&apos;impact d&apos;une commande avant de 
                l&apos;exécuter avec sudo.
              </p>
            </div>
          </article>
        </Section>
      </main>
    </>
  );
} 