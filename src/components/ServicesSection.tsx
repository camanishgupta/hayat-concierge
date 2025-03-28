
import React from 'react';
import { Heart, Building2, Car, Stethoscope, Palmtree, Utensils } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: "Medical Tourism",
    description: "Access Thailand's premier hospitals and specialists with VIP coordination for all medical needs.",
    icon: <Stethoscope size={24} />,
    imageSrc: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1035&q=80"
  },
  {
    title: "Wellness Retreats",
    description: "Curated wellness experiences including spa treatments, meditation, and traditional Thai healing.",
    icon: <Heart size={24} />,
    imageSrc: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  },
  {
    title: "Luxury Accommodations",
    description: "Handpicked premium hotels and private villas with bespoke amenities and VIP treatment.",
    icon: <Building2 size={24} />,
    imageSrc: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  },
  {
    title: "Private Transportation",
    description: "Seamless transfers with private chauffeurs, luxury vehicles, and even helicopter services.",
    icon: <Car size={24} />,
    imageSrc: "https://images.unsplash.com/photo-1630700246857-3113649e8341?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80"
  },
  {
    title: "Bespoke Itineraries",
    description: "Customized travel experiences designed around your personal preferences and interests.",
    icon: <Palmtree size={24} />,
    imageSrc: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1039&q=80"
  },
  {
    title: "Fine Dining",
    description: "Reservations at Thailand's most exclusive restaurants and private dining experiences.",
    icon: <Utensils size={24} />,
    imageSrc: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-container bg-cream">
      <div className="text-center mb-16">
        <h2 className="heading-lg mb-4 hero-text-gradient">Luxury Concierge Services</h2>
        <p className="subheading mx-auto">
          Discover our comprehensive suite of premium services designed to provide you with an unparalleled experience in Thailand.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
