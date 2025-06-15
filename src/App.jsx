import { useEffect, useState, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo, siteMetadata } from './data/portfolioData';
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load components for better performance
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Achievements = lazy(() => import('./components/Achievements'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const ScrollToTop = lazy(() => import('./components/ScrollToTop'));

import PropTypes from 'prop-types';

// Loading fallback component
const SectionLoader = ({ height = "min-h-screen" }) => (
  <div className={`${height} flex items-center justify-center`}>
    <motion.div
      className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

SectionLoader.propTypes = {
  height: PropTypes.string,
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showRightClickMessage, setShowRightClickMessage] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const [performanceMode, setPerformanceMode] = useState(false);

  // Set document metadata
  useEffect(() => {
    document.title = siteMetadata.title;
    
    // Set meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = siteMetadata.description;
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = siteMetadata.description;
      document.head.appendChild(meta);
    }

    // Set other meta tags
    const metaTags = [
      { name: 'keywords', content: siteMetadata.keywords },
      { name: 'author', content: siteMetadata.author },
      { property: 'og:title', content: siteMetadata.title },
      { property: 'og:description', content: siteMetadata.description },
      { property: 'og:url', content: siteMetadata.siteUrl },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: siteMetadata.title },
      { name: 'twitter:description', content: siteMetadata.description }
    ];

    metaTags.forEach(tag => {
      const existingTag = document.querySelector(`meta[${tag.name ? 'name' : 'property'}="${tag.name || tag.property}"]`);
      if (!existingTag) {
        const meta = document.createElement('meta');
        if (tag.name) meta.name = tag.name;
        if (tag.property) meta.property = tag.property;
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });
  }, []);

  // Performance monitoring
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setPerformanceMode(true);
    }

    // Monitor performance
    if ('connection' in navigator) {
      const connection = navigator.connection;
      if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
        setPerformanceMode(true);
      }
    }
  }, []);

  // Enhanced security and user experience
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
      setShowRightClickMessage(true);
      setTimeout(() => setShowRightClickMessage(false), 3000);
      return false;
    };

    const handleKeyDown = (e) => {
      // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
      if (
        e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
        (e.ctrlKey && e.shiftKey && e.keyCode === 74) || // Ctrl+Shift+J
        (e.ctrlKey && e.keyCode === 85) // Ctrl+U
      ) {
        e.preventDefault();
        setShowRightClickMessage(true);
        setTimeout(() => setShowRightClickMessage(false), 3000);
        return false;
      }
    };

    // Apply security measures
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    
    // Disable text selection
    document.body.style.userSelect = 'none';
    document.body.style.WebkitUserSelect = 'none';
    document.body.style.MozUserSelect = 'none';
    document.body.style.msUserSelect = 'none';

    // Loading timer
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setFirstLoad(false), 500);
    }, performanceMode ? 1000 : 1500);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
      // Reset styles
      document.body.style.userSelect = '';
      document.body.style.WebkitUserSelect = '';
      document.body.style.MozUserSelect = '';
      document.body.style.msUserSelect = '';
    };
  }, [performanceMode]);

  // Enhanced background effects with performance consideration
  const BackgroundEffects = () => {
    if (performanceMode) return null;

    return (
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Enhanced unified background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-900/95" />
        
        {/* Simplified noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.02] mix-blend-soft-light"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Radial grid for all sections */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" 
            style={{ 
              backgroundImage: `radial-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px)`, 
              backgroundSize: '40px 40px'
            }}
          />
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-400 will-change-transform"
              style={{
                width: Math.random() * 3 + 1 + "px",
                height: Math.random() * 3 + 1 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
                opacity: Math.random() * 0.1,
              }}
              animate={{
                y: [0, -(Math.random() * 60 + 30)],
                opacity: [0, Math.random() * 0.1, 0],
              }}
              transition={{
                duration: Math.random() * 8 + 8,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 8,
              }}
            />
          ))}
        </div>
        
        {/* Decorative element */}
        <div className="absolute top-1/4 right-10 opacity-5">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
            <motion.circle
              cx="100"
              cy="100"
              r="80"
              stroke="#8b5cf6"
              strokeWidth="1"
              fill="none"
              animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 12, repeat: Infinity }}
            />
          </svg>
        </div>
      </div>
    );
  };

  // Enhanced notification component
  const RightClickNotification = () => (
    <AnimatePresence>
      {showRightClickMessage && (
        <motion.div 
          className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          <div className="bg-gradient-to-r from-blue-900/95 via-indigo-900/95 to-purple-900/95 backdrop-blur-md px-6 py-4 rounded-xl text-white shadow-xl border border-blue-700/30 relative overflow-hidden max-w-sm">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
              animate={{ 
                opacity: [0.3, 0.5, 0.3],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            <div className="flex items-center gap-3 relative z-10">
              <div className="bg-blue-500/20 p-2 rounded-lg flex-shrink-0">
                <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-medium text-sm">Content Protected</p>
                <p className="text-xs text-gray-300 mt-0.5">by {personalInfo.name}</p>
              </div>
            </div>
            
            <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-blue-400 via-indigo-400 to-purple-400 rounded-r"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Helper for section transitions with improved transitions
  const Section = ({ children, id }) => (
    <AnimatePresence mode="wait">
      <motion.section
        key={id}
        id={id}
        className="page-section section-container"
        style={{ zIndex: 10 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {children}
      </motion.section>
    </AnimatePresence>
  );

  Section.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
  };

  return (
    <ErrorBoundary>
      <div className="w-full min-h-screen bg-[#0a192f] text-gray-100 relative overflow-x-hidden">
        {/* Background effects */}
        {!isLoading && <BackgroundEffects />}
        
        {/* Loading screen */}
        <AnimatePresence>
          {isLoading && <LoadingScreen personalInfo={personalInfo} />}
        </AnimatePresence>
        
        {/* Right-click notification */}
        <RightClickNotification />
        
        {/* Main application */}
        <motion.div 
          initial={firstLoad ? { opacity: 0 } : false}
          animate={firstLoad ? { opacity: 1 } : false}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Navbar />
          
          <main className="select-none">
            <Suspense fallback={<SectionLoader />}>
              <Section id="home">
                <Home />
              </Section>
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
              <Section id="about">
                <About />
              </Section>
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
              <Section id="projects">
                <Projects />
              </Section>
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
              <Section id="skills">
                <Skills />
              </Section>
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
              <Section id="achievements">
                <Achievements />
              </Section>
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
              <Section id="contact">
                <Contact />
              </Section>
            </Suspense>
          </main>
          
          <Suspense fallback={<div className="h-20"></div>}>
            <Footer />
          </Suspense>
          
          <Suspense fallback={null}>
            <ScrollToTop />
          </Suspense>
        </motion.div>
      </div>
    </ErrorBoundary>
  );
}

export default App;
