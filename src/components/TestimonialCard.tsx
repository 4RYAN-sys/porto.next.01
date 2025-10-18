'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '@/data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-gray-900/50 border border-blue-500/20 rounded-lg p-6 hover:border-blue-500/40 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="relative">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
            {testimonial.name.charAt(0)}
          </div>
          <div className="absolute -top-1 -right-1">
            <Quote className="w-4 h-4 text-blue-400" />
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-1 mb-2">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          <p className="text-gray-300 mb-4 italic">&ldquo;{testimonial.content}&rdquo;</p>

          <div className="border-t border-gray-700 pt-4">
            <div className="font-semibold text-blue-400">{testimonial.name}</div>
            <div className="text-sm text-gray-400">
              {testimonial.role} at {testimonial.company}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
