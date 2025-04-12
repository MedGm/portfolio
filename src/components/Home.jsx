import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useRef, useState } from 'react';

function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  const roles = [
    'Software Engineering Student',
    2000,
    'Full Stack Developer',
    2000,
    'Game Development Enthusiast',
    2000,
    'AI & ML Explorer',
    2000,
  ];

  const codeSnippets = [
    { text: "const developer = new Developer('Mohamed');", color: "#61dafb", direction: 1 },
    { text: "while(true) { learn(); code(); repeat(); }", color: "#38bdf8", direction: -1 },
    { text: "if(coffee.isEmpty()) { refill(); }", color: "#818cf8", direction: 1 },
    { text: "git commit -m 'Always coding'", color: "#a78bfa", direction: -1 }
  ];

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

  return (
    <motion.div
      ref={containerRef}
      className="h-screen flex items-center justify-center px-6 relative overflow-hidden"
      style={{ opacity, scale, y }}
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 to-black/50" />
        
        {/* Dynamic background grid */}
        <div className="absolute inset-0 opacity-30">
          <div className="h-full w-full" 
               style={{ 
                 backgroundImage: `radial-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px)`, 
                 backgroundSize: '40px 40px'
               }}
          />
        </div>
        
        {/* Animated gradient orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="rounded-full absolute"
            animate={{
              opacity: [0.3, 0.15, 0.3],
              scale: [1, 1.2, 1],
              x: [0, 50 * (i % 2 === 0 ? 1 : -1), 0],
              y: [0, 30 * (i % 3 === 0 ? 1 : -1), 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
            }}
            style={{
              top: `${30 + i * 15}%`,
              left: `${20 + i * 15}%`,
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

      <div className="max-w-4xl mx-auto flex flex-col items-center gap-12 relative z-10">
        {/* Profile Image with Enhanced Effects */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <div className="relative w-48 h-48">
            {/* Animated glow ring */}
            <motion.div
              className="absolute -inset-4 rounded-full opacity-80"
              animate={{
                background: [
                  'linear-gradient(0deg, rgba(59,130,246,0.5), rgba(147,51,234,0.5))',
                  'linear-gradient(120deg, rgba(59,130,246,0.5), rgba(236,72,153,0.5))',
                  'linear-gradient(240deg, rgba(59,130,246,0.5), rgba(147,51,234,0.5))',
                  'linear-gradient(360deg, rgba(59,130,246,0.5), rgba(236,72,153,0.5))',
                ],
                rotate: [0, 360]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Image container */}
            <div className="relative z-10 rounded-full overflow-hidden w-full h-full border-4 border-white/10">
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
            
            {/* Code Snippets Container */}
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
          </div>
          
          {/* Animated shadow effect */}
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

        {/* Text Content with Enhanced Animations */}
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
                  className="absolute bottom-0 left-0 right-0 h-1 rounded bg-gradient-to-r from-blue-500 to-purple-600"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </motion.span>
            </h1>
            
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

          {/* Call-to-Action Buttons */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <motion.a
              href="https://github.com/MedGm"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-morphism-enhanced group px-8 py-4 hover:scale-105 transition-all min-w-[200px] relative overflow-hidden flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
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
              <svg className="w-6 h-6 mr-2 text-gray-300 group-hover:text-blue-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="text-xl text-gray-300 group-hover:text-blue-300 transition-colors relative z-10">
                GitHub
              </span>
            </motion.a>
            
            <motion.a 
              href="#contact"
              className="relative overflow-hidden min-w-[200px] px-8 py-4 rounded-full font-semibold flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient-x"></span>
              <span className="absolute inset-0.5 bg-black rounded-full"></span>
              <span className="relative z-10 text-xl flex items-center">
                Contact Me
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Home;
