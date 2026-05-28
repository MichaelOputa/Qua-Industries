import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShoppingBag,
  BarChart3,
  Truck,
  Film,
  MapPin,
  Users,
  TrendingUp,
  Package,
  Radio,
  ExternalLink,
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { useScrollToTop } from '../hooks/useAnimations';

const products = [
  {
    name: 'Qua Business',
    tagline: 'Empowering African Businesses Through Digitalization',
    description:
      'Qua Business is a platform designed to support entrepreneurs, startups, and businesses with digital tools and services that enable growth and transformation. The platform helps businesses access opportunities, improve operations, and adapt to the digital economy.',
    focusAreas: ['Business digitalization', 'SME support solutions', 'Digital tools', 'Entrepreneur ecosystem', 'Business growth'],
    icon: BarChart3,
    color: 'accent' as const,
    gradient: 'from-accent-500 to-accent-700',
    bgLight: 'bg-accent-50',
    textColor: 'text-accent-600',
    bgIcon: 'bg-accent-100',
    features: [
      { icon: TrendingUp, text: 'Access growth opportunities and markets' },
      { icon: BarChart3, text: 'Improve business operations digitally' },
      { icon: Users, text: 'Join a thriving entrepreneur ecosystem' },
    ],
    image: '/Qua_Business.jpeg',
    externalLink: 'https://qua-business.vercel.app/',
    comingSoon: false,
  },
  {
    name: 'Buyoo',
    tagline: 'Local Commerce Reimagined',
    description:
      'Buyoo is a location-based marketplace connecting consumers with vendors and service providers within their communities. The platform helps users discover nearby businesses, access products and services faster, and promote local economic growth.',
    focusAreas: ['Local marketplace', 'Vendor discovery', 'Service providers', 'Community commerce', 'Digital accessibility'],
    icon: ShoppingBag,
    color: 'primary' as const,
    gradient: 'from-primary-500 to-primary-700',
    bgLight: 'bg-primary-50',
    textColor: 'text-primary-600',
    bgIcon: 'bg-primary-100',
    features: [
      { icon: MapPin, text: 'Discover nearby businesses and vendors' },
      { icon: ShoppingBag, text: 'Access local products and services faster' },
      { icon: Users, text: 'Connect with your community marketplace' },
    ],
    image: '/buyoo.jpeg',
    externalLink: null,
    comingSoon: true,
  },
  {
    name: 'Qua Links',
    tagline: 'Transforming Food Distribution Through Technology',
    description:
      'Qua Links is a digital supply chain platform focused on improving food product movement, accessibility, and distribution networks. The platform works toward creating efficient connections between producers, suppliers, distributors, and markets.',
    focusAreas: ['Food supply chain systems', 'Distribution networks', 'Market access', 'Logistics coordination', 'Agricultural commerce'],
    icon: Truck,
    color: 'primary' as const,
    gradient: 'from-primary-600 to-navy-700',
    bgLight: 'bg-navy-50',
    textColor: 'text-navy-600',
    bgIcon: 'bg-navy-100',
    features: [
      { icon: Package, text: 'Streamline food product movement' },
      { icon: Truck, text: 'Connect producers to markets efficiently' },
      { icon: MapPin, text: 'Improve distribution network accessibility' },
    ],
    image: '/Qua_Links.jpeg',
    externalLink: null,
    comingSoon: true,
  },
];

export default function ProductsPage() {
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
              <Package size={14} />
              Our Ecosystem
            </span>
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.1]">
              Products That{' '}
              <span className="text-primary-400">Transform Industries</span>
            </h1>
            <p className="text-navy-200 text-lg leading-relaxed max-w-2xl">
              Each product in our ecosystem addresses a unique challenge, creating connected
              solutions that drive impact across commerce, business, and supply chains in Africa.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Products */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="space-y-20">
            {products.map((product, index) => (
              <AnimatedSection
                key={product.name}
                animation="fade-in-up"
                delay={0}
              >
                <div
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div
                      className={`w-16 h-16 rounded-2xl ${product.bgIcon} ${product.textColor} flex items-center justify-center mb-6`}
                    >
                      <product.icon size={32} />
                    </div>

                    <h2 className="heading-display text-3xl md:text-4xl text-navy-900 mb-2">
                      {product.name}
                    </h2>
                    {product.comingSoon && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        Coming Soon
                      </span>
                    )}
                    <p className={`text-base font-semibold ${product.textColor} mb-4`}>
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
                            className={`px-3 py-1.5 rounded-full text-xs font-medium ${product.bgLight} ${product.textColor}`}
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3 mb-8">
                      {product.features.map(({ icon: FeatureIcon, text }) => (
                        <div key={text} className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg ${product.bgLight} ${product.textColor} flex items-center justify-center flex-shrink-0`}>
                            <FeatureIcon size={16} />
                          </div>
                          <span className="text-navy-600 text-sm">{text}</span>
                        </div>
                      ))}
                    </div>

                    {product.externalLink && (
                      <a
                        href={product.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-md ${product.bgLight} ${product.textColor} border border-current/10 hover:opacity-90`}
                      >
                        <ExternalLink size={16} />
                        Visit Qua Business Platform
                      </a>
                    )}
                  </div>

                  <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-72 md:h-96 object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-20`} />
                    </div>
                    {product.externalLink && (
                      <a
                        href={product.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-accent-700 hover:bg-white transition-all shadow-md"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        Live Now
                      </a>
                    )}
                    {product.comingSoon && (
                      <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-amber-700 shadow-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        Coming Soon
                      </div>
                    )}
                  </div>
                </div>

                {index < products.length - 1 && (
                  <div className="mt-20 border-b border-navy-100" />
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-mesh">
        <div className="container-section">
          <AnimatedSection className="text-center">
            <h2 className="heading-display text-3xl md:text-4xl text-navy-900 mb-6">
              Interested in Our Products?
            </h2>
            <p className="text-navy-500 max-w-xl mx-auto mb-8">
              Get in touch to learn how our platforms can help your business grow.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary text-base px-8 py-4">
                Get In Touch <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn-secondary text-base px-8 py-4">
                View Our Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}