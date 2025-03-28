
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Briefcase, MapPin, Star, UserRound } from 'lucide-react';

const Founder = () => {
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

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Founder's Journey */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <UserRound className="text-gold" />
                  <h2 className="heading-md">A Unique Cultural Perspective</h2>
                </div>
                <p className="text-charcoal leading-relaxed">
                  Born into a French-Algerian heritage, I have always been immersed in a rich blend of cultures, 
                  which has given me a deep appreciation for diversity. My profound understanding of Middle Eastern 
                  and Thai cultures allows me to bridge the gap between these two worlds, ensuring seamless and 
                  culturally attuned luxury experiences for my clients.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Briefcase className="text-gold" />
                  <h2 className="heading-md">A Journey Through Luxury & Hospitality</h2>
                </div>
                <p className="text-charcoal leading-relaxed">
                  With a strong background in luxury services and hospitality, my experience spans across high-end 
                  brands such as IXINA (German high-end kitchens) and working in a 4-star hotel in Paris. These 
                  roles shaped my expertise in delivering top-tier services, where attention to detail and client 
                  satisfaction are paramount.
                </p>
                <p className="text-charcoal leading-relaxed">
                  Additionally, having worked as a teacher for over a decade, I developed invaluable skills in 
                  organization, patience, leadership, problem-solving, and active listening—qualities that now 
                  define my approach to providing exceptional concierge services.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="text-gold" />
                  <h2 className="heading-md">A Passion for Travel & Wellness</h2>
                </div>
                <div className="relative h-64 w-full rounded-xl overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" 
                    alt="Thailand landscapes" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <p className="text-charcoal leading-relaxed">
                  My passion for travel and cultural exploration led me to extensively explore Asia, where I 
                  ultimately fell in love with Thailand. There is an undeniable magic in this country—its welcoming 
                  spirit, breathtaking landscapes, and deep-rooted traditions in wellness and hospitality captivated me.
                </p>
                <p className="text-charcoal leading-relaxed">
                  During my travels, I also developed a love for yoga and wellness services, discovering Thailand's 
                  unparalleled offerings in holistic health, rejuvenation retreats, and world-class medical facilities. 
                  This inspired me to merge my passions for luxury travel, wellness, and personalized experiences.
                </p>
              </div>
            </div>

            {/* Right Column - Inspiration and Mission */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Star className="text-gold" />
                  <h2 className="heading-md">A Personal Experience That Inspired Hayat Concierge</h2>
                </div>
                <div className="relative h-64 w-full rounded-xl overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843" 
                    alt="Thailand wellness" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <p className="text-charcoal leading-relaxed">
                  The turning point in my journey came when I personally experienced Thailand's medical system after 
                  an unexpected accident. I was taken to a Thai hospital, and from the moment I arrived, I was 
                  overwhelmed by the exceptional hospitality, professionalism, and world-class medical services I received.
                </p>
                <p className="text-charcoal leading-relaxed">
                  The level of care was unlike anything I had ever encountered—warm, efficient, and deeply respectful. 
                  This experience made me realize that Thailand is not just a luxury travel destination but also a 
                  premier hub for medical tourism.
                </p>
                <p className="text-charcoal leading-relaxed">
                  I knew then that I wanted to share this experience with others. I wanted Middle Eastern clients to 
                  feel the same sense of comfort, trust, and excellence when seeking medical and wellness services 
                  abroad. This is why I created Hayat Concierge—to be the exclusive bridge connecting the Middle 
                  Eastern elite with Thailand's luxury hospitality, wellness, and world-class medical care.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Award className="text-gold" />
                  <h2 className="heading-md">Bridging Luxury & Medical Excellence</h2>
                </div>
                <p className="text-charcoal leading-relaxed">
                  With my multilingual skills (Arabic, French, and English) and professional training from The 
                  Travel Institute (Luxury Travel & Hospitality), I am uniquely positioned to curate seamless, 
                  personalized experiences that cater to the specific needs of high-end Middle Eastern travelers.
                </p>
                
                <Card className="border-gold/20 bg-white/80 backdrop-blur-sm shadow-lg mt-6">
                  <CardContent className="p-6">
                    <h3 className="text-xl text-teal font-medium mb-4">At Hayat Concierge, my mission is simple:</h3>
                    <blockquote className="border-l-4 border-gold pl-4 italic text-charcoal/90">
                      "To offer unparalleled access to Thailand's finest medical institutions, luxury resorts, 
                      and bespoke experiences—ensuring every client receives the highest level of care, privacy, 
                      and exclusivity."
                    </blockquote>
                  </CardContent>
                </Card>
              </div>
              
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
