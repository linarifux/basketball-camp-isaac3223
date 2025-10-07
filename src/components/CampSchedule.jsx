import React from 'react';

const sessions = [
  {
    title: 'Summer Session',
    dates: 'June 1st - August 30th',
    locations: 'Miami, Los Angeles',
    icon: (
      <svg width="28" height="28" viewBox="0 0 40 40" fill="none" className="inline-block mr-2 align-middle">
        <circle cx="20" cy="20" r="18" fill="#fff" />
        <path d="M10 30 Q20 10 30 30" stroke="#ff8000" strokeWidth="2" fill="none"/>
        <circle cx="20" cy="20" r="7" stroke="#ff8000" strokeWidth="2" fill="none"/>
      </svg>
    ),
    bg: "bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-200"
  },
  {
    title: 'Fall Session',
    dates: 'September 15th - November 20th',
    locations: 'New York, Chicago',
    icon: (
      <svg width="28" height="28" viewBox="0 0 40 40" fill="none" className="inline-block mr-2 align-middle">
        <ellipse cx="20" cy="20" rx="18" ry="16" fill="#fff" />
        <path d="M20 8 v24" stroke="#ff8000" strokeWidth="2"/>
        <path d="M10 20 h20" stroke="#ff8000" strokeWidth="2"/>
        <path d="M13 13 l14 14" stroke="#ff8000" strokeWidth="2"/>
        <path d="M27 13 l-14 14" stroke="#ff8000" strokeWidth="2"/>
      </svg>
    ),
    bg: "bg-gradient-to-br from-yellow-400 via-orange-300 to-orange-500"
  },
  {
    title: 'Winter Session',
    dates: 'December 5th - February 10th',
    locations: 'Online, Dallas',
    icon: (
      <svg width="28" height="28" viewBox="0 0 40 40" fill="none" className="inline-block mr-2 align-middle">
        <circle cx="20" cy="20" r="18" fill="#fff" />
        <path d="M20 10 v20" stroke="#3b82f6" strokeWidth="2"/>
        <path d="M10 20 h20" stroke="#3b82f6" strokeWidth="2"/>
        <circle cx="20" cy="20" r="7" stroke="#3b82f6" strokeWidth="2" fill="none"/>
        <path d="M15 15 l10 10" stroke="#3b82f6" strokeWidth="2"/>
        <path d="M25 15 l-10 10" stroke="#3b82f6" strokeWidth="2"/>
      </svg>
    ),
    bg: "bg-gradient-to-br from-slate-800 via-slate-700 to-blue-500"
  },
];

const locationIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="inline-block align-middle mr-1">
    <path d="M12 2C7.58 2 4 5.58 4 10c0 5.25 7.25 12 7.25 12s7.25-6.75 7.25-12c0-4.42-3.58-8-8-8zm0 10.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#fff"/>
  </svg>
);

const CampSchedule = () => (
  <section className="w-screen bg-black py-16 px-4" id='schedule'>
    <p className="text-lg text-sky-300 mb-10 text-center">
      Our camps run year-round. Find a date and location that works for you.
    </p>
    <div className="flex flex-wrap justify-center gap-8">
      {sessions.map((s, idx) => (
        <div
          key={idx}
          className={`flex flex-col items-start rounded-2xl shadow-lg px-8 py-8 min-w-[260px] max-w-[340px] transition-transform duration-200 hover:scale-105 ${s.bg} animate-fadeIn`}
        >
          <div className="mb-2">{s.icon}</div>
          <h3 className="text-2xl font-extrabold text-orange-600 mb-2 drop-shadow">{s.title}</h3>
          <p className="text-base text-white mb-2">{s.dates}</p>
          <p className="text-base text-white flex items-center mb-1">
            {locationIcon}
            <span className="font-bold">Locations:</span>
            <span className="ml-1">{s.locations}</span>
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default CampSchedule;