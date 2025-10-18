import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio - Aryan Pratama Susanto',
  description: 'Web Developer Portfolio showcasing modern web development skills with React, Next.js, and more. Explore my projects and get in touch.',
  keywords: 'web developer, portfolio, React, Next.js, JavaScript, TypeScript, frontend developer',
  authors: [{ name: 'Aryan Pratama Susanto' }],
  openGraph: {
    title: 'Portfolio - Aryan Pratama Susanto',
    description: 'Web Developer Portfolio showcasing modern web development skills',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
