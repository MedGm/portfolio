import { motion } from 'framer-motion';
import { useMemo } from 'react';
import PropTypes from 'prop-types';

// Terminal-themed quality card component
const QualityCard = ({ quality, index }) => (
  <motion.div
    key={index}
    className="glass-morphism-terminal p-4 rounded-lg group/item hardware-accelerated"
    whileHover={{ 
      scale: 1.03,
      boxShadow: "0 0 15px rgba(0, 255, 65, 0.2)"
    }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
  >
    {/* Terminal-style icon */}
    <div className="text-terminal-500 mb-3 flex justify-center sm:justify-start">
      {quality.icon}
    </div>
    <h4 className="text-lg font-semibold text-terminal-500 mb-1 group-hover/item:text-ubuntu-500 transition-colors font-mono">
      {quality.title}
    </h4>
    <p className="text-sm text-matrix-500 group-hover/item:text-ai-500 transition-colors font-mono">
      {quality.description}
    </p>
  </motion.div>
);

QualityCard.propTypes = {
  quality: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired
};

function About() {
  // Terminal/hacker themed qualities
  const qualities = useMemo(() => [
    { 
      title: "Logic Architect", 
      description: "Debug && solve --recursive",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="M12 18v-6" />
          <path d="M8 15l4 3 4-3" />
        </svg>
      )
    },
    { 
      title: "Neural Adapter", 
      description: "while(learning) { adapt(); }",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 20.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z" />
          <path d="m12 8 4 4-4 4" />
          <path d="m8 12h8" />
        </svg>
      )
    },
    { 
      title: "Protocol Manager", 
      description: "sudo manage --class --admin",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    { 
      title: "Code Synthesizer", 
      description: "innovation.compile(creativity)",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ], []);

  // Terminal-style achievements
  const achievements = useMemo(() => [
    "First Year Engineering in Software && AI Systems",
    "Full-Stack.development([MERN, MEAN])",
    "Unity.gameEngine.mastery()",
    "TypeScript && Angular.build(projects)",
    "algorithms.study(dataStructures, complexity)"
  ], []);

  return (
    <motion.div 
      id="about" 
      className="min-h-screen pt-20 pb-16 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 select-none relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* Enhanced entrance transition */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-slate-700/50 to-transparent pointer-events-none"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced background effects with smoother transitions */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Animated matrix grid */}
          <motion.div 
            className="absolute inset-0 opacity-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.05 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            <div className="h-full w-full" 
              style={{ 
                backgroundImage: `linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                                 linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`, 
                backgroundSize: '30px 30px'
              }}
            />
          </motion.div>
          
          {/* Enhanced floating particles with staggered animation */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              initial={{ 
                opacity: 0,
                scale: 0,
                y: 50
              }}
              whileInView={{ 
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
                y: [0, -30, 0]
              }}
              viewport={{ once: true }}
              transition={{
                duration: 8 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8,
              }}
              style={{
                top: `${20 + i * 12}%`,
                left: `${15 + i * 14}%`,
                background: i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#10b981' : '#8b5cf6',
                boxShadow: `0 0 15px ${i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#10b981' : '#8b5cf6'}`,
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-16"
        >
          {/* Enhanced header with staggered animation */}
          <div className="text-center space-y-4">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold relative inline-block font-mono"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 150 }}
            >
              <span className="text-orange-400">$ </span>
              <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">cat ./about.json</span>
              <span className="text-cyan-400 animate-pulse">_</span>
              
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-cyan-500 via-emerald-500 to-purple-500"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
              />
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-400 max-w-3xl mx-auto font-mono"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <span className="text-cyan-400"># </span>
              Passionate about building the future through code
            </motion.p>
          </div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Left Column with enhanced entrance */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 100 }}
            >
              {/* Footer-style terminal cards */}
              <motion.div 
                className="p-6 md:p-8 rounded-xl relative overflow-hidden bg-slate-800/30 border border-slate-600/50 hover:border-cyan-400/50 transition-all backdrop-blur-sm"
                whileHover={{ 
                  boxShadow: "0 8px 32px rgba(6, 182, 212, 0.15)",
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mb-6 font-mono">
                  <span className="text-orange-400">$ </span>
                  ./whoami --verbose
                </h3>
                <div className="space-y-4 text-slate-300 font-mono text-sm md:text-base leading-relaxed">
                  <p className="break-words">
                    <span className="text-emerald-400">&gt; </span>
                    Engineering student at Abdelmalek Essaâdi University,
                  </p>
                  <p className="break-words">
                    <span className="text-emerald-400">&gt; </span>
                    specializing in software && intelligent systems.
                  </p>
                  <p className="break-words">
                    <span className="text-emerald-400">&gt; </span>
                    Journey: web.development → game.engines → AI.exploration
                  </p>
                  <p className="break-words">
                    <span className="text-emerald-400">&gt; </span>
                    Current focus: machine.learning && full.stack.mastery
                  </p>
                </div>
              </motion.div>

              {/* Achievements with footer-style design */}
              <motion.div 
                className="p-6 md:p-8 rounded-xl relative overflow-hidden bg-slate-800/30 border border-slate-600/50 hover:border-emerald-400/50 transition-all backdrop-blur-sm"
                whileHover={{ 
                  boxShadow: "0 8px 32px rgba(16, 185, 129, 0.15)",
                  y: -5
                }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-emerald-400 mb-6 font-mono">
                  <span className="text-orange-400">$ </span>
                  ls -la ./achievements
                </h3>
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3 text-slate-300 group font-mono text-sm md:text-base"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <motion.span 
                        className="text-cyan-400 flex-shrink-0 mt-1"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: index }}
                      >
                        •
                      </motion.span>
                      <span className="group-hover:text-cyan-400 transition-colors break-words leading-relaxed">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Right Column with enhanced entrance */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1, type: "spring", stiffness: 100 }}
            >
              {/* Skills with footer-style grid */}
              <motion.div 
                className="p-6 md:p-8 rounded-xl relative overflow-hidden bg-slate-800/30 border border-slate-600/50 hover:border-purple-400/50 transition-all backdrop-blur-sm"
                whileHover={{ 
                  boxShadow: "0 8px 32px rgba(147, 51, 234, 0.15)",
                  y: -5
                }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-purple-400 mb-6 font-mono">
                  <span className="text-orange-400">$ </span>
                  ./skills --list --core
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {qualities.map((quality, index) => (
                    <motion.div
                      key={index}
                      className="bg-slate-800/50 p-4 rounded-lg group/item border border-slate-600/30 hover:border-cyan-400/50 transition-all"
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 4px 16px rgba(6, 182, 212, 0.15)"
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-cyan-400 flex-shrink-0 mt-1">
                          {quality.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base md:text-lg font-semibold text-cyan-300 mb-1 group-hover/item:text-emerald-400 transition-colors font-mono">
                            {quality.title}
                          </h4>
                          <p className="text-sm text-slate-400 group-hover/item:text-slate-300 transition-colors font-mono break-words">
                            {quality.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Education with footer-style design */}
              <motion.div 
                className="p-6 md:p-8 rounded-xl relative overflow-hidden bg-slate-800/30 border border-slate-600/50 hover:border-orange-400/50 transition-all backdrop-blur-sm"
                whileHover={{ 
                  boxShadow: "0 8px 32px rgba(251, 146, 60, 0.15)",
                  y: -5
                }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-orange-400 mb-6 font-mono">
                  <span className="text-cyan-400">$ </span>
                  cat ./education.log
                </h3>
                <div className="space-y-4 text-slate-300 font-mono text-sm md:text-base leading-relaxed">
                  <motion.p 
                    className="font-semibold text-cyan-300 break-words"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="text-orange-400">&gt; </span>
                    Engineering in Software && Intelligent Systems
                  </motion.p>
                  <motion.p 
                    className="break-words"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="text-emerald-400">&gt; </span>
                    Abdelmalek Essaâdi University, Tétouan
                  </motion.p>
                  <motion.div
                    className="flex items-center gap-2 flex-wrap" 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <span className="text-purple-400">&gt; </span>
                    <svg className="w-5 h-5 text-orange-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-orange-400">2022 - 2027 (Expected)</span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Smooth transition zone to next section */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-slate-900/50 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.5, duration: 1 }}
      />
    </motion.div>
  );
}

export default About;
