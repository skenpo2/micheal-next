'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary-400/5 rounded-full blur-2xl animate-float"
          style={{ animationDelay: '4s' }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom section-padding text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow">
            Hi, I&apos;m <span className="gradient-text">Micheal</span>
          </h1>

          <div className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto">
            <span className="block mb-2">Full Stack Developer</span>
            <span className="text-lg md:text-xl text-gray-400">
              Crafting digital experiences with modern technologies and clean
              code
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="#projects" className="btn-primary w-full sm:w-auto">
              View My Work
            </Link>
            <Link href="#contact" className="btn-secondary w-full sm:w-auto">
              Get In Touch
            </Link>
            <a
              href="/resume.pdf"
              download
              className="btn-secondary w-full sm:w-auto flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-morphism rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
            >
              <Github className="w-6 h-6 group-hover:text-primary-400 transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-morphism rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin className="w-6 h-6 group-hover:text-primary-400 transition-colors" />
            </a>
            <a
              href="mailto:john.doe@example.com"
              className="p-3 glass-morphism rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
            >
              <Mail className="w-6 h-6 group-hover:text-primary-400 transition-colors" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <Link href="#about" className="inline-block">
              <ChevronDown className="w-8 h-8 text-gray-400 hover:text-primary-400 transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
