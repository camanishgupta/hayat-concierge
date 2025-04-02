
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

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
      id="about" 
      ref={sectionRef} 
      className="section-container bg-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div 
          className={cn(
            "opacity-0 transform translate-x-8 transition-all duration-1000",
            { "opacity-100 translate-x-0": isVisible }
          )}
        >
          <span className="inline-block py-1 px-3 bg-sand text-navy rounded-full text-sm font-medium mb-6">
            {t('home.about.subtitle')}
          </span>
          <h2 className="heading-lg mb-6 hero-text-gradient">
            {t('home.about.title')}
          </h2>
          <p className="text-muted-foreground mb-6">
            {t('home.about.description')}
          </p>
          
          <div className="space-y-4 mb-8">
            {[
              t('home.about.feature1'),
              t('home.about.feature2'),
              t('home.about.feature3'),
              t('home.about.feature4')
            ].map((point, index) => (
              <div key={index} className="flex items-start">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center mt-1 mr-3">
                  <Check size={14} className="text-gold" />
                </span>
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
          
          <a href="#contact" className="button-primary inline-flex items-center gap-2">
            {t('home.about.cta')}
            <ArrowRight size={16} />
          </a>
        </div>
        
        <div 
          className={cn(
            "relative opacity-0 transform translate-x-8 transition-all duration-1000 delay-300",
            { "opacity-100 translate-x-0": isVisible }
          )}
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
              alt="Luxury experience in Thailand" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 w-2/3 aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1036&q=80" 
              alt="Thai Spa experience" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-24 -right-10 w-32 h-32 bg-gold/10 rounded-full backdrop-blur-md flex items-center justify-center p-4 text-center shadow-lg border border-gold/20">
            <p className="font-serif text-navy">
              <span className="block text-2xl font-bold">10+</span>
              <span className="text-xs">{t('home.about.feature3')}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
