import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Variants for the mobile menu container slide-in effect
  const menuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: 0, transition: { type: 'tween', ease: 'easeInOut', duration: 0.4 } },
    exit: { opacity: 0, x: '100%', transition: { type: 'tween', ease: 'easeInOut', duration: 0.3 } }
  };

  // Variants to stagger the animation of child elements (the links)
  const listVariants = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Variants for each individual menu link
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="w-full flex items-center justify-between px-6 md:px-10 h-25 bg-gradient-to-r from-[#1a237e] via-[#0a0a2a] to-[#ff8000] fixed top-0 left-0 z-50 shadow-lg">
        {/* Logo and Brand Name */}
        <a href="#home" className="flex items-center">
          <img src="/logo/logo-2.png" alt="Isaac Hoops Academy Logo" className="h-40 w-auto" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 list-none m-0 p-0">
            <li><a href="#about" className="text-white text-base font-medium hover:text-orange-500 transition">About</a></li>
            <li><a href="#schedule" className="text-white text-base font-medium hover:text-orange-500 transition">Schedule</a></li>
            <li><a href="#coaches" className="text-white text-base font-medium hover:text-orange-500 transition">Coaches</a></li>
            <li><a href="#gallery" className="text-white text-base font-medium hover:text-orange-500 transition">Gallery</a></li>
            <li><a href="#testimonial" className="text-white text-base font-medium hover:text-orange-500 transition">Testimonial</a></li>
            <li><a href="#contact" className="text-white text-base font-medium hover:text-orange-500 transition">Contact</a></li>
          </ul>
          <div className="flex items-center gap-4">
            <input
              type="text"
              className="bg-slate-800 text-white rounded-full px-6 py-2 text-base outline-none w-44 focus:ring-2 focus:ring-orange-500 transition"
              placeholder="Search..."
            />
            <button className="bg-orange-500 text-white font-bold rounded-full px-6 py-2 text-base hover:bg-orange-600 transition">Find Camp</button>
          </div>
        </div>
        
        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-[#0a0a2a] bg-opacity-95 z-[60] flex flex-col items-center justify-center md:hidden"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button onClick={toggleMenu} className="absolute top-7 right-6 text-white">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <motion.ul
              className="flex flex-col gap-8 list-none text-center"
              variants={listVariants}
            >
              <motion.li variants={itemVariants}><a href="#about" onClick={toggleMenu} className="text-white text-2xl font-medium hover:text-orange-500 transition">About</a></motion.li>
              <motion.li variants={itemVariants}><a href="#schedule" onClick={toggleMenu} className="text-white text-2xl font-medium hover:text-orange-500 transition">Schedule</a></motion.li>
              <motion.li variants={itemVariants}><a href="#coaches" onClick={toggleMenu} className="text-white text-2xl font-medium hover:text-orange-500 transition">Coaches</a></motion.li>
              <motion.li variants={itemVariants}><a href="#gallery" onClick={toggleMenu} className="text-white text-2xl font-medium hover:text-orange-500 transition">Gallery</a></motion.li>
              <motion.li variants={itemVariants}><a href="#testimonial" onClick={toggleMenu} className="text-white text-2xl font-medium hover:text-orange-500 transition">Testimonial</a></motion.li>
              <motion.li variants={itemVariants}><a href="#contact" onClick={toggleMenu} className="text-white text-2xl font-medium hover:text-orange-500 transition">Contact</a></motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;

