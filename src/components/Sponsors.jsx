import React from 'react';

const sponsors = [
  { name: "Nike", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" },
  { name: "Adidas", logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" },
  { name: "Gatorade", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Gatorade_logo.svg" },
  { name: "Spalding", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Spalding_logo.svg" },
  { name: "Under Armour", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Under_armour_logo.svg" },
  { name: "Wilson", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Wilson_logo.svg" },
];

const Sponsors = () => (
  <section className="w-screen py-16 px-4 bg-gradient-to-r from-orange-400 via-[#1a237e] to-[#0a0a2a] relative overflow-hidden">
    <div className="max-w-5xl mx-auto flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center drop-shadow-lg">
        Proudly Sponsored By
      </h2>
      <p className="text-lg text-orange-100 mb-8 text-center max-w-xl">
        Our camp is supported by leading brands committed to empowering athletes and growing the game.
      </p>
      <div className="w-full overflow-x-hidden">
        <div className="flex items-center gap-16 animate-marquee whitespace-nowrap py-4">
          {sponsors.map((s, idx) => (
            <div key={idx} className="flex flex-col items-center mx-6">
              <img
                src={s.logo}
                alt={s.name}
                className="h-16 w-auto mb-2 drop-shadow-lg grayscale hover:grayscale-0 transition duration-300"
              />
              <span className="text-white font-semibold text-base">{s.name}</span>
            </div>
          ))}
          {/* Repeat for infinite effect */}
          {sponsors.map((s, idx) => (
            <div key={s.name + "-repeat"} className="flex flex-col items-center mx-6">
              <img
                src={s.logo}
                alt={s.name}
                className="h-16 w-auto mb-2 drop-shadow-lg grayscale hover:grayscale-0 transition duration-300"
              />
              <span className="text-white font-semibold text-base">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Decorative SVGs */}
      <svg className="absolute top-0 left-0 w-32 h-32 opacity-20" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="#fff" />
      </svg>
      <svg className="absolute bottom-0 right-0 w-40 h-40 opacity-10" viewBox="0 0 100 100">
        <rect x="10" y="10" width="80" height="80" rx="20" fill="#ff8000" />
      </svg>
    </div>
    {/* Marquee animation */}
    <style>
      {`
        .animate-marquee {
          display: flex;
          animation: marquee 18s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}
    </style>
  </section>
);

export default Sponsors;