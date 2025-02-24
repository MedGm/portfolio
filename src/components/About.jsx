import { motion } from 'framer-motion';

function About() {
  const qualities = [
    { title: "Problem Solver", icon: "🧩", description: "Analytical mindset with strong debugging skills" },
    { title: "Fast Learner", icon: "📚", description: "Quick to adapt to new technologies and frameworks" },
    { title: "Class Leader", icon: "👥", description: "Managing class communications and administrative responsibilities" },
    { title: "Creative Thinker", icon: "💡", description: "Innovative approach to technical challenges" }
  ];

  const achievements = [
    "First Year Engineering Student in Software and Intelligent Systems",
    "Experience with Full-Stack Development",
    "Game Development Enthusiast",
    "Strong foundation in Data Structures and Algorithms"
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-16"
        >
          {/* Header Section */}
          <div className="text-center space-y-4">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              About Me
            </motion.h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Passionate about creating innovative solutions and exploring new technologies
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Introduction */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="glass-morphism p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Background</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    As a first-year engineering student at Abdelmalek Essaâdi University, 
                    I'm pursuing my passion for software development and artificial intelligence.
                  </p>
                  <p>
                    My journey in technology began with web development and quickly expanded 
                    into various areas including game development and AI.
                  </p>
                </div>
              </div>

              {/* Achievements Section */}
              <div className="glass-morphism p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Highlights</h3>
                <ul className="space-y-2">
                  {achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center space-x-2 text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="text-blue-400">→</span>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right Column - Qualities and Education */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {/* Qualities Grid */}
              <div className="glass-morphism p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Key Qualities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {qualities.map((quality, index) => (
                    <motion.div
                      key={index}
                      className="p-4 rounded-lg bg-slate-800/50 border border-blue-500/10"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      <span className="text-2xl mb-2 block">{quality.icon}</span>
                      <h4 className="text-lg font-semibold text-blue-400 mb-1">{quality.title}</h4>
                      <p className="text-sm text-gray-400">{quality.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Education Section */}
              <motion.div 
                className="glass-morphism p-6 rounded-xl"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Education</h3>
                <div className="space-y-2 text-gray-300">
                  <p className="font-semibold">Engineering Degree in Software and Intelligent Systems</p>
                  <p>Abdelmalek Essaâdi University, Tétouan</p>
                  <p className="text-blue-400">2022 - 2027 (Expected)</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
