'use client';

import { useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const contactMethods = [
  {
    type: 'Primary',
    method: 'Email',
    value: 'michealobarewon2015@gmail.com',
    href: 'mailto:michealobarewon2015@gmail.com',
    description: 'Best for project discussions and detailed conversations',
  },
  {
    type: 'Quick',
    method: 'LinkedIn',
    value: 'Connect with me',
    href: 'https://www.linkedin.com/in/michealobarewon',
    description: 'For professional networking and brief introductions',
  },
  {
    type: 'Code',
    method: 'GitHub',
    value: 'See my work',
    href: 'https://github.com/skenpo2',
    description: 'Review my code and ongoing projects',
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    context: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitted(true);
    setIsSubmitting(false);

    // Reset after showing success
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', context: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: any) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (submitted) {
    return (
      <section id="contact" className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <div className="py-20">
              <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-500/30 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-primary-500/40"></div>
              </div>
              <h3 className="text-2xl font-light text-white mb-4">
                Message received
              </h3>
              <p className="text-gray-400 font-light">
                Thanks for reaching out. I'll review your message and respond
                within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        {/* Introduction */}
        <div className="text-center mb-20">
          <p className="text-sm font-light text-gray-500 uppercase tracking-[0.3em] mb-6">
            Let's Connect
          </p>
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto">
            Every good project starts
            <br />
            with a{' '}
            <span className="gradient-text font-normal">conversation</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-16 max-w-6xl mx-auto">
          {/* Contact Methods */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h3 className="text-xl font-light text-white/80 mb-8">
                Preferred Contact
              </h3>
              <div className="space-y-6">
                {contactMethods.map((contact, index) => (
                  <div key={index} className="group">
                    <a
                      href={contact.href}
                      target={
                        contact.href.startsWith('http') ? '_blank' : undefined
                      }
                      rel={
                        contact.href.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      className="block p-6 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent border border-white/5 hover:border-white/10 transition-all duration-500 group-hover:from-white/[0.04]"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <span className="text-xs font-light text-gray-500 uppercase tracking-wider">
                            {contact.type}
                          </span>
                          <h4 className="text-white font-medium mt-1">
                            {contact.method}
                          </h4>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-primary-400 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                      <p className="text-gray-400 font-light text-sm mb-2">
                        {contact.value}
                      </p>
                      <p className="text-gray-500 font-light text-xs leading-relaxed">
                        {contact.description}
                      </p>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="py-8 px-6 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent border border-white/5">
              <h4 className="text-white font-light mb-4">What to Expect</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-primary-400/60 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-400 font-light">
                    Initial response within 24 hours
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-primary-400/60 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-400 font-light">
                    Discovery call to understand your needs
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-primary-400/60 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-400 font-light">
                    Honest assessment of fit and timeline
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-light text-gray-400">
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-4 bg-transparent border-0 border-b border-white/20 focus:border-white/40 text-white placeholder-gray-500 transition-colors duration-300 focus:outline-none font-light"
                    placeholder="How should I address you?"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-light text-gray-400">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-4 bg-transparent border-0 border-b border-white/20 focus:border-white/40 text-white placeholder-gray-500 transition-colors duration-300 focus:outline-none font-light"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-light text-gray-400">
                  Project context
                </label>
                <select
                  name="context"
                  value={formState.context}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-white/20 focus:border-white/40 text-white transition-colors duration-300 focus:outline-none font-light"
                >
                  <option value="" className="bg-dark-900">
                    What brings you here?
                  </option>
                  <option value="new-project" className="bg-dark-900">
                    New project collaboration
                  </option>
                  <option value="consultation" className="bg-dark-900">
                    Technical consultation
                  </option>
                  <option value="team-addition" className="bg-dark-900">
                    Join your team
                  </option>
                  <option value="just-connecting" className="bg-dark-900">
                    Just connecting
                  </option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-light text-gray-400">
                  Tell me more
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-white/20 focus:border-white/40 text-white placeholder-gray-500 transition-colors duration-300 focus:outline-none font-light resize-none"
                  placeholder="Share your thoughts, challenges, or ideas. The more context you provide, the better I can understand how to help."
                />
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full text-white font-light transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending
                    </>
                  ) : (
                    <>
                      Send message
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-24">
          <p className="text-sm font-light text-gray-500 max-w-2xl mx-auto leading-relaxed">
            I believe the best work comes from understanding not just what needs
            to be built, but why it matters to the people who will use it.
            Looking forward to learning about your vision.
          </p>
        </div>
      </div>
    </section>
  );
}
