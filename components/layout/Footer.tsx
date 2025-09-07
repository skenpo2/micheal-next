'use client';

import Link from 'next/link';
import { ArrowUp, Github, Linkedin, Twitter, Mail, Code2 } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/johndoe', label: 'GitHub' },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/johndoe',
    label: 'LinkedIn',
  },
  { icon: Twitter, href: 'https://twitter.com/johndoe', label: 'Twitter' },
  { icon: Mail, href: 'mailto:john.doe@example.com', label: 'Email' },
];

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 border-t border-gray-800">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href="#home"
              className="flex items-center space-x-2 group mb-4"
            >
              <div className="relative">
                <Code2 className="w-8 h-8 text-primary-500 group-hover:text-primary-400 transition-colors" />
                <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <span className="text-xl font-bold gradient-text">John Doe</span>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Full Stack Developer passionate about creating innovative web
              solutions and exceptional user experiences. Always learning and
              pushing the boundaries of what&apos;s possible with code.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass-morphism rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:text-primary-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="mailto:john.doe@example.com"
                  className="hover:text-primary-400 transition-colors duration-300"
                >
                  john.doe@example.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="hover:text-primary-400 transition-colors duration-300"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm"
            >
              Terms of Service
            </Link>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 glass-morphism rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5 group-hover:text-primary-400 transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
