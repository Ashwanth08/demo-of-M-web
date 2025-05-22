'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

type Category = 'all' | 'portrait' | 'fashion' | 'events' | 'products';

const categories: Category[] = ['all', 'portrait', 'fashion', 'events', 'products'];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Portfolio images with optimized sizes
  const images = [
    { 
      id: 1, 
      category: 'portrait', 
      src: '/portfolio/portrait-1.jpg.JPG',
      width: 800,
      height: 1200,
      alt: 'Portrait Photography'
    },
    { 
      id: 5, 
      category: 'portrait', 
      src: '/portfolio/portrait-2.jpg',
      width: 800,
      height: 1200,
      alt: 'Portrait Photography'
    },
    { 
      id: 6, 
      category: 'portrait', 
      src: '/portfolio/portrait-3.jpg',
      width: 800,
      height: 1200,
      alt: 'Portrait Photography'
    },
    { 
      id: 7, 
      category: 'portrait', 
      src: '/portfolio/portrait-4.jpg',
      width: 800,
      height: 1200,
      alt: 'Portrait Photography'
    },
    { 
      id: 8, 
      category: 'portrait', 
      src: '/portfolio/portrait-5.jpg',
      width: 800,
      height: 1200,
      alt: 'Portrait Photography'
    },
    { 
      id: 2, 
      category: 'fashion', 
      src: '/portfolio/fashion-1.JPEG',
      width: 800,
      height: 1200,
      alt: 'Fashion Photography'
    },
    { 
      id: 9, 
      category: 'fashion', 
      src: '/portfolio/fashion-2.png',
      width: 800,
      height: 1200,
      alt: 'Fashion Photography'
    },
    { 
      id: 3, 
      category: 'events', 
      src: '/portfolio/event-1.JPG',
      width: 1200,
      height: 800,
      alt: 'Event Photography'
    },
    { 
      id: 10, 
      category: 'events', 
      src: '/portfolio/event-2.jpg',
      width: 1200,
      height: 800,
      alt: 'Event Photography'
    },
     { 
      id: 11, 
      category: 'events', 
      src: '/portfolio/event-3.jpg',
      width: 1200,
      height: 800,
      alt: 'Event Photography'
    },
    { 
      id: 4, 
      category: 'products', 
      src: '/portfolio/product-1.jpg.JPG',
      width: 800,
      height: 800,
      alt: 'Product Photography'
    },
  ];

  const filteredImages = activeCategory === 'all'
    ? images
    : images.filter(img => img.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 px-4 bg-black/50">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 neon-text">Portfolio</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Explore our collection of stunning photographs that capture moments of beauty,
            emotion, and artistry.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full capitalize transition-colors duration-300 ${
                activeCategory === category
                  ? 'glass-card text-white'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative group overflow-hidden rounded-lg aspect-[3/4]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={85}
                priority={image.id <= 2}
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="px-6 py-2 glass-card text-white"
                >
                  View
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 