'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstname || !formData.lastname || !formData.email || !formData.subject || !formData.message) {
      alert('Tous les champs sont requis.');
      return;
    }
    setFormStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de l\'envoi du formulaire');
      }

      setFormStatus('success');
      setFormData({ firstname: '', lastname: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Erreur :', error);
      setFormStatus('error');
    }
  };

  return (
    <div className="space-y-4">
      {formStatus === 'success' && (
        <div className="p-4 bg-green-100 text-green-700 rounded-lg">
          Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
        </div>
      )}
      
      {formStatus === 'error' && (
        <div className="p-4 bg-red-100 text-red-700 rounded-lg">
          Une erreur est survenue lors de l&apos;envoi du message. Veuillez réessayer.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative">
            <input
              type="text"
              id="firstname"
              required
              value={formData.firstname}
              onChange={(e) => setFormData(prev => ({ ...prev, firstname: e.target.value }))}
              placeholder=" "
              className={`
                peer w-full px-3 py-4 rounded-lg
                bg-transparent
                border border-gray-200/50 dark:border-white/[0.1]
                focus:border-blue-500 dark:focus:border-blue-400
                focus:ring-0 outline-none
                text-base
                transition-colors duration-200
                placeholder-transparent
              `}
            />
            <label
              htmlFor="firstname"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 peer-focus:text-xs peer-focus:top-2 peer-focus:text-blue-500 dark:peer-focus:text-blue-400"
            >
              Prénom
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              id="lastname"
              required
              value={formData.lastname}
              onChange={(e) => setFormData(prev => ({ ...prev, lastname: e.target.value }))}
              placeholder=" "
              className={`
                peer w-full px-3 py-4 rounded-lg
                bg-transparent
                border border-gray-200/50 dark:border-white/[0.1]
                focus:border-blue-500 dark:focus:border-blue-400
                focus:ring-0 outline-none
                text-base
                transition-colors duration-200
                placeholder-transparent
              `}
            />
            <label
              htmlFor="lastname"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 peer-focus:text-xs peer-focus:top-2 peer-focus:text-blue-500 dark:peer-focus:text-blue-400"
            >
              Nom
            </label>
          </div>
        </div>

        <div className="relative">
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            placeholder=" "
            className={`
              peer w-full px-3 py-4 rounded-lg
              bg-transparent
              border border-gray-200/50 dark:border-white/[0.1]
              focus:border-blue-500 dark:focus:border-blue-400
              focus:ring-0 outline-none
              text-base
              transition-colors duration-200
              placeholder-transparent
            `}
          />
          <label
            htmlFor="email"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 peer-focus:text-xs peer-focus:top-2 peer-focus:text-blue-500 dark:peer-focus:text-blue-400"
          >
            Email
          </label>
        </div>

        <div className="relative">
          <input
            type="text"
            id="subject"
            required
            value={formData.subject}
            onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
            placeholder=" "
            className={`
              peer w-full px-3 py-4 rounded-lg
              bg-transparent
              border border-gray-200/50 dark:border-white/[0.1]
              focus:border-blue-500 dark:focus:border-blue-400
              focus:ring-0 outline-none
              text-base
              transition-colors duration-200
              placeholder-transparent
            `}
          />
          <label
            htmlFor="subject"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 peer-focus:text-xs peer-focus:top-2 peer-focus:text-blue-500 dark:peer-focus:text-blue-400"
          >
            Sujet
          </label>
        </div>

        <div className="relative col-span-2">
          <textarea
            id="message"
            rows={4}
            required
            value={formData.message}
            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            placeholder=" "
            className={`
              peer w-full px-3 py-4 rounded-lg
              bg-transparent
              border border-gray-200/50 dark:border-white/[0.1]
              focus:border-blue-500 dark:focus:border-blue-400
              focus:ring-0 outline-none
              text-base
              transition-colors duration-200
              placeholder-transparent
            `}
          />
          <label
            htmlFor="message"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 peer-focus:text-xs peer-focus:top-2 peer-focus:text-blue-500 dark:peer-focus:text-blue-400"
          >
            Message
          </label>
        </div>

        <button 
          type="submit" 
          disabled={formStatus === 'submitting'}
          className={`
            w-full px-4 py-2 rounded-lg
            ${formStatus === 'submitting' 
              ? 'bg-blue-400 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700'
            }
            text-white transition-colors duration-200
          `}
        >
          {formStatus === 'submitting' ? 'Envoi en cours...' : 'Envoyer'}
        </button>
      </form>
    </div>
  );
} 