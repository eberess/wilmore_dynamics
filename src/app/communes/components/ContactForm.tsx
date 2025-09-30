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
  telephone: yup.string()
    .required('Le téléphone est requis')
    .matches(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/, 'Format de téléphone invalide'),
  collectivite: yup.string().required('Le nom de la collectivité est requis'),
  type: yup.string()
    .oneOf(['commune', 'epci', 'autre'], 'Type de collectivité invalide')
    .required('Le type de collectivité est requis'),
  taille: yup.string()
    .oneOf(['moins-3500', '3500-10000', '10000-50000', 'plus-50000'], 'Taille invalide')
    .required('La taille est requise'),
  fonction: yup.string().required('La fonction est requise'),
  subject: yup.string().required('Le sujet est requis'),
  message: yup.string()
    .required('Le message est requis')
    .min(10, 'Le message doit contenir au moins 10 caractères'),
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
        throw new Error(errorData.error || 'Erreur lors de l\'envoi');
      }

      setSubmitStatus('success');
      reset();
      router.push('/contact/success');

    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Une erreur inattendue est survenue');
      console.error('Erreur lors de l\'envoi du formulaire:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-4">
        {/* Type de collectivité */}
        <div className="relative">
          <select
            {...register('type')}
            id="type"
            className={`
              peer w-full px-3 py-4 rounded-lg
              bg-transparent
              border ${errors.type ? 'border-red-500' : 'border-gray-200/50 dark:border-white/[0.1]'}
              focus:border-blue-500 dark:focus:border-blue-400
              focus:ring-0 outline-none
              text-base
              transition-colors
            `}
          >
            <option value="">Sélectionnez un type</option>
            <option value="commune">Commune</option>
            <option value="epci">EPCI</option>
            <option value="autre">Autre</option>
          </select>
          <label
            htmlFor="type"
            className={`
              absolute left-3 -top-2.5
              text-sm text-gray-500
              transition-all duration-200
              ${errors.type ? 'text-red-500' : ''}
            `}
          >
            Type de collectivité
          </label>
          {errors.type && (
            <p className="mt-1 text-xs text-red-600/90 dark:text-red-400/90">
              {errors.type.message}
            </p>
          )}
        </div>

        {/* Nom de la collectivité */}
        <div className="relative">
          <input
            {...register('collectivite')}
            type="text"
            id="collectivite"
            placeholder=" "
            className={`
              peer w-full px-3 py-4 rounded-lg
              bg-transparent
              border ${errors.collectivite ? 'border-red-500' : 'border-gray-200/50 dark:border-white/[0.1]'}
              focus:border-blue-500 dark:focus:border-blue-400
              focus:ring-0 outline-none
              text-base
              transition-colors
              placeholder-transparent
            `}
          />
          <label
            htmlFor="collectivite"
            className={`
              absolute left-3 top-1/2 -translate-y-1/2
              text-gray-500
              transition-all duration-200
              peer-focus:text-xs peer-focus:top-2 peer-focus:translate-y-0
              peer-focus:text-blue-500 dark:peer-focus:text-blue-400
              peer-[:not(:placeholder-shown)]:text-xs
              peer-[:not(:placeholder-shown)]:top-2
              peer-[:not(:placeholder-shown)]:translate-y-0
              ${errors.collectivite ? 'text-red-500' : ''}
            `}
          >
            Nom de la collectivité
          </label>
          {errors.collectivite && (
            <p className="mt-1 text-xs text-red-600/90 dark:text-red-400/90">
              {errors.collectivite.message}
            </p>
          )}
        </div>

        {/* Taille */}
        <div className="relative">
          <select
            {...register('taille')}
            id="taille"
            className={`
              peer w-full px-3 py-4 rounded-lg
              bg-transparent
              border ${errors.taille ? 'border-red-500' : 'border-gray-200/50 dark:border-white/[0.1]'}
              focus:border-blue-500 dark:focus:border-blue-400
              focus:ring-0 outline-none
              text-base
              transition-colors
            `}
          >
            <option value="">Sélectionnez une taille</option>
            <option value="moins-3500">Moins de 3 500 habitants</option>
            <option value="3500-10000">3 500 à 10 000 habitants</option>
            <option value="10000-50000">10 000 à 50 000 habitants</option>
            <option value="plus-50000">Plus de 50 000 habitants</option>
          </select>
          <label
            htmlFor="taille"
            className={`
              absolute left-3 -top-2.5
              text-sm text-gray-500
              transition-all duration-200
              ${errors.taille ? 'text-red-500' : ''}
            `}
          >
            Taille de la collectivité
          </label>
          {errors.taille && (
            <p className="mt-1 text-xs text-red-600/90 dark:text-red-400/90">
              {errors.taille.message}
            </p>
          )}
        </div>

        {/* Fonction */}
        <div className="relative">
          <input
            {...register('fonction')}
            type="text"
            id="fonction"
            placeholder=" "
            className={`
              peer w-full px-3 py-4 rounded-lg
              bg-transparent
              border ${errors.fonction ? 'border-red-500' : 'border-gray-200/50 dark:border-white/[0.1]'}
              focus:border-blue-500 dark:focus:border-blue-400
              focus:ring-0 outline-none
              text-base
              transition-colors
              placeholder-transparent
            `}
          />
          <label
            htmlFor="fonction"
            className={`
              absolute left-3 top-1/2 -translate-y-1/2
              text-gray-500
              transition-all duration-200
              peer-focus:text-xs peer-focus:top-2 peer-focus:translate-y-0
              peer-focus:text-blue-500 dark:peer-focus:text-blue-400
              peer-[:not(:placeholder-shown)]:text-xs
              peer-[:not(:placeholder-shown)]:top-2
              peer-[:not(:placeholder-shown)]:translate-y-0
              ${errors.fonction ? 'text-red-500' : ''}
            `}
          >
            Fonction
          </label>
          {errors.fonction && (
            <p className="mt-1 text-xs text-red-600/90 dark:text-red-400/90">
              {errors.fonction.message}
            </p>
          )}
        </div>

        {/* Prénom */}
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
              focus:ring-0 outline-none
              text-base
              transition-colors
              placeholder-transparent
            `}
          />
          <label
            htmlFor="firstname"
            className={`
              absolute left-3 top-1/2 -translate-y-1/2
              text-gray-500
              transition-all duration-200
              peer-focus:text-xs peer-focus:top-2 peer-focus:translate-y-0
              peer-focus:text-blue-500 dark:peer-focus:text-blue-400
              peer-[:not(:placeholder-shown)]:text-xs
              peer-[:not(:placeholder-shown)]:top-2
              peer-[:not(:placeholder-shown)]:translate-y-0
              ${errors.firstname ? 'text-red-500' : ''}
            `}
          >
            Prénom
          </label>
          {errors.firstname && (
            <p className="mt-1 text-xs text-red-600/90 dark:text-red-400/90">
              {errors.firstname.message}
            </p>
          )}
        </div>

        {/* Nom */}
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

        {/* Email */}
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

        {/* Téléphone */}
        <div className="relative">
          <input
            {...register('telephone')}
            type="tel"
            id="telephone"
            placeholder=" "
            className={`
              peer w-full px-3 py-4 rounded-lg
              bg-transparent
              border ${errors.telephone ? 'border-red-500' : 'border-gray-200/50 dark:border-white/[0.1]'}
              focus:border-blue-500 dark:focus:border-blue-400
              focus:ring-0 outline-none
              text-base
              transition-colors
              placeholder-transparent
            `}
          />
          <label
            htmlFor="telephone"
            className={`
              absolute left-3 top-1/2 -translate-y-1/2
              text-gray-500
              transition-all duration-200
              peer-focus:text-xs peer-focus:top-2 peer-focus:translate-y-0
              peer-focus:text-blue-500 dark:peer-focus:text-blue-400
              peer-[:not(:placeholder-shown)]:text-xs
              peer-[:not(:placeholder-shown)]:top-2
              peer-[:not(:placeholder-shown)]:translate-y-0
              ${errors.telephone ? 'text-red-500' : ''}
            `}
          >
            Téléphone
          </label>
          {errors.telephone && (
            <p className="mt-1 text-xs text-red-600/90 dark:text-red-400/90">
              {errors.telephone.message}
            </p>
          )}
        </div>
      </div>

      {/* Sujet */}
      <div className="space-y-3">
        <label className="block text-sm text-gray-500">
          Sujet de votre message
        </label>
        <div className="grid md:grid-cols-2 gap-2">
          {[
            {
              value: "securite",
              label: "Sécurité",
              description: "Protection des données et systèmes",
              icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              )
            },
            {
              value: "transformation",
              label: "Transformation numérique",
              description: "Modernisation des services",
              icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
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
                ${watch('subject') === option.value ? 'border-blue-500 dark:border-blue-400' : ''}
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
                  ${watch('subject') === option.value 
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

      {/* Message */}
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
            : errorMessage || 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer.'}
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