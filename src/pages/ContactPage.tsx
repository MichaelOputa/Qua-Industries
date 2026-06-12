import { useState, FormEvent } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  MessageSquare,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
} from 'lucide-react';

function TikTokIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}
import AnimatedSection from '../components/AnimatedSection';
import { useScrollToTop } from '../hooks/useAnimations';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@quaindustrieslimited.com.ng',
    href: 'mailto:info@quaindustrieslimited.com.ng',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+234 701 979 1950',
    href: 'tel:+2347019791950',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Nigeria',
    href: undefined,
  },
];

const inquiryTypes = [
  'Partnership',
  'Investment',
  'Product Inquiry',
  'Collaboration',
  'Media & Press',
  'General',
];

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/quaindustries', label: 'Instagram' },
  { icon: Facebook, href: 'https://www.facebook.com/quaindustries', label: 'Facebook' },
  { icon: Twitter, href: 'https://x.com/quaindustries', label: 'X (Twitter)' },
  { icon: Youtube, href: 'https://www.youtube.com/@quaindustries', label: 'YouTube' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/quaindustries', label: 'LinkedIn' },
  { icon: TikTokIcon, href: 'https://www.tiktok.com/@quaindustries', label: 'TikTok' },
];

export default function ContactPage() {
  useScrollToTop();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

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
              <MessageSquare size={14} />
              Get In Touch
            </span>
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.1]">
              We'd Love to{' '}
              <span className="text-primary-400">Hear From You</span>
            </h1>
            <p className="text-navy-200 text-lg leading-relaxed max-w-2xl">
              Whether you are interested in partnerships, collaborations, investments, or our
              products, our team is ready to connect.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Contact Section */}
      <section className="section-padding gradient-mesh">
        <div className="container-section">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info Column */}
            <div className="lg:col-span-2">
              <AnimatedSection animation="slide-in-left">
                <h2 className="heading-display text-2xl md:text-3xl text-navy-900 mb-6">
                  Contact Information
                </h2>
                <p className="text-navy-500 leading-relaxed mb-8">
                  Reach out to us through any of these channels. We typically respond within one
                  business day.
                </p>

                <div className="space-y-6 mb-10">
                  {contactInfo.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center flex-shrink-0">
                        <Icon size={22} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-navy-400 mb-1">
                          {label}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            className="text-navy-700 font-medium hover:text-primary-600 transition-colors"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-navy-700 font-medium">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-navy-900 rounded-2xl p-6 text-white">
                  <p className="font-display font-bold text-lg mb-2">Follow Our Journey</p>
                  <p className="text-navy-300 text-sm leading-relaxed mb-4">
                    Building innovation. Creating opportunities. Transforming communities.
                  </p>
                  <div className="flex items-center gap-3">
                    {socialLinks.map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary-600 flex items-center justify-center text-white transition-colors"
                        aria-label={label}
                      >
                        <Icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-3">
              <AnimatedSection animation="slide-in-right" delay={200}>
                <div className="card-base p-8 md:p-10">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 size={32} />
                      </div>
                      <h3 className="heading-display text-2xl text-navy-900 mb-3">
                        Message Sent!
                      </h3>
                      <p className="text-navy-500 mb-6">
                        Thank you for reaching out. We will get back to you shortly.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ name: '', email: '', organization: '', inquiryType: '', message: '' });
                        }}
                        className="btn-primary"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <>
                      <h2 className="heading-display text-2xl text-navy-900 mb-2">
                        Send Us a Message
                      </h2>
                      <p className="text-navy-500 text-sm mb-8">
                        Fill in the form below and our team will respond promptly.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-semibold text-navy-700 mb-2">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) => handleChange('name', e.target.value)}
                              className="w-full px-4 py-3 rounded-lg border border-navy-200 text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all placeholder:text-navy-300"
                              placeholder="Your name"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-navy-700 mb-2">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => handleChange('email', e.target.value)}
                              className="w-full px-4 py-3 rounded-lg border border-navy-200 text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all placeholder:text-navy-300"
                              placeholder="you@example.com"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-navy-700 mb-2">
                            Organization
                          </label>
                          <input
                            type="text"
                            value={formData.organization}
                            onChange={(e) => handleChange('organization', e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-navy-200 text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all placeholder:text-navy-300"
                            placeholder="Your organization (optional)"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-navy-700 mb-2">
                            Inquiry Type *
                          </label>
                          <select
                            required
                            value={formData.inquiryType}
                            onChange={(e) => handleChange('inquiryType', e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-navy-200 text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white"
                          >
                            <option value="">Select inquiry type</option>
                            {inquiryTypes.map((type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-navy-700 mb-2">
                            Message *
                          </label>
                          <textarea
                            required
                            rows={5}
                            value={formData.message}
                            onChange={(e) => handleChange('message', e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-navy-200 text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all placeholder:text-navy-300 resize-none"
                            placeholder="Tell us about your interest..."
                          />
                        </div>

                        <button type="submit" className="btn-primary w-full text-base py-4">
                          <Send size={18} />
                          Send Message
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
