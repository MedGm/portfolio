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
      className="absolute pointer-events-none whitespace-nowrap"
      style={{
        color,
        fontFamily: "monospace",
        fontSize: "0.9rem",
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
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-black/50" />
        <motion.div
          className="absolute inset-0"
          initial={{ backgroundPosition: '0% 0%' }}
          animate={{ backgroundPosition: '100% 100%' }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(59,130,246,0.1) 0%, transparent 50%)',
            backgroundSize: '100% 100%'
          }}
        />
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="gradient-blur absolute"
            animate={{
              opacity: [0.3, 0.15, 0.3],
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 2,
            }}
            style={{
              top: `${30 + i * 20}%`,
              left: `${20 + i * 30}%`,
              width: '400px',
              height: '400px',
              filter: 'blur(80px)',
              background: 'linear-gradient(45deg, rgba(59,130,246,0.4), rgba(147,51,234,0.4))',
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
          transition={{ duration: 0.3 }}
        >
          <div className="relative w-48 h-48">
            <motion.div
              className="absolute -inset-4 rounded-full"
              animate={{
                background: [
                  'linear-gradient(0deg, rgba(59,130,246,0.3), rgba(147,51,234,0.3))',
                  'linear-gradient(180deg, rgba(59,130,246,0.3), rgba(147,51,234,0.3))',
                  'linear-gradient(360deg, rgba(59,130,246,0.3), rgba(147,51,234,0.3))',
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.img
              src="/me.png"
              alt="Mohamed El Gorrim"
              className="rounded-full w-full h-full object-cover relative z-10 border-4 border-white/10"
              animate={{
                scale: [1, 1.05, 1],
                rotateZ: [0, 2, -2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
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
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={isHovered ? {
              boxShadow: [
                '0 0 30px rgba(59,130,246,0.5)',
                '0 0 50px rgba(147,51,234,0.5)',
                '0 0 30px rgba(59,130,246,0.5)'
              ]
            } : {
              boxShadow: [
                '0 0 20px rgba(59,130,246,0.3)',
                '0 0 40px rgba(147,51,234,0.3)',
                '0 0 20px rgba(59,130,246,0.3)'
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
                className="block text-white mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Mohamed
              </motion.span>
              <motion.span
                className="block text-gradient-animated"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                El Gorrim
              </motion.span>
            </h1>
            
            <motion.div 
              className="h-20"
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
            className="flex flex-wrap items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <motion.a
              href="https://github.com/MedGm"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel group px-8 py-4 hover:scale-105 transition-all min-w-[200px] relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
                animate={{
                  x: ["0%", "100%"],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <span className="text-xl text-blue-300 group-hover:text-blue-200 relative z-10">
                View GitHub
              </span>
            </motion.a>
            <motion.a 
              href="#contact"
              className="neon-button min-w-[200px] text-xl relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Home;
