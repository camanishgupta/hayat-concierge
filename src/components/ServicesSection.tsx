
import React from 'react';
import { Heart, Building2, Stethoscope } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { useContent } from '@/contexts/ContentContext';
import { useServiceContent } from '@/hooks/useServiceContent';

const ServicesSection = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const { getContent, getImageUrl } = useServiceContent();
  
  // Main content
  const servicesTitle = getContent(
    'services-title', 
    "Hayat Concierge Services", 
    "خدمات كونسيرج الفاخرة"
  );
  
  const servicesDescription = getContent(
    'services-description', 
    "At Hayat Concierge, we don't offer standard packages—we create personalized experiences designed around your unique needs. Whether you're seeking world-class medical care, a luxury wellness retreat, or an unforgettable travel experience, we take care of every detail with a customized approach.",
    "في حياة كونسيرج، لا نقدم حزمًا قياسية - نحن نخلق تجارب شخصية مصممة حول احتياجاتك الفريدة. سواء كنت تبحث عن رعاية طبية عالمية المستوى، أو منتجع صحي فاخر، أو تجربة سفر لا تُنسى، نحن نهتم بكل التفاصيل بنهج مخصص."
  );
  
  // Service 1
  const service1Title = getContent(
    'service1-title', 
    "Medical Concierge & Healthcare Coordination",
    "الخدمات الطبية وتنسيق الرعاية الصحية"
  );
  
  const service1Description = getContent(
    'service1-description', 
    "We connect you with leading hospitals and specialists in Bangkok, ensuring a smooth medical journey from consultation to recovery.",
    "نربطك بالمستشفيات والأخصائيين الرائدين في بانكوك، مما يضمن رحلة طبية سلسة من الاستشارة إلى التعافي."
  );
  
  // Service 2
  const service2Title = getContent(
    'service2-title', 
    "Wellness & Rejuvenation Retreats",
    "منتجعات العافية والتجديد"
  );
  
  const service2Description = getContent(
    'service2-description', 
    "Indulge in luxury wellness retreats crafted for relaxation, healing, and rejuvenation in Thailand's top wellness resorts.",
    "استمتع بتجارب العافية الفاخرة المصممة للاسترخاء والشفاء والتجديد في أفضل منتجعات العافية في تايلاند."
  );
    
  // Service 3
  const service3Title = getContent(
    'service3-title', 
    "Exclusive Stays & Bespoke Travel",
    "الإقامات الحصرية والسفر المصمم"
  );
  
  const service3Description = getContent(
    'service3-description', 
    "Experience Thailand in unparalleled luxury with our handpicked premium hotels and private villas, with bespoke amenities.",
    "استمتع بتايلاند في فخامة لا مثيل لها مع فنادقنا الفاخرة المختارة بعناية والفيلات الخاصة، مع وسائل راحة مخصصة."
  );

  // Find service images in content
  const serviceImage1 = getImageUrl('service1-image', "/lovable-uploads/c2a5eee5-a591-4abd-a19b-70f463e74556.png");
  const serviceImage2 = getImageUrl('service2-image', "/lovable-uploads/35fd8c2e-3b5d-4e47-9216-e5e210033d40.png");
  const serviceImage3 = getImageUrl('service3-image', "/lovable-uploads/218fbae2-0f54-4b7b-a2a8-6a2cca069629.png");

  const services = [
    {
      title: service1Title,
      description: service1Description,
      icon: <Stethoscope size={24} />,
      imageSrc: serviceImage1,
      link: "/healthcare-solutions"
    },
    {
      title: service2Title,
      description: service2Description,
      icon: <Heart size={24} />,
      imageSrc: serviceImage2,
      link: "/wellness-journey"
    },
    {
      title: service3Title,
      description: service3Description,
      icon: <Building2 size={24} />,
      imageSrc: serviceImage3,
      link: "/luxury-experience"
    }
  ];

  return (
    <section id="services" className="section-container bg-emerald text-offwhite">
      <div className="text-center mb-16">
        <h2 className="heading-lg mb-4 text-gold">
          {servicesTitle}
        </h2>
        <p className="subheading mx-auto text-offwhite/80">
          {servicesDescription}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            imageSrc={service.imageSrc}
            delay={index * 100}
            link={service.link}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
