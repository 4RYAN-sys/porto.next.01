export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black border-t border-blue-500/20">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400">
            © {currentYear} Nama Kamu. All rights reserved.
          </p>
          <div className="mt-2 space-x-4">
            <a href="https://github.com/username" className="text-blue-400 hover:text-blue-300">
              GitHub
            </a>
            <a href="https://linkedin.com/in/username" className="text-blue-400 hover:text-blue-300">
              LinkedIn
            </a>
            <a href="https://instagram.com/username" className="text-blue-400 hover:text-blue-300">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}