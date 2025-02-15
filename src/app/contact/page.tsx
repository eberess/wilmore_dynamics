import Image from "next/image";
import Navbar from "@/components/Navbar";
import FadeIn from '@/components/FadeIn';
import ContactForm from '@/components/ContactForm';

const contactMetadata = {
  title: 'Contact - Wilmore Dynamics',
  description: 'Contactez-nous pour discuter de vos projets et obtenir un accompagnement personnalisé',
};

export const metadata = contactMetadata;

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <FadeIn>
          <section className="py-20 px-4">
            <div className="max-w-[1200px] mx-auto">
              <div className="grid md:grid-cols-2 gap-16 items-start">
                {/* Formulaire de contact */}
                <div>
                  <div className="mb-12">
                    <span className="text-[#1a73e8] dark:text-[#8ab4f8] text-sm font-medium mb-4 block">
                      CONTACT
                    </span>
                    <h1 className="text-[44px] leading-[1.1] font-bold mb-6">
                      Parlons de votre projet
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                      Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais
                    </p>
                  </div>

                  <ContactForm />
                </div>

                {/* Informations de contact */}
                <div className="space-y-12">
                  <div className="p-8 rounded-[28px] bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/[0.1]">
                    <h2 className="text-2xl font-semibold mb-6">
                      Autres moyens de nous contacter
                    </h2>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-[#1a73e8]/10 dark:bg-[#8ab4f8]/10">
                          <svg className="w-6 h-6 text-[#1a73e8] dark:text-[#8ab4f8]" viewBox="0 0 24 24" fill="none">
                            <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" 
                              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Email</h3>
                          <a href="mailto:contact@wilmore-dynamics.com" className="text-[#1a73e8] dark:text-[#8ab4f8] hover:opacity-80 transition-opacity">
                            contact@wilmore-dynamics.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-[#1a73e8]/10 dark:bg-[#8ab4f8]/10">
                          <svg className="w-6 h-6 text-[#1a73e8] dark:text-[#8ab4f8]" viewBox="0 0 24 24" fill="none">
                            <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" 
                              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Téléphone</h3>
                          <a href="tel:+33123456789" className="text-[#1a73e8] dark:text-[#8ab4f8] hover:opacity-80 transition-opacity">
                            +33 1 23 45 67 89
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 rounded-[28px] bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/[0.1]">
                    <h2 className="text-2xl font-semibold mb-6">
                      FAQ
                    </h2>
                    <div className="space-y-6">
                      {[
                        {
                          question: "Quel est le délai de réponse ?",
                          answer: "Nous nous engageons à répondre à toutes les demandes sous 24h ouvrées."
                        },
                        {
                          question: "Comment se déroule un projet ?",
                          answer: "Nous commençons par une phase de découverte pour comprendre vos besoins, puis nous établissons ensemble un plan d'action détaillé."
                        },
                        {
                          question: "Proposez-vous un accompagnement ?",
                          answer: "Oui, nous assurons un suivi complet et une maintenance continue de vos solutions."
                        }
                      ].map((item, index) => (
                        <div key={index}>
                          <h3 className="font-medium mb-2">{item.question}</h3>
                          <p className="text-gray-600 dark:text-gray-400">{item.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>
      </main>
    </>
  );
} 