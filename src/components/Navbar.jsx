import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Determine active section based on scroll position
      const sections = ['home', 'about', 'projects', 'skills', 'achievements', 'contact'];
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
    { title: 'Home', id: 'home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { title: 'About', id: 'about', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { title: 'Projects', id: 'projects', icon: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10' },
    { title: 'Skills', id: 'skills', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
    { title: 'Achievements', id: 'achievements', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' },
    { title: 'Contact', id: 'contact', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
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
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      {/* Enhanced backdrop blur with gradient */}
      <div className={`absolute inset-0 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark-light/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        {/* Add subtle gradient line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-purple-500/0"></div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo with enhanced animation */}
          <motion.a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="relative"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative text-2xl font-bold tracking-tight">
              <span className="opacity-0">MG</span>
              <motion.span
                className="absolute inset-0 bg-clip-text text-transparent"
                animate={{
                  backgroundImage: [
                    'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                    'linear-gradient(90deg, #8b5cf6, #ec4899)',
                    'linear-gradient(90deg, #ec4899, #3b82f6)',
                  ]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                MG
              </motion.span>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 blur-sm opacity-70 text-blue-500 select-none">MG</div>
            </div>
          </motion.a>

          {/* Desktop Menu with icons */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
              >
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={`relative flex items-center gap-1.5 text-base font-medium px-4 py-2 rounded-lg transition-all duration-300 group ${
                    activeSection === item.id 
                      ? 'text-blue-400' 
                      : 'text-gray-300 hover:text-blue-300'
                  }`}
                >
                  {/* Icon */}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>

                  {/* Text with slide-up animation on hover */}
                  <span className="relative overflow-hidden">
                    {item.title}
                    <motion.span 
                      className="absolute bottom-0 left-0 w-full h-[1px] bg-blue-400"
                      initial={{ scaleX: 0, originX: 0 }}
                      animate={{ 
                        scaleX: hoveredItem === item.id || activeSection === item.id ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </span>

                  {/* Active indicator with animation */}
                  {activeSection === item.id && (
                    <motion.span
                      className="absolute inset-0 rounded-lg bg-blue-500/10 ring-1 ring-blue-500/20"
                      layoutId="activeNavSection"
                      transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    />
                  )}
                </a>
              </motion.div>
            ))}
            
            {/* Contact button with enhanced design */}
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.1 }}
              className="ml-4 px-5 py-2 rounded-full text-sm font-medium relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 opacity-80 group-hover:opacity-100 transition-opacity"></span>
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{ backgroundSize: '200% 200%' }}
              />
              <span className="relative text-white z-10 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get In Touch
              </span>
            </motion.a>
          </div>

          {/* Mobile Menu Button with animation */}
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

      {/* Enhanced Mobile Menu with Icons and Animations */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden backdrop-blur-lg bg-dark-light/90 border-t border-gray-800/50"
          >
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    activeSection === item.id 
                      ? 'bg-blue-500/10 text-blue-400' 
                      : 'text-gray-300 hover:bg-blue-500/5 hover:text-blue-300'
                  }`}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 5 }}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
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
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navItems.length * 0.05 }}
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
