import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const isLegalPage = currentPath === '/legal';

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/wilmore-dynamics', icon: '/social/github.svg' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/wilmore-dynamics', icon: '/social/linkedin.svg' }
  ];

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
                { name: 'Sécurité', href: '/securite' },
                { name: 'Recyclage', href: '/recyclage' },
                { name: 'Choisir Linux', href: '/linux' }
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
              {!isLegalPage && (
                <li>
                  <div className="flex space-x-4">
                    <Link href="/legal" className="hover:text-gray-300">
                      Mentions légales
                    </Link>
                    <Link href="/about" className="hover:text-gray-300">
                      À propos
                    </Link>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Copyright et réseaux sociaux */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 mt-8 border-t border-gray-200 dark:border-white/[0.06]">
          <p className="text-sm text-gray-600 dark:text-gray-500">
            © {currentYear} Wilmore Dynamics. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="group text-gray-400 dark:text-gray-500 hover:text-[#1a73e8] dark:hover:text-[#8ab4f8] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{social.name}</span>
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={24}
                  height={24}
                  className="opacity-60 group-hover:opacity-100 transition-opacity dark:invert"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 