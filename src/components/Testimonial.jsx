import React from 'react';

const Testimonial = () => (
  <section
    id="testimonial"
    className="w-screen py-16 px-4 bg-gradient-to-br from-[#1a237e] via-[#0a0a2a] to-orange-100 relative"
  >
    <div className="max-w-3xl mx-auto flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center drop-shadow-lg">
        What Our Campers Say
      </h2>
      <p className="text-lg text-sky-200 mb-8 text-center max-w-xl">
        Hear directly from our students about how Hoops Dynasty transformed their game and confidence.
      </p>
      <div className="w-full flex flex-col items-center">
        <div className="w-full md:w-[600px] rounded-xl overflow-hidden shadow-2xl mb-6 border-4 border-orange-400 animate-fadeIn">
          <video
            src={'../../src/assets/testimonial.mp4'}
            controls
            className="w-full h-72 object-cover bg-black"
          />
        </div>
        <div className="bg-orange-50 rounded-xl px-6 py-4 shadow text-gray-800 text-center max-w-lg animate-fadeIn">
          <h3 className="text-xl font-bold text-orange-600 mb-2">"The best basketball camp experience!"</h3>
          <p>
            "I learned so much from the coaches and made amazing friends. My skills improved and I feel more confident on the court. The energy and support at Hoops Dynasty is unmatched!"
          </p>
          <span className="block mt-3 font-semibold text-gray-600">— Jordan, Student Camper</span>
        </div>
      </div>
      {/* Decorative SVG for dynamic style */}
      <svg className="absolute top-0 left-0 w-32 h-32 opacity-30" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="#ff8000" />
      </svg>
      <svg className="absolute bottom-0 right-0 w-40 h-40 opacity-20" viewBox="0 0 100 100">
        <rect x="10" y="10" width="80" height="80" rx="20" fill="#1a237e" />
      </svg>
    </div>
  </section>
);

export default Testimonial;