import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Open Source Store - Applications',
  description: 'Découvrez et déployez des alternatives open source pour votre infrastructure',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 