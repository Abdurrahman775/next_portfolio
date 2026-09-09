// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Abdurrahman Alhassan | Full-Stack Developer',
  description:
    'Full-Stack Developer from Nigeria specializing in Next.js, Flutter, PHP, and Python. Building web and mobile products — LMS platforms, fintech apps, client portals, and more.',
  keywords: [
    'Full-Stack Developer',
    'Next.js Developer',
    'Flutter Developer',
    'PHP Developer',
    'Web Developer Nigeria',
    'Remote Developer',
    'Mobile App Developer',
    'Abdurrahman Alhassan',
    'LunoByte',
  ],
  authors: [{ name: 'Abdurrahman Alhassan', url: 'https://abdurrahman775.vercel.app' }],
  openGraph: {
    title: 'Abdurrahman Alhassan | Full-Stack Developer',
    description:
      'Building web and mobile products with Next.js, Flutter, PHP & Python. Available for remote work.',
    url: 'https://abdurrahman775.vercel.app',
    siteName: 'Abdurrahman Alhassan',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdurrahman Alhassan | Full-Stack Developer',
    description:
      'Building web and mobile products with Next.js, Flutter & PHP. Available for remote work.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950 text-gray-100`}>
        <Header /> {/* Your Header component */}
        {children}
        <Footer /> {/* Placeholder for your Footer component */}
      </body>
    </html>
  );
}