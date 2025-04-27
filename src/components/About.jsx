import { motion } from 'framer-motion';
import { useRef, useMemo } from 'react';

// Create a memoized version of the component
const QualityCard = ({ quality, index }) => (
  <motion.div
    key={index}
    className="p-4 rounded-lg bg-slate-800/50 border border-blue-500/10 group/item hardware-accelerated"
    whileHover={{ 
      scale: 1.03,
      backgroundColor: "rgba(30, 41, 59, 0.7)",
      borderColor: "rgba(59, 130, 246, 0.3)"
    }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
  >
    {/* Simplified icon animation */}
    <div className="text-blue-400 mb-3 flex justify-center sm:justify-start animate-float-slow">
      {quality.icon}
    </div>
    <h4 className="text-lg font-semibold text-blue-400 mb-1 group-hover/item:text-blue-300 transition-colors">
      {quality.title}
    </h4>
    <p className="text-sm text-gray-400 group-hover/item:text-gray-300 transition-colors">
      {quality.description}
    </p>
  </motion.div>
);

function About() {
  const containerRef = useRef(null);

  // Memoize data to prevent recreation on re-renders
  const qualities = useMemo(() => [
    { 
      title: "Problem Solver", 
      description: "Analytical mindset with strong debugging skills",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="M12 18v-6" />
          <path d="M8 15l4 3 4-3" />
        </svg>
      )
    },
    { 
      title: "Fast Learner", 
      description: "Quick to adapt to new technologies and frameworks",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z" />
          <path d="m12 8 4 4-4 4" />
          <path d="m8 12h8" />
        </svg>
      )
    },
    { 
      title: "Class Leader", 
      description: "Managing class communications and administrative responsibilities",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    { 
      title: "Creative Thinker", 
      description: "Innovative approach to technical challenges",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ], []);

  const achievements = useMemo(() => [
    "First Year Engineering Student in Software and Intelligent Systems",
    "Experience with Full-Stack Development (MERN & MEAN Stack)",
    "Game Development with Unity",
    "TypeScript and Angular Application Development",
    "Strong foundation in Data Structures and Algorithms"
  ], []);

  return (
    <div id="about" className="min-h-screen pt-20 pb-16 bg-gradient-to-b from-slate-900 to-black select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Static background gradient */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-purple-500/5 rounded-full filter blur-3xl"></div>
        </div>

        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="space-y-16"
        >
          {/* Enhanced Header Section with animation */}
          <div className="text-center space-y-4">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold relative inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
                About Me
              </span>
              {/* Animated underline */}
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
            </motion.h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Passionate about creating innovative solutions and exploring new technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Column - Introduction with better styling */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="glass-morphism p-8 rounded-xl relative overflow-hidden group"
                whileHover={{ 
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)",
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Subtle gradient accent */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-blue-300 opacity-70"></div>
                
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Background</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    As a first-year engineering student at Abdelmalek Essaâdi University, 
                    I'm pursuing my passion for software development and artificial intelligence.
                  </p>
                  <p>
                    My journey in technology began with web development and quickly expanded 
                    into various areas including game development and AI.
                  </p>
                </div>
              </motion.div>

              {/* Achievements Section with improved styling */}
              <motion.div 
                className="glass-morphism p-8 rounded-xl relative overflow-hidden group"
                whileHover={{ 
                  boxShadow: "0 0 20px rgba(147, 51, 234, 0.2)",
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                transition={{ delay: 0.1 }}
              >
                {/* Subtle gradient accent */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-purple-300 opacity-70"></div>
                
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Highlights</h3>
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3 text-gray-300 group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <motion.span 
                        className="text-purple-400 flex-shrink-0 mt-1.5"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: index }}
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </motion.span>
                      <span className="group-hover:text-gray-200 transition-colors">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Right Column - Qualities with optimized rendering */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="glass-morphism p-8 rounded-xl relative overflow-hidden group hardware-accelerated"
                whileHover={{ 
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)",
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Subtle gradient accent */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-blue-300 opacity-70"></div>
                
                <h3 className="text-2xl font-bold text-blue-400 mb-5">Key Qualities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {qualities.map((quality, index) => (
                    <QualityCard key={index} quality={quality} index={index} />
                  ))}
                </div>
              </motion.div>

              {/* Education Section with enhanced hover effect */}
              <motion.div 
                className="glass-morphism p-8 rounded-xl relative overflow-hidden"
                whileHover={{ 
                  boxShadow: "0 0 20px rgba(147, 51, 234, 0.2)",
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                transition={{ delay: 0.1 }}
              >
                {/* Subtle gradient accent */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-purple-300 opacity-70"></div>
                
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Education</h3>
                <div className="space-y-3 text-gray-300">
                  <motion.p 
                    className="font-semibold text-lg"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    Engineering Degree in Software and Intelligent Systems
                  </motion.p>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    Abdelmalek Essaâdi University, Tétouan
                  </motion.p>
                  <motion.div
                    className="flex items-center gap-2" 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-blue-400">2022 - 2027 (Expected)</span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Optimize with React.memo
export default About;
