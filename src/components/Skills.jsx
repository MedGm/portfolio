import { motion } from 'framer-motion';
import TechScroll from './TechScroll';

function Skills() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-16"
        >
          <div className="text-center">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Technical Proficiency
            </motion.h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and expertise across various domains
            </p>
          </div>

          <div className="py-8">
            <TechScroll />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
