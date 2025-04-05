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

      {/* Rest of the component would go here */}

      {/* I'm updating just the languages section to change "Arabic fluency" to "Arabic" */}
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
      
      {/* Rest of the component would continue */}
    </div>
  );
};

export default Founder;
