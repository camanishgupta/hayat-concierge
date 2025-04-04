
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Facilities from "./pages/Facilities";
import Enquiry from "./pages/Enquiry";
import AboutUs from "./pages/AboutUs";
import Founder from "./pages/Founder";
import Services from "./pages/Services";
import HealthcareSolutions from "./pages/HealthcareSolutions";
import WellnessJourney from "./pages/WellnessJourney";
import LuxuryExperience from "./pages/LuxuryExperience";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import CookiePolicy from "./pages/CookiePolicy";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ContentProvider } from "./contexts/ContentContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Add CSS to handle RTL layout adjustments
    const style = document.createElement('style');
    style.textContent = `
      .rtl {
        direction: rtl;
        text-align: right;
      }
      
      .rtl .nav-link::after {
        left: auto;
        right: 0;
      }
      
      .rtl .language-switcher {
        margin-right: 0.5rem;
        margin-left: 0;
      }
      
      html[dir="rtl"] .flex {
        flex-direction: row-reverse;
      }
      
      html[dir="rtl"] .flex.flex-row-reverse {
        flex-direction: row;
      }
      
      html[dir="rtl"] .text-right {
        text-align: left;
      }
      
      html[dir="rtl"] .text-left {
        text-align: right;
      }
      
      html[dir="rtl"] .mr-1, 
      html[dir="rtl"] .mr-2, 
      html[dir="rtl"] .mr-3, 
      html[dir="rtl"] .mr-4 {
        margin-right: 0;
      }
      
      html[dir="rtl"] .ml-1,
      html[dir="rtl"] .ml-2,
      html[dir="rtl"] .ml-3,
      html[dir="rtl"] .ml-4 {
        margin-left: 0;
        margin-right: 0.25rem;
      }
      
      /* Fix footer positioning */
      footer {
        position: relative;
        width: 100%;
        clear: both;
      }
      
      /* Ensure content takes full width and footer stays at bottom */
      .flex.flex-col.min-h-screen {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      }
      
      .flex-grow {
        flex: 1 0 auto;
      }
      
      /* Fix Enquiry page text color */
      .glass-card label,
      .glass-card input,
      .glass-card textarea,
      .glass-card select,
      .glass-card option {
        color: #222 !important;
      }
      
      .glass-card textarea::placeholder,
      .glass-card input::placeholder {
        color: #666 !important;
      }
      
      /* Ensure form elements are visible */
      input[type="text"],
      input[type="email"],
      input[type="tel"],
      input[type="date"],
      input[type="number"],
      input,
      textarea,
      select {
        background-color: white !important;
        color: black !important;
      }
      
      /* Make submit button visible */
      button[type="submit"] {
        background-color: #0D503C !important;
        color: white !important;
      }
      
      button[type="submit"]:hover {
        background-color: #0a3f30 !important;
        color: white !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ContentProvider>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <div className="flex flex-col min-h-screen bg-offwhite">
                <Navbar />
                <main className="flex-grow pt-20">
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:id" element={<BlogPost />} />
                    <Route path="/facilities" element={<Facilities />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/founder" element={<Founder />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/healthcare-solutions" element={<HealthcareSolutions />} />
                    <Route path="/wellness-journey" element={<WellnessJourney />} />
                    <Route path="/luxury-experience" element={<LuxuryExperience />} />
                    <Route path="/enquiry" element={<Enquiry />} />
                    {/* Redirect contact to enquiry */}
                    <Route path="/contact" element={<Navigate to="/enquiry" replace />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-conditions" element={<TermsConditions />} />
                    <Route path="/cookie-policy" element={<CookiePolicy />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            </BrowserRouter>
          </TooltipProvider>
        </LanguageProvider>
      </ContentProvider>
    </QueryClientProvider>
  );
};

export default App;
