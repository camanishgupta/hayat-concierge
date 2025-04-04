
import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import TestimonialCard from './TestimonialCard';
import { useLanguage } from '@/contexts/LanguageContext';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const isRTL = language === 'ar';

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
      id="testimonials"
      ref={sectionRef}
      className="section-container bg-emerald text-white"
    >
      <div className="text-center mb-16">
        <span className="inline-block py-1 px-3 bg-gold/20 text-gold rounded-full text-sm font-medium mb-6">
          {isRTL ? 'تجارب العملاء' : 'Client Experiences'}
        </span>
        <h2 className="heading-lg mb-4 text-gold">
          {isRTL ? 'ما يقوله عملاؤنا' : 'What Our Clients Say'}
        </h2>
        <p className="subheading mx-auto text-white/70">
          {isRTL 
            ? 'اكتشف كيف قمنا بتحويل تجارب عملائنا في تايلاند من خلال خدمات الكونسيرج الممتازة لدينا.'
            : 'Discover how we\'ve transformed our clients\' experiences in Thailand with our premium concierge services.'}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <TestimonialCard 
          id="testimonial-1" 
          titleId="testimonial-1"
          delay={0}
        />
        <TestimonialCard 
          id="testimonial-2" 
          titleId="testimonial-2"
          delay={150}
        />
        <TestimonialCard 
          id="testimonial-3" 
          titleId="testimonial-3"
          delay={300}
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
