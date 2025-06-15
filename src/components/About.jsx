import { motion } from 'framer-motion';
import { useMemo } from 'react';
import PropTypes from 'prop-types';
import IconProvider from './utils/IconProvider';
import { personalInfo, education, qualityTraits, activities } from '../data/portfolioData';

// Create a memoized version of the component with proper PropTypes
const QualityCard = ({ quality, index }) => (
  <motion.div
    key={index}
    className="p-4 rounded-lg bg-slate-800/60 border border-slate-700/40 group/item hardware-accelerated shadow-lg transition-all duration-300"
    whileHover={{ 
      scale: 1.04,
      backgroundColor: "rgba(30, 41, 59, 0.7)",
      borderColor: "rgba(59, 130, 246, 0.18)"
    }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
  >
    {/* Icon with smooth animation */}
    <div className="text-blue-400 mb-3 flex justify-center sm:justify-start">
      <IconProvider icon={quality.icon} className="w-8 h-8" />
    </div>
    <h4 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-blue-300 text-transparent bg-clip-text mb-1 group-hover/item:from-blue-300 group-hover/item:to-blue-200 transition-all">
      {quality.title}
    </h4>
    <p className="text-sm text-gray-400 group-hover:item:text-gray-300 transition-colors">
      {quality.description}
    </p>
  </motion.div>
);

// Add PropTypes for QualityCard
QualityCard.propTypes = {
  quality: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired
};

// Activity Card Component
const ActivityCard = ({ activity, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2 }}
    className="flex items-start gap-4 group bg-slate-800/60 border border-slate-700/40 rounded-lg p-3 shadow-lg transition-all duration-300"
    whileHover={{
      scale: 1.04,
      backgroundColor: "rgba(30, 41, 59, 0.7)",
      borderColor: "rgba(59, 130, 246, 0.18)"
    }}
  >
    <div className="bg-blue-500/10 p-3 rounded-lg text-blue-400 flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
      <IconProvider icon={activity.icon} className="w-6 h-6" />
    </div>
    <div>
      <h4 className="text-lg font-medium bg-gradient-to-r from-blue-300 to-indigo-300 text-transparent bg-clip-text mb-1 group-hover:from-blue-200 group-hover:to-indigo-200">
        {activity.title}
      </h4>
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors text-sm">
        {activity.description}
      </p>
    </div>
  </motion.div>
);

ActivityCard.propTypes = {
  activity: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired
};

