import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// --- Custom SVG Icon Components ---
const CoachingIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-orange-400">
    <path d="M12 12m-9 0a9 9 0 1018 0a9 9 0 10-18 0" />
    <path d="M15.5 15.5l-3.5 -3.5" /><path d="M9 12h.01" /><path d="M12 9h.01" /><path d="M15 12h.01" />
  </svg>
);
const SkillIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-orange-400">
    <path d="M12.283 12.284a1.5 1.5 0 10-2.124-2.122a1.5 1.5 0 002.124 2.122z" />
    <path d="M14.071 14.072a3.5 3.5 0 10-4.95-4.95a3.5 3.5 0 004.95 4.95z" />
    <path d="M8 8l-3.5 3.5" /><path d="M16 8l3.5 3.5" /><path d="M8 16l-3.5 -3.5" />
    <path d="M16 16l3.5 -3.5" />
  </svg>
);
const GamesIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-orange-400">
    <path d="M12 4c-4.418 0-8 3.582-8 8s3.582 8 8 8s8-3.582 8-8" />
    <path d="M12 4a8 8 0 00-8 8" /><path d="M4 12a8 8 0 018-8" />
    <path d="M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8" />
    <path d="M12 20a8 8 0 01-8-8" /><path d="M20 12a8 8 0 00-8-8" />
  </svg>
);
const FitnessIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-orange-400">
    <path d="M3 12h4l3 8l4-16l3 8h4" />
  </svg>
);

// --- Data with Icons ---
const features = [
  { title: 'Elite Coaching', desc: 'Train with experienced coaches who have played and coached at the highest levels.', img: '/images/elite-coaching.png', icon: <CoachingIcon /> },
  { title: 'Skill Development', desc: 'Personalized drills and sessions to improve shooting, dribbling, and defense.', img: '/images/skill-development.png', icon: <SkillIcon /> },
  { title: 'Competitive Games', desc: 'Participate in daily scrimmages and tournaments to test your skills in a high-stakes environment.', img: '/images/competitive-games.png', icon: <GamesIcon /> },
  { title: 'Fitness & Conditioning', desc: 'Strength and agility workouts specifically designed to build explosive basketball athletes.', img: '/images/fitness-conditioning.png', icon: <FitnessIcon /> },
];

// --- Reusable Feature Row Component with Scroll Animation ---
const FeatureRow = ({ feature, isReversed }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const variants = {
    hidden: { opacity: 0, x: isReversed ? 100 : -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${isReversed ? 'md:flex-row-reverse' : ''}`}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ type: 'spring', stiffness: 50, damping: 20 }}
    >
      {/* Image */}
      <motion.div className="w-full md:w-2/5" whileHover={{ scale: 1.05 }}>
        <img src={feature.img} alt={feature.title} className="w-full h-auto object-cover rounded-xl shadow-2xl" />
      </motion.div>

      {/* Text Content Card */}
      <div className="w-full md:w-3/5">
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl shadow-lg p-8 h-full">
          <div className="flex items-center mb-4">
            {feature.icon}
            <h3 className="text-2xl font-bold text-white ml-4">{feature.title}</h3>
          </div>
          <p className="text-slate-300 text-lg">{feature.desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main About Section Component ---
const AboutSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#1a237e] via-[#0a0a2a] to-black py-24 px-4" id='about'>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-4">
            Why Isaac Hoops Academy?
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Our camp is built on four pillars of excellence, designed to forge elite athletes. Experience top-tier training, action-packed games, and a community that pushes you to be your best.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {features.map((feature, idx) => (
            <FeatureRow key={idx} feature={feature} isReversed={idx % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;