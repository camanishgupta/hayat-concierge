
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
      imageSrc: "/lovable-uploads/d8498f7c-1210-45b9-afd8-d8ff816223a8.png",
      link: "/healthcare-solutions"
    },
    {
      title: isRTL ? "منتجعات العافية والتجديد" : "Wellness & Rejuvenation Retreats",
      description: isRTL 
        ? "استمتع بتجارب العافية الفاخرة المصممة للاسترخاء والشفاء والتجديد في أفضل منتجعات العافية في تايلاند."
        : "Indulge in luxury wellness retreats crafted for relaxation, healing, and rejuvenation in Thailand's top wellness resorts.",
      icon: <Heart size={24} />,
      imageSrc: "/lovable-uploads/ec9be84a-4419-47a9-8dd4-629792800ca7.png",
      link: "/wellness-journey"
    },
    {
      title: isRTL ? "الإقامات الحصرية والسفر المصمم" : "Exclusive Stays & Bespoke Travel",
      description: isRTL 
        ? "استمتع بتايلاند في فخامة لا مثيل لها مع فنادقنا الفاخرة المختارة بعناية والفيلات الخاصة، مع وسائل راحة مخصصة."
        : "Experience Thailand in unparalleled luxury with our handpicked premium hotels and private villas, with bespoke amenities.",
      icon: <Building2 size={24} />,
      imageSrc: "/lovable-uploads/d2409855-1669-4389-9789-011feb333ca6.png",
      link: "/luxury-experience"
    }
  ];

  return (
    <section id="services" className="section-container bg-emerald text-offwhite">
      <div className="text-center mb-16">
        <h2 className="heading-lg mb-4 text-gold">
          {isRTL ? "خدمات كونسيرج الفاخرة" : "Hayat Concierge Services"}
        </h2>
        <p className="subheading mx-auto text-offwhite/80">
          {isRTL 
            ? "في حياة كونسيرج، لا نقدم حزمًا قياسية - نحن نخلق تجارب شخصية مصممة حول احتياجاتك الفريدة. سواء كنت تبحث عن رعاية طبية عالمية المستوى، أو منتجع صحي فاخر، أو تجربة سفر لا تُنسى، نحن نهتم بكل التفاصيل بنهج مخصص."
            : "At Hayat Concierge, we don't offer standard packages—we create personalized experiences designed around your unique needs. Whether you're seeking world-class medical care, a luxury wellness retreat, or an unforgettable travel experience, we take care of every detail with a customized approach."}
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
