'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      // Simuler un appel API
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFormStatus('success');
      setFormData({ name: '', email: '', description: '' });
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 not-prose">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Nom complet
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className="w-full px-4 py-2 bg-white/[0.05] border border-white/[0.1] rounded-lg 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 
                   text-gray-900 dark:text-gray-100 transition-all duration-300
                   hover:border-blue-500/30"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          className="w-full px-4 py-2 bg-white/[0.05] border border-white/[0.1] rounded-lg 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 
                   text-gray-900 dark:text-gray-100 transition-all duration-300
                   hover:border-blue-500/30"
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Description du matériel
        </label>
        <textarea
          id="description"
          rows={4}
          required
          value={formData.description}
          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
          className="w-full px-4 py-2 bg-white/[0.05] border border-white/[0.1] rounded-lg 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 
                   text-gray-900 dark:text-gray-100 transition-all duration-300
                   hover:border-blue-500/30"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={formStatus === 'submitting'}
        className={`w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 
                  rounded-lg transition-all duration-300 font-semibold
                  ${formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'}
                  ${formStatus === 'success' ? 'bg-green-500' : ''}
                  ${formStatus === 'error' ? 'bg-red-500' : ''}`}
      >
        {formStatus === 'submitting' ? 'Envoi en cours...' :
         formStatus === 'success' ? 'Demande envoyée !' :
         formStatus === 'error' ? 'Erreur, réessayer' :
         'Envoyer la demande'}
      </button>

      {formStatus === 'success' && (
        <p className="text-green-500 text-sm text-center mt-2">
          Nous avons bien reçu votre demande. Nous vous contacterons rapidement.
        </p>
      )}
      {formStatus === 'error' && (
        <p className="text-red-500 text-sm text-center mt-2">
          Une erreur est survenue. Veuillez réessayer.
        </p>
      )}
    </form>
  );
} 