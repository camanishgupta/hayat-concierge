
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <section id="contact" className="section-container bg-cream">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className={`lg:pr-16 ${isRTL ? 'order-2 lg:order-2' : 'order-1 lg:order-1'}`}>
          <h2 className="heading-lg mb-6 text-navy">
            {t('contactUs.title')}
          </h2>
          <p className="text-muted-foreground mb-8">
            {t('contactUs.subtitle')}
          </p>
          
          <div className="space-y-6">
            <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
              <div className="bg-navy/5 p-3 rounded-full">
                <Phone className="w-5 h-5 text-navy" />
              </div>
              <div>
                <h3 className="font-medium">{t('contactUs.phoneTitle')}</h3>
                <p className="text-muted-foreground">+66 2 345 6789</p>
                <p className="text-muted-foreground">{t('contactUs.phoneAvailability')}</p>
              </div>
            </div>
            
            <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
              <div className="bg-navy/5 p-3 rounded-full">
                <Mail className="w-5 h-5 text-navy" />
              </div>
              <div>
                <h3 className="font-medium">{t('contactUs.emailTitle')}</h3>
                <p className="text-muted-foreground">contact@hayatconcierge.com</p>
                <p className="text-muted-foreground">{t('contactUs.emailResponse')}</p>
              </div>
            </div>
            
            <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
              <div className="bg-navy/5 p-3 rounded-full">
                <MapPin className="w-5 h-5 text-navy" />
              </div>
              <div>
                <h3 className="font-medium">{t('contactUs.addressTitle')}</h3>
                <p className="text-muted-foreground">Sukhumvit Road, Bangkok</p>
                <p className="text-muted-foreground">Thailand 10110</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <Link
              to="/enquiry"
              className="button-primary"
            >
              {t('contactUs.submitInquiry')}
            </Link>
          </div>
        </div>
        
        <div className={`${isRTL ? 'order-1 lg:order-1' : 'order-2 lg:order-2'}`}>
          <div className="relative">
            <img
              src="/lovable-uploads/adf64b15-b776-4030-9855-3d0f791afb7a.png"
              alt="Contact"
              className="rounded-xl shadow-xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
