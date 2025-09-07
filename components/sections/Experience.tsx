import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    period: '2022 - Present',
    type: 'Full-time',
    description: [
      'Led development of microservices architecture serving 1M+ users',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Mentored 5+ junior developers and conducted code reviews',
      'Built responsive web applications using React, Next.js, and TypeScript',
    ],
    technologies: [
      'React',
      'Next.js',
      'Node.js',
      'AWS',
      'Docker',
      'PostgreSQL',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    location: 'Austin, TX',
    period: '2020 - 2022',
    type: 'Full-time',
    description: [
      'Developed and maintained 10+ web applications from concept to deployment',
      'Collaborated with design team to implement pixel-perfect UI components',
      'Optimized application performance resulting in 40% faster load times',
      'Integrated third-party APIs and payment gateways',
    ],
    technologies: [
      'Vue.js',
      'Python',
      'Django',
      'MongoDB',
      'Redis',
      'Stripe API',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Agency Pro',
    location: 'Remote',
    period: '2019 - 2020',
    type: 'Contract',
    description: [
      'Built responsive websites for 20+ clients across various industries',
      'Implemented modern JavaScript frameworks and build tools',
      'Collaborated with designers to translate mockups into interactive experiences',
      'Maintained cross-browser compatibility and accessibility standards',
    ],
    technologies: [
      'JavaScript',
      'React',
      'SCSS',
      'Webpack',
      'Figma',
      'WordPress',
    ],
  },
  {
    title: 'Junior Web Developer',
    company: 'WebSolutions Inc',
    location: 'New York, NY',
    period: '2018 - 2019',
    type: 'Full-time',
    description: [
      'Assisted in development of e-commerce platforms and CMS solutions',
      'Fixed bugs and implemented new features based on client feedback',
      'Learned modern development practices and agile methodologies',
      'Contributed to team projects using version control and collaboration tools',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'jQuery'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-dark-800/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and the impact I&apos;ve made along the way
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500"></div>

            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full border-4 border-dark-900 z-10"></div>

                {/* Content Card */}
                <div
                  className={`ml-20 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}
                >
                  <div className="glass-morphism rounded-xl p-6 card-hover">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 text-xs font-medium bg-primary-500/20 text-primary-300 rounded-full">
                          {experience.type}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold text-white mb-1">
                        {experience.title}
                      </h3>

                      <div className="flex items-center gap-4 text-gray-400 text-sm mb-2">
                        <span className="font-medium text-primary-400">
                          {experience.company}
                        </span>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {experience.location}
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <Calendar className="w-3 h-3" />
                        {experience.period}
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-4 text-gray-300 text-sm">
                      {experience.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium glass-morphism rounded-full text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass-morphism rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Want to work together?
            </h3>
            <p className="text-gray-300 mb-6">
              I&apos;m always open to discussing new opportunities and exciting
              projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/resume.pdf"
                download
                className="btn-primary flex items-center gap-2 justify-center"
              >
                <ExternalLink className="w-4 h-4" />
                Download Resume
              </a>
              <a href="#contact" className="btn-secondary">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
