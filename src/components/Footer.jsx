import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className="py-8 px-6 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center space-y-4"
        >
          <span className="text-2xl font-bold gradient-text">MG</span>
          <p className="text-gray-400 text-center">
            Built with React & Tailwind CSS
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/MedGm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Mohamed El Gorrim. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
