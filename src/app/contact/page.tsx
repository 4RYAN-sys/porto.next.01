'use client';

import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiInstagram } from 'react-icons/fi';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <div className="min-h-screen py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-blue-400 mb-10 text-center">
          Contact Me
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <ContactForm />

          {/* Social Media & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-900/50 border border-blue-500/20 rounded-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-blue-300 mb-6 text-center">
              Let&apos;s Connect
            </h2>

            <p className="text-gray-300 mb-6 text-center">
              I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>

            <div className="space-y-4">
              <ContactLink
                icon={<FiMail className="text-xl" />}
                label="Email"
                href="mailto:dragoniczero229@gmail.com"
                value="dragoniczero229@gmail.com"
              />
              <ContactLink
                icon={<FiPhone className="text-xl" />}
                label="WhatsApp"
                href="https://wa.me/+6285746868762"
                value="+62 857-4686-8762"
              />
              <ContactLink
                icon={<FiGithub className="text-xl" />}
                label="GitHub"
                href="https://github.com/4RYAN-sys"
                value="@4RYAN-sys"
              />
              <ContactLink
                icon={<FiInstagram className="text-xl" />}
                label="Instagram"
                href="https://instagram.com/aryan_pratama_susanto"
                value="@aryan_pratama_susanto"
              />
            </div>

            <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-300 mb-2">Quick Response</h3>
              <p className="text-gray-300 text-sm">
                I typically respond to messages within 24 hours. For urgent inquiries, WhatsApp is the fastest way to reach me.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

/* reusable row */
function ContactLink({
  icon,
  label,
  href,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  value: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800/50 transition-colors group"
    >
      <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
        {icon}
      </div>
      <div>
        <div className="text-gray-300 font-medium">{label}</div>
        <div className="text-gray-400 text-sm">{value}</div>
      </div>
    </a>
  );
}
