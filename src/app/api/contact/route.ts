import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { escapeHtml } from 'html-entities';
import { z } from 'zod';

// Schéma de validation Zod pour sécurité maximale
const ContactFormSchema = z.object({
  firstname: z.string().trim().min(1, 'Prénom requis').max(100, 'Prénom trop long'),
  lastname: z.string().trim().min(1, 'Nom requis').max(100, 'Nom trop long'),
  email: z.string().trim().email('Email invalide').max(254, 'Email trop long'),
  subject: z.string().trim().min(1, 'Sujet requis').max(500, 'Sujet trop long'),
  message: z.string().trim().min(10, 'Message trop court').max(5000, 'Message trop long'),
  collectivite: z.string().trim().max(200, 'Collectivité trop longue').optional().or(z.literal('')),
  type: z.enum(['commune', 'epci', 'autre']).optional(),
  taille: z.string().trim().max(100, 'Taille trop longue').optional().or(z.literal('')),
  fonction: z.string().trim().max(200, 'Fonction trop longue').optional().or(z.literal('')),
  telephone: z.string().trim().regex(/^[\d\s\-\+\(\)\.]+$/, 'Téléphone invalide').max(20, 'Téléphone trop long').optional().or(z.literal(''))
});

type ContactFormData = z.infer<typeof ContactFormSchema>;

const SUBMIT_DELAY = 60000; // 1 minute
let lastSubmitTime = 0;

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true, // Pour le port 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Vérification de la connexion SMTP au démarrage
transporter.verify(function(error) {
  if (error) {
    console.error('Erreur de configuration SMTP:', error);
  } else {
    console.log('Serveur SMTP prêt à envoyer des emails');
  }
});

