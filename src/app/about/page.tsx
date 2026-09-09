'use client';

import { motion } from 'framer-motion';
import {
  Code,
  Smartphone,
  Server,
  Database,
  Briefcase,
  GraduationCap,
} from 'lucide-react';

const timelineEvents = [
  {
    year: 2026,
    title: 'CTO at LunoByte — Software Agency',
    description: 'Chief Technology Officer at LunoByte, leading technical delivery of web and mobile products for clients. Currently building the VTU platform (Next.js + Flutter monorepo) and other client projects.',
    icon: Briefcase,
    category: 'Technology Leadership',
    color: 'border-indigo-500',
  },
  {
    year: 2025,
    title: 'Full-Stack Development — Advanced Projects',
    description: 'Built and deployed multiple production-ready applications including an LMS, CBT platform, client portal, and employee management system.',
    icon: Code,
    category: 'Development',
    color: 'border-purple-500',
  },
  {
    year: 2024,
    title: 'Mobile Development with Flutter',
    description: 'Expanded into cross-platform mobile development, building Flutter apps alongside existing web projects. Integrated payment APIs (Paystack) into real fintech products.',
    icon: Smartphone,
    category: 'Mobile',
    color: 'border-cyan-500',
  },
  {
    year: 2023,
    title: 'Networking, Solar & CCTV Installation',
    description: 'Working as a field technician — network infrastructure setup, solar PV system installation, and CCTV surveillance system deployment. Hands-on experience bridging physical and digital infrastructure.',
    icon: Server,
    category: 'Infrastructure',
    color: 'border-green-500',
  },
  {
    year: 2020,
    title: 'Started Learning Web Development',
    description: 'Began the journey with HTML, CSS, and JavaScript fundamentals. Built first projects and progressively moved into PHP, MySQL, and modern JavaScript frameworks.',
    icon: GraduationCap,
    category: 'Learning',
    color: 'border-yellow-500',
  },
];

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
    icon: Code,
    color: 'text-indigo-400',
  },
  {
    title: 'Mobile',
    skills: ['Flutter', 'Dart'],
    icon: Smartphone,
    color: 'text-cyan-400',
  },
  {
    title: 'Backend',
    skills: ['PHP', 'Python', 'Node.js', 'REST APIs', 'MySQL', 'PostgreSQL', 'Firebase'],
    icon: Server,
    color: 'text-purple-400',
  },
  {
    title: 'Infrastructure',
    skills: ['Network Setup', 'LAN/WAN', 'Solar PV Installation', 'CCTV Installation', 'IP Cameras', 'Cable Management'],
    icon: Database,
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

      <div className="z-10 flex items-center order-1 bg-gray-950 shadow-xl w-12 h-12 rounded-full ring-4 ring-gray-900 justify-center">
        <Icon className={`w-6 h-6 ${color.replace('border-', 'text-')}`} />
      </div>

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
            About Me
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a full-stack developer and computer engineering student from Nigeria. On the software side, I serve
            as CTO at LunoByte — building web and mobile products: LMS platforms, fintech apps, client portals,
            and Flutter mobile apps. On the physical side, I work in network infrastructure, solar PV installation,
            and CCTV surveillance systems. I bridge both worlds: I can spec the software and wire up the hardware.
          </p>
        </motion.header>

        {/* Timeline */}
        <section className="relative wrap overflow-hidden p-10 h-full">
          <h2 className="text-3xl font-bold text-white mb-16 text-center">My Journey</h2>

          <div className="hidden md:block absolute h-full border border-indigo-500 left-1/2 transform -translate-x-1/2 border-opacity-70" />

          {timelineEvents.map((event, index) => (
            <TimelineItem key={event.year} {...event} index={index} />
          ))}
        </section>

        {/* Skill Matrix */}
        <section className="py-16 mt-16 border-t border-gray-800">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Tech Stack</h2>
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

        {/* CTA */}
        <section className="py-16 text-center border-t border-gray-800">
          <h2 className="text-3xl font-bold text-white mb-4">Open to Remote Work</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            I'm actively looking for remote full-stack roles and freelance projects. If you need someone who can ship,
            let's talk.
          </p>
          <a
            href="mailto:abdurrahmanalhassan775@gmail.com"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg"
          >
            Get in Touch
          </a>
        </section>
      </div>
    </main>
  );
}
