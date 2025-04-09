
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useContent } from '@/contexts/ContentContext';
import { useContentItem } from '@/hooks/useContentItem';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();
  const { getContentByPage } = useContent();
  
  // Get content based on the page
  const aboutContent = getContentByPage('about');
  
  // Get specific content items using the useContentItem hook
  const aboutTitle = useContentItem('about-title');
  const aboutSubtitle = useContentItem('about-subtitle');
  const aboutDescription = useContentItem('about-description');
  const aboutFeature1 = useContentItem('about-feature1');
  const aboutFeature2 = useContentItem('about-feature2');
  const aboutFeature3 = useContentItem('about-feature3');
  const aboutFeature4 = useContentItem('about-feature4');
  const aboutCTA = useContentItem('about-cta');
  
  // Fallback to translation if content item is not found
  const title = aboutTitle || t('home.about.title');
  const subtitle = aboutSubtitle || t('home.about.subtitle');
  const description = aboutDescription || t('home.about.description');
  const feature1 = aboutFeature1 || t('home.about.feature1');
  const feature2 = aboutFeature2 || t('home.about.feature2');
  const feature3 = aboutFeature3 || t('home.about.feature3');
  const feature4 = aboutFeature4 || t('home.about.feature4');
  const cta = aboutCTA || t('home.about.cta');

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
      <div className="max-w-3xl mx-auto">
        <div 
          className={cn(
            "opacity-0 transform translate-y-8 transition-all duration-1000",
            { "opacity-100 translate-y-0": isVisible }
          )}
        >
          <span className="inline-block py-1 px-3 bg-sand text-navy rounded-full text-sm font-medium mb-6">
            {subtitle}
          </span>
          <h2 className="heading-lg mb-6 hero-text-gradient text-center">
            {title}
          </h2>
          <p className="text-black mb-6 text-center">
            {description}
          </p>
          
          <div className="space-y-4 mb-8">
            {[
              feature1,
              feature2,
              feature3,
              feature4
            ].map((point, index) => (
              <div key={index} className="flex items-start">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center mt-1 mr-3">
                  <Check size={14} className="text-gold" />
                </span>
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <a href="/contact" className="button-primary inline-flex items-center gap-2">
              {cta}
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
