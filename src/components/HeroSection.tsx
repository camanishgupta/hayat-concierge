
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import HeroCarousel from './HeroCarousel';
import { useContentItem } from '@/hooks/useContentItem';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { t, language } = useLanguage();
  
  // Get specific content items using the useContentItem hook
  const heroTitle = useContentItem('hero-title');
  const heroSubtitle = useContentItem('hero-subtitle');
  const heroButton = useContentItem('hero-button');
  const heroExplore = useContentItem('hero-explore');
  const heroTag = useContentItem('hero-tag');
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Function to scroll to top when navigating
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Carousel background */}
      <HeroCarousel />

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-3xl">
          <div className="bg-[#0A3A2A]/60 backdrop-blur-sm p-8 rounded-xl">
            <span 
              className={`inline-block py-1 px-3 bg-gold/20 text-gold border border-gold/30 rounded-full text-sm font-medium mb-6 opacity-0 transform translate-y-4 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : ''}`}
            >
              {heroTag || (language === 'ar' ? 'خدمة كونسيرج فاخرة' : 'Premium Concierge Service')}
            </span>
            <h1 
              className={`text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-white leading-tight opacity-0 transform translate-y-4 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : ''}`}
            >
              {language === 'ar' ? 'حياة كونسيرج' : 'Hayat Concierge'}
            </h1>
            <h2 
              className={`text-3xl md:text-4xl font-serif font-medium text-gold mt-2 mb-4 opacity-0 transform translate-y-4 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : ''}`}
            >
              {heroTitle || t('home.hero.title')}
            </h2>
            <p 
              className={`text-lg md:text-xl text-white/90 mt-6 max-w-2xl opacity-0 transform translate-y-4 transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : ''}`}
            >
              {heroSubtitle || t('home.hero.subtitle')}
            </p>
            <div 
              className={`mt-8 flex flex-col sm:flex-row gap-4 opacity-0 transform translate-y-4 transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : ''}`}
            >
              <a 
                href="#contact" 
                className="button-primary border-2 border-transparent bg-gold hover:bg-gold/90 text-[#0A3A2A] hover:text-[#0A3A2A] flex items-center justify-center sm:justify-start gap-2"
                onClick={scrollToTop}
              >
                {heroButton || t('home.hero.button')}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#services" 
                className="button-secondary border-2 border-white text-white hover:bg-white/10 flex items-center justify-center sm:justify-start gap-2"
                onClick={scrollToTop}
              >
                {heroExplore || t('home.hero.explore')}
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute -bottom-10 right-0 w-1/3 h-32 bg-gradient-to-t from-gold/10 to-transparent opacity-30 rounded-tl-full" />
    </section>
  );
};

export default HeroSection;
