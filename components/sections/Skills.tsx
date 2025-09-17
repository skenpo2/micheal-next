'use client';

import { useState } from 'react';

const domains = [
  {
    title: 'Interface',
    essence: 'Where users meet technology',
    tools: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind',
      'Framer Motion',
      'Three.js',
    ],
  },
  {
    title: 'Architecture',
    essence: 'Systems that think ahead',
    tools: [
      'Node.js',
      'Python',
      'PostgreSQL',
      'GraphQL',
      'Microservices',
      'Redis',
    ],
  },
  {
    title: 'Infrastructure',
    essence: 'Foundation for scale',
    tools: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Monitoring'],
  },
  {
    title: 'Craft',
    essence: 'How good software happens',
    tools: [
      'Git',
      'Testing',
      'Code Review',
      'Documentation',
      'Performance',
      'Security',
    ],
  },
];

export default function Skills() {
  const [activeDomain, setActiveDomain] = useState(0);

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        {/* Soft Introduction */}
        <div className="text-center mb-24">
          <p className="text-sm font-light text-gray-500 uppercase tracking-[0.3em] mb-6">
            What I Work With
          </p>
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-white/90 leading-relaxed">
            Technology becomes invisible
            <br />
            when it{' '}
            <span className="gradient-text font-normal">just works</span>
          </h2>
        </div>

        {/* Domain Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-20">
          {domains.map((domain, index) => (
            <button
              key={index}
              onClick={() => setActiveDomain(index)}
              className={`px-6 py-3 rounded-full text-sm font-light transition-all duration-500 ${
                activeDomain === index
                  ? 'bg-white/5 text-white border border-white/10'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {domain.title}
            </button>
          ))}
        </div>

        {/* Active Domain */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-light text-white mb-4">
              {domains[activeDomain].title}
            </h3>
            <p className="text-gray-400 font-light text-lg italic">
              {domains[activeDomain].essence}
            </p>
          </div>

          {/* Tools Grid - Redesigned */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-20">
            {domains[activeDomain].tools.map((tool, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent border border-white/5 hover:border-white/10 hover:from-white/[0.03] transition-all duration-500 text-center"
              >
                <div className="relative mb-4">
                  {/* Abstract visual element */}
                  <div className="w-12 h-12 mx-auto relative">
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/10 to-white/5 group-hover:from-primary-500/20 group-hover:to-primary-400/10 transition-all duration-500"></div>
                    <div className="absolute inset-2 rounded-md bg-white/5 group-hover:bg-primary-400/10 transition-all duration-500"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/40 group-hover:bg-primary-400/80 transition-all duration-500"></div>
                  </div>
                </div>

                <h4 className="text-gray-300 font-light group-hover:text-white transition-colors duration-500">
                  {tool}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Approach Philosophy */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="space-y-8">
            <div className="py-12 px-8 rounded-3xl bg-gradient-to-br from-white/[0.02] to-transparent border border-white/5">
              <p className="text-lg font-light text-gray-300 leading-relaxed mb-8">
                I believe the best technology disappears into the background,
                enabling people to focus on what matters most to them.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                <div className="space-y-3">
                  <p className="text-gray-500 font-light">Design Principles</p>
                  <div className="space-y-2 text-gray-400">
                    <p>Simplicity over complexity</p>
                    <p>Performance by default</p>
                    <p>Accessibility for everyone</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-gray-500 font-light">Development Values</p>
                  <div className="space-y-2 text-gray-400">
                    <p>Code that tells stories</p>
                    <p>Systems that adapt</p>
                    <p>Solutions that endure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
