'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Github, Filter } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution with advanced features like real-time inventory, payment processing, and admin dashboard.',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    category: 'Full Stack',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Prisma'],
    github: 'https://github.com/johndoe/ecommerce-platform',
    live: 'https://ecommerce-demo.johndoe.dev',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'Collaborative task management application with real-time updates, team collaboration, and advanced filtering options.',
    image:
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    category: 'Frontend',
    technologies: ['React', 'Redux', 'Socket.io', 'Material-UI'],
    github: 'https://github.com/johndoe/task-manager',
    live: 'https://taskflow.johndoe.dev',
    featured: true,
  },
  {
    id: 3,
    title: 'Weather Analytics Dashboard',
    description:
      'Real-time weather analytics dashboard with interactive charts, forecasting, and location-based insights.',
    image:
      'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
    category: 'Frontend',
    technologies: ['Vue.js', 'D3.js', 'Express.js', 'Weather API'],
    github: 'https://github.com/johndoe/weather-dashboard',
    live: 'https://weather.johndoe.dev',
    featured: false,
  },
  {
    id: 4,
    title: 'Social Media API',
    description:
      'RESTful API for social media platform with authentication, post management, and real-time messaging capabilities.',
    image:
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
    category: 'Backend',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Socket.io'],
    github: 'https://github.com/johndoe/social-api',
    live: 'https://api-social.johndoe.dev',
    featured: false,
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description:
      'Modern, responsive portfolio website built with the latest web technologies and optimized for performance.',
    image:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
    category: 'Frontend',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    github: 'https://github.com/johndoe/portfolio',
    live: 'https://johndoe.dev',
    featured: true,
  },
  {
    id: 6,
    title: 'Data Visualization Tool',
    description:
      'Interactive data visualization tool for business analytics with multiple chart types and export capabilities.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    category: 'Full Stack',
    technologies: ['React', 'Python', 'Flask', 'Chart.js', 'Pandas'],
    github: 'https://github.com/johndoe/data-viz',
    live: 'https://dataviz.johndoe.dev',
    featured: false,
  },
];

const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'All' || project.category === activeCategory
  );

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            A showcase of my recent work and personal projects
          </p>

          {/* Category Filter */}
          <div className="flex justify-center">
            <div className="glass-morphism rounded-lg p-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className={`glass-morphism rounded-xl overflow-hidden card-hover ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                )}

                {/* Overlay Links */}
                <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass-morphism rounded-full hover:bg-white/20 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass-morphism rounded-full hover:bg-white/20 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 text-xs font-medium bg-primary-500/20 text-primary-300 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs glass-morphism rounded text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {filteredProjects.length > 6 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-secondary"
            >
              {showAll
                ? 'Show Less'
                : `Show More (${filteredProjects.length - 6} more)`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
