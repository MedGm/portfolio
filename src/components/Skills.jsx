import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import { techIcons } from '../utils/iconUrls';

function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  // Terminal-themed skills data using only icons from iconUrls.js
  const skillsData = useMemo(() => ({
    frontend: [
      { name: 'HTML5', level: 95, icon: techIcons.html5, command: 'vim index.html' },
      { name: 'CSS3', level: 90, icon: techIcons.css3, command: 'sass --watch styles.scss' },
      { name: 'JavaScript', level: 88, icon: techIcons.javascript, command: 'node app.js' },
      { name: 'TypeScript', level: 85, icon: techIcons.typescript, command: 'tsc --init' },
      { name: 'React', level: 90, icon: techIcons.react, command: 'npm install react' },
      { name: 'Angular', level: 75, icon: techIcons.angular, command: 'ng new project' },
      { name: 'Bootstrap', level: 80, icon: techIcons.bootstrap, command: 'npm i bootstrap' },
      { name: 'Tailwind CSS', level: 95, icon: techIcons.tailwind, command: 'npm i tailwindcss' }
    ],
    backend: [
      { name: 'Python', level: 85, icon: techIcons.python, command: 'python app.py' },
      { name: 'Java', level: 70, icon: techIcons.java, command: 'javac Main.java' },
      { name: 'C++', level: 75, icon: techIcons.cpp, command: 'g++ -o main main.cpp' },
      { name: 'Node.js', level: 85, icon: techIcons.nodejs, command: 'node server.js' },
      { name: 'Express.js', level: 80, icon: techIcons.expressjs, command: 'npm i express' },
      { name: 'Symfony', level: 75, icon: techIcons.symfony, command: 'symfony new project' }
    ],
    tools: [
      { name: 'Git', level: 90, icon: techIcons.git, command: 'git init' },
      { name: 'GitHub', level: 85, icon: techIcons.github, command: 'git push origin main' },
      { name: 'VS Code', level: 95, icon: techIcons.vscode, command: 'code .' },
      { name: 'IntelliJ', level: 80, icon: techIcons.intellij, command: 'idea .' },
      { name: 'Unity', level: 70, icon: techIcons.unity, command: 'unity -projectPath .' }
    ]
  }), []);

  const categories = [
    { id: 'all', label: 'ls -la', icon: '📁' },
    { id: 'frontend', label: './frontend', icon: '🌐' },
    { id: 'backend', label: './backend', icon: '⚙️' },
    { id: 'tools', label: './tools', icon: '🛠️' }
  ];

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return Object.entries(skillsData).flatMap(([category, skills]) =>
        skills.map(skill => ({ ...skill, category }))
      );
    }
    return skillsData[activeCategory]?.map(skill => ({ ...skill, category: activeCategory })) || [];
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section id="skills" className="min-h-screen py-28 relative overflow-hidden select-none bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 -z-10">
        {/* Enhanced matrix grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full" 
            style={{ 
              backgroundImage: `linear-gradient(to right, rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                               linear-gradient(to bottom, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`, 
              backgroundSize: '40px 40px'
            }}
          />
        </div>
        
        {/* Enhanced floating code particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: i % 4 === 0 ? '#06b6d4' : i % 4 === 1 ? '#10b981' : i % 4 === 2 ? '#8b5cf6' : '#f59e0b',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: `0 0 20px ${i % 4 === 0 ? '#06b6d4' : i % 4 === 1 ? '#10b981' : i % 4 === 2 ? '#8b5cf6' : '#f59e0b'}`,
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          />
        ))}
        
        {/* Enhanced scan lines */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"
          animate={{ x: [-200, typeof window !== 'undefined' ? window.innerWidth + 200 : 1200] }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: "loop",
            ease: "linear" 
          }}
        />
        
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-40"
          animate={{ x: [typeof window !== 'undefined' ? window.innerWidth + 200 : 1200, -200] }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            repeatType: "loop",
            ease: "linear" 
          }}
        />
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
              ./skills --list --all
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
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Enhanced category filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-mono text-sm transition-all duration-300 border-2 flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white border-cyan-400 shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-800/50 text-slate-300 border-slate-600/50 hover:border-cyan-400/50 hover:text-cyan-300 hover:bg-slate-800/70'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg">{category.icon}</span>
              <span>
                <span className="text-orange-400">$ </span>
                {category.label}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced skills grid with fixed rendering */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          layout
          key={activeCategory} // Force re-render when category changes
        >
          {filteredSkills.map((skill, index) => (
            <SkillCard 
              key={`${skill.category}-${skill.name}-${index}`} 
              skill={skill} 
              index={index} 
            />
          ))}
        </motion.div>

        {/* Enhanced terminal output */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-block p-6 rounded-xl bg-slate-800/30 border border-slate-600/50 backdrop-blur-sm">
            <p className="text-slate-400 font-mono mb-2">
              <span className="text-cyan-400">$ </span>
              echo "Skills loaded: {filteredSkills.length} technologies"
            </p>
            <p className="text-slate-500 font-mono text-sm">
              <span className="text-orange-400"># </span>
              Always learning, always growing...
            </p>
            <motion.div
              className="mt-3 flex items-center justify-center space-x-1"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-cyan-400 rounded-full"
                  style={{ 
                    animationDelay: `${i * 0.2}s`,
                    animation: 'pulse 1.5s infinite'
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Enhanced Skill Card Component with fixed rendering
function SkillCard({ skill, index }) {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px", amount: 0.3 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.2 }
      }}
    >
      <motion.div
        className="bg-slate-800/30 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm h-full"
        whileHover={{ 
          boxShadow: "0 20px 40px rgba(6, 182, 212, 0.15)",
          borderColor: "rgba(6, 182, 212, 0.5)"
        }}
      >
        {/* Skill header */}
        <div className="flex items-center gap-4 mb-4">
          {/* Enhanced skill icon */}
          <div className="relative">
            <motion.div
              className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600/50 group-hover:border-cyan-400/50 transition-all"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-8 h-8 object-contain filter brightness-110 group-hover:brightness-125 transition-all"
                style={{ 
                  filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.3))'
                }}
              />
            </motion.div>
            
            {/* Enhanced glow effect */}
            <motion.div
              className="absolute inset-0 rounded-lg bg-cyan-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </div>

          {/* Skill info */}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-cyan-300 group-hover:text-cyan-400 transition-colors font-mono mb-1">
              {skill.name}
            </h3>
            <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors font-mono">
              <span className="text-orange-400">$ </span>
              {skill.command}
            </p>
          </div>
        </div>

        {/* Removed proficiency indicator */}

        {/* Enhanced hover effect overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-emerald-500/5 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
        
        {/* Terminal scan line effect */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100"
          animate={{
            x: [-100, 100]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear"
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export default Skills;
