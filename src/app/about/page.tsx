'use client';

import { motion } from 'framer-motion';
import { FaGamepad, FaHeadphones, FaFilm } from 'react-icons/fa';

export default function About() {
  return (
    <div className="min-h-screen py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-blue-400 mb-8">About Me</h1>

        <div className="bg-gray-900/50 border border-blue-500/20 rounded-lg p-8 space-y-6">
          {/* BIODATA */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-300 mb-4">Biodata</h2>
            <ul className="space-y-2 text-gray-300">
              <li><strong>Nama:</strong> Aryan Pratama Susanto</li>
              <li><strong>Sekolah:</strong> SMK Negeri 8 Malang</li>
              <li><strong>Jurusan:</strong> RPL (Rekayasa Perangkat Lunak)</li>
              <li><strong>Umur:</strong> 16 otw 17 Tahun</li>
            </ul>
          </div>

          {/* HOBI */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-300 mb-4">Hobi</h2>
            <div className="flex flex-wrap gap-4 text-gray-300">
              <div className="flex items-center gap-2">
                <FaGamepad className="text-xl text-blue-400" />
                <span>Nge-game</span>
              </div>
              <div className="flex items-center gap-2">
                <FaHeadphones className="text-xl text-blue-400" />
                <span>Dengar musik</span>
              </div>
              <div className="flex items-center gap-2">
                <FaFilm className="text-xl text-blue-400" />
                <span>Nonton film</span>
              </div>
            </div>
          </div>

          {/* MOTIVASI */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-300 mb-4">Motivasi Belajar Coding</h2>
            <p className="text-gray-300 leading-relaxed">
              Awalnya saya penasaran dengan koding karena sering FYP. Jadi saya masuk jurusan RPL dan mulai belajar coding.
              Saya ingin menjadi seorang ahli di bidang teknologi.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}