
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Globe, Award, Briefcase, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Founder = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Array of languages with proficiency level
  const languages = [
    { name: isRTL ? 'العربية' : 'Arabic', level: 'Native' },
    { name: isRTL ? 'الإنجليزية' : 'English', level: 'Fluent' },
    { name: isRTL ? 'الفرنسية' : 'French', level: 'Fluent' },
    { name: isRTL ? 'التايلاندية' : 'Thai', level: 'Conversational' }
  ];

  return (
    <div className="min-h-screen bg-offwhite">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#0A3A2A]/10 geometric-pattern-bg"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="heading-xl mb-6 hero-text-gradient">
              {isRTL ? 'مؤسس حياة كونسيرج' : 'Founder of Hayat Concierge'}
            </h1>
            <p className="subheading text-xl mb-8">
              {isRTL 
                ? 'تعرف على مؤسس حياة كونسيرج، الذي جمع بين الثقافة الفرنسية والجزائرية والخبرة العميقة في خدمات الرفاهية والسياحة العلاجية.'
                : 'Meet the founder of Hayat Concierge, who brings together French-Algerian heritage and deep expertise in luxury hospitality and medical tourism.'}
            </p>
          </div>
        </div>
      </section>

      {/* Unique Cultural Perspective */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-lg mb-6 hero-text-gradient">
              {isRTL ? 'منظور ثقافي فريد' : 'A Unique Cultural Perspective'}
            </h2>
            <p className="leading-relaxed text-muted-foreground mb-6">
              {isRTL 
                ? 'ولدت في تراث فرنسي-جزائري، وكنت دائمًا منغمسة في مزيج غني من الثقافات، مما أعطاني تقديرًا عميقًا للتنوع. فهمي العميق للثقافات الشرق أوسطية والتايلاندية يتيح لي جسر الفجوة بين هذين العالمين، مما يضمن تجارب فاخرة سلسة ومتناغمة ثقافيًا لعملائي.'
                : 'Born into a French-Algerian heritage, I have always been immersed in a rich blend of cultures, which has given me a deep appreciation for diversity. My profound understanding of Middle Eastern and Thai cultures allows me to bridge the gap between these two worlds, ensuring seamless and culturally attuned luxury experiences for my clients.'}
            </p>
          </div>
          <div className="relative">
            <img 
              src="/lovable-uploads/8ae617ca-f183-45bb-9b17-6bece82fc15d.png" 
              alt="Founder cultural background" 
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 border-4 border-gold/20 rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="bg-cream py-16">
        <div className="container mx-auto px-6">
          <h2 className="heading-lg mb-12 text-center hero-text-gradient">
            {isRTL ? 'رحلة عبر الفخامة والضيافة' : 'A Journey Through Luxury & Hospitality'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6">
              <div className="mb-4 text-center">
                <Briefcase className="w-10 h-10 text-gold mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-center text-navy mb-3">
                {isRTL ? 'خلفية في الضيافة الفاخرة' : 'Luxury Hospitality Background'}
              </h3>
              <p className="text-muted-foreground text-sm">
                {isRTL 
                  ? 'عملت مع علامات تجارية راقية مثل IXINA وفندق باريسي من فئة 5 نجوم، وأتقنت الخدمة من الدرجة الأولى ورضا العملاء.'
                  : 'Worked with high-end brands like IXINA and a 5-star Parisian hotel, mastering top-tier service and client satisfaction.'}
              </p>
            </div>
            <div className="glass-card p-6">
              <div className="mb-4 text-center">
                <Award className="w-10 h-10 text-gold mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-center text-navy mb-3">
                {isRTL ? 'المهارات المكتسبة' : 'Skills Developed'}
              </h3>
              <p className="text-muted-foreground text-sm">
                {isRTL 
                  ? 'أكثر من عقد في التدريس صقل مهاراتي في التنظيم والقيادة وحل المشكلات - وهي أساسية لتقديم تجارب كونسيرج استثنائية.'
                  : 'Over a decade in teaching honed my organization, leadership, and problem-solving skills—key to delivering exceptional concierge experiences.'}
              </p>
            </div>
            <div className="glass-card p-6">
              <div className="mb-4 text-center">
                <Users className="w-10 h-10 text-gold mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-center text-navy mb-3">
                {isRTL ? 'العلاقات الثقافية' : 'Cultural Relations'}
              </h3>
              <p className="text-muted-foreground text-sm">
                {isRTL 
                  ? 'تخصصت في فهم وتلبية التوقعات الثقافية الفريدة لعملائنا من الشرق الأوسط، مما يضمن تجارب مخصصة حقًا تراعي الاحتياجات الخاصة.'
                  : 'Specialized in understanding and meeting the unique cultural expectations of our Middle Eastern clients, ensuring truly personalized experiences that respect specific needs.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading-lg mb-8 text-center hero-text-gradient">
            {isRTL ? 'المهارات اللغوية' : 'Language Proficiency'}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {languages.map((language) => (
              <div key={language.name} className="glass-card p-6 text-center">
                <Globe className="mx-auto mb-3 text-gold" size={24} />
                <h3 className="text-lg font-medium text-navy">{language.name}</h3>
                <p className="text-sm text-muted-foreground">{language.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Video Section */}
      <section className="bg-emerald text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6 text-gold">
                {isRTL ? 'الإلهام وراء حياة كونسيرج' : 'The Inspiration Behind Hayat Concierge'}
              </h2>
              <p className="leading-relaxed mb-6 text-white/80">
                {isRTL 
                  ? 'كشفت تجربة شخصية مع الرعاية الطبية الاستثنائية في تايلاند عن مكانتها كوجهة رئيسية للعافية والسياحة الطبية. بإلهام من ضيافتها واحترافها، أسست حياة كونسيرج لربط العملاء من الشرق الأوسط بسلاسة مع السفر الفاخر والعافية والرعاية الصحية العالمية في تايلاند.'
                  : 'A personal experience with Thailand\'s exceptional medical care revealed its status as a premier wellness and medical tourism destination. Inspired by its hospitality and professionalism, I founded Hayat Concierge to seamlessly connect Middle Eastern clients with Thailand\'s luxury travel, wellness, and world-class healthcare.'}
              </p>
              <p className="leading-relaxed text-white/80">
                {isRTL 
                  ? 'مع خلفيتي الفريدة، ومهاراتي متعددة اللغات، والتدريب المهني من معهد السفر، أنا مؤهلة بشكل مثالي لتنظيم تجارب سلسة ومخصصة مصممة لتلبية الاحتياجات المحددة للمسافرين من الشرق الأوسط.'
                  : 'With my unique background, multilingual skills, and professional training from The Travel Institute, I am ideally qualified to curate seamless, personalized experiences tailored to the specific needs of Middle Eastern travelers.'}
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/your-video-id-here" 
                title="Founder Story" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full rounded-lg aspect-video"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-cream py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="heading-lg mb-8 hero-text-gradient">
            {isRTL ? 'هل أنت جاهز لتجربة تايلاند بشكل مختلف؟' : 'Ready to Experience Thailand Differently?'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            {isRTL 
              ? 'سواء كنت تبحث عن علاج طبي متطور، أو استراحة للعافية، أو تجربة ترفيهية فاخرة، يشرفنا أن نصمم رحلة مخصصة تلبي احتياجاتك المحددة.'
              : 'Whether you\'re seeking advanced medical treatment, a wellness retreat, or a luxury leisure experience, let us design a bespoke journey that meets your specific needs.'}
          </p>
          <a href="/enquiry" className="button-primary inline-block">
            {isRTL ? 'اتصل بنا اليوم' : 'Contact Us Today'}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Founder;
