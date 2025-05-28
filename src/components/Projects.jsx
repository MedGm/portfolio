import { motion, useScroll } from 'framer-motion';
import { useState, useRef, useMemo } from 'react';
import PropTypes from 'prop-types';

function Projects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Updated comprehensive project data
  const projects = useMemo(() => [
    {
      id: 1,
      title: "Conception et Gestion de département Génie Info",
      description: "A comprehensive department management system for computer engineering faculty, facilitating administrative workflows and student management.",
      technologies: ["React", "Dexie.js", "JavaScript", "CSS"],
      github: "https://github.com/DustWinter/Hone",
      live: "https://github.com/DustWinter/Hone",
      image: "/department.png",
      status: "Completed",
      category: "Frontend",
      features: [
        "Faculty member management",
        "Student enrollment tracking", 
        "Course scheduling",
        "Administrative dashboard",
        "Academic performance analytics"
      ],
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: 2,
      title: "GameHaven",
      description: "A feature-rich video game marketplace built with Symfony and React. Implements user authentication, game listings, reviews, and a sophisticated search system.",
      technologies: ["React", "Symfony", "PostgreSQL", "Postman", "PHP"],
      github: "https://github.com/MedGm/GameHaven",
      live: "https://github.com/MedGm/GameHaven",
      image: "/gamehaven.png",
      status: "Completed",
      category: "Full Stack",
      features: [
        "User authentication and profiles",
        "Game searching and filtering",
        "Review and rating system",
        "Responsive design"
      ],
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: 3,
      title: "EEG Seizure Detection System",
      description: "A real-time epileptic seizure detection system using EEG signals that processes data via MQTT, applies machine learning for prediction, and displays results through an interactive web interface.",
      technologies: ["Python", "Flask", "Node-RED", "MQTT", "TensorFlow", "Socket.IO"],
      github: "https://github.com/ScienceWeek02/final-work",
      live: "https://github.com/ScienceWeek02/final-work",
      image: "/eeg.png",
      status: "Completed",
      category: "AI/ML",
      features: [
        "Real-time EEG data processing via MQTT",
        "Machine learning-based seizure prediction",
        "Interactive web dashboard for visualization",
        "Adjustable detection sensitivity parameters",
        "Simulation tools for testing and validation"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "QT Project",
      description: "Desktop application developed using QT framework, demonstrating UI/UX design and C++ programming skills with database integration and modern interface design.",
      technologies: ["C++", "QT", "SQLite", "Git"],
      github: "https://github.com/MedGm/QTproject",
      live: "https://github.com/MedGm/QTproject",
      image: "/qt.png",
      status: "Completed",
      category: "Desktop",
      features: [
        "Modern QT interface design",
        "SQLite database integration",
        "Cross-platform compatibility",
        "Object-oriented architecture"
      ],
      color: "from-orange-500 to-red-500"
    }
  ], []);

  // Filter and category management
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = useMemo(() => [
    'All', 'Frontend', 'Full Stack', 'AI/ML', 'Desktop'
  ], []);

  const filteredProjects = useMemo(() => {
    return activeCategory === 'All' 
      ? projects 
      : projects.filter(project => project.category === activeCategory);
  }, [projects, activeCategory]);

  return (
    <section 
      id="projects" 
      ref={containerRef} 
      className="min-h-screen py-28 relative overflow-hidden select-none bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Background Effects */}
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
              ls -la ./projects
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
            A collection of projects showcasing my development journey
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
              <span className="text-orange-400">./</span>{category.toLowerCase().replace(/\s+/g, '_')}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid - Fixed layout */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          layout
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* Bottom section */}
        <motion.div
          className="text-center pt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="p-6 rounded-xl inline-block bg-slate-800/30 border border-slate-600/50 backdrop-blur-sm">
            <p className="text-slate-400 font-mono">
              <span className="text-cyan-400">$ </span>
              echo "More projects in development..." && sleep 1 && echo "Stay tuned!"
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

// Enhanced Project Card Component - Fixed scaling and content visibility
function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="bg-slate-800/30 rounded-xl overflow-hidden border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm h-full flex flex-col"
        whileHover={{ 
          y: -5,
          boxShadow: "0 20px 40px rgba(6, 182, 212, 0.15)"
        }}
      >
        {/* Project Image - Fixed sizing */}
        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800 flex-shrink-0">
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}
            animate={isHovered ? { opacity: 0.3 } : { opacity: 0.2 }}
          />
          
          {/* Image container with proper sizing */}
          <div className="absolute inset-0">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback icon */}
            <div className="w-full h-full flex items-center justify-center hidden">
              <svg className="w-16 h-16 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
          </div>
          
          {/* Status badge */}
          <div className="absolute top-4 right-4 z-10">
            <span className={`px-3 py-1 rounded-full text-xs font-mono backdrop-blur-sm ${
              project.status === 'Completed' 
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-400/30' 
                : 'bg-orange-500/20 text-orange-400 border border-orange-400/30'
            }`}>
              {project.status}
            </span>
          </div>
          
          {/* Category badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/20 text-cyan-400 border border-cyan-400/30 backdrop-blur-sm">
              {project.category}
            </span>
          </div>
        </div>

        {/* Project Content - Fixed flex layout */}
        <div className="p-6 flex flex-col flex-1">
          {/* Title */}
          <h3 className="text-xl font-bold text-cyan-300 mb-3 font-mono group-hover:text-cyan-400 transition-colors">
            <span className="text-orange-400">$ </span>
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-slate-400 text-sm leading-relaxed mb-4 font-mono">
            <span className="text-cyan-400"># </span>
            {project.description}
          </p>

          {/* Features - Fixed visibility */}
          {project.features && project.features.length > 0 && (
            <div className="mb-4 flex-shrink-0">
              <h4 className="text-sm font-mono text-emerald-400 mb-2">
                <span className="text-orange-400">&gt; </span>
                Key Features:
              </h4>
              <div className="space-y-1">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-400 font-mono">
                    <span className="text-cyan-400 mt-0.5 flex-shrink-0">•</span>
                    <span className="leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies */}
          <div className="mb-6 flex-shrink-0">
            <h4 className="text-sm font-mono text-purple-400 mb-2">
              <span className="text-orange-400">&gt; </span>
              Tech Stack:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span 
                  key={i}
                  className="text-xs px-2 py-1 rounded bg-slate-700/50 text-slate-300 border border-slate-600/50 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons - Fixed visibility */}
          <div className="flex gap-3 mt-auto pt-2">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 text-slate-300 hover:text-white transition-all border border-slate-600/50 hover:border-slate-500 font-mono text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="hidden sm:inline">Code</span>
              <span className="sm:hidden">GitHub</span>
            </motion.a>
            
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-white transition-all font-mono text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span className="hidden sm:inline">View</span>
              <span className="sm:hidden">Live</span>
            </motion.a>
          </div>
        </div>

        {/* Hover effect overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-emerald-500/5 rounded-xl pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    github: PropTypes.string.isRequired,
    live: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    color: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired
};

export default Projects;
