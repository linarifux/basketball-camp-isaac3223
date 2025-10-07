import React, { useState } from 'react';

const categories = [
  { key: 'all', label: 'All' },
  { key: 'dunks', label: 'Dunks' },
  { key: 'camp-life', label: 'Camp Life' },
  { key: 'dribbling', label: 'Dribbling' },
  { key: 'teamplay', label: 'Team Play' },
  { key: 'fitness', label: 'Fitness' },
  { key: 'programs', label: 'Programs' },
];

const images = [
  {
    src: '/images/camp-life.png',
    alt: 'Camp Life',
    category: 'camp-life',
  },
  {
    src: '/images/drills.png',
    alt: 'Dribbling drill',
    category: 'dribbling',
  },
  {
    src: '/images/team.png',
    alt: 'Team play',
    category: 'teamplay',
  },
  {
    src: '/images/focus.png',
    alt: 'Fitness training',
    category: 'fitness',
  },
  {
    src: '/images/dunk.png',
    alt: 'Dunk shot',
    category: 'dunks',
  },
  {
    src: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=600&q=80',
    alt: 'Camp program',
    category: 'programs',
  },
  {
    src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    alt: 'Shooting form',
    category: 'shooting',
  },
  {
    src: '/images/victory.png',
    alt: 'Team celebration',
    category: 'teamplay',
  },
];

const Gallery = () => {
  const [selected, setSelected] = useState('all');
  const filteredImages =
    selected === 'all'
      ? images
      : images.filter((img) => img.category === selected);

  return (
    <section id="gallery" className="w-screen bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Camp Gallery</h2>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
          Explore moments from our basketball camp: dunks, drills, team play, fitness, and more!
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelected(cat.key)}
              className={`px-5 py-2 rounded-full font-semibold text-base transition 
                ${selected === cat.key
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-600'}`}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredImages.map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-xl shadow-lg group transition-transform duration-300 hover:scale-105"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="bg-white text-gray-800 px-4 py-2 text-center text-sm font-medium">
                {img.alt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;