const getEmailTemplate = (data: ContactFormData, isConfirmation = false) => {
  const { firstname, lastname, email, subject, message } = data;
  
  // Échapper toutes les données utilisateur
  const escapedFirstname = escapeHtml(firstname);
  const escapedLastname = escapeHtml(lastname);
  const escapedEmail = escapeHtml(email);
  const escapedSubject = escapeHtml(subject);
  const escapedMessage = escapeHtml(message);
  const escapedCollectivite = escapeHtml(data.collectivite || '');
  const escapedType = escapeHtml(data.type || '');
  const escapedTaille = escapeHtml(data.taille || '');
  const escapedFonction = escapeHtml(data.fonction || '');
  const escapedTelephone = escapeHtml(data.telephone || '');
  
  if (isConfirmation) {
    return {
      subject: `Confirmation de votre message - Wilmore Dynamics`,
      text: `
        Bonjour ${escapedFirstname} ${escapedLastname},

        Nous avons bien reçu votre message et nous vous en remercions.
        Nous vous répondrons dans les plus brefs délais.

        Récapitulatif de votre message :
        Sujet: ${escapedSubject}
        Message: ${escapedMessage}

        Cordialement,
        L'équipe Wilmore Dynamics
      `,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { text-align: center; margin-bottom: 30px; }
              .content { background: #f9f9f9; padding: 20px; border-radius: 8px; }
              .footer { text-align: center; margin-top: 30px; color: #666; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>Confirmation de votre message</h2>
              </div>
              <div class="content">
                <p>Bonjour ${escapedFirstname} ${escapedLastname},</p>
                <p>Nous avons bien reçu votre message et nous vous en remercions.<br>
                Nous vous répondrons dans les plus brefs délais.</p>
                <div style="margin: 20px 0; padding: 20px; background: #fff; border-radius: 4px;">
                  <h3>Récapitulatif de votre message :</h3>
                  <p><strong>Sujet :</strong> ${escapedSubject}</p>
                  <p><strong>Message :</strong><br>${escapedMessage.replace(/\n/g, '<br>')}</p>
                </div>
              </div>
              <div class="footer">
                <p>Cordialement,<br>L'équipe Wilmore Dynamics</p>
              </div>
            </div>
          </body>
        </html>
      `
    };
  }

  return {
    subject: `Nouveau message de contact - ${escapedSubject}`,
    text: `
      Nouveau message de contact :
      
      Collectivité: ${escapedCollectivite}
      Type: ${escapedType}
      Taille: ${escapedTaille}
      
      Contact:
      Nom: ${escapedFirstname} ${escapedLastname}
      Fonction: ${escapedFonction}
      Email: ${escapedEmail}
      Téléphone: ${escapedTelephone}
      
      Sujet: ${escapedSubject}
      
      Message:
      ${escapedMessage}
    `,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { margin-bottom: 30px; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 8px; }
            .message { margin: 20px 0; padding: 20px; background: #fff; border-radius: 4px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Nouveau message de contact</h2>
            </div>
            <div class="content">
              <h3>Informations de la collectivité</h3>
              <p><strong>Nom :</strong> ${escapedCollectivite}</p>
              <p><strong>Type :</strong> ${escapedType}</p>
              <p><strong>Taille :</strong> ${escapedTaille}</p>
              
              <h3>Contact</h3>
              <p><strong>Nom :</strong> ${escapedFirstname} ${escapedLastname}</p>
              <p><strong>Fonction :</strong> ${escapedFonction}</p>
              <p><strong>Email :</strong> ${escapedEmail}</p>
              <p><strong>Téléphone :</strong> ${escapedTelephone}</p>
              
              <p><strong>Sujet :</strong> ${escapedSubject}</p>
              <div class="message">
                <strong>Message :</strong><br>
                ${escapedMessage.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>
        </body>
      </html>
    `
  };
};

export async function POST(request: Request) {
  try {
    // Rate limiting basique
    const now = Date.now();
    if (now - lastSubmitTime < SUBMIT_DELAY) {
      return NextResponse.json(
        { error: 'Veuillez patienter avant de renvoyer un message' },
        { status: 429 }
      );
    }

    // Parsing JSON sécurisé
    let rawData: unknown;
    try {
      rawData = await request.json();
    } catch (parseError) {
      console.error('Erreur parsing JSON');
      return NextResponse.json(
        { error: 'Format de requête invalide' },
        { status: 400 }
      );
    }

    // Validation stricte avec Zod
    let data: ContactFormData;
    try {
      data = ContactFormSchema.parse(rawData);
    } catch (validationError) {
      if (validationError instanceof z.ZodError) {
        const errors = validationError.errors.map(e => `${e.path.join('.')}: ${e.message}`);
        console.error('Erreurs validation:', errors);
        return NextResponse.json(
          { error: 'Données invalides. Veuillez vérifier votre formulaire.' },
          { status: 400 }
        );
      }
      throw validationError;
    }

    // Envoi des emails
    try {
      // Email pour l'équipe
      const teamTemplate = getEmailTemplate(data);
      await transporter.sendMail({
        from: {
          name: 'Wilmore Dynamics',
          address: process.env.SMTP_FROM || ''
        },
        to: process.env.CONTACT_EMAIL,
        subject: teamTemplate.subject,
        text: teamTemplate.text,
        html: teamTemplate.html,
      });

      // Email de confirmation
      const confirmationTemplate = getEmailTemplate(data, true);
      await transporter.sendMail({
        from: {
          name: 'Wilmore Dynamics',
          address: process.env.SMTP_FROM || ''
        },
        to: data.email,
        subject: confirmationTemplate.subject,
        text: confirmationTemplate.text,
        html: confirmationTemplate.html,
      });
    } catch (emailError) {
      console.error('Erreur envoi email');
      return NextResponse.json(
        { error: 'Une erreur est survenue lors de l\'envoi du message' },
        { status: 500 }
      );
    }

    lastSubmitTime = now;
    return NextResponse.json(
      { message: 'Message envoyé avec succès' },
      { status: 200 }
    );
  } catch (error) {
    // Erreur inattendue - ne pas exposer les détails
    console.error('Erreur inattendue dans POST /api/contact');
    return NextResponse.json(
      { error: 'Une erreur est survenue. Veuillez réessayer ultérieurement.' },
      { status: 500 }
    );
  }
} 