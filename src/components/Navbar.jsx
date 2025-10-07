import React from 'react';

function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-10 h-20 bg-gradient-to-r from-[#1a237e] via-[#0a0a2a] to-[#ff8000] fixed top-0 left-0 z-50 shadow-lg">
      <div className="flex items-center">
        <span className="mr-3 flex items-center" role="img" aria-label="basketball">
          <svg width="32" height="32" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="15" fill="#ff8000" stroke="#222" strokeWidth="2"/>
            <path d="M16 1 v30 M1 16 h30 M5 5 l22 22 M27 5 l-22 22" stroke="#222" strokeWidth="1" fill="none"/>
          </svg>
        </span>
        <span className="text-2xl font-bold text-white tracking-wide">HOOPS DYNASTY</span>
      </div>
      <ul className="flex gap-8 list-none m-0 p-0">
        <li>
          <a href="#about" className="text-white text-base font-medium hover:text-orange-500 transition scroll-smooth">
            About
          </a>
        </li>
        <li>
          <a href="#schedule" className="text-white text-base font-medium hover:text-orange-500 transition scroll-smooth">
            Schedule
          </a>
        </li>
        <li>
          <a href="#coaches" className="text-white text-base font-medium hover:text-orange-500 transition scroll-smooth">
            Coaches
          </a>
        </li>
        <li>
          <a href="#gallery" className="text-white text-base font-medium hover:text-orange-500 transition scroll-smooth">
            Gallery
          </a>
        </li>
        <li>
          <a href="#testimonial" className="text-white text-base font-medium hover:text-orange-500 transition scroll-smooth">
            Testimonial
          </a>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        <input
          type="text"
          className="bg-slate-800 text-white rounded-full px-6 py-2 text-base outline-none w-44 focus:ring-2 focus:ring-orange-500 transition"
          placeholder="Search..."
        />
        <button className="bg-orange-500 text-white font-bold rounded-full px-6 py-2 text-base hover:bg-orange-600 transition">Find Camp</button>
      </div>
    </nav>
  );
}

export default Navbar;