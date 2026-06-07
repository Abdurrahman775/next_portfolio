// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Abdurrahman Alhassan | Full-Stack Developer & AI Engineer',
  description:
    'Full-Stack Developer and AI Engineer specializing in React, Python, Node.js, PHP, and PostgreSQL. Building scalable web applications, backend systems, and AI-powered tools.',
  keywords: [
    'Full-Stack Developer',
    'AI Engineer',
    'Software Engineer',
    'Backend Engineer',
    'React Developer',
    'Node.js',
    'Python',
    'PHP',
    'PostgreSQL',
    'Abdurrahman Alhassan',
  ],
  authors: [{ name: 'Abdurrahman Alhassan', url: 'https://abdurrahman775.vercel.app' }],
  openGraph: {
    title: 'Abdurrahman Alhassan | Full-Stack Developer & AI Engineer',
    description:
      'Building scalable web applications, backend systems, and AI-powered tools with React, Python, Node.js & PHP.',
    url: 'https://abdurrahman775.vercel.app',
    siteName: 'Abdurrahman Alhassan',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdurrahman Alhassan | Full-Stack Developer & AI Engineer',
    description:
      'Building scalable web apps, backend systems, and AI-powered tools with React, Python & Node.js.',
    creator: '@abdur_dev',
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