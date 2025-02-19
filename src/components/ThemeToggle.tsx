'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = savedTheme === 'dark' || (!savedTheme && prefersDark) ? 'dark' : 'light';
    setTheme(initialTheme);
    
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
    
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (!theme) return;
    
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    const root = document.documentElement;
    if (newTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    localStorage.setItem('theme', newTheme);
  };

  if (!mounted || theme === null) {
    return (
      <div className="w-8 h-8 flex items-center justify-center">
        <div className="w-5 h-5 bg-gray-200 rounded-full animate-pulse" />
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label={theme === 'light' ? 'Activer le mode sombre' : 'Activer le mode clair'}
    >
      {theme === 'light' ? (
        <Image
          src="/icons/dark_mode.svg"
          alt="Passer en mode sombre"
          width={20}
          height={20}
          className="brightness-0"
        />
      ) : (
        <Image
          src="/icons/light_mode.svg"
          alt="Passer en mode clair"
          width={20}
          height={20}
          className="brightness-0 invert dark:brightness-100 dark:invert-0"
        />
      )}
    </button>
  );
} 