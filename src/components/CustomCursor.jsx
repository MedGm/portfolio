import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Show cursor after it has moved (prevents cursor showing at 0,0 on load)
      if (!isVisible) {
        setIsVisible(true);
      }
      
      // Check if hovering over interactive elements
      const target = e.target;
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, select');
      setIsHovering(!!isInteractive);
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

  // Terminal-themed cursor variants
  const cursorVariants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      width: 32,
      height: 32,
    },
    clicking: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      width: 40,
      height: 40,
    },
    hovering: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      width: 48,
      height: 48,
    }
  };

  // Custom dot in the middle
  const dotVariants = {
    default: {
      width: 4,
      height: 4,
    },
    clicking: {
      width: 8,
      height: 8,
    },
    hovering: {
      width: 6,
      height: 6,
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

  const getVariant = () => {
    if (isClicking) return 'clicking';
    if (isHovering) return 'hovering';
    return 'default';
  };

  return (
    <>
      {isVisible && (
        <>
          {/* Main terminal cursor ring */}
          <motion.div
            className="fixed top-0 left-0 rounded-full border-2 pointer-events-none z-[9999] mix-blend-difference"
            style={{
              borderColor: isHovering ? '#e95420' : isClicking ? '#ff5555' : '#00ff41'
            }}
            variants={cursorVariants}
            animate={getVariant()}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 28,
              mass: 0.5
            }}
          />
          
          {/* Terminal center dot */}
          <motion.div
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-difference"
            style={{
              backgroundColor: isHovering ? '#e95420' : isClicking ? '#ff5555' : '#00ff41',
              x: mousePosition.x - (getVariant() === 'clicking' ? 4 : getVariant() === 'hovering' ? 3 : 2),
              y: mousePosition.y - (getVariant() === 'clicking' ? 4 : getVariant() === 'hovering' ? 3 : 2),
            }}
            variants={dotVariants}
            animate={getVariant()}
            initial={false}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 28,
              mass: 0.5
            }}
          />
          
          {/* Terminal glow effect */}
          <motion.div
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] filter blur-sm"
            style={{
              x: mousePosition.x - 32,
              y: mousePosition.y - 32,
              width: 64,
              height: 64,
              backgroundColor: isHovering ? 'rgba(233, 84, 32, 0.2)' : isClicking ? 'rgba(255, 85, 85, 0.2)' : 'rgba(0, 255, 65, 0.2)'
            }}
            animate={{
              scale: isClicking ? [1, 1.5, 1] : isHovering ? 1.2 : 1,
              opacity: isClicking ? [0.2, 0.6, 0.2] : isHovering ? 0.4 : 0.2
            }}
            transition={{
              duration: isClicking ? 0.5 : 0.2
            }}
          />

          {/* Terminal command text (appears on hover) */}
          {isHovering && (
            <motion.div
              className="fixed pointer-events-none z-[9997] font-mono text-xs"
              style={{
                x: mousePosition.x + 20,
                y: mousePosition.y - 10,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <div className="glass-morphism-terminal px-2 py-1 rounded border border-ubuntu-500/50">
                <span className="text-ubuntu-500">$ </span>
                <span className="text-terminal-500">execute</span>
              </div>
            </motion.div>
          )}

          {/* Matrix trail effect */}
          <motion.div
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[9996]"
            style={{
              x: mousePosition.x - 2,
              y: mousePosition.y - 2,
              width: 4,
              height: 4,
              backgroundColor: '#00ff41'
            }}
            animate={{
              opacity: [0.8, 0],
              scale: [1, 2]
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut"
            }}
          />
        </>
      )}
    </>
  );
}

export default CustomCursor;
