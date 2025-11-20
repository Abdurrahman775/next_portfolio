// components/Footer.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react'; // Social media icons

const socialLinks = [
  { href: 'https://github.com/Abdurrahman775', icon: Github, label: 'GitHub' },
  { href: 'www.linkedin.com/in/abdurrahman-alhassan-04b271318', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:abdurrahmanalhassan775@gmail.com', icon: Mail, label: 'Email' },
];

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="bg-gray-950 py-10 border-t border-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition duration-300"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={item.label}
            >
              <item.icon size={24} />
            </motion.a>
          ))}
        </div>

        {/* Quick Links */}
        <div className="text-sm space-x-4 text-gray-500 mb-4">
          <Link href="/projects" className="hover:text-indigo-400 transition">Projects</Link>
          <span className="text-gray-700">|</span>
          <Link href="/about" className="hover:text-indigo-400 transition">About</Link>
          <span className="text-gray-700">|</span>
          <Link href="/contact" className="hover:text-indigo-400 transition">Contact</Link>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Abdurrahman Alhassan. Architecting Solutions.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;