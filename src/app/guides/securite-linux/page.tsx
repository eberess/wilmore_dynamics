import React from 'react';
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";

export default function SecuriteLinuxGuide() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-x-hidden">
        <Section
          id="guide-securite"
          badge="GUIDE"
          title={
            <div className="text-center max-w-[800px] mx-auto mb-16">
              <h1 className="text-[2.75rem] sm:text-[3.5rem] leading-[1.1] font-medium tracking-[-0.02em] text-blue-600 dark:text-blue-400">
                Sécurité sur Linux : Bonnes Pratiques
              </h1>
              <p className="mt-6 text-xl text-gray-600/90 dark:text-gray-300/90 max-w-[640px] mx-auto">
                Guide complet pour sécuriser votre système Linux et protéger vos données
              </p>
            </div>
          }
          className="py-24"
        >
          <article className="prose prose-lg max-w-4xl mx-auto dark:prose-invert">
            <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg mb-8">
              <h3 className="text-orange-600 dark:text-orange-400">Points Essentiels</h3>
              <ul className="mt-2">
                <li>Mettez régulièrement à jour votre système</li>
                <li>Utilisez des mots de passe forts et uniques</li>
                <li>Activez le pare-feu</li>
                <li>Chiffrez vos données sensibles</li>
                <li>Faites des sauvegardes régulières</li>
              </ul>
            </div>

            <h2>Gestion des Mots de Passe</h2>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6">
              <h3>Création d&apos;un Mot de Passe Fort</h3>
              <ul>
                <li>Minimum 12 caractères</li>
                <li>Mélange de lettres, chiffres et caractères spéciaux</li>
                <li>Éviter les informations personnelles</li>
              </ul>
              <div className="mt-4">
                <p className="mb-2">Pour modifier votre mot de passe utilisateur :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  passwd
                </code>
              </div>
            </div>

            <h2>Mises à Jour de Sécurité</h2>
            <p>
              Les mises à jour régulières sont cruciales pour la sécurité de votre système.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6">
              <h4>Commandes Essentielles</h4>
              <div className="mb-4">
                <p className="mb-2">1. Mettre à jour la liste des paquets disponibles :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  sudo apt update
                </code>
              </div>
              <div>
                <p className="mb-2">2. Installer les mises à jour de sécurité :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  sudo apt upgrade
                </code>
              </div>
            </div>

            <h2>Sécurité SSH</h2>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6">
              <h3>Configuration Sécurisée du Serveur SSH</h3>
              <div className="mb-6">
                <p className="mb-2">1. Ouvrir le fichier de configuration SSH :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  sudo nano /etc/ssh/sshd_config
                </code>
              </div>

              <div className="mb-6">
                <p className="mb-2">2. Ajouter ou modifier les lignes suivantes :</p>
                <div className="bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-4 rounded border border-gray-300 dark:border-gray-700 font-mono text-sm whitespace-pre-line">
                  # Désactiver l&apos;authentification par mot de passe
                  PasswordAuthentication no

                  # Utiliser uniquement SSH v2
                  Protocol 2

                  # Limiter les tentatives de connexion
                  MaxAuthTries 3

                  # Désactiver la connexion root
                  PermitRootLogin no

                  # Port SSH personnalisé (optionnel, remplacer 22)
                  Port 2222

                  # Limiter les utilisateurs autorisés
                  AllowUsers votreUtilisateur
                </div>
              </div>

              <div className="mb-6">
                <p className="mb-2">3. Redémarrer le service SSH pour appliquer les changements :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  sudo systemctl restart sshd
                </code>
              </div>

              <h3 className="mt-8 mb-4">Gestion des Clés SSH</h3>
              <div className="space-y-6">
                <div>
                  <p className="mb-2">1. Générer une nouvelle paire de clés :</p>
                  <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                    ssh-keygen -t ed25519 -C &quot;votre@email.com&quot;
                  </code>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Utilisez Ed25519 pour une meilleure sécurité. Pour une compatibilité maximale, utilisez RSA avec 4096 bits :
                  </p>
                  <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                    ssh-keygen -t rsa -b 4096 -C &quot;votre@email.com&quot;
                  </code>
                </div>

                <div>
                  <p className="mb-2">2. Copier la clé publique vers un serveur :</p>
                  <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                    ssh-copy-id utilisateur@serveur 
                  </code>
                </div>

                <div>
                  <p className="mb-2">3. Vérifier la connexion SSH :</p>
                  <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                    ssh utilisateur@serveur
                  </code>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded mt-6">
                <h4 className="text-blue-600 dark:text-blue-400 mb-2">Bonnes Pratiques</h4>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Utilisez des clés SSH plutôt que des mots de passe</li>
                  <li>Protégez vos clés privées avec une phrase de passe</li>
                  <li>Changez le port SSH par défaut (22) pour éviter les scans automatisés</li>
                  <li>Limitez l&apos;accès SSH à des utilisateurs spécifiques</li>
                  <li>Surveillez régulièrement les tentatives de connexion dans les logs</li>
                </ul>
              </div>
            </div>

            <h2>Pare-feu (UFW)</h2>
            <p>
              UFW (Uncomplicated Firewall) est un pare-feu simple mais puissant pour Linux.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6">
              <div className="mb-4">
                <p className="mb-2">1. Installation du pare-feu :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  sudo apt install ufw
                </code>
              </div>
              <div className="mb-4">
                <p className="mb-2">2. Activation du pare-feu :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  sudo ufw enable
                </code>
              </div>
              <div>
                <p className="mb-2">3. Vérification de l&apos;état du pare-feu :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  sudo ufw status
                </code>
              </div>
            </div>

            <h2>Sauvegardes Sécurisées</h2>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6">
              <h3>Rsync avec Chiffrement</h3>
              <p className="mb-2">Pour effectuer une sauvegarde chiffrée vers un serveur distant :</p>
              <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                rsync -avz --delete -e ssh /chemin/source utilisateur@serveur:/chemin/destination
              </code>

              <h3 className="mt-6">Borg Backup</h3>
              <p>Solution de sauvegarde moderne avec déduplication et chiffrement.</p>
              <div className="mt-4">
                <p className="mb-2">1. Installation de Borg :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  sudo apt install borgbackup
                </code>
                <p className="mb-2">2. Création d&apos;un nouveau dépôt chiffré :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  borg init --encryption=repokey /chemin/vers/sauvegarde
                </code>
              </div>
            </div>

            <h2>Audit de Sécurité</h2>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6">
              <h3>Lynis</h3>
              <p>Outil d&apos;audit de sécurité automatisé qui analyse votre système.</p>
              <div className="mt-4">
                <p className="mb-2">1. Installation de Lynis :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  sudo apt install lynis
                </code>
                <p className="mb-2">2. Lancement d&apos;un audit complet :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  sudo lynis audit system
                </code>
              </div>

              <h3 className="mt-6">Rkhunter</h3>
              <p>Outil de détection des rootkits et malwares.</p>
              <div className="mt-4">
                <p className="mb-2">1. Installation de Rkhunter :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  sudo apt install rkhunter
                </code>
                <p className="mb-2">2. Analyse du système :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  sudo rkhunter --check
                </code>
              </div>
            </div>

            <h2>Gestion des Permissions</h2>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6">
              <h3>Commandes de Base</h3>
              <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                # Afficher les permissions <br />
                ls -l fichier
              </code>
              <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                # Modifier les permissions <br />
                chmod 644 fichier
              </code>
              <p className="mt-4">Bonnes pratiques :</p>
              <ul>
                <li>Fichiers sensibles : 600 (lecture/écriture propriétaire uniquement)</li>
                <li>Fichiers standards : 644 (lecture pour tous, écriture propriétaire)</li>
                <li>Exécutables : 755 (exécution pour tous, modification propriétaire)</li>
              </ul>
            </div>

            <h2>Antivirus et Malwares</h2>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6">
              <h3>ClamAV</h3>
              <p>Antivirus open source pour Linux</p>
              <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                # Installation <br />
                sudo apt install clamav
              </code>
              <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                # Scan d&apos;un répertoire <br />
                clamscan -r /chemin/vers/dossier
              </code>
            </div>

            <h2>Chiffrement des Données</h2>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6">
              <h3>LUKS (Linux Unified Key Setup)</h3>
              <p>Pour le chiffrement des disques :</p>
              <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                # Chiffrer un nouveau disque <br />
                sudo cryptsetup luksFormat /dev/sdX
              </code>
              
              <h3 className="mt-4">VeraCrypt</h3>
              <p>Pour créer des conteneurs chiffrés :</p>
              <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                # Installation <br />
                sudo apt install veracrypt
              </code>
            </div>

            <h2>Surveillance du Système</h2>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6">
              <h3>Journaux Système</h3> 
              <div className="mb-4">
                <p className="mb-2">Pour consulter les journaux système en temps réel :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  journalctl -xe
                </code>
              </div>
              <div>
                <p className="mb-2">Pour voir l&apos;historique des connexions :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  last
                </code>
              </div>
            </div>

            <h2>Surveillance Réseau</h2>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-6">
              <h3>Netstat</h3>
              <p className="mb-2">Pour afficher toutes les connexions réseau actives :</p>
              <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                netstat -tuln
              </code>

              <h3 className="mt-6">Fail2ban</h3>
              <p>Protection automatique contre les tentatives d&apos;intrusion.</p>
              <div className="mt-4">
                <p className="mb-2">1. Installation de Fail2ban :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  sudo apt install fail2ban
                </code>
                <p className="mb-2">2. Vérification du statut :</p>
                <code className="block bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white p-3 rounded border border-gray-300 dark:border-gray-700 font-mono">
                  sudo fail2ban-client status
                </code>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg mt-8">
              <h3 className="text-yellow-600 dark:text-yellow-400">Attention</h3>
              <p>
                La sécurité est un processus continu. Restez informé des dernières 
                vulnérabilités et mettez régulièrement à jour vos pratiques de sécurité.
              </p>
              <ul className="mt-2">
                <li>Surveillez régulièrement les journaux système</li>
                <li>Testez vos sauvegardes périodiquement</li>
                <li>Maintenez une liste des logiciels installés</li>
                <li>Documentez vos configurations de sécurité</li>
              </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg mt-8">
              <h3 className="text-blue-600 dark:text-blue-400">Ressources Additionnelles</h3>
              <ul>
                <li><a href="https://security.ubuntu.com" className="text-blue-600 hover:underline">Centre de Sécurité Ubuntu</a></li>
                <li><a href="https://www.debian.org/security" className="text-blue-600 hover:underline">Guide de Sécurité Debian</a></li>
                <li><a href="https://www.cisa.gov/uscert" className="text-blue-600 hover:underline">US-CERT - Alertes de Sécurité</a></li>
                <li><a href="https://www.cisecurity.org/cis-benchmarks" className="text-blue-600 hover:underline">CIS Benchmarks</a></li>
              </ul>
            </div>
          </article>
        </Section>
      </main>
    </>
  );
} 