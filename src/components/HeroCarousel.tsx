
import React, { useEffect, useState, useCallback } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";
import { useLanguage } from '@/contexts/LanguageContext';

interface CarouselImage {
  url: string;
  altTextEn: string;
  altTextAr: string;
}

const HeroCarousel = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const carouselImages: CarouselImage[] = [
    {
      url: "/lovable-uploads/b91e382e-8636-4e7a-9ab0-f15e672d3f11.png",
      altTextEn: "Traditional Thai boat in crystal clear water",
      altTextAr: "قارب تايلندي تقليدي في مياه صافية كالكريستال"
    },
    {
      url: "/lovable-uploads/6f0ebaee-7216-4203-89d2-fa3b84c0a1a2.png",
      altTextEn: "Luxury family travel experience",
      altTextAr: "تجربة سفر فاخرة للعائلة"
    },
    {
      url: "/lovable-uploads/9d297bc4-2fd6-47f2-95a8-dd5f7f0bf5c9.png",
      altTextEn: "Professional business concierge services",
      altTextAr: "خدمات كونسيرج مهنية للأعمال"
    },
    {
      url: "/lovable-uploads/33191537-1945-40de-84ee-fcd5b3b68106.png",
      altTextEn: "Middle East medical tourism services",
      altTextAr: "خدمات السياحة الطبية في الشرق الأوسط"
    },
    {
      url: "/lovable-uploads/7a1e6040-8679-47a8-bb87-1d027ce4b675.png",
      altTextEn: "Amazing Thailand tourism",
      altTextAr: "السياحة في تايلاند الرائعة"
    },
    {
      url: "/lovable-uploads/5b9d8c1a-451c-4de4-b542-4bfd66371062.png",
      altTextEn: "Thailand natural landscape with tourist",
      altTextAr: "المناظر الطبيعية في تايلاند مع سائح"
    },
  ];

  // Autoplay plugin with options
  const autoplayOptions = {
    delay: 4000,
    rootNode: (emblaRoot: any) => emblaRoot.parentElement,
    stopOnInteraction: false,
  };

  // Initialize carousel with autoplay plugin
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: "center",
      direction: isRTL ? 'rtl' : 'ltr'
    }, 
    [AutoPlay(autoplayOptions)]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentSlide(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    emblaApi.on('select', onSelect);
    onSelect();
    
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A3A2A]/80 via-[#0A3A2A]/50 to-[#0A3A2A]/70 z-10" />
      
      <div className="w-full h-full">
        <div className="overflow-hidden h-full" ref={emblaRef}>
          <div className="flex h-full">
            {carouselImages.map((image, index) => (
              <div key={index} className="flex-[0_0_100%] h-full">
                <img
                  src={image.url}
                  alt={language === 'ar' ? image.altTextAr : image.altTextEn}
                  className={`w-full h-full object-cover opacity-0 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : ''}`}
                  loading={index < 2 ? "eager" : "lazy"}
                  onLoad={() => index === 0 && setIsLoaded(true)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <button 
          onClick={() => emblaApi?.scrollPrev()} 
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 flex items-center justify-center rounded-full bg-white/30 hover:bg-white/50 text-white transition-all"
          aria-label="Previous slide"
        >
          &#10094;
        </button>
        <button 
          onClick={() => emblaApi?.scrollNext()} 
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 flex items-center justify-center rounded-full bg-white/30 hover:bg-white/50 text-white transition-all"
          aria-label="Next slide"
        >
          &#10095;
        </button>

        {/* Dots indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? 'bg-white' : 'bg-white/40'
              }`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
