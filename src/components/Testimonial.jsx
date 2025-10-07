import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// --- Testimonial Data Array ---
const testimonials = [
  {
    quote: "The energy and support at Isaac Hoops Academy is unmatched! My skills improved, and I feel so much more confident on the court. The best camp experience!",
    name: 'Jordan Lee',
    role: 'Student Camper',
    avatar: '/images/leo.jpg', // Make sure you have avatar images in your public folder
  },
  {
    quote: "As a parent, I was blown away by the professionalism and dedication of the coaching staff. My son came back not just a better player, but a more disciplined athlete.",
    name: 'Sarah Chen',
    role: 'Parent',
    avatar: '/images/sarah.jpg',
  },
  {
    quote: "I’ve been to many camps, but the personalized attention to my shooting form here was a game-changer. The video analysis sessions were incredibly helpful.",
    name: 'Michael B.',
    role: 'Advanced Player',
    avatar: '/images/michael.jpg',
  },
  {
    quote: "The competitive games were the best part! Playing against other talented players in a structured tournament setting really pushed me to my limits.",
    name: 'Alex Johnson',
    role: 'Student Camper',
    avatar: '/images/alex.jpg',
  },
];

const Testimonial = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="testimonial" className="w-full bg-gradient-to-b from-[#1a237e] via-[#0a0a2a] to-black py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Animated Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          variants={variants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-4">
            What Our Campers Say
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Hear directly from our students and parents about how Hoops Dynasty transformed their game and confidence.
          </p>
        </motion.div>

        {/* Swiper Carousel */}
        <div className="w-full">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="mySwiper w-full py-8"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index} style={{ width: '320px', height: '420px' }}>
                <div className="group w-full h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-8 flex flex-col text-center items-center justify-center">
                  <img src={t.avatar} alt={t.name} className="w-24 h-24 rounded-full object-cover border-4 border-orange-500 mb-4 shadow-md"/>
                  <p className="text-slate-200 italic mb-6 text-base leading-relaxed">"{t.quote}"</p>
                  <div className="mt-auto">
                    <h4 className="font-bold text-white text-lg">{t.name}</h4>
                    <p className="text-orange-400 font-medium text-sm">{t.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;