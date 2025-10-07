import React from 'react';

const Appointment = () => (
  <section className="w-screen py-16 px-4 bg-gradient-to-r from-orange-400 via-[#1a237e] to-[#0a0a2a] flex items-center justify-center">
    <div className="max-w-2xl mx-auto text-center bg-white bg-opacity-90 rounded-2xl shadow-2xl p-10">
      <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">Ready to Elevate Your Game?</h2>
      <p className="text-lg text-gray-700 mb-8">
        Book your appointment with our expert coaches and start your journey to basketball greatness. Whether you're a beginner or an advanced player, our camp has a program for you!
      </p>
      <button className="bg-orange-500 text-white font-bold rounded-full px-8 py-4 text-lg shadow-lg hover:bg-orange-600 transition">
        Book Appointment
      </button>
    </div>
  </section>
);

export default Appointment;