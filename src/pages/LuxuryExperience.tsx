
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
                {isRTL ? 'الترفيه والإقامة' : 'Leisure & Accommodations'}
              </h2>
              
              <div className="prose max-w-none text-charcoal">
                <p>
                  {isRTL 
                    ? 'استمتع بأعلى مستويات الفخامة في تايلاند، مع تجربة سفر مصممة خصيصًا لتناسب تفضيلاتك الفريدة واحتياجاتك ومدة إقامتك. سواء كنت مسافرًا مع عائلتك، أو تستمتع بعطلة رومانسية، أو تنطلق في رحلة خاصة، فإننا نضمن أن تكون رحلتك سلسة ولا تُنسى. سيتم تخصيص رحلتك بناءً على احتياجات مجموعتك، مما يضمن أقصى درجات الراحة والأناقة طوال فترة إقامتك.'
                    : 'Experience the epitome of luxury in Thailand, with a tailored travel experience designed to suit your unique preferences, needs, and length of stay. Whether you\'re traveling with your family, enjoying a romantic getaway, or embarking on a private retreat, we ensure your journey is seamless and unforgettable. Your trip will be customized based on your group\'s needs, ensuring the utmost comfort and elegance throughout your stay.'}
                </p>
                
                <p className="mt-4">
                  {isRTL 
                    ? 'في بانكوك، انغمس في الثقافة النابضة بالحياة وتجارب الفخامة التي تقدمها المدينة، من وجهات التسوق المرموقة إلى المواقع الثقافية الحصرية. فيما يلي بعض التجارب التي لا بد من رؤيتها والقيام بها لضيوفنا المميزين:'
                    : 'In Bangkok, immerse yourself in the vibrant culture and luxury experiences the city offers, from prestigious shopping destinations to exclusive cultural sites. Here are a few must-see and must-do experiences for our discerning guests:'}
                </p>
                
                <ul className={`space-y-4 mt-6 ${isRTL ? 'rtl-list' : ''}`}>
                  <li>
                    <strong>{isRTL ? 'القصر الكبير ومعبد وات فرا كيو:' : 'The Grand Palace & Wat Phra Kaew:'}</strong> {isRTL ? 'استكشف القصر الملكي الشهير، موطن بوذا الزمرد المقدس في تايلاند، رمز حقيقي للتراث الثقافي.' : 'Explore the iconic Royal Palace, home to Thailand\'s sacred Emerald Buddha, a true symbol of cultural heritage.'}
                  </li>
                  <li>
                    <strong>{isRTL ? 'وات أرون (معبد الفجر):' : 'Wat Arun (Temple of Dawn):'}</strong> {isRTL ? 'أعجب بالمعبد المذهل على ضفة النهر، الذي يوفر مناظر خلابة، خاصة عند غروب الشمس.' : 'Admire the stunning riverside temple, offering breathtaking views, especially at sunset.'}
                  </li>
                  <li>
                    <strong>{isRTL ? 'رحلة بحرية في نهر تشاو فرايا:' : 'Chao Phraya River Cruise:'}</strong> {isRTL ? 'رحلة خاصة فاخرة بالقارب على طول النهر، توفر مناظر خلابة لأفق بانكوك ومعالمها الشهيرة.' : 'A private, luxury boat ride along the river, offering picturesque views of Bangkok\'s skyline and iconic landmarks.'}
                  </li>
                  <li>
                    <strong>{isRTL ? 'مركز آيكونسيام التجاري:' : 'ICONSIAM Mall:'}</strong> {isRTL ? 'ملاذ للتسوق الفاخر، يضم بوتيكات راقية وعلامات تجارية عالمية وخيارات مطاعم عالمية المستوى، مثالي لقضاء فترة ما بعد الظهر في الترف.' : 'A luxury shopping haven, featuring high-end boutiques, international designer brands, and world-class dining options, perfect for an afternoon of indulgence.'}
                  </li>
                  <li>
                    <strong>{isRTL ? 'مزار إيراوان:' : 'Erawan Shrine:'}</strong> {isRTL ? 'زر هذا الموقع الروحي الشهير، المبجل لأجوائه الهادئة وعروض الرقص التايلاندي التقليدية.' : 'Visit this famous spiritual site, revered for its serene atmosphere and traditional Thai dance performances.'}
                  </li>
                  <li>
                    <strong>{isRTL ? 'سكاي بار في برج ليبوا:' : 'Sky Bar at Lebua State Tower:'}</strong> {isRTL ? 'استمتع بتجربة كوكتيل متميزة مع إطلالات خلابة على المدينة في أحد أعلى البارات الموجودة على السطح في العالم.' : 'Enjoy a premium cocktail experience with stunning views of the city at one of the world\'s highest rooftop bars.'}
                  </li>
                  <li>
                    <strong>{isRTL ? 'سيام باراجون:' : 'Siam Paragon:'}</strong> {isRTL ? 'تسوق في أحد أكبر مراكز التسوق الفاخرة في آسيا، الذي يقدم علامات تجارية حصرية ومجوهرات راقية وخيارات مطاعم من الدرجة الأولى.' : 'Experience shopping at one of Asia\'s largest luxury malls, offering exclusive brands, high-end jewelry, and top-tier dining options.'}
                  </li>
                  <li>
                    <strong>{isRTL ? 'مركز بانكوك للفنون والثقافة:' : 'Bangkok Art & Culture Centre (BACC):'}</strong> {isRTL ? 'استكشف معارض الفن المعاصر والفعاليات الثقافية في بيئة أنيقة وحديثة.' : 'Explore contemporary art exhibitions and cultural events in an elegant, modern setting.'}
                  </li>
                </ul>
                
                <p className="mt-6">
                  {isRTL 
                    ? 'أقم في أماكن إقامة فاخرة تلبي أعلى المعايير، بما في ذلك الفنادق ذات الخمس نجوم أو الفيلات الخاصة أو المنتجعات الحصرية، وكل منها يوفر راحة استثنائية وخصوصية وخدمة متميزة. ستشمل إقامتك وسائل راحة مصممة خصيصًا لتلبية احتياجات عملائنا من الشرق الأوسط، من المأكولات الحلال إلى الخدمات المناسبة للعائلات.'
                    : 'Stay in luxury accommodations that cater to the highest standards, including 5-star hotels, private villas, or exclusive resorts, each offering exceptional comfort, privacy, and service. Your stay will include bespoke amenities designed to meet the needs of our Middle Eastern clientele, from halal dining to family-friendly services.'}
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4 text-teal">
                  {isRTL ? 'تمديد اختياري إلى مقاطعات أخرى' : 'Optional Extension to Other Provinces'}
                </h3>
                
                <ul className={`space-y-4 ${isRTL ? 'rtl-list' : ''}`}>
                  <li>
                    <strong>{isRTL ? '➡️ بوكيت:' : '➡️ Phuket:'}</strong> {isRTL ? 'استمتع بجولات اليخوت الخاصة، انغمس في التنقل بين الجزر، أو استرخِ في منتجعات فاخرة على شاطئ البحر.' : 'Enjoy private yacht tours, indulge in island hopping, or relax at luxury beachfront resorts.'}
                  </li>
                  <li>
                    <strong>{isRTL ? '➡️ كوه ساموي:' : '➡️ Koh Samui:'}</strong> {isRTL ? 'استرخِ في منتجعات العافية أو احجز فيلات خاصة مطلة على البحر للحصول على ملاذ هادئ وخاص.' : 'Unwind in wellness retreats or book exclusive beachfront private villas for a serene and private escape.'}
                  </li>
                  <li>
                    <strong>{isRTL ? '➡️ تشيانغ ماي:' : '➡️ Chiang Mai:'}</strong> {isRTL ? 'استكشف الكنوز الثقافية، واستمتع بتجارب في ملاجئ الفيلة، وأقم في منتجعات جبلية خلابة للحصول على ملاذ تايلاندي أصيل.' : 'Explore cultural treasures, enjoy experiences at elephant sanctuaries, and stay at scenic mountain resorts for an authentic Thai retreat.'}
                  </li>
                </ul>
                
                <p className="mt-6">
                  {isRTL 
                    ? 'يتم تخصيص كل التفاصيل لتقديم تجربة استثنائية لك ولعائلتك، من لحظة وصولك حتى مغادرتك.'
                    : 'Every detail is personalized to offer you and your family an exceptional experience, from the moment you arrive to your departure.'}
                </p>
              </div>
              
              <div className="mt-12">
                <Link to="/contact" className="button-primary">
                  {isRTL ? 'صمم إقامتك الفاخرة' : 'Plan Your Luxury Experience'}
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
