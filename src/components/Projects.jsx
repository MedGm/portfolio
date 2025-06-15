import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { projects } from '../data/portfolioData';

function Projects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const ProjectCard = ({ project }) => {
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const { scrollYProgress: elementProgress } = useScroll({
      target: cardRef,
      offset: ["start end", "center center"]
    });

    const scale = useTransform(elementProgress, [0, 1], [0.8, 1]);
    const opacity = useTransform(elementProgress, [0, 1], [0.3, 1]);

    const handleMouseEnter = useCallback(() => {
      setIsHovered(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
      setIsHovered(false);
    }, []);

    return (
      <motion.article
        ref={cardRef}
        style={{ scale, opacity }}
        className="glass-morphism-enhanced rounded-2xl overflow-hidden group relative hardware-accelerated max-w-md mx-auto shadow-lg transition-all duration-300"
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{
          y: -4,
          boxShadow: "0 8px 32px 0 rgba(59,130,246,0.13), 0 1.5px 4px 0 rgba(0,0,0,0.10)"
        }}
      >
        <div 
          className="absolute inset-0 bg-blue-500/5 pointer-events-none z-10 transition-opacity duration-300"
          style={{ opacity: isHovered ? 0.6 : 0 }}
        />

        <div className="relative aspect-[4/3] overflow-hidden">
          <div 
            className="w-full h-full transition-transform duration-500 ease-out hardware-accelerated" 
            style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20 transition-opacity duration-300"
               style={{ opacity: isHovered ? 0.8 : 0.5 }}/>

          <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end">
            {project.techStack.slice(0, 2).map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/40 backdrop-blur-sm text-blue-100 border border-blue-500/40 shadow-lg shadow-blue-900/20"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Category badge */}
          {project.category && (
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm border ${
                project.category === 'Academic' 
                  ? 'bg-green-500/40 text-green-100 border-green-500/40' 
                  : 'bg-purple-500/40 text-purple-100 border-purple-500/40'
              }`}>
                {project.category}
              </span>
            </div>
          )}
        </div>

        {/* Compact content section */}
        <div className="p-4 space-y-2 transition-transform duration-200">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-lg font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-transparent bg-clip-text">
                {project.title}
              </span>
            </h3>
            {project.year && (
              <span className="text-xs text-gray-400 bg-slate-700/50 px-2 py-1 rounded flex-shrink-0">
                {project.year}
              </span>
            )}
          </div>
          <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
          {/* Key features - show only 1 */}
          {project.features && (
            <div>
              <ul className="space-y-1">
                {project.features.slice(0, 1).map((feature, i) => (
                  <li 
                    key={i}
                    className="text-xs text-gray-400 flex items-start"
                  >
                    <svg className="w-3 h-3 text-blue-500 mt-0.5 mr-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* Status and link */}
          <div className="flex items-center justify-between pt-2">
            {project.status && (
              <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full ${
                project.status === 'Completed' 
                  ? 'bg-green-500/10 text-green-300 border border-green-500/20' 
                  : 'bg-yellow-500/10 text-yellow-300 border border-yellow-500/20'
              }`}>
                <div className={`w-1.5 h-1.5 rounded-full ${
                  project.status === 'Completed' ? 'bg-green-400' : 'bg-yellow-400'
                }`}></div>
                {project.status}
              </span>
            )}
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-purple-400 transition-colors group"
              onClick={(e) => e.stopPropagation()}
              whileHover={{ x: 3 }}
            >
              <span className="relative">
                View
                <span 
                  className="absolute -bottom-0.5 left-0 right-0 h-[1px] bg-gradient-to-r from-blue-400 to-purple-400 transform origin-left transition-transform duration-300"
                  style={{ transform: isHovered ? 'scaleX(1)' : 'scaleX(0)' }}
                />
              </span>
              <svg className="w-3 h-3 transition-transform duration-300" 
                   style={{ transform: isHovered ? 'translateX(2px)' : 'translateX(0)' }}
                   fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </div>
        </div>
      </motion.article>
    );
  };

  const MemoizedProjectCard = useMemo(() => ProjectCard, []);

  ProjectCard.propTypes = {
    project: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
      link: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      features: PropTypes.arrayOf(PropTypes.string),
      category: PropTypes.string,
      year: PropTypes.string,
      status: PropTypes.string
    }).isRequired
  };

  return (
    <section id="projects" ref={containerRef} className="section-container relative py-36 select-none">
      {/* Subtle gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-purple-500/0"></div>
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="h-full w-full" 
          style={{ 
            backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`, 
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <motion.div
        className="space-y-16 relative z-10 scroll-animation"
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.2], [0, 1]),
          y: useTransform(scrollYProgress, [0, 0.2], [50, 0])
        }}
      >
        <motion.div 
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl font-bold inline-block relative">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-transparent bg-clip-text">
              Featured Projects
            </span>
            <motion.div 
              className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore some of my recent work that demonstrates my technical capabilities and passion for innovation
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          className="flex justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {['All', 'Academic', 'Extracurricular'].map((filter) => (
            <motion.button
              key={filter}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all bg-slate-800/50 text-gray-300 hover:bg-blue-500/20 hover:text-blue-300 border border-slate-700/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <MemoizedProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center pt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.a
            href="https://github.com/MedGm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass-morphism-enhanced px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 group relative overflow-hidden"
            whileHover={{ 
              boxShadow: "0 0 25px rgba(59, 130, 246, 0.3)",
              scale: 1.05
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* GitHub icon */}
            <svg className="w-5 h-5 text-gray-300 group-hover:text-blue-300 transition-colors" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            
            <span className="text-lg text-gray-300 group-hover:text-blue-300 transition-colors">
              View All Projects on GitHub
            </span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Projects;