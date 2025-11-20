// components/Header.tsx
'use client'; // This component will use client-side interactivity (useState, Framer Motion)

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Hook to get current path
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // Hamburger and close icons

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Animation variants for mobile menu
  const menuVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.2, ease: 'easeIn' } },
  };

  return (
    <motion.header
      className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-md shadow-lg border-b border-gray-800"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Your Name/Logo */}
          <Link href="/" className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 hover:opacity-80 transition duration-150 relative z-20">
            Abdurrahman Alhassan
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-7 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-lg font-medium transition duration-300
                  ${pathname === link.href ? 'text-indigo-400' : 'text-gray-300 hover:text-indigo-300'}`}
              >
                {link.label}
                {/* Active Link Underline Animation */}
                {pathname === link.href && (
                  <motion.span
                    layoutId="underline" // Unique layoutId for smooth animation across links
                    className="absolute left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 to-purple-500 -bottom-2 rounded-full"
                  />
                )}
              </Link>
            ))}
            
            {/* CTA Button for Desktop */}
            <Link href="/contact" passHref>
              <motion.button
                className="ml-6 px-6 py-2 text-md font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-md"
                whileHover={{ scale: 1.05, boxShadow: '0 5px 20px rgba(124,58,237,0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
              </motion.button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center relative z-20">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-400 hover:text-indigo-300 transition duration-150"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-0 left-0 w-full h-screen bg-gray-950/95 backdrop-blur-md z-10 flex flex-col items-center justify-center space-y-8"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                className={`text-3xl font-bold py-3 transition duration-300
                  ${pathname === link.href ? 'text-indigo-400' : 'text-gray-300 hover:text-indigo-300'}`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" passHref>
              <motion.button
                className="mt-8 px-8 py-3 text-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hire Me
              </motion.button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;