import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShoppingBag,
  Monitor,
  Truck,
  Lightbulb,
  CheckCircle2,
  Globe,
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { useScrollToTop } from '../hooks/useAnimations';

const services = [
  {
    icon: ShoppingBag,
    title: 'Commerce Solutions',
    description:
      'Building digital systems that improve market access and local trade. We create platforms that connect buyers and sellers, streamline transactions, and open new opportunities for businesses across Africa.',
    features: [
      'Digital marketplace development',
      'Local commerce platform design',
      'Market access infrastructure',
      'Trade facilitation systems',
    ],
    color: 'primary' as const,
    bgLight: 'bg-primary-50',
    textColor: 'text-primary-600',
    bgIcon: 'bg-primary-100',
    borderAccent: 'border-primary-500',
  },
  {
    icon: Monitor,
    title: 'Business Digitalization',
    description:
      'Helping businesses adopt technology and improve operations. We support entrepreneurs and SMEs in their digital transformation journey with tools, platforms, and services designed for African markets.',
    features: [
      'Digital transformation strategy',
      'SME technology adoption support',
      'Business process optimization',
      'Digital tools deployment',
    ],
    color: 'accent' as const,
    bgLight: 'bg-accent-50',
    textColor: 'text-accent-600',
    bgIcon: 'bg-accent-100',
    borderAccent: 'border-accent-500',
  },
  {
    icon: Truck,
    title: 'Supply Chain Development',
    description:
      'Creating efficient product distribution and logistics systems. We build digital infrastructure that connects producers, distributors, and markets to improve food accessibility and reduce inefficiencies.',
    features: [
      'Supply chain platform design',
      'Distribution network optimization',
      'Logistics coordination systems',
      'Market connectivity solutions',
    ],
    color: 'primary' as const,
    bgLight: 'bg-navy-50',
    textColor: 'text-navy-600',
    bgIcon: 'bg-navy-100',
    borderAccent: 'border-navy-500',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Development',
    description:
      'Researching and developing practical technology solutions. We identify challenges across African industries and create innovative, technology-driven approaches to solve them.',
    features: [
      'Technology research and development',
      'Innovation lab initiatives',
      'Prototype and MVP development',
      'Market-driven solution design',
    ],
    color: 'accent' as const,
    bgLight: 'bg-accent-50',
    textColor: 'text-accent-600',
    bgIcon: 'bg-accent-100',
    borderAccent: 'border-accent-500',
  },
];

export default function ServicesPage() {
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
              What We Do
            </span>
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.1]">
              Solutions That{' '}
              <span className="text-primary-400">Drive Progress</span>
            </h1>
            <p className="text-navy-200 text-lg leading-relaxed max-w-2xl">
              We develop technology-driven solutions that address real challenges in commerce,
              business growth, and supply chain development across Africa.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Services Grid */}
      <section className="section-padding gradient-mesh">
        <div className="container-section">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} animation="fade-in-up" delay={index * 100}>
                <div className={`card-base p-8 md:p-10 h-full border-l-4 ${service.borderAccent}`}>
                  <div
                    className={`w-14 h-14 rounded-xl ${service.bgIcon} ${service.textColor} flex items-center justify-center mb-6`}
                  >
                    <service.icon size={28} />
                  </div>

                  <h3 className="heading-display text-2xl text-navy-900 mb-4">{service.title}</h3>
                  <p className="text-navy-600 leading-relaxed mb-6">{service.description}</p>

                  <div className="space-y-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle2 size={16} className={service.textColor} />
                        <span className="text-navy-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent-500/8 rounded-full blur-3xl" />
        </div>

        <div className="container-section relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Approach
            </span>
            <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl mb-4">
              How We Build
            </h2>
            <p className="text-navy-300 max-w-2xl mx-auto">
              We follow a structured approach to deliver impactful solutions.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Identify', desc: 'Understand the challenge and market needs' },
              { step: '02', title: 'Design', desc: 'Create solutions tailored for African markets' },
              { step: '03', title: 'Build', desc: 'Develop robust, scalable technology platforms' },
              { step: '04', title: 'Scale', desc: 'Expand impact across communities and regions' },
            ].map(({ step, title, desc }, index) => (
              <AnimatedSection key={step} animation="fade-in-up" delay={index * 150}>
                <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-2xl p-6 hover:bg-navy-800/70 transition-all duration-300">
                  <span className="text-primary-400 font-display font-bold text-3xl mb-3 block">
                    {step}
                  </span>
                  <h3 className="font-display font-bold text-lg mb-2">{title}</h3>
                  <p className="text-navy-300 text-sm leading-relaxed">{desc}</p>
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
                  Ready to Work Together?
                </h2>
                <p className="text-navy-200 text-lg max-w-2xl mx-auto mb-10">
                  Whether you need commerce solutions, digital transformation, or supply chain
                  development, we are ready to help.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/contact" className="btn-accent text-base px-8 py-4">
                    Contact Us <ArrowRight size={18} />
                  </Link>
                  <Link to="/partners" className="btn-secondary text-base px-8 py-4 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                    Partner With Us
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
