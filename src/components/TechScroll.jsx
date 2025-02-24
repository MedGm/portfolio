import { motion } from 'framer-motion';
import { techIcons } from '../utils/iconUrls';

function TechScroll() {
  const techStacks = [
    {
      category: "Languages & Frameworks",
      icons: [
        { name: "HTML5", src: techIcons.html5 },
        { name: "CSS3", src: techIcons.css3 },
        { name: "JavaScript", src: techIcons.javascript },
        { name: "Python", src: techIcons.python },
        { name: "C++", src: techIcons.cpp },
        { name: "Java", src: techIcons.java },
        { name: "React", src: techIcons.react },
        { name: "Symfony", src: techIcons.symfony }
      ]
    },
    {
      category: "Tools & Technologies",
      icons: [
        { name: "Git", src: techIcons.git },
        { name: "GitHub", src: techIcons.github },
        { name: "VS Code", src: techIcons.vscode },
        { name: "IntelliJ", src: techIcons.intellij },
        { name: "Unreal Engine", src: techIcons.unreal },
        { name: "Docker", src: techIcons.docker },
        { name: "Bootstrap", src: techIcons.bootstrap },
        { name: "Tailwind", src: techIcons.tailwind }
      ]
    }
  ];

  return (
    <div className="w-full overflow-hidden">
      {techStacks.map((stack, idx) => (
        <div key={idx} className="mb-16">
          <h3 className="text-2xl font-bold text-center text-blue-400 mb-8">
            {stack.category}
          </h3>
          <div className="relative px-4">
            <motion.div
              className="flex space-x-16 py-6"
              animate={{
                x: ["0%", "-50%"]
              }}
              transition={{
                x: {
                  duration: 25,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                }
              }}
            >
              {[...stack.icons, ...stack.icons].map((tech, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center space-y-3 w-32"
                  whileHover={{ 
                    scale: 1.15,
                    filter: "brightness(1.2)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 10
                  }}
                >
                  <div className="relative group">
                    <motion.div
                      className="absolute inset-0 bg-blue-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"
                      animate={{
                        opacity: [0.5, 0.3, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                    <img
                      src={tech.src}
                      alt={tech.name}
                      className="w-16 h-16 object-contain relative z-10 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                    />
                  </div>
                  <span className="text-base font-medium text-gray-300 group-hover:text-blue-400 transition-colors">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TechScroll;
