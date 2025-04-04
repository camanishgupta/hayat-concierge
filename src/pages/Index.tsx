
import React, { lazy, Suspense } from 'react';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';

// Lazy load less critical sections
const AboutSection = lazy(() => import('@/components/AboutSection'));
const TestimonialsSection = lazy(() => import('@/components/TestimonialsSection'));
const PartnersSection = lazy(() => import('@/components/PartnersSection'));
const ContactSection = lazy(() => import('@/components/ContactSection'));

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <Suspense fallback={<div className="min-h-[40vh] flex items-center justify-center">Loading...</div>}>
        <AboutSection />
        <TestimonialsSection />
        <PartnersSection />
        <ContactSection />
      </Suspense>
    </div>
  );
};

export default Index;
