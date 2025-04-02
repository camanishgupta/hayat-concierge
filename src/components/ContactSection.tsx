
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const ContactSection = () => {
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
            {t('nav.contactUs')}
          </span>
          <h2 className="heading-lg mb-6 hero-text-gradient">
            {t('enquiry.title')}
          </h2>
          <p className="text-muted-foreground mb-8">
            {t('enquiry.formSubtitle')}
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center mr-4">
                <Phone size={18} className="text-navy" />
              </div>
              <div>
                <p className="font-medium text-navy">{t('enquiry.phone')}</p>
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
                <p className="font-medium text-navy">{t('enquiry.email')}</p>
                <a href="mailto:hayat01ourahmoun@gmail.com" className="text-muted-foreground hover:text-navy transition-colors">
                  hayat01ourahmoun@gmail.com
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
          <div className="glass-card p-8 text-center">
            <h3 className="heading-md mb-6 text-navy">{t('enquiry.formTitle')}</h3>
            <p className="text-muted-foreground mb-8">
              {t('enquiry.formSubtitle')}
            </p>
            
            <Link to="/enquiry" className="button-primary bg-navy w-full md:w-auto flex items-center justify-center gap-2 mx-auto px-10">
              {t('enquiry.submitInquiry')}
              <Send size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
