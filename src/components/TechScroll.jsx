import { motion } from 'framer-motion';
import { techIcons } from '../utils/iconUrls';

function TechScroll() {
  const techStacks = [
    {
      category: "Frontend Technologies",
      command: "ls -la ./frontend/",
      icons: [
        { name: "HTML5", src: techIcons.html5 },
        { name: "CSS3", src: techIcons.css3 },
        { name: "JavaScript", src: techIcons.javascript },
        { name: "TypeScript", src: techIcons.typescript },
        { name: "React", src: techIcons.react },
        { name: "Angular", src: techIcons.angular },
        { name: "Bootstrap", src: techIcons.bootstrap },
        { name: "Tailwind", src: techIcons.tailwind }
      ]
    },
    {
      category: "Backend & Languages",
      command: "cat ./backend.json",
      icons: [
        { name: "Python", src: techIcons.python },
        { name: "C++", src: techIcons.cpp },
        { name: "Java", src: techIcons.java },
        { name: "Node.js", src: techIcons.nodejs },
        { name: "Express.js", src: techIcons.expressjs },
        { name: "Symfony", src: techIcons.symfony }
      ]
    },
    {
      category: "Development Tools",
      command: "./tools --list",
      icons: [
        { name: "Git", src: techIcons.git },
        { name: "GitHub", src: techIcons.github },
        { name: "VS Code", src: techIcons.vscode },
        { name: "IntelliJ", src: techIcons.intellij },
        { name: "Unity", src: techIcons.unity }
      ]
    }
  ];

  return (
    <div className="w-full overflow-hidden bg-dark font-mono">
      {techStacks.map((stack, idx) => (
        <div key={idx} className="mb-16">
          {/* Terminal-style header */}
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
          >
            <h3 className="text-2xl font-bold text-terminal-500 mb-2">
              <span className="text-ubuntu-500">$ </span>
              {stack.command}
            </h3>
            <p className="text-matrix-500">
              <span className="text-terminal-500"># </span>
              {stack.category}
            </p>
          </motion.div>
          
          <div className="relative px-4">
            {/* Terminal window container */}
            <div className="glass-morphism-terminal rounded-xl p-6 relative overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center justify-between border-b border-terminal-500/20 pb-4 mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-hacker-500"></div>
                  <div className="w-3 h-3 rounded-full bg-warning-yellow"></div>
                  <div className="w-3 h-3 rounded-full bg-terminal-500"></div>
                </div>
                <div className="text-xs text-matrix-500">
                  tech_stack_{idx + 1}.sh
                </div>
              </div>

              {/* Scrolling tech icons */}
              <motion.div
                className="flex space-x-12 py-6 cursor-grab select-none"
                drag="x"
                dragElastic={0.2}
                dragConstraints={{ left: -400, right: 0 }}
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  x: {
                    duration: 15 + idx * 3,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear"
                  }
                }}
              >
                {/* Duplicate icons for seamless loop */}
                {[...stack.icons, ...stack.icons].map((tech, index) => (
                  <motion.div
                    key={`${tech.name}-${index}`}
                    className="flex flex-col items-center space-y-3 w-36 group"
                    whileHover={{ 
                      scale: 1.2, 
                      y: -10,
                      transition: { type: "spring", stiffness: 300, damping: 10 }
                    }}
                  >
                    <div className="relative">
                      {/* Terminal glow effect */}
                      <motion.div
                        className="absolute inset-0 bg-terminal-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"
                        animate={{
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                          duration: 3 + (index % 3),
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      />
                      <div className="relative z-10 p-4 rounded-xl border border-terminal-500/30 group-hover:border-terminal-500 transition-colors bg-dark/50 backdrop-blur-sm">
                        <img
                          src={tech.src}
                          alt={tech.name}
                          className="w-16 h-16 object-contain filter brightness-110 group-hover:brightness-125 transition-all"
                          style={{ 
                            filter: 'drop-shadow(0 0 10px rgba(0, 255, 65, 0.3))'
                          }}
                        />
                      </div>
                    </div>
                    <span className="text-sm font-medium text-matrix-500 group-hover:text-terminal-500 transition-colors text-center">
                      <span className="text-ubuntu-500">./</span>
                      {tech.name.toLowerCase().replace(/\s+/g, '_')}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Terminal scan line */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-px bg-terminal-500/50 z-20"
                animate={{ x: [-100, window.innerWidth + 100] }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  repeatType: "loop",
                  ease: "linear",
                  delay: idx * 2
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TechScroll;
