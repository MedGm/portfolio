import { lazy, Suspense, useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { techIcons } from './utils/iconUrls';

// Lazy load components for better performance
const Navbar = lazy(() => import('./components/Navbar'));
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Achievements = lazy(() => import('./components/Achievements'));
const Contact = lazy(() => import('./components/Contact'));
const ScrollToTop = lazy(() => import('./components/ScrollToTop'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showRightClickMessage, setShowRightClickMessage] = useState(false);
  const [componentsLoaded, setComponentsLoaded] = useState(false);
  const [currentLoadingPhase, setCurrentLoadingPhase] = useState('initializing');
  
  // Use refs to prevent stale closures
  const isLoadingRef = useRef(true);
  const progressRef = useRef(0);

  // Disable right-click functionality with custom message
  useEffect(() => {
    const handleRightClick = (e) => {
      e.preventDefault();
      setShowRightClickMessage(true);
    };

    const handleClick = () => {
      if (showRightClickMessage) {
        setShowRightClickMessage(false);
      }
    };

    document.addEventListener('contextmenu', handleRightClick);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('contextmenu', handleRightClick);
      document.removeEventListener('click', handleClick);
    };
  }, [showRightClickMessage]);

  // Preload critical resources
  const preloadResources = useCallback(async () => {
    try {
      const criticalImages = ['/me.png', '/a1.png', '/a2.png', '/a3.png'];
      const imagePromises = criticalImages.map(src => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = resolve;
          img.src = src;
        });
      });

      await Promise.allSettled(imagePromises);
      return true;
    } catch (error) {
      console.log('Resource preloading completed with some errors');
      return true;
    }
  }, []);

  // Fixed loading simulation with proper progress updates
  useEffect(() => {
    let isMounted = true;
    let animationFrameId;
    
    // Update refs
    isLoadingRef.current = true;
    progressRef.current = 0;

    const updateProgress = (newProgress, phase) => {
      if (!isMounted || !isLoadingRef.current) return;
      
      progressRef.current = newProgress;
      setLoadingProgress(newProgress);
      if (phase) setCurrentLoadingPhase(phase);
    };

    const simulateRealisticLoading = async () => {
      try {
        // Phase 1: Initial boot (0-20%)
        updateProgress(0, 'initializing');
        await new Promise(resolve => setTimeout(resolve, 500));
        
        for (let i = 1; i <= 20 && isMounted && isLoadingRef.current; i++) {
          updateProgress(i, 'initializing');
          await new Promise(resolve => setTimeout(resolve, 80 + Math.random() * 40));
        }

        // Phase 2: Loading components (20-50%)
        updateProgress(20, 'components');
        await new Promise(resolve => setTimeout(resolve, 300));
        
        for (let i = 21; i <= 50 && isMounted && isLoadingRef.current; i += 2) {
          updateProgress(i, 'components');
          await new Promise(resolve => setTimeout(resolve, 100 + Math.random() * 50));
        }

        // Phase 3: Resource loading (50-80%)
        updateProgress(50, 'resources');
        const resourcePromise = preloadResources();
        
        for (let i = 51; i <= 80 && isMounted && isLoadingRef.current; i += 3) {
          updateProgress(i, 'resources');
          await new Promise(resolve => setTimeout(resolve, 120 + Math.random() * 80));
        }

        // Wait for resources to complete
        await resourcePromise;

        // Phase 4: Finalizing (80-95%)
        updateProgress(80, 'finalizing');
        setComponentsLoaded(true);
        
        for (let i = 81; i <= 95 && isMounted && isLoadingRef.current; i += 2) {
          updateProgress(i, 'finalizing');
          await new Promise(resolve => setTimeout(resolve, 100 + Math.random() * 60));
        }

        // Phase 5: Complete (95-100%)
        updateProgress(95, 'complete');
        await new Promise(resolve => setTimeout(resolve, 300));
        
        for (let i = 96; i <= 100 && isMounted && isLoadingRef.current; i++) {
          updateProgress(i, 'complete');
          await new Promise(resolve => setTimeout(resolve, 150));
        }

        // Final completion
        if (isMounted && isLoadingRef.current) {
          updateProgress(100, 'complete');
          await new Promise(resolve => setTimeout(resolve, 800));
          
          if (isMounted && isLoadingRef.current) {
            isLoadingRef.current = false;
            setIsLoading(false);
          }
        }

      } catch (error) {
        console.log('Loading completed with minor issues');
        if (isMounted && isLoadingRef.current) {
          updateProgress(100, 'complete');
          setComponentsLoaded(true);
          setTimeout(() => {
            if (isMounted && isLoadingRef.current) {
              isLoadingRef.current = false;
              setIsLoading(false);
            }
          }, 500);
        }
      }
    };

    // Start loading
    simulateRealisticLoading();

    // Failsafe timeout
    const failsafeTimeout = setTimeout(() => {
      if (isMounted && isLoadingRef.current) {
        console.log('Loading failsafe triggered');
        updateProgress(100, 'complete');
        setComponentsLoaded(true);
        setTimeout(() => {
          if (isMounted && isLoadingRef.current) {
            isLoadingRef.current = false;
            setIsLoading(false);
          }
        }, 500);
      }
    }, 12000);

    return () => {
      isMounted = false;
      isLoadingRef.current = false;
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      clearTimeout(failsafeTimeout);
    };
  }, []); // Empty dependency array - only run once

  // Enhanced smooth scrolling
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
      
      * {
        scrollbar-width: thin;
        scrollbar-color: #06b6d4 #1e293b;
      }
      
      ::-webkit-scrollbar {
        width: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: #1e293b;
      }
      
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #06b6d4, #10b981);
        border-radius: 4px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(to bottom, #0891b2, #059669);
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  // Optimized scroll tracking with throttling
  const [scrollY, setScrollY] = useState(0);
  const [backgroundPhase, setBackgroundPhase] = useState('ubuntu');

  useEffect(() => {
    let ticking = false;

    const updateScrollY = () => {
      setScrollY(window.scrollY);
      
      // Update background phase based on scroll position
      const windowHeight = window.innerHeight;
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - windowHeight);
      
      if (scrollPercent < 0.2) {
        setBackgroundPhase('ubuntu');
      } else if (scrollPercent < 0.8) {
        setBackgroundPhase('transition');
      } else {
        setBackgroundPhase('dark');
      }
      
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollY);
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestTick, { passive: true });
    return () => window.removeEventListener('scroll', requestTick);
  }, []);

  // Enhanced loading phases with more realistic messages
  const loadingPhases = useMemo(() => ({
    initializing: [
      { text: "Initializing terminal interface...", threshold: 0 },
      { text: "Loading system modules...", threshold: 8 },
      { text: "Establishing secure connections...", threshold: 15 }
    ],
    components: [
      { text: "Loading React components...", threshold: 20 },
      { text: "Parsing JSX templates...", threshold: 30 },
      { text: "Optimizing component tree...", threshold: 45 }
    ],
    resources: [
      { text: "Fetching portfolio assets...", threshold: 50 },
      { text: "Preloading images and media...", threshold: 65 },
      { text: "Caching static resources...", threshold: 75 }
    ],
    finalizing: [
      { text: "Compiling animations...", threshold: 80 },
      { text: "Initializing user interface...", threshold: 87 },
      { text: "Applying terminal theme...", threshold: 92 }
    ],
    complete: [
      { text: "System ready for deployment...", threshold: 97 },
      { text: "Portfolio loaded successfully!", threshold: 100 }
    ]
  }), []);

  // --- HACKING EFFECT: RANDOM POPPING WORDS & ENHANCED BACKGROUND ---
  const hackingSnippets = useMemo(() => [
    'npm install --force', 'git commit -m "hack"', 'sudo rm -rf /*', 'python exploit.py',
    'gcc -o hack hack.c', 'docker run --privileged', 'ssh root@target', 'nmap -sS target',
    'curl -X POST hack', 'node server.js', 'python3 neural.py', 'make install',
    'pip install tensorflow', 'yarn build --prod', 'ng serve --port 80', 'react-scripts start',
    'webpack --mode dev', 'babel src --out-dir', 'jest --coverage', 'eslint --fix src/',
    'tsc --watch', 'npm run deploy', 'git push origin', 'chmod +x script.sh',
    'systemctl start app', 'tail -f /var/log', 'ps aux | grep node', 'kill -9 $(pidof)',
    'cd /home/hacker', 'ls -la ~/.ssh/', 'cat /etc/passwd', 'whoami && id',
    'uname -a', 'netstat -tulpn', 'iptables -L', 'mount | grep ext4'
  ], []);

  // --- Enhanced LoadingScreen with hacking background and random popping words ---
  const LoadingScreen = useMemo(() => {
    const LoadingComponent = () => {
      const currentPhaseMessages = loadingPhases[currentLoadingPhase] || [];

      // Helper for random hacking word
      const getRandomSnippet = () =>
        hackingSnippets[Math.floor(Math.random() * hackingSnippets.length)];

      return (
        <motion.div 
          className="fixed inset-0 z-50 bg-gradient-to-br from-black via-slate-900 to-black flex items-center justify-center font-mono overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* --- HACKING BACKGROUND EFFECTS --- */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Matrix rain effect */}
            {[...Array(40)].map((_, i) => (
              <motion.div
                key={`matrix-${i}`}
                className="absolute text-green-400/30 font-mono text-xs select-none"
                style={{
                  left: `${(i * 2.5) % 100}%`,
                  fontSize: `${10 + Math.random() * 6}px`,
                  letterSpacing: '0.1em'
                }}
                animate={{
                  y: [-60, window.innerHeight + 60],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 2.5 + Math.random() * 2.5,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "linear"
                }}
              >
                {Math.random() > 0.5
                  ? String.fromCharCode(65 + Math.floor(Math.random() * 26))
                  : Math.floor(Math.random() * 10)}
              </motion.div>
            ))}

            {/* Matrix grid with subtle glitch */}
            <motion.div 
              className="absolute inset-0 opacity-[0.09]"
              animate={{
                opacity: [0.07, 0.13, 0.07],
                scale: [1, 1.01, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ 
                backgroundImage: `linear-gradient(to right, rgba(0,255,65,0.25) 1px, transparent 1px),
                                 linear-gradient(to bottom, rgba(0,255,65,0.25) 1px, transparent 1px)`, 
                backgroundSize: '22px 22px'
              }}
            />

            {/* Randomly popping hacking commands */}
            {[...Array(18)].map((_, i) => (
              <motion.div
                key={`hack-${i}`}
                className="absolute text-cyan-400/70 font-mono text-xs whitespace-nowrap select-none"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  zIndex: 5,
                  fontWeight: 500,
                  textShadow: '0 0 8px #06b6d4'
                }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  scale: [0.7, 1.2, 1.2, 0.7],
                  y: [0, -40 - Math.random() * 30],
                  x: [0, (Math.random() - 0.5) * 80],
                  rotateZ: [0, (Math.random() - 0.5) * 10],
                }}
                transition={{
                  duration: 2.2 + Math.random() * 1.8,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: "easeOut"
                }}
              >
                <span className="text-green-400">$ </span>
                {getRandomSnippet()}
              </motion.div>
            ))}

            {/* Binary data streams */}
            {[...Array(7)].map((_, i) => (
              <motion.div
                key={`binary-${i}`}
                className="absolute text-green-300/20 font-mono text-xs leading-none select-none"
                style={{
                  left: `${10 + i * 13}%`,
                  writingMode: 'vertical-rl',
                }}
                animate={{
                  y: [-100, window.innerHeight + 100],
                  opacity: [0, 0.6, 0.6, 0],
                }}
                transition={{
                  duration: 7 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "linear"
                }}
              >
                {Array.from({ length: 28 }, () => Math.random() > 0.5 ? '1' : '0').join('')}
              </motion.div>
            ))}

            {/* Pulsing network nodes */}
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={`node-${i}`}
                className="absolute w-2 h-2 rounded-full border border-cyan-400/50"
                style={{
                  top: `${20 + (i * 8)}%`,
                  left: `${15 + (i * 7)}%`,
                  background: 'rgba(6, 182, 212, 0.2)',
                  boxShadow: '0 0 10px rgba(6, 182, 212, 0.3)',
                }}
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.3, 1, 0.3],
                  boxShadow: [
                    '0 0 5px rgba(6, 182, 212, 0.3)',
                    '0 0 20px rgba(6, 182, 212, 0.8)',
                    '0 0 5px rgba(6, 182, 212, 0.3)'
                  ]
                }}
                transition={{
                  duration: 2.5 + Math.random() * 1.5,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="text-center space-y-8 relative z-10 max-w-lg w-full mx-auto px-4">
            {/* Terminal window */}
            <div className="p-8 rounded-xl border-2 border-cyan-400/30 bg-slate-800/90 backdrop-blur-xl shadow-2xl">
              {/* Terminal header */}
              <div className="flex items-center justify-between border-b border-cyan-400/20 pb-4 mb-6">
                <div className="flex space-x-2">
                  {[
                    { color: "bg-red-400", delay: 0 },
                    { color: "bg-yellow-400", delay: 0.1 },
                    { color: "bg-green-400", delay: 0.2 }
                  ].map((dot, index) => (
                    <motion.div 
                      key={`dot-${index}`}
                      className={`w-3 h-3 rounded-full ${dot.color}`}
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: dot.delay
                      }}
                    />
                  ))}
                </div>
                <div className="text-xs text-slate-400">
                  initialize_portfolio.sh
                </div>
              </div>

              {/* Terminal content */}
              <div className="space-y-6">
                <h1 className="text-2xl font-bold text-cyan-400 mb-4">
                  <span className="text-orange-400">$ </span>
                  ./boot_system --portfolio
                  <motion.span 
                    className="text-cyan-400"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    _
                  </motion.span>
                </h1>
                
                {/* Progress section */}
                <div className="space-y-4">
                  <div className="flex justify-between text-sm text-slate-300">
                    <span>Initializing system components...</span>
                    <span className="text-emerald-400 font-mono">
                      {loadingProgress}%
                    </span>
                  </div>
                  
                  {/* Fixed progress bar */}
                  <div className="w-full bg-slate-700/50 rounded-full h-3 border border-slate-600/50 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-500 via-emerald-500 to-purple-500 rounded-full relative overflow-hidden"
                      style={{ width: `${loadingProgress}%` }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/30 rounded-full"
                        animate={{ x: [-100, 300] }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          repeatType: "loop",
                          ease: "linear" 
                        }}
                        style={{ width: '50px' }}
                      />
                    </motion.div>
                  </div>
                  
                  {/* ASCII progress */}
                  <div className="text-xs text-slate-500 font-mono">
                    <span>
                      [{'█'.repeat(Math.floor(loadingProgress / 5))}{'░'.repeat(20 - Math.floor(loadingProgress / 5))}] 
                      <span className="text-cyan-400 ml-2">{loadingProgress}%</span>
                    </span>
                  </div>
                </div>

                {/* Loading messages based on current phase */}
                <div className="space-y-2 text-sm text-slate-400">
                  {currentPhaseMessages.map((message, index) => {
                    const isActive = loadingProgress >= message.threshold;
                    return (
                      <motion.p
                        key={`${currentLoadingPhase}-${index}`}
                        animate={{ 
                          opacity: isActive ? [0.5, 1, 0.5] : 0.3,
                          color: isActive ? '#10b981' : '#64748b'
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: isActive ? Infinity : 0
                        }}
                      >
                        <span className={isActive ? 'text-green-400' : 'text-slate-600'}>
                          {isActive ? '✓' : '○'}
                        </span> {message.text}
                      </motion.p>
                    );
                  })}
                </div>

                {/* Status indicator */}
                <div className="flex items-center gap-3 text-sm text-slate-300 bg-slate-800/50 p-3 rounded border border-slate-600/30">
                  <motion.span 
                    className="w-3 h-3 bg-emerald-400 rounded-full"
                    animate={{ 
                      scale: [1, 1.3, 1], 
                      opacity: [0.7, 1, 0.7],
                      boxShadow: [
                        '0 0 0px rgba(16, 185, 129, 0.5)', 
                        '0 0 15px rgba(16, 185, 129, 0.8)', 
                        '0 0 0px rgba(16, 185, 129, 0.5)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span>System status: <span className="text-emerald-400">
                    {loadingProgress < 100 ? 'Loading...' : 'Ready'}
                  </span></span>
                </div>

                {/* Completion message */}
                <AnimatePresence>
                  {loadingProgress === 100 && (
                    <motion.div
                      className="text-center p-4 bg-emerald-500/20 rounded border border-emerald-400/50"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <p className="text-emerald-400 font-mono">
                        <span className="text-green-400">✓</span> System initialization complete
                      </p>
                      <p className="text-slate-400 text-sm mt-1">
                        Launching portfolio interface...
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      );
    };

    return LoadingComponent;
  }, [loadingProgress, currentLoadingPhase, loadingPhases, hackingSnippets]);

  // Enhanced background component
  const BackgroundEffects = () => (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute inset-0"
        animate={{
          background: backgroundPhase === 'ubuntu' 
            ? 'linear-gradient(135deg, #2c001e 0%, #300a24 25%, #5e2750 50%, #300a24 75%, #2c001e 100%)'
            : backgroundPhase === 'transition'
            ? 'linear-gradient(135deg, #1e293b 0%, #334155 25%, #475569 50%, #334155 75%, #1e293b 100%)'
            : 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #1e293b 75%, #0f172a 100%)'
        }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full" 
          style={{ 
            backgroundImage: `linear-gradient(to right, rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`, 
            backgroundSize: '40px 40px',
            backgroundPosition: `${scrollY * 0.1}px ${scrollY * 0.05}px`
          }}
        />
      </div>
      
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#10b981' : '#8b5cf6',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: `0 0 20px ${i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#10b981' : '#8b5cf6'}`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"
        animate={{ x: [-200, typeof window !== 'undefined' ? window.innerWidth + 200 : 1200] }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          repeatType: "loop",
          ease: "linear" 
        }}
      />
    </div>
  );

  // Enhanced component loading fallback
  const ComponentFallback = ({ name }) => (
    <div className="flex items-center justify-center min-h-[200px] text-cyan-400 font-mono">
      <motion.div
        className="flex items-center gap-3"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-4 h-4 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin"></div>
        <span>Loading {name}...</span>
      </motion.div>
    </div>
  );

  // Import the blocked icon from iconUrls.js

  return (
    <div className="App relative">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <AnimatePresence initial={false} mode="wait">
        {!isLoading && componentsLoaded && (
          <motion.div
            key="main-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
          >
            <BackgroundEffects />
            <Suspense fallback={<ComponentFallback name="Navigation" />}>
              <Navbar />
            </Suspense>
            <Suspense fallback={<ComponentFallback name="Home" />}>
              <motion.section
                key="home"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                <Home />
              </motion.section>
            </Suspense>
            <Suspense fallback={<ComponentFallback name="About" />}>
              <motion.section
                key="about"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.35, ease: "easeInOut", delay: 0.05 }}
              >
                <About />
              </motion.section>
            </Suspense>
            <Suspense fallback={<ComponentFallback name="Skills" />}>
              <motion.section
                key="skills"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.35, ease: "easeInOut", delay: 0.1 }}
              >
                <Skills />
              </motion.section>
            </Suspense>
            <Suspense fallback={<ComponentFallback name="Projects" />}>
              <motion.section
                key="projects"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.35, ease: "easeInOut", delay: 0.15 }}
              >
                <Projects />
              </motion.section>
            </Suspense>
            <Suspense fallback={<ComponentFallback name="Achievements" />}>
              <motion.section
                key="achievements"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.35, ease: "easeInOut", delay: 0.2 }}
              >
                <Achievements />
              </motion.section>
            </Suspense>
            <Suspense fallback={<ComponentFallback name="Contact" />}>
              <motion.section
                key="contact"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.35, ease: "easeInOut", delay: 0.25 }}
              >
                <Contact />
              </motion.section>
            </Suspense>
            <Suspense fallback={<ComponentFallback name="Footer" />}>
              <motion.footer
                key="footer"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.35, ease: "easeInOut", delay: 0.3 }}
              >
                <Footer />
              </motion.footer>
            </Suspense>
            <Suspense fallback={null}>
              <ScrollToTop />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced right-click message */}
      <AnimatePresence>
        {showRightClickMessage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[9999] font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-slate-800 border-2 border-cyan-400 rounded-xl p-8 max-w-md mx-4"
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <img
                    src={techIcons.blocked}
                    alt="Blocked"
                    className="w-16 h-16"
                    style={{ filter: 'drop-shadow(0 0 8px #f87171)' }}
                  />
                </div>
                <h3 className="text-xl font-bold text-cyan-400">
                  <span className="text-orange-400">$ </span>
                  access --denied
                </h3>
                <p className="text-slate-300">
                  Blocked by the one and only <span className="text-cyan-400 font-bold">MedGm</span>.<br />
                  Nice try, but you'll have to find another way! <span className="text-emerald-400"></span>
                </p>
                <p className="text-slate-400 text-sm">
                  <span className="text-cyan-400"># </span>
                  Click anywhere to continue exploring
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
