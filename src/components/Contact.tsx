'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaInstagram, FaPinterest, FaBehance } from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 neon-text">Get in Touch</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Let's create something beautiful together. Reach out to discuss your photography needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 glass-card focus:outline-none focus:ring-2 focus:ring-[var(--neon-blue)]"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 glass-card focus:outline-none focus:ring-2 focus:ring-[var(--neon-blue)]"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 glass-card focus:outline-none focus:ring-2 focus:ring-[var(--neon-blue)]"
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-8 py-3 glass-card hover-glow"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <p className="flex items-center gap-3">
                  <span className="text-[var(--neon-blue)]">Email:</span>
                  <a href="mailto:contact@edwardphotography.com" className="hover:text-[var(--neon-blue)]">
                    contact@edwardphotography.com
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-[var(--neon-blue)]">Phone:</span>
                  <a href="tel:+1234567890" className="hover:text-[var(--neon-blue)]">
                    +1 (234) 567-890
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-[var(--neon-blue)]">Location:</span>
                  <span>New York City, NY</span>
                </p>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-4">Follow Me</h3>
              <div className="flex gap-6">
                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-2xl hover:text-[var(--neon-blue)]"
                >
                  <FaInstagram />
                </motion.a>
                <motion.a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-2xl hover:text-[var(--neon-blue)]"
                >
                  <FaPinterest />
                </motion.a>
                <motion.a
                  href="https://behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-2xl hover:text-[var(--neon-blue)]"
                >
                  <FaBehance />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 