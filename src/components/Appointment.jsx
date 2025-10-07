import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Appointment = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', duration: 1.5, bounce: 0.4 },
    },
  };

  return (
    <section className="w-full relative bg-gradient-to-b from-[#1a237e] via-[#0a0a2a] to-black py-24 px-4 flex items-center justify-center overflow-hidden">
      
      {/* Animated Decorative Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-orange-500/20 rounded-full filter blur-2xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-500/20 rounded-lg filter blur-2xl"
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />

      {/* Main CTA Card */}
      <motion.div
        ref={ref}
        className="relative z-10 max-w-3xl mx-auto text-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-8 md:p-12"
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-4">
          Ready to Elevate Your Game?
        </h2>
        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl mx-auto">
          Spaces are limited. Book your spot today to train with the best and start your journey towards basketball greatness.
        </p>
        <motion.button
          className="bg-orange-500 text-white font-bold rounded-full px-10 py-4 text-xl shadow-lg hover:bg-orange-600 transition-colors duration-300"
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(251, 146, 60, 0.6)' }}
          whileTap={{ scale: 0.95 }}
          animate={{ scale: [1, 1.02, 1] }} // Subtle pulse effect
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        >
          Book Your Spot Now
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Appointment;