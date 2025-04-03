
import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const HealthcareSolutions = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <div className="bg-offwhite pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-teal">
        <div className="absolute inset-0 geometric-pattern-bg opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="heading-xl mb-6 hero-text-gradient">
              {isRTL ? 'خدمات السياحة الطبية' : 'Medical Tourism Services'}
            </h1>
            <p className="text-offwhite text-xl max-w-2xl">
              {isRTL 
                ? 'رعاية صحية عالمية المستوى مع خدمة شخصية لا مثيل لها' 
                : 'World-class healthcare with unparalleled personal service'}
            </p>
          </div>
        </div>
      </section>

      {/* Back to Services */}
      <div className="container mx-auto px-6 py-8">
        <Link to="/services" className={`text-teal flex items-center hover:text-gold transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}>
          <ArrowLeft className={`${isRTL ? 'ml-2 rotate-180' : 'mr-2'} w-4 h-4`} />
          {isRTL ? 'العودة إلى الخدمات' : 'Back to Services'}
        </Link>
      </div>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <img 
                src="/lovable-uploads/813040be-3a64-41ef-85f3-5ceca673ce65.png" 
                alt="Medical Healthcare" 
                className="rounded-xl shadow-xl w-full h-auto mb-8"
              />
              
              <div className="bg-emerald/10 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-teal mb-4">
                  {isRTL ? 'نظرة عامة على التكاليف التقريبية للعلاج' : 'Overview of approximate treatment costs'}
                </h3>
                <p className="text-sm italic mb-4">
                  {isRTL 
                    ? 'يرجى ملاحظة أن أسعار العلاج المذكورة هي أرقام تقريبية مصدرها Bookimed، وهي منصة موثوقة للسياحة الطبية. سيتم تحديد التكاليف الفعلية من قبل المهنيين الطبيين الشركاء لدينا بناءً على احتياجاتك وظروفك الفردية.' 
                    : 'Please note that the treatment prices mentioned are approximate figures sourced from Bookimed, a trusted medical tourism platform. Actual costs will be determined by our partnered medical professionals based on your individual needs and circumstances.'}
                </p>
                {/* Treatment costs could be added here as needed */}
              </div>
            </div>
            
            <div>
              <h2 className="heading-lg mb-6 text-teal">
                {isRTL ? 'تنسيق الرعاية الصحية الشاملة' : 'Comprehensive Healthcare Coordination'}
              </h2>
              
              <div className="prose max-w-none text-charcoal">
                <p>
                  {isRTL 
                    ? 'في حياة كونسيرج، نتفهم أن الاحتياجات الطبية تختلف على نطاق واسع. بالإضافة إلى خدماتنا المتخصصة في الإجراءات التجميلية، ورعاية الأسنان، وعلاجات العظام والخصوبة، نحن ملتزمون بالمساعدة في أي متطلبات طبية أخرى قد تكون لديك. دورنا هو أن نكون حلقة الوصل الحيوية بينك وبين أفضل المستشفيات والعيادات في بانكوك، مما يضمن رحلة طبية سلسة من الاستشارة إلى التعافي. نحن نعمل بشكل وثيق مع المتخصصين الطبيين للتوافق مع نصائحهم وتوصياتهم، مما يوفر لك دعمًا شخصيًا مصممًا حسب احتياجاتك الصحية الفريدة.'
                    : 'At Hayat Concierge, we understand that medical needs vary widely. Beyond our specialized services in Aesthetic Procedures, Dental Care, Orthopedic and Fertility Treatments, we are dedicated to assisting with any other medical requirements you may have. Our role is to serve as the vital link between you and Bangkok\'s top-tier hospitals and clinics, ensuring that every aspect of your healthcare journey is seamlessly coordinated. We work closely with medical professionals to align with their advice and recommendations, providing you with personalized support tailored to your unique health needs.'}
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4 text-teal">
                  {isRTL ? 'رعاية عالمية المستوى بأسعار معقولة' : 'World-Class Care at Affordable Prices'}
                </h3>
                <p>
                  {isRTL 
                    ? 'تشمل شبكتنا متخصصين مدربين على أعلى مستوى عالمي ومستشفيات رائدة معروفة بخبرتها وتقنياتها الطبية المتقدمة. يمكنك الحصول على علاج من الدرجة الأولى بأسعار معقولة مقارنة بالدول الأخرى، مما يضمن رعاية استثنائية مصممة حسب احتياجاتك.'
                    : 'Our network includes world-class, highly trained specialists and leading hospitals renowned for their expertise and advanced medical technologies. You can receive top-tier treatment at affordable prices compared to other countries, ensuring exceptional care tailored to your needs.'}
                </p>
              </div>
              
              <div className="mt-12">
                <Link to="/enquiry" className="button-primary">
                  {isRTL ? 'تقديم استفسار طبي' : 'Submit Medical Enquiry'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthcareSolutions;
