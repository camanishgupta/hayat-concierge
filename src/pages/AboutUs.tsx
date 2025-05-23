
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { MapPin, Heart, Shield, Globe, Users, Briefcase, CheckCircle2, Building, Stethoscope } from 'lucide-react';
import { useContentItem } from '@/hooks/useContentItem';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const sectionsRef = useRef<{ [key: string]: HTMLDivElement | null }>({
    about: null,
    mission: null,
    why: null,
    bangkok: null,
  });
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({
    about: false,
    mission: false,
    why: false,
    bangkok: false,
    founder: false,
    cultural: false,
    journey: false,
    passion: false,
    inspiration: false,
    bridging: false
  });

  useEffect(() => {
    const observers = Object.entries(sectionsRef.current).map(([key, ref]) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIsVisible(prev => ({ ...prev, [key]: true }));
          }
        },
        { threshold: 0.1 }
      );
      
      observer.observe(ref);
      return { key, observer };
    }).filter(Boolean);
    
    return () => {
      observers.forEach(item => {
        if (item) item.observer.disconnect();
      });
    };
  }, []);

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    const element = sectionsRef.current[section];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[#0A3A2A]/10 geometric-pattern-bg"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="heading-xl mb-6 hero-text-gradient">{isArabic ? 'عن حياة كونسيرج' : 'About Hayat Concierge'}</h1>
            <p className="subheading text-xl mb-8">
              {isArabic 
                ? 'تقوم حياة كونسيرج في بانكوك بإعادة تعريف السفر الفاخر والعافية والسياحة الطبية في تايلاند، مقدمة تجربة حصرية ومخصصة للعملاء من الشرق الأوسط.'
                : 'Based in Bangkok, Hayat Concierge redefines luxury travel, wellness, and medical tourism in Thailand, offering an exclusive, tailored experience for Middle Eastern clients.'}
            </p>
          </div>
        </div>
      </section>
      
      {/* Navigation Tabs */}
      <div className="sticky top-20 bg-[#0A3A2A] z-30 shadow-md">
        <div className="container mx-auto px-6">
          <div className="flex overflow-x-auto pb-2 pt-3 hide-scrollbar">
            <button 
              onClick={() => handleNavigate('about')}
              className={cn(
                "px-4 py-2 mr-3 whitespace-nowrap rounded-md transition-colors",
                activeSection === 'about' ? "bg-gold/20 text-gold font-medium" : "text-offwhite hover:bg-gold/10"
              )}
            >
              {isArabic ? 'عن حياة' : 'About Hayat'}
            </button>
            <button 
              onClick={() => handleNavigate('mission')}
              className={cn(
                "px-4 py-2 mr-3 whitespace-nowrap rounded-md transition-colors",
                activeSection === 'mission' ? "bg-gold/20 text-gold font-medium" : "text-offwhite hover:bg-gold/10"
              )}
            >
              {isArabic ? 'مهمتنا' : 'Our Mission'}
            </button>
            <button 
              onClick={() => handleNavigate('why')}
              className={cn(
                "px-4 py-2 mr-3 whitespace-nowrap rounded-md transition-colors",
                activeSection === 'why' ? "bg-gold/20 text-gold font-medium" : "text-offwhite hover:bg-gold/10"
              )}
            >
              {isArabic ? 'لماذا تختارنا' : 'Why Choose Us'}
            </button>
            <button 
              onClick={() => handleNavigate('bangkok')}
              className={cn(
                "px-4 py-2 mr-3 whitespace-nowrap rounded-md transition-colors",
                activeSection === 'bangkok' ? "bg-gold/20 text-gold font-medium" : "text-offwhite hover:bg-gold/10"
              )}
            >
              {isArabic ? 'لماذا بانكوك' : 'Why Bangkok'}
            </button>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-6 py-12">
        {/* About Hayat Section */}
        <section 
          ref={(el) => sectionsRef.current.about = el as HTMLDivElement}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div 
              className={cn(
                "opacity-0 transform translate-y-8 transition-all duration-1000",
                { "opacity-100 translate-y-0": isVisible.about }
              )}
            >
              <span className="inline-block py-1 px-3 bg-gold/20 text-gold border border-gold/30 rounded-full text-sm font-medium mb-6">
                {isArabic ? 'تفاني فريد' : 'A Unique Dedication'}
              </span>
              <h2 className="heading-lg mb-6">
                {isArabic ? '100٪ مخصصة للمسافرين من الشرق الأوسط' : '100% Dedicated to Middle Eastern Travelers'}
              </h2>
              <p className="text-black mb-6">
                {isArabic 
                  ? 'على عكس معظم خدمات الكونسيرج التي تخدم العملاء العالميين، حياة كونسيرج مخصصة 100٪ للمسافرين من الشرق الأوسط. تضمن معرفتنا الثقافية والثقة والتقدير والاحترافية لفريقنا مستوى من الرعاية والتميز يتجاوز التوقعات.'
                  : 'Unlike most concierges that serve global clients, Hayat Concierge is 100% dedicated to Middle Eastern travelers. Our cultural familiarity, trust, discretion, and the professionalism of our team ensure a level of care, and excellence that exceeds expectations.'}
              </p>
              <p className="text-black">
                {isArabic
                  ? 'معنا، ستكون رحلتك إلى تايلاند دائمًا سهلة واستثنائية.'
                  : 'With us, your journey to Thailand will always be effortless and extraordinary.'}
              </p>
            </div>
            
            <div 
              className={cn(
                "relative opacity-0 transform translate-y-8 transition-all duration-1000 delay-300",
                { "opacity-100 translate-y-0": isVisible.about }
              )}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/d2409855-1669-4389-9789-011feb333ca6.png" 
                  alt="Middle Eastern Family" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Mission Section */}
        <section 
          ref={(el) => sectionsRef.current.mission = el as HTMLDivElement}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div 
              className={cn(
                "order-2 md:order-1 relative opacity-0 transform translate-y-8 transition-all duration-1000",
                { "opacity-100 translate-y-0": isVisible.mission }
              )}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/ec9be84a-4419-47a9-8dd4-629792800ca7.png" 
                  alt="Bridge connecting two places" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div 
              className={cn(
                "order-1 md:order-2 opacity-0 transform translate-y-8 transition-all duration-1000 delay-300",
                { "opacity-100 translate-y-0": isVisible.mission }
              )}
            >
              <span className="inline-block py-1 px-3 bg-gold/20 text-gold border border-gold/30 rounded-full text-sm font-medium mb-6">
                {isArabic ? 'مهمتنا' : 'Our Mission'}
              </span>
              <h2 className="heading-lg mb-6">
                {isArabic ? 'جسرك الموثوق إلى أفضل تجارب تايلاند' : 'Your Trusted Bridge to Thailand\'s Finest Experiences'}
              </h2>
              <p className="text-black mb-6">
                {isArabic
                  ? 'سواء كنت تزور تايلاند للرعاية الطبية، أو للاسترخاء في منتجع صحي، أو لمجرد الترفيه، نحن نعمل كجسر موثوق - نرشدك بسلاسة إلى أفضل التجارب التي تقدمها تايلاند.'
                  : 'Whether you\'re visiting Thailand for medical care, a wellness retreat, or just leisure, we serve as your trusted bridge—guiding you seamlessly to the finest experiences Thailand has to offer.'}
              </p>
              
              <div className="space-y-4 mb-6">
                {[
                  { icon: <Stethoscope size={20} />, 
                    text: isArabic 
                      ? "رعاية طبية دقيقة: الوصول إلى أفضل المستشفيات والمتخصصين في تايلاند."
                      : "Precision Medical Care: access to Thailand's top hospitals & specialists." 
                  },
                  { icon: <Heart size={20} />, 
                    text: isArabic 
                      ? "منتجعات صحية مخصصة: برامج إزالة السموم المناسبة للحلال، والمنتجعات الصحية..."
                      : "Bespoke Wellness Retreats: Halal-friendly detox programs, spas holistic healing escapes..." 
                  },
                  { icon: <Shield size={20} />, 
                    text: isArabic 
                      ? "الخصوصية والحصرية المطلقة: تجارب مخصصة مع مراعاة الحساسية الثقافية."
                      : "Ultimate Privacy & Exclusivity: Curated experiences with cultural sensitivity." 
                  },
                  { icon: <Globe size={20} />, 
                    text: isArabic 
                      ? "تصميم سفر سلس: من المساعدة في الحصول على التأشيرة وترتيبات الرحلات الجوية إلى حجوزات المنتجعات الفاخرة، والجولات المخصصة، وتجارب نمط الحياة الحصرية، وخيارات الطعام الحلال."
                      : "Seamless Travel Design: From visa assistance and flight arrangements to luxury resort bookings, custom-tailored tours, exclusive Lifestyle experiences, and halal dining options." 
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mt-1 mr-3">
                      {item.icon}
                    </span>
                    <p className="text-black">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section 
          ref={(el) => sectionsRef.current.why = el as HTMLDivElement}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 bg-gold/20 text-gold border border-gold/30 rounded-full text-sm font-medium mb-4">
              {isArabic ? 'لماذا تختارنا' : 'Why Choose Us'}
            </span>
            <h2 className="heading-lg mb-6">
              {isArabic ? 'مزايا حياة كونسيرج' : 'Hayat Concierge Advantages'}
            </h2>
            <p className="text-black max-w-2xl mx-auto">
              {isArabic
                ? 'يضمن مزيجنا الفريد من الفهم الثقافي والاتصالات المتميزة والخدمة المخصصة تجربة لا مثيل لها لعملائنا من الشرق الأوسط.'
                : 'Our unique combination of cultural understanding, premium connections, and tailored service ensures an unparalleled experience for our Middle Eastern clients.'}
            </p>
          </div>
          
          <div 
            className={cn(
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 opacity-0 transform translate-y-8 transition-all duration-1000",
              { "opacity-100 translate-y-0": isVisible.why }
            )}
          >
            {[
              {
                icon: <Globe className="text-gold" size={28} />,
                title: isArabic ? "الفهم متعدد الثقافات" : "Multicultural Insight",
                description: isArabic 
                  ? "تراث فرنسي-جزائري مع فهم عميق للثقافات الشرق أوسطية والتايلاندية."
                  : "French-Algerian heritage with deep understanding of Middle Eastern and Thai cultures.",
                image: "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=564&q=80"
              },
              {
                icon: <Stethoscope className="text-gold" size={28} />,
                title: isArabic ? "وصول للخدمات الطبية النخبة" : "Elite Medical Access",
                description: isArabic 
                  ? "إحالات VIP للمستشفيات، وأفضل المتخصصين، وتنسيق الرعاية الصحية بسرية."
                  : "VIP hospital referrals, top specialists, and discreet healthcare coordination.",
                image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&auto=format&fit=crop&w=571&q=80"
              },
              {
                icon: <Heart className="text-gold" size={28} />,
                title: isArabic ? "منتجعات مخصصة للعافية" : "Bespoke Wellness",
                description: isArabic 
                  ? "منتجعات مخصصة، رحلات سبا خاصة، ومنتجعات للشفاء الشامل."
                  : "Curated retreats, private spa journeys, and holistic healing escapes.",
                image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=580&q=80"
              },
              {
                icon: <Building className="text-gold" size={28} />,
                title: isArabic ? "إعادة تعريف الفخامة" : "Luxury Redefined",
                description: isArabic 
                  ? "من النقل الخاص إلى الإقامات في المنتجعات النخبة، كل تفصيل مصقول بلا عيوب."
                  : "From private transfers to elite resort stays, every detail is flawlessly refined.",
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=580&q=80"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="h-48 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mr-3">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-[#0A3A2A]">{item.title}</h3>
                  </div>
                  <p className="text-black">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Why Bangkok Section */}
        <section 
          ref={(el) => sectionsRef.current.bangkok = el as HTMLDivElement}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div 
              className={cn(
                "opacity-0 transform translate-y-8 transition-all duration-1000",
                { "opacity-100 translate-y-0": isVisible.bangkok }
              )}
            >
              <span className="inline-block py-1 px-3 bg-gold/20 text-gold border border-gold/30 rounded-full text-sm font-medium mb-6">
                {isArabic ? 'لماذا بانكوك' : 'Why Bangkok'}
              </span>
              <h2 className="heading-lg mb-6">
                {isArabic ? 'قلب الفخامة والتميز الطبي' : 'The Heart of Luxury & Medical Excellence'}
              </h2>
              <p className="text-black mb-6">
                {isArabic
                  ? 'بانكوك هي مركز الفخامة في تايلاند، والرعاية الصحية العالمية، والاتصال الدولي السلس، وتقدم مزيجًا فريدًا من الرقي والضيافة.'
                  : 'Bangkok is Thailand\'s epicenter of luxury, world-class healthcare, and seamless international connectivity, offering a unique blend of sophistication and hospitality.'}
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-lg font-medium text-[#0A3A2A] mb-4">
                  {isArabic ? 'ما الذي يجعل بانكوك مثالية:' : 'What makes Bangkok ideal:'}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-gold mt-1 mr-3" size={18} />
                    <p className="text-black">
                      {isArabic 
                        ? 'موطن للمستشفيات والمرافق الطبية المعتمدة دوليًا'
                        : 'Home to internationally accredited hospitals and medical facilities'}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-gold mt-1 mr-3" size={18} />
                    <p className="text-black">
                      {isArabic 
                        ? 'أماكن إقامة فاخرة مع مرافق من الطراز العالمي'
                        : 'Luxury accommodations with world-class amenities'}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-gold mt-1 mr-3" size={18} />
                    <p className="text-black">
                      {isArabic 
                        ? 'تجارب ثقافية غنية مع مراعاة الحساسيات الشرق أوسطية'
                        : 'Rich cultural experiences with Middle Eastern sensibilities'}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-gold mt-1 mr-3" size={18} />
                    <p className="text-black">
                      {isArabic 
                        ? 'موقع مركزي مع سهولة الوصول إلى منتجعات العافية'
                        : 'Central location with easy access to wellness retreats'}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div 
              className={cn(
                "relative opacity-0 transform translate-y-8 transition-all duration-1000 delay-300",
                { "opacity-100 translate-y-0": isVisible.bangkok }
              )}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/c332b151-80b5-454d-87d7-34c92eced3eb.png" 
                  alt="Bangkok luxury hotel" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-2/3 aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="/lovable-uploads/d8498f7c-1210-45b9-afd8-d8ff816223a8.png" 
                  alt="Bangkok skyline" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Call to Action */}
      <section className="bg-[#0A3A2A] py-16 geometric-pattern-bg">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif font-semibold text-gold mb-6">
            {isArabic ? 'ابدأ رحلتك التايلاندية الاستثنائية' : 'Begin Your Exceptional Thai Journey'}
          </h2>
          <p className="text-offwhite/90 max-w-2xl mx-auto mb-8">
            {isArabic
              ? 'دعنا نصمم تجربة مخصصة تلبي تفضيلاتك الفريدة وتتجاوز توقعاتك.'
              : 'Let us craft a personalized experience that meets your unique preferences and exceeds your expectations.'}
          </p>
          <a href="/contact" className="button-primary inline-block">
            {isArabic ? 'اتصل بنا اليوم' : 'Contact Us Today'}
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
