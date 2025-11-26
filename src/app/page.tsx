// app/page.tsx
'use client'; // This directive makes the component a Client Component, necessary for Framer Motion

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FeaturedProjects from '@/components/FeaturedProjects';
import TypewriterText from '@/components/TypewriterText';
import {
  Code,
  Brush,
  GitPullRequest,
  Sun,
  ArrowRight,
} from 'lucide-react'; // Example icons, install lucide-react if you haven't: npm install lucide-react

// --- Variants for Framer Motion Animations ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger children animations
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
} as const;

const textRevealVariants = {
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: 'auto',
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const skillRoles = [
  'Full-Stack Developer',
  'UI/UX Designer',
  'Network Engineer',
  'Solar Solutions Specialist',
];

const nexusSkills = [
  {
    id: 'code',
    icon: Code,
    title: 'Code',
    tagline: 'Architecting robust digital foundations.',
    link: '/projects?category=development',
  },
  {
    id: 'design',
    icon: Brush,
    title: 'Design',
    tagline: 'Crafting intuitive and engaging experiences.',
    link: '/projects?category=design',
  },
  {
    id: 'connect',
    icon: GitPullRequest, // Or Network, Cloud icons
    title: 'Connect',
    tagline: 'Building reliable and secure infrastructures.',
    link: '/projects?category=networking',
  },
  {
    id: 'power',
    icon: Sun,
    title: 'Power',
    tagline: 'Harnessing sustainable energy solutions.',
    link: '/projects?category=solar',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-[80vh] py-20 px-4 md:px-8">
        {/* Background Animation - Subtle abstract network/energy grid */}
        <div className="absolute inset-0 z-0 opacity-20">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-fuchsia-900 mix-blend-lighten opacity-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-tl from-sky-900 via-cyan-900 to-green-900 mix-blend-lighten opacity-30"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse', delay: 2.5 }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20 text-center md:text-left">
          {/* Text Content */}
          <motion.div
            className="md:w-3/5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-4">
              Hello, I'm <TypewriterText text="Abdurrahman Alhassan" className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400" />
            </motion.h1>
            <motion.p variants={itemVariants} className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-200 mb-6">
              Architecting Solutions Across Digital & Physical Realms.
            </motion.p>
            
            {/* Dynamic Role Showcase */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center md:justify-start gap-3 mb-8"
            >
              {skillRoles.map((role, index) => (
                <motion.span
                  key={role}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                  className="px-4 py-2 bg-indigo-700/30 border border-indigo-500/50 rounded-full text-sm font-medium text-indigo-200 shadow-lg"
                >
                  {role}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center md:justify-start space-x-4 mt-8"
            >
              <Link href="/projects" passHref>
                <motion.button
                  className="group relative px-7 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-lg overflow-hidden"
                  whileHover={{ scale: 1.05, boxShadow: '0 8px 25px rgba(124,58,237,0.4)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center">
                    Explore My Innovations <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </Link>
              <Link href="/contact" passHref>
                <motion.button
                  className="px-7 py-3 text-lg font-semibold text-indigo-300 border border-indigo-500 rounded-full hover:bg-indigo-700/20 transition-colors duration-300 shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Profile Image with Glowing Orb */}
          <motion.div
            className="relative w-72 h-72 md:w-80 md:h-80 flex-shrink-0"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 80, damping: 10, delay: 0.8 }}
          >
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-indigo-700 to-purple-700 border-4 border-white/20">
              <Image
                src="/Abdurrahman.jpg" // Ensure this image is in your /public folder
                alt="Professional Profile Photo of Abdurrahman Alhassan"
                fill
                style={{ objectFit: 'cover' }}
                priority // Preload the image for better performance
                className="z-10"
              />
              {/* Pulsating Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    '0 0 0px rgba(139, 92, 246, 0.4)',
                    '0 0 20px rgba(139, 92, 246, 0.7)',
                    '0 0 0px rgba(139, 92, 246, 0.4)',
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* "The Nexus" - Skill Intersection Showcase */}
      <section className="py-20 bg-gray-900 border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl font-bold text-white mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            The Nexus of My Expertise
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {nexusSkills.map((skill, index) => (
              <Link href={skill.link} key={skill.id} passHref>
                <motion.div
                  className="relative flex flex-col items-center justify-center p-8 bg-gray-800/60 rounded-xl border border-gray-700 group cursor-pointer overflow-hidden"
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(0,0,0,0.4)', borderColor: 'rgb(124,58,237)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Background overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />

                  <skill.icon className="w-16 h-16 mb-4 text-indigo-400 group-hover:text-purple-400 transition-colors duration-300 relative z-10" />
                  <h3 className="text-2xl font-semibold text-white mb-2 relative z-10">{skill.title}</h3>
                  <p className="text-gray-400 text-center relative z-10">{skill.tagline}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

     {/* Placeholder for Featured Projects Section */}
<section className="py-20 bg-gray-950">
   <FeaturedProjects />
</section>
    </main>
  );
}