// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header'; // Import the Header component
import Footer from '@/components/Footer'; // You'll create this next

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Abdurrahman Alhassan - The Modern Innovator', // Customize your title
  description: 'Full-Stack Developer, UI/UX Designer, Network Engineer, & Solar Installer', // Customize your description
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