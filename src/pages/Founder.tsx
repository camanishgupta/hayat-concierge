
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Briefcase, MapPin, Star, UserRound, Globe, Heart, Building } from 'lucide-react';
import { useContentItem } from '@/hooks/useContentItem';
import { FlipCard } from '@/components/FlipCard';

const Founder = () => {
  const founderIntro = useContentItem("founder-intro");

  return (
    <div className="bg-offwhite">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-teal/10 geometric-pattern-bg"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="heading-xl mb-6 hero-text-gradient">Meet the Founder</h1>
            <p className="subheading mb-8 text-xl">A Vision Rooted in Passion & Experience</p>
            
            <div className="relative mb-12">
              <div className="absolute inset-0 rounded-full bg-gold/20 blur-2xl animate-image-glow"></div>
              <Avatar className="w-48 h-48 border-4 border-gold shadow-xl">
                <AvatarImage src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" />
                <AvatarFallback className="bg-teal text-gold text-3xl">HC</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Journey Sections */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Cultural Perspective Flip Card */}
            <FlipCard
              title="A Unique Cultural Perspective"
              icon={<UserRound className="text-gold" />}
              frontImage="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              frontAlt="Diverse cultural background"
              backContent={
                <ul className="space-y-3 text-left">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <p>French-Algerian heritage providing a rich multicultural perspective</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <p>Deep understanding of both Middle Eastern and Thai cultures</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <p>Bridge between cultural worlds for seamless client experiences</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <p>Multilingual: Fluent in Arabic, French, and English</p>
                  </li>
                </ul>
              }
            />

            {/* Luxury Journey Flip Card */}
            <FlipCard
              title="A Journey Through Luxury & Hospitality"
              icon={<Briefcase className="text-gold" />}
              frontImage="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
              frontAlt="Professional luxury experience"
              backContent={
                <ul className="space-y-3 text-left">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <p>Experience with luxury brands including IXINA (German high-end kitchens)</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <p>Worked in a 5-star hotel in Paris, developing hospitality expertise</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <p>Over 10 years teaching experience, developing organizational and leadership skills</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <p>Professional training from The Travel Institute (Luxury Travel & Hospitality)</p>
                  </li>
                </ul>
              }
            />

            {/* Passion Flip Card */}
            <FlipCard
              title="Passion for Travel & Wellness"
              icon={<Globe className="text-gold" />}
              frontImage="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
              frontAlt="Thailand landscapes"
              backContent={
                <ul className="space-y-3 text-left">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <p>Love for travel and cultural exploration led to Asia</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <p>Fell in love with Thailand's hospitality and wellness traditions</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <p>Deep passion for holistic health services and wellness programs</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <p>Personal experience with Thailand's exceptional medical system</p>
                  </li>
                </ul>
              }
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Inspiration Flip Card */}
            <FlipCard
              title="The Inspiration Behind Hayat Concierge"
              icon={<Heart className="text-gold" />}
              frontImage="https://images.unsplash.com/photo-1501854140801-50d01698950b"
              frontAlt="Thailand wellness"
              backContent={
                <ul className="space-y-3 text-left">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <p>Personal medical experience in Thailand revealed exceptional care standards</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <p>Discovered Thailand's status as a premier wellness and medical tourism destination</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <p>Inspired to share Thailand's world-class medical and wellness offerings</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <p>Mission to bridge cultural gaps for Middle Eastern clients seeking services in Thailand</p>
                  </li>
                </ul>
              }
            />

            {/* Bridge Flip Card */}
            <FlipCard
              title="Bridging Luxury & Medical Excellence"
              icon={<Building className="text-gold" />}
              frontImage="https://images.unsplash.com/photo-1526786220381-1d21eedf92bf"
              frontAlt="Luxury medical excellence"
              backContent={
                <ul className="space-y-3 text-left">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <p>Unique cultural background provides authentic understanding of client needs</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <p>Multilingual skills enable clear communication and cultural sensitivity</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <p>Professional training from The Travel Institute in luxury travel expertise</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <p>Network of premium healthcare and wellness partners throughout Thailand</p>
                  </li>
                </ul>
              }
            />
          </div>
          
          <Card className="border-gold/20 bg-white/80 backdrop-blur-sm shadow-lg mt-10">
            <CardContent className="p-6">
              <h3 className="text-xl text-teal font-medium mb-4">My Mission:</h3>
              <blockquote className="border-l-4 border-gold pl-4 italic text-charcoal/90">
                "To offer unparalleled access to Thailand's finest medical institutions, luxury resorts, 
                and bespoke experiences—ensuring every client receives the highest level of care, privacy, 
                and exclusivity."
              </blockquote>
            </CardContent>
          </Card>
              
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <p className="text-gold text-lg font-bold">Arabic</p>
              <p className="text-charcoal/70">Fluent</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <p className="text-gold text-lg font-bold">French</p>
              <p className="text-charcoal/70">Native</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <p className="text-gold text-lg font-bold">English</p>
              <p className="text-charcoal/70">Fluent</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-teal/10 geometric-pattern-bg">
        <div className="container mx-auto px-6 text-center">
          <h2 className="heading-lg mb-6">Experience the Perfect Blend of Cultures</h2>
          <p className="text-charcoal/80 max-w-2xl mx-auto mb-8">
            Let me be your guide to Thailand's finest luxury and medical experiences, 
            tailored to the unique needs and expectations of Middle Eastern clients.
          </p>
          <a href="/contact" className="button-primary inline-block">Connect With Me</a>
        </div>
      </section>
    </div>
  );
};

export default Founder;
