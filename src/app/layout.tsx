import { Inter } from "next/font/google";
import "./globals.css";
import { defaultMetadata } from './metadata';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="Wilmore" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
              } else {
                document.documentElement.classList.remove('dark')
              }
            `,
          }}
        />
        <Navbar />
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
