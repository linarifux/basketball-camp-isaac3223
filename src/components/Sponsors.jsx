import React, { useRef } from 'react';
import Marquee from 'react-fast-marquee';
import { motion, useInView } from 'framer-motion';

// --- Updated Data with reliable, single-color logos ---
const sponsors = [
  { name: "Nike", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" },
  { name: "Adidas", logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" },
  { name: "Gatorade", logo: "https://images.seeklogo.com/logo-png/30/2/gatorade-logo-png_seeklogo-301636.png" },
  { name: "Spalding", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Spalding_logo.svg/2560px-Spalding_logo.svg.png" },
  { name: "Under Armour", logo: "https://www.svgrepo.com/show/303155/under-armour-logo.svg" },
  { name: "Wilson", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Wilson-logo.svg/2560px-Wilson-logo.svg.png" },
];

const Sponsors = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="w-full bg-gradient-to-b from-black via-[#0a0a2a] to-[#1a237e] py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Animated Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          variants={variants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-4">
            Proudly Supported By
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Our camp is powered by leading brands in sports who share our passion for developing the next generation of athletes.
          </p>
        </motion.div>

        {/* Marquee Scroller */}
        <div className="w-full">
          <Marquee
            gradient={false}
            speed={60}
            pauseOnHover={true}
          >
            {sponsors.map((s) => (
              <motion.div
                key={s.name}
                className="group mx-8 flex items-center justify-center p-6 h-32 w-52 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg"
                whileHover={{ scale: 1.05, y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img
                  src={s.logo}
                  alt={`${s.name} logo`}
                  className="h-12 md:h-16 w-auto object-contain transition-all duration-300 grayscale group-hover:grayscale-0"
                  style={{ filter: 'brightness(0) invert(1)' }} // This now works perfectly on all logos
                />
              </motion.div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;