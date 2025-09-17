'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const connections = [
  { icon: Github, href: 'https://github.com/skenpo2', label: 'Code' },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/michealobarewon/',
    label: 'Professional',
  },
  { icon: Mail, href: 'mailto:michealobarewon2015@gmail.com', label: 'Direct' },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-30"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/95 to-black"></div>

      <div className="relative z-10 container-custom px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-sm font-light text-gray-500 uppercase tracking-[0.3em] mb-8">
              Software Engineer • AI & ML Enthusiast
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
              <span className="text-white/90">Crafting intelligent</span>
              <br />
              <span className="gradient-text font-normal">
                solutions with code
              </span>
            </h1>

            <div className="max-w-2xl mx-auto space-y-6">
              <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
                I build scalable applications and explore how Artificial
                Intelligence and Machine Learning can power the next generation
                of software solutions.
              </p>

              <p className="text-lg font-light text-gray-400">
                Currently focused on full-stack development, data-driven
                systems, and applying AI to solve real-world challenges.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Link
              href="#projects"
              className="px-8 py-3 text-sm font-light text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full transition-all duration-500"
            >
              View selected work
            </Link>

            <Link
              href="#contact"
              className="px-8 py-3 text-sm font-light text-gray-400 hover:text-white transition-colors duration-500"
            >
              Start a conversation
            </Link>
          </div>

          {/* Connections */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto mb-20">
            {connections.map((connection, index) => (
              <a
                key={index}
                href={connection.href}
                target={
                  connection.href.startsWith('http') ? '_blank' : undefined
                }
                rel={
                  connection.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
                className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent border border-white/5 hover:border-white/10 transition-all duration-500"
                aria-label={connection.label}
              >
                <connection.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-500" />
                <span className="text-xs font-light text-gray-500 group-hover:text-gray-300 transition-colors duration-500">
                  {connection.label}
                </span>
              </a>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <Link
              href="#about"
              className="group inline-flex flex-col items-center gap-3 text-gray-500 hover:text-gray-300 transition-colors duration-500"
            >
              <span className="text-xs font-light uppercase tracking-wider">
                Learn more
              </span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-500" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
