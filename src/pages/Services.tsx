
import React from 'react';
import { Heart, Building2, Stethoscope, ArrowRight, CheckCircle, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <div className="bg-offwhite pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-teal">
        <div className="absolute inset-0 geometric-pattern-bg opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="heading-xl mb-6 hero-text-gradient">
              {isRTL ? 'خدمات كونسيرج حياة' : 'Hayat Concierge Services'}
            </h1>
            <p className="text-offwhite text-xl max-w-2xl">
              {isRTL 
                ? 'مصممة خصيصًا لاحتياجاتك، مصممة للتميز' 
                : 'Tailored to Your Needs, Designed for Excellence'}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-charcoal text-lg leading-relaxed">
              {isRTL 
                ? 'في حياة كونسيرج، لا نقدم حزمًا قياسية - نحن نخلق تجارب شخصية مصممة حول احتياجاتك الفريدة. سواء كنت تبحث عن رعاية طبية عالمية المستوى، أو منتجع صحي فاخر، أو تجربة سفر لا تُنسى، نحن نهتم بكل التفاصيل بنهج مخصص.' 
                : 'At Hayat Concierge, we don\'t offer standard packages—we create personalized experiences designed around your unique needs. Whether you\'re seeking world-class medical care, a luxury wellness retreat, or an unforgettable travel experience, we take care of every detail with a customized approach.'}
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16 bg-emerald/10">
        <div className="container mx-auto px-6">
          {/* Medical Tourism */}
          <div className="mb-24">
            <div className={`flex items-center justify-center mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Stethoscope className="text-gold mx-4" size={32} />
              <h2 className="heading-lg">
                {isRTL ? 'الخدمات الطبية وتنسيق الرعاية الصحية' : 'Medical Concierge & Healthcare Coordination'}
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/lovable-uploads/d6ef3629-928b-48e7-8d95-11057f5472b4.png" 
                  alt="Medical Tourism" 
                  className="rounded-xl shadow-xl w-full h-auto"
                />
              </div>
              <div>
                <p className="text-charcoal mb-6">
                  {isRTL 
                    ? 'نربطك بالمستشفيات والأخصائيين الرائدين في بانكوك، مما يضمن رحلة طبية سلسة من الاستشارة إلى التعافي. كل جانب مصمم خصيصًا، مع مراعاة:' 
                    : 'We connect you with leading hospitals and specialists in Bangkok, ensuring a smooth medical journey from consultation to recovery. Every aspect is tailored, considering:'}
                </p>
                <ul className="space-y-4">
                  <li className={`flex ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <span className={`text-gold ${isRTL ? 'ml-3' : 'mr-3'} text-xl`}>✔️</span>
                    <p className="text-charcoal">
                      {isRTL 
                        ? 'متطلبات العلاج المحددة الخاصة بك (طب الأسنان، الخصوبة، التجميل، العظام، وما بعدها).' 
                        : 'Your specific treatment requirements (dental, fertility, aesthetics, orthopedics, and beyond).'}
                    </p>
                  </li>
                  <li className={`flex ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <span className={`text-gold ${isRTL ? 'ml-3' : 'mr-3'} text-xl`}>✔️</span>
                    <p className="text-charcoal">
                      {isRTL 
                        ? 'مدة الإقامة، الميزانية، ومستوى التخصيص المطلوب.' 
                        : 'Length of stay, budget, and level of personalization needed.'}
                    </p>
                  </li>
                  <li className={`flex ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <span className={`text-gold ${isRTL ? 'ml-3' : 'mr-3'} text-xl`}>✔️</span>
                    <p className="text-charcoal">
                      {isRTL 
                        ? 'الإقامة، النقل، والدعم لأفراد العائلة المرافقين.' 
                        : 'Accommodation, transportation, and support for accompanying family members.'}
                    </p>
                  </li>
                  <li className={`flex ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <span className={`text-gold ${isRTL ? 'ml-3' : 'mr-3'} text-xl`}>✔️</span>
                    <p className="text-charcoal">
                      {isRTL 
                        ? 'رعاية ما بعد العلاج والمتابعة الطبية على المدى الطويل.' 
                        : 'Post-treatment care and long-term medical follow-up.'}
                    </p>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link to="/healthcare-solutions" className={`button-secondary inline-flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                    {isRTL ? 'استكشاف حلول الرعاية الصحية' : 'Explore Healthcare Solutions'}
                    <ArrowRight className={`${isRTL ? 'mr-2 rotate-180' : 'ml-2'} w-4 h-4`} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Wellness Retreats */}
          <div className="mb-24">
            <div className={`flex items-center justify-center mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Heart className="text-gold mx-4" size={32} />
              <h2 className="heading-lg">
                {isRTL ? 'منتجعات العافية والتجديد' : 'Wellness & Rejuvenation Retreats'}
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <p className="text-charcoal mb-6">
                  {isRTL 
                    ? 'استمتع بتجارب العافية الفاخرة المصممة للاسترخاء والشفاء والتجديد. نقدم برامج مخصصة في أفضل منتجعات العافية في تايلاند، مع خدمات مثل:' 
                    : 'Indulge in luxury wellness retreats crafted for relaxation, healing, and rejuvenation. We offer customized programs in Thailand\'s top wellness resorts, with services like:'}
                </p>
                <ul className="space-y-4">
                  <li className={`flex ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <span className={`text-gold ${isRTL ? 'ml-3' : 'mr-3'} text-xl`}>✔️</span>
                    <p className="text-charcoal">
                      {isRTL 
                        ? 'برامج التخلص من السموم، تخفيف التوتر، إدارة الوزن، وعلاجات مكافحة الشيخوخة.' 
                        : 'Detox, stress relief, weight management, and anti-aging treatments.'}
                    </p>
                  </li>
                  <li className={`flex ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <span className={`text-gold ${isRTL ? 'ml-3' : 'mr-3'} text-xl`}>✔️</span>
                    <p className="text-charcoal">
                      {isRTL 
                        ? 'تجارب العافية المناسبة للمسلمين مع تناول الطعام الحلال والخصوصية.' 
                        : 'Muslim-friendly wellness experiences with halal dining and privacy.'}
                    </p>
                  </li>
                  <li className={`flex ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <span className={`text-gold ${isRTL ? 'ml-3' : 'mr-3'} text-xl`}>✔️</span>
                    <p className="text-charcoal">
                      {isRTL 
                        ? 'تخطيط منتجع مخصص بناءً على أهدافك وتفضيلاتك.' 
                        : 'Personalized retreat planning based on your goals and preferences.'}
                    </p>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link to="/wellness-journey" className={`button-secondary inline-flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                    {isRTL ? 'اكتشف رحلة العافية الخاصة بك' : 'Discover Your Wellness Journey'}
                    <ArrowRight className={`${isRTL ? 'mr-2 rotate-180' : 'ml-2'} w-4 h-4`} />
                  </Link>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="/lovable-uploads/5a2120b0-f231-435f-ab36-4cb3d2a9ab2a.png" 
                  alt="Wellness Retreats" 
                  className="rounded-xl shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Luxury Accommodations */}
          <div>
            <div className={`flex items-center justify-center mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Building2 className="text-gold mx-4" size={32} />
              <h2 className="heading-lg">
                {isRTL ? 'الإقامات الحصرية والسفر المصمم' : 'Exclusive Stays & Bespoke Travel'}
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/lovable-uploads/e4eac86e-51a5-4ecd-9925-2e179664c415.png" 
                  alt="Luxury Accommodations" 
                  className="rounded-xl shadow-xl w-full h-auto"
                />
              </div>
              <div>
                <p className="text-charcoal mb-6">
                  {isRTL 
                    ? 'استمتع بتايلاند في فخامة لا مثيل لها مع فنادقنا الفاخرة المختارة بعناية والفيلات الخاصة، التي تقدم وسائل راحة مصممة حسب تفضيلاتك الثقافية والشخصية. نحن نقوم بتنظيم:' 
                    : 'Experience Thailand in unparalleled luxury with our handpicked premium hotels and private villas, offering bespoke amenities tailored to your cultural and personal preferences. we curate:'}
                </p>
                <ul className="space-y-4">
                  <li className={`flex ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <span className={`text-gold ${isRTL ? 'ml-3' : 'mr-3'} text-xl`}>✔️</span>
                    <p className="text-charcoal">
                      {isRTL 
                        ? 'أماكن إقامة فاخرة مصممة حسب تفضيلاتك.' 
                        : 'Luxury accommodations tailored to your preferences.'}
                    </p>
                  </li>
                  <li className={`flex ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <span className={`text-gold ${isRTL ? 'ml-3' : 'mr-3'} text-xl`}>✔️</span>
                    <p className="text-charcoal">
                      {isRTL 
                        ? 'خطط سفر مخصصة في بانكوك، مع خيار التمديد إلى المقاطعات المجاورة بناءً على تفضيلاتك واهتماماتك.' 
                        : 'Custom itineraries in Bangkok, with the option to extend to nearby provinces based on your preferences and interests.'}
                    </p>
                  </li>
                  <li className={`flex ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <span className={`text-gold ${isRTL ? 'ml-3' : 'mr-3'} text-xl`}>✔️</span>
                    <p className="text-charcoal">
                      {isRTL 
                        ? 'جولات خاصة بمرشدين، تجارب ثقافية، وتسوق راقي.' 
                        : 'Private guided tours, cultural experiences, and high-end shopping.'}
                    </p>
                  </li>
                  <li className={`flex ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <span className={`text-gold ${isRTL ? 'ml-3' : 'mr-3'} text-xl`}>✔️</span>
                    <p className="text-charcoal">
                      {isRTL 
                        ? 'نقل VIP، تناول الطعام الفاخر، ومساعدين شخصيين.' 
                        : 'VIP transportation, fine dining, and personal assistants.'}
                    </p>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link to="/luxury-experience" className={`button-secondary inline-flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                    {isRTL ? 'خطط لتجربتك الفاخرة' : 'Plan Your Luxury Experience'}
                    <ArrowRight className={`${isRTL ? 'mr-2 rotate-180' : 'ml-2'} w-4 h-4`} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg text-center mb-10 text-teal">
              {isRTL ? 'لماذا تختار حياة كونسيرج؟' : 'Why Choose Hayat Concierge?'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`flex ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                <div className={`${isRTL ? 'ml-4' : 'mr-4'} text-gold`}>
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-charcoal">
                    {isRTL ? 'خدمة شخصية' : 'Personalized service'}
                  </h3>
                  <p className="text-charcoal/80">
                    {isRTL ? 'نعدل كل التفاصيل حسب احتياجاتك الخاصة.' : 'We adapt every detail to your specific needs.'}
                  </p>
                </div>
              </div>
              
              <div className={`flex ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                <div className={`${isRTL ? 'ml-4' : 'mr-4'} text-gold`}>
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-charcoal">
                    {isRTL ? 'التنسيق السلس' : 'Seamless coordination'}
                  </h3>
                  <p className="text-charcoal/80">
                    {isRTL ? 'من الوصول إلى المغادرة، نحن نتولى كل شيء.' : 'From arrival to departure, we handle everything.'}
                  </p>
                </div>
              </div>
              
              <div className={`flex ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                <div className={`${isRTL ? 'ml-4' : 'mr-4'} text-gold`}>
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-charcoal">
                    {isRTL ? 'الخصوصية والراحة' : 'Privacy & comfort'}
                  </h3>
                  <p className="text-charcoal/80">
                    {isRTL ? 'خدمات راقية تراعي التفضيلات الثقافية.' : 'High-end services catering to cultural preferences.'}
                  </p>
                </div>
              </div>
              
              <div className={`flex ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                <div className={`${isRTL ? 'ml-4' : 'mr-4'} text-gold`}>
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-charcoal">
                    {isRTL ? 'شراكات خبيرة' : 'Expert partnerships'}
                  </h3>
                  <p className="text-charcoal/80">
                    {isRTL ? 'تعاون مع أفضل المستشفيات ومراكز العافية والفنادق الفاخرة.' : 'Collaborations with top hospitals, wellness centers, and luxury hotels.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-emerald/10 rounded-xl text-center">
              <div className="flex justify-center mb-4 text-gold">
                <PhoneCall size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-teal">
                {isRTL ? 'دعنا نصمم تجربتك معًا' : 'Let\'s Design Your Experience Together'}
              </h3>
              <p className="text-charcoal mb-6">
                {isRTL ? 'اتصل بنا للحصول على استشارة فردية لإنشاء رحلتك المثالية.' : 'Contact us for a one-on-one consultation to create your perfect journey.'}
              </p>
              <Link to="/enquiry" className="button-primary inline-block">
                {isRTL ? 'تواصل معنا' : 'Contact Us'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-teal text-center">
        <div className="container mx-auto px-6">
          <h2 className="heading-lg text-gold mb-6">
            {isRTL ? 'تجربة خدمة لا مثيل لها' : 'Experience Unparalleled Service'}
          </h2>
          <p className="text-offwhite max-w-2xl mx-auto mb-8">
            {isRTL 
              ? 'اتصل بنا اليوم لمناقشة كيف يمكننا تصميم خدماتنا المميزة وفقًا لاحتياجاتك وتفضيلاتك المحددة.' 
              : 'Contact us today to discuss how we can tailor our premium services to your specific needs and preferences.'}
          </p>
          <Link to="/enquiry" className="button-primary inline-block">
            {isRTL ? 'تواصل معنا' : 'Get in Touch'}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
