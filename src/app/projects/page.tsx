// app/projects/page.tsx
'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import { projectsData, ProjectCategory } from '@/data/projects';

const allCategories: ProjectCategory[] = ['Development', 'Design', 'Networking', 'Solar'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger the cards animation
    },
  },
};

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'All'>('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projectsData;
    }
    return projectsData.filter(project => project.categories.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div className="min-h-screen pt-10 pb-20 bg-gray-950 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.h1
          className="text-5xl font-extrabold text-center text-white mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          My Innovation Portfolio
        </motion.h1>
        <motion.p
          className="text-center text-xl text-gray-400 mb-12"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Connecting full-stack technology with practical solutions in design and energy.
        </motion.p>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {['All', ...allCategories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat as ProjectCategory | 'All')}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-md 
                ${activeFilter === cat 
                  ? 'bg-indigo-600 text-white shadow-indigo-500/50' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`
              }
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Animated Project Grid */}
        {filteredProjects.length > 0 ? (
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                key={activeFilter} // Key change forces re-render and re-animation on filter change
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </motion.div>
        ) : (
            <div className="text-center p-10 text-gray-400 border border-dashed border-gray-700 rounded-xl">
                No projects found for the "{activeFilter}" category yet. Check back soon!
            </div>
        )}
      </div>
    </div>
  );
}