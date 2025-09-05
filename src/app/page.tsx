'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        {/* Foto profil */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Image
            src="/profile.jpeg"
            alt="Profile"
            width={200}
            height={200}
            className="rounded-full mx-auto border-4 border-blue-500"
          />
        </motion.div>

        {/* Nama */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl font-bold text-blue-400 mb-4"
        >
          Aryan Pratama Susanto
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-gray-800 dark:text-gray-300"
        >
          Web Developer | Siswa RPL
        </motion.p>
      </motion.div>
    </div>
  );
}