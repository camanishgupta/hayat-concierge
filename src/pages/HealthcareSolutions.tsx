
import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, ArrowLeft, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from "@/components/ui/card";

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
                src="/lovable-uploads/c2a5eee5-a591-4abd-a19b-70f463e74556.png" 
                alt="Medical Tourism in Thailand" 
                className="rounded-xl shadow-xl w-full h-auto mb-8"
              />
              
              <div className="bg-white p-6 rounded-lg mb-8 shadow-md">
                <h3 className="text-xl font-semibold text-teal mb-4">
                  {isRTL ? 'نظرة عامة على التكاليف التقريبية للعلاج' : 'Overview of approximate treatment costs'}
                </h3>
                <p className="text-sm italic mb-4 text-charcoal">
                  {isRTL 
                    ? 'يرجى ملاحظة أن أسعار العلاج المذكورة هي أرقام تقريبية مصدرها Bookimed، وهي منصة موثوقة للسياحة الطبية. سيتم تحديد التكاليف الفعلية من قبل المهنيين الطبيين الشركاء لدينا بناءً على احتياجاتك وظروفك الفردية.' 
                    : 'Please note that the treatment prices mentioned are approximate figures sourced from Bookimed, a trusted medical tourism platform. Actual costs will be determined by our partnered medical professionals based on your individual needs and circumstances.'}
                </p>
                <a 
                  href="https://us-uk.bookimed.com/article/medical-tourism-in-thailand/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`text-teal hover:text-gold transition-colors flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  {isRTL ? 'مصدر معلومات التكلفة: Bookimed' : 'Cost information source: Bookimed'}
                  <ExternalLink className={`${isRTL ? 'ml-2' : 'ml-2'} w-4 h-4`} />
                </a>
              </div>

              {/* Medical Service Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-white text-charcoal shadow-md">
                  <CardContent className="p-4">
                    <img src="/lovable-uploads/4d2e5619-ebba-4ca2-9a33-97d95e97c16d.png" alt="Aesthetic Procedures" className="w-full h-48 object-cover rounded-md mb-3" />
                    <h4 className="font-semibold text-teal">
                      {isRTL ? 'الإجراءات التجميلية' : 'Aesthetic Procedures'}
                    </h4>
                  </CardContent>
                </Card>
                <Card className="bg-white text-charcoal shadow-md">
                  <CardContent className="p-4">
                    <img src="/lovable-uploads/8248f807-6d1f-4c0d-862a-6e6a599acda9.png" alt="Dental Care" className="w-full h-48 object-cover rounded-md mb-3" />
                    <h4 className="font-semibold text-teal">
                      {isRTL ? 'رعاية الأسنان' : 'Dental Care'}
                    </h4>
                  </CardContent>
                </Card>
                <Card className="bg-white text-charcoal shadow-md">
                  <CardContent className="p-4">
                    <img src="/lovable-uploads/728e0993-6177-41af-bafc-905440d60d87.png" alt="Health Check" className="w-full h-48 object-cover rounded-md mb-3" />
                    <h4 className="font-semibold text-teal">
                      {isRTL ? 'الفحص الصحي' : 'Health Check'}
                    </h4>
                  </CardContent>
                </Card>
                <Card className="bg-white text-charcoal shadow-md">
                  <CardContent className="p-4">
                    <img src="/lovable-uploads/1f508817-53eb-4f23-a764-34eea803fa93.png" alt="Fertility Treatments" className="w-full h-48 object-cover rounded-md mb-3" />
                    <h4 className="font-semibold text-teal">
                      {isRTL ? 'علاجات الخصوبة' : 'Fertility Treatments'}
                    </h4>
                  </CardContent>
                </Card>
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

                <Card className="bg-white p-6 rounded-lg shadow-md mt-8">
                  <CardContent className="p-0">
                    <h3 className="text-lg font-semibold mb-4 text-teal">
                      {isRTL ? 'خدماتنا الطبية تشمل:' : 'Our Medical Services Include:'}
                    </h3>
                    <ul className="space-y-2 list-disc pl-5 text-charcoal">
                      <li>
                        {isRTL ? 'الإجراءات التجميلية' : 'Aesthetic Procedures'}
                      </li>
                      <li>
                        {isRTL ? 'رعاية الأسنان' : 'Dental Care'}
                      </li>
                      <li>
                        {isRTL ? 'علاجات العظام' : 'Orthopedic Treatments'}
                      </li>
                      <li>
                        {isRTL ? 'علاجات الخصوبة' : 'Fertility Treatments'}
                      </li>
                      <li>
                        {isRTL ? 'الفحوصات الصحية الشاملة' : 'Comprehensive Health Check-ups'}
                      </li>
                      <li>
                        {isRTL ? 'العلاج الطبي المتخصص' : 'Specialized Medical Treatment'}
                      </li>
                    </ul>
                  </CardContent>
                </Card>
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
