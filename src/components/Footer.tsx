import { FiGithub, FiInstagram, FiPhone } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-blue-500/20">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400">
            © {currentYear} Aryan Pratama Susanto. All rights reserved.
          </p>

          <div className="mt-3 flex justify-center items-center gap-6">
            {/* GitHub */}
            <a
              href="https://github.com/4RYAN-sys"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <FiGithub className="text-xl" />
              <span>GitHub</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/6285746868762"  
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <FiPhone className="text-xl" />
              <span>WhatsApp</span>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/aryan_pratama_susanto"  
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <FiInstagram className="text-xl" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}