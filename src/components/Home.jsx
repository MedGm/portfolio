import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useRef, useState, useEffect, useMemo } from 'react';

function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Enhanced scroll animations
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  
  // Track mouse position for interactive effects
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Optimize mouse movement tracking with throttling
  useEffect(() => {
    let lastUpdateTime = 0;
    const THROTTLE_MS = 50; // Only update every 50ms
    
    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastUpdateTime < THROTTLE_MS) return;
      
      lastUpdateTime = now;
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Memoize constants to prevent recreation on re-renders
  const roles = useMemo(() => [
    'Software Engineering Student',
    2000,
    'Full Stack Developer',
    2000,
    'Game Development Enthusiast',
    2000,
    'AI & ML Explorer',
    2000,
    'Hackathon Award Winner',
    2000,
  ], []);

  // Only render code particles when hovered to reduce initial load
  const codeSnippets = useMemo(() => [
    { text: "const developer = new Developer('Mohamed');", color: "#61dafb", direction: 1 },
    { text: "while(true) { learn(); code(); repeat(); }", color: "#38bdf8", direction: -1 },
    { text: "if(coffee.isEmpty()) { refill(); }", color: "#818cf8", direction: 1 },
    { text: "git commit -m 'Always coding'", color: "#a78bfa", direction: -1 }
  ], []);

  // Enhanced code particle with better animations
  const CodeParticle = ({ text, color, index, direction }) => (
    <motion.div
      initial={{ 
        opacity: 0,
        y: 0,
        x: 0,
        scale: 0.5
      }}
      animate={isHovered ? { 
        opacity: [0, 1, 1, 0],
        y: [-20, -100 - (index * 30)],
        x: [0, 100 * direction],
        scale: [0.5, 1.2, 1.2, 0.5],
        rotateZ: [0, direction * 10]
      } : {
        opacity: 0,
        y: 0,
        x: 0,
        scale: 0.5
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.8, 1],
      }}
      className="absolute pointer-events-none whitespace-nowrap font-mono"
      style={{
        color,
        textShadow: `0 0 15px ${color}`,
        filter: "brightness(1.2)"
      }}
    >
      {text}
    </motion.div>
  );

  // Split the background animation into a separate component
  const BackgroundEffect = () => (
    <div className="absolute inset-0 -z-10">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-dark-light to-black/90" />
      
      {/* Optimized grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full" 
          style={{ 
            backgroundImage: `radial-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px)`, 
            backgroundSize: '40px 40px',
            backgroundPosition: `${mousePosition.x * 10}px ${mousePosition.y * 10}px`
          }}
        />
      </div>
      
      {/* Reduced number of orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="rounded-full absolute will-change-transform"
          animate={{
            opacity: [0.2, 0.1, 0.2],
            scale: [1, 1.1, 1],
            x: [0, 30 * (i % 2 === 0 ? 1 : -1), 0],
            y: [0, 20 * (i % 3 === 0 ? 1 : -1), 0],
          }}
          transition={{
            duration: 8 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
          style={{
            top: `${40 + i * 20}%`,
            left: `${25 + i * 20}%`,
            width: `${200 + i * 50}px`,
            height: `${200 + i * 50}px`,
            filter: 'blur(80px)',
            background: `linear-gradient(45deg, 
              rgba(${59 + i * 10}, ${130 - i * 15}, 246, 0.${3 + i}), 
              rgba(${147 - i * 10}, ${51 + i * 10}, 234, 0.${3 + i})
            )`,
          }}
        />
      ))}
    </div>
  );

  return (
    <motion.div
      ref={containerRef}
      id="home"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
      style={{ opacity, scale, y }}
    >
      <BackgroundEffect />

      <div className="max-w-4xl mx-auto flex flex-col items-center gap-12 relative z-10">
        {/* Optimized profile image animation */}
        <motion.div
          className="relative hardware-accelerated"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <div className="relative w-48 h-48">
            {/* Enhanced animated glow ring with better gradient colors */}
            <motion.div
              className="absolute -inset-4 rounded-full opacity-90"
              animate={{
                background: [
                  'conic-gradient(from 0deg, rgba(59,130,246,0.6), rgba(139,92,246,0.6), rgba(236,72,153,0.6), rgba(59,130,246,0.6))',
                  'conic-gradient(from 120deg, rgba(59,130,246,0.6), rgba(139,92,246,0.6), rgba(236,72,153,0.6), rgba(59,130,246,0.6))',
                  'conic-gradient(from 240deg, rgba(59,130,246,0.6), rgba(139,92,246,0.6), rgba(236,72,153,0.6), rgba(59,130,246,0.6))',
                  'conic-gradient(from 360deg, rgba(59,130,246,0.6), rgba(139,92,246,0.6), rgba(236,72,153,0.6), rgba(59,130,246,0.6))',
                ],
                rotate: [0, 360]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Enhanced image container with better border */}
            <div className="relative z-10 rounded-full overflow-hidden w-full h-full border-[3px] border-white/15">
              <motion.div 
                className="w-full h-full"
                animate={{
                  scale: [1, 1.05, 1],
                  rotateZ: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img
                  src="/me.png"
                  alt="Mohamed El Gorrim"
                  className="rounded-full w-full h-full object-cover"
                />
              </motion.div>
            </div>
            
            {/* Only render code particles when hovered */}
            {isHovered && (
              <div className="absolute inset-0 flex items-center justify-center overflow-visible">
                {codeSnippets.map((snippet, index) => (
                  <CodeParticle
                    key={index}
                    text={snippet.text}
                    color={snippet.color}
                    index={index}
                    direction={snippet.direction}
                  />
                ))}
              </div>
            )}
          </div>
          
          {/* Enhanced shadow effect with better animation */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={isHovered ? {
              boxShadow: [
                '0 0 30px rgba(59,130,246,0.7)',
                '0 0 50px rgba(147,51,234,0.7)',
                '0 0 30px rgba(59,130,246,0.7)'
              ]
            } : {
              boxShadow: [
                '0 0 20px rgba(59,130,246,0.5)',
                '0 0 40px rgba(147,51,234,0.5)',
                '0 0 20px rgba(59,130,246,0.5)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Enhanced Text Content with Better Typography */}
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
              <motion.span
                className="block text-white mb-2 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Mohamed
                <motion.span 
                  className="absolute -inset-1 rounded-lg -z-10 opacity-20 blur-xl"
                  animate={{
                    background: [
                      'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                      'linear-gradient(45deg, #8b5cf6, #ec4899)',
                      'linear-gradient(45deg, #ec4899, #3b82f6)',
                    ]
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
              </motion.span>
              <motion.span
                className="block relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <span className="text-gradient-animated">El Gorrim</span>
                <motion.span
                  className="absolute bottom-0 left-0 right-0 h-1 rounded bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </motion.span>
            </h1>
            
            {/* Enhanced type animation with better styling */}
            <motion.div 
              className="h-20 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <TypeAnimation
                sequence={roles}
                wrapper="h2"
                repeat={Infinity}
                className="text-2xl md:text-3xl text-blue-300/90 font-light"
              />
            </motion.div>
          </div>

          {/* Enhanced CTA Buttons with better visual design */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            {/* GitHub button with enhanced glass effect */}
            <motion.a
              href="https://github.com/MedGm"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-morphism-enhanced group px-8 py-4 hover:scale-105 transition-all min-w-[200px] relative overflow-hidden flex items-center justify-center"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Enhanced animation effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"
                animate={{
                  x: ["0%", "100%"],
                  opacity: [0, 0.5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              {/* Enhanced GitHub icon */}
              <svg className="w-6 h-6 mr-2 text-gray-300 group-hover:text-blue-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="text-xl text-gray-300 group-hover:text-blue-300 transition-colors relative z-10">
                GitHub
              </span>
            </motion.a>
            
            {/* Contact Me button with enhanced gradient animation */}
            <motion.a 
              href="#contact"
              className="relative overflow-hidden min-w-[200px] px-8 py-4 rounded-full font-semibold flex items-center justify-center"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 25px rgba(139, 92, 246, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Enhanced gradient background with animation */}
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity, 
                  repeatType: "mirror"
                }}
                style={{ backgroundSize: '200% 200%' }}
              />
              <span className="absolute inset-0.5 bg-black rounded-full"></span>
              <span className="relative z-10 text-xl flex items-center">
                Contact Me
                <motion.svg 
                  className="w-5 h-5 ml-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    repeatType: "loop", 
                    duration: 1.5,
                    repeatDelay: 1
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </motion.svg>
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </motion.div>
  );
}

export default Home;
