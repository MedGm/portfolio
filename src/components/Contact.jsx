import { motion } from 'framer-motion';
import { useState } from 'react';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    submitting: false,
    submitted: false,
    error: null
  });

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
      // Here you would add your form submission logic
      // For now, we'll simulate a submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFormState(prev => ({ 
        ...prev, 
        submitted: true,
        submitting: false
      }));
    } catch (error) {
      setFormState(prev => ({ 
        ...prev, 
        error: 'Failed to send message. Please try again.',
        submitting: false
      }));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <motion.h2 
              className="text-5xl font-bold text-gradient-animated"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Let's Connect
            </motion.h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Have a question or want to work together?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="glass-morphism p-8 rounded-xl space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="space-y-4">
                <div>
                  <label className="text-gray-300 mb-2 block">Name</label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={e => setFormState(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-slate-800/50 rounded-lg border border-gray-700 focus:border-blue-500 text-base outline-none text-gray-300 py-2 px-4 transition-colors"
                    disabled={formState.submitting}
                    required
                  />
                </div>
                <div>
                  <label className="text-gray-300 mb-2 block">Email</label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={e => setFormState(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full bg-slate-800/50 rounded-lg border border-gray-700 focus:border-blue-500 text-base outline-none text-gray-300 py-2 px-4 transition-colors"
                    disabled={formState.submitting}
                    required
                  />
                </div>
                <div>
                  <label className="text-gray-300 mb-2 block">Message</label>
                  <textarea
                    value={formState.message}
                    onChange={e => setFormState(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full bg-slate-800/50 rounded-lg border border-gray-700 focus:border-blue-500 text-base outline-none text-gray-300 py-2 px-4 transition-colors min-h-[150px]"
                    disabled={formState.submitting}
                    required
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                className="w-full neon-button"
                disabled={formState.submitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {formState.submitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {formState.error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 text-sm text-center"
                >
                  {formState.error}
                </motion.p>
              )}

              {formState.submitted && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-400 text-sm text-center"
                >
                  Message sent successfully!
                </motion.p>
              )}
            </motion.form>

            {/* Contact Information */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass-morphism p-6 rounded-xl"
              >
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:elgorrim.mohamed@etu.uae.ac.ma" className="text-gray-300 hover:text-blue-400 transition-colors">
                      elgorrim.mohamed@etu.uae.ac.ma
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-300">
                      Av Rif NR 88 Khandak Zerbouh Tétouan, Morocco
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-morphism p-6 rounded-xl"
              >
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Social Links</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/MedGm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    LinkedIn
                  </a>
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
