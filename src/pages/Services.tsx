
import React from 'react';
import { Heart, Building2, Stethoscope } from 'lucide-react';

const Services = () => {
  return (
    <div className="bg-offwhite pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-teal">
        <div className="absolute inset-0 geometric-pattern-bg opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="heading-xl mb-6 hero-text-gradient">Our Premium Services</h1>
            <p className="text-offwhite text-xl max-w-2xl">
              Hayat Concierge offers exceptional, personalized services to ensure your experience in Thailand is nothing short of extraordinary.
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          {/* Medical Tourism */}
          <div className="mb-24">
            <div className="flex items-center justify-center mb-8">
              <Stethoscope className="text-gold mr-4" size={32} />
              <h2 className="heading-lg">Medical Tourism</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d" 
                  alt="Medical Tourism" 
                  className="rounded-xl shadow-xl w-full h-auto"
                />
              </div>
              <div>
                <p className="text-charcoal mb-6">
                  Access Thailand's premier hospitals and specialists with VIP coordination for all medical needs. Our Medical Tourism services include:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-gold mr-3 text-xl">•</span>
                    <p>Personalized medical itineraries with top specialists</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 text-xl">•</span>
                    <p>VIP hospital access and priority appointments</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 text-xl">•</span>
                    <p>Private transportation to and from medical facilities</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 text-xl">•</span>
                    <p>Translation services during consultations</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 text-xl">•</span>
                    <p>Luxury accommodations for recovery periods</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Wellness Retreats */}
          <div className="mb-24">
            <div className="flex items-center justify-center mb-8">
              <Heart className="text-gold mr-4" size={32} />
              <h2 className="heading-lg">Wellness Retreats</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <p className="text-charcoal mb-6">
                  Experience curated wellness journeys tailored to your preferences. Our Wellness Retreat services include:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-gold mr-3 text-xl">•</span>
                    <p>Traditional Thai healing therapies and spa treatments</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 text-xl">•</span>
                    <p>Meditation and mindfulness retreats</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 text-xl">•</span>
                    <p>Customized detox and nutrition programs</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 text-xl">•</span>
                    <p>Exclusive access to premium wellness facilities</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 text-xl">•</span>
                    <p>Fine dining with healthy, Halal-friendly options</p>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1600334129128-685c5582fd35" 
                  alt="Wellness Retreats" 
                  className="rounded-xl shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Luxury Accommodations */}
          <div>
            <div className="flex items-center justify-center mb-8">
              <Building2 className="text-gold mr-4" size={32} />
              <h2 className="heading-lg">Luxury Accommodations</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945" 
                  alt="Luxury Accommodations" 
                  className="rounded-xl shadow-xl w-full h-auto"
                />
              </div>
              <div>
                <p className="text-charcoal mb-6">
                  Stay in handpicked premium hotels and private villas with bespoke amenities. Our Luxury Accommodation services include:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-gold mr-3 text-xl">•</span>
                    <p>VIP check-in and exclusive suite access</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 text-xl">•</span>
                    <p>Private chefs and personalized dining experiences</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 text-xl">•</span>
                    <p>Luxury transportation services</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 text-xl">•</span>
                    <p>Personalized itineraries for exploration</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 text-xl">•</span>
                    <p>Privacy and security throughout your stay</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-teal text-center">
        <div className="container mx-auto px-6">
          <h2 className="heading-lg text-gold mb-6">Experience Unparalleled Service</h2>
          <p className="text-offwhite max-w-2xl mx-auto mb-8">
            Contact us today to discuss how we can tailor our premium services to your specific needs and preferences.
          </p>
          <a href="/contact" className="button-primary inline-block">Get in Touch</a>
        </div>
      </section>
    </div>
  );
};

export default Services;
