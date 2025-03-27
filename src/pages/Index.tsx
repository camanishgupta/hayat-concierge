
import React, { useEffect, useState, useRef } from 'react';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import Footer from '@/components/Footer';
import { 
  Heart, 
  Building2, 
  Car, 
  Stethoscope, 
  Palmtree, 
  Utensils, 
  ArrowRight, 
  Check, 
  Send, 
  Star,
  Phone,  // Added Phone icon
  Mail,   // Added Mail icon
  MapPin  // Added MapPin icon
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Index = () => {
  const [isVisible, setIsVisible] = useState<{[key: string]: boolean}>({
    about: false,
    testimonials: false,
    partners: false,
    contact: false
  });
  
  const sectionRefs = {
    about: useRef<HTMLDivElement>(null),
    testimonials: useRef<HTMLDivElement>(null),
    partners: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null)
  };

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    Object.entries(sectionRefs).forEach(([key, ref]) => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIsVisible(prev => ({ ...prev, [key]: true }));
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      
      if (ref.current) {
        observer.observe(ref.current);
      }
      
      observers.push(observer);
    });
    
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

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

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Medical Tourism Patient",
      text: "The attention to detail was impeccable. From my hospital arrangements to my beachside recovery, everything was seamless and truly luxurious.",
      rating: 5
    },
    {
      name: "Robert Williams",
      role: "Executive Traveler",
      text: "As a frequent business traveler to Thailand, their concierge service has transformed my experience. Every detail is handled with precision and care.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "Wellness Retreat Guest",
      text: "My wellness journey in Thailand exceeded all expectations. The personalized program and exclusive access to top facilities made all the difference.",
      rating: 5
    }
  ];

  const partners = [
    {
      name: "Bangkok Hospital",
      type: "Medical",
      logo: "https://via.placeholder.com/150x80?text=Bangkok+Hospital"
    },
    {
      name: "Bumrungrad International",
      type: "Medical",
      logo: "https://via.placeholder.com/150x80?text=Bumrungrad"
    },
    {
      name: "The Peninsula Bangkok",
      type: "Accommodation",
      logo: "https://via.placeholder.com/150x80?text=Peninsula"
    },
    {
      name: "Mandarin Oriental",
      type: "Accommodation",
      logo: "https://via.placeholder.com/150x80?text=Mandarin+Oriental"
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Services Section */}
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
      
      {/* About Section */}
      <section 
        id="about" 
        ref={sectionRefs.about} 
        className="section-container bg-white"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div 
            className={cn(
              "opacity-0 transform translate-x-8 transition-all duration-1000",
              { "opacity-100 translate-x-0": isVisible.about }
            )}
          >
            <span className="inline-block py-1 px-3 bg-sand text-navy rounded-full text-sm font-medium mb-6">
              Why Choose Us
            </span>
            <h2 className="heading-lg mb-6 hero-text-gradient">
              Elevating Luxury Travel in Thailand
            </h2>
            <p className="text-muted-foreground mb-6">
              Bespoke Thai Journeys was founded with a singular mission: to provide discerning travelers with effortless access to Thailand's finest experiences. Our deep local connections and attention to detail ensure a seamless journey.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Personalized service with dedicated concierge",
                "VIP access to premium facilities",
                "End-to-end journey management",
                "24/7 support throughout your stay"
              ].map((point, index) => (
                <div key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center mt-1 mr-3">
                    <Check size={14} className="text-gold" />
                  </span>
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
            
            <a href="#contact" className="button-primary inline-flex items-center gap-2">
              Learn More About Our Approach
              <ArrowRight size={16} />
            </a>
          </div>
          
          <div 
            className={cn(
              "relative opacity-0 transform translate-x-8 transition-all duration-1000 delay-300",
              { "opacity-100 translate-x-0": isVisible.about }
            )}
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                alt="Luxury experience in Thailand" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-2/3 aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1036&q=80" 
                alt="Thai Spa experience" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-24 -right-10 w-32 h-32 bg-gold/10 rounded-full backdrop-blur-md flex items-center justify-center p-4 text-center shadow-lg border border-gold/20">
              <p className="font-serif text-navy">
                <span className="block text-2xl font-bold">10+</span>
                <span className="text-xs">Years of Excellence</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section 
        id="testimonials" 
        ref={sectionRefs.testimonials} 
        className="section-container bg-navy text-white"
      >
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 bg-gold/20 text-gold rounded-full text-sm font-medium mb-6">
            Client Experiences
          </span>
          <h2 className="heading-lg mb-4 text-white">What Our Clients Say</h2>
          <p className="subheading mx-auto text-white/70">
            Discover how we've transformed our clients' experiences in Thailand with our premium concierge services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className={cn(
                "glass-card bg-white/5 border-white/10 p-8 opacity-0 transform translate-y-8 transition-all duration-700",
                { "opacity-100 translate-y-0": isVisible.testimonials }
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-gold fill-gold" />
                ))}
              </div>
              <blockquote className="mb-6 text-white/90 italic">
                "{testimonial.text}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center text-gold mr-3">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-white/60">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Partners */}
      <section 
        id="partners" 
        ref={sectionRefs.partners} 
        className="section-container bg-cream"
      >
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 bg-navy/10 text-navy rounded-full text-sm font-medium mb-6">
            Our Network
          </span>
          <h2 className="heading-lg mb-4 hero-text-gradient">Exclusive Partners</h2>
          <p className="subheading mx-auto">
            We collaborate with Thailand's most prestigious establishments to ensure unparalleled quality and service.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div 
              key={partner.name}
              className={cn(
                "glass-card p-6 flex flex-col items-center text-center opacity-0 transform translate-y-4 transition-all duration-500",
                { "opacity-100 translate-y-0": isVisible.partners }
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 p-4">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-12 w-auto mx-auto object-contain"
                />
              </div>
              <h3 className="font-medium text-navy">{partner.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{partner.type}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a href="/facilities" className="button-secondary inline-flex items-center gap-2">
            See All Partners
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
      
      {/* Contact Section */}
      <section 
        id="contact" 
        ref={sectionRefs.contact} 
        className="section-container bg-white"
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div 
            className={cn(
              "lg:col-span-2 opacity-0 transform translate-y-8 transition-all duration-700",
              { "opacity-100 translate-y-0": isVisible.contact }
            )}
          >
            <span className="inline-block py-1 px-3 bg-navy/10 text-navy rounded-full text-sm font-medium mb-6">
              Get in Touch
            </span>
            <h2 className="heading-lg mb-6 hero-text-gradient">
              Begin Your Bespoke Journey
            </h2>
            <p className="text-muted-foreground mb-8">
              Contact our concierge team to discuss your needs and let us craft an exceptional Thai experience tailored just for you.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center mr-4">
                  <Phone size={18} className="text-navy" />
                </div>
                <div>
                  <p className="font-medium text-navy">Call Us</p>
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
                  <p className="font-medium text-navy">Email</p>
                  <a href="mailto:contact@bespokethai.com" className="text-muted-foreground hover:text-navy transition-colors">
                    contact@bespokethai.com
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
              { "opacity-100 translate-y-0": isVisible.contact }
            )}
          >
            <form className="glass-card p-8">
              <h3 className="heading-md mb-6 text-navy">Inquire Now</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy/60 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy/60 transition-all"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-medium text-navy mb-1">
                  Service of Interest
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy/60 transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="medical">Medical Tourism</option>
                  <option value="wellness">Wellness Retreat</option>
                  <option value="accommodation">Luxury Accommodation</option>
                  <option value="transportation">Private Transportation</option>
                  <option value="itinerary">Bespoke Itinerary</option>
                  <option value="dining">Fine Dining</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-navy mb-1">
                  Your Requirements
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy/60 transition-all"
                  placeholder="Tell us about your needs and preferences"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="button-primary bg-navy w-full flex items-center justify-center gap-2"
              >
                Send Inquiry
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
