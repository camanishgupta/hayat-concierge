
import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, ShoppingBag, Utensils, ArrowLeft, Car } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const LuxuryExperience = () => {
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
              {isRTL ? 'تجربة فاخرة' : 'Luxury Experience'}
            </h1>
            <p className="text-offwhite text-xl max-w-2xl">
              {isRTL 
                ? 'إقامات حصرية وسفر مصمم حسب الطلب في تايلاند' 
                : 'Exclusive stays and bespoke travel in Thailand'}
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
                src="/lovable-uploads/8ae617ca-f183-45bb-9b17-6bece82fc15d.png" 
                alt="Luxury Experience" 
                className="rounded-xl shadow-xl w-full h-auto mb-8"
              />
              
              <div className="bg-emerald/10 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-teal mb-4">
                  {isRTL ? 'لماذا تختار تايلاند للتجارب الفاخرة؟' : 'Why Choose Thailand for Luxury Experiences?'}
                </h3>
                <ul className="space-y-3">
                  <li className={`flex ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <Building2 className={`text-gold flex-shrink-0 ${isRTL ? 'ml-2' : 'mr-2'}`} size={18} />
                    <span>
                      {isRTL 
                        ? 'فنادق ومنتجعات من فئة الخمس نجوم مع خدمة لا تضاهى' 
                        : 'Five-star hotels and resorts with unmatched service'}
                    </span>
                  </li>
                  <li className={`flex ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <Building2 className={`text-gold flex-shrink-0 ${isRTL ? 'ml-2' : 'mr-2'}`} size={18} />
                    <span>
                      {isRTL 
                        ? 'فيلات خاصة مطلة على البحر ومناظر خلابة' 
                        : 'Private villas with oceanfront views and stunning landscapes'}
                    </span>
                  </li>
                  <li className={`flex ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <Building2 className={`text-gold flex-shrink-0 ${isRTL ? 'ml-2' : 'mr-2'}`} size={18} />
                    <span>
                      {isRTL 
                        ? 'مزيج فريد من الثقافة الآسيوية التقليدية والرفاهية العصرية' 
                        : 'Unique blend of traditional Asian culture and modern luxury'}
                    </span>
                  </li>
                  <li className={`flex ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <Building2 className={`text-gold flex-shrink-0 ${isRTL ? 'ml-2' : 'mr-2'}`} size={18} />
                    <span>
                      {isRTL 
                        ? 'خدمات مخصصة تراعي الاحتياجات الثقافية والدينية للضيوف الشرق أوسطيين' 
                        : 'Customized services attentive to cultural and religious needs of Middle Eastern guests'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h2 className="heading-lg mb-6 text-teal">
                {isRTL ? 'خدمات الإقامة والسفر الفاخرة' : 'Luxury Accommodation & Travel Services'}
              </h2>
              
              <div className="prose max-w-none text-charcoal">
                <p>
                  {isRTL 
                    ? 'في حياة كونسيرج، نحول رحلتك إلى تايلاند إلى تجربة استثنائية تتجاوز توقعاتك. نحن نختار بعناية الإقامات الفاخرة ونصمم كل جانب من جوانب رحلتك لتلبية أعلى معايير الراحة والفخامة والخصوصية.' 
                    : 'At Hayat Concierge, we transform your journey to Thailand into an exceptional experience that exceeds expectations. We carefully select luxury accommodations and design every aspect of your trip to meet the highest standards of comfort, luxury, and privacy.'}
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4 text-teal">
                  {isRTL ? 'خيارات الإقامة الفاخرة:' : 'Luxury Accommodation Options:'}
                </h3>
                
                <div className="space-y-6 mb-8">
                  <div className={`bg-white/80 p-5 rounded-lg shadow-sm ${isRTL ? 'rtl-card' : ''}`}>
                    <h4 className={`font-semibold text-teal ${isRTL ? 'text-right' : ''}`}>
                      {isRTL ? 'فنادق خمس نجوم' : 'Five-Star Hotels'}
                    </h4>
                    <p className={isRTL ? 'text-right' : ''}>
                      {isRTL 
                        ? 'أجنحة وغرف VIP في أفضل الفنادق في بانكوك، مع خدمة الكونسيرج على مدار الساعة، ومرافق فاخرة، وإطلالات مذهلة على المدينة.' 
                        : 'VIP suites and rooms in Bangkok\'s finest hotels, with 24-hour concierge service, luxurious amenities, and stunning city views.'}
                    </p>
                  </div>
                  
                  <div className={`bg-white/80 p-5 rounded-lg shadow-sm ${isRTL ? 'rtl-card' : ''}`}>
                    <h4 className={`font-semibold text-teal ${isRTL ? 'text-right' : ''}`}>
                      {isRTL ? 'فيلات خاصة' : 'Private Villas'}
                    </h4>
                    <p className={isRTL ? 'text-right' : ''}>
                      {isRTL 
                        ? 'فيلات حصرية مع مسابح خاصة وطاقم كامل، توفر الخصوصية المطلقة والراحة لك ولعائلتك. مثالية للإقامات الطويلة أو العائلات الكبيرة.' 
                        : 'Exclusive villas with private pools and full staff, offering absolute privacy and comfort for you and your family. Perfect for extended stays or larger families.'}
                    </p>
                  </div>
                  
                  <div className={`bg-white/80 p-5 rounded-lg shadow-sm ${isRTL ? 'rtl-card' : ''}`}>
                    <h4 className={`font-semibold text-teal ${isRTL ? 'text-right' : ''}`}>
                      {isRTL ? 'منتجعات فاخرة' : 'Luxury Resorts'}
                    </h4>
                    <p className={isRTL ? 'text-right' : ''}>
                      {isRTL 
                        ? 'منتجعات على مستوى عالمي بمرافق استثنائية، تجمع بين الراحة الفاخرة والطبيعة الخلابة، مما يخلق ملاذًا للاسترخاء والتجديد.' 
                        : 'World-class resorts with exceptional facilities, combining luxurious comfort and stunning nature, creating a haven for relaxation and renewal.'}
                    </p>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mt-8 mb-4 text-teal">
                  {isRTL ? 'خدماتنا الفاخرة تشمل:' : 'Our Luxury Services Include:'}
                </h3>
                
                <ul className="space-y-4">
                  <li className={`flex ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <Car className={`text-gold flex-shrink-0 ${isRTL ? 'ml-3' : 'mr-3'} mt-1`} size={18} />
                    <div>
                      <strong>{isRTL ? 'نقل VIP:' : 'VIP Transportation:'}</strong> {isRTL ? 'سيارات فاخرة مع سائقين محترفين متاحة على مدار الساعة، وخدمة استقبال كبار الشخصيات في المطار.' : 'Luxury vehicles with professional drivers available 24/7, and VIP airport meet-and-greet service.'}
                    </div>
                  </li>
                  <li className={`flex ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <Utensils className={`text-gold flex-shrink-0 ${isRTL ? 'ml-3' : 'mr-3'} mt-1`} size={18} />
                    <div>
                      <strong>{isRTL ? 'تجارب طعام فاخرة:' : 'Fine Dining Experiences:'}</strong> {isRTL ? 'حجوزات في أفضل المطاعم في تايلاند، وترتيب وجبات خاصة مع طهاة خاصين، وخيارات طعام حلال ممتازة.' : 'Reservations at Thailand\'s best restaurants, arrangement of private meals with personal chefs, and excellent halal dining options.'}
                    </div>
                  </li>
                  <li className={`flex ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <ShoppingBag className={`text-gold flex-shrink-0 ${isRTL ? 'ml-3' : 'mr-3'} mt-1`} size={18} />
                    <div>
                      <strong>{isRTL ? 'خدمات التسوق الشخصية:' : 'Personal Shopping Services:'}</strong> {isRTL ? 'مرافقون للتسوق الخاص، والوصول إلى المصممين والعلامات التجارية الحصرية، وخدمات الشراء المسبق والتسليم.' : 'Private shopping companions, access to exclusive designers and brands, and pre-purchase and delivery services.'}
                    </div>
                  </li>
                  <li className={`flex ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <Building2 className={`text-gold flex-shrink-0 ${isRTL ? 'ml-3' : 'mr-3'} mt-1`} size={18} />
                    <div>
                      <strong>{isRTL ? 'جولات ثقافية خاصة:' : 'Private Cultural Tours:'}</strong> {isRTL ? 'وصول حصري إلى المواقع الثقافية والتاريخية مع مرشدين خبراء يتحدثون العربية، وتجارب ثقافية خاصة.' : 'Exclusive access to cultural and historical sites with expert Arabic-speaking guides, and private cultural experiences.'}
                    </div>
                  </li>
                </ul>
                
                <p className="mt-8">
                  {isRTL 
                    ? 'كل تجربة سفر مع حياة كونسيرج مصممة بعناية لتلبية رغباتك واحتياجاتك المحددة. نحن نهتم بكل التفاصيل، من لحظة وصولك إلى مغادرتك، مما يضمن إقامة لا تُنسى تتجاوز توقعاتك.' 
                    : 'Every travel experience with Hayat Concierge is carefully tailored to meet your specific desires and needs. We take care of every detail, from the moment of your arrival until your departure, ensuring an unforgettable stay that exceeds your expectations.'}
                </p>
              </div>
              
              <div className="mt-12">
                <Link to="/contact" className="button-primary">
                  {isRTL ? 'تصميم إقامتك الفاخرة' : 'Design Your Luxury Stay'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LuxuryExperience;
