import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  Rocket,
  Globe,
  Landmark,
  Handshake,
  Cpu,
  Truck,
  Users,
  Target,
  Heart,
  TrendingUp,
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { useScrollToTop } from '../hooks/useAnimations';

const partnerTypes = [
  {
    icon: Building2,
    label: 'Businesses',
    description: 'Companies seeking technology partnerships and market expansion',
  },
  {
    icon: Rocket,
    label: 'Startups',
    description: 'Early-stage ventures looking for ecosystem support and collaboration',
  },
  {
    icon: Globe,
    label: 'Development Organizations',
    description: 'Organizations focused on economic development and community impact',
  },
  {
    icon: Landmark,
    label: 'Investors',
    description: 'Impact investors and venture capital seeking African innovation',
  },
  {
    icon: Heart,
    label: 'NGOs',
    description: 'Non-profits working on digital inclusion and community empowerment',
  },
  {
    icon: Cpu,
    label: 'Technology Companies',
    description: 'Tech firms interested in African market collaboration and integration',
  },
  {
    icon: Truck,
    label: 'Supply Chain Stakeholders',
    description: 'Logistics and distribution companies seeking digital transformation',
  },
];

const partnershipBenefits = [
  {
    icon: Target,
    title: 'Shared Mission',
    description: 'Work alongside a team committed to creating lasting impact in Africa.',
  },
  {
    icon: Users,
    title: 'Ecosystem Access',
    description: 'Connect with our network of businesses, entrepreneurs, and communities.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Opportunities',
    description: 'Leverage our platforms and technology to scale your impact.',
  },
  {
    icon: Handshake,
    title: 'Collaborative Innovation',
    description: 'Co-create solutions that address real challenges across African markets.',
  },
];

export default function PartnersPage() {
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
              <Handshake size={14} />
              Partner With Us
            </span>
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.1]">
              Building{' '}
              <span className="text-primary-400">Together</span> for Africa's Future
            </h1>
            <p className="text-navy-200 text-lg leading-relaxed max-w-2xl">
              We welcome partnerships with organizations that share our vision of creating
              sustainable impact through technology and innovation.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Partner Types */}
      <section className="section-padding gradient-mesh">
        <div className="container-section">
          <AnimatedSection className="text-center mb-16">
            <h2 className="heading-display text-3xl md:text-4xl text-navy-900 mb-4">
              Who We Partner With
            </h2>
            <p className="text-navy-500 max-w-2xl mx-auto">
              We collaborate with diverse organizations across sectors to create comprehensive
              solutions for Africa's challenges.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {partnerTypes.map(({ icon: Icon, label, description }, index) => (
              <AnimatedSection key={label} animation="scale-in" delay={index * 80}>
                <div className="card-base p-6 text-center h-full hover:border-primary-200">
                  <div className="w-14 h-14 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mx-auto mb-4">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-display font-bold text-navy-900 mb-2">{label}</h3>
                  <p className="text-navy-500 text-sm leading-relaxed">{description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent-500/8 rounded-full blur-3xl" />
        </div>

        <div className="container-section relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-in-left">
              <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
                Why Partner With Us
              </span>
              <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl mb-6">
                Together, We Create{' '}
                <span className="text-primary-400">Sustainable Impact</span>
              </h2>
              <p className="text-navy-300 leading-relaxed mb-8">
                Partnership with Qua Industries means joining an ecosystem designed to create
                lasting change across African markets. We believe progress is achieved together.
              </p>
              <Link to="/contact" className="btn-primary">
                Start a Conversation <ArrowRight size={16} />
              </Link>
            </AnimatedSection>

            <div className="space-y-6">
              {partnershipBenefits.map(({ icon: Icon, title, description }, index) => (
                <AnimatedSection key={title} animation="slide-in-right" delay={index * 100}>
                  <div className="flex gap-4 bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-5 hover:bg-navy-800/70 transition-all">
                    <div className="w-12 h-12 rounded-lg bg-primary-600/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={24} className="text-primary-400" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg mb-1">{title}</h3>
                      <p className="text-navy-300 text-sm leading-relaxed">{description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
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
                  Ready to Make an Impact?
                </h2>
                <p className="text-navy-200 text-lg max-w-2xl mx-auto mb-10">
                  Connect with us to explore partnership opportunities and create sustainable change
                  across Africa.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/contact" className="btn-accent text-base px-8 py-4">
                    Contact Us <ArrowRight size={18} />
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
