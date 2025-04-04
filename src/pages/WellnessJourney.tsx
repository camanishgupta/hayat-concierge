
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Leaf, ArrowLeft } from 'lucide-react';
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
                src="/lovable-uploads/88d41144-e7e7-4a2f-9175-c01c8eadfdfa.png" 
                alt="Wellness Retreats" 
                className="rounded-xl shadow-xl w-full h-auto mb-8"
              />
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-semibold text-teal mb-4">
                  {isRTL ? 'لماذا تايلاند للعافية؟' : 'Why Thailand for Wellness?'}
                </h3>
                <ul className="space-y-3 text-charcoal">
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
                {isRTL ? 'رحلة العافية الخاصة بك' : 'Your Wellness Escape'}
              </h2>
              
              <div className="space-y-8 text-charcoal">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-4 text-teal">
                    {isRTL ? '1. مواقع الاستجمام' : '1. Retreat Locations'}
                  </h3>
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="md:w-1/2">
                      <p className="text-charcoal mb-4">
                        {isRTL 
                          ? 'استمتع بالهدوء في منتجعات العافية المختارة بعناية في قلب بانكوك. انغمس في برامج مصممة خصيصًا، وعلاجات السبا المجددة، وهدوء فاخر - مثالي للتخلص من السموم، وتخفيف التوتر، أو للهروب الواعي. وسط طاقة عاصمة تايلاند النابضة بالحياة، ستجد توازنك المثالي. واحة الهدوء الخاصة بك في انتظارك.'
                          : 'Experience serenity at our handpicked wellness retreats in the heart of Bangkok. Indulge in tailored programs, rejuvenating spa therapies, and luxurious tranquility—perfect for detox, stress relief, or a mindful escape. Amidst the energy of Thailand\'s vibrant capital, find your perfect balance. Your oasis of calm awaits.'}
                      </p>
                    </div>
                    <div className="md:w-1/2">
                      <img 
                        src="/lovable-uploads/c332b151-80b5-454d-87d7-34c92eced3eb.png" 
                        alt="Wellness Retreat Location" 
                        className="rounded-lg shadow-sm w-full h-auto"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-4 text-teal">
                    {isRTL ? '2. برامج العافية' : '2. Wellness Programs'}
                  </h3>
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="md:w-1/2 md:order-2">
                      <p className="text-charcoal">
                        {isRTL 
                          ? 'تم تصميم برامج العافية لدينا بعناية لمساعدتك على تحقيق أهدافك المحددة، سواء كان ذلك لتطهير جسمك، أو إدارة الوزن، أو تقليل التوتر، أو تجديد بشرتك بعلاجات مكافحة الشيخوخة الفاخرة.'
                          : 'Our wellness programs are thoughtfully designed to help you achieve your specific goals, whether it\'s detoxing your body, managing weight, reducing stress, or rejuvenating your skin with luxurious anti-aging treatments.'}
                      </p>
                    </div>
                    <div className="md:w-1/2 md:order-1">
                      <img 
                        src="/lovable-uploads/f1c74058-a82b-47d1-bb53-404cfb1831d6.png" 
                        alt="Wellness Programs" 
                        className="rounded-lg shadow-sm w-full h-auto"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-4 text-teal">
                    {isRTL ? '3. العلاجات والخدمات' : '3. Treatment & Services'}
                  </h3>
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="md:w-1/2">
                      <p className="text-charcoal">
                        {isRTL 
                          ? 'استمتع بمجموعة من العلاجات المميزة، مثل علاجات السبا بالأعشاب التايلاندية، وتدليك الحجر الساخن، وجلسات اللياقة البدنية المخصصة، وممارسات الشفاء الشمولية المصممة حسب احتياجاتك.'
                          : 'Indulge in a range of signature treatments, such as Thai herbal spa therapies, hot stone massages, personalized fitness sessions, and holistic healing practices tailored to your needs.'}
                      </p>
                    </div>
                    <div className="md:w-1/2">
                      <img 
                        src="/lovable-uploads/20d2b7d4-b124-4fbd-97de-2e373d7902e2.png" 
                        alt="Spa Treatments" 
                        className="rounded-lg shadow-sm w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-4 text-teal">
                    {isRTL ? '4. التخصيص والتصميم الشخصي' : '4. Personalization & Customization'}
                  </h3>
                  <p className="text-charcoal">
                    {isRTL 
                      ? 'كل منتجع مصمم خصيصًا ليناسب أهدافك الصحية. سيتعاون فريقنا ذو الخبرة معك لإنشاء خطة مصممة تتوافق مع أهدافك للصحة والاسترخاء والتجديد.'
                      : 'Every retreat is customized to fit your wellness objectives. Our experienced team will collaborate with you to create a tailored plan that aligns with your goals for health, relaxation, and rejuvenation.'}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-4 text-teal">
                      {isRTL ? '5. المميزات الصديقة للمسلمين' : '5. Muslim-Friendly Features'}
                    </h3>
                    <p className="text-charcoal">
                      {isRTL 
                        ? 'تم تصميم منتجعاتنا الصديقة للمسلمين مع وضع راحتك وخصوصيتك في الاعتبار، حيث تقدم خيارات طعام حلال، وغرف للصلاة، ومساحات خاصة للتأمل والاسترخاء.'
                        : 'Our Muslim-friendly retreats are designed with your comfort and privacy in mind, featuring halal dining options, prayer rooms, and private spaces for reflection and relaxation.'}
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-4 text-teal">
                      {isRTL ? '6. الممارسات المستدامة والصديقة للبيئة' : '6. Sustainable and Eco-Friendly Practices'}
                    </h3>
                    <p className="text-charcoal">
                      {isRTL 
                        ? 'تتبع منتجعاتنا ممارسات صديقة للبيئة، وتقدم طعامًا عضويًا، وأماكن إقامة مستدامة، وتجارب تغمرك في جمال الطبيعة مع دعم الرفاهية البيئية.'
                        : 'Our retreats follow eco-conscious practices, offering organic food, sustainable accommodations, and experiences that immerse you in the beauty of nature while supporting environmental well-being.'}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-4 text-teal">
                      {isRTL ? '7. المميزات والمرافق الحصرية' : '7. Exclusive Features & Amenities'}
                    </h3>
                    <p className="text-charcoal">
                      {isRTL 
                        ? 'استمتع بمرافق حصرية مثل الفيلات الخاصة، والطهاة الشخصيين، وجلسات اليوغا الفردية مع مدربين معتمدين لتعزيز تجربة العافية الخاصة بك.'
                        : 'Enjoy exclusive amenities like private villas, personalized chefs, and one-on-one yoga sessions with certified instructors to enhance your wellness experience.'}
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-4 text-teal">
                      {isRTL ? '8. شهادات الضيوف وقصص النجاح' : '8. Guest Testimonials & Success Stories'}
                    </h3>
                    <p className="text-charcoal">
                      {isRTL 
                        ? 'اقرأ القصص الملهمة للضيوف الذين قاموا بتحويل صحتهم ووجدوا طاقة متجددة من خلال منتجعاتنا.'
                        : 'Read the inspiring stories of guests who have transformed their health and found renewed energy through our retreats.'}
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="md:w-1/2">
                      <h3 className="text-xl font-semibold mb-4 text-teal">
                        {isRTL ? '9. كيفية الحجز والخطوات التالية' : '9. How to Book and Next Steps'}
                      </h3>
                      <p className="text-charcoal mb-6">
                        {isRTL 
                          ? 'هل أنت مستعد لبدء رحلة العافية الخاصة بك؟ قم بجدولة استشارة مع خبرائنا اليوم ودعنا نساعدك في تصميم المنتجع المثالي.'
                          : 'Ready to start your wellness journey? Schedule a consultation with our experts today and let us help you design the perfect retreat.'}
                      </p>
                      <Link to="/enquiry" className="button-primary inline-block">
                        {isRTL ? 'احجز منتجعك الآن' : 'Book Your Retreat Now'}
                      </Link>
                    </div>
                    <div className="md:w-1/2">
                      <img 
                        src="/lovable-uploads/d7b307d3-5a69-4756-840d-7cb6345712f7.png" 
                        alt="Luxury Spa Experience" 
                        className="rounded-lg shadow-sm w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="heading-lg mb-6 text-gold">
            {isRTL ? 'حول تجربة العافية الخاصة بك إلى حقيقة' : 'Turn Your Wellness Experience Into Reality'}
          </h2>
          <p className="text-offwhite text-lg max-w-2xl mx-auto mb-8">
            {isRTL 
              ? 'مع حياة كونسيرج، كل رحلة عافية مصممة خصيصًا لتناسب احتياجاتك ورغباتك الفريدة.' 
              : 'With Hayat Concierge, every wellness journey is tailored to fit your unique needs and desires.'}
          </p>
          <Link to="/enquiry" className="button-primary">
            {isRTL ? 'احجز استشارتك المجانية' : 'Book Your Free Consultation'}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WellnessJourney;
