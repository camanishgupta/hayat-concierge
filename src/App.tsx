
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Index from './pages/Index';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import HealthcareSolutions from './pages/HealthcareSolutions';
import LuxuryExperience from './pages/LuxuryExperience';
import WellnessJourney from './pages/WellnessJourney';
import Facilities from './pages/Facilities';
import Founder from './pages/Founder';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Enquiry from './pages/Enquiry';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import CookiePolicy from './pages/CookiePolicy';
import { Toaster } from '@/components/ui/toaster';
import { LanguageProvider } from './contexts/LanguageContext';
import { ContentProvider } from './contexts/ContentContext';
import { setupAPIMiddleware } from './api/api-middleware';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Set up API middleware to intercept requests
    setupAPIMiddleware();
  }, []);

  return (
    <LanguageProvider>
      <ContentProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/healthcare-solutions" element={<HealthcareSolutions />} />
              <Route path="/luxury-experience" element={<LuxuryExperience />} />
              <Route path="/wellness-journey" element={<WellnessJourney />} />
              {/* <Route path="/facilities" element={<Facilities />} /> */}
              <Route path="/founder" element={<Founder />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/enquiry" element={<Enquiry />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <Toaster />
      </ContentProvider>
    </LanguageProvider>
  );
}

export default App;
