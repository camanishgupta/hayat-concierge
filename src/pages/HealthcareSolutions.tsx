
import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, CheckCircle, ArrowLeft } from 'lucide-react';
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
              {isRTL ? 'حلول الرعاية الصحية' : 'Healthcare Solutions'}
            </h1>
            <p className="text-offwhite text-xl max-w-2xl">
              {isRTL 
                ? 'رعاية طبية عالمية المستوى مع لمسة شخصية' 
                : 'World-class medical care with a personal touch'}
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
                alt="Medical Tourism" 
                className="rounded-xl shadow-xl w-full h-auto mb-8"
              />
              
              <div className="bg-emerald/10 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-teal mb-4">
                  {isRTL ? 'لماذا تايلاند للسياحة الطبية؟' : 'Why Thailand for Medical Tourism?'}
                </h3>
                <ul className="space-y-2">
                  <li className={`flex ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <CheckCircle className={`text-gold flex-shrink-0 ${isRTL ? 'ml-2' : 'mr-2'}`} size={18} />
                    <span>
                      {isRTL 
                        ? 'مستشفيات معتمدة دوليًا بأعلى المعايير' 
                        : 'Internationally accredited hospitals with highest standards'}
                    </span>
                  </li>
                  <li className={`flex ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <CheckCircle className={`text-gold flex-shrink-0 ${isRTL ? 'ml-2' : 'mr-2'}`} size={18} />
                    <span>
                      {isRTL 
                        ? 'أطباء متدربون عالميًا ومتخصصون في كل مجال طبي' 
                        : 'Globally trained doctors and specialists in every medical field'}
                    </span>
                  </li>
                  <li className={`flex ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <CheckCircle className={`text-gold flex-shrink-0 ${isRTL ? 'ml-2' : 'mr-2'}`} size={18} />
                    <span>
                      {isRTL 
                        ? 'تكلفة أقل بنسبة 50-70% مقارنة بالغرب مع نفس الجودة' 
                        : '50-70% lower costs compared to Western countries with same quality'}
                    </span>
                  </li>
                  <li className={`flex ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <CheckCircle className={`text-gold flex-shrink-0 ${isRTL ? 'ml-2' : 'mr-2'}`} size={18} />
                    <span>
                      {isRTL 
                        ? 'تجربة المريض تشبه الفندق الفاخر، وليس المستشفى التقليدي' 
                        : 'Patient experience resembling luxury hotel, not traditional hospital'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h2 className="heading-lg mb-6 text-teal">
                {isRTL ? 'خدمات السياحة الطبية' : 'Medical Tourism Services'}
              </h2>
              
              <div className="prose max-w-none text-charcoal">
                <h3 className="text-xl font-semibold mt-8 mb-4 text-teal">
                  {isRTL ? 'تنسيق الرعاية الصحية الشاملة' : 'Comprehensive Healthcare Coordination'}
                </h3>
                <p>
                  {isRTL 
                    ? 'في حياة كونسيرج، نفهم أن الاحتياجات الطبية تختلف على نطاق واسع. بالإضافة إلى خدماتنا المتخصصة في الإجراءات التجميلية، والعناية بالأسنان، وعلاجات العظام والخصوبة، فنحن ملتزمون بالمساعدة في أي متطلبات طبية أخرى قد تكون لديك. دورنا هو أن نكون حلقة الوصل الحيوية بينك وبين أفضل المستشفيات والعيادات في بانكوك، مما يضمن تنسيق كل جانب من جوانب رحلتك الصحية بسلاسة. نحن نعمل بشكل وثيق مع المتخصصين الطبيين للتوافق مع نصائحهم وتوصياتهم، مما يوفر لك دعمًا شخصيًا مصممًا وفقًا لاحتياجاتك الصحية الفريدة.'
                    : 'At Hayat Concierge, we understand that medical needs vary widely. Beyond our specialized services in Aesthetic Procedures, Dental Care, Orthopedic and Fertility Treatments, we are dedicated to assisting with any other medical requirements you may have. Our role is to serve as the vital link between you and Bangkok\'s top-tier hospitals and clinics, ensuring that every aspect of your healthcare journey is seamlessly coordinated. We work closely with medical professionals to align with their advice and recommendations, providing you with personalized support tailored to your unique health needs.'}
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4 text-teal">
                  {isRTL ? 'رعاية عالمية المستوى بأسعار معقولة' : 'World-Class Care at Affordable Prices'}
                </h3>
                <p>
                  {isRTL 
                    ? 'تتضمن شبكتنا متخصصين عالميين مدربين تدريباً عالياً ومستشفيات رائدة معروفة بخبراتها وتقنياتها الطبية المتقدمة. يمكنك الحصول على علاج من الدرجة الأولى بأسعار معقولة مقارنة بالدول الأخرى، مما يضمن رعاية استثنائية مصممة حسب احتياجاتك.'
                    : 'Our network includes world-class, highly trained specialists and leading hospitals renowned for their expertise and advanced medical technologies. You can receive top-tier treatment at affordable prices compared to other countries, ensuring exceptional care tailored to your needs.'}
                </p>
                
                <p className="italic text-sm mt-4">
                  {isRTL 
                    ? 'يرجى ملاحظة أن أسعار العلاج المذكورة هي أرقام تقريبية مصدرها Bookimed، وهي منصة موثوقة للسياحة الطبية. سيتم تحديد التكاليف الفعلية من قبل المتخصصين الطبيين الشركاء لدينا بناءً على احتياجاتك وظروفك الفردية.'
                    : 'Please note that the treatment prices mentioned are approximate figures sourced from Bookimed, a trusted medical tourism platform. Actual costs will be determined by our partnered medical professionals based on your individual needs and circumstances.'}
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4 text-teal">
                  {isRTL ? 'التخصصات الطبية المتاحة:' : 'Medical Specialties Available:'}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-8">
                  <div className={`flex items-start ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <Stethoscope className={`text-gold ${isRTL ? 'ml-2' : 'mr-2'} mt-1`} size={16} />
                    <span>{isRTL ? 'جراحة التجميل والترميم' : 'Plastic & Reconstructive Surgery'}</span>
                  </div>
                  <div className={`flex items-start ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <Stethoscope className={`text-gold ${isRTL ? 'ml-2' : 'mr-2'} mt-1`} size={16} />
                    <span>{isRTL ? 'طب الأسنان التجميلي' : 'Cosmetic Dentistry'}</span>
                  </div>
                  <div className={`flex items-start ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <Stethoscope className={`text-gold ${isRTL ? 'ml-2' : 'mr-2'} mt-1`} size={16} />
                    <span>{isRTL ? 'علاجات الخصوبة وأطفال الأنابيب' : 'Fertility Treatments & IVF'}</span>
                  </div>
                  <div className={`flex items-start ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <Stethoscope className={`text-gold ${isRTL ? 'ml-2' : 'mr-2'} mt-1`} size={16} />
                    <span>{isRTL ? 'جراحة العظام' : 'Orthopedic Surgery'}</span>
                  </div>
                  <div className={`flex items-start ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <Stethoscope className={`text-gold ${isRTL ? 'ml-2' : 'mr-2'} mt-1`} size={16} />
                    <span>{isRTL ? 'جراحة القلب والأوعية الدموية' : 'Cardiac & Vascular Surgery'}</span>
                  </div>
                  <div className={`flex items-start ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <Stethoscope className={`text-gold ${isRTL ? 'ml-2' : 'mr-2'} mt-1`} size={16} />
                    <span>{isRTL ? 'علاج السرطان' : 'Cancer Treatment'}</span>
                  </div>
                  <div className={`flex items-start ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <Stethoscope className={`text-gold ${isRTL ? 'ml-2' : 'mr-2'} mt-1`} size={16} />
                    <span>{isRTL ? 'الفحوصات الطبية الشاملة' : 'Comprehensive Health Check-ups'}</span>
                  </div>
                  <div className={`flex items-start ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <Stethoscope className={`text-gold ${isRTL ? 'ml-2' : 'mr-2'} mt-1`} size={16} />
                    <span>{isRTL ? 'طب العيون' : 'Ophthalmology'}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mt-8 mb-4 text-teal">
                  {isRTL ? 'خدماتنا الطبية تشمل:' : 'Our Medical Services Include:'}
                </h3>
                
                <ul className={`space-y-4 ${isRTL ? 'rtl-list' : ''}`}>
                  <li>
                    <strong>{isRTL ? 'استشارة أولية:' : 'Initial Consultation:'}</strong> {isRTL ? 'تقييم احتياجاتك الطبية، ومناقشة الخيارات المتاحة، وإعداد خطة مخصصة.' : 'Assessing your medical needs, discussing available options, and preparing a tailored plan.'}
                  </li>
                  <li>
                    <strong>{isRTL ? 'تنسيق المواعيد:' : 'Appointment Coordination:'}</strong> {isRTL ? 'حجز المواعيد مع أفضل الأطباء والمستشفيات في تايلاند.' : 'Booking appointments with Thailand\'s best doctors and hospitals.'}
                  </li>
                  <li>
                    <strong>{isRTL ? 'خدمات الترجمة:' : 'Translation Services:'}</strong> {isRTL ? 'مترجمين محترفين يتحدثون العربية لضمان التواصل الفعال مع الطاقم الطبي.' : 'Professional Arabic-speaking interpreters to ensure effective communication with medical staff.'}
                  </li>
                  <li>
                    <strong>{isRTL ? 'الإقامة الفاخرة:' : 'Luxury Accommodation:'}</strong> {isRTL ? 'ترتيب إقامة مريحة بالقرب من المنشآت الطبية، مناسبة لاحتياجات التعافي الخاصة بك.' : 'Arranging comfortable stays near medical facilities, suitable for your recovery needs.'}
                  </li>
                  <li>
                    <strong>{isRTL ? 'النقل الخاص:' : 'Private Transportation:'}</strong> {isRTL ? 'خدمة نقل من وإلى المطار، والمستشفى، والفندق في سيارات فاخرة.' : 'Transport to and from the airport, hospital, and hotel in luxury vehicles.'}
                  </li>
                  <li>
                    <strong>{isRTL ? 'المساعدة في التأشيرة:' : 'Visa Assistance:'}</strong> {isRTL ? 'المساعدة في تأمين تأشيرة طبية إذا لزم الأمر لإقامة أطول للعلاج.' : 'Help securing a medical visa if required for longer treatment stays.'}
                  </li>
                </ul>
              </div>
              
              <div className="mt-12">
                <Link to="/contact" className="button-primary">
                  {isRTL ? 'استشارة طبية مجانية' : 'Free Medical Consultation'}
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
