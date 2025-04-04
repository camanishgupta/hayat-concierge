
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
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
                <p className="text-muted-foreground">+66 2 345 6789</p>
                <p className="text-muted-foreground">{isRTL ? 'متاح على مدار 24/7' : 'Available 24/7'}</p>
              </div>
            </div>
            
            <div className={`flex flex-col items-center text-center gap-4`}>
              <div className="bg-navy/5 p-4 rounded-full">
                <Mail className="w-6 h-6 text-navy" />
              </div>
              <div>
                <h3 className="font-medium">{isRTL ? 'البريد الإلكتروني' : 'Email'}</h3>
                <p className="text-muted-foreground">contact@hayatconcierge.com</p>
                <p className="text-muted-foreground">{isRTL ? 'الرد خلال 24 ساعة' : 'Response within 24 hours'}</p>
              </div>
            </div>
            
            <div className={`flex flex-col items-center text-center gap-4`}>
              <div className="bg-navy/5 p-4 rounded-full">
                <MapPin className="w-6 h-6 text-navy" />
              </div>
              <div>
                <h3 className="font-medium">{isRTL ? 'العنوان' : 'Address'}</h3>
                <p className="text-muted-foreground">Sukhumvit Road, Bangkok</p>
                <p className="text-muted-foreground">Thailand 10110</p>
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
