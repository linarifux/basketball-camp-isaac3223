import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

// --- Icon Components for form fields ---
const UserIcon = () => (
  <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);
const EmailIcon = () => (
  <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', duration: 1.5, bounce: 0.3 } },
  };

  const formVariants = {
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' } },
  };

  return (
    <section id='contact' className="w-full bg-gradient-to-b from-black via-[#0a0a2a] to-[#1a237e] py-24 px-4 flex items-center justify-center">
      <motion.div
        ref={ref}
        className="relative z-10 max-w-2xl w-full mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-8 md:p-12"
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-4">
            Get In Touch
          </h2>
          <motion.p className="text-lg text-slate-300" variants={itemVariants}>
            Have questions? Fill out the form below and our team will reach out to you!
          </motion.p>
        </div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-10"
            >
              <h3 className="text-2xl font-bold text-green-400">Thank you!</h3>
              <p className="text-slate-300 mt-2">Your message has been sent. We'll get back to you soon.</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
              variants={formVariants}
              className="flex flex-col gap-6"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              {/* Name Input */}
              <motion.div className="relative" variants={itemVariants}>
                <span className="absolute inset-y-0 left-0 flex items-center pl-4"><UserIcon /></span>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full pl-12 pr-5 py-3 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </motion.div>
              {/* Email Input */}
              <motion.div className="relative" variants={itemVariants}>
                <span className="absolute inset-y-0 left-0 flex items-center pl-4"><EmailIcon /></span>
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  className="w-full pl-12 pr-5 py-3 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </motion.div>
              {/* Message Textarea */}
              <motion.div variants={itemVariants}>
                <textarea
                  required
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-5 py-3 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </motion.div>
              {/* Submit Button */}
              <motion.button
                type="submit"
                className="bg-orange-500 text-white font-bold rounded-full px-8 py-4 text-lg shadow-lg hover:bg-orange-600 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                Send Message
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default ContactForm;