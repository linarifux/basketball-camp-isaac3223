import React, { useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// --- Reusable Framer Motion Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 10 },
  },
};

const buttonVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 10, delay: 1.5 } },
  hover: { scale: 1.05, boxShadow: '0 0 20px rgba(255, 128, 0, 0.6)' },
  tap: { scale: 0.95 },
};

// --- 3D Particle Background Component ---
function ParticleBackground() {
  const ref = useRef();

  // Generate 5000 random star-like points in a sphere
  const particles = useMemo(() => {
    const count = 5000;
    const positions = new Float32Array(count * 3);
    const p = new THREE.Vector3();
    for (let i = 0; i < count; i++) {
      p.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
      p.multiplyScalar(Math.random() * 1.5 + 0.5); // Spread them out
      positions.set([p.x, p.y, p.z], i * 3);
    }
    return positions;
  }, []);

  // Animation loop to rotate the particles
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ff8000" // Orange color to match the theme
        size={0.005}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

// --- Main Hero Component ---
const Hero = () => {
  const headlineText = "Elevate Your Skills. Dominate the Court. Become Unstoppable.";
  const subHeadlineText = "Join our world-class basketball camps and unleash your full potential.";

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black" id='home'>
      {/* Background Video (Optional) */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-50"
        src='/videos/hero.mp4'
        autoPlay
        loop
        muted
        playsInline
      />
      
      {/* 3D Particle Background */}
      <div className="absolute inset-0 z-10">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ParticleBackground />
        </Canvas>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/80 z-20"></div>

      {/* Content */}
      <motion.div
        className="relative z-30 text-center max-w-4xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="text-white text-xl md:text-2xl mb-4 font-semibold tracking-wide" variants={itemVariants}>
          {subHeadlineText}
        </motion.p>
        
        <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-8 drop-shadow-xl leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            {headlineText.split("").map((char, index) => (
              <motion.span key={char + "-" + index} variants={itemVariants} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.button
          className="bg-orange-500 text-white font-bold rounded-full px-10 py-4 text-xl shadow-2xl hover:bg-orange-600 transition duration-300 transform"
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          whileTap="tap"
        >
          Join The Camp Today
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;