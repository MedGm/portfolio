import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

function Achievements() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);

  // Enhanced achievements data with more comprehensive information
  const achievements = useMemo(() => [
    {
      id: 1,
      title: "3rd Place in National Hackathon",
      subtitle: "Innovation Competition 2024",
      description: "Successfully competed and secured 3rd place in a highly competitive national hackathon with over 200 teams, showcasing innovative problem-solving skills, technical expertise, and exceptional teamwork under pressure.",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7319817359597133828/",
      image: "/a1.png",
      date: "March 2024",
      category: "Competition",
      skills: ["Problem Solving", "Team Leadership", "Innovation", "Time Management"],
      impact: "Developed a groundbreaking solution that impressed industry judges",
      color: "from-cyan-500 to-emerald-500",
      command: "hackathon --rank=3rd --teams=200+"
    },
    {
      id: 2,
      title: "Workshop on Épilepsie et Deep Learning",
      subtitle: "Technical Presentation & Knowledge Sharing",
      description: "Presented a comprehensive technical workshop on the applications of deep learning in epilepsy detection and monitoring systems, sharing cutting-edge research and practical implementations with peers and industry professionals.",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7319432087801847808/",
      image: "/a2.png",
      date: "February 2024",
      category: "Research",
      skills: ["Deep Learning", "Healthcare AI", "Public Speaking", "Research"],
      impact: "Educated 50+ professionals on AI applications in healthcare",
      color: "from-purple-500 to-cyan-500",
      command: "present --topic='AI Healthcare' --audience=professionals"
    },
    {
      id: 3,
      title: "Oracle Learning Explorer Badge",
      subtitle: "Professional Certification Achievement",
      description: "Successfully earned the Oracle Learning Explorer certification, demonstrating comprehensive proficiency in Oracle technologies, database management, and cloud solutions while showcasing commitment to continuous professional development.",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7271614517975867392/",
      image: "/a3.png",
      date: "December 2023",
      category: "Certification",
      skills: ["Database Management", "Oracle Cloud", "SQL", "Professional Development"],
      impact: "Enhanced expertise in enterprise database solutions",
      color: "from-emerald-500 to-purple-500",
      command: "certify --provider=Oracle --level=Explorer"
    }
  ], []);

  const categories = useMemo(() => [
    'All', 'Competition', 'Research', 'Certification'
  ], []);

  const [activeCategory, setActiveCategory] = useState('All');

  const filteredAchievements = useMemo(() => {
    return activeCategory === 'All' 
      ? achievements 
      : achievements.filter(achievement => achievement.category === activeCategory);
  }, [achievements, activeCategory]);

  const handleCardClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id="achievements" className="min-h-screen py-28 relative overflow-hidden select-none bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Matrix grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full" 
               style={{ 
                 backgroundImage: `linear-gradient(to right, rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                                   linear-gradient(to bottom, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`, 
                 backgroundSize: '40px 40px'
               }}
          />
        </div>
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#10b981' : '#8b5cf6',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: `0 0 20px ${i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#10b981' : '#8b5cf6'}`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced header */}
        <motion.div 
          className="text-center space-y-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold relative inline-block font-mono"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-orange-400">$ </span>
            <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
              ls -la ./achievements
            </span>
            <span className="text-cyan-400 animate-pulse">_</span>
            
            <motion.div 
              className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-cyan-500 via-emerald-500 to-purple-500"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </motion.h2>
          
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-mono">
            <span className="text-cyan-400"># </span>
            Recognitions and accomplishments from my professional journey
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-mono text-sm transition-all duration-300 border-2 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white border-cyan-400 shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-800/50 text-slate-300 border-slate-600/50 hover:border-cyan-400/50 hover:text-cyan-300'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-orange-400">./</span>{category.toLowerCase()}
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Achievement Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          layout
        >
          {filteredAchievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              index={index}
              isActive={activeIndex === index}
              isHovered={hoveredIndex === index}
              setActive={() => handleCardClick(index)}
              setHovered={setHoveredIndex}
            />
          ))}
        </motion.div>
        
        {/* Enhanced LinkedIn connection */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="p-6 rounded-xl inline-block bg-slate-800/30 border border-slate-600/50 backdrop-blur-sm">
            <p className="text-slate-400 font-mono mb-4">
              <span className="text-cyan-400">$ </span>
              echo "More achievements unlocking..." && echo "Stay connected for updates!"
            </p>
            <motion.a
              href="https://linkedin.com/in/mohamed-elgorrim"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 group relative overflow-hidden font-mono bg-gradient-to-r from-cyan-500 to-emerald-500 text-white hover:from-cyan-400 hover:to-emerald-400"
              whileHover={{ 
                boxShadow: "0 8px 32px rgba(6, 182, 212, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>$ connect --linkedin --profile</span>
              <motion.svg 
                className="w-4 h-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5,
                  repeatDelay: 1
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </motion.svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Enhanced Achievement Card Component
function AchievementCard({ achievement, index, isActive, isHovered, setActive, setHovered }) {
  const cardRef = useRef(null);
  
  // Enhanced 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);
  
  // Handle mouse move for tilt effect
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set((e.clientX - centerX) * 0.5);
    y.set((e.clientY - centerY) * 0.5);
  };
  
  // Reset tilt
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(null);
  };

  const handleMouseEnter = () => {
    setHovered(index);
  };

  return (
    <motion.div
      ref={cardRef}
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={setActive}
    >
      <motion.div
        className="bg-slate-800/30 rounded-xl overflow-hidden border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm h-full cursor-pointer"
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          transformPerspective: 1200,
        }}
        whileHover={{ 
          y: -8,
          boxShadow: "0 20px 40px rgba(6, 182, 212, 0.15)"
        }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 300
        }}
      >
        {/* Enhanced image section */}
        <div className="relative h-56 overflow-hidden">
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-20`}
            animate={isHovered ? { opacity: 0.3 } : { opacity: 0.2 }}
          />
          
          <div className="absolute inset-0">
            <img 
              src={achievement.image} 
              alt={achievement.title}
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback */}
            <div className="w-full h-full flex items-center justify-center hidden bg-slate-700">
              <svg className="w-16 h-16 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
          </div>
          
          {/* Category badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/20 text-cyan-400 border border-cyan-400/30 backdrop-blur-sm">
              {achievement.category}
            </span>
          </div>
          
          {/* Date badge */}
          <div className="absolute top-4 right-4 z-10">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-400/30 backdrop-blur-sm">
              {achievement.date}
            </span>
          </div>
        </div>

        {/* Enhanced content */}
        <div className="p-6 flex flex-col">
          {/* Command line style title */}
          <h3 className="text-xl font-bold text-cyan-300 mb-2 font-mono group-hover:text-cyan-400 transition-colors">
            <span className="text-orange-400">$ </span>
            {achievement.title}
          </h3>
          
          {/* Subtitle */}
          <p className="text-sm text-emerald-400 mb-3 font-mono">
            <span className="text-purple-400"># </span>
            {achievement.subtitle}
          </p>

          {/* Description */}
          <p className="text-slate-400 text-sm leading-relaxed mb-4 font-mono flex-grow">
            {achievement.description}
          </p>

          {/* Skills tags */}
          <div className="mb-4">
            <h4 className="text-xs font-mono text-purple-400 mb-2">
              <span className="text-orange-400">&gt; </span>
              Skills:
            </h4>
            <div className="flex flex-wrap gap-2">
              {achievement.skills.map((skill, i) => (
                <span 
                  key={i}
                  className="text-xs px-2 py-1 rounded bg-slate-700/50 text-slate-300 border border-slate-600/50 font-mono"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Impact */}
          <div className="mb-4">
            <p className="text-xs text-slate-500 font-mono">
              <span className="text-emerald-400">→ </span>
              {achievement.impact}
            </p>
          </div>

          {/* Action button */}
          <motion.a
            href={achievement.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-emerald-400 transition-colors group/link font-mono text-sm mt-auto"
            whileHover={{ x: 5 }}
            onClick={(e) => e.stopPropagation()}
          >
            <span className="relative">
              <span className="text-orange-400">$ </span>
              {achievement.command}
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

        {/* Enhanced hover effects */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-emerald-500/5 rounded-xl pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Active effect */}
        <AnimatePresence>
          {isActive && (
            <motion.div 
              className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: Math.random() * 4 + 2,
                    height: Math.random() * 4 + 2,
                    background: i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#10b981' : '#8b5cf6',
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    boxShadow: `0 0 10px ${i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#10b981' : '#8b5cf6'}`,
                  }}
                  animate={{
                    y: [0, -30 - Math.random() * 20, 0],
                    x: [0, (Math.random() - 0.5) * 40, 0],
                    opacity: [0, 0.8, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2 + Math.random(),
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: Math.random() * 1
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

AchievementCard.propTypes = {
  achievement: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    impact: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    command: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  isHovered: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
  setHovered: PropTypes.func.isRequired
};

export default Achievements;
