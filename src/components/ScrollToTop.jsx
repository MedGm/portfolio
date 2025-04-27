import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top handler with smooth behavior
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-900/20 focus:outline-none"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
          }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          {/* Enhanced arrow up icon with animation */}
          <motion.svg 
            className="w-6 h-6" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </motion.svg>
          
          {/* Subtle ripple effect */}
          <div className="absolute inset-0 -z-10 rounded-full overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-white/10"
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTop;
