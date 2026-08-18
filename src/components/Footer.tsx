import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Linkedin, Twitter, Facebook } from 'lucide-react';

const footerNav = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
  { label: 'Request a Quote', path: '/quote' },
];

const serviceLinks = ['Diesel Supply'];

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-5">
              <img src="/capella_global_logo_clean.svg" alt="Capella Global" className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-6">
              Capella Integrated Global Limited is a Nigerian company focused on providing reliable diesel supply to businesses and organisations across different industries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2.5">
              {footerNav.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-white/50 text-sm hover:text-accent-400 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-white">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <Link
                    to="/services"
                    className="text-white/50 text-sm hover:text-accent-400 transition-colors duration-200"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-white">Get In Touch</h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm">Plot 471, behind Banilux Motors, Abuja 900211, Federal Capital Territory</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent-400 flex-shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <a href="tel:07062062322" className="text-white/50 text-sm hover:text-accent-400 transition-colors">0706 206 2322</a>
                  <a href="tel:09048486637" className="text-white/50 text-sm hover:text-accent-400 transition-colors">0904 848 6637</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent-400 flex-shrink-0" />
                <span className="text-white/50 text-sm">abuja@capella.com.ng</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-accent-400 mt-0.5 flex-shrink-0" />
                <div className="text-white/50 text-sm leading-relaxed">
                  <div>Mon – Fri: 8:00 AM – 6:00 PM</div>
                  <div>Sat: 9:00 AM – 4:00 PM</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Capella Integrated Global Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
