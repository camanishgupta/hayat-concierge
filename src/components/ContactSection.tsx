
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      id="contact" 
      ref={sectionRef} 
      className="section-container bg-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div 
          className={cn(
            "lg:col-span-2 opacity-0 transform translate-y-8 transition-all duration-700",
            { "opacity-100 translate-y-0": isVisible }
          )}
        >
          <span className="inline-block py-1 px-3 bg-navy/10 text-navy rounded-full text-sm font-medium mb-6">
            Get in Touch
          </span>
          <h2 className="heading-lg mb-6 hero-text-gradient">
            Begin Your Bespoke Journey
          </h2>
          <p className="text-muted-foreground mb-8">
            Contact our concierge team to discuss your needs and let us craft an exceptional Thai experience tailored just for you.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center mr-4">
                <Phone size={18} className="text-navy" />
              </div>
              <div>
                <p className="font-medium text-navy">Call Us</p>
                <a href="tel:+6623456789" className="text-muted-foreground hover:text-navy transition-colors">
                  +66 2 345 6789
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center mr-4">
                <Mail size={18} className="text-navy" />
              </div>
              <div>
                <p className="font-medium text-navy">Email</p>
                <a href="mailto:contact@bespokethai.com" className="text-muted-foreground hover:text-navy transition-colors">
                  contact@bespokethai.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center mr-4">
                <MapPin size={18} className="text-navy" />
              </div>
              <div>
                <p className="font-medium text-navy">Address</p>
                <address className="text-muted-foreground not-italic">
                  123 Sukhumvit Road<br />
                  Bangkok, Thailand 10110
                </address>
              </div>
            </div>
          </div>
        </div>
        
        <div 
          className={cn(
            "lg:col-span-3 opacity-0 transform translate-y-8 transition-all duration-700 delay-300",
            { "opacity-100 translate-y-0": isVisible }
          )}
        >
          <form className="glass-card p-8">
            <h3 className="heading-md mb-6 text-navy">Inquire Now</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-navy mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy/60 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy/60 transition-all"
                  placeholder="Your email"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="service" className="block text-sm font-medium text-navy mb-1">
                Service of Interest
              </label>
              <select
                id="service"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy/60 transition-all"
              >
                <option value="">Select a service</option>
                <option value="medical">Medical Tourism</option>
                <option value="wellness">Wellness Retreat</option>
                <option value="accommodation">Luxury Accommodation</option>
                <option value="transportation">Private Transportation</option>
                <option value="itinerary">Bespoke Itinerary</option>
                <option value="dining">Fine Dining</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-navy mb-1">
                Your Requirements
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy/60 transition-all"
                placeholder="Tell us about your needs and preferences"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="button-primary bg-navy w-full flex items-center justify-center gap-2"
            >
              Send Inquiry
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
