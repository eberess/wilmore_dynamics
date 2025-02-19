'use client';

import ThemeToggle from './ThemeToggle';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Gestion du scroll pour l'effet de fond
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NAVIGATION_ITEMS = [
    { name: 'Services', href: '/services' },
    { name: 'Applications', href: '/apps' },
    { name: 'À propos', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ] as const;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      hasScrolled || isMenuOpen ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 text-xl font-semibold hover:text-[#1a73e8] dark:hover:text-[#8ab4f8] transition-colors">
              <Image
                src="/category_24dp_E8EAED_FILL1_wght200_GRAD0_opsz24.svg"
                alt="Logo"
                width={24}
                height={24}
                className="invert-0 dark:invert"
              />
              Wilmore Dynamics
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {[
              { name: 'Services', href: '/services' },
              { name: 'Applications', href: '/apps' },
              { name: 'Contact', href: '/#contact' },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-[#1a73e8] dark:hover:text-[#8ab4f8] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-black/[.05] dark:hover:bg-white/[.06] transition-colors">
              <ThemeToggle />
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-black/[.05] dark:hover:bg-white/[.06] transition-colors"
              aria-label="Menu"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                ) : (
                  <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <div className="px-4 py-4 space-y-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-white/[0.1]">
          {[
            { name: 'Services', href: '/services' },
            { name: 'Applications', href: '/apps' },
            { name: 'Contact', href: '/#contact' },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-gray-600 dark:text-gray-300 hover:text-[#1a73e8] dark:hover:text-[#8ab4f8] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
} 