'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Fashion Model',
    image: '/testimonials/sarah.JPEG',
    quote: 'Edward has an incredible eye for capturing the perfect moment. His work is simply breathtaking.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Wedding Client',
    image: '/testimonials/michael.JPEG',
    quote: 'Our wedding photos exceeded all expectations. Edward captured every emotion perfectly.',
  },
  {
    id: 3,
    name: 'Raj Velu',
    role: 'Business Owner',
    image: '/testimonials/raj-velu.png',
    quote: 'The product photography for my brand has transformed our online presence. Professional and creative!',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 px-4 bg-black/50">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 neon-text">Client Testimonials</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Hear what our clients have to say about their experience working with us.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[var(--neon-blue)]">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    fill
                    sizes="96px"
                    className="object-cover"
                    priority={currentIndex === 0}
                  />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-xl md:text-2xl mb-6 italic text-white/90">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  <div>
                    <h4 className="text-lg font-semibold">{testimonials[currentIndex].name}</h4>
                    <p className="text-white/60">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[var(--neon-blue)] scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 