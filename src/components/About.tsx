'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 neon-text">About Me</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
          "My name is Ashwanth, and I'm deeply passionate about photography.
          For me, it's more than just a hobby—it's a powerful way to express creativity and capture the beauty of the world around us.
          I enjoy experimenting with light, composition, and storytelling, whether I'm shooting landscapes, portraits, or everyday street scenes.
          Photography allows me to see things from unique perspectives and constantly inspires me to explore and grow as an artist."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photographer Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden">
              <img
                src="/about-photographer.jpg.JPG"
                alt="Edward - Photographer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </motion.div>

          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-white/70 mb-4">
                With over a decade of experience behind the lens, I've dedicated my life to
                capturing the essence of moments and emotions through photography. My journey
                began with a simple passion for visual storytelling, which has evolved into
                a professional pursuit of creating timeless images that resonate with viewers.
              </p>
              <p className="text-white/70">
                From intimate portraits to grand events, each project is an opportunity to
                create something extraordinary and meaningful.
              </p>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-4">Artistic Philosophy</h3>
              <p className="text-white/70">
                I believe that photography is more than just capturing images—it's about
                creating visual poetry that speaks to the soul. My approach combines
                technical excellence with artistic vision, ensuring that each photograph
                tells a unique story and evokes genuine emotion.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 glass-card hover-glow"
            >
              View My Work
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 