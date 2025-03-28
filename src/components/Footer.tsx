
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-teal text-offwhite pt-16 pb-8 geometric-pattern-bg">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-sans text-xl font-medium text-gold">Hayat Concierge</h3>
            <p className="text-offwhite/80 text-sm leading-relaxed">
              Your exclusive bridge to Thailand's luxury medical tourism and wellness experiences, 
              specially tailored for Middle Eastern clients seeking excellence.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://instagram.com" aria-label="Instagram" className="text-offwhite/70 hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" aria-label="Facebook" className="text-offwhite/70 hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-offwhite/70 hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-sans text-lg font-medium text-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-offwhite/70 hover:text-gold transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link to="/founder" className="text-offwhite/70 hover:text-gold transition-colors text-sm">Founder</Link>
              </li>
              <li>
                <Link to="/blog" className="text-offwhite/70 hover:text-gold transition-colors text-sm">Itineraries</Link>
              </li>
              <li>
                <Link to="/facilities" className="text-offwhite/70 hover:text-gold transition-colors text-sm">Partners</Link>
              </li>
              <li>
                <a href="#services" className="text-offwhite/70 hover:text-gold transition-colors text-sm">Services</a>
              </li>
              <li>
                <a href="#about" className="text-offwhite/70 hover:text-gold transition-colors text-sm">About Us</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-sans text-lg font-medium text-gold">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-offwhite/70 text-sm">Medical Tourism</li>
              <li className="text-offwhite/70 text-sm">Wellness Retreats</li>
              <li className="text-offwhite/70 text-sm">Luxury Accommodations</li>
              <li className="text-offwhite/70 text-sm">Private Transportation</li>
              <li className="text-offwhite/70 text-sm">Bespoke Itineraries</li>
              <li className="text-offwhite/70 text-sm">Multilingual Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-sans text-lg font-medium text-gold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-gold mt-1 flex-shrink-0" />
                <span className="text-offwhite/70 text-sm">123 Sukhumvit Road, Bangkok, Thailand 10110</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-gold flex-shrink-0" />
                <a href="tel:+6623456789" className="text-offwhite/70 hover:text-offwhite text-sm">+66 2 345 6789</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-gold flex-shrink-0" />
                <a href="mailto:contact@hayatconcierge.com" className="text-offwhite/70 hover:text-offwhite text-sm">contact@hayatconcierge.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-offwhite/60">
          <p>© {new Date().getFullYear()} Hayat Concierge. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
