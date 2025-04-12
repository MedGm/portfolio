import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Determine active section based on scroll position
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 300; // Offset to trigger earlier
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
          break;
        }
      }
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
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Backdrop blur background */}
      <div className={`absolute inset-0 transition-all duration-300 ${
        isScrolled ? 'bg-dark-light/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}/>
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between">
          <motion.a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="text-2xl font-bold text-white hover:text-blue-400 transition-colors relative"
            whileHover={{ scale: 1.05 }}
          >
            {/* Logo with gradient animation */}
            <span className="relative">
              <span className="opacity-0">MG</span>
              <motion.span
                className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r"
                animate={{
                  backgroundImage: [
                    'linear-gradient(to right, #3b82f6, #8b5cf6)',
                    'linear-gradient(to right, #8b5cf6, #ec4899)',
                    'linear-gradient(to right, #ec4899, #3b82f6)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                MG
              </motion.span>
              {/* Subtle glow effect */}
              <span className="absolute inset-0 blur-sm opacity-70 text-blue-500">MG</span>
            </span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
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
                  className={`relative text-base font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'text-blue-400' 
                      : 'text-gray-300 hover:text-blue-300'
                  }`}
                >
                  {item.title}
                  {activeSection === item.id && (
                    <motion.span
                      className="absolute inset-0 rounded-lg bg-blue-500/10"
                      layoutId="activeSection"
                      transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    />
                  )}
                </a>
              </motion.div>
            ))}
            
            {/* Contact button on desktop */}
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.1 }}
              className="ml-4 px-5 py-2 rounded-full text-sm font-medium relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-80"></span>
              <span className="relative text-white z-10">Get In Touch</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-blue-400 focus:outline-none p-2 rounded-md"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden backdrop-blur-lg bg-dark-light/90"
          >
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    activeSection === item.id 
                      ? 'bg-blue-500/10 text-blue-400' 
                      : 'text-gray-300 hover:bg-blue-500/5 hover:text-blue-300'
                  }`}
                  whileHover={{ x: 5 }}
                >
                  {item.title}
                </motion.a>
              ))}
              
              {/* Contact button on mobile */}
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="block mt-4 mx-4 px-4 py-3 rounded-lg text-center font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
