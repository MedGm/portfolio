import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { contactInfo, socialLinks } from '../data/portfolioData';
import IconProvider from './utils/IconProvider';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, submitting: true }));
    
    try {
      // Simulate form submission
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
            } text-base outline-none text-gray-300 py-5 px-4 transition-colors min-h-[150px] pt-7 resize-none`}
            disabled={disabled}
            required={required}
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

  Input.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    textArea: PropTypes.bool
  };

  Input.defaultProps = {
    type: 'text',
    disabled: false,
    required: false,
    textArea: false
  };

  return (
    <div id="contact" className="min-h-screen flex items-center justify-center px-6 py-20 select-none relative">
      {/* Subtle gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-purple-500/0"></div>
      
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
                Let&#39;s Connect
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
              Have a question or want to work together? I&#39;d love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass-morphism-enhanced p-8 rounded-2xl space-y-6 relative overflow-hidden shadow-lg transition-all duration-300"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -4,
                boxShadow: "0 8px 32px 0 rgba(59,130,246,0.13), 0 1.5px 4px 0 rgba(0,0,0,0.10)"
              }}
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

              {/* Form Status Messages */}
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

            {/* Contact Information */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-morphism-enhanced p-8 rounded-2xl relative overflow-hidden shadow-lg transition-all duration-300"
                whileHover={{
                  y: -4,
                  boxShadow: "0 8px 32px 0 rgba(59,130,246,0.13), 0 1.5px 4px 0 rgba(0,0,0,0.10)"
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                
                <h3 className="text-xl font-semibold text-blue-400 mb-6">Contact Information</h3>
                <div className="space-y-5">
                  {contactInfo.filter(info => info.primary).map((info, index) => (
                    <motion.a
                      key={info.id}
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
                        <IconProvider icon={info.icon} className="w-5 h-5" />
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
                className="glass-morphism-enhanced p-8 rounded-2xl relative overflow-hidden shadow-lg transition-all duration-300"
                whileHover={{
                  y: -4,
                  boxShadow: "0 8px 32px 0 rgba(59,130,246,0.13), 0 1.5px 4px 0 rgba(0,0,0,0.10)"
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                
                <h3 className="text-xl font-semibold text-purple-400 mb-6">Connect With Me</h3>
                <div className="flex gap-5">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 group"
                      whileHover={{ scale: 1.1 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-slate-800 text-gray-300 group-hover:text-blue-400 group-hover:bg-slate-700 transition-all">
                        <IconProvider icon={social.icon} className="w-6 h-6" />
                      </div>
                      <span className="text-sm text-gray-400 group-hover:text-blue-400 transition-colors">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Professional Status */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="glass-morphism-enhanced p-8 rounded-2xl relative overflow-hidden shadow-lg transition-all duration-300"
                whileHover={{
                  y: -4,
                  boxShadow: "0 8px 32px 0 rgba(59,130,246,0.13), 0 1.5px 4px 0 rgba(0,0,0,0.10)"
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-400"></div>
                
                <h3 className="text-xl font-semibold text-green-400 mb-4">Current Status</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-300">Available for Internships</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">Open to Collaborations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">Learning New Technologies</span>
                  </div>
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
