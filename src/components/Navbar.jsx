import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Enhanced active section detection
      const sections = ['home', 'about', 'projects', 'skills', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'home', label: '~/', icon: '🏠' },
    { name: 'about', label: './about', icon: '👨‍💻' },
    { name: 'projects', label: './projects', icon: '🚀' },
    { name: 'skills', label: './skills', icon: '⚡' },
    { name: 'achievements', label: './achievements', icon: '🏆' },
    { name: 'contact', label: './contact', icon: '📡' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-lg shadow-slate-900/25' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Enhanced logo */}
            <motion.div
              className="flex items-center space-x-2 font-mono"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center border-2 border-cyan-400/30"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(6, 182, 212, 0.3)',
                    '0 0 30px rgba(16, 185, 129, 0.4)',
                    '0 0 20px rgba(6, 182, 212, 0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-white font-bold text-lg">M</span>
              </motion.div>
              <div className="flex flex-col">
                <span className="text-cyan-400 font-bold text-lg">
                  <span className="text-orange-400">$</span>Med
                </span>
                <span className="text-xs text-slate-400">./developer</span>
              </div>
            </motion.div>

            {/* Enhanced desktop navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.name)}
                  className={`px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 relative group ${
                    activeSection === item.name
                      ? 'text-cyan-400 bg-slate-800/50'
                      : 'text-slate-300 hover:text-cyan-300 hover:bg-slate-800/30'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-orange-400">$</span>
                    <span>{item.label}</span>
                  </span>
                  
                  {/* Enhanced active indicator */}
                  {activeSection === item.name && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full"
                      layoutId="activeTab"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  
                  {/* Hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10"
                    initial={false}
                  />
                </motion.button>
              ))}
            </div>

            {/* Enhanced mobile menu button */}
            <motion.button
              className="md:hidden p-2 rounded-lg text-slate-300 hover:text-cyan-300 transition-colors border-2 border-slate-600/50 hover:border-cyan-400/50 bg-slate-800/50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={isMobileMenuOpen ? { rotate: 180 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Enhanced scan line effect */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"
          animate={{ x: [-200, typeof window !== 'undefined' ? window.innerWidth + 200 : 1200] }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            repeatType: "loop",
            ease: "linear" 
          }}
        />
      </motion.nav>

      {/* Enhanced mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Enhanced backdrop */}
            <motion.div
              className="absolute inset-0 bg-slate-900/95 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Enhanced menu content */}
            <motion.div
              className="relative h-full flex flex-col justify-center items-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="space-y-6">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.name)}
                    className={`block w-full text-center px-8 py-4 rounded-xl font-mono text-lg transition-all ${
                      activeSection === item.name
                        ? 'text-cyan-400 bg-slate-800/50 border-2 border-cyan-400/50'
                        : 'text-slate-300 hover:text-cyan-300 border-2 border-slate-600/50 hover:border-cyan-400/50 hover:bg-slate-800/30'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center justify-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <span>
                        <span className="text-orange-400">$</span>
                        {item.label}
                      </span>
                    </span>
                  </motion.button>
                ))}
              </div>
              
              {/* Enhanced terminal-style footer */}
              <motion.div
                className="absolute bottom-8 text-center font-mono text-slate-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-sm">
                  <span className="text-orange-400">$</span>
                  navigation.close() --mobile
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
