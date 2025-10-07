import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- DATA (No changes needed here) ---
const categories = [
  { key: 'all', label: 'All' },
  { key: 'dunks', label: 'Dunks' },
  { key: 'camp-life', label: 'Camp Life' },
  { key: 'dribbling', label: 'Dribbling' },
  { key: 'teamplay', label: 'Team Play' },
  { key: 'fitness', label: 'Fitness' },
];

const images = [
  { src: '/images/camp-life.png', alt: 'Focused player during camp life', category: 'camp-life', span: 'md:col-span-2 md:row-span-2' },
  { src: '/images/drills.png', alt: 'Intense dribbling drill', category: 'dribbling' },
  { src: '/images/dunk.png', alt: 'Spectacular dunk shot', category: 'dunks' },
  { src: '/images/team.png', alt: 'Team huddle strategy session', category: 'teamplay' },
  { src: '/images/focus.png', alt: 'Athlete in fitness training', category: 'fitness' },
  { src: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=600&q=80', alt: 'Celebrating a victory', category: 'teamplay' },
  { src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80', alt: 'One-on-one matchup', category: 'dribbling' },
  { src: '/images/victory.png', alt: 'Post-game team celebration', category: 'teamplay', span: 'md:col-span-2' },
];

// --- MAIN COMPONENT ---
const Gallery = () => {
  const [selected, setSelected] = useState('all');

  const filteredImages = React.useMemo(
    () => (selected === 'all' ? images : images.filter((img) => img.category === selected)),
    [selected]
  );

  return (
    <section id="gallery" className="w-full bg-gradient-to-b from-black via-[#0a0a2a] to-[#1a237e] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-4">
            From the Hardwood
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Explore moments of intensity, teamwork, and triumph from our basketball camps.
          </p>
        </div>

        {/* --- Filter Buttons --- */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelected(cat.key)}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm md:text-base transition-all duration-300 transform 
                ${selected === cat.key ? 'bg-orange-500 text-white shadow-lg scale-105' : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* --- Image Grid with Framer Motion --- */}
        <motion.div
          layout // This prop enables the magical layout animation
          className="grid grid-cols-2 md:grid-cols-4 auto-rows-[250px] gap-4"
        >
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                key={img.src}
                className={`overflow-hidden rounded-xl shadow-lg group relative cursor-pointer ${img.span || ''}`}
                layout // Animate layout changes for this item
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <p className="text-white text-base font-bold drop-shadow-lg">{img.alt}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;