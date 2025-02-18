import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-black/[0.95] border-t border-gray-200 dark:border-white/[0.06]">
      <div className="mx-auto max-w-[1200px] px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-6 h-6 relative">
                <Image
                  src="/category_24dp_E8EAED_FILL1_wght200_GRAD0_opsz24.svg"
                  alt="Wilmore Dynamics"
                  fill
                  className="invert-0 dark:invert opacity-90 dark:opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <span className="text-gray-900 dark:text-gray-100 text-sm font-medium">
                Wilmore Dynamics
              </span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              Solutions technologiques innovantes pour transformer votre entreprise
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-200 mb-4">
              Solutions
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Cloud Native', href: '/cloud-native' },
                { name: 'DevOps', href: '/devops' },
                { name: 'Open Source', href: '/open-source' },
                { name: 'Sécurité', href: '/securite' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} 
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#1a73e8] dark:hover:text-[#8ab4f8] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-200 mb-4">
              Entreprise
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'À propos', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Blog', href: '/blog' },
                { name: 'Contact', href: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} 
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#1a73e8] dark:hover:text-[#8ab4f8] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal et Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-200 mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:contact@wilmoredynamics.com" 
                   className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#1a73e8] dark:hover:text-[#8ab4f8] transition-colors">
                  contact@wilmoredynamics.com
                </a>
              </li>
              <li>
                <Link href="/legal" 
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#1a73e8] dark:hover:text-[#8ab4f8] transition-colors">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright et réseaux sociaux */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 mt-8 border-t border-gray-200 dark:border-white/[0.06]">
          <p className="text-sm text-gray-600 dark:text-gray-500">
            © {currentYear} Wilmore Dynamics. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            <a href="https://git.wilmoredynamics.com" 
               className="text-gray-400 dark:text-gray-500 hover:text-[#1a73e8] dark:hover:text-[#8ab4f8] transition-colors"
               target="_blank"
               rel="noopener noreferrer">
              <span className="sr-only">GitHub</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://linkedin.com/company/wilmore-dynamics" 
               className="text-gray-400 dark:text-gray-500 hover:text-[#1a73e8] dark:hover:text-[#8ab4f8] transition-colors"
               target="_blank"
               rel="noopener noreferrer">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 