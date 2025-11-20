// components/FeaturedProjects.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projectsData } from '@/data/projects'; // Import your project data
import ProjectCard from '@/components/ProjectCard';

// Use the first 3 projects as featured
const featuredProjects = projectsData.slice(0, 3);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const FeaturedProjects: React.FC = () => {
  if (featuredProjects.length === 0) {
    return null; // Don't render if no projects exist
  }

  return (
    <section className="py-20 bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="text-4xl font-bold text-white text-center mb-4">
              Featured Innovations
            </h2>
            <p className="text-center text-gray-400 text-lg mb-12">
              A selection of projects that showcase my full-spectrum expertise.
            </p>
        </motion.div>

        {/* Animated Horizontal Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {featuredProjects.map((project) => (
            // The ProjectCard will handle its own individual animation (itemVariants)
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
        
        {/* View All CTA */}
        <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link href="/projects" passHref>
            <motion.button
              className="group relative px-6 py-3 text-lg font-semibold text-indigo-400 border border-indigo-400 rounded-full hover:bg-indigo-700/20 transition duration-300 shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className='flex items-center'>
                View All Projects 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturedProjects;