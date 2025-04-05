import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle, Star, Shield, Users } from 'lucide-react';

const LuxuryExperience = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const luxuryExperiences = [
    {
      title: isRTL ? 'الإقامة الفاخرة' : 'Luxury Accommodations',
      description: isRTL 
        ? 'نحجز لك في أفضل الفنادق والمنتجعات في تايلاند، مع ضمان الخصوصية التامة وخدمات VIP المخصصة.'
        : 'We secure bookings at Thailand\'s most prestigious hotels and resorts, with guaranteed privacy and personalized VIP services.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      features: [
        'Private villa options with dedicated staff',
        'Personalized halal dining arrangements',
        'Family-friendly luxury accommodations',
        'Prayer facilities and qibla direction'
      ]
    },
    {
      title: isRTL ? 'النقل الخاص' : 'Private Transportation',
      description: isRTL 
        ? 'أسطول من السيارات والقوارب والطائرات الفاخرة الخاصة لضمان تنقلك بأقصى درجات الراحة والخصوصية.'
        : 'A fleet of luxury cars, boats, and private jets ensure your movement with maximum comfort and privacy.',
      image: 'https://images.unsplash.com/photo-1669058611147-1e9e5501e9e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      features: [
        'Chauffeur-driven luxury vehicles',
        'Private yacht charters',
        'Helicopter transfers between destinations',
        'Arabic-speaking drivers available'
      ]
    },
    {
      title: isRTL ? 'تجارب الطعام الحصرية' : 'Exclusive Dining',
      description: isRTL 
        ? 'تجارب طعام مصممة خصيصًا في أرقى المطاعم ومع أشهر الطهاة، مع ضمان توفر خيارات الطعام الحلال.'
        : 'Custom-designed dining experiences at the finest restaurants and with celebrity chefs, with guaranteed halal options.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      features: [
        'Private dining rooms with stunning views',
        'Certified halal fine dining experiences',
        'Personal chef services in your accommodation',
        'Traditional Thai cuisine with Middle Eastern influences'
      ]
    },
    {
      title: isRTL ? 'الجولات الثقافية الخاصة' : 'Private Cultural Tours',
      description: isRTL 
        ? 'استكشف كنوز تايلاند الثقافية والتاريخية مع مرشدين خاصين يتحدثون العربية ويفهمون احتياجاتك الثقافية.'
        : 'Explore Thailand\'s cultural and historical treasures with private guides who speak Arabic and understand your cultural needs.',
      image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      features: [
        'After-hours private temple visits',
        'Exclusive access to royal palaces',
        'Guided tours with cultural experts',
        'Custom itineraries based on your interests'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-offwhite">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#0A3A2A]/10 geometric-pattern-bg"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="heading-xl mb-6 hero-text-gradient">
              {isRTL ? 'تجارب الإقامة الفاخرة' : 'Luxury Experience'}
            </h1>
            <p className="subheading text-xl mb-8">
              {isRTL 
                ? 'نقدم لك أرقى تجارب الإقامة والتنقل والترفيه في تايلاند، مع الاهتمام بأدق التفاصيل وتلبية احتياجاتك الخاصة.'
                : 'We provide the finest accommodation, transportation, and entertainment experiences in Thailand, with attention to the smallest details and meeting your specific needs.'}
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto">
          {luxuryExperiences.map((experience, index) => (
            <div 
              key={experience.title}
              className={cn(
                "mb-20 flex flex-col items-center",
                { "md:flex-row": index % 2 === 0, "md:flex-row-reverse": index % 2 !== 0 }
              )}
            >
              <div className="w-full md:w-1/2 mb-8 md:mb-0 md:px-6">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={experience.image} 
                    alt={experience.title}
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="text-gold" size={20} />
                      <Star className="text-gold" size={20} />
                      <Star className="text-gold" size={20} />
                      <Star className="text-gold" size={20} />
                      <Star className="text-gold" size={20} />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 md:px-6">
                <h2 className="heading-md mb-4 text-teal">{experience.title}</h2>
                <p className="text-muted-foreground mb-6">{experience.description}</p>
                
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md">
                  <h3 className="text-navy font-medium mb-4">Exclusive Features:</h3>
                  <div className="space-y-3">
                    {experience.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="text-gold flex-shrink-0 mt-1" size={18} />
                        <p className="text-charcoal/80">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6 flex justify-center md:justify-start">
                  <a href="/enquiry" className="button-primary">
                    {isRTL ? 'استفسر الآن' : 'Inquire Now'}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy/5 py-16">
        <div className="container mx-auto px-6">
          <h2 className="heading-lg text-center mb-12 hero-text-gradient">
            {isRTL ? 'لمحة عن الفخامة' : 'Glimpses of Luxury'}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=580&q=80" 
                alt="Luxury hotel room"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=580&q=80" 
                alt="Luxury pool"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?ixlib=rb-4.0.3&auto=format&fit=crop&w=580&q=80" 
                alt="Fine dining"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1578922746465-3a80a228f223?ixlib=rb-4.0.3&auto=format&fit=crop&w=580&q=80" 
                alt="Luxury service"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LuxuryExperience;
