
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const partners = [
  {
    name: "Bangkok Hospital",
    type: "Medical",
    logo: "https://via.placeholder.com/150x80?text=Bangkok+Hospital"
  },
  {
    name: "Bumrungrad International",
    type: "Medical",
    logo: "https://via.placeholder.com/150x80?text=Bumrungrad"
  },
  {
    name: "The Peninsula Bangkok",
    type: "Accommodation",
    logo: "https://via.placeholder.com/150x80?text=Peninsula"
  },
  {
    name: "Mandarin Oriental",
    type: "Accommodation",
    logo: "https://via.placeholder.com/150x80?text=Mandarin+Oriental"
  }
];

const PartnersSection = () => {
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
      id="partners" 
      ref={sectionRef} 
      className="section-container bg-cream"
    >
      <div className="text-center mb-16">
        <span className="inline-block py-1 px-3 bg-navy/10 text-navy rounded-full text-sm font-medium mb-6">
          Our Network
        </span>
        <h2 className="heading-lg mb-4 hero-text-gradient">Exclusive Partners</h2>
        <p className="subheading mx-auto">
          We collaborate with Thailand's most prestigious establishments to ensure unparalleled quality and service.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {partners.map((partner, index) => (
          <div 
            key={partner.name}
            className={cn(
              "glass-card p-6 flex flex-col items-center text-center opacity-0 transform translate-y-4 transition-all duration-500",
              { "opacity-100 translate-y-0": isVisible }
            )}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="mb-4 p-4">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-12 w-auto mx-auto object-contain"
              />
            </div>
            <h3 className="font-medium text-navy">{partner.name}</h3>
            <p className="text-xs text-muted-foreground mt-1">{partner.type}</p>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-10">
        <a href="/facilities" className="button-secondary inline-flex items-center gap-2">
          See All Partners
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
};

export default PartnersSection;
