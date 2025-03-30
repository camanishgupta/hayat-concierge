
import React from 'react';
import { Heart, Building2, Stethoscope } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: "Medical Tourism",
    description: "Access Thailand's premier hospitals and specialists with VIP coordination for all medical needs, including personalized transportation and bespoke medical itineraries.",
    icon: <Stethoscope size={24} />,
    imageSrc: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1035&q=80"
  },
  {
    title: "Wellness Retreats",
    description: "Curated wellness experiences including spa treatments, meditation, traditional Thai healing, with fine dining options and private transportation to exclusive locations.",
    icon: <Heart size={24} />,
    imageSrc: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  },
  {
    title: "Luxury Accommodations",
    description: "Handpicked premium hotels and private villas with bespoke amenities, VIP treatment, gourmet dining experiences, and custom itineraries for the ultimate luxury stay.",
    icon: <Building2 size={24} />,
    imageSrc: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-container bg-emerald text-offwhite">
      <div className="text-center mb-16">
        <h2 className="heading-lg mb-4 text-gold">Luxury Concierge Services</h2>
        <p className="subheading mx-auto text-offwhite/80">
          Discover our premium services designed to provide an unparalleled experience in Thailand, focused on health, wellness, and luxurious accommodations.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            {...service}
            delay={index * 100}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
