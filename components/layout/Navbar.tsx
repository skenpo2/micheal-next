'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="#home"
            className="text-2xl font-bold text-white/90 hover:text-white transition-colors duration-500"
          >
            {'{ Micheal }'}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-sm font-light text-gray-400 hover:text-white transition-colors duration-500 group"
              >
                {item.name}
                <span className="absolute -bottom-2 left-1/2 w-0 h-px bg-white/60 transition-all duration-500 group-hover:w-full group-hover:left-0" />
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="px-6 py-2 text-sm font-light text-gray-400 hover:text-white border border-white/10 hover:border-white/20 rounded-full transition-all duration-500"
            >
              Let's connect
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-6 h-5 flex flex-col justify-between group"
            aria-label="Toggle menu"
          >
            <span
              className={`w-full h-px bg-gray-400 group-hover:bg-white transition-all duration-500 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-full h-px bg-gray-400 group-hover:bg-white transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-full h-px bg-gray-400 group-hover:bg-white transition-all duration-500 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 ${
            isOpen ? 'opacity-100 max-h-80' : 'opacity-0 max-h-0'
          } overflow-hidden`}
        >
          <div className="py-8 space-y-6 border-t border-white/5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-lg font-light text-gray-400 hover:text-white transition-colors duration-500"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="#contact"
                className="inline-block px-6 py-2 text-sm font-light text-gray-400 hover:text-white border border-white/10 hover:border-white/20 rounded-full transition-all duration-500"
                onClick={() => setIsOpen(false)}
              >
                Let's connect
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
