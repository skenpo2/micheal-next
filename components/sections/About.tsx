import Image from 'next/image';

const principles = [
  {
    title: 'Applied Intelligence',
    description:
      'Exploring how AI and ML can enhance decision-making and unlock new possibilities in software systems.',
  },
  {
    title: 'Scalable Engineering',
    description:
      'Designing solutions that adapt to growth, handle complexity, and remain reliable at scale.',
  },
  {
    title: 'Human-Centered AI',
    description:
      'Ensuring intelligent systems empower users, respecting human values and agency.',
  },
];

const journey = [
  {
    phase: 'Foundation',
    period: '2019-2020',
    insight:
      'Fell in love with the logic of code and the possibilities of software engineering.',
  },
  {
    phase: 'Exploration',
    period: '2021-2022',
    insight:
      'Discovered AI and Machine Learning—realized technology can learn, adapt, and predict.',
  },
  {
    phase: 'Focus',
    period: '2023-Present',
    insight:
      'Pursuing full-stack engineering while integrating AI to build smarter, more adaptive systems.',
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        {/* Soft Introduction */}
        <div className="text-center mb-20">
          <p className="text-sm font-light text-gray-500 uppercase tracking-[0.3em] mb-6">
            Behind the Code
          </p>
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto">
            Building intelligent systems is really about
            <br />
            understanding{' '}
            <span className="gradient-text font-normal">people and data</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-16 items-start mb-24">
          {/* Image Section */}
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <div className="relative">
                <div className="w-full max-w-sm mx-auto">
                  <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                    <Image
                      src="https://res.cloudinary.com/dghp0dumz/image/upload/v1758302293/IMG-20250919-WA0011_edu76a.jpg"
                      alt="Micheal Obarewon - Software Engineer & AI Enthusiast"
                      width={400}
                      height={400}
                      className="w-full h-auto object-cover opacity-90"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-3 space-y-12">
            {/* Main Story */}
            <div className="space-y-6">
              <p className="text-lg font-light text-gray-300 leading-relaxed">
                I see software engineering as more than writing code—it’s about
                solving problems and pushing the boundaries of what’s possible.
                My curiosity led me to explore Artificial Intelligence and
                Machine Learning, where software doesn’t just run—it learns,
                adapts, and grows.
              </p>

              <p className="text-lg font-light text-gray-300 leading-relaxed">
                I’m particularly interested in how AI can be applied in
                full-stack systems: from intelligent backend services that scale
                with demand to frontend experiences that feel intuitive and
                personalized.
              </p>
            </div>

            {/* Principles */}
            <div className="space-y-8">
              <h3 className="text-xl font-light text-white/80">
                What Guides My Work
              </h3>
              <div className="space-y-6">
                {principles.map((principle, index) => (
                  <div key={index} className="border-l border-white/10 pl-6">
                    <h4 className="text-white font-medium mb-2">
                      {principle.title}
                    </h4>
                    <p className="text-gray-400 font-light">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Focus */}
            <div className="py-8 px-8 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent border border-white/5">
              <h3 className="text-xl font-light text-white/80 mb-4">
                Currently
              </h3>
              <p className="text-gray-300 font-light leading-relaxed mb-6">
                I’m focused on blending full-stack engineering with Artificial
                Intelligence—exploring how ML models, data pipelines, and modern
                web frameworks can come together to build smarter, more reliable
                applications.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 text-xs font-light rounded-full bg-white/5 text-gray-400 border border-white/5">
                  AI & ML Engineering
                </span>
                <span className="px-3 py-1 text-xs font-light rounded-full bg-white/5 text-gray-400 border border-white/5">
                  Full-Stack Development
                </span>
                <span className="px-3 py-1 text-xs font-light rounded-full bg-white/5 text-gray-400 border border-white/5">
                  Data-Driven Systems
                </span>
                <span className="px-3 py-1 text-xs font-light rounded-full bg-white/5 text-gray-400 border border-white/5">
                  Mathematics Background
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-light text-center text-white/80 mb-16">
            The Journey
          </h3>
          <div className="space-y-12">
            {journey.map((stage, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center gap-8"
              >
                <div className="md:w-32 flex-shrink-0">
                  <div className="text-sm font-light text-gray-500 uppercase tracking-wider">
                    {stage.period}
                  </div>
                  <div className="text-lg text-white/70 font-light mt-1">
                    {stage.phase}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="h-px bg-gradient-to-r from-white/20 to-transparent mb-4"></div>
                  <p className="text-gray-300 font-light italic">
                    {stage.insight}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
