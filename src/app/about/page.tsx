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
            <li><strong>Nama:</strong> [Nama Lengkap Kamu]</li>
            <li><strong>Sekolah:</strong> [Nama Sekolah]</li>
            <li><strong>Jurusan:</strong> [Jurusan Kamu]</li>
            <li><strong>Email:</strong> [email@example.com]</li>
          </ul>

          <h2 className="text-2xl font-semibold text-blue-300 mt-8 mb-4">Motivasi Belajar Coding</h2>
          <p className="text-gray-300 leading-relaxed">
            Saya mulai belajar coding karena [ceritakan motivasi kamu di sini].
            Teknologi yang membuat saya tertarik adalah bagaimana kita bisa membangun
            sesuatu yang berguna dari sekadar baris kode. Setiap hari saya terus
            belajar dan mengembangkan skill saya untuk menjadi developer yang lebih baik.
          </p>
        </div>
      </motion.div>
    </div>
  );
}