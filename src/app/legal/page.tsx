import Navbar from "@/components/Navbar";
import Section from '@/components/Section';
import type { Metadata } from 'next';
import FadeIn from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Mentions légales - Wilmore Dynamics',
  description: 'Mentions légales et conditions d\'utilisation de Wilmore Dynamics',
  openGraph: {
    title: 'Mentions légales | Wilmore Dynamics',
    description: 'Mentions légales et conditions d\'utilisation de Wilmore Dynamics',
    type: 'website',
  },
};

export default function Legal() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-x-hidden">
        <Section
          id="legal"
          badge="LÉGAL"
          title={
            <div className="text-center max-w-[800px] mx-auto mb-16">
              <h1 className="text-[44px] sm:text-[64px] leading-[1.1] font-medium tracking-[-0.02em]">
                Mentions
                <span className="block bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mt-2">
                  légales
                </span>
              </h1>
            </div>
          }
          className="py-24"
        >
          <FadeIn>
            <div className="max-w-[800px] mx-auto prose dark:prose-invert">
              <h2>Éditeur du site</h2>
              <p>
                <strong>Wilmore Dynamics</strong><br />
                Société par actions simplifiée (SAS)<br />
                Capital social : [Montant] euros<br />
                RCS [Ville] : [Numéro]<br />
                Siège social : [Adresse]<br />
                N° TVA : [Numéro]
              </p>

              <h2>Directeur de la publication</h2>
              <p>[Nom du directeur de publication]<br />
              contact@wilmoredynamics.com</p>

              <h2>Hébergement</h2>
              <p>
                Ce site est hébergé par :<br />
                [Nom de l'hébergeur]<br />
                [Adresse de l'hébergeur]
              </p>

              <h2>Protection des données personnelles</h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD), 
                vous disposez d'un droit d'accès, de rectification et de suppression 
                des données vous concernant. Pour exercer ce droit, veuillez nous 
                contacter à l'adresse : contact@wilmoredynamics.com
              </p>

              <h2>Cookies</h2>
              <p>
                Ce site utilise des cookies techniques essentiels au fonctionnement du site. 
                Ces cookies ne collectent aucune donnée personnelle.
              </p>

              <h2>Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu de ce site (structure, textes, images, logos) 
                est la propriété exclusive de Wilmore Dynamics ou fait l'objet d'une 
                autorisation d'utilisation. Toute reproduction, représentation, 
                modification ou exploitation sans autorisation préalable est strictement 
                interdite.
              </p>

              <h2>Liens externes</h2>
              <p>
                Ce site peut contenir des liens vers des sites externes. 
                Wilmore Dynamics n'exerce aucun contrôle sur ces sites et décline 
                toute responsabilité quant à leur contenu.
              </p>

              <h2>Droit applicable</h2>
              <p>
                Les présentes mentions légales sont soumises au droit français. 
                En cas de litige, les tribunaux français seront seuls compétents.
              </p>

              <h2>Contact</h2>
              <p>
                Pour toute question concernant ces mentions légales, vous pouvez 
                nous contacter à : contact@wilmoredynamics.com
              </p>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-12">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </FadeIn>
        </Section>
      </main>
    </>
  );
} 