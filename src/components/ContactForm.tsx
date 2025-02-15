'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const schema = yup.object({
  firstname: yup.string().required('Le prénom est requis'),
  lastname: yup.string().required('Le nom est requis'),
  email: yup.string().email('Email invalide').required('L\'email est requis'),
  subject: yup.string().required('Le sujet est requis'),
  message: yup.string().required('Le message est requis').min(10, 'Le message doit contenir au moins 10 caractères'),
}).required();

type FormData = yup.InferType<typeof schema>;

export default function ContactForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Erreur lors de l\'envoi');

      setSubmitStatus('success');
      reset();
      router.push('/contact/success');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstname" className="block text-sm font-medium mb-2">
            Prénom
          </label>
          <input
            {...register('firstname')}
            type="text"
            className={`w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-white/[0.02] border ${errors.firstname ? 'border-red-500' : 'border-gray-200 dark:border-white/[0.1]'} focus:border-[#1a73e8] dark:focus:border-[#8ab4f8] focus:ring-1 focus:ring-[#1a73e8] dark:focus:ring-[#8ab4f8] outline-none transition-colors`}
          />
          {errors.firstname && (
            <p className="mt-1 text-sm text-red-500">{errors.firstname.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="lastname" className="block text-sm font-medium mb-2">
            Nom
          </label>
          <input
            {...register('lastname')}
            type="text"
            className={`w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-white/[0.02] border ${errors.lastname ? 'border-red-500' : 'border-gray-200 dark:border-white/[0.1]'} focus:border-[#1a73e8] dark:focus:border-[#8ab4f8] focus:ring-1 focus:ring-[#1a73e8] dark:focus:ring-[#8ab4f8] outline-none transition-colors`}
          />
          {errors.lastname && (
            <p className="mt-1 text-sm text-red-500">{errors.lastname.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          {...register('email')}
          type="email"
          className={`w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-white/[0.02] border ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-white/[0.1]'} focus:border-[#1a73e8] dark:focus:border-[#8ab4f8] focus:ring-1 focus:ring-[#1a73e8] dark:focus:ring-[#8ab4f8] outline-none transition-colors`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          Sujet
        </label>
        <select
          {...register('subject')}
          className={`w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-white/[0.02] border ${errors.subject ? 'border-red-500' : 'border-gray-200 dark:border-white/[0.1]'} focus:border-[#1a73e8] dark:focus:border-[#8ab4f8] focus:ring-1 focus:ring-[#1a73e8] dark:focus:ring-[#8ab4f8] outline-none transition-colors`}
        >
          <option value="">Sélectionnez un sujet</option>
          <option value="development">Développement sur mesure</option>
          <option value="cloud">Solutions Cloud & DevOps</option>
          <option value="opensource">Solutions Open Source</option>
          <option value="consulting">Conseil & Audit</option>
          <option value="other">Autre sujet</option>
        </select>
        {errors.subject && (
          <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          {...register('message')}
          rows={6}
          className={`w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-white/[0.02] border ${errors.message ? 'border-red-500' : 'border-gray-200 dark:border-white/[0.1]'} focus:border-[#1a73e8] dark:focus:border-[#8ab4f8] focus:ring-1 focus:ring-[#1a73e8] dark:focus:ring-[#8ab4f8] outline-none transition-colors resize-none`}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {submitStatus === 'success' && (
        <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/10 text-green-700 dark:text-green-400">
          Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/10 text-red-700 dark:text-red-400">
          Une erreur est survenue lors de l'envoi. Veuillez réessayer.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-3 rounded-lg bg-[#1a73e8] hover:bg-[#1557b0] text-white transition-colors text-[15px] font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message →'}
      </button>
    </form>
  );
} 