
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <section id="contact" className="section-container bg-cream">
      <div className="max-w-3xl mx-auto">
        <div>
          <h2 className="heading-lg mb-6 text-navy text-center">
            {isRTL ? 'تواصل معنا' : 'Contact Us'}
          </h2>
          <p className="text-muted-foreground mb-8 text-center">
            {isRTL 
              ? 'فريقنا متعدد اللغات متاح لمساعدة العملاء من الشرق الأوسط في تخطيط سياحة طبية متميزة وتجارب عافية فاخرة في تايلاند.'
              : 'Our multilingual team is available to assist Middle Eastern clients in planning premium medical tourism and luxury wellness experiences in Thailand.'}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
            <div className={`flex flex-col items-center text-center gap-4`}>
              <div className="bg-navy/5 p-4 rounded-full">
                <Phone className="w-6 h-6 text-navy" />
              </div>
              <div>
                <h3 className="font-medium">{isRTL ? 'الهاتف' : 'Phone'}</h3>
                <p className="text-muted-foreground">+66 81 606 5796</p>
                <p className="text-muted-foreground">WhatsApp: +33 6 63 45 62 56</p>
              </div>
            </div>
            
            <div className={`flex flex-col items-center text-center gap-4`}>
              <div className="bg-navy/5 p-4 rounded-full">
                <Mail className="w-6 h-6 text-navy" />
              </div>
              <div>
                <h3 className="font-medium">{isRTL ? 'البريد الإلكتروني' : 'Email'}</h3>
                <p className="text-muted-foreground">info@hayatconcierge.com</p>
                <p className="text-muted-foreground">www.hayatconcierge.com</p>
              </div>
            </div>
            
            <div className={`flex flex-col items-center text-center gap-4`}>
              <div className="bg-navy/5 p-4 rounded-full">
                <MapPin className="w-6 h-6 text-navy" />
              </div>
              <div>
                <h3 className="font-medium">{isRTL ? 'العنوان' : 'Address'}</h3>
                <p className="text-muted-foreground">Dubai, UAE</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            <Link
              to="/enquiry"
              className="button-primary"
            >
              {isRTL ? 'تقديم استفسار' : 'Submit Inquiry'}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
