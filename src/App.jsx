import { useEffect, useState, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
// Lazy load components that aren't needed immediately
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Achievements = lazy(() => import('./components/Achievements'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const ScrollToTop = lazy(() => import('./components/ScrollToTop'));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showRightClickMessage, setShowRightClickMessage] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);

  // Disable right-click functionality with custom message
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
      setShowRightClickMessage(true);
      setTimeout(() => {
        setShowRightClickMessage(false);
      }, 3000);
      return false;
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.body.style.userSelect = 'none';
    document.body.style.WebkitUserSelect = 'none';
    document.body.style.MozUserSelect = 'none';
    document.body.style.msUserSelect = 'none';

    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setFirstLoad(false), 500);
    }, 1500);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      clearTimeout(timer);
      document.body.style.userSelect = '';
      document.body.style.WebkitUserSelect = '';
      document.body.style.MozUserSelect = '';
      document.body.style.msUserSelect = '';
    };
  }, []);

  // Performance optimized background elements
  const BackgroundEffects = () => (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Use simplified noise texture with reduced opacity */}
      <div 
        className="absolute inset-0 opacity-[0.02] mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Reduced number of particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400 will-change-transform"
            style={{
              width: Math.random() * 4 + 1 + "px",
              height: Math.random() * 4 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              opacity: Math.random() * 0.15,
            }}
            animate={{
              y: [0, -(Math.random() * 80 + 40)],
              opacity: [0, Math.random() * 0.15, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>
      
      {/* Simplified decorative elements */}
      <div className="absolute top-1/4 right-10 opacity-10">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none" className="will-change-transform">
          <motion.circle
            cx="150"
            cy="150"
            r="100"
            stroke="#8b5cf6"
            strokeWidth="1"
            fill="none"
            animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
        </svg>
      </div>
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-[#0a192f] text-gray-100 relative overflow-x-hidden">
      {/* Conditionally render background effects after loading to improve initial load time */}
      {!isLoading && <BackgroundEffects />}
      
      {/* Loading screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-b from-slate-900 to-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {/* Simplified loading animation */}
            <motion.div 
              className="relative w-24 h-24 flex items-center justify-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-xl font-bold text-blue-400">MG</div>
              <motion.div 
                className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Enhanced right-click message toast with animation */}
      <AnimatePresence>
        {showRightClickMessage && (
          <motion.div 
            className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            <div className="bg-gradient-to-r from-blue-900/90 via-indigo-900/90 to-purple-900/90 backdrop-blur-md px-6 py-4 rounded-xl text-white shadow-lg border border-blue-700/30 relative overflow-hidden">
              {/* Animated background pulse effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                animate={{ 
                  opacity: [0.3, 0.5, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              {/* Content */}
              <div className="flex items-center gap-3 relative z-10">
                <div className="bg-blue-500/20 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Right-click disabled by Med Gm</p>
                  <p className="text-sm text-gray-300 mt-0.5">Content is protected</p>
                </div>
              </div>
              
              {/* Side ornament line */}
              <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-blue-400 via-indigo-400 to-purple-400"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Main content with Suspense fallbacks for lazy-loaded components */}
      <motion.div 
        initial={firstLoad ? { opacity: 0 } : false}
        animate={firstLoad ? { opacity: 1 } : false}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Navbar />
        <main className="select-none">
          <Suspense fallback={<div className="min-h-screen"></div>}>
            <section id="home">
              <Home />
            </section>
          </Suspense>
          
          <Suspense fallback={<div className="min-h-screen"></div>}>
            <section id="about">
              <About />
            </section>
          </Suspense>
          
          <Suspense fallback={<div className="min-h-screen"></div>}>
            <section id="projects">
              <Projects />
            </section>
          </Suspense>
          
          <Suspense fallback={<div className="min-h-screen"></div>}>
            <section id="skills">
              <Skills />
            </section>
          </Suspense>
          
          <Suspense fallback={<div className="min-h-screen"></div>}>
            <section id="achievements">
              <Achievements />
            </section>
          </Suspense>
          
          <Suspense fallback={<div className="min-h-screen"></div>}>
            <section id="contact">
              <Contact />
            </section>
          </Suspense>
        </main>
        
        <Suspense fallback={<div></div>}>
          <Footer />
        </Suspense>
        
        <Suspense fallback={null}>
          <ScrollToTop />
        </Suspense>
      </motion.div>
    </div>
  );
}

export default App;
