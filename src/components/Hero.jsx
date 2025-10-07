import React from 'react';

const Hero = () => {
  
  return (
    <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden" id='home'>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-50 blur-[2px]"
        src='../../public/hero.mp4'
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-8 drop-shadow-lg">
          Join our world-class basketball camps to elevate your skills, dominate the court, and become unstoppable.
        </h1>
        <button className="bg-orange-500 text-white font-bold rounded-full px-8 py-4 text-lg shadow-lg hover:bg-orange-600 transition">Join The Camp</button>
      </div>
    </section>
  );
};

export default Hero;