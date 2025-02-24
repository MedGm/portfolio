import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { title: 'Home', id: 'home' },
    { title: 'About', id: 'about' },
    { title: 'Projects', id: 'projects' },
    { title: 'Skills', id: 'skills' },
    { title: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0a192f]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="text-2xl font-bold text-white hover:text-blue-400 transition-colors"
          >
            <span className="neon-glow">MG</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className="text-base font-medium text-gray-300 hover:text-blue-400 transition-colors px-3 py-2"
                >
                  {item.title}
                </a>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-blue-400 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-[#0a192f]/95 backdrop-blur-md"
      >
        <div className="px-4 py-2 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className="block px-4 py-2 rounded-lg text-gray-300 hover:text-blue-400 transition-colors"
            >
              {item.title}
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}

export default Navbar;
