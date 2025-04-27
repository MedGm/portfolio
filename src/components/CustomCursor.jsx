import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Show cursor after it has moved (prevents cursor showing at 0,0 on load)
      if (!isVisible) {
        setIsVisible(true);
      }
    };
    
    // Track mouse clicks for animation
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    // Hide cursor when leaving window
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  // Cursor variants
  const cursorVariants = {
    default: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      width: 24,
      height: 24,
    },
    clicking: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      width: 32,
      height: 32,
    }
  };

  // Custom dot in the middle
  const dotVariants = {
    default: {
      width: 6,
      height: 6,
    },
    clicking: {
      width: 10,
      height: 10,
    }
  };

  // Hide default cursor with CSS
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      body, a, button, [role="button"], .cursor-custom {
        cursor: none !important;
      }
      
      /* Restore cursors for inputs and text areas */
      input, textarea, [contenteditable], select {
        cursor: text !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {isVisible && (
        <>
          {/* Main cursor ring */}
          <motion.div
            className="fixed top-0 left-0 rounded-full border-2 border-blue-400/50 pointer-events-none z-[9999] mix-blend-difference backdrop-blur-sm"
            variants={cursorVariants}
            animate={isClicking ? 'clicking' : 'default'}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 28,
              mass: 0.5
            }}
          />
          
          {/* Center dot */}
          <motion.div
            className="fixed top-0 left-0 rounded-full bg-blue-400 pointer-events-none z-[9999] mix-blend-difference"
            variants={dotVariants}
            animate={isClicking ? 'clicking' : 'default'}
            style={{
              x: mousePosition.x - (isClicking ? 5 : 3),
              y: mousePosition.y - (isClicking ? 5 : 3),
            }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 28,
              mass: 0.5
            }}
          />
          
          {/* Subtle glow effect */}
          <motion.div
            className="fixed top-0 left-0 rounded-full bg-blue-400/20 pointer-events-none z-[9998] filter blur-sm"
            style={{
              x: mousePosition.x - 24,
              y: mousePosition.y - 24,
              width: 48,
              height: 48
            }}
            animate={{
              scale: isClicking ? [1, 1.5, 1] : 1,
              opacity: isClicking ? [0.3, 0.6, 0.3] : 0.3
            }}
            transition={{
              duration: isClicking ? 0.5 : 0.2
            }}
          />
        </>
      )}
    </>
  );
}

export default CustomCursor;
