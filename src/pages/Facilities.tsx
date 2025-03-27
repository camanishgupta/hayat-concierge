
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Building2, Stethoscope, Phone, Mail, MapPin, Star, ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const partners = [
  {
    id: 1,
    name: "Bangkok Hospital",
    type: "Medical",
    category: "Hospital",
    location: "Bangkok",
    description: "Bangkok Hospital is a JCI-accredited medical facility offering comprehensive healthcare services with a focus on international patients. Their International Medical Center provides seamless service in over 30 languages.",
    amenities: [
      "VIP Patient Suites",
      "International Patient Services",
      "Medical Coordination",
      "Translation Services",
      "Concierge Desk"
    ],
    contact: {
      phone: "+66 2310 3000",
      email: "info@bangkokhospital.com",
      address: "2 Soi Soonvijai 7, New Petchburi Rd., Bangkok 10310"
    },
    rating: 5,
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1173&q=80"
  },
  {
    id: 2,
    name: "Bumrungrad International",
    type: "Medical",
    category: "Hospital",
    location: "Bangkok",
    description: "Bumrungrad International Hospital is one of Southeast Asia's largest private hospitals, with over 580 beds and 30 specialty centers. It serves over a million patients annually, including over 520,000 international patients.",
    amenities: [
      "Luxury Inpatient Rooms",
      "Executive Health Screening",
      "Airport Transfer",
      "Medical Visa Service",
      "Interpreters"
    ],
    contact: {
      phone: "+66 2066 8888",
      email: "info@bumrungrad.com",
      address: "33 Sukhumvit 3, Wattana, Bangkok 10110"
    },
    rating: 5,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1035&q=80"
  },
  {
    id: 3,
    name: "The Peninsula Bangkok",
    type: "Accommodation",
    category: "Hotel",
    location: "Bangkok",
    description: "The Peninsula Bangkok is a stunning riverside hotel offering luxurious accommodation with panoramic views of the Chao Phraya River. Known for its excellent service and iconic boat shuttle, it represents the height of Bangkok luxury.",
    amenities: [
      "Riverside Pool",
      "The Peninsula Spa",
      "Private Boat Service",
      "Multiple Restaurants",
      "Butler Service"
    ],
    contact: {
      phone: "+66 2861 2888",
      email: "pbk@peninsula.com",
      address: "333 Charoennakorn Road, Klongsan, Bangkok 10600"
    },
    rating: 5,
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=1332&q=80"
  },
  {
    id: 4,
    name: "Mandarin Oriental",
    type: "Accommodation",
    category: "Hotel",
    location: "Bangkok",
    description: "The Mandarin Oriental Bangkok is a legendary hotel with a rich history dating back to 1876. This iconic property offers a perfect blend of traditional Thai luxury and modern amenities, with impeccable service.",
    amenities: [
      "Luxury Spa",
      "Famous Authors' Lounge",
      "Multiple Award-Winning Restaurants",
      "Thai Cooking School",
      "Private Butler Service"
    ],
    contact: {
      phone: "+66 2659 9000",
      email: "mobkk-reservations@mohg.com",
      address: "48 Oriental Avenue, Bangkok 10500"
    },
    rating: 5,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 5,
    name: "Samitivej Hospital",
    type: "Medical",
    category: "Hospital",
    location: "Bangkok",
    description: "Samitivej Hospital is a premier medical facility with multiple branches across Bangkok. Known for its excellent maternal and pediatric care, it also offers comprehensive services for international patients.",
    amenities: [
      "Japanese Medical Center",
      "Children's Hospital",
      "Wellness Center",
      "International Patient Lounge",
      "Insurance Coordination"
    ],
    contact: {
      phone: "+66 2711 8000",
      email: "info@samitivej.co.th",
      address: "133 Sukhumvit 49, Klongtan, Wattana, Bangkok 10110"
    },
    rating: 4,
    image: "https://images.unsplash.com/photo-1516841273335-e39b37888115?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80"
  },
  {
    id: 6,
    name: "Four Seasons Resort Chiang Mai",
    type: "Accommodation",
    category: "Resort",
    location: "Chiang Mai",
    description: "Nestled among terraced rice fields and mountains in Mae Rim Valley, Four Seasons Resort Chiang Mai offers an immersive experience of Northern Thai culture with ultimate luxury and exceptional service.",
    amenities: [
      "Private Pavilions and Villas",
      "Rice Paddy Experience",
      "Award-Winning Spa",
      "Cooking School",
      "Yoga Barn"
    ],
    contact: {
      phone: "+66 53 298 181",
      email: "reservations.chiangmai@fourseasons.com",
      address: "502 Moo 1, Mae Rim-Samoeng Old Road, Chiang Mai 50180"
    },
    rating: 5,
    image: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 7,
    name: "Bangkok Nursing Home Hospital",
    type: "Medical",
    category: "Hospital",
    location: "Bangkok",
    description: "BNH Hospital (Bangkok Nursing Home) is one of Thailand's oldest private hospitals, established in 1898. This boutique medical facility specializes in personalized care with a strong focus on quality and patient comfort.",
    amenities: [
      "Personalized Care",
      "International Patient Center",
      "Executive Check-up Programs",
      "Aesthetic Center",
      "Concierge Services"
    ],
    contact: {
      phone: "+66 2686 2700",
      email: "info@bnhhospital.com",
      address: "9/1 Convent Road, Silom, Bangkok 10500"
    },
    rating: 4,
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 8,
    name: "Rosewood Phuket",
    type: "Accommodation",
    category: "Resort",
    location: "Phuket",
    description: "Rosewood Phuket is a luxurious beachfront resort nestled on a 600-meter secluded beach at Emerald Bay. This tropical hideaway combines innovative architecture with sophisticated interiors and careful environmental preservation.",
    amenities: [
      "Oceanfront Villas with Private Pools",
      "Asaya Wellness Center",
      "Beachfront Dining",
      "Rosewood Explorers Kids Club",
      "Ecological Programs"
    ],
    contact: {
      phone: "+66 76 356 888",
      email: "phuket@rosewoodhotels.com",
      address: "88/28 Muen-Ngern Road, Patong, Kathu, Phuket 83150"
    },
    rating: 5,
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1025&q=80"
  }
];