function About() {
  // Memoize data to prevent recreation on re-renders
  const highlights = useMemo(() => [
    "First Year Engineering Student in Software and Intelligent Systems",
    "Experience with Full-Stack Development (MERN & MEAN Stack)",
    "Game Development with Unity",
    "TypeScript and Angular Application Development",
    "Strong foundation in Data Structures and Algorithms"
  ], []);

  return (
    <section id="about" className="min-h-screen pt-20 pb-16 select-none relative section-container">
      {/* Subtle gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-purple-500/0"></div>
      
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
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
        
        {/* Decorative background blobs with consistent styling */}
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full filter blur-3xl transform-gpu"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-purple-500/5 rounded-full filter blur-3xl transform-gpu"></div>
        <div className="absolute right-1/4 top-1/3 w-[25%] h-[25%] bg-indigo-500/5 rounded-full filter blur-3xl transform-gpu"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="space-y-16"
        >
          {/* Section Header with consistent styling */}
          <div className="text-center space-y-4">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold relative inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-transparent bg-clip-text">
                About Me
              </span>
              {/* Animated underline matching other sections */}
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
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
            {/* Left Column - Introduction and Activities */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Background Section */}
              <motion.div 
                className="glass-morphism-enhanced p-8 rounded-xl relative overflow-hidden group shadow-lg transition-all duration-300"
                whileHover={{ 
                  y: -4,
                  boxShadow: "0 8px 32px 0 rgba(59,130,246,0.13), 0 1.5px 4px 0 rgba(0,0,0,0.10)"
                }}
              >
                {/* Gradient accent matching other sections */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 opacity-70"></div>
                
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 text-transparent bg-clip-text mb-4">Background</h3>
                <div className="space-y-4 text-gray-300">
                  <p>{personalInfo.about}</p>
                  
                  <div className="pt-4 flex flex-wrap gap-3">
                    <div className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-sm border border-blue-500/20">
                      Looking for Internships
                    </div>
                    <div className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-sm border border-blue-500/20">
                      Open to Collaborations
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Highlights Section */}
              <motion.div 
                className="glass-morphism-enhanced p-8 rounded-xl relative overflow-hidden group shadow-lg transition-all duration-300"
                whileHover={{ 
                  y: -4,
                  boxShadow: "0 8px 32px 0 rgba(147, 51, 234, 0.13), 0 1.5px 4px 0 rgba(0,0,0,0.10)"
                }}
                transition={{ delay: 0.1 }}
              >
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300 opacity-70"></div>
                
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-300 text-transparent bg-clip-text mb-4">Highlights</h3>
                <ul className="space-y-3">
                  {highlights.map((highlight, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3 text-gray-300 group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="text-purple-400 flex-shrink-0 mt-1.5">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      <span className="group-hover:text-gray-200 transition-colors">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              {/* Activities Section */}
              <motion.div 
                className="glass-morphism-enhanced p-8 rounded-xl relative overflow-hidden group shadow-lg transition-all duration-300"
                whileHover={{ 
                  y: -4,
                  boxShadow: "0 8px 32px 0 rgba(59,130,246,0.13), 0 1.5px 4px 0 rgba(0,0,0,0.10)"
                }}
                transition={{ delay: 0.2 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 opacity-70"></div>
                
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 text-transparent bg-clip-text mb-5">Extracurricular Activities</h3>
                <div className="space-y-5">
                  {activities.map((activity, index) => (
                    <ActivityCard key={index} activity={activity} index={index} />
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Qualities and Education */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Qualities Grid */}
              <motion.div 
                className="glass-morphism-enhanced p-8 rounded-xl relative overflow-hidden group shadow-lg transition-all duration-300"
                whileHover={{ 
                  y: -4,
                  boxShadow: "0 8px 32px 0 rgba(59,130,246,0.13), 0 1.5px 4px 0 rgba(0,0,0,0.10)"
                }}
              >
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 opacity-70"></div>
                
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 text-transparent bg-clip-text mb-5">Key Qualities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {qualityTraits.map((quality, index) => (
                    <QualityCard key={index} quality={quality} index={index} />
                  ))}
                </div>
              </motion.div>

              {/* Education Section */}
              <motion.div 
                className="glass-morphism-enhanced p-8 rounded-xl relative overflow-hidden shadow-lg transition-all duration-300"
                whileHover={{ 
                  y: -4,
                  boxShadow: "0 8px 32px 0 rgba(59,130,246,0.13), 0 1.5px 4px 0 rgba(0,0,0,0.10)"
                }}
                transition={{ delay: 0.1 }}
              >
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300 opacity-70"></div>
                
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-300 text-transparent bg-clip-text mb-4">Education</h3>
                <div className="space-y-3 text-gray-300">
                  <motion.p 
                    className="font-semibold text-lg"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    {education.degree}
                  </motion.p>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    {education.institution}, {education.location}
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
                    <span className="text-blue-400">{education.period} (Expected)</span>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Languages Card */}
              <motion.div 
                className="glass-morphism-enhanced p-8 rounded-xl relative overflow-hidden shadow-lg transition-all duration-300"
                whileHover={{ 
                  y: -4,
                  boxShadow: "0 8px 32px 0 rgba(59,130,246,0.13), 0 1.5px 4px 0 rgba(0,0,0,0.10)"
                }}
              >
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 opacity-70"></div>
                
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 text-transparent bg-clip-text mb-5">Languages</h3>
                <div className="space-y-3">
                  {personalInfo.languages && personalInfo.languages.map((lang, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-gray-300">{lang.name}</span>
                      <span className="text-sm text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* NEW: Skills Overview Card */}
              <motion.div 
                className="glass-morphism-enhanced p-8 rounded-xl relative overflow-hidden shadow-lg transition-all duration-300"
                whileHover={{ 
                  y: -4,
                  boxShadow: "0 8px 32px 0 rgba(59,130,246,0.13), 0 1.5px 4px 0 rgba(0,0,0,0.10)"
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 via-green-400 to-green-300 opacity-70"></div>
                
                <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-300 text-transparent bg-clip-text mb-5">Interests & Goals</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-500/10 p-2 rounded-lg text-green-400 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-green-300 mb-1">AI & Machine Learning</h4>
                      <p className="text-gray-400 text-sm">Exploring applications of neural networks and reinforcement learning in healthcare systems</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-500/10 p-2 rounded-lg text-green-400 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-green-300 mb-1">Research Goals</h4>
                      <p className="text-gray-400 text-sm">Contributing to research projects in embedded systems and IoT solutions</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;