import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import PropTypes from 'prop-types';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    submitting: false,
    submitted: false,
    error: null
  });
  const formRef = useRef(null);

  const contactInfo = [
    {
      title: "Email",
      value: "elgorrim.mohamed@etu.uae.ac.ma",
      icon: "📧",
      command: "mail -s 'Subject' user@domain.com",
      link: "mailto:elgorrim.mohamed@etu.uae.ac.ma"
    },
    {
      title: "Phone",
      value: "+212 644246223",
      icon: "📱",
      command: "call +212644246223",
      link: "tel:+212644246223"
    },
    {
      title: "Location",
      value: "Tétouan, Morocco",
      icon: "📍", 
      command: "cd /home/morocco/tetouan",
      link: "https://goo.gl/maps/..."
    },
    {
      title: "GitHub",
      value: "github.com/MedGm",
      icon: "💻",
      command: "git clone github.com/MedGm",
      link: "https://github.com/MedGm"
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, submitting: true }));
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFormState(prev => ({ 
        ...prev, 
        submitted: true,
        submitting: false,
        name: '',
        email: '',
        message: ''
      }));
      
      setTimeout(() => {
        setFormState(prev => ({ ...prev, submitted: false }));
      }, 5000);
    } catch (error) {
      setFormState(prev => ({ 
        ...prev, 
        error: 'Connection failed. Please try again.',
        submitting: false
      }));
      
      setTimeout(() => {
        setFormState(prev => ({ ...prev, error: null }));
      }, 5000);
    }
  };

  const TerminalInput = ({ label, type, value, onChange, disabled, required, textArea = false }) => {
    const [isFocused, setIsFocused] = useState(false);
    
    return (
      <div className="relative">
        <motion.label 
          className={`absolute left-4 transition-all duration-200 pointer-events-none font-mono ${
            isFocused || value 
              ? 'text-xs text-terminal-500 top-2' 
              : 'text-base text-console-500 top-1/2 -translate-y-1/2'
          }`}
        >
          <span className="text-ubuntu-500">$ </span>
          {label} {required && <span className="text-hacker-500">*</span>}
        </motion.label>
        
        {textArea ? (
          <textarea
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`w-full bg-dark/50 rounded-lg border font-mono ${
              isFocused ? 'border-terminal-500 shadow-terminal' : 'border-console-500'
            } text-base outline-none text-matrix-500 py-5 px-4 transition-all min-h-[150px] pt-7 backdrop-blur-sm`}
            disabled={disabled}
            required={required}
            style={{ resize: 'none' }}
            placeholder={isFocused ? '# Type your message here...' : ''}
          />
        ) : (
          <input
            type={type}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`w-full bg-dark/50 rounded-lg border font-mono ${
              isFocused ? 'border-terminal-500 shadow-terminal' : 'border-console-500'
            } text-base outline-none text-matrix-500 py-5 px-4 transition-all pt-7 backdrop-blur-sm`}
            disabled={disabled}
            required={required}
          />
        )}
      </div>
    );
  };

  TerminalInput.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    textArea: PropTypes.bool
  };

  TerminalInput.defaultProps = {
    type: 'text',
    disabled: false,
    required: false,
    textArea: false
  };

  return (
    <section id="contact" className="min-h-screen py-28 relative overflow-hidden select-none bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Footer-style background effects */}
      <div className="absolute inset-0 -z-10">
        {/* Footer-style matrix grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" 
            style={{ 
              backgroundImage: `linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                               linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`, 
              backgroundSize: '30px 30px'
            }}
          />
        </div>
        
        {/* Footer-style floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
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
            style={{
              top: `${20 + i * 10}%`,
              left: `${10 + i * 10}%`,
              background: i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#10b981' : '#8b5cf6',
              boxShadow: `0 0 15px ${i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#10b981' : '#8b5cf6'}`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 relative inline-block font-mono"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-orange-400">$ </span>
            <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">./contact --init</span>
            <span className="text-cyan-400 animate-pulse">_</span>
            
            <motion.div 
              className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-cyan-500 via-emerald-500 to-purple-500"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </motion.h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-mono">
            <span className="text-cyan-400"># </span>
            Let&apos;s connect and build something amazing together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Footer-style contact form */}
          <motion.div
            className="p-8 rounded-xl bg-slate-800/30 border border-slate-600/50 hover:border-cyan-400/50 transition-all backdrop-blur-sm"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 font-mono">
              <span className="text-orange-400">$ </span>
              send_message.sh
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-slate-300 font-mono text-sm mb-2">
                    <span className="text-emerald-400">&gt; </span>
                    --name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={e => setFormState(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border-2 border-slate-600/50 text-slate-300 font-mono focus:border-cyan-400 focus:outline-none transition-colors placeholder-slate-500"
                    placeholder="Enter your name..."
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-slate-300 font-mono text-sm mb-2">
                    <span className="text-emerald-400">&gt; </span>
                    --email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={e => setFormState(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border-2 border-slate-600/50 text-slate-300 font-mono focus:border-cyan-400 focus:outline-none transition-colors placeholder-slate-500"
                    placeholder="your.email@domain.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-slate-300 font-mono text-sm mb-2">
                    <span className="text-emerald-400">&gt; </span>
                    --subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formState.subject}
                    onChange={e => setFormState(prev => ({ ...prev, subject: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border-2 border-slate-600/50 text-slate-300 font-mono focus:border-cyan-400 focus:outline-none transition-colors placeholder-slate-500"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-slate-300 font-mono text-sm mb-2">
                    <span className="text-emerald-400">&gt; </span>
                    --message
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={e => setFormState(prev => ({ ...prev, message: e.target.value }))}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border-2 border-slate-600/50 text-slate-300 font-mono focus:border-cyan-400 focus:outline-none transition-colors placeholder-slate-500 resize-vertical"
                    placeholder="Tell me about your project or idea..."
                    required
                  />
                </div>
              </div>
              
              <motion.button
                type="submit"
                disabled={formState.submitting}
                className="w-full py-4 px-6 rounded-lg font-mono font-semibold transition-all duration-300 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-white border-2 border-transparent hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {formState.submitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <motion.div
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Sending...
                  </span>
                ) : (
                  <span>
                    <span className="text-white">$ </span>
                    ./send --message
                  </span>
                )}
              </motion.button>
            </form>
            
            {/* Enhanced status messages */}
            <AnimatePresence>
              {formState.error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="flex items-center gap-2 mt-4 p-3 bg-hacker-500/20 text-hacker-500 rounded-lg border border-hacker-500/50 font-mono"
                >
                  <span className="status-indicator status-error"></span>
                  <span>ERROR: {formState.error}</span>
                </motion.div>
              )}

              {formState.submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="flex items-center gap-2 mt-4 p-3 bg-terminal-500/20 text-terminal-500 rounded-lg border border-terminal-500/50 font-mono"
                >
                  <span className="status-indicator status-online"></span>
                  <span>SUCCESS: Message transmitted successfully!</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Footer-style contact info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Footer-style contact methods */}
            <div className="p-8 rounded-xl bg-slate-800/30 border border-slate-600/50 hover:border-emerald-400/50 transition-all backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-emerald-400 mb-6 font-mono">
                <span className="text-orange-400">$ </span>
                cat ./contact_info.json
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? "_blank" : undefined}
                    rel={info.link.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 group p-4 rounded-lg border-2 border-slate-600/30 hover:border-cyan-400/50 transition-all bg-slate-800/30 hover:bg-slate-800/50"
                    whileHover={{ scale: 1.02, x: 5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border border-cyan-400/30 group-hover:border-cyan-400/60 transition-colors">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-mono text-cyan-400 text-sm">{info.command}</div>
                      <div className="text-slate-300 group-hover:text-cyan-300 transition-colors">
                        {info.value}
                      </div>
                    </div>
                    <motion.svg 
                      className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-colors" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 2,
                        repeatDelay: 2
                      }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </motion.svg>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Footer-style availability */}
            <div className="p-8 rounded-xl bg-slate-800/30 border border-slate-600/50 hover:border-purple-400/50 transition-all backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-purple-400 mb-6 font-mono">
                <span className="text-orange-400">$ </span>
                ./status --availability
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-300 font-mono">
                  <motion.div
                    className="w-3 h-3 bg-emerald-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-emerald-400">Status:</span>
                  <span>Available for freelance projects</span>
                </div>
                
                <div className="text-slate-400 font-mono text-sm space-y-2">
                  <p><span className="text-cyan-400"># </span>Response time: Usually within 24 hours</p>
                  <p><span className="text-cyan-400"># </span>Best contact: Email or LinkedIn</p>
                  <p><span className="text-cyan-400"># </span>Time zone: GMT+1 (Morocco)</p>
                </div>
                
                <div className="pt-4 border-t border-slate-600/30">
                  <p className="text-slate-400 font-mono text-sm">
                    <span className="text-orange-400">$ </span>
                    echo "Looking forward to collaborating with you!"
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
