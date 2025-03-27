
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/20 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1536599424071-0b215a388ba7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Luxury Thailand experience"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-3xl">
          <span 
            className={`inline-block py-1 px-3 bg-gold/20 text-gold border border-gold/30 rounded-full text-sm font-medium mb-6 opacity-0 transform translate-y-4 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : ''}`}
          >
            Premium Concierge Service
          </span>
          <h1 
            className={`text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-white leading-tight opacity-0 transform translate-y-4 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : ''}`}
          >
            Bespoke Thai <br />
            <span className="text-gold">Journeys</span>
          </h1>
          <p 
            className={`text-lg md:text-xl text-white/80 mt-6 max-w-2xl opacity-0 transform translate-y-4 transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : ''}`}
          >
            Crafting tailored luxury experiences in Thailand with seamless medical, wellness, and travel concierge services.
          </p>
          <div 
            className={`mt-8 flex flex-col sm:flex-row gap-4 opacity-0 transform translate-y-4 transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : ''}`}
          >
            <a href="#contact" className="button-primary border-2 border-transparent bg-gold hover:bg-gold/90 text-navy flex items-center justify-center sm:justify-start gap-2">
              Book Your Experience
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#services" className="button-secondary border-2 border-white text-white hover:bg-white/10 flex items-center justify-center sm:justify-start gap-2">
              Explore Services
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute -bottom-10 right-0 w-1/3 h-32 bg-gradient-to-t from-cream to-transparent opacity-30 rounded-tl-full" />
    </section>
  );
};

export default HeroSection;
