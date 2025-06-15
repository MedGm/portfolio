import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';
import IconProvider from './utils/IconProvider';
import { techIcons } from '../utils/iconUrls';

function Skills() {
  const normalizedCategories = useMemo(() => [
    {
      name: "Web & Database",
      color: "from-blue-500 to-cyan-400",
      icon: "web",
      skills: [
        "HTML5", "CSS3", "MySQL", "PostgreSQL", "MongoDB", "REST APIs", "Node.js"
      ]
    },
    {
      name: "Frameworks and Libraries",
      color: "from-purple-500 to-pink-500",
      icon: "frameworks",
      skills: [
        "React", "Angular", "Symfony", "Laravel", "Express.js", "Bootstrap", "Tailwind CSS"
      ]
    },
    {
      name: "Languages & Dev Tools",
      color: "from-green-500 to-emerald-400",
      icon: "languages",
      skills: [
        "JavaScript", "TypeScript", "Java", "Python", "PHP", "Arduino", "Bash", "Git", "GitHub", "VS Code", "IntelliJ", "Unity"
      ]
    },
    {
      name: "Engineering & Systems",
      color: "from-orange-500 to-red-500",
      icon: "systems",
      skills: [
        "UML", "Design Patterns", "Linux (Ubuntu)", "Embedded Systems"
      ]
    }
  ], []);

  const getIconUrl = (skillName) => {
    const map = {
      "HTML5": "html5",
      "CSS3": "css3",
      "JavaScript": "javascript",
      "TypeScript": "typescript",
      "Node.js": "nodejs",
      "Express.js": "expressjs",
      "GitHub": "github",
      "VS Code": "vscode",
      "IntelliJ": "intellij",
      "Linux (Ubuntu)": "linux",
      "Tailwind CSS": "tailwindcss",
      "Design Patterns": "designpatterns",
      "UML": "uml",
      "Laravel": "laravel",
      "Symfony": "symfony",
      "Bootstrap": "bootstrap",
      "Unity": "unity",
      "Arduino": "arduino",
      "Bash": "bash",
      "Git": "git",
      "MySQL": "mysql",
      "PostgreSQL": "postgresql",
      "MongoDB": "mongodb",
      "PHP": "php",
      "Java": "java",
      "Python": "python",
      "React": "react",
      "Angular": "angular",
      "Embedded Systems": "raspberry"
    };
    const key = map[skillName] || skillName.toLowerCase().replace(/[\s+#.()]/g, '');
    if (key === "uml" && typeof techIcons.uml === "string" && techIcons.uml.startsWith("<svg")) {
      return null;
    }
    return techIcons[key] || null;
  };

  const [openCategory, setOpenCategory] = useState(null);

  return (
    <section id="skills" className="min-h-screen pt-20 pb-16 select-none relative">
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
        
        {/* Decorative background elements */}
        <div className="absolute top-1/4 -right-[10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-purple-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute left-1/4 bottom-1/3 w-[30%] h-[30%] bg-indigo-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-10"
        >
          <div className="text-center space-y-4">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold relative inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
                Skills & Technologies
              </span>
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
            </motion.h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise, frameworks, and tools.
            </p>
          </div>

          {/* Skills by Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {normalizedCategories.map((cat, idx) => (
              <motion.div
                key={cat.name}
                className="glass-morphism-enhanced p-7 rounded-2xl relative overflow-hidden group shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 8px 32px 0 rgba(59,130,246,0.13), 0 1.5px 4px 0 rgba(0,0,0,0.10)"
                }}
              >
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${cat.color} opacity-80`}></div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {cat.icon && <IconProvider icon={cat.icon} className="w-6 h-6 text-blue-400" />}
                    <h3 className="text-xl font-bold text-white">{cat.name}</h3>
                  </div>
                  <button
                    className="text-blue-400 focus:outline-none"
                    onClick={() => setOpenCategory(openCategory === cat.name ? null : cat.name)}
                    aria-label={openCategory === cat.name ? "Collapse" : "Expand"}
                  >
                    <motion.svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      animate={{ rotate: openCategory === cat.name ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>
                </div>
                <motion.div
                  className="grid grid-cols-2 sm:grid-cols-3 gap-3"
                  animate={{ height: openCategory === cat.name ? 'auto' : 'auto' }}
                >
                  {cat.skills.slice(0, openCategory === cat.name ? cat.skills.length : 8).map((skill, skillIdx) => (
                    <motion.div
                      key={skill}
                      className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/60 border border-slate-700/40 group/skill transition-all duration-200"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: skillIdx * 0.03 }}
                      whileHover={{ 
                        scale: 1.04,
                        backgroundColor: "rgba(59, 130, 246, 0.13)",
                        borderColor: "rgba(59, 130, 246, 0.18)"
                      }}
                    >
                      {skill === "UML" && typeof techIcons.uml === "string" && techIcons.uml.startsWith("<svg") ? (
                        <span
                          className="w-5 h-5"
                          dangerouslySetInnerHTML={{ __html: techIcons.uml }}
                        />
                      ) : getIconUrl(skill) ? (
                        <img src={getIconUrl(skill)} alt={skill} className="w-5 h-5" />
                      ) : (
                        <IconProvider icon={skill.toLowerCase().replace(/[^a-z0-9]/g, '')} className="w-5 h-5 text-blue-400" />
                      )}
                      <span className="text-sm text-gray-300 group-hover/skill:text-blue-300 transition-colors">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
                {/* Show more indicator */}
                {cat.skills.length > 8 && openCategory !== cat.name && (
                  <div className="mt-3 text-center">
                    <span className="text-xs text-gray-400">
                      +{cat.skills.length - 8} more
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;