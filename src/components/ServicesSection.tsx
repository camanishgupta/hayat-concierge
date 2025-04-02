
import React from 'react';
import { Heart, Building2, Stethoscope } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesSection = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const services = [
    {
      title: isRTL ? "الخدمات الطبية وتنسيق الرعاية الصحية" : "Medical Concierge & Healthcare Coordination",
      description: isRTL 
        ? "نربطك بالمستشفيات والأخصائيين الرائدين في بانكوك، مما يضمن رحلة طبية سلسة من الاستشارة إلى التعافي."
        : "We connect you with leading hospitals and specialists in Bangkok, ensuring a smooth medical journey from consultation to recovery.",
      icon: <Stethoscope size={24} />,
      imageSrc: "/lovable-uploads/6593d901-e5f7-4c5d-8f2f-235d1c865e4b.png",
      link: "/healthcare-solutions"
    },
    {
      title: isRTL ? "منتجعات العافية والتجديد" : "Wellness & Rejuvenation Retreats",
      description: isRTL 
        ? "استمتع بتجارب العافية الفاخرة المصممة للاسترخاء والشفاء والتجديد في أفضل منتجعات العافية في تايلاند."
        : "Indulge in luxury wellness retreats crafted for relaxation, healing, and rejuvenation in Thailand's top wellness resorts.",
      icon: <Heart size={24} />,
      imageSrc: "/lovable-uploads/1bac456a-2bf2-46d3-8823-d4f14c0c02a0.png",
      link: "/wellness-journey"
    },
    {
      title: isRTL ? "الإقامات الحصرية والسفر المصمم" : "Exclusive Stays & Bespoke Travel",
      description: isRTL 
        ? "استمتع بتايلاند في فخامة لا مثيل لها مع فنادقنا الفاخرة المختارة بعناية والفيلات الخاصة، مع وسائل راحة مخصصة."
        : "Experience Thailand in unparalleled luxury with our handpicked premium hotels and private villas, with bespoke amenities.",
      icon: <Building2 size={24} />,
      imageSrc: "/lovable-uploads/adf64b15-b776-4030-9855-3d0f791afb7a.png",
      link: "/luxury-experience"
    }
  ];

  return (
    <section id="services" className="section-container bg-emerald text-offwhite">
      <div className="text-center mb-16">
        <h2 className="heading-lg mb-4 text-gold">
          {isRTL ? "خدمات كونسيرج الفاخرة" : "Luxury Concierge Services"}
        </h2>
        <p className="subheading mx-auto text-offwhite/80">
          {isRTL 
            ? "اكتشف خدماتنا المميزة المصممة لتوفير تجربة لا مثيل لها في تايلاند، مع التركيز على الصحة والعافية والإقامات الفاخرة."
            : "Discover our premium services designed to provide an unparalleled experience in Thailand, focused on health, wellness, and luxurious accommodations."}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Link to={service.link} key={index} className="block hover:no-underline">
            <ServiceCard
              title={service.title}
              description={service.description}
              icon={service.icon}
              imageSrc={service.imageSrc}
              delay={index * 100}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
