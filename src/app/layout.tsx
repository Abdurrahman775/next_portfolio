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
    'Python Developer',
    'FastAPI Developer',
    'Web Developer Nigeria',
    'Remote Developer',
    'Mobile App Developer',
    'Abdurrahman Alhassan',
    'LunoByte',
    'Algorithmic Trading',
    'React Developer',
  ],
  authors: [{ name: 'Abdurrahman Alhassan', url: 'https://abdurrahman775.vercel.app' }],
  metadataBase: new URL('https://abdurrahman775.vercel.app'),
  alternates: {
    canonical: 'https://abdurrahman775.vercel.app',
  },
  openGraph: {
    title: 'Abdurrahman Alhassan | Full-Stack Developer',
    description:
      'Building web and mobile products with Next.js, Flutter, PHP & Python. Available for remote work.',
    url: 'https://abdurrahman775.vercel.app',
    siteName: 'Abdurrahman Alhassan',
    type: 'website',
    images: [
      {
        url: '/images/traxovia.png',
        width: 1920,
        height: 954,
        alt: 'Abdurrahman Alhassan — Full-Stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdurrahman Alhassan | Full-Stack Developer',
    description:
      'Building web and mobile products with Next.js, Flutter & PHP. Available for remote work.',
    creator: '@Ibn__alhassan',
    images: ['/images/traxovia.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Abdurrahman Alhassan',
    url: 'https://abdurrahman775.vercel.app',
    email: 'abdurrahmanalhassan775@gmail.com',
    telephone: '+2348145919419',
    jobTitle: 'Full-Stack Developer',
    description: 'Full-Stack Developer and CTO at LunoByte with 3 years of experience building web, mobile, and AI-powered products.',
    image: 'https://abdurrahman775.vercel.app/Abdurrahman.jpg',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kano',
      addressCountry: 'NG',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'LunoByte',
      url: 'https://abdurrahman775.vercel.app',
      description: 'Software agency delivering web and mobile solutions — LMS platforms, fintech apps, school management systems, and more.',
    },
    sameAs: [
      'https://github.com/Abdurrahman775',
      'https://www.linkedin.com/in/abdurrahman-alhassan',
      'https://x.com/Ibn__alhassan',
      'https://www.instagram.com/ibn___alhassan/',
      'https://wa.me/2348145919419',
    ],
    knowsAbout: [
      'Next.js', 'React', 'TypeScript', 'Flutter', 'Dart',
      'PHP', 'Python', 'FastAPI', 'Node.js',
      'MySQL', 'PostgreSQL', 'Docker', 'Redis',
      'Machine Learning', 'XGBoost', 'Algorithmic Trading',
      'Full-Stack Development', 'Mobile App Development',
    ],
  };

  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950 text-gray-100`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}