// app/about/page.tsx
'use client';

import { motion } from 'framer-motion';
import {
  Code,
  Brush,
  Zap, // Electrical/Energy
  Server, // Networking
  Briefcase,
  Star,
} from 'lucide-react';

// Define your career timeline events
const timelineEvents = [
  {
    year: 2023,
    title: 'Pioneered Smart Grid Dashboard',
    description: 'Led full-stack development of a Next.js/TypeScript dashboard integrating real-time solar data via REST APIs.',
    icon: Code,
    category: 'Development',
    color: 'border-indigo-500',
  },
  {
    year: 2022,
    title: 'Certified Solar PV Installer',
    description: 'Completed certification and began executing residential and light commercial solar installation and design projects.',
    icon: Zap,
    category: 'Solar',
    color: 'border-green-500',
  },
  {
    year: 2020,
    title: 'Senior UI/UX Designer Role',
    description: 'Transitioned to focusing on user-centered design, prototyping, and accessibility standards (WCAG) for enterprise applications.',
    icon: Brush,
    category: 'Design',
    color: 'border-purple-500',
  },
  {
    year: 2018,
    title: 'Network Infrastructure Consultant',
    description: 'Designed and secured complex VPN and LAN architectures for medium-sized firms, specializing in Cisco and Juniper hardware.',
    icon: Server,
    category: 'Networking',
    color: 'border-cyan-500',
  },
  {
    year: 2016,
    title: 'Began Full-Stack Development Career',
    description: 'First professional role focusing on Python/Django and MySQL backends, establishing core programming principles.',
    icon: Briefcase,
    category: 'Development',
    color: 'border-indigo-500',
  },
];

// Define your skills in categories
const skillCategories = [
  {
    title: 'Full-Stack Development',
    skills: ['Next.js', 'TypeScript', 'React', 'Node.js', 'Python/Django', 'PostgreSQL', 'Docker'],
    icon: Code,
    color: 'text-indigo-400',
  },
  {
    title: 'UI/UX & Design',
    skills: ['Figma', 'Prototyping', 'User Research', 'Tailwind CSS', 'A/B Testing', 'Design Systems'],
    icon: Brush,
    color: 'text-purple-400',
  },
  {
    title: 'Networking & Infrastructure',
    skills: ['Cisco/Juniper', 'VPN (IPsec/SSL)', 'Firewall Configuration', 'Cloud Networking (AWS/Azure)', 'Linux'],
    icon: Server,
    color: 'text-cyan-400',
  },
  {
    title: 'Solar & Energy',
    skills: ['PV System Design', 'Installation', 'Energy Audits', 'NABCEP Standards', 'Monitoring Software'],
    icon: Zap,
    color: 'text-green-400',
  },
];

const TimelineItem: React.FC<typeof timelineEvents[0] & { index: number }> = ({
  year,
  title,
  description,
  icon: Icon,
  category,
  color,
  index,
}) => {
  const isOdd = index % 2 !== 0;

  return (
    <motion.div
      className={`mb-8 flex justify-between items-center w-full ${isOdd ? 'flex-row-reverse' : ''}`}
      initial={{ opacity: 0, x: isOdd ? 100 : -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="order-1 w-5/12 hidden md:block" />

      {/* Circle Icon Separator */}
      <div className="z-10 flex items-center order-1 bg-gray-950 shadow-xl w-12 h-12 rounded-full ring-4 ring-gray-900 justify-center">
        <Icon className={`w-6 h-6 ${color.replace('border-', 'text-')}`} />
      </div>

      {/* Content Card */}
      <div className={`order-1 ${isOdd ? 'md:mr-10' : 'md:ml-10'} w-full md:w-5/12 px-6 py-4 rounded-lg shadow-lg bg-gray-800/70 border-t-4 ${color}`}>
        <h3 className="text-sm font-light text-gray-400 mb-1">{year} | {category}</h3>
        <h4 className="mb-2 font-bold text-xl text-white">{title}</h4>
        <p className="text-sm leading-snug text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-950 pt-10 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* About Hero */}
        <motion.header
          className="text-center py-16 mb-12 border-b border-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-4">
            The Journey of an Innovator
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My career is defined by seamlessly integrating **digital innovation** with **practical infrastructure**. I don't just write code—I build, connect, and power systems from the wire to the web.
          </p>
        </motion.header>

        {/* Interactive Timeline */}
        <section className="relative wrap overflow-hidden p-10 h-full">
          <h2 className="text-3xl font-bold text-white mb-16 text-center">Career Milestones</h2>
          
          {/* Vertical Separator Line */}
          <div className="hidden md:block absolute h-full border border-indigo-500 left-1/2 transform -translate-x-1/2 border-opacity-70" />

          {timelineEvents.map((event, index) => (
            <TimelineItem key={event.year} {...event} index={index} />
          ))}
        </section>

        {/* Skill Matrix */}
        <section className="py-16 mt-16 border-t border-gray-800">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">My Integrated Skill Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="p-6 bg-gray-800 rounded-xl shadow-xl border border-gray-700 hover:border-indigo-600 transition-colors duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <category.icon className={`w-8 h-8 mb-3 ${category.color}`} />
                <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 text-xs font-medium bg-gray-700 text-gray-300 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}