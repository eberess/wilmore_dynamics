import { Metadata } from 'next';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Applications | Wilmore Dynamics',
  description: 'Découvrez notre catalogue d\'applications open source et professionnelles',
};

export default function AppsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
} 