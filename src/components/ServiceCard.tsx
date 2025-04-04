
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageSrc?: string;
  delay?: number;
  link?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  imageSrc,
  delay = 0,
  link = "#"
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(!imageSrc);
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [delay]);

  // Function to scroll to top when navigating
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "glass-card bg-white backdrop-blur-md border border-gold/20 transition-all duration-700 opacity-0 transform translate-y-8 animated-card flex flex-col",
        { "opacity-100 translate-y-0": isVisible }
      )}
    >
      {imageSrc && (
        <div className="w-full h-48 overflow-hidden relative">
          <img
            src={imageSrc}
            alt={title}
            className={cn(
              "w-full h-full object-cover transition-all duration-1000",
              imageLoaded ? "img-loaded" : "img-loading"
            )}
            onLoad={() => setImageLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald/30 to-transparent" />
        </div>
      )}
      <div className="p-6 flex-1">
        <div className="mb-4 text-gold">{icon}</div>
        <h3 className="heading-md mb-2 text-teal">{title}</h3>
        <p className="text-charcoal">{description}</p>
      </div>
      <div className="px-6 pb-6 mt-auto">
        <Link 
          to={link} 
          onClick={scrollToTop} 
          className={`flex items-center gap-2 text-gold hover:text-gold/80 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
        >
          {isRTL ? 'استكشف المزيد' : 'Explore More'}
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
