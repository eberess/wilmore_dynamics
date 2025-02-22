import type { Metadata } from 'next';
import ApplicationsClient from './components/applications-client';
import Navbar from "@/components/Navbar";

const baseUrl = process.env.NODE_ENV === 'production' 
  ? 'https://wilmore-dynamics.com'
  : 'http://localhost:3000';

export const metadata: Metadata = {
  title: 'Applications Open Source | Wilmore Dynamics',
  description: 'Découvrez nos applications open source conçues pour moderniser et optimiser vos infrastructures cloud.',
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: 'Applications Open Source | Wilmore Dynamics',
    description: 'Découvrez nos applications open source conçues pour moderniser et optimiser vos infrastructures cloud.',
    images: [
      {
        url: '/og/applications.jpg',
        width: 1200,
        height: 630,
        alt: 'Applications Open Source Wilmore Dynamics'
      }
    ],
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Wilmore Dynamics'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Applications Open Source | Wilmore Dynamics',
    description: 'Découvrez nos applications open source conçues pour moderniser et optimiser vos infrastructures cloud.',
    images: ['/og/applications.jpg'],
  }
};

export default function Applications() {
  return (
    <>
      <Navbar />
      <ApplicationsClient />
    </>
  );
} 