const Facilities = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFilters, setActiveFilters] = useState<{
    type: string[];
    category: string[];
    location: string[];
  }>({
    type: [],
    category: [],
    location: []
  });
  const [expandedPartner, setExpandedPartner] = useState<number | null>(null);
  
  const filterOptions = {
    type: Array.from(new Set(partners.map(p => p.type))),
    category: Array.from(new Set(partners.map(p => p.category))),
    location: Array.from(new Set(partners.map(p => p.location)))
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleFilterChange = (filterType: 'type' | 'category' | 'location', value: string) => {
    setActiveFilters(prev => {
      const isActive = prev[filterType].includes(value);
      
      if (isActive) {
        return {
          ...prev,
          [filterType]: prev[filterType].filter(v => v !== value)
        };
      } else {
        return {
          ...prev,
          [filterType]: [...prev[filterType], value]
        };
      }
    });
  };
  
  const togglePartnerDetails = (id: number) => {
    setExpandedPartner(expandedPartner === id ? null : id);
  };
  
  const filteredPartners = partners.filter(partner => {
    const typeMatch = activeFilters.type.length === 0 || activeFilters.type.includes(partner.type);
    const categoryMatch = activeFilters.category.length === 0 || activeFilters.category.includes(partner.category);
    const locationMatch = activeFilters.location.length === 0 || activeFilters.location.includes(partner.location);
    
    return typeMatch && categoryMatch && locationMatch;
  });

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="container mx-auto max-w-4xl text-center">
          <span 
            className={cn(
              "inline-block py-1 px-3 bg-navy/10 text-navy rounded-full text-sm font-medium mb-6 opacity-0 transform translate-y-4 transition-all duration-700",
              { "opacity-100 translate-y-0": isLoaded }
            )}
          >
            Our Network
          </span>
          <h1 
            className={cn(
              "heading-xl hero-text-gradient mb-6 opacity-0 transform translate-y-4 transition-all duration-700 delay-100",
              { "opacity-100 translate-y-0": isLoaded }
            )}
          >
            Preferred Partners
          </h1>
          <p 
            className={cn(
              "subheading mx-auto opacity-0 transform translate-y-4 transition-all duration-700 delay-200",
              { "opacity-100 translate-y-0": isLoaded }
            )}
          >
            Discover our curated network of premium hospitals, hotels, and resorts across Thailand, providing exceptional service to our clients.
          </p>
        </div>
      </section>
      
      {/* Filter Section */}
      <section 
        className={cn(
          "container mx-auto px-6 mb-12 opacity-0 transform translate-y-4 transition-all duration-700 delay-300",
          { "opacity-100 translate-y-0": isLoaded }
        )}
      >
        <div className="glass-card p-6 mb-10">
          <h2 className="font-serif text-xl font-medium mb-4 text-navy">Filter Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Type Filter */}
            <div>
              <h3 className="text-sm font-medium text-navy mb-3">Type</h3>
              <div className="space-y-2">
                {filterOptions.type.map(type => (
                  <label key={type} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={activeFilters.type.includes(type)}
                      onChange={() => handleFilterChange('type', type)}
                      className="rounded text-gold focus:ring-gold"
                    />
                    <span className="text-muted-foreground">{type}</span>
                  </label>
                ))}
              </div>
            </div>
            
            {/* Category Filter */}
            <div>
              <h3 className="text-sm font-medium text-navy mb-3">Category</h3>
              <div className="space-y-2">
                {filterOptions.category.map(category => (
                  <label key={category} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={activeFilters.category.includes(category)}
                      onChange={() => handleFilterChange('category', category)}
                      className="rounded text-gold focus:ring-gold"
                    />
                    <span className="text-muted-foreground">{category}</span>
                  </label>
                ))}
              </div>
            </div>
            
            {/* Location Filter */}
            <div>
              <h3 className="text-sm font-medium text-navy mb-3">Location</h3>
              <div className="space-y-2">
                {filterOptions.location.map(location => (
                  <label key={location} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={activeFilters.location.includes(location)}
                      onChange={() => handleFilterChange('location', location)}
                      className="rounded text-gold focus:ring-gold"
                    />
                    <span className="text-muted-foreground">{location}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Partners List */}
      <section className="container mx-auto px-6 mb-16">
        <div className="space-y-8">
          {filteredPartners.length > 0 ? (
            filteredPartners.map((partner, index) => (
              <div 
                key={partner.id}
                className={cn(
                  "glass-card overflow-hidden opacity-0 transform translate-y-8 transition-all duration-700",
                  { "opacity-100 translate-y-0": isLoaded }
                )}
                style={{ transitionDelay: `${400 + (index * 100)}ms` }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="h-64 md:h-auto">
                    <img 
                      src={partner.image} 
                      alt={partner.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="col-span-2 p-6 md:p-8">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="flex items-center">
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-navy/10 mr-3">
                            {partner.type === "Medical" ? <Stethoscope className="text-navy" size={16} /> : <Building2 className="text-navy" size={16} />}
                          </span>
                          <span className="text-xs font-medium bg-navy/10 text-navy py-1 px-2 rounded-full">
                            {partner.category}
                          </span>
                        </div>
                        <h3 className="heading-md mt-2 text-navy">{partner.name}</h3>
                        <div className="flex items-center mb-2">
                          <div className="flex space-x-1 mr-3">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                size={14} 
                                className={cn(
                                  i < partner.rating ? "text-gold fill-gold" : "text-gray-300"
                                )} 
                              />
                            ))}
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {partner.location}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => togglePartnerDetails(partner.id)}
                        className="text-navy hover:text-navy/70 transition-colors"
                        aria-label={expandedPartner === partner.id ? "Collapse details" : "Expand details"}
                      >
                        <ChevronDown 
                          size={20} 
                          className={cn(
                            "transition-transform duration-300",
                            expandedPartner === partner.id ? "transform rotate-180" : ""
                          )} 
                        />
                      </button>
                    </div>
                    <p className="text-muted-foreground mb-4">{partner.description}</p>
                    
                    {/* Expanded Details */}
                    <div 
                      className={cn(
                        "overflow-hidden transition-all duration-500",
                        expandedPartner === partner.id 
                          ? "max-h-[500px] opacity-100" 
                          : "max-h-0 opacity-0"
                      )}
                    >
                      <div className="border-t border-gray-200 pt-4 mt-4">
                        <h4 className="font-medium text-navy mb-2">Amenities & Services</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                          {partner.amenities.map((amenity, i) => (
                            <li key={i} className="flex items-start">
                              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center mt-0.5 mr-2">
                                <Star size={12} className="text-gold" />
                              </span>
                              <span className="text-muted-foreground text-sm">{amenity}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <h4 className="font-medium text-navy mb-2">Contact Information</h4>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Phone size={14} className="mr-2 text-navy/70" />
                            <a href={`tel:${partner.contact.phone}`} className="hover:text-navy transition-colors">
                              {partner.contact.phone}
                            </a>
                          </div>
                          <div className="flex items-center">
                            <Mail size={14} className="mr-2 text-navy/70" />
                            <a href={`mailto:${partner.contact.email}`} className="hover:text-navy transition-colors">
                              {partner.contact.email}
                            </a>
                          </div>
                          <div className="flex items-start">
                            <MapPin size={14} className="mr-2 mt-1 text-navy/70 flex-shrink-0" />
                            <span>{partner.contact.address}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => togglePartnerDetails(partner.id)}
                      className="mt-4 text-sm font-medium text-navy hover:text-navy/70 flex items-center transition-colors"
                    >
                      {expandedPartner === partner.id ? "Show Less" : "Show More"}
                      <ChevronDown 
                        size={16} 
                        className={cn(
                          "ml-1 transition-transform duration-300",
                          expandedPartner === partner.id ? "transform rotate-180" : ""
                        )} 
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div 
              className={cn(
                "text-center py-16 opacity-0 transform translate-y-4 transition-all duration-700 delay-300",
                { "opacity-100 translate-y-0": isLoaded }
              )}
            >
              <h3 className="heading-md mb-2 text-navy">No partners found</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your filter criteria</p>
              <button
                onClick={() => setActiveFilters({ type: [], category: [], location: [] })}
                className="button-secondary"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA */}
      <section 
        className={cn(
          "container mx-auto px-6 mb-16 opacity-0 transform translate-y-8 transition-all duration-700 delay-500",
          { "opacity-100 translate-y-0": isLoaded }
        )}
      >
        <div className="bg-navy text-white rounded-2xl p-10 text-center">
          <h2 className="heading-lg mb-4 text-white">Bespoke Access to Premium Facilities</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Through our exclusive partnerships, we provide VIP access to Thailand's finest medical facilities and accommodations, ensuring a seamless experience tailored to your needs.
          </p>
          <a href="/#contact" className="button-primary border-2 border-transparent bg-gold hover:bg-gold/90 text-navy inline-flex items-center gap-2">
            Inquire About Our Services
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Facilities;
