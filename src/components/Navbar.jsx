import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="w-full flex items-center justify-between px-6 md:px-10 h-20 bg-gradient-to-r from-[#1a237e] via-[#0a0a2a] to-[#ff8000] fixed top-0 left-0 z-50 shadow-lg">
        {/* Logo and Brand Name */}
        <div className="flex items-center">
          <span className="mr-3 flex items-center" role="img" aria-label="basketball">
            <svg width="32" height="32" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="15" fill="#ff8000" stroke="#222" strokeWidth="2"/>
              <path d="M16 1 v30 M1 16 h30 M5 5 l22 22 M27 5 l-22 22" stroke="#222" strokeWidth="1" fill="none"/>
            </svg>
          </span>
          <span className="text-2xl font-bold text-white tracking-wide"><a href="#home">HOOPS DYNASTY</a></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 list-none m-0 p-0">
            <li><a href="#about" className="text-white text-base font-medium hover:text-orange-500 transition">About</a></li>
            <li><a href="#schedule" className="text-white text-base font-medium hover:text-orange-500 transition">Schedule</a></li>
            <li><a href="#coaches" className="text-white text-base font-medium hover:text-orange-500 transition">Coaches</a></li>
            <li><a href="#gallery" className="text-white text-base font-medium hover:text-orange-500 transition">Gallery</a></li>
            <li><a href="#testimonial" className="text-white text-base font-medium hover:text-orange-500 transition">Testimonial</a></li>
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
      {isOpen && (
        <div className="fixed inset-0 bg-[#0a0a2a] bg-opacity-95 z-50 flex flex-col items-center justify-center md:hidden">
          {/* Close Button */}
          <button onClick={toggleMenu} className="absolute top-7 right-6 text-white">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          {/* Mobile Navigation Links */}
          <ul className="flex flex-col gap-8 list-none text-center">
            <li><a href="#about" onClick={toggleMenu} className="text-white text-2xl font-medium hover:text-orange-500 transition">About</a></li>
            <li><a href="#schedule" onClick={toggleMenu} className="text-white text-2xl font-medium hover:text-orange-500 transition">Schedule</a></li>
            <li><a href="#coaches" onClick={toggleMenu} className="text-white text-2xl font-medium hover:text-orange-500 transition">Coaches</a></li>
            <li><a href="#gallery" onClick={toggleMenu} className="text-white text-2xl font-medium hover:text-orange-500 transition">Gallery</a></li>
            <li><a href="#testimonial" onClick={toggleMenu} className="text-white text-2xl font-medium hover:text-orange-500 transition">Testimonial</a></li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
