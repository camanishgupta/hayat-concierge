
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Leaf, ArrowLeft, Sun, Moon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WellnessJourney = () => {
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
              {isRTL ? 'رحلة العافية' : 'Wellness Journey'}
            </h1>
            <p className="text-offwhite text-xl max-w-2xl">
              {isRTL 
                ? 'تجارب فاخرة مخصصة للاسترخاء والتجديد' 
                : 'Luxury experiences tailored for relaxation and renewal'}
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
                src="/lovable-uploads/1bac456a-2bf2-46d3-8823-d4f14c0c02a0.png" 
                alt="Wellness Retreats" 
                className="rounded-xl shadow-xl w-full h-auto mb-8"
              />
              
              <div className="bg-emerald/10 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-teal mb-4">
                  {isRTL ? 'لماذا تايلاند للعافية؟' : 'Why Thailand for Wellness?'}
                </h3>
                <ul className="space-y-3">
                  <li className={`flex ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <Leaf className={`text-gold flex-shrink-0 ${isRTL ? 'ml-2' : 'mr-2'}`} size={18} />
                    <span>
                      {isRTL 
                        ? 'تقاليد عافية عمرها قرون تندمج مع علاجات عصرية' 
                        : 'Centuries-old wellness traditions blended with modern treatments'}
                    </span>
                  </li>
                  <li className={`flex ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <Leaf className={`text-gold flex-shrink-0 ${isRTL ? 'ml-2' : 'mr-2'}`} size={18} />
                    <span>
                      {isRTL 
                        ? 'منتجعات حائزة على جوائز عالمية للصحة والعافية' 
                        : 'World-award winning health and wellness resorts'}
                    </span>
                  </li>
                  <li className={`flex ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <Leaf className={`text-gold flex-shrink-0 ${isRTL ? 'ml-2' : 'mr-2'}`} size={18} />
                    <span>
                      {isRTL 
                        ? 'بيئات طبيعية خلابة تعزز الشفاء والراحة' 
                        : 'Stunning natural environments that enhance healing and relaxation'}
                    </span>
                  </li>
                  <li className={`flex ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <Leaf className={`text-gold flex-shrink-0 ${isRTL ? 'ml-2' : 'mr-2'}`} size={18} />
                    <span>
                      {isRTL 
                        ? 'متخصصون حاصلون على تدريب عالمي في برامج الصحة المتكاملة' 
                        : 'Globally trained specialists in holistic health programs'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h2 className="heading-lg mb-6 text-teal">
                {isRTL ? 'برامج العافية المخصصة' : 'Customized Wellness Programs'}
              </h2>
              
              <div className="prose max-w-none text-charcoal">
                <p>
                  {isRTL 
                    ? 'في حياة كونسيرج، نصمم تجارب عافية فاخرة تلبي احتياجاتك وأهدافك المحددة. من منتجعات التخلص من السموم إلى برامج تجديد الشباب، كل تجربة مصممة بعناية لتحقيق التوازن المثالي بين الجسم والعقل والروح.' 
                    : 'At Hayat Concierge, we design luxury wellness experiences that address your specific needs and goals. From detox retreats to rejuvenation programs, each experience is carefully crafted to achieve the perfect balance of body, mind, and spirit.'}
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4 text-teal">
                  {isRTL ? 'أنواع برامجنا:' : 'Our Program Types:'}
                </h3>
                
                <div className="space-y-6 mb-8">
                  <div className={`bg-white/80 p-5 rounded-lg shadow-sm ${isRTL ? 'rtl-card' : ''}`}>
                    <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''} mb-2`}>
                      <Sun className="text-gold flex-shrink-0 mx-2" size={20} />
                      <h4 className="font-semibold text-teal">
                        {isRTL ? 'برامج التخلص من السموم والتنظيف' : 'Detox & Cleansing Programs'}
                      </h4>
                    </div>
                    <p className={isRTL ? 'text-right' : ''}>
                      {isRTL 
                        ? 'برامج شاملة لتنقية الجسم والعقل، مع مزيج من التغذية الخاصة، العلاجات التطهيرية، وتقنيات الاسترخاء. مثالية لمن يرغبون في إعادة ضبط نمط حياتهم وتحسين الصحة العامة.' 
                        : 'Comprehensive programs to purify body and mind, with a mix of specialized nutrition, cleansing therapies, and relaxation techniques. Ideal for those looking to reset their lifestyle and improve overall health.'}
                    </p>
                  </div>
                  
                  <div className={`bg-white/80 p-5 rounded-lg shadow-sm ${isRTL ? 'rtl-card' : ''}`}>
                    <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''} mb-2`}>
                      <Heart className="text-gold flex-shrink-0 mx-2" size={20} />
                      <h4 className="font-semibold text-teal">
                        {isRTL ? 'برامج مكافحة الشيخوخة والتجديد' : 'Anti-aging & Rejuvenation Programs'}
                      </h4>
                    </div>
                    <p className={isRTL ? 'text-right' : ''}>
                      {isRTL 
                        ? 'علاجات متطورة لتجديد الشباب تجمع بين العلوم الحديثة والحكمة التقليدية. تتضمن هذه البرامج علاجات متخصصة للوجه والجسم، ومكملات حيوية، وعلاجات تجديد الخلايا.' 
                        : 'Advanced rejuvenation treatments combining modern science and traditional wisdom. These programs include specialized facial and body treatments, vital supplements, and cellular renewal therapies.'}
                    </p>
                  </div>
                  
                  <div className={`bg-white/80 p-5 rounded-lg shadow-sm ${isRTL ? 'rtl-card' : ''}`}>
                    <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''} mb-2`}>
                      <Moon className="text-gold flex-shrink-0 mx-2" size={20} />
                      <h4 className="font-semibold text-teal">
                        {isRTL ? 'برامج تخفيف التوتر والاسترخاء' : 'Stress Relief & Relaxation Programs'}
                      </h4>
                    </div>
                    <p className={isRTL ? 'text-right' : ''}>
                      {isRTL 
                        ? 'تجارب مصممة لاستعادة التوازن والسلام الداخلي. تشمل جلسات تدليك متخصصة، وتمارين تأمل، وعلاجات الطاقة، مما يساعد على تخفيف التوتر وتعزيز النوم العميق.' 
                        : 'Experiences designed to restore balance and inner peace. Includes specialized massage sessions, meditation practices, and energy treatments, helping reduce stress and promote deep sleep.'}
                    </p>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mt-8 mb-4 text-teal">
                  {isRTL ? 'تجربة حياة كونسيرج للعافية تشمل:' : 'The Hayat Concierge Wellness Experience Includes:'}
                </h3>
                
                <ul className={`space-y-4 ${isRTL ? 'rtl-list' : ''}`}>
                  <li>
                    <strong>{isRTL ? 'استشارة شخصية:' : 'Personal Consultation:'}</strong> {isRTL ? 'تقييم شامل لاحتياجاتك وأهدافك الصحية لإنشاء برنامج مخصص.' : 'Comprehensive assessment of your health needs and goals to create a personalized program.'}
                  </li>
                  <li>
                    <strong>{isRTL ? 'إقامة ممتازة:' : 'Premium Accommodation:'}</strong> {isRTL ? 'اختيار أفضل المنتجعات والمرافق الصحية المناسبة لبرنامجك.' : 'Selection of the finest resorts and wellness facilities suited to your program.'}
                  </li>
                  <li>
                    <strong>{isRTL ? 'خيارات الطعام المخصصة:' : 'Customized Dining Options:'}</strong> {isRTL ? 'قوائم طعام حلال ومغذية مصممة لتكمل برنامج العافية الخاص بك.' : 'Halal and nutritious menus designed to complement your wellness program.'}
                  </li>
                  <li>
                    <strong>{isRTL ? 'مرافق خاصة:' : 'Private Facilities:'}</strong> {isRTL ? 'ضمان الخصوصية واحترام الاحتياجات الثقافية والدينية.' : 'Ensuring privacy and respect for cultural and religious needs.'}
                  </li>
                  <li>
                    <strong>{isRTL ? 'النقل الفاخر:' : 'Luxury Transportation:'}</strong> {isRTL ? 'انتقالات سلسة من وإلى المطار والمنتجع.' : 'Seamless transfers to and from airport and resort.'}
                  </li>
                  <li>
                    <strong>{isRTL ? 'متابعة ما بعد البرنامج:' : 'Post-Program Follow-up:'}</strong> {isRTL ? 'توصيات واستشارات للحفاظ على فوائد البرنامج بعد عودتك إلى الوطن.' : 'Recommendations and consultations to maintain program benefits after your return home.'}
                  </li>
                </ul>
              </div>
              
              <div className="mt-12">
                <Link to="/contact" className="button-primary">
                  {isRTL ? 'تصميم رحلة العافية الخاصة بك' : 'Design Your Wellness Journey'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WellnessJourney;
