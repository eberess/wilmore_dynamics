import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  firstname: string;
  lastname: string;
  email: string;
  subject: string;
  message: string;
  collectivite?: string;
  type?: 'commune' | 'epci' | 'autre';
  taille?: string;
  fonction?: string;
  telephone?: string;
}

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
transporter.verify(function(error, success) {
  if (error) {
    console.error('Erreur de configuration SMTP:', error);
  } else {
    console.log('Serveur SMTP prêt à envoyer des emails');
  }
});

const getEmailTemplate = (data: ContactFormData, isConfirmation = false) => {
  const { firstname, lastname, email, subject, message } = data;
  
  if (isConfirmation) {
    return {
      subject: `Confirmation de votre message - Wilmore Dynamics`,
      text: `
        Bonjour ${firstname} ${lastname},

        Nous avons bien reçu votre message et nous vous en remercions.
        Nous vous répondrons dans les plus brefs délais.

        Récapitulatif de votre message :
        Sujet: ${subject}
        Message: ${message}

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
                <p>Bonjour ${firstname} ${lastname},</p>
                <p>Nous avons bien reçu votre message et nous vous en remercions.<br>
                Nous vous répondrons dans les plus brefs délais.</p>
                <div style="margin: 20px 0; padding: 20px; background: #fff; border-radius: 4px;">
                  <h3>Récapitulatif de votre message :</h3>
                  <p><strong>Sujet :</strong> ${subject}</p>
                  <p><strong>Message :</strong><br>${message.replace(/\n/g, '<br>')}</p>
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
    subject: `Nouveau message de contact - ${subject}`,
    text: `
      Nouveau message de contact :
      
      Collectivité: ${data.collectivite}
      Type: ${data.type}
      Taille: ${data.taille}
      
      Contact:
      Nom: ${firstname} ${lastname}
      Fonction: ${data.fonction}
      Email: ${email}
      Téléphone: ${data.telephone}
      
      Sujet: ${subject}
      
      Message:
      ${message}
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
              <p><strong>Nom :</strong> ${data.collectivite}</p>
              <p><strong>Type :</strong> ${data.type}</p>
              <p><strong>Taille :</strong> ${data.taille}</p>
              
              <h3>Contact</h3>
              <p><strong>Nom :</strong> ${firstname} ${lastname}</p>
              <p><strong>Fonction :</strong> ${data.fonction}</p>
              <p><strong>Email :</strong> ${email}</p>
              <p><strong>Téléphone :</strong> ${data.telephone}</p>
              
              <p><strong>Sujet :</strong> ${subject}</p>
              <div class="message">
                <strong>Message :</strong><br>
                ${message.replace(/\n/g, '<br>')}
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
    const now = Date.now();
    if (now - lastSubmitTime < SUBMIT_DELAY) {
      return NextResponse.json(
        { error: 'Veuillez patienter avant de renvoyer un message' },
        { status: 429 }
      );
    }

    const data: ContactFormData = await request.json();

    // Validation de base
    if (!data.firstname || !data.lastname || !data.email || !data.subject || !data.message) {
      return NextResponse.json(
        { error: 'Tous les champs requis doivent être remplis' },
        { status: 400 }
      );
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Format d\'email invalide' },
        { status: 400 }
      );
    }

    // Email pour l'équipe
    console.log('Tentative d\'envoi à l\'équipe...');
    const teamTemplate = getEmailTemplate(data);
    const teamResult = await transporter.sendMail({
      from: {
        name: 'Wilmore Dynamics',
        address: process.env.SMTP_FROM || ''
      },
      to: process.env.CONTACT_EMAIL,
      subject: teamTemplate.subject,
      text: teamTemplate.text,
      html: teamTemplate.html,
    });
    console.log('Email équipe envoyé:', teamResult);

    // Email de confirmation
    console.log('Tentative d\'envoi de confirmation...');
    const confirmationTemplate = getEmailTemplate(data, true);
    const confirmResult = await transporter.sendMail({
      from: {
        name: 'Wilmore Dynamics',
        address: process.env.SMTP_FROM || ''
      },
      to: data.email,
      subject: confirmationTemplate.subject,
      text: confirmationTemplate.text,
      html: confirmationTemplate.html,
    });
    console.log('Email confirmation envoyé:', confirmResult);

    lastSubmitTime = now;
    return NextResponse.json({ message: 'Message envoyé avec succès' });
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de l\'envoi du message' },
      { status: 500 }
    );
  }
}

console.log('SMTP_HOST:', process.env.SMTP_HOST); 