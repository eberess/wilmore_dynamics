import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://wilmoredynamics.com'),
  title: 'Open Source Store - Alternatives open source pour votre infrastructure',
  description: 'Découvrez et déployez des alternatives open source pour remplacer vos outils propriétaires. Une sélection d\'applications auto-hébergées pour votre infrastructure.',
  openGraph: {
    title: 'Open Source Store - Alternatives open source',
    description: 'Découvrez des alternatives open source pour votre infrastructure',
    type: 'website',
    locale: 'fr_FR',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Open Source Store'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Open Source Store',
    description: 'Alternatives open source pour votre infrastructure',
    images: ['/og-image.jpg']
  },
  keywords: [
    'open source',
    'alternatives',
    'self-hosted',
    'infrastructure',
    'kubernetes',
    'docker',
    'devops'
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'votre-code-verification',
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 