import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import PropTypes from 'prop-types';

function Projects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const projects = [
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
      title: "FSTT Student Application Management",
      description: "Web-based system for managing student applications to Engineering and Master's programs.",
      techStack: ["PHP", "MySQL", "Bootstrap"],
      link: "https://github.com/MedGm/PHP-Project",
      image: "/fsttmanagement.png"
    },
    {
      title: "QT Project",
      description: "Desktop application developed using QT framework, demonstrating UI/UX design and C++ programming skills.",
      techStack: ["C++", "QT", "SQLite"],
      link: "https://github.com/MedGm/QTproject",
      image: "/qt.png"
    }
  ];

  const ProjectCard = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef(null);
    const { scrollYProgress: elementProgress } = useScroll({
      target: cardRef,
      offset: ["start end", "center center"]
    });

    const scale = useTransform(elementProgress, [0, 1], [0.8, 1]);
    const opacity = useTransform(elementProgress, [0, 1], [0.3, 1]);

    const imageVariants = {
      hidden: { scale: 1 },
      hover: { scale: 1.1, transition: { duration: 0.4 } }
    };

    const overlayVariants = {
      hidden: { opacity: 0.5, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)' },
      hover: { opacity: 0.7, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.3) 100%)' }
    };

    const contentVariants = {
      hidden: { y: 0 },
      hover: { y: -10 }
    };

    return (
      <motion.article
        ref={cardRef}
        style={{ scale, opacity }}
        className="glass-morphism-enhanced rounded-xl overflow-hidden group"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <div className="relative aspect-video overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
            variants={imageVariants}
            animate={isHovered ? "hover" : "hidden"}
          />
          <motion.div 
            className="absolute inset-0" 
            variants={overlayVariants}
            animate={isHovered ? "hover" : "hidden"}
          />
          
          <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end">
            {project.techStack.slice(0, 2).map((tech, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.2 }}
                className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/30 backdrop-blur-sm text-blue-100 border border-blue-500/30"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="p-6 space-y-4"
          variants={contentVariants}
          animate={isHovered ? "hover" : "hidden"}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-transparent bg-clip-text">
              {project.title}
            </span>
          </h3>
          
          <p className="text-gray-300 line-clamp-2">{project.description}</p>
          
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-blue-400">Key Features:</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-1">
              {project.features?.map((feature, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-sm text-gray-400 flex items-start"
                >
                  <svg className="w-4 h-4 text-blue-500 mt-0.5 mr-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-wrap gap-2 pt-2">
            {project.techStack.length > 2 && project.techStack.slice(2).map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-blue-400 hover:text-purple-400 mt-4"
            whileHover={{ x: 5 }}
          >
            <span>View Project</span>
            <motion.svg 
              className="w-4 h-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              initial={{ x: 0 }}
              animate={isHovered ? { x: [0, 5, 0] } : {}}
              transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 0.5 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </motion.article>
    );
  };
  
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
    <section ref={containerRef} className="section-container relative py-36">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      
      <motion.div
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.2], [0, 1]),
          y: useTransform(scrollYProgress, [0, 0.2], [50, 0])
        }}
        className="space-y-16 relative z-10"
      >
        <motion.div 
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-transparent bg-clip-text inline-block">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore some of my recent work that demonstrates my technical capabilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
