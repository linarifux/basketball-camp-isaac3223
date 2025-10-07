import React from 'react';

const coaches = [
  {
    name: 'Sarah "Clutch" Chen',
    role: 'Shooting Coach',
    img: '/images/coach-2.png',
    about: [
      "Sarah is renowned for her precision shooting and clutch performances in high-pressure games.",
      "She has played professionally overseas and brings a wealth of experience to our camp.",
      "Her sessions focus on shooting mechanics, mental toughness, and building confidence from any spot on the court."
    ],
  },
  {
    name: 'David "Diesel" Jones',
    role: 'Defense Coach',
    img: '/images/coach-1.png',
    about: [
      "David is a defensive mastermind, known for his relentless energy and strategic approach.",
      "He has coached at both collegiate and national levels, developing top-tier defenders.",
      "David’s training covers footwork, positioning, and team defense concepts to shut down any opponent."
    ],
  },
  {
    name: 'Steve "Mind" Hill',
    role: 'Strategy Coach',
    img: '/images/coach-3.png',
    about: [
      "Steve is celebrated for his basketball IQ and tactical expertise.",
      "He has led teams to multiple championships and specializes in game planning and in-game adjustments.",
      "Steve’s sessions help players read the game, make smart decisions, and execute winning strategies."
    ],
  },
  {
    name: 'Coach Lee',
    role: 'Fitness Coach',
    img: '/images/coach-4.png',
    about: [
      "Coach Lee is a certified trainer focused on basketball-specific conditioning and injury prevention.",
      "He has worked with athletes at all levels, from youth to professional.",
      "Lee’s workouts improve agility, strength, and endurance, ensuring players stay healthy and perform at their peak."
    ],
  },
];

const gradientBg = "bg-gradient-to-br from-[#1a237e] via-[#0a0a2a] to-orange-100";

const Coaches = () => (
  <section
    id="coaches"
    className={`w-screen py-16 px-4 ${gradientBg} relative`}
  >
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center animate-fadeIn">
        Meet Our Coaches
      </h2>
      <p className="text-lg text-sky-200 mb-10 text-center max-w-2xl mx-auto animate-fadeIn">
        Our coaching team brings elite experience, passion, and a modern approach to player development.
      </p>
      <div className="flex flex-col gap-20">
        {coaches.map((coach, idx) => (
          <div
            key={coach.name}
            className={`flex flex-col md:flex-row ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-8 md:gap-0 animate-fadeIn`}
            style={{ animationDelay: `${idx * 0.15 + 0.2}s` }}
          >
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={coach.img}
                alt={coach.name}
                className="w-full h-[28rem] object-cover rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105 hover:rotate-[-2deg] border-4 border-orange-400"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center text-left px-0 md:px-10">
              <h3 className="text-2xl font-extrabold text-orange-400 mb-2 drop-shadow-lg">{coach.name}</h3>
              <span className="text-orange-500 font-semibold mb-3 text-lg">{coach.role}</span>
              <ul className="list-disc pl-5 text-white mb-6 space-y-2 text-base">
                {coach.about.map((info, i) => (
                  <li key={i} className="opacity-90">{info}</li>
                ))}
              </ul>
              <button className="bg-orange-500 text-white font-bold rounded-full px-8 py-3 text-base hover:bg-orange-600 transition w-fit shadow-lg animate-bounce">
                Book Session
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Decorative SVGs for dynamic style */}
      <svg className="absolute top-0 left-0 w-32 h-32 opacity-30" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="#ff8000" />
      </svg>
      <svg className="absolute bottom-0 right-0 w-40 h-40 opacity-20" viewBox="0 0 100 100">
        <rect x="10" y="10" width="80" height="80" rx="20" fill="#1a237e" />
      </svg>
    </div>
  </section>
);

export default Coaches;