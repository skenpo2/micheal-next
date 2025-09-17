'use client';

import Link from 'next/link';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const connections = [
  { icon: Github, href: 'https://github.com/skenpo2', label: 'Code' },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/michealobarewon/',
    label: 'Professional',
  },
  { icon: Mail, href: 'mailto:michealobarewon2015@gmail.com', label: 'Direct' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="py-16">
          <div className="max-w-4xl mx-auto">
            {/* Philosophy */}
            <div className="text-center mb-16">
              <p className="text-lg font-light text-gray-300 leading-relaxed max-w-2xl mx-auto">
                Building software is a continuous journey of learning,
                problem-solving, and creating value for people who use what we
                build.
              </p>
            </div>

            {/* Connection Options */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
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
                  className="group block p-8 text-center rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent border border-white/5 hover:border-white/10 transition-all duration-500"
                  aria-label={connection.label}
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-300 flex items-center justify-center">
                    <connection.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-sm font-light text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
                    {connection.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Minimal Bottom */}
        <div className="py-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-8">
              <span className="text-sm font-light text-gray-500">
                Micheal © {new Date().getFullYear()}
              </span>
              <span className="text-xs font-light text-gray-600">NG</span>
            </div>

            <div className="flex items-center gap-6">
              <button
                onClick={scrollToTop}
                className="group flex items-center gap-2 px-4 py-2 text-xs font-light text-gray-500 hover:text-gray-300 transition-colors duration-300"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
