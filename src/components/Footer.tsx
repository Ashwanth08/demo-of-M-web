'use client';

import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaPinterest, FaBehance } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-black/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold neon-text">
              Edward
            </Link>
            <p className="text-white/60">
              Capturing moments that last forever.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#portfolio" className="text-white/60 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/60 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-white/60 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/60 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-white/60 hover:text-white transition-colors">
                  Portrait Photography
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/60 hover:text-white transition-colors">
                  Wedding & Events
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/60 hover:text-white transition-colors">
                  Fashion Editorials
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/60 hover:text-white transition-colors">
                  Product Shoots
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white/60 hover:text-[var(--neon-blue)] transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white/60 hover:text-[var(--neon-blue)] transition-colors"
              >
                <FaPinterest />
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white/60 hover:text-[var(--neon-blue)] transition-colors"
              >
                <FaBehance />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60">
          <p>© 2025 Edward Photography. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 