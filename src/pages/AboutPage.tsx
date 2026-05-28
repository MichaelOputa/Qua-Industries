import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Lightbulb,
  Heart,
  TrendingUp,
  Handshake,
  Shield,
  Globe,
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { useScrollToTop } from '../hooks/useAnimations';

const coreValues = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We create solutions that solve real problems.',
    color: 'primary',
  },
  {
    icon: Heart,
    title: 'Impact',
    description: 'We build systems that improve lives and communities.',
    color: 'accent',
  },
  {
    icon: TrendingUp,
    title: 'Growth',
    description: 'We support entrepreneurship and economic development.',
    color: 'primary',
  },
  {
    icon: Handshake,
    title: 'Collaboration',
    description: 'We believe progress is achieved together.',
    color: 'accent',
  },
  {
    icon: Shield,
    title: 'Sustainability',
    description: 'We focus on long-term value creation.',
    color: 'primary',
  },
];

export default function AboutPage() {
  useScrollToTop();

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent-500/8 rounded-full blur-3xl" />
        </div>

        <div className="container-section relative z-10">
          <AnimatedSection className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-primary-300 text-sm font-medium border border-white/10 mb-6">
              <Globe size={14} />
              About Qua Industries
            </span>
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.1]">
              Innovation and Technology for{' '}
              <span className="text-primary-400">Africa's Growth</span>
            </h1>
            <p className="text-navy-200 text-lg leading-relaxed max-w-2xl">
              Qua Industries is an innovation and technology company focused on commerce, digital
              transformation, and supply chain development.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Main Content */}
      <section className="section-padding gradient-mesh">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-in-left">
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
                Who We Are
              </span>
              <h2 className="heading-display text-3xl md:text-4xl text-navy-900 mb-6">
                Technology Should Create{' '}
                <span className="gradient-text">Impact and Opportunities</span>
              </h2>
              <p className="text-navy-600 leading-relaxed mb-4">
                Founded with a vision to solve practical challenges through technology, the company
                develops products and systems that improve how people trade, connect, distribute
                products, and grow businesses.
              </p>
              <p className="text-navy-600 leading-relaxed mb-4">
                We believe technology should not only digitize systems but also create impact and
                opportunities.
              </p>
              <p className="text-navy-600 leading-relaxed">
                By combining innovation with practical solutions, Qua Industries is building an
                ecosystem that supports entrepreneurs, communities, and economic development.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right" delay={200}>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="qua_people.jpeg"
                  alt="Team collaboration"
                  className="w-full h-80 md:h-96 object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-in-left" className="order-2 lg:order-1">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="qua_people.jpeg"
                    alt="Innovation workspace"
                    className="w-full h-80 md:h-96 object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary-600 rounded-2xl p-6 shadow-xl">
                  <div className="text-3xl font-display font-bold text-white">2024</div>
                  <div className="text-primary-200 text-sm">Founded</div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right" delay={200} className="order-1 lg:order-2">
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
                Our Story
              </span>
              <h2 className="heading-display text-3xl md:text-4xl text-navy-900 mb-6">
                From Vision to{' '}
                <span className="gradient-text">Lasting Impact</span>
              </h2>
              <p className="text-navy-600 leading-relaxed mb-4">
                Qua Industries began from a vision to create solutions that address everyday
                challenges experienced by businesses and communities.
              </p>
              <p className="text-navy-600 leading-relaxed mb-4">
                Recognizing the gaps in market access, digital inclusion, distribution systems, and
                business support across Africa, the company was established to build products capable
                of creating lasting impact.
              </p>
              <p className="text-navy-600 leading-relaxed">
                Today, Qua Industries continues to expand its ecosystem through innovation-driven
                platforms and strategic initiatives.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent-500/8 rounded-full blur-3xl" />
        </div>

        <div className="container-section relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
              Core Values
            </span>
            <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl mb-4">
              What Drives Us
            </h2>
            <p className="text-navy-300 max-w-2xl mx-auto">
              Our values define how we build, who we serve, and why we exist.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map(({ icon: Icon, title, description, color }, index) => (
              <AnimatedSection key={title} animation="fade-in-up" delay={index * 100}>
                <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-2xl p-6 text-center hover:bg-navy-800/70 transition-all duration-300 h-full">
                  <div
                    className={`w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center ${
                      color === 'primary'
                        ? 'bg-primary-600/20 text-primary-400'
                        : 'bg-accent-500/20 text-accent-400'
                    }`}
                  >
                    <Icon size={28} />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{title}</h3>
                  <p className="text-navy-300 text-sm leading-relaxed">{description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <AnimatedSection>
            <div className="relative rounded-3xl gradient-hero overflow-hidden p-12 md:p-16 text-center">
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl" />
              </div>
              <div className="relative z-10">
                <h2 className="heading-display text-3xl md:text-4xl text-white mb-6">
                  Ready to Build Together?
                </h2>
                <p className="text-navy-200 text-lg max-w-2xl mx-auto mb-10">
                  Discover how Qua Industries is transforming commerce and innovation across Africa.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/products" className="btn-accent text-base px-8 py-4">
                    Explore Products <ArrowRight size={18} />
                  </Link>
                  <Link to="/contact" className="btn-secondary text-base px-8 py-4 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
