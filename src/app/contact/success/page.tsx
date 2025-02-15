import Link from 'next/link';
import Navbar from "@/components/Navbar";
import FadeIn from '@/components/FadeIn';

export default function ContactSuccess() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <FadeIn>
          <section className="py-20 px-4">
            <div className="max-w-[640px] mx-auto text-center">
              <div className="mb-8 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-500" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <h1 className="text-[44px] leading-[1.1] font-bold mb-6">
                Message envoyé !
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
                Merci de nous avoir contacté. Nous vous répondrons dans les plus brefs délais.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="px-8 py-3 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white transition-colors text-[15px] font-medium"
                >
                  Retour à l'accueil →
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-3 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/[0.15] text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-white/[0.1] transition-colors text-[15px] font-medium"
                >
                  Découvrir nos services
                </Link>
              </div>
            </div>
          </section>
        </FadeIn>
      </main>
    </>
  );
} 