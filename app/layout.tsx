import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Providers from '@/components/Providers';

export const metadata: Metadata = {
  title: {
    default: 'Cincy Boxing - Personal Boxing Training in Cincinnati, Ohio',
    template: '%s | Cincy Boxing'
  },
  description: 'Professional boxing personal training in Cincinnati, Ohio. Get fight-ready with expert 1-on-1 sessions, small group training, and boxing fitness classes.',
  keywords: ['boxing training', 'Cincinnati', 'personal trainer', 'boxing fitness', 'Ohio', 'boxing gym'],
  authors: [{ name: 'Cincy Boxing' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cincyboxing.com',
    siteName: 'Cincy Boxing',
    title: 'Cincy Boxing - Personal Boxing Training in Cincinnati',
    description: 'Professional boxing personal training in Cincinnati, Ohio. Get fight-ready with expert training.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Cincy Boxing Training',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cincy Boxing - Personal Boxing Training in Cincinnati',
    description: 'Professional boxing personal training in Cincinnati, Ohio.',
    images: ['https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1200&h=630&fit=crop'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-boxing-black text-white antialiased">
        <Providers>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
