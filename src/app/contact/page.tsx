'use client';

import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiInstagram } from 'react-icons/fi';
import { SiTiktok } from 'react-icons/si';

export default function Contact() {
  return (
    <div className="min-h-screen py-20 px-4 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full"
      >
        <h1 className="text-4xl font-bold text-blue-400 mb-10 text-center">
          Contact Me
        </h1>

        <div className="bg-gray-900/50 border border-blue-500/20 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-blue-300 mb-6 text-center">
            Social Media & Contact Info 
          </h2>

          <div className="space-y-6">
            <ContactLink
              icon={<FiMail className="text-xl" />}
              label="Email"
              href="mailto:dragoniczero229@gmail.com"
            />
            <ContactLink
              icon={<FiPhone className="text-xl" />}
              label="WhatsApp"
              href="https://wa.me/+625746868762"
            />
            <ContactLink
              icon={<FiGithub className="text-xl" />}
              label="GitHub"
              href="https://github.com/4RYAN-sys"
            />
            <ContactLink
              icon={<SiTiktok className="text-xl" />}
              label="TikTok"
              href="https://tiktok.com/@tama.go26"
            />
            <ContactLink
              icon={<FiInstagram className="text-xl" />}
              label="Instagram"
              href="https://instagram.com/aryan_pratama_susanto"
            />
          </div>
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
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors"
    >
      {icon}
      <span className="text-lg">{label}</span>
    </a>
  );
}