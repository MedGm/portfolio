import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useRef, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

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
  
  // Optimized mouse tracking with throttling
  useEffect(() => {
    let lastUpdateTime = 0;
    const THROTTLE_MS = 100;
    
    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastUpdateTime < THROTTLE_MS) return;
      
      lastUpdateTime = now;
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
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

  // Enhanced code snippets with better theming
  const codeSnippets = useMemo(() => [
    { text: "sudo apt install future", color: "#06b6d4", direction: 1 },
    { text: "while(true) { innovate(); learn(); }", color: "#10b981", direction: -1 },
    { text: "git commit -m 'Building tomorrow'", color: "#8b5cf6", direction: 1 },
    { text: "neural_network.train(possibilities);", color: "#f59e0b", direction: -1 },
    { text: "const passion = code + creativity;", color: "#ef4444", direction: 1 }
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
        duration: 2.5,
        ease: "easeInOut",
        times: [0, 0.2, 0.8, 1],
      }}
      className="absolute pointer-events-none whitespace-nowrap font-mono z-20"
      style={{
        color,
        textShadow: `0 0 15px ${color}`,
        filter: "brightness(1.2)",
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '14px',
        fontWeight: '500'
      }}
    >
      <span className="text-orange-400">&gt; </span>{text}
      <span className="text-cyan-400 animate-pulse">_</span>
    </motion.div>
  );

  CodeParticle.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    direction: PropTypes.number.isRequired
  };

  // Enhanced background effect with consistent theming
  const BackgroundEffect = () => (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
          animate={{
            background: [
              'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #1e293b 75%, #0f172a 100%)',
              'linear-gradient(135deg, #1e293b 0%, #334155 25%, #475569 50%, #334155 75%, #1e293b 100%)',
              'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #1e293b 75%, #0f172a 100%)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      {/* Enhanced matrix grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full" 
          style={{ 
            backgroundImage: `linear-gradient(to right, rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`, 
            backgroundSize: '40px 40px',
            backgroundPosition: `${mousePosition.x * 10}px ${mousePosition.y * 10}px`
          }}
        />
      </div>
      
      {/* Enhanced floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
            x: [0, 50 * (i % 2 === 0 ? 1 : -1), 0],
            y: [0, 30 * (i % 3 === 0 ? 1 : -1), 0],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5,
          }}
          style={{
            top: `${20 + i * 10}%`,
            left: `${15 + i * 12}%`,
            background: i % 4 === 0 ? '#06b6d4' : i % 4 === 1 ? '#10b981' : i % 4 === 2 ? '#8b5cf6' : '#f59e0b',
            boxShadow: `0 0 20px ${i % 4 === 0 ? '#06b6d4' : i % 4 === 1 ? '#10b981' : i % 4 === 2 ? '#8b5cf6' : '#f59e0b'}`,
          }}
        />
      ))}

      {/* Enhanced scan lines */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"
        animate={{ x: [-200, typeof window !== 'undefined' ? window.innerWidth + 200 : 1200] }}
        transition={{ 
          duration: 18, 
          repeat: Infinity, 
          repeatType: "loop",
          ease: "linear" 
        }}
      />
      
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-40"
        animate={{ x: [typeof window !== 'undefined' ? window.innerWidth + 200 : 1200, -200] }}
        transition={{ 
          duration: 22, 
          repeat: Infinity, 
          repeatType: "loop",
          ease: "linear" 
        }}
      />
    </div>
  );

  return (
    <motion.div
      ref={containerRef}
      id="home"
      className="min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700"
      style={{ opacity, scale, y }}
    >
      <BackgroundEffect />

      {/* Main content container with proper centering */}
      <div className="flex-1 flex items-center justify-center px-6 pt-20 pb-32">
        <div className="max-w-6xl mx-auto w-full">
          {/* Symmetric grid layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[70vh]">
            
            {/* Left decorative section */}
            <div className="hidden lg:flex lg:col-span-2 flex-col items-center justify-center space-y-8">
              {/* Animated code snippets */}
              <div className="space-y-4">
                {['npm start', 'git push', 'sudo apt'].map((cmd, i) => (
                  <motion.div
                    key={i}
                    className="text-xs font-mono text-cyan-400/60 whitespace-nowrap"
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                      x: [-10, 0, -10]
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      delay: i * 0.5
                    }}
                  >
                    <span className="text-orange-400">$ </span>{cmd}
                  </motion.div>
                ))}
              </div>
              
              {/* Vertical line decoration */}
              <motion.div
                className="w-px h-32 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"
                animate={{ height: [100, 150, 100] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>

            {/* Center content - Profile and text */}
            <div className="lg:col-span-8 flex flex-col items-center space-y-8 text-center">
              
              {/* Profile image section */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
                  {/* Enhanced glow rings */}
                  <motion.div
                    className="absolute -inset-4 md:-inset-6 rounded-3xl border-2 border-cyan-400/20"
                    animate={{
                      borderColor: [
                        'rgba(6, 182, 212, 0.2)',
                        'rgba(16, 185, 129, 0.4)', 
                        'rgba(139, 92, 246, 0.3)',
                        'rgba(251, 146, 60, 0.3)',
                        'rgba(6, 182, 212, 0.2)'
                      ],
                      boxShadow: [
                        '0 0 30px rgba(6, 182, 212, 0.2)',
                        '0 0 40px rgba(16, 185, 129, 0.3)',
                        '0 0 35px rgba(139, 92, 246, 0.25)',
                        '0 0 35px rgba(251, 146, 60, 0.25)',
                        '0 0 30px rgba(6, 182, 212, 0.2)'
                      ]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Profile image container */}
                  <div className="relative z-10 rounded-3xl overflow-hidden w-full h-full border-2 border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 shadow-2xl">
                    <img
                      src="/me.png"
                      alt="Mohamed El Gorrim - Software Engineer"
                      className="rounded-3xl w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback placeholder */}
                    <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 hidden items-center justify-center">
                      <svg className="w-16 h-16 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    
                    {/* Enhanced gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent rounded-3xl"></div>
                  </div>
                  
                  {/* Code particles */}
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
              </motion.div>

              {/* Name and title section */}
              <motion.div
                className="space-y-6 max-w-4xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {/* Name */}
                <div className="space-y-3">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter font-mono">
                    <motion.span
                      className="block text-cyan-400 mb-2 relative"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <span className="text-orange-400">&gt; </span>Mohamed
                      <span className="text-cyan-400 animate-pulse">_</span>
                    </motion.span>
                    <motion.span
                      className="block relative z-10"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
                        El Gorrim
                      </span>
                      <motion.span
                        className="absolute bottom-0 left-0 right-0 h-1 md:h-2 rounded bg-gradient-to-r from-cyan-500 via-emerald-500 to-purple-500"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                      />
                    </motion.span>
                  </h1>
                  
                  {/* Typing animation */}
                  <motion.div 
                    className="h-12 md:h-16 lg:h-20 font-mono"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <div className="text-base md:text-xl lg:text-2xl xl:text-3xl text-slate-300 font-light">
                      <span className="text-orange-400">~/portfolio$</span>{" "}
                      <TypeAnimation
                        sequence={[
                          'echo "Software Engineering Student"',
                          2000,
                          'echo "Full Stack Developer"',
                          2000,
                          'echo "AI & ML Enthusiast"',
                          2000,
                          'echo "Game Development Explorer"',
                          2000,
                          'echo "Innovation Catalyst"',
                          2000,
                        ]}
                        wrapper="span"
                        repeat={Infinity}
                        className="text-cyan-300"
                      />
                    </div>
                  </motion.div>
                </div>

                {/* CTA buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  {/* GitHub button */}
                  <motion.a
                    href="https://github.com/MedGm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group px-6 py-3 md:px-8 md:py-4 rounded-xl transition-all w-full sm:w-auto max-w-[220px] relative overflow-hidden flex items-center justify-center font-mono bg-slate-800/50 border-2 border-slate-600/50 hover:border-cyan-400/80 shadow-lg hover:shadow-cyan-500/25 backdrop-blur-sm"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 40px rgba(6, 182, 212, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5 mr-3 text-slate-400 group-hover:text-cyan-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span className="text-lg text-slate-300 group-hover:text-cyan-300 transition-colors relative z-10">
                      $ git clone
                    </span>
                  </motion.a>
                  
                  {/* Contact button */}
                  <motion.a 
                    href="#contact"
                    className="w-full sm:w-auto max-w-[220px] px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold flex items-center justify-center font-mono relative bg-gradient-to-r from-cyan-500 to-emerald-500 text-white border-2 border-transparent hover:from-cyan-400 hover:to-emerald-400 shadow-lg hover:shadow-cyan-500/25"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 40px rgba(6, 182, 212, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 text-lg flex items-center">
                      <span className="text-white">$ ./contact</span>
                      <motion.svg 
                        className="w-4 h-4 ml-2" 
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

            {/* Right decorative section */}
            <div className="hidden lg:flex lg:col-span-2 flex-col items-center justify-center space-y-8">
              {/* Status indicators */}
              <div className="space-y-4">
                {[
                  { label: 'System', status: 'Online', color: 'emerald' },
                  { label: 'Skills', status: 'Loading', color: 'cyan' },
                  { label: 'Projects', status: 'Ready', color: 'purple' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-2 text-xs font-mono"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + i * 0.2 }}
                  >
                    <motion.div
                      className={`w-2 h-2 rounded-full bg-${item.color}-400`}
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: i * 0.5
                      }}
                    />
                    <span className="text-slate-400">{item.label}:</span>
                    <span className={`text-${item.color}-400`}>{item.status}</span>
                  </motion.div>
                ))}
              </div>
              
              {/* Vertical line decoration */}
              <motion.div
                className="w-px h-32 bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent"
                animate={{ height: [100, 150, 100] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />
            </div>

          </div>
        </div>
      </div>

      {/* Perfectly centered scroll indicator */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-8">
        <motion.div 
          className="font-mono text-cyan-400"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs md:text-sm">scroll_down.sh</span>
            <motion.div
              className="flex flex-col items-center gap-1"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <span className="text-xs text-slate-400">discover more</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced transition zone to About */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-slate-800/50 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      />
      
      {/* Smooth transition particles */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${12.5 * (i + 1)}%`,
              bottom: `${Math.random() * 20}px`
            }}
            animate={{
              y: [0, -30, -60],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Home;
