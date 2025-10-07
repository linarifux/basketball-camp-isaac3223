import React, { useState } from 'react';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="w-screen py-16 px-4 bg-white flex items-center justify-center">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-2xl p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4 text-center">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Have questions about our camp or want to get in touch? Fill out the form below and our team will reach out to you!
        </p>
        {submitted ? (
          <div className="text-green-600 text-center font-semibold py-8">
            Thank you for contacting us! We’ll get back to you soon.
          </div>
        ) : (
          <form
            className="flex flex-col gap-6"
            onSubmit={e => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <input
              type="text"
              required
              placeholder="Your Name"
              className="px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              required
              placeholder="Your Email"
              className="px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <textarea
              required
              rows={4}
              placeholder="Your Message"
              className="px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white font-bold rounded-full px-8 py-4 text-lg shadow-lg hover:bg-orange-600 transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;