import { motion } from 'framer-motion';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/MedGm',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      command: 'git clone github.com/MedGm'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      command: 'connect --linkedin'
    },
    {
      name: 'Email',
      url: 'mailto:elgorrim.mohamed@etu.uae.ac.ma',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      command: 'mail --send'
    }
  ];

  return (
    <footer className="relative bg-gradient-to-t from-slate-900 via-slate-800 to-slate-800 border-t border-cyan-400/20 select-none">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" 
            style={{ 
              backgroundImage: `linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                               linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`, 
              backgroundSize: '30px 30px'
            }}
          />
        </div>
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#10b981' : '#8b5cf6',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
        >
          {/* Terminal brand section */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold font-mono text-cyan-400">
              <span className="text-orange-400">$ </span>
              Med.Gm<span className="animate-pulse">_</span>
            </h3>
            <p className="text-slate-400 font-mono text-sm leading-relaxed">
              <span className="text-cyan-400"># </span>
              Software Engineering Student<br/>
              <span className="text-cyan-400"># </span>
              Building the future with code
            </p>
          </motion.div>

          {/* Quick links terminal */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold font-mono text-emerald-400">
              <span className="text-orange-400">$ </span>
              ls ./navigation
            </h4>
            <ul className="space-y-2">
              {['about', 'projects', 'skills', 'achievements', 'contact'].map((item, index) => (
                <motion.li key={item}>
                  <a
                    href={`#${item}`}
                    className="text-slate-400 hover:text-cyan-400 transition-colors font-mono text-sm flex items-center gap-2 group"
                  >
                    <span className="text-cyan-400 group-hover:text-emerald-400">•</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      ./{item}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social links terminal */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold font-mono text-purple-400">
              <span className="text-orange-400">$ </span>
              ./connect --social
            </h4>
            <div className="space-y-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-all group font-mono text-sm"
                  whileHover={{ x: 5, scale: 1.02 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-700/50 border border-slate-600/50 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10 transition-all">
                    {link.icon}
                  </div>
                  <div>
                    <div className="text-cyan-400 text-xs">{link.command}</div>
                    <div className="group-hover:text-emerald-400 transition-colors">{link.name}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Terminal footer bottom */}
        <motion.div
          className="pt-8 border-t border-slate-600/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-500 font-mono text-sm">
              <span className="text-cyan-400">$ </span>
              echo "© {currentYear} Med Gm. All rights reserved."
            </div>
            
            <div className="flex items-center gap-4">
              <motion.div
                className="flex items-center gap-2 text-slate-500 font-mono text-xs"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                <span>System Online</span>
              </motion.div>
              
              <div className="text-slate-500 font-mono text-xs">
                <span className="text-purple-400">Built with</span> ⚡ <span className="text-cyan-400">React</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced scan line effect */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        animate={{ x: [-200, window.innerWidth + 200] }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          repeatType: "loop",
          ease: "linear" 
        }}
      />
    </footer>
  );
}

export default Footer;
