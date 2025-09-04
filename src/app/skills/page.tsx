'use client';

import { motion } from 'framer-motion';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs,
  FaGitAlt,
  FaJava,
  
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiTypescript,
  SiGithub,
  SiFlutter,
  SiCanva,
} from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
  { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
  { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
  { name: 'React', icon: FaReact, color: 'text-cyan-400' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-300' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
  { name: 'Github', icon: SiGithub, color: 'text-green-400' },
  { name: 'Flutter', icon: SiFlutter, color: 'text-blue-400' },
  { name: 'Git', icon: FaGitAlt, color: 'text-red-500' },
  { name: 'Java', icon: FaJava, color: 'text-blue-300' },
  { name: 'Canva', icon: SiCanva, color: 'text-orange-400' },
];

export default function Skills() {
  return (
    <div className="min-h-screen py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-blue-400 mb-8 text-center">My Skills</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900/50 border border-blue-500/20 rounded-lg p-6 text-center hover:border-blue-500/40 transition-all"
            >
              <skill.icon className={`text-6xl mx-auto mb-2 ${skill.color}`} />
              <p className="text-gray-300">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}