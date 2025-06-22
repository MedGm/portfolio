import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { personalInfo, ctaButtons, socialLinks } from '../data/portfolioData';

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
  
  // Enhanced code particle with PropTypes
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
      className="absolute pointer-events-none whitespace-nowrap font-mono text-xs sm:text-sm"
      style={{
        color,
        textShadow: `0 0 15px ${color}`,
        filter: "brightness(1.2)"
      }}
    >
      {text}
    </motion.div>
  );

  CodeParticle.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    direction: PropTypes.number.isRequired
  };

  // Static background without animations that cause flashing
  const BackgroundEffect = () => (
    <div className="absolute inset-0 -z-10">
      {/* Static gradient background - no animations */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/95 to-slate-900/90" />
      
      {/* Static grid pattern - no hover-based changes */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full" 
          style={{ 
            backgroundImage: `radial-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px)`, 
            backgroundSize: '40px 40px'
          }}
        />
      </div>
      
      {/* Static decorative elements instead of animated orbs */}
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-blue-600/5 filter blur-[80px]"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[250px] h-[250px] rounded-full bg-purple-600/5 filter blur-[80px]"></div>
    </div>
  );

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-purple-500/0"></div>
      
      <BackgroundEffect />

      {/* Main content container - fixed height and centered */}
      <div className="container mx-auto px-6 flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col items-center gap-10 py-16">
          {/* Profile Image with static styling */}
          <motion.div
            className="relative hardware-accelerated"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56">
              {/* Simple static glow without animations */}
              <div className="absolute -inset-4 rounded-full opacity-60 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20"></div>
              
              {/* Static decorative border */}
              <div className="absolute -inset-2 rounded-full border-2 border-blue-500/20"></div>
              
              {/* Static image container with high-quality rendering */}
              <div className="relative z-10 rounded-full overflow-hidden w-full h-full border-[3px] border-white/10 shadow-lg shadow-blue-900/20">
                <div className="w-full h-full">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="rounded-full w-full h-full object-cover"
                    loading="eager"
                    style={{ objectFit: 'cover' }}
                  />
                  
                  {/* Static overlay for design consistency */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-900/10 to-transparent pointer-events-none"></div>
                </div>
              </div>
              
              {/* Inner highlight for depth - static */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
              
              {/* Code particles when hovered */}
              {isHovered && (
                <div className="absolute inset-0 flex items-center justify-center overflow-visible z-20">
                  {personalInfo.codeSnippets.map((snippet, index) => (
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

          {/* Text Content */}
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
                <motion.span
                  className="block text-white mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {personalInfo.firstName}
                </motion.span>
                <motion.span
                  className="block relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="text-gradient-animated">{personalInfo.lastName}</span>
                  <motion.span
                    className="absolute bottom-0 left-0 right-0 h-1 rounded bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  />
                </motion.span>
              </h1>
              
              {/* Type animation with better height handling */}
              <motion.div 
                className="h-12 sm:h-16 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <TypeAnimation
                  sequence={personalInfo.roles}
                  wrapper="h2"
                  repeat={Infinity}
                  className="text-lg sm:text-xl md:text-2xl text-blue-300/90 font-light"
                />
              </motion.div>
            </div>

            {/* CTA Buttons with View CV */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              {ctaButtons.map((button, index) => (
                <motion.a
                  key={button.id}
                  href={button.href}
                  target={button.external ? "_blank" : undefined}
                  rel={button.external ? "noopener noreferrer" : undefined}
                  className={`group px-6 sm:px-7 py-3 sm:py-3.5 min-w-[140px] sm:min-w-[160px] relative overflow-hidden flex items-center justify-center rounded-full shadow-md ${
                    button.variant === 'primary' 
                      ? 'bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white font-semibold' 
                      : 'bg-slate-800/80 text-gray-300 border border-slate-700/80'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  <span className={`relative z-10 text-base sm:text-lg flex items-center ${
                    button.variant === 'primary' 
                      ? 'text-white' 
                      : 'text-gray-300 group-hover:text-blue-300'
                  } transition-colors duration-300`}>
                    {button.text}
                    {button.variant === 'primary' && (
                      <motion.svg 
                        className="w-4 h-4 sm:w-5 sm:h-5 ml-2" 
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
                    )}
                  </span>
                </motion.a>
              ))}
              {/* View CV Button */}
              <motion.a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 sm:px-7 py-3 sm:py-3.5 min-w-[140px] sm:min-w-[160px] relative overflow-hidden flex items-center justify-center rounded-full shadow-md bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 text-white font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                <span className="relative z-10 text-base sm:text-lg flex items-center">
                  View CV
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </motion.a>
            </motion.div>

            {/* Social Links with simplified hover */}
            <motion.div
              className="flex items-center justify-center gap-5 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/70 text-gray-400 hover:text-blue-400 hover:bg-slate-700/70 transition-colors border border-slate-700/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + index * 0.1 }}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    {social.id === 'github' && (
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    )}
                    {social.id === 'linkedin' && (
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    )}
                  </svg>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Simplified scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center text-gray-400">
        <span className="text-sm mb-2">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5,
            ease: "easeInOut"
          }}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;