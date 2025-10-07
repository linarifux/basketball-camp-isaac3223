import React from 'react';

const features = [
  {
    title: 'Elite Coaching',
    desc: 'Train with experienced coaches who have played and coached at the highest levels.',
    img: '/images/elite-coaching.png',
  },
  {
    title: 'Skill Development',
    desc: 'Personalized drills and sessions to improve shooting, dribbling, and defense.',
    img: '/images/skill-development.png',
  },
  {
    title: 'Competitive Games',
    desc: 'Participate in daily scrimmages and tournaments to test your skills.',
    img: '/images/competitive-games.png',
  },
  {
    title: 'Fitness & Conditioning',
    desc: 'Strength and agility workouts designed for basketball athletes.',
    img: '/images/fitness-conditioning.png',
  },
];

const AboutSection = () => {
  return (
    <section className="w-screen bg-white py-16 px-4" id='about'>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">About Our Camp</h2>
        <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl mx-auto">
          Our basketball camp is dedicated to helping players of all levels reach their full potential. Experience top-tier training, action-packed games, and a supportive community.
        </p>
        <div className="flex flex-col gap-10">
          {features.map((f, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-12 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} group`}
            >
              <img
                src={f.img}
                alt={f.title}
                className="w-full md:w-72 h-48 object-cover rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex-1 bg-gray-50 rounded-xl shadow-md p-6 flex flex-col justify-center animate-fadeIn">
                <h3 className="text-xl font-bold text-orange-500 mb-2">{f.title}</h3>
                <p className="text-gray-700 text-base">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;