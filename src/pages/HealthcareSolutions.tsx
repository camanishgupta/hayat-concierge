import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, ShieldCheck, StethoscopeSvg, Hospital, ArrowLeft } from 'lucide-react';

const HealthcareSolutions = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const medicalTourismContent = {
    en: {
      title: "Medical Tourism Services",
      comprehensiveCoordination: "Comprehensive Healthcare Coordination",
      description: "At Hayat Concierge, we understand that medical needs vary widely. Beyond our specialized services in Aesthetic Procedures, Dental Care, Orthopedic and Fertility Treatments, we are dedicated to assisting with any other medical requirements you may have. Our role is to serve as the vital link between you and Bangkok's top-tier hospitals and clinics, ensuring that every aspect of your healthcare journey is seamlessly coordinated. We work closely with medical professionals to align with their advice and recommendations, providing you with personalized support tailored to your unique health needs.",
      worldClassCare: "World-Class Care at Affordable Prices",
      worldClassDescription: "Our network includes world-class, highly trained specialists and leading hospitals renowned for their expertise and advanced medical technologies. You can receive top-tier treatment at affordable prices compared to other countries, ensuring exceptional care tailored to your needs.",
      treatmentCostsNote: "Please note that the treatment prices mentioned are approximate figures sourced from Bookimed, a trusted medical tourism platform. Actual costs will be determined by our partnered medical professionals based on your individual needs and circumstances."
    },
    ar: {
      title: "خدمات السياحة الطبية",
      comprehensiveCoordination: "التنسيق الشامل للرعاية الصحية",
      description: "في هيات كونسيرج، ندرك أن الاحتياجات الطبية متنوعة للغاية. بالإضافة إلى خدماتنا المتخصصة في العمليات التجميلية، والرعاية السنية، وعلاجات العظام والخصوبة، نحن ملتزمون بمساعدتك في أي متطلبات طبية أخرى قد تكون لديك. دورنا هو أن نكون الرابط الحيوي بينك وبين أفضل المستشفيات والعيادات في بانكوك، مما يضمن أن كل جانب من جوانب رحلتك الصحية يتم تنسيقه بسلاسة. نعمل بشكل وثيق مع المختصين الطبيين للتوافق مع نصائحهم وتوصياتهم، مما يوفر لك دعمًا شخصيًا مصممًا خصيصًا لاحتياجاتك الصحية الفريدة.",
      worldClassCare: "رعاية عالمية بأسعار معقولة",
      worldClassDescription: "شبكتنا تشمل متخصصين عالميين وذوي تدريب عالٍ ومستشفيات رائدة مشهورة بخبرتها والتكنولوجيا الطبية المتقدمة. يمكنك الحصول على علاج من الدرجة الأولى بأسعار معقولة مقارنة بالدول الأخرى، مما يضمن رعاية استثنائية مصممة وفقًا لاحتياجاتك.",
      treatmentCostsNote: "يرجى ملاحظة أن أسعار العلاج المذكورة هي أرقام تقريبية مستمدة من منصة Bookimed للسياحة الطبية. ستتحدد التكاليف الفعلية من قبل المختصين الطبيين الشركاء بناءً على احتياجاتك وظروفك الفردية."
    }
  };

  return (
    <div className="bg-offwhite pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-teal">
        <div className="absolute inset-0 geometric-pattern-bg opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="heading-xl mb-6 hero-text-gradient">
              {medicalTourismContent[language].title}
            </h1>
            <p className="text-offwhite text-xl max-w-2xl">
              {language === 'en' 
                ? 'Comprehensive, Personalized Medical Care in Thailand' 
                : 'رعاية طبية شاملة ومخصصة في تايلاند'}
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

      <section className="py-16 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/lovable-uploads/6593d901-e5f7-4c5d-8f2f-235d1c865e4b.png" 
              alt={language === 'en' ? "Medical Solutions" : "حلول طبية"} 
              className="rounded-xl shadow-xl w-full h-auto"
            />
          </div>
          
          <div>
            <h2 className="heading-lg mb-6 text-teal">
              {medicalTourismContent[language].comprehensiveCoordination}
            </h2>
            <p className="text-charcoal mb-6">
              {medicalTourismContent[language].description}
            </p>
            
            <h3 className="heading-md mb-4 text-teal">
              {medicalTourismContent[language].worldClassCare}
            </h3>
            <p className="text-charcoal mb-6">
              {medicalTourismContent[language].worldClassDescription}
            </p>
            
            <div className="bg-teal/10 p-4 rounded-lg italic text-sm">
              {medicalTourismContent[language].treatmentCostsNote}
            </div>
          </div>
        </div>
      </section>

      {/* Medical Specialties */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-6">
          <h2 className="heading-lg text-center mb-12 text-teal">
            {isRTL ? 'تخصصاتنا الطبية' : 'Our Medical Specialties'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Aesthetic Procedures */}
            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="text-teal w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-teal">
                {isRTL ? 'الإجراءات التجميلية' : 'Aesthetic Procedures'}
              </h3>
              <p className="text-muted-foreground mb-4">
                {isRTL 
                  ? 'تشمل جراحة التجميل، وعلاجات البشرة غير الجراحية، وطب الأسنان التجميلي، وإجراءات مكافحة الشيخوخة.'
                  : 'Including cosmetic surgery, non-surgical skin treatments, cosmetic dentistry, and anti-aging procedures.'}
              </p>
              <div className="text-sm text-teal">
                {isRTL ? 'تبدأ من ٥٠٠ دولار أمريكي' : 'Starting from $500 USD'}
              </div>
            </div>
            
            {/* Dental Care */}
            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
                  <path d="M12 5.5c-1.5-2-3-2.5-4-2.5a4 4 0 0 0-4 4c0 3 2 5 6 8.5C14 12 16 10 16 7a4 4 0 0 0-4-4c-1 0-2.5.5-4 2.5Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-teal">
                {isRTL ? 'رعاية الأسنان' : 'Dental Care'}
              </h3>
              <p className="text-muted-foreground mb-4">
                {isRTL 
                  ? 'تشمل زراعة الأسنان، والتيجان، والقشرة، وتقويم الأسنان، وعلاجات قناة الجذر، والتنظيف المتقدم.'
                  : 'Including dental implants, crowns, veneers, orthodontics, root canal treatments, and advanced cleaning.'}
              </p>
              <div className="text-sm text-teal">
                {isRTL ? 'تبدأ من ٣٠٠ دولار أمريكي' : 'Starting from $300 USD'}
              </div>
            </div>
            
            {/* Orthopedic Treatments */}
            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-teal">
                {isRTL ? 'علاجات العظام' : 'Orthopedic Treatments'}
              </h3>
              <p className="text-muted-foreground mb-4">
                {isRTL 
                  ? 'تشمل استبدال المفاصل، وجراحة العمود الفقري، وإصلاح الأربطة، وعلاج الإصابات الرياضية، وإعادة التأهيل.'
                  : 'Including joint replacements, spine surgery, ligament repairs, sports injury treatments, and rehabilitation.'}
              </p>
              <div className="text-sm text-teal">
                {isRTL ? 'تبدأ من ٥٠٠٠ دولار أمريكي' : 'Starting from $5,000 USD'}
              </div>
            </div>
            
            {/* Fertility Treatments */}
            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
                  <path d="M2 12c0-3.5 2.5-6 6.5-6 4 0 6 2.5 6 6 0 3.5-2 6-6 6s-6.5-2.5-6.5-6Z"></path>
                  <path d="M15 9c0-3.5 2-6 5-6 3 0 4 2.5 4 6 0 3.5-2 6-5 6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-teal">
                {isRTL ? 'علاجات الخصوبة' : 'Fertility Treatments'}
              </h3>
              <p className="text-muted-foreground mb-4">
                {isRTL 
                  ? 'تشمل التلقيح الاصطناعي (IVF)، والتلقيح داخل الرحم (IUI)، وتجميد البويضات، وعلاجات الخصوبة للذكور.'
                  : 'Including IVF, IUI, egg freezing, and male fertility treatments with high success rates.'}
              </p>
              <div className="text-sm text-teal">
                {isRTL ? 'تبدأ من ٤٠٠٠ دولار أمريكي' : 'Starting from $4,000 USD'}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Process */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="heading-lg text-center mb-12 text-teal">
          {isRTL ? 'عملية السياحة الطبية لدينا' : 'Our Medical Tourism Process'}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="glass-card p-6">
            <div className="w-12 h-12 rounded-full bg-teal text-white flex items-center justify-center mb-4">
              <span className="text-xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-teal">
              {isRTL ? 'الاستشارة الأولية' : 'Initial Consultation'}
            </h3>
            <p className="text-muted-foreground">
              {isRTL 
                ? 'نقوم بتقييم احتياجاتك الطبية، ونجمع السجلات الطبية ذات الصلة، ونقترح المستشفيات والأطباء المناسبين.'
                : 'We assess your medical needs, gather relevant medical records, and suggest suitable hospitals and doctors.'}
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="glass-card p-6">
            <div className="w-12 h-12 rounded-full bg-teal text-white flex items-center justify-center mb-4">
              <span className="text-xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-teal">
              {isRTL ? 'التخطيط والترتيب' : 'Planning & Arrangement'}
            </h3>
            <p className="text-muted-foreground">
              {isRTL 
                ? 'نقوم بجدولة المواعيد، وترتيب الإقامة، والنقل، وخدمات الترجمة، وتنسيق جميع جوانب رحلتك الطبية.'
                : 'We schedule appointments, arrange accommodation, transportation, translation services, and coordinate all aspects of your medical journey.'}
            </p>
          </div>
          
          {/* Step 3 */}
          <div className="glass-card p-6">
            <div className="w-12 h-12 rounded-full bg-teal text-white flex items-center justify-center mb-4">
              <span className="text-xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-teal">
              {isRTL ? 'الدعم أثناء وبعد العلاج' : 'During & After Treatment Support'}
            </h3>
            <p className="text-muted-foreground">
              {isRTL 
                ? 'نقدم مساعدة شخصية أثناء إقامتك، ونتابع مع الأطباء، ونضمن راحتك، ونقدم الدعم المستمر بعد العلاج.'
                : 'We provide personal assistance during your stay, follow up with doctors, ensure your comfort, and offer ongoing support after treatment.'}
            </p>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-teal text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="heading-lg mb-6">
            {isRTL ? 'ابدأ رحلتك الطبية اليوم' : 'Start Your Medical Journey Today'}
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-teal-50">
            {isRTL 
              ? 'دعنا نساعدك في العثور على أفضل الحلول الطبية في تايلاند. املأ نموذج الاستفسار وسيتواصل معك فريقنا متعدد اللغات.'
              : 'Let us help you find the best medical solutions in Thailand. Fill out our inquiry form and our multilingual team will contact you.'}
          </p>
          <Link to="/enquiry" className="button-primary bg-white text-teal hover:bg-cream">
            {isRTL ? 'تقديم استفسار' : 'Submit an Inquiry'}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HealthcareSolutions;
