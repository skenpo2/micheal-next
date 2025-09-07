import Image from 'next/image';
import { Code2, Coffee, Lightbulb, Users } from 'lucide-react';

const stats = [
  { icon: Code2, label: 'Projects Completed', value: '50+' },
  { icon: Coffee, label: 'Cups of Coffee', value: '1000+' },
  { icon: Lightbulb, label: 'Ideas Implemented', value: '100+' },
  { icon: Users, label: 'Happy Clients', value: '25+' },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-dark-800/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate developer with a love for creating innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-600 rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative glass-morphism rounded-2xl p-2">
                <Image
                  src="https://res.cloudinary.com/dghp0dumz/image/upload/v1757271754/about-removebg-preview_swwnyu.png"
                  alt="Micheal"
                  width={400}
                  height={400}
                  className="rounded-xl object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              Full Stack Developer & Problem Solver
            </h3>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                With over 5 years of experience in web development, I specialize
                in building scalable applications using modern technologies. My
                journey began with a curiosity for how websites work, and it has
                evolved into a passion for creating digital experiences that
                make a difference.
              </p>

              <p>
                I believe in writing clean, maintainable code and staying
                up-to-date with the latest industry trends. When I&apos;m not
                coding, you&apos;ll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>

              <p>
                My approach combines technical expertise with creative
                problem-solving, ensuring that every project I work on not only
                functions flawlessly but also provides an exceptional user
                experience.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-4 py-2 glass-morphism rounded-full text-sm text-primary-300">
                Problem Solver
              </span>
              <span className="px-4 py-2 glass-morphism rounded-full text-sm text-secondary-300">
                Team Player
              </span>
              <span className="px-4 py-2 glass-morphism rounded-full text-sm text-primary-300">
                Continuous Learner
              </span>
              <span className="px-4 py-2 glass-morphism rounded-full text-sm text-secondary-300">
                Open Source Contributor
              </span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 glass-morphism rounded-xl card-hover"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
