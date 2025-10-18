'use client';

import TestimonialCard from '@/components/TestimonialCard';
import { testimonials, Testimonial } from '@/data/testimonials';
import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <div className="min-h-screen py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-400 mb-4">
            What People Say
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don&apos;t just take my word for it. Here&apos;s what clients and colleagues have to say about working with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial: Testimonial, index: number) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Ready to Work Together?</h3>
            <p className="text-gray-300 mb-6">
              Join the list of satisfied clients and let&apos;s create something amazing together.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
