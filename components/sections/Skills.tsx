'use client';

import { useState } from 'react';

const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'JavaScript', level: 95 },
      { name: 'HTML5', level: 98 },
      { name: 'CSS3', level: 90 },
      { name: 'Vue.js', level: 75 },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Python', level: 80 },
      { name: 'Express.js', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'GraphQL', level: 70 },
      { name: 'REST APIs', level: 90 },
      { name: 'Django', level: 65 },
    ],
  },
  {
    name: 'Tools & Others',
    skills: [
      { name: 'Git', level: 95 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 65 },
      { name: 'Firebase', level: 80 },
      { name: 'Figma', level: 75 },
      { name: 'Jest', level: 80 },
      { name: 'Webpack', level: 70 },
      { name: 'Linux', level: 75 },
    ],
  },
];

const techStack = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Python',
  'MongoDB',
  'PostgreSQL',
  'Tailwind CSS',
  'GraphQL',
  'Docker',
  'AWS',
  'Git',
  'Jest',
  'Express.js',
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        {/* Tech Stack Cloud */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-white">
            Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-6 py-3 glass-morphism rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-default"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Skills Categories */}
        <div className="max-w-6xl mx-auto">
          {/* Category Tabs */}
          <div className="flex justify-center mb-8">
            <div className="glass-morphism rounded-lg p-1">
              {skillCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                    activeCategory === index
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div
                key={index}
                className="glass-morphism rounded-lg p-6 card-hover"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium text-white">{skill.name}</span>
                  <span className="text-primary-400 font-semibold">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-dark-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.1 + 0.3}s`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
