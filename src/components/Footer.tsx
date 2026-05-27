import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  Company: [
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Partners', path: '/partners' },
    { label: 'Contact', path: '/contact' },
  ],
  Products: [
    { label: 'Buyoo', path: '/products' },
    { label: 'Qua Business', path: '/products' },
    { label: 'Qua Links', path: '/products' },
    { label: 'Qua Media', path: '/products' },
  ],
  Resources: [
    { label: 'Careers', path: '#' },
    { label: 'Blog', path: '#' },
    { label: 'Press', path: '#' },
    { label: 'FAQ', path: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-section section-padding pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">Q</span>
              </div>
              <span className="font-display font-bold text-xl">Qua Industries</span>
            </Link>
            <p className="text-navy-300 leading-relaxed max-w-sm mb-6">
              Building innovation. Creating opportunities. Transforming communities across Africa through technology.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@quaindustries.com" className="flex items-center gap-3 text-navy-300 hover:text-primary-400 transition-colors text-sm">
                <Mail size={16} />
                info@quaindustries.com
              </a>
              <a href="tel:+234XXXXXXXXXX" className="flex items-center gap-3 text-navy-300 hover:text-primary-400 transition-colors text-sm">
                <Phone size={16} />
                +234 XXX XXX XXXX
              </a>
              <div className="flex items-center gap-3 text-navy-300 text-sm">
                <MapPin size={16} />
                Nigeria
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-navy-200 mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-navy-400 hover:text-primary-400 transition-colors text-sm inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight size={12} className="opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-800">
        <div className="container-section py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-navy-500 text-sm">
            &copy; {new Date().getFullYear()} Qua Industries. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-navy-500 hover:text-navy-300 text-sm transition-colors">Privacy</a>
            <a href="#" className="text-navy-500 hover:text-navy-300 text-sm transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
