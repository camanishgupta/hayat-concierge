
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t, language } = useLanguage();
  
  return (
    <footer className="bg-[#0A3A2A] text-offwhite pt-16 pb-8 w-full">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            {/* <h3 className="font-sans text-xl font-medium text-gold">{language === 'ar' ? 'حياة كونسيرج' : 'Hayat Concierge'}</h3>
            <p className="text-offwhite/80 text-sm leading-relaxed">
              {language === 'ar' 
                ? 'جسرك الحصري للسياحة الطبية الفاخرة والتجارب الصحية في تايلاند، مصممة خصيصًا للعملاء من الشرق الأوسط الباحثين عن التميز.'
                : 'Your exclusive bridge to Thailand\'s luxury medical tourism and wellness experiences, specially tailored for Middle Eastern clients seeking excellence.'}
            </p> */}
            <img src="/logo.png" alt="Hayat Concierge" className="h-24 mb-4 rounded-full" />
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-sans text-lg font-medium text-gold">{language === 'ar' ? 'روابط سريعة' : 'Quick Links'}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-offwhite/70 hover:text-gold transition-colors text-sm">
                  {language === 'ar' ? 'الرئيسية' : 'Home'}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-offwhite/70 hover:text-gold transition-colors text-sm">
                  {language === 'ar' ? 'الخدمات' : 'Services'}
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-offwhite/70 hover:text-gold transition-colors text-sm">
                  {language === 'ar' ? 'عن الشركة' : 'About Us'}
                </Link>
              </li>
              <li>
                <Link to="/founder" className="text-offwhite/70 hover:text-gold transition-colors text-sm">
                  {language === 'ar' ? 'المؤسس' : 'Founder'}
                </Link>
              </li>
              {/* <li>
                <Link to="/facilities" className="text-offwhite/70 hover:text-gold transition-colors text-sm">
                  {language === 'ar' ? 'الشركاء' : 'Partners'}
                </Link>
              </li> */}
              <li>
                <Link to="/enquiry" className="text-offwhite/70 hover:text-gold transition-colors text-sm">
                  {language === 'ar' ? 'استعلام' : 'Enquiry'}
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-offwhite/70 hover:text-gold transition-colors text-sm">
                  {language === 'ar' ? 'المسؤول' : 'Admin'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-sans text-lg font-medium text-gold">
              {language === 'ar' ? 'خدماتنا' : 'Our Services'}
            </h3>
            <ul className="space-y-2">
              <li className="text-offwhite/70 text-sm">
                <Link to="/healthcare-solutions" className="text-offwhite/70 hover:text-gold transition-colors text-sm">
                  {language === 'ar' ? 'السياحة الطبية' : 'Medical Tourism'}
                </Link>
              </li>
              <li className="text-offwhite/70 text-sm">
                <Link to="/wellness-journey" className="text-offwhite/70 hover:text-gold transition-colors text-sm">
                  {language === 'ar' ? 'منتجعات العافية' : 'Wellness Retreats'}
                </Link>
              </li>
              <li className="text-offwhite/70 text-sm">
                <Link to="/luxury-experience" className="text-offwhite/70 hover:text-gold transition-colors text-sm">
                  {language === 'ar' ? 'إقامات فاخرة' : 'Luxury Accommodations'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-sans text-lg font-medium text-gold">
              {language === 'ar' ? 'اتصل بنا' : 'Contact Us'}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-gold mt-1 flex-shrink-0" />
                <span className="text-offwhite/70 text-sm">Dubai, UAE</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-gold flex-shrink-0" />
                <div className="text-offwhite/70 text-sm">
                  <div>+66 81 606 5796</div>
                  <div>WhatsApp: +33 6 63 45 62 56</div>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-gold flex-shrink-0" />
                <a href="mailto:info@hayatconcierge.com" className="text-offwhite/70 hover:text-offwhite text-sm">info@hayatconcierge.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <Globe size={18} className="text-gold flex-shrink-0" />
                <a href="https://www.hayatconcierge.com" target="_blank" rel="noopener noreferrer" className="text-offwhite/70 hover:text-offwhite text-sm">www.hayatconcierge.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-12 pt-6 border-t border-gold/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-center md:text-left">
            <Link to="/privacy-policy" className="text-offwhite/70 hover:text-gold transition-colors text-sm">
              {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </Link>
            <Link to="/terms-conditions" className="text-offwhite/70 hover:text-gold transition-colors text-sm">
              {language === 'ar' ? 'الشروط والأحكام' : 'Terms & Conditions'}
            </Link>
            <Link to="/cookie-policy" className="text-offwhite/70 hover:text-gold transition-colors text-sm">
              {language === 'ar' ? 'سياسة ملفات تعريف الارتباط' : 'Cookie Policy'}
            </Link>
          </div>
        </div>

        <div className="border-t border-gold/10 mt-6 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-offwhite/60">
          <p>
            {language === 'ar' 
              ? `© ${new Date().getFullYear()} حياة كونسيرج. جميع الحقوق محفوظة. خدمات كونسيرج للسياحة الطبية الفاخرة والعافية في تايلاند.`
              : `© ${new Date().getFullYear()} Hayat Concierge. All rights reserved. Luxury medical tourism and wellness concierge services in Thailand.`}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold transition-colors">
              {language === 'ar' ? 'خريطة الموقع' : 'Sitemap'}
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              {language === 'ar' ? 'إمكانية الوصول' : 'Accessibility'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
