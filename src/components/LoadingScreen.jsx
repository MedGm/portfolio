import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

function LoadingScreen({ personalInfo }) {
  return (
    <motion.div 
      className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="relative flex flex-col items-center justify-center gap-8">
        {/* Static background elements */}
        <div className="absolute -inset-32 opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-purple-500/20 rounded-full filter blur-3xl"></div>
        </div>
        
        {/* Logo/Avatar */}
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-white/10 shadow-xl">
          {personalInfo?.profileImage ? (
            <img 
              src={personalInfo.profileImage} 
              alt={personalInfo.name || 'Profile'} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600"></div>
          )}
          
          {/* Pulse effect around the avatar */}
          <motion.div 
            className="absolute -inset-1 rounded-full border-2 border-blue-500/50"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
        </div>
        
        {/* Loading text with animation */}
        <motion.div 
          className="flex flex-col items-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <h2 className="text-lg font-medium text-white mb-1">
            {personalInfo?.name || 'Portfolio'}
          </h2>
          <p className="text-blue-400 text-sm">Loading experience...</p>
        </motion.div>
        
        {/* Loading indicator */}
        <div className="relative w-40 h-1.5 bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
            animate={{ width: ['0%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
}

LoadingScreen.propTypes = {
  personalInfo: PropTypes.shape({
    name: PropTypes.string,
    profileImage: PropTypes.string
  })
};

export default LoadingScreen;