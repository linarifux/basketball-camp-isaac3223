import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.footer
      ref={ref}
      className="w-full bg-gradient-to-t from-black via-[#0a0a2a] to-[#1a237e] text-slate-300 pt-20 pb-10 px-4"
      variants={footerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Column 1: Brand & Logo */}
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
            <a href="#home" className="flex items-center gap-3 mb-4">
              <svg width="32" height="32" viewBox="0 0 32 32">
                <circle cx="16" cy="16" r="15" fill="#ff8000" stroke="#222" strokeWidth="2"/>
                <path d="M16 1 v30 M1 16 h30 M5 5 l22 22 M27 5 l-22 22" stroke="#222" strokeWidth="1" fill="none"/>
              </svg>
              <span className="text-2xl font-bold text-white">Isaac Hoops Academy</span>
            </a>
            <p className="text-slate-400 max-w-xs">
              Forging the next generation of basketball legends through elite coaching and dedication.
            </p>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <a href="#about" className="text-slate-400 hover:text-orange-400 transition mb-2">About Us</a>
            <a href="#schedule" className="text-slate-400 hover:text-orange-400 transition mb-2">Schedule</a>
            <a href="#coaches" className="text-slate-400 hover:text-orange-400 transition mb-2">Coaches</a>
            <a href="#gallery" className="text-slate-400 hover:text-orange-400 transition">Gallery</a>
          </motion.div>

          {/* Column 3: Follow Us */}
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <motion.a href="https://twitter.com" target="_blank" rel="noopener noreferrer" whileHover={{ y: -4, scale: 1.1 }} className="text-slate-400 hover:text-white">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"></path></svg>
              </motion.a>
              <motion.a href="https://instagram.com" target="_blank" rel="noopener noreferrer" whileHover={{ y: -4, scale: 1.1 }} className="text-slate-400 hover:text-white">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664 4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zM12 0c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"></path></svg>
              </motion.a>
              <motion.a href="https://facebook.com" target="_blank" rel="noopener noreferrer" whileHover={{ y: -4, scale: 1.1 }} className="text-slate-400 hover:text-white">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
              </motion.a>
            </div>
          </motion.div>
        </div>

        <hr className="my-10 border-slate-700" />

        <div className="text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} Isaac Hoops Academy. All Rights Reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;