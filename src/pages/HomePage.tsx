import { Link } from 'react-router-dom';
import {
  ArrowRight,
  MapPin,
  ShoppingBag,
  Users,
  Truck,
  BarChart3,
  Globe,
  Sparkles,
  Target,
  Rocket,
  Lightbulb,
  TrendingUp,
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

function HeroSection() {
  return (
    <section className="relative gradient-hero min-h-screen flex items-center overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-section relative z-10 pt-32 pb-20">
        <div className="max-w-4xl">
          <div className="animate-fade-in-down">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-primary-300 text-sm font-medium border border-white/10 mb-8">
              <Sparkles size={14} />
              Innovation-Driven Technology Company
            </span>
          </div>

          <h1 className="heading-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-8 animate-fade-in-up">
            Building Africa's Future Through{' '}
            <span className="text-primary-400">Commerce</span>,{' '}
            <span className="text-accent-400">Digital Innovation</span>, and{' '}
            <span className="text-primary-300">Supply Chain Solutions</span>
          </h1>

          <p className="text-lg md:text-xl text-navy-200 leading-relaxed max-w-2xl mb-10 animate-fade-in-up delay-200" style={{ animationDelay: '200ms' }}>
            Qua Industries is an innovation-driven company developing technology solutions that
            strengthen commerce, empower businesses, improve distribution systems, and accelerate
            digital transformation across Africa.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <Link to="/products" className="btn-primary text-base px-8 py-4">
              Explore Our Solutions
              <ArrowRight size={18} />
            </Link>
            <Link to="/partners" className="btn-secondary text-base px-8 py-4 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:border-white/30">
              Partner With Us
            </Link>
          </div>

          {/* Product tags */}
          <div className="mt-12 flex flex-wrap items-center gap-3 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <span className="text-navy-300 text-sm">Our Products:</span>
            {['Buyoo', 'Qua Business', 'Qua Links'].map((name) => (
              <Link
                key={name}
                to="/products"
                className="px-4 py-1.5 bg-white/8 backdrop-blur-sm border border-white/10 rounded-full text-sm text-white/90 hover:bg-white/15 hover:text-white transition-all"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="section-padding gradient-mesh">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection animation="slide-in-left">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
              Who We Are
            </span>
            <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-navy-900 mb-6">
              Innovation That Creates{' '}
              <span className="gradient-text">Opportunities</span>
            </h2>
            <p className="text-navy-600 leading-relaxed mb-4">
              Qua Industries is a technology and innovation company focused on developing platforms
              and systems that solve challenges in commerce, business growth, and product
              distribution.
            </p>
            <p className="text-navy-600 leading-relaxed mb-6">
              We believe innovation should create opportunities, strengthen communities, and improve
              access to markets and digital tools.
            </p>
            <p className="text-navy-500 leading-relaxed mb-8 text-sm italic border-l-4 border-primary-300 pl-4">
              Our mission is to build solutions that empower entrepreneurs, businesses, and
              communities across Africa.
            </p>
            <Link to="/about" className="btn-primary">
              Learn More About Us
              <ArrowRight size={16} />
            </Link>
          </AnimatedSection>

          <AnimatedSection animation="slide-in-right" delay={200}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Globe, label: 'Across Africa', color: 'primary' },
                { icon: Lightbulb, label: 'Innovation-Led', color: 'accent' },
                { icon: Users, label: 'Community First', color: 'primary' },
                { icon: TrendingUp, label: 'Growth Driven', color: 'accent' },
              ].map(({ icon: Icon, label, color }, _i) => (
                <div
                  key={label}
                  className={`card-base p-6 text-center ${_i % 2 === 1 ? 'mt-8' : ''}`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center ${
                      color === 'primary'
                        ? 'bg-primary-50 text-primary-600'
                        : 'bg-accent-50 text-accent-600'
                    }`}
                  >
                    <Icon size={24} />
                  </div>
                  <span className="text-sm font-semibold text-navy-700">{label}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

const products = [
  {
    name: 'Buyoo',
    tagline: 'Local Commerce Reimagined',
    description:
      'Buyoo is a location-based marketplace connecting consumers with vendors and service providers within their communities.',
    focusAreas: ['Local marketplace', 'Vendor discovery', 'Service providers', 'Community commerce', 'Digital accessibility'],
    icon: ShoppingBag,
    color: 'primary' as const,
    gradient: 'from-primary-500 to-primary-700',
    bgLight: 'bg-primary-50',
    textColor: 'text-primary-600',
    borderColor: 'border-primary-200',
    image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Qua Business',
    tagline: 'Empowering African Businesses Through Digitalization',
    description:
      'Qua Business is a platform designed to support entrepreneurs, startups, and businesses with digital tools and services that enable growth and transformation.',
    focusAreas: ['Business digitalization', 'SME support solutions', 'Digital tools', 'Entrepreneur ecosystem', 'Business growth'],
    icon: BarChart3,
    color: 'accent' as const,
    gradient: 'from-accent-500 to-accent-700',
    bgLight: 'bg-accent-50',
    textColor: 'text-accent-600',
    borderColor: 'border-accent-200',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Qua Links',
    tagline: 'Transforming Food Distribution Through Technology',
    description:
      'Qua Links is a digital supply chain platform focused on improving food product movement, accessibility, and distribution networks.',
    focusAreas: ['Food supply chain systems', 'Distribution networks', 'Market access', 'Logistics coordination', 'Agricultural commerce'],
    icon: Truck,
    color: 'primary' as const,
    gradient: 'from-primary-600 to-navy-700',
    bgLight: 'bg-navy-50',
    textColor: 'text-navy-600',
    borderColor: 'border-navy-200',
    image: 'https://images.pexels.com/photos/2577164/pexels-photo-2577164.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

function ProductsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-section">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Ecosystem
          </span>
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-navy-900 mb-4">
            Our Products
          </h2>
          <p className="text-navy-500 max-w-2xl mx-auto">
            Each product in our ecosystem addresses a unique challenge, creating connected solutions
            that drive impact across Africa.
          </p>
        </AnimatedSection>

        <div className="space-y-12">
          {products.map((product, index) => (
            <AnimatedSection
              key={product.name}
              animation={index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}
              delay={index * 100}
            >
              <div
                className={`card-base overflow-hidden grid lg:grid-cols-2 gap-0 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div
                  className={`p-8 md:p-10 lg:p-12 ${
                    index % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <div
                    className={`w-14 h-14 rounded-xl ${product.bgLight} ${product.textColor} flex items-center justify-center mb-6`}
                  >
                    <product.icon size={28} />
                  </div>
                  <h3 className="heading-display text-2xl md:text-3xl text-navy-900 mb-2">
                    {product.name}
                  </h3>
                  <p className={`text-sm font-semibold ${product.textColor} mb-4`}>
                    {product.tagline}
                  </p>
                  <p className="text-navy-600 leading-relaxed mb-6">{product.description}</p>

                  <div className="mb-6">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-navy-400 mb-3">
                      Focus Areas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.focusAreas.map((area) => (
                        <span
                          key={area}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${product.bgLight} ${product.textColor}`}
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/products"
                    className={`inline-flex items-center gap-2 text-sm font-semibold ${product.textColor} hover:gap-3 transition-all`}
                  >
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>

                <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-20`} />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

const impactItems = [
  { icon: MapPin, text: 'Strengthening local commerce' },
  { icon: Users, text: 'Supporting entrepreneurs' },
  { icon: Truck, text: 'Improving supply chains' },
  { icon: Rocket, text: 'Advancing digital transformation' },
  { icon: Target, text: 'Driving economic inclusion' },
];

function ImpactSection() {
  return (
    <section className="section-padding bg-navy-900 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-section relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection animation="slide-in-left">
            <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
              Creating Systems That Matter
            </span>
            <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl mb-6">
              We Are Not Simply Building Platforms
            </h2>
            <p className="text-navy-300 leading-relaxed mb-8">
              At Qua Industries, we are creating ecosystems that support businesses, improve market
              access, and generate opportunities.
            </p>

            <div className="space-y-4">
              {impactItems.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-600/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600/30 transition-colors">
                    <Icon size={20} className="text-primary-400" />
                  </div>
                  <span className="text-navy-200 font-medium">{text}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scale-in" delay={200}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Team collaboration"
                  className="w-full h-80 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary-600 rounded-2xl p-6 shadow-xl">
                <div className="text-3xl font-display font-bold text-white">3+</div>
                <div className="text-primary-200 text-sm">Products</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-accent-500 rounded-2xl p-6 shadow-xl">
                <div className="text-3xl font-display font-bold text-navy-900">1</div>
                <div className="text-accent-700 text-sm">Mission</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function VisionMissionSection() {
  return (
    <section className="section-padding gradient-mesh">
      <div className="container-section">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Vision & Mission
          </span>
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-navy-900">
            Where We Are Going
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection animation="fade-in-up" delay={0}>
            <div className="card-base p-8 md:p-10 h-full border-l-4 border-l-primary-500">
              <div className="w-14 h-14 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6">
                <Target size={28} />
              </div>
              <h3 className="heading-display text-2xl text-navy-900 mb-4">Our Vision</h3>
              <p className="text-navy-600 leading-relaxed">
                To become a leading African innovation company building systems that transform
                commerce, empower businesses, and create sustainable opportunities.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={200}>
            <div className="card-base p-8 md:p-10 h-full border-l-4 border-l-accent-500">
              <div className="w-14 h-14 rounded-xl bg-accent-50 text-accent-600 flex items-center justify-center mb-6">
                <Rocket size={28} />
              </div>
              <h3 className="heading-display text-2xl text-navy-900 mb-4">Our Mission</h3>
              <p className="text-navy-600 leading-relaxed">
                To develop technology-driven solutions that improve market access, strengthen
                distribution networks, accelerate digital adoption, and support economic growth
                across Africa.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-section">
        <AnimatedSection>
          <div className="relative rounded-3xl gradient-hero overflow-hidden p-12 md:p-16 text-center">
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-500/15 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-white mb-6">
                Join Us In Building Africa's Future
              </h2>
              <p className="text-navy-200 text-lg max-w-2xl mx-auto mb-10">
                Partner with Qua Industries as we build solutions that connect people, businesses,
                and opportunities.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-accent text-base px-8 py-4">
                  Contact Us
                  <ArrowRight size={18} />
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
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ProductsSection />
      <ImpactSection />
      <VisionMissionSection />
      <CTASection />
    </>
  );
}
