'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
// components/ProjectCard.tsx
import { Project } from '@/data/project'; 

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-gray-900/50 border border-blue-500/20 rounded-lg overflow-hidden hover:border-blue-500/40 transition-all"
    >
      <div className="relative h-48">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-blue-400 mb-2">{project.name}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-blue-500/20 text-blue-300 text-sm rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <Link
            href={project.github}
            target="_blank"
            className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
          >
            <FiGithub /> GitHub
          </Link>
          <Link
            href={project.demo}
            target="_blank"
            className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
          >
            <FiExternalLink /> Demo
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
