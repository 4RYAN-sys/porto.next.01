'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Pesan terkirim! (Check console)');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-blue-400 mb-8 text-center">Contact Me</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900/50 border border-blue-500/20 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-blue-300 mb-4">Get In Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-blue-500/20 rounded-lg text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-blue-500/20 rounded-lg text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800 border border-blue-500/20 rounded-lg text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="space-y-4">
            <div className="bg-gray-900/50 border border-blue-500/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-300 mb-4">Contact Info</h3>
              
              <div className="space-y-4">
                <a href="mailto:dragoniczero229@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-blue-400">
                  <FiMail className="text-xl" />
                  email
                </a>
                
                <a href="https://wa.me/085746868762" className="flex items-center gap-3 text-gray-300 hover:text-blue-400">
                  <FiPhone className="text-xl" />
                  phone
                </a>
                
                <a href="https://github.com/4RYAN-sys" target="_blank" className="flex items-center gap-3 text-gray-300 hover:text-blue-400">
                  <FiGithub className="text-xl" />
                  GitHub
                </a>
                
                <a href="https://linkedin.com/in/username" target="_blank" className="flex items-center gap-3 text-gray-300 hover:text-blue-400">
                  <FiLinkedin className="text-xl" />
                  LinkedIn
                </a>
                
                <a href="https://instagram.com/username" target="_blank" className="flex items-center gap-3 text-gray-300 hover:text-blue-400">
                  <FiInstagram className="text-xl" />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}