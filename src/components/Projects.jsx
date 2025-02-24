import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import PropTypes from 'prop-types';

function Projects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const projects = [
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
    const cardRef = useRef(null);
    const { scrollYProgress: elementProgress } = useScroll({
      target: cardRef,
      offset: ["start end", "center center"]
    });

    const scale = useTransform(elementProgress, [0, 1], [0.8, 1]);
    const opacity = useTransform(elementProgress, [0, 1], [0.3, 1]);

    return (
      <motion.article
        ref={cardRef}
        style={{ scale, opacity }}
        className="glass-morphism rounded-xl overflow-hidden group"
        whileHover={{ y: -10 }}
      >
        <div className="relative aspect-video overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        
        <div className="p-6 space-y-4">
          <h3 className="text-2xl font-bold text-gradient-animated">{project.title}</h3>
          <p className="text-gray-300">{project.description}</p>
          
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-blue-400">Key Features:</h4>
            <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
              {project.features?.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
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
            className="inline-flex items-center space-x-2 text-blue-400 hover:text-purple-400"
            whileHover={{ x: 5 }}
          >
            <span>View Project</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>
        </div>
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
    <section ref={containerRef} className="section-container relative">
      <motion.div
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.2], [0, 1]),
          y: useTransform(scrollYProgress, [0, 0.2], [50, 0])
        }}
        className="space-y-16"
      >
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-bold text-gradient-animated">Featured Projects</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore some of my recent work that demonstrates my technical capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
