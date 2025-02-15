import ThemeToggle from './ThemeToggle';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-black/[.08] dark:border-white/[.12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-semibold hover:text-[#1a73e8] dark:hover:text-[#8ab4f8] transition-colors">
              Wilmore Dynamics
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {[
              { name: 'Services', href: '/services' },
              { name: 'Open Source', href: '/open-source' },
              { name: 'Contact', href: '/#contact' },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[15px] font-medium hover:text-[#1a73e8] dark:hover:text-[#8ab4f8] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              className="md:hidden p-2 rounded-lg hover:bg-black/[.05] dark:hover:bg-white/[.06] transition-colors"
              aria-label="Menu"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - À implémenter si nécessaire */}
    </nav>
  );
} 