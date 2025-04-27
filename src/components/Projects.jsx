import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

function Projects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
  }, []);

  // Memoize project data to prevent unnecessary recalculation
  const projects = useMemo(() => [
    {
      title: "Conception est Gestion de departement Genie Info",
      description: "A comprehensive department management system for computer engineering faculty, facilitating administrative workflows and student management.",
      techStack: ["React", "Dexie.js"],
      link: "https://github.com/DustWinter/Hone",
      image: "/department.png",
      features: [
        "Faculty member management",
        "Student enrollment tracking",
        "Course scheduling",
        "Administrative dashboard",
        "Academic performance analytics"
      ]
    },
    {
      title: "GameHaven",
      description: "A feature-rich video game marketplace built with Symfony and React. Implements user authentication, game listings, reviews, and a sophisticated search system.",
      techStack: ["React", "Symfony", "PostgreSQL", "Postman"],
      link: "https://github.com/MedGm/GameHaven",
      image: "/gamehaven.png",
      features: [
        "User authentication and profiles",
        "Game searching and filtering",
        "Review and rating system",
        "Responsive design"
      ]
    },
    {
      title: "EEG Seizure Detection System",
      description: "A real-time epileptic seizure detection system using EEG signals that processes data via MQTT, applies machine learning for prediction, and displays results through an interactive web interface.",
      techStack: ["Python", "Flask", "Node-RED", "MQTT", "TensorFlow", "Socket.IO"],
      link: "https://github.com/MedGm/EEG-Seizure-Detection",
      image: "/eeg.png",
      features: [
        "Real-time EEG data processing via MQTT",
        "Machine learning-based seizure prediction",
        "Interactive web dashboard for visualization",
        "Adjustable detection sensitivity parameters",
        "Simulation tools for testing and validation"
      ]
    },
    {
      title: "QT Project",
      description: "Desktop application developed using QT framework, demonstrating UI/UX design and C++ programming skills.",
      techStack: ["C++", "QT", "SQLite"],
      link: "https://github.com/MedGm/QTproject",
      image: "/qt.png"
    }
  ], []);

  const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const { scrollYProgress: elementProgress } = useScroll({
      target: cardRef,
      offset: ["start end", "center center"]
    });

    const scale = useTransform(elementProgress, [0, 1], [0.8, 1]);
    const opacity = useTransform(elementProgress, [0, 1], [0.3, 1]);

    useEffect(() => {
      if (!isHovered && isHovering) {
        const timer = setTimeout(() => setIsHovering(false), 50);
        return () => clearTimeout(timer);
      }

      if (isHovered && !isHovering) {
        setIsHovering(true);
      }
    }, [isHovered, isHovering]);

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
        className="glass-morphism-enhanced rounded-xl overflow-hidden group relative hardware-accelerated"
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          className="absolute inset-0 bg-blue-500/5 pointer-events-none z-10 transition-opacity duration-300"
          style={{ opacity: isHovered ? 0.6 : 0 }}
        />

        <div className="relative aspect-video overflow-hidden">
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
        </div>

        <div 
          className="p-6 space-y-4 transition-transform duration-200"
          style={{ transform: isHovered ? 'translateY(-5px)' : 'translateY(0)' }}
        >
          <h3 className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-transparent bg-clip-text">
              {project.title}
            </span>
          </h3>

          <p className="text-gray-300 line-clamp-2">{project.description}</p>

          {project.features && (
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-blue-400">Key Features:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-1">
                {project.features.slice(0, 4).map((feature, i) => (
                  <li 
                    key={i}
                    className="text-sm text-gray-400 flex items-start"
                  >
                    <svg className="w-4 h-4 text-blue-500 mt-0.5 mr-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.techStack.length > 2 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {project.techStack.slice(2).map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 relative group text-blue-400 hover:text-purple-400 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="relative">
              View Project
              <span 
                className="absolute -bottom-1 left-0 right-0 h-[1px] bg-gradient-to-r from-blue-400 to-purple-400 transform origin-left transition-transform duration-300"
                style={{ transform: isHovered ? 'scaleX(1)' : 'scaleX(0)' }}
              />
            </span>
            <svg className="w-4 h-4 transition-transform duration-300" 
                 style={{ transform: isHovered ? 'translateX(5px)' : 'translateX(0)' }}
                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </motion.article>
    );
  };

  const MemoizedProjectCard = useMemo(() => ProjectCard, []);

  ProjectCard.propTypes = {
    project: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
      link: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      features: PropTypes.arrayOf(PropTypes.string)
    }).isRequired,
    index: PropTypes.number.isRequired
  };

  return (
    <section id="projects" ref={containerRef} className="section-container relative py-36 select-none">
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
            Explore some of my recent work that demonstrates my technical capabilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <MemoizedProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
