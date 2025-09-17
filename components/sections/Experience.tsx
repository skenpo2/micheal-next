const chapters = [
  {
    era: 'April – Aug 2015 ',
    role: 'Full-Stack Developer Intern',
    organization: 'Checkslate',
    setting: 'Remote',
    narrative:
      'At Checkslate, I contributed to building a skill-sharing escrow platform where trust and scalability were critical. It was a crash course in combining frontend finesse with backend robustness.',
    impact: [
      'Built and maintained full-stack features with React, Redux Toolkit, and Tailwind CSS',
      'Led backend intern team to design APIs and infrastructure using Express.js and MongoDB',
      'Implemented JWT authentication with RBAC, real-time messaging, and Google OAuth2',
      'Integrated Paystack for payments and Dojah for KYC identity verification',
      'Optimized performance with Redis caching and CDN delivery for media assets',
    ],
    essence: 'Scalable Full-Stack Systems',
    tools: ['React', 'Redux Toolkit', 'Express.js', 'MongoDB', 'Redis', 'AWS'],
  },
  {
    era: 'April – September 2025',
    role: 'Backend Developer Intern',
    organization: 'Learnverrse',
    setting: 'Remote',
    narrative:
      'At Learnverrse, I worked on a learning management system tailored for Nigeria’s edtech space, focusing on secure content delivery and modular backend design.',
    impact: [
      'Designed modular APIs and backend services for a course management MVP',
      'Integrated AWS S3 and CloudFront for secure content storage and delivery',
      'Deployed backend services and streamlined workflows on AWS infrastructure',
      'Collaborated with frontend, cybersecurity, and product design teams',
    ],
    essence: 'Backend & Cloud Engineering',
    tools: ['Node.js', 'Express', 'AWS S3', 'CloudFront', 'REST APIs'],
  },
  {
    era: '2024 – 2025',
    role: 'Personal Projects',
    organization: 'Portfolio & Open Source',
    setting: 'Self-Directed',
    narrative:
      'I redesigned and built my personal portfolio in Next.js 15, treating it like a production app to practice modern web development workflows.',
    impact: [
      'Implemented modern Next.js 15 app with server components and optimized image handling',
      'Experimented with SEO features like Open Graph metadata and dynamic routing',
      'Practiced responsive design and component reuse with Tailwind CSS',
      'Shared learnings and experiments via GitHub and personal blog posts',
    ],
    essence: 'Continuous Learning & Experimentation',
    tools: ['Next.js', 'React', 'Tailwind CSS', 'Vercel', 'GitHub'],
  },
  {
    era: '2024 – 2025',
    role: 'Volunteer / Club Lead',
    organization: 'NYSC & Do Deel CDS Group',
    setting: 'Enugu, Nigeria',
    narrative:
      'During my service year, I balanced community engagement with technology leadership, teaching programming to students while coordinating digital security sensitization campaigns.',
    impact: [
      'Taught secondary school students fundamentals of computing and Scratch programming',
      'Led Do Deel CDS group as President, introducing weekly knowledge-sharing sessions',
      'Planned community sensitization on digital security and online safety',
      'Drafted reports, coordinated volunteers, and facilitated leadership transitions',
    ],
    essence: 'Tech Leadership & Community Impact',
    tools: ['Scratch', 'Leadership', 'Teamwork', 'Community Outreach'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        {/* Soft Introduction */}
        <div className="text-center mb-24">
          <p className="text-sm font-light text-gray-500 uppercase tracking-[0.3em] mb-6">
            Professional Evolution
          </p>
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto">
            Each role shaped how I think
            <br />
            about{' '}
            <span className="gradient-text font-normal">building software</span>
          </h2>
        </div>

        {/* Experience Narrative */}
        <div className="max-w-5xl mx-auto space-y-20">
          {chapters.map((chapter, index) => (
            <div key={index} className="relative">
              {/* Timeline connector */}
              {index < chapters.length - 1 && (
                <div className="absolute left-4 md:left-20 top-32 w-px h-20 bg-gradient-to-b from-white/20 to-transparent"></div>
              )}

              <div className="grid md:grid-cols-5 gap-8 md:gap-12">
                {/* Era & Meta */}
                <div className="md:col-span-2 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary-400"></div>
                    <span className="text-sm font-light text-gray-500 uppercase tracking-wider">
                      {chapter.era}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-white mb-1">
                      {chapter.role}
                    </h3>
                    <p className="text-gray-400 font-light">
                      {chapter.organization}
                    </p>
                    <p className="text-gray-500 text-sm">{chapter.setting}</p>
                  </div>

                  <div className="pt-4">
                    <span className="text-xs font-light text-primary-400/80 uppercase tracking-wider">
                      {chapter.essence}
                    </span>
                  </div>
                </div>

                {/* Story & Impact */}
                <div className="md:col-span-3 space-y-8">
                  {/* Narrative */}
                  <div className="space-y-4">
                    <p className="text-gray-300 font-light leading-relaxed italic text-lg">
                      "{chapter.narrative}"
                    </p>
                  </div>

                  {/* Key Impact */}
                  <div className="space-y-3">
                    {chapter.impact.map((point, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full bg-white/30 mt-3 flex-shrink-0"></div>
                        <p className="text-gray-400 font-light">{point}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {chapter.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-light rounded-full bg-white/5 text-gray-500 border border-white/5"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Section */}
        <div className="mt-24 max-w-3xl mx-auto">
          <div className="py-12 px-8 rounded-3xl bg-gradient-to-br from-white/[0.02] to-transparent border border-white/5">
            <div className="text-center space-y-6">
              <h3 className="text-xl font-light text-white/80">
                What I've Learned
              </h3>
              <p className="text-gray-300 font-light leading-relaxed text-lg">
                Great software isn't built by individuals—it emerges from teams
                that understand both the technical landscape and the human needs
                they're serving. My role has evolved from implementer to
                translator, helping bridge the gap between what's possible and
                what's valuable.
              </p>

              <div className="pt-6">
                <p className="text-sm font-light text-gray-500">
                  Currently exploring opportunities that blend technical
                  leadership with product strategy
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle CTA */}
        <div className="text-center mt-16">
          <div className="space-y-4">
            <p className="text-gray-400 font-light">
              Interested in working together?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-3 rounded-full text-sm font-light text-white bg-white/5 hover:bg-white/10 transition-colors duration-300 border border-white/10"
              >
                Start a conversation
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1SzOCIU3Dk5zq25dnHDKmZc5n4pfvUnRm"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full text-sm font-light text-gray-400 hover:text-white transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
