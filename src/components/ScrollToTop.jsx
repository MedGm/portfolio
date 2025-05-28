import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

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
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 p-4 rounded-xl focus:outline-none font-mono border-2 border-cyan-400/30 hover:border-cyan-400 shadow-lg hover:shadow-cyan-500/25 group"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 10px 40px rgba(6, 182, 212, 0.4)"
          }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          {/* Enhanced content */}
          <div className="flex items-center gap-2">
            <span className="text-white text-xs">$</span>
            <span className="text-white text-xs hidden sm:inline">top</span>
            
            {/* Enhanced arrow */}
            <motion.svg 
              className="w-5 h-5 text-white" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </motion.svg>
          </div>
          
          {/* Enhanced scan line effect */}
          <motion.div 
            className="absolute inset-0 -z-10 rounded-xl overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div 
              className="absolute top-0 left-0 right-0 h-px bg-white/30"
              animate={{ x: [-100, 100] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                repeatType: "loop",
                ease: "linear" 
              }}
            />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTop;
