'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-blue-400 mb-8">About Me</h1>
        
        <div className="bg-gray-900/50 border border-blue-500/20 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-blue-300 mb-4">Biodata</h2>
          <ul className="space-y-2 text-gray-300">
            <li><strong>Nama:</strong>Aryan Pratama Susanto</li>
            <li><strong>Sekolah:</strong>SMK NEGERI 8 MALANG</li>
            <li><strong>Jurusan:</strong>RPL(Rekayasa Perangkat Lunak)</li>
            <li><strong>Email:</strong> aryantama@gmail.com</li>
          </ul>

          <h2 className="text-2xl font-semibold text-blue-300 mt-8 mb-4">Motivasi Belajar Coding</h2>
          <p className="text-gray-300 leading-relaxed">
         Awalnya saya penasaran dengan koding karena sering fyp. Jadi saya masuk jurusan RPl dan mulai belajar koding. 
         Saya ingin menjadi seorang ahli dibidang teknologi.
          </p>
        </div>
      </motion.div>
    </div>
  );
}