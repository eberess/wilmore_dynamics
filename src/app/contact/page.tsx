import Image from "next/image";
import Navbar from "@/components/Navbar";
import FadeIn from '@/components/FadeIn';
import ContactForm from '@/components/ContactForm';
import FAQ from '@/components/FAQ';
import Section from '@/components/Section';
import ScrollIcon from '@/components/ScrollIcon';

const contactMetadata = {
  title: 'Contact - Wilmore Dynamics',
  description: 'Contactez-nous pour discuter de vos projets et obtenir un accompagnement personnalisé',
};

export const metadata = contactMetadata;

const SECTION_IDS = {
  hero: 'hero',
  form: 'form',
  faq: 'faq'
} as const;

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-x-hidden scroll-smooth">
        <Section
          id={SECTION_IDS.hero}
          badge="CONTACT"
          title={
            <div className="text-center max-w-[800px] mx-auto mb-16">
              <h1 className="text-[44px] sm:text-[64px] md:text-[96px] leading-[1.1] font-medium tracking-[-0.02em]">
                Discutons de
                <span className="block bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mt-2">
                  votre projet
                </span>
              </h1>
              <p className="mt-6 text-xl text-gray-600/90 dark:text-gray-300/90 max-w-[640px] mx-auto">
                Notre équipe est à votre écoute pour vous accompagner dans votre transformation digitale
              </p>
            </div>
          }
          className="min-h-[90vh] flex flex-col items-center justify-center relative"
        >
          <div />
          <ScrollIcon targetId={SECTION_IDS.form} />
        </Section>

        <Section
          id={SECTION_IDS.form}
          badge="FORMULAIRE"
          title={
            <div className="text-center max-w-[800px] mx-auto mb-16">
              <h2 className="text-[2.75rem] sm:text-[3.5rem] leading-[1.1] font-medium tracking-[-0.02em] text-gray-900 dark:text-white">
                Contactez-nous
              </h2>
            </div>
          }
          className="bg-gradient-to-b from-transparent to-blue-50/50 dark:to-blue-950/[0.03]"
        >
          <FadeIn>
            <div className="max-w-[1200px] mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Formulaire de contact */}
                <div className="p-8 rounded-[32px] bg-white/50 dark:bg-white/[0.02] border border-gray-200/50 dark:border-white/[0.1] backdrop-blur-sm">
                  <div className="mb-8">
                    <h2 className="text-2xl font-medium mb-4">
                      Envoyez-nous un message
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais
                    </p>
                  </div>
                  <ContactForm />
                  <div className="mt-8 pt-8 border-t border-gray-200/50 dark:border-white/[0.1]">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      En soumettant ce formulaire, vous acceptez que nous utilisions vos informations conformément à notre politique de confidentialité.
                    </p>
                  </div>
                </div>

                {/* Informations de contact */}
                <div className="space-y-6">
                  <div className="p-8 rounded-[32px] bg-white/50 dark:bg-white/[0.02] border border-gray-200/50 dark:border-white/[0.1] backdrop-blur-sm">
                    <h2 className="text-2xl font-medium mb-6">
                      Autres moyens de nous contacter
                    </h2>
                    <div className="space-y-4">
                      <div className="group p-4 rounded-2xl hover:bg-white/80 dark:hover:bg-white/[0.03] transition-colors duration-300">
                        <div className="flex items-start gap-4">
                          <div className="p-2 rounded-xl bg-blue-50/50 dark:bg-blue-500/[0.08] text-blue-600 dark:text-blue-400">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                              <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" 
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-medium mb-1">Email</h3>
                            <a href="mailto:contact@wilmore-dynamics.com" 
                               className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                              contact@wilmore-dynamics.com
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="group p-4 rounded-2xl hover:bg-white/80 dark:hover:bg-white/[0.03] transition-colors duration-300">
                        <div className="flex items-start gap-4">
                          <div className="p-2 rounded-xl bg-blue-50/50 dark:bg-blue-500/[0.08] text-blue-600 dark:text-blue-400">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                              <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" 
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-medium mb-1">Téléphone</h3>
                            <a href="tel:+33123456789" 
                               className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                              +33 1 23 45 67 89
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <FadeIn>
                    <div className="p-8 rounded-[32px] bg-white/50 dark:bg-white/[0.02] border border-gray-200/50 dark:border-white/[0.1] backdrop-blur-sm">
                      <h2 className="text-2xl font-medium mb-6">
                        Suivez-nous
                      </h2>
                      <div className="flex gap-4">
                        {[
                          { name: 'GitHub', href: 'https://git.wilmoredynamics.com', icon: '/social/github.svg' },
                          { name: 'LinkedIn', href: 'https://linkedin.com/wilmoredynamics', icon: '/social/linkedin.svg' }
                        ].map((social) => (
                          <a
                            key={social.name}
                            href={social.href}
                            className="group p-4 rounded-2xl bg-gray-50/80 dark:bg-white/[0.02] hover:bg-gray-100 dark:hover:bg-white/[0.05] transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
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
                  </FadeIn>
                </div>
              </div>
            </div>
          </FadeIn>
        </Section>

        <Section
          id={SECTION_IDS.faq}
          badge="FAQ"
          title={
            <div className="text-center max-w-[800px] mx-auto mb-16">
              <h2 className="text-[2.75rem] sm:text-[3.5rem] leading-[1.1] font-medium tracking-[-0.02em] text-gray-900 dark:text-white">
                Questions
                <span className="block bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  fréquentes
                </span>
              </h2>
              <p className="mt-6 text-xl text-gray-600/90 dark:text-gray-300/90 max-w-[640px] mx-auto">
                Tout ce que vous devez savoir sur nos services
              </p>
            </div>
          }
          className="bg-gray-50/50 dark:bg-gray-900/50"
        >
          <FadeIn>
            <FAQ />
          </FadeIn>
        </Section>
      </main>
    </>
  );
} 