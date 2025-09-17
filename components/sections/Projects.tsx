'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Github } from 'lucide-react';

const works = [
  {
    id: 'checkslate',
    title: 'Checkslate',
    subtitle:
      'Skill-sharing escrow platform for booking and managing expert services securely.',
    year: '2025',
    scope: 'Full-Stack Development & Team Leadership',
    challenge:
      'Designing secure, scalable infrastructure with real-time features and multi-role access control.',
    approach:
      'Developed APIs with Express.js & MongoDB, integrated Paystack and Dojah, implemented JWT-based RBAC auth, real-time messaging, and performance optimizations with Redis and CDN.',
    outcome:
      'Delivered production-ready features, improved system reliability, and streamlined team collaboration with cross-functional stand-ups.',
    image:
      'https://res.cloudinary.com/dghp0dumz/image/upload/v1758077150/Screenshot_from_2025-09-17_03-42-51_a5wkmm.png',
    stack: [
      'React.js',
      'Redux Toolkit',
      'Tailwind CSS',
      'Express.js',
      'MongoDB',
      'TypeScript',
      'RabbitMq',
      'Redis',
      'AWS',
    ],
    links: {
      github: 'https://github.com/skenpo2/check-staging',
      live: 'https://checkslate-project.netlify.app/',
    },
    featured: true,
  },
  {
    id: 'learnverrse',
    title: 'Learnverrse',
    subtitle: 'Learning Management System tailored to Nigeria’s edtech sector.',
    year: '2025',
    scope: 'Backend Development',
    challenge:
      'Building a scalable and secure backend for an MVP course management platform.',
    approach:
      'Designed modular APIs, integrated AWS S3 & CloudFront for media storage and delivery, and deployed services on AWS. Collaborated with frontend, cybersecurity, and design teams to align architecture with product goals.',
    outcome:
      'Delivered a functional backend MVP with secure content delivery and seamless course management features.',
    image:
      'https://res.cloudinary.com/dghp0dumz/image/upload/v1758077150/Screenshot_from_2025-09-17_03-41-30_jsz7bh.png',
    stack: ['Node.js', 'Express.js', 'AWS S3', 'CloudFront', 'MongoDB'],
    links: {
      github: 'https://github.com/skenpo2/learnverrse-staging',
      live: 'https://learnverrse.github.io/learnverrse',
    },
    featured: true,
  },

  {
    id: 'portfolio',
    title: 'Personal Portfolio Website',
    subtitle: 'Next.js 15 developer portfolio',
    year: '2025',
    scope: 'Full Stack Web Development',
    challenge:
      'design and build my personal website to showcase projects, skills, and professional journey while ensuring performance and SEO optimization.',
    approach:
      'Implemented with Next.js 15 App Router, Tailwind CSS, and shadcn/ui. Integrated structured metadata, Open Graph previews, and responsive design with Framer Motion animations.',
    outcome:
      'Launched a modern, responsive portfolio that highlights software engineering, AI/ML journey, and projects with optimized performance and accessibility.',
    image:
      'https://res.cloudinary.com/dghp0dumz/image/upload/v1758079877/Screenshot_from_2025-09-17_04-30-50_agbyik.png',
    stack: [
      'Next.js 15',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
    ],
    links: {
      github: 'https://github.com/skenpo2/portfolio',
      live: 'https://micheal-next.vercel.app/',
    },
    featured: true,
  },
];

const filters = ['All Work', 'Featured', 'Infrastructure', 'Full Stack'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All Work');
  // const [selectedProject, setSelectedProject] = useState(null);

  const filteredWorks = works.filter((work) => {
    if (activeFilter === 'All Work') return true;
    if (activeFilter === 'Featured') return work.featured;
    if (activeFilter === 'Infrastructure')
      return work.scope.includes('Infrastructure');
    if (activeFilter === 'Full Stack') return work.scope.includes('Full Stack');
    return true;
  });

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        {/* Introduction */}
        <div className="text-center mb-20">
          <p className="text-sm font-light text-gray-500 uppercase tracking-[0.3em] mb-6">
            Selected Work
          </p>
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-white/90 leading-relaxed max-w-4xl mx-auto">
            Solutions that started as problems
            <br />
            worth <span className="gradient-text font-normal">solving</span>
          </h2>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-light transition-all duration-500 ${
                activeFilter === filter
                  ? 'bg-white/5 text-white border border-white/10'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {filteredWorks.map((work, index) => (
            <div
              key={work.id}
              className={`grid ${
                work.featured ? 'lg:grid-cols-3' : 'lg:grid-cols-2'
              } gap-12 items-center ${
                index % 2 === 1 && !work.featured
                  ? 'lg:grid-flow-col-dense'
                  : ''
              }`}
            >
              {/* Image */}
              <div
                className={`relative ${work.featured ? 'lg:col-span-2' : ''} ${
                  index % 2 === 1 && !work.featured ? 'lg:order-2' : ''
                }`}
              >
                <div
                  className="group cursor-pointer"
                  // onClick={() => setSelectedProject(work)}
                >
                  <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                    <Image
                      src={work.image}
                      alt={work.title}
                      width={work.featured ? 800 : 600}
                      height={work.featured ? 600 : 450}
                      className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {work.featured && (
                      <div className="absolute top-6 left-6">
                        <span className="px-3 py-1 text-xs font-light rounded-full bg-white/10 text-white/80 backdrop-blur-sm border border-white/20">
                          Featured
                        </span>
                      </div>
                    )}

                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div
                className={`space-y-6 ${
                  work.featured ? '' : index % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-gray-500 font-light">
                      {work.year}
                    </span>
                    <span className="w-px h-4 bg-white/20"></span>
                    <span className="text-gray-400 font-light">
                      {work.scope}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-light text-white">
                    {work.title}
                  </h3>

                  <p className="text-gray-400 font-light text-lg">
                    {work.subtitle}
                  </p>
                </div>

                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-gray-500 font-light uppercase tracking-wider text-xs">
                      Challenge
                    </span>
                    <p className="text-gray-300 font-light mt-1 leading-relaxed">
                      {work.challenge}
                    </p>
                  </div>

                  <div>
                    <span className="text-gray-500 font-light uppercase tracking-wider text-xs">
                      Solution
                    </span>
                    <p className="text-gray-300 font-light mt-1 leading-relaxed">
                      {work.approach}
                    </p>
                  </div>

                  <div>
                    <span className="text-gray-500 font-light uppercase tracking-wider text-xs">
                      Impact
                    </span>
                    <p className="text-primary-400/80 font-light mt-1">
                      {work.outcome}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {work.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-light rounded-full bg-white/5 text-gray-500 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 pt-4">
                  {work.links.github && (
                    <a
                      href={work.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-light">Code</span>
                    </a>
                  )}
                  {work.links.live && (
                    <a
                      href={work.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                      <span className="text-sm font-light">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy */}
        <div className="mt-24 text-center">
          <div className="max-w-2xl mx-auto py-12 px-8 rounded-3xl bg-gradient-to-br from-white/[0.02] to-transparent border border-white/5">
            <p className="text-lg font-light text-gray-300 leading-relaxed italic">
              "Every project teaches something new about the balance between
              what users need and what technology can deliver. The best
              solutions feel inevitable in hindsight."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
