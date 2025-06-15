import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { achievements, personalInfo } from '../data/portfolioData';

function Achievements() {
  const [activeIndex, setActiveIndex] = useState(null);
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Modified card click handler
  const handleCardClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id="achievements" className="min-h-screen py-28 relative overflow-hidden select-none">
      {/* Subtle gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-purple-500/0"></div>
      
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/95 to-slate-900/90" />
        
        {/* Static grid background */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" 
            style={{ 
              backgroundImage: `radial-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px)`, 
              backgroundSize: '40px 40px'
            }}
          />
        </div>
        
        {/* Background static blobs */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-blue-600/5 filter blur-[80px] transform-gpu"></div>
        <div className="absolute top-2/3 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-600/5 filter blur-[80px] transform-gpu"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-pink-600/5 filter blur-[80px] transform-gpu"></div>
      </div>

      <div 
        ref={containerRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-transparent bg-clip-text">
              Achievements & Certifications
            </span>
            {/* Animated underline */}
            <motion.div 
              className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mt-4">
            Recognitions and accomplishments from my professional journey
          </p>
        </motion.div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              index={index}
              isActive={activeIndex === index}
              setActive={() => handleCardClick(index)}
            />
          ))}
        </div>
        
        {/* LinkedIn Connection button */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass-morphism-enhanced px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 group relative overflow-hidden"
            whileHover={{ 
              boxShadow: "0 0 25px rgba(59, 130, 246, 0.3)",
              scale: 1.05
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Shine effect */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <motion.div 
                className="w-1/3 h-full absolute top-0 -left-full bg-white/20 transform skew-x-12"
                animate={{ left: ['0%', '200%'] }}
                transition={{ 
                  duration: 2, 
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              />
            </div>
            
            {/* LinkedIn icon */}
            <svg className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            
            {/* Text with hover effect */}
            <span className="text-lg text-gray-300 group-hover:text-blue-300 transition-colors relative">
              View My LinkedIn Profile
              <motion.span 
                className="absolute bottom-0 left-0 right-0 h-[1px] bg-blue-400/50"
                initial={{ scaleX: 0, transformOrigin: "left" }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

// Achievement Card Component
function AchievementCard({ achievement, index, isActive, setActive }) {
  const cardRef = useRef(null);
  
  // 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [7, -7]);
  const rotateY = useTransform(x, [-100, 100], [-7, 7]);
  
  // Handle mouse move for tilt effect
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };
  
  // Reset tilt
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  
  // Particle effect for active cards
  const ParticleEffect = () => {
    const colors = achievement.color.includes('blue') ? ['#3b82f6', '#60a5fa'] : 
                   achievement.color.includes('purple') ? ['#8b5cf6', '#a78bfa'] :
                   ['#f97316', '#fb923c'];
    
    return (
      <motion.div 
        className="absolute inset-0 pointer-events-none overflow-hidden z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 8 + 4,
              height: Math.random() * 8 + 4,
              background: colors[Math.floor(Math.random() * colors.length)],
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -60 - Math.random() * 40, 0],
              x: [0, (Math.random() - 0.5) * 80, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "loop",
              delay: Math.random() * 2
            }}
          />
        ))}
      </motion.div>
    );
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative z-20 select-none"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={setActive}
    >
      <motion.div
        className={`glass-morphism-enhanced rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 shadow-lg ${
          isActive ? 'scale-[1.03]' : 'hover:scale-[1.02]'
        }`}
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          transformPerspective: 1200,
          transformStyle: "preserve-3d"
        }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 300
        }}
        whileHover={{
          y: -4,
          boxShadow: "0 8px 32px 0 rgba(59,130,246,0.13), 0 1.5px 4px 0 rgba(0,0,0,0.10)"
        }}
      >
        {/* Card Header */}
        <div className="relative">
          {/* Gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-15 mix-blend-overlay`}></div>
          
          {/* Image */}
          <div className="w-full h-48 overflow-hidden group">
            <motion.img 
              src={achievement.image} 
              alt={achievement.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.5 }}
            />
            
            {/* Gradient overlay for text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          </div>
          
          {/* Title */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className={`text-xl font-bold bg-gradient-to-r ${achievement.color} text-transparent bg-clip-text drop-shadow-sm`}>
              {achievement.title}
            </h3>
            {achievement.date && (
              <p className="text-sm text-gray-400 mt-1">{achievement.date}</p>
            )}
          </div>
        </div>
        
        {/* Card Body */}
        <div className="p-6 pt-4 relative">
          <p className="text-gray-300 mb-5 leading-relaxed">
            {achievement.description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {achievement.tags.map((tag, i) => (
              <motion.span 
                key={i} 
                className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(59, 130, 246, 0.2)"
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
          
          {/* Type badge */}
          {achievement.type && (
            <div className="mb-4">
              <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                achievement.type === 'Competition' ? 'bg-yellow-500/10 text-yellow-300 border border-yellow-500/20' :
                achievement.type === 'Workshop' ? 'bg-green-500/10 text-green-300 border border-green-500/20' :
                'bg-purple-500/10 text-purple-300 border border-purple-500/20'
              }`}>
                {achievement.type}
              </span>
            </div>
          )}
          
          {/* LinkedIn link */}
          <motion.a
            href={achievement.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-purple-400 transition-colors group"
            whileHover={{ x: 5 }}
            onClick={(e) => e.stopPropagation()}
          >
            <span className="relative">
              View on LinkedIn
              <motion.span 
                className="absolute bottom-0 left-0 right-0 h-[1px] bg-current"
                initial={{ scaleX: 0, transformOrigin: "left" }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </span>
            <motion.svg 
              className="w-4 h-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              animate={isActive ? { x: [0, 5, 0] } : {}}
              transition={{ 
                repeat: isActive ? Infinity : 0, 
                duration: 1.5,
                repeatDelay: 0.5
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </motion.svg>
          </motion.a>
        </div>
        
        {/* Active card effects */}
        <AnimatePresence>
          {isActive && <ParticleEffect />}
        </AnimatePresence>
        
        {/* Border glow effect */}
        <motion.div 
          className="absolute inset-0 rounded-xl pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isActive ? [0.4, 0.7, 0.4] : 0 
          }}
          transition={{ 
            duration: 2, 
            repeat: isActive ? Infinity : 0 
          }}
        >
          <div className={`absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r ${achievement.color} opacity-30`} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

AchievementCard.propTypes = {
  achievement: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    date: PropTypes.string,
    type: PropTypes.string
  }).isRequired,
  index: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired
};

AchievementCard.propTypes = {
  achievement: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    date: PropTypes.string,
    type: PropTypes.string
  }).isRequired,
  index: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired
};

export default Achievements;
