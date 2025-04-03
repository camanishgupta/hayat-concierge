
import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, ArrowLeft, MapPin, Star } from 'lucide-react';
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
              {isRTL ? 'الإقامة والترفيه' : 'Leisure & Accommodations'}
            </h1>
            <p className="text-offwhite text-xl max-w-2xl">
              {isRTL 
                ? 'تجارب سفر مصممة خصيصًا مع إقامات فاخرة حصرية' 
                : 'Tailored travel experiences with exclusive luxury stays'}
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
                alt="Luxury Accommodations" 
                className="rounded-xl shadow-xl w-full h-auto mb-8"
              />
              
              <div className="bg-emerald/10 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-teal mb-4">
                  {isRTL ? 'تمديد اختياري إلى المحافظات الأخرى' : 'Optional Extension to Other Provinces'}
                </h3>
                <ul className="space-y-3">
                  <li className={`flex ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <MapPin className={`text-gold flex-shrink-0 ${isRTL ? 'ml-2' : 'mr-2'}`} size={18} />
                    <span>
                      <strong>{isRTL ? 'فوكيت:' : 'Phuket:'}</strong> {isRTL ? 'استمتع بجولات اليخوت الخاصة، وانغمس في القفز من جزيرة إلى أخرى، أو استرخ في منتجعات فاخرة على الشاطئ.' : 'Enjoy private yacht tours, indulge in island hopping, or relax at luxury beachfront resorts.'}
                    </span>
                  </li>
                  <li className={`flex ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <MapPin className={`text-gold flex-shrink-0 ${isRTL ? 'ml-2' : 'mr-2'}`} size={18} />
                    <span>
                      <strong>{isRTL ? 'كوه ساموي:' : 'Koh Samui:'}</strong> {isRTL ? 'استرخ في منتجعات العافية أو احجز فيلات خاصة على الشاطئ للحصول على هروب هادئ وخاص.' : 'Unwind in wellness retreats or book exclusive beachfront private villas for a serene and private escape.'}
                    </span>
                  </li>
                  <li className={`flex ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <MapPin className={`text-gold flex-shrink-0 ${isRTL ? 'ml-2' : 'mr-2'}`} size={18} />
                    <span>
                      <strong>{isRTL ? 'شيانغ ماي:' : 'Chiang Mai:'}</strong> {isRTL ? 'استكشف الكنوز الثقافية، واستمتع بتجارب في ملاجئ الفيلة، وأقم في منتجعات جبلية ذات مناظر خلابة للحصول على تجربة تايلاندية أصيلة.' : 'Explore cultural treasures, enjoy experiences at elephant sanctuaries, and stay at scenic mountain resorts for an authentic Thai retreat.'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h2 className="heading-lg mb-6 text-teal">
                {isRTL ? 'تجربة الفخامة في تايلاند' : 'Experience Luxury in Thailand'}
              </h2>
              
              <div className="prose max-w-none text-charcoal">
                <p>
                  {isRTL 
                    ? 'استمتع بأعلى مستويات الفخامة في تايلاند، مع تجربة سفر مصممة لتناسب تفضيلاتك واحتياجاتك الفريدة ومدة إقامتك. سواء كنت مسافرًا مع عائلتك، أو تستمتع بعطلة رومانسية، أو تنطلق في رحلة خاصة، نضمن أن تكون رحلتك سلسة ولا تُنسى. سيتم تخصيص رحلتك بناءً على احتياجات مجموعتك، مما يضمن أقصى درجات الراحة والأناقة طوال فترة إقامتك.'
                    : 'Experience the epitome of luxury in Thailand, with a tailored travel experience designed to suit your unique preferences, needs, and length of stay. Whether you\'re traveling with your family, enjoying a romantic getaway, or embarking on a private retreat, we ensure your journey is seamless and unforgettable. Your trip will be customized based on your group\'s needs, ensuring the utmost comfort and elegance throughout your stay.'}
                </p>
                
                <p className="mt-4">
                  {isRTL 
                    ? 'في بانكوك، انغمس في الثقافة النابضة بالحياة وتجارب الفخامة التي تقدمها المدينة، من وجهات التسوق المرموقة إلى المواقع الثقافية الحصرية. فيما يلي بعض التجارب التي يجب مشاهدتها والقيام بها لضيوفنا المتميزين:'
                    : 'In Bangkok, immerse yourself in the vibrant culture and luxury experiences the city offers, from prestigious shopping destinations to exclusive cultural sites. Here are a few must-see and must-do experiences for our discerning guests:'}
                </p>
                
                <ul className="mt-6 space-y-4">
                  <li className={`flex ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <Star className={`text-gold flex-shrink-0 ${isRTL ? 'ml-2' : 'mr-2'} mt-1`} size={16} />
                    <span>
                      <strong>{isRTL ? 'القصر الكبير ووات فرا كيو:' : 'The Grand Palace & Wat Phra Kaew:'}</strong> {isRTL ? 'استكشف القصر الملكي الأيقوني، موطن بوذا الزمرد المقدس في تايلاند، رمز حقيقي للتراث الثقافي.' : 'Explore the iconic Royal Palace, home to Thailand\'s sacred Emerald Buddha, a true symbol of cultural heritage.'}
                    </span>
                  </li>
                  <li className={`flex ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <Star className={`text-gold flex-shrink-0 ${isRTL ? 'ml-2' : 'mr-2'} mt-1`} size={16} />
                    <span>
                      <strong>{isRTL ? 'وات أرون (معبد الفجر):' : 'Wat Arun (Temple of Dawn):'}</strong> {isRTL ? 'أعجب بالمعبد المذهل على ضفة النهر، الذي يقدم مناظر خلابة، خاصة عند غروب الشمس.' : 'Admire the stunning riverside temple, offering breathtaking views, especially at sunset.'}
                    </span>
                  </li>
                  <li className={`flex ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <Star className={`text-gold flex-shrink-0 ${isRTL ? 'ml-2' : 'mr-2'} mt-1`} size={16} />
                    <span>
                      <strong>{isRTL ? 'رحلة بحرية في نهر تشاو فرايا:' : 'Chao Phraya River Cruise:'}</strong> {isRTL ? 'رحلة خاصة وفاخرة بالقارب على طول النهر، تقدم مناظر خلابة لأفق بانكوك ومعالمها الشهيرة.' : 'A private, luxury boat ride along the river, offering picturesque views of Bangkok\'s skyline and iconic landmarks.'}
                    </span>
                  </li>
                  <li className={`flex ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <Star className={`text-gold flex-shrink-0 ${isRTL ? 'ml-2' : 'mr-2'} mt-1`} size={16} />
                    <span>
                      <strong>{isRTL ? 'مركز آيكونسيام التجاري:' : 'ICONSIAM Mall:'}</strong> {isRTL ? 'ملاذ تسوق فاخر، يضم متاجر راقية وماركات عالمية مصممة وخيارات طعام من الدرجة الأولى، مثالي لقضاء فترة ما بعد الظهر في الانغماس.' : 'A luxury shopping haven, featuring high-end boutiques, international designer brands, and world-class dining options, perfect for an afternoon of indulgence.'}
                    </span>
                  </li>
                </ul>
                
                <p className="mt-6">
                  {isRTL 
                    ? 'أقم في أماكن إقامة فاخرة تلبي أعلى المعايير، بما في ذلك الفنادق ذات الخمس نجوم، أو الفيلات الخاصة، أو المنتجعات الحصرية، ويقدم كل منها راحة استثنائية وخصوصية وخدمة. ستشمل إقامتك وسائل راحة مصممة خصيصًا لتلبية احتياجات عملائنا من الشرق الأوسط، من المأكولات الحلال إلى الخدمات المناسبة للعائلات.'
                    : 'Stay in luxury accommodations that cater to the highest standards, including 5-star hotels, private villas, or exclusive resorts, each offering exceptional comfort, privacy, and service. Your stay will include bespoke amenities designed to meet the needs of our Middle Eastern clientele, from halal dining to family-friendly services.'}
                </p>
                
                <p className="mt-6">
                  {isRTL 
                    ? 'يتم تخصيص كل التفاصيل لتقديم تجربة استثنائية لك ولعائلتك، من لحظة وصولك إلى مغادرتك.'
                    : 'Every detail is personalized to offer you and your family an exceptional experience, from the moment you arrive to your departure.'}
                </p>
              </div>
              
              <div className="mt-12">
                <Link to="/enquiry" className="button-primary">
                  {isRTL ? 'صمم تجربتك الفاخرة' : 'Design Your Luxury Experience'}
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
