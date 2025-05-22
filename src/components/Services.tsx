'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CameraIcon, HeartIcon, SparklesIcon, ShoppingBagIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Portrait Photography',
    description: 'Capture your essence with our professional portrait sessions, perfect for individuals, families, and corporate headshots.',
    icon: CameraIcon,
  },
  {
    title: 'Wedding & Event Coverage',
    description: 'Let us document your special moments with our comprehensive event photography services.',
    icon: HeartIcon,
  },
  {
    title: 'Fashion Editorials',
    description: 'Elevate your brand with high-end fashion photography that tells your story.',
    icon: SparklesIcon,
  },
  {
    title: 'Product Shoots',
    description: 'Showcase your products in their best light with our professional product photography.',
    icon: ShoppingBagIcon,
  },
  {
    title: 'Custom Projects',
    description: 'Have a unique vision? We specialize in bringing creative photography projects to life.',
    icon: WrenchScrewdriverIcon,
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-20 px-4 bg-black/50">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 neon-text">Our Services</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Discover our range of professional photography services, tailored to meet your unique needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 hover-glow"
            >
              <div className="flex items-center mb-6">
                <service.icon className="w-8 h-8 text-[var(--neon-blue)]" />
                <h3 className="text-xl font-semibold ml-4">{service.title}</h3>
              </div>
              <p className="text-white/70">{service.description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 text-[var(--neon-blue)] hover:text-[var(--deep-violet)] transition-colors duration-300"
              >
                Learn More →
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 