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
  subject: yup.string().required('Le type de projet est requis'),
  message: yup.string().required('Le message est requis').min(10, 'Le message doit contenir au moins 10 caractères'),
}).required();

type FormData = yup.InferType<typeof schema>;

export default function ContactForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const selectedSubject = watch('subject');

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erreur l&apos;envoi');
      }

      setSubmitStatus('success');
      reset();
      router.push('/contact/success');

    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Une erreur inattendue est survenue');
      console.error('Erreur lors de l&apos;envoi du formulaire:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="relative">
          <input
            {...register('firstname')}
            type="text"
            id="firstname"
            placeholder=" "
            className={`
              peer w-full px-3 py-4 rounded-lg
              bg-transparent
              border ${errors.firstname ? 'border-red-500' : 'border-gray-200/50 dark:border-white/[0.1]'}
              focus:border-blue-500 dark:focus:border-blue-400
              focus:ring-0 focus:ring-offset-0
              outline-none
              text-base
              transition-colors duration-200
              placeholder-transparent
              appearance-none
            `}
          />
          <label
            htmlFor="firstname"
            className={`
              absolute left-3 top-1/2 -translate-y-1/2
              text-gray-500
              transition-transform duration-200 ease-out
              origin-[0]
              scale-100
              peer-focus:scale-75 peer-focus:top-2 peer-focus:translate-y-0
              peer-focus:text-blue-500 dark:peer-focus:text-blue-400
              peer-[:not(:placeholder-shown)]:scale-75
              peer-[:not(:placeholder-shown)]:top-2
              peer-[:not(:placeholder-shown)]:translate-y-0
              ${errors.firstname ? 'text-red-500' : ''}
            `}
          >
            Prénom
          </label>
          {errors.firstname && (
            <p className="mt-1 text-xs text-red-600/80 dark:text-red-400/80 pl-1">
              {errors.firstname.message}
            </p>
          )}
        </div>

        <div className="relative">
          <input
            {...register('lastname')}
            type="text"
            id="lastname"
            placeholder=" "
            className={`
              peer w-full px-3 py-4 rounded-lg
              bg-transparent
              border ${errors.lastname ? 'border-red-500' : 'border-gray-200/50 dark:border-white/[0.1]'}
              focus:border-blue-500 dark:focus:border-blue-400
              focus:ring-0 outline-none
              text-base
              transition-colors
              placeholder-transparent
            `}
          />
          <label
            htmlFor="lastname"
            className={`
              absolute left-3 top-1/2 -translate-y-1/2
              text-gray-500
              transition-all duration-200
              peer-focus:text-xs peer-focus:top-2 peer-focus:translate-y-0
              peer-focus:text-blue-500 dark:peer-focus:text-blue-400
              peer-[:not(:placeholder-shown)]:text-xs
              peer-[:not(:placeholder-shown)]:top-2
              peer-[:not(:placeholder-shown)]:translate-y-0
              ${errors.lastname ? 'text-red-500' : ''}
            `}
          >
            Nom
          </label>
          {errors.lastname && (
            <p className="mt-1 text-xs text-red-600/90 dark:text-red-400/90">
              {errors.lastname.message}
            </p>
          )}
        </div>
      </div>

      <div className="relative">
        <input
          {...register('email')}
          type="email"
          id="email"
          placeholder=" "
          className={`
            peer w-full px-3 py-4 rounded-lg
            bg-transparent
            border ${errors.email ? 'border-red-500' : 'border-gray-200/50 dark:border-white/[0.1]'}
            focus:border-blue-500 dark:focus:border-blue-400
            focus:ring-0 outline-none
            text-base
            transition-colors
            placeholder-transparent
          `}
        />
        <label
          htmlFor="email"
          className={`
            absolute left-3 top-1/2 -translate-y-1/2
            text-gray-500
            transition-all duration-200
            peer-focus:text-xs peer-focus:top-2 peer-focus:translate-y-0
            peer-focus:text-blue-500 dark:peer-focus:text-blue-400
            peer-[:not(:placeholder-shown)]:text-xs
            peer-[:not(:placeholder-shown)]:top-2
            peer-[:not(:placeholder-shown)]:translate-y-0
            ${errors.email ? 'text-red-500' : ''}
          `}
        >
          Email
        </label>
        {errors.email && (
          <p className="mt-1 text-xs text-red-600/90 dark:text-red-400/90">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-3">
        <label className="block text-sm text-gray-500">
          Type de projet
        </label>
        <div className="grid md:grid-cols-2 gap-2">
          {[
            {
              value: "development",
              label: "Développement",
              description: "Applications web & mobile",
              icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              )
            },
            {
              value: "cloud",
              label: "Cloud & DevOps",
              description: "Infrastructure & automatisation",
              icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              )
            },
            {
              value: "opensource",
              label: "Open Source",
              description: "Solutions personnalisables",
              icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              )
            },
            {
              value: "consulting",
              label: "Conseil & Audit",
              description: "Expertise technique",
              icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              )
            }
          ].map((option) => (
            <label
              key={option.value}
              className={`
                relative p-3 rounded-lg cursor-pointer
                bg-transparent
                border border-gray-200/50 dark:border-white/[0.1]
                hover:bg-gray-50/50 dark:hover:bg-white/[0.02]
                transition-colors
                ${selectedSubject === option.value ? 'border-blue-500 dark:border-blue-400' : ''}
              `}
            >
              <input
                type="radio"
                value={option.value}
                {...register('subject')}
                className="hidden"
              />
              <div className="flex items-start gap-3">
                <div className={`
                  shrink-0 mt-0.5
                  ${selectedSubject === option.value 
                    ? 'text-blue-500 dark:text-blue-400' 
                    : 'text-gray-400'}
                `}>
                  {option.icon}
                </div>
                <div>
                  <div className="text-sm font-medium">
                    {option.label}
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {option.description}
                  </p>
                </div>
              </div>
            </label>
          ))}
        </div>
        {errors.subject && (
          <p className="text-xs text-red-600/90 dark:text-red-400/90">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div className="relative">
        <textarea
          {...register('message')}
          id="message"
          rows={4}
          placeholder=" "
          className={`
            peer w-full px-3 py-4 rounded-lg
            bg-transparent
            border ${errors.message ? 'border-red-500' : 'border-gray-200/50 dark:border-white/[0.1]'}
            focus:border-blue-500 dark:focus:border-blue-400
            focus:ring-0 outline-none
            text-base
            transition-colors
            resize-none
            placeholder-transparent
          `}
        />
        <label
          htmlFor="message"
          className={`
            absolute left-3 top-6
            text-gray-500
            transition-all duration-200
            peer-focus:text-xs peer-focus:top-2
            peer-focus:text-blue-500 dark:peer-focus:text-blue-400
            peer-[:not(:placeholder-shown)]:text-xs
            peer-[:not(:placeholder-shown)]:top-2
            ${errors.message ? 'text-red-500' : ''}
          `}
        >
          Message
        </label>
        {errors.message && (
          <p className="mt-1 text-xs text-red-600/90 dark:text-red-400/90">
            {errors.message.message}
          </p>
        )}
      </div>

      {submitStatus && (
        <div className={`
          px-3 py-2 rounded-lg text-sm
          ${submitStatus === 'success' 
            ? 'bg-green-50 dark:bg-green-900/10 text-green-700 dark:text-green-400' 
            : 'bg-red-50 dark:bg-red-900/10 text-red-700 dark:text-red-400'}
        `}>
          {submitStatus === 'success' 
            ? 'Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.'
            : errorMessage || 'Une erreur est survenue lors de l&apos;envoi. Veuillez réessayer.'}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="
          w-full h-11
          bg-blue-600 dark:bg-blue-500
          text-white text-sm font-medium
          rounded-lg
          transition-all duration-200
          hover:bg-blue-700 dark:hover:bg-blue-600
          hover:shadow-md hover:shadow-blue-500/10
          active:scale-[0.99]
          disabled:bg-gray-200 dark:disabled:bg-gray-800
          disabled:text-gray-500 dark:disabled:text-gray-400
          disabled:cursor-not-allowed
          disabled:hover:shadow-none
        "
      >
        {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
      </button>
    </form>
  );
} 