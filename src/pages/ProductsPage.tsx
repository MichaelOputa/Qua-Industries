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
    logoSrc: 'data:image/jpeg;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//EAAL/2gAMAwEAAgADAAAAIQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhAzxyADigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT5arJDEunwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/1Z0iEKvJQSgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEf1VQfx4EmRZQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFZ0UR5KqNTSEwAAATy1xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEiDCeAFqYZAhAAAA+O8wwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFzTwgAAABI+ggAAA6KBAG9IAFo2ZQBVBRtGQgGyU5wAAAAAAAAAAAAAAAAAAAAAAAAAAAziKAAAAEuWwAAAA/ARV6y1wFFE06WVHsUljgzEsu4gAAAAAAAAAAAAAAAAAAAAAAAAAAzSAAAAAADKRwAAAzKAMwK1wFEACJ34jmQB+mZQALKwAAAAAAAAAAAAAAAAAAAAAAAAAFDDBDjwzxnMhqAAA7J301IwwGAAA204E3B3AVE6woqQAAAAAAAAAAAAAAAAAAAAAAAAAEPedpnYcoJcyawAFQ054AEA1wBAAC0AAERyggIvIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYQRYwg0PLyPrAAAAAAAAAAAAAA02AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQFKgEJB1nckNQAAAAAAAAACBAEY4AAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFTfOa8gCy7ZqhwAADDNHDHDbTaWVVDGWWNZZaRESEAAAAAAAAAAAAAAAAAAAAAAAAAAAA8d8jw1trErW4AAABPSTQMSTfbIbQJWaTeYUaRcYfQAAAAAAAAAAAAAAAAAAAAAAAAAAFoqp9WWZG9JYQAAAAAAAEAAAAAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2tIffWvIowAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBIWccccZQbTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/EAAL/2gAMAwEAAgADAAAAEPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPO/N9cO+MtfPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPKOujmd62VpcvPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLuvMUtGjKYGn/PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPOKuN6ub9hz58vPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPHyy0ZHv8AumdfzzyuIbrjTzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzt0B77S7YACoXzzygU1nLrzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzys813zzzzYVK/zzyhXzwI1p7z+hfPy8FVZuZHznqjnzzzzzzzzzzzzzzzzzzzzzzzzzzz6vRfzzzysMfzzzyhGhCJjarz5bwr/sbOg0wuOmTh1bzzzzzzzzzzzzzzzzzzzzzzzzzyoJHzzzzz4ztnzzyiXyz45Zrz7rx0XXchPy8L2rzyRzzzzzzzzzzzzzzzzzzzzzzzzzzz0FLLDH/PmcLBPzyhHXnl0k3J6rzx4XzkFxUr6ZXzZXzzzzzzzzzzzzzzzzzzzzzzzzzyw0lWBRZ6/CacTzz8x3E577TqwbzzVbzxsqf7yy4z7zzzzzzzzzzzzzzzzzzzzzzzzzzzuP8A7c/8qCA+6b8888888888888o5C888888888888888888888888888888888888888v8AqX/AC/ghSHjfPPNPPPPPPPPPL3HPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPKs3p2fn/GNfC1fPOsohtrpH+2015+Lk68D/wC/+aubBTzzzzzzzzzzzzzzzzzzzzzzzzzzgJa9/wCtiklhD988s2v/AN/P3/63s37g9666x01/y86/PPPPPPPPPPPPPPPPPPPPPPPPPPOXkP0OLK6grPfPPPPPPPPPPPPPHPPPPPPPPPPDPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPL5qLbvm/ZTvPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPOJm38wzz60x8vPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP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',
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
                    {(product as any).logoSrc ? (
                      <img
                        src={(product as any).logoSrc}
                        alt={`${product.name} logo`}
                        className="w-20 h-20 object-contain mb-6"
                      />
                    ) : (
                      <div
                        className={`w-16 h-16 rounded-2xl ${product.bgIcon} ${product.textColor} flex items-center justify-center mb-6`}
                      >
                        <product.icon size={32} />
                      </div>
                    )}

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