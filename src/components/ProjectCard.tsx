// components/ProjectCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Project } from '@/data/projects'; // Import the type definition

interface ProjectCardProps {
  project: Project;
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-gray-800 rounded-xl shadow-xl overflow-hidden flex flex-col h-full hover:shadow-indigo-500/30 transition duration-300 border border-gray-700 hover:border-indigo-600"
      whileHover={{ y: -5 }} // Subtle lift on hover
    >
      {/* Project Image */}
      <div className="relative h-48 w-full bg-gray-700/50">
        <Image 
          src={project.imagePath} 
          alt={project.title} 
          fill 
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.categories.map((cat) => (
            <span key={cat} className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-700/30 text-purple-300">
              {cat}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-400 text-sm flex-grow mb-4">{project.description}</p>
        
        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-4 pt-2 border-t border-gray-700">
          {project.techStack.slice(0, 4).map((tech) => ( // Show max 4
            <span key={tech} className="px-2 py-0.5 text-xs font-medium text-indigo-300 bg-indigo-800/50 rounded-md">
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-0.5 text-xs font-medium text-gray-400">...</span>
          )}
        </div>

        {/* Links */}
        <div className="flex justify-between mt-auto">
          <Link href={project.liveLink} target="_blank" className="flex items-center text-indigo-400 hover:text-indigo-300 font-medium transition">
            View Live →
          </Link>
          <Link href={project.githubLink} target="_blank" className="text-gray-500 hover:text-white transition">
            GitHub
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;