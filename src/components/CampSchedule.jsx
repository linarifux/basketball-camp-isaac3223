import React from 'react';

// --- DATA: Expanded with more details for each session ---
const sessions = [
  {
    title: 'Summer Session',
    dates: 'June 1st - August 30th',
    locations: 'Miami, Los Angeles',
    description: 'Intensive on-court training focusing on core fundamentals and advanced gameplay scenarios under the summer sun.',
    ageGroup: 'Ages 12-18',
    skillLevel: 'Intermediate to Advanced',
    price: '$1200',
    focus: ['Dribbling', 'Shooting Accuracy', 'Defensive Stances'],
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="18" fill="#fff" />
        <path d="M10 30 Q20 10 30 30" stroke="#ff8000" strokeWidth="2" fill="none"/>
        <circle cx="20" cy="20" r="7" stroke="#ff8000" strokeWidth="2" fill="none"/>
      </svg>
    ),
    bg: "bg-slate-800/50"
  },
  {
    title: 'Fall Session',
    dates: 'September 15th - November 20th',
    locations: 'New York, Chicago',
    description: 'Focus on team dynamics, strategic play, and conditioning as you prepare for the competitive season ahead.',
    ageGroup: 'Ages 10-16',
    skillLevel: 'All Levels Welcome',
    price: '$950',
    focus: ['Team Play', 'Game IQ', 'Conditioning'],
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <ellipse cx="20" cy="20" rx="18" ry="16" fill="#fff" />
        <path d="M20 8 v24 M10 20 h20 M13 13 l14 14 M27 13 l-14 14" stroke="#ff8000" strokeWidth="2"/>
      </svg>
    ),
    bg: "bg-slate-800/50"
  },
  {
    title: 'Winter Session',
    dates: 'December 5th - February 10th',
    locations: 'Online & Dallas',
    description: 'A hybrid camp combining virtual film study and analytics with intensive in-person drills to sharpen your skills.',
    ageGroup: 'Ages 14-18',
    skillLevel: 'Advanced',
    price: '$1500',
    focus: ['Film Study', 'Shooting Mechanics', 'Agility'],
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="18" fill="#fff" />
        <path d="M20 10 v20 M10 20 h20 M15 15 l10 10 M25 15 l-10 10" stroke="#3b82f6" strokeWidth="2"/>
        <circle cx="20" cy="20" r="7" stroke="#3b82f6" strokeWidth="2" fill="none"/>
      </svg>
    ),
    bg: "bg-slate-800/50"
  },
];


const CampSchedule = () => (
  <section className="w-full bg-gradient-to-b from-[#0a0a2a] via-[#1a237e] to-black py-24 px-4" id='schedule'>
    <div className="container mx-auto text-center mb-16">
      <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-4">
        Camp Schedule
      </h2>
      <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
        Our elite camps run year-round, offering specialized training for every season. Find the perfect date and location to elevate your game.
      </p>
    </div>

    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {sessions.map((s, idx) => (
        <div
          key={idx}
          className={`flex flex-col rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105 hover:shadow-orange-500/40 border border-slate-700 ${s.bg}`}
        >
          <div className='p-8'>
            <div className="flex items-center mb-5">
              {s.icon}
              <h3 className="text-3xl font-bold text-white ml-4 drop-shadow-md">{s.title}</h3>
            </div>
            <p className="text-slate-300 mb-5 text-base min-h-[75px]">{s.description}</p>
            
            {/*-- Details --*/}
            <div className="space-y-3 text-slate-100 text-sm border-t border-slate-700 pt-5">
                <p><strong>Dates:</strong> {s.dates}</p>
                <p><strong>Locations:</strong> {s.locations}</p>
                <p><strong>Ages:</strong> {s.ageGroup}</p>
                <p><strong>Skill Level:</strong> {s.skillLevel}</p>
            </div>
            
            {/*-- Focus Areas --*/}
            <div className="mt-5">
                 <h4 className="font-semibold text-white mb-3">Key Focus Areas:</h4>
                 <div className="flex flex-wrap gap-2">
                    {s.focus.map(f => <span key={f} className="bg-slate-700 text-orange-300 text-xs font-semibold px-3 py-1 rounded-full">{f}</span>)}
                 </div>
            </div>
          </div>

          {/*-- Price and CTA Button --*/}
          <div className="mt-auto bg-slate-900/50 rounded-b-2xl px-8 py-6 flex items-center justify-between">
            <p className="text-3xl font-extrabold text-white">{s.price}</p>
            <button className="bg-orange-500 text-white font-bold rounded-full px-6 py-3 text-base hover:bg-orange-600 transition-colors duration-300 shadow-lg hover:shadow-orange-500/50 transform hover:-translate-y-1">
              Register Now
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default CampSchedule;