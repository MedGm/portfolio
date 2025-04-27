import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';

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
      link: "mailto:elgorrim.mohamed@etu.uae.ac.ma"
    },
    {
      title: "Phone",
      value: "+212 644246223",
      icon: "📱",
      link: "tel:+212644246223"
    },
    {
      title: "Location",
      value: "Av Rif NR 88 Khandak Zerbouh Tétouan, Morocco",
      icon: "📍",
      link: "https://goo.gl/maps/..."
    },
    {
      title: "LinkedIn",
      value: "Mohamed El Gorrim",
      icon: "💼",
      link: "https://linkedin.com/in/..."
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
        error: 'Failed to send message. Please try again.',
        submitting: false
      }));
      
      setTimeout(() => {
        setFormState(prev => ({ ...prev, error: null }));
      }, 5000);
    }
  };

  const Input = ({ label, type, value, onChange, disabled, required, textArea = false }) => {
    const [isFocused, setIsFocused] = useState(false);
    
    return (
      <div className="relative">
        <motion.label 
          className={`absolute left-4 transition-all duration-200 pointer-events-none ${
            isFocused || value 
              ? 'text-xs text-blue-400 top-2' 
              : 'text-base text-gray-400 top-1/2 -translate-y-1/2'
          }`}
        >
          {label} {required && <span className="text-blue-400">*</span>}
        </motion.label>
        
        {textArea ? (
          <textarea
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`w-full bg-slate-800/50 rounded-lg border ${
              isFocused ? 'border-blue-500' : 'border-gray-700'
            } text-base outline-none text-gray-300 py-5 px-4 transition-colors min-h-[150px] pt-7`}
            disabled={disabled}
            required={required}
            style={{ resize: 'none' }}
          />
        ) : (
          <input
            type={type}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`w-full bg-slate-800/50 rounded-lg border ${
              isFocused ? 'border-blue-500' : 'border-gray-700'
            } text-base outline-none text-gray-300 py-5 px-4 transition-colors pt-7`}
            disabled={disabled}
            required={required}
          />
        )}
      </div>
    );
  };

  return (
    <div id="contact" className="min-h-screen flex items-center justify-center px-6 py-20 select-none">
      <div className="max-w-4xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <motion.h2 
              className="text-5xl font-bold relative inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-gradient-animated">
                Let's Connect
              </span>
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
            </motion.h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Have a question or want to work together?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass-morphism-enhanced p-8 rounded-xl space-y-6 relative overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            
              <div className="space-y-6">
                <Input
                  label="Name"
                  type="text"
                  value={formState.name}
                  onChange={e => setFormState(prev => ({ ...prev, name: e.target.value }))}
                  disabled={formState.submitting}
                  required
                />
                
                <Input
                  label="Email"
                  type="email"
                  value={formState.email}
                  onChange={e => setFormState(prev => ({ ...prev, email: e.target.value }))}
                  disabled={formState.submitting}
                  required
                />
                
                <Input
                  label="Message"
                  value={formState.message}
                  onChange={e => setFormState(prev => ({ ...prev, message: e.target.value }))}
                  disabled={formState.submitting}
                  required
                  textArea
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-3 px-4 rounded-lg font-medium relative overflow-hidden group"
                disabled={formState.submitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity, 
                    repeatType: "mirror"
                  }}
                  style={{ backgroundSize: '200% 200%' }}
                />
                
                {formState.submitting ? (
                  <svg className="w-5 h-5 mx-auto animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <span className="relative z-10 text-white">
                    Send Message
                  </span>
                )}
              </motion.button>

              <AnimatePresence>
                {formState.error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex items-center gap-2 mt-4 p-3 bg-red-900/30 text-red-300 rounded-lg border border-red-900/50"
                  >
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{formState.error}</span>
                  </motion.div>
                )}

                {formState.submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex items-center gap-2 mt-4 p-3 bg-green-900/30 text-green-300 rounded-lg border border-green-900/50"
                  >
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Message sent successfully!</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.form>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-morphism-enhanced p-8 rounded-xl relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                
                <h3 className="text-xl font-semibold text-blue-400 mb-6">Contact Information</h3>
                <div className="space-y-5">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      target={info.link.startsWith('http') ? "_blank" : undefined}
                      rel={info.link.startsWith('http') ? "noopener noreferrer" : undefined}
                      className="flex items-center space-x-4 text-gray-300 hover:text-blue-400 transition-colors group"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30 transition-colors">
                        {info.title === "Email" && (
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        )}
                        {info.title === "Phone" && (
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        )}
                        {info.title === "Location" && (
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        )}
                        {info.title === "LinkedIn" && (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{info.title}</p>
                        <p className="group-hover:text-blue-400 transition-colors">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="glass-morphism-enhanced p-8 rounded-xl relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                
                <h3 className="text-xl font-semibold text-purple-400 mb-6">Connect With Me</h3>
                <div className="flex gap-5">
                  <motion.a
                    href="https://github.com/MedGm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 group"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-slate-800 text-gray-300 group-hover:text-blue-400 group-hover:bg-slate-700 transition-all">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-blue-400 transition-colors">GitHub</span>
                  </motion.a>
                  
                  <motion.a
                    href="https://linkedin.com/in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 group"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-slate-800 text-gray-300 group-hover:text-blue-400 group-hover:bg-slate-700 transition-all">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-blue-400 transition-colors">LinkedIn</span>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
