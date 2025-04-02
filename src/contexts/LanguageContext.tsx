
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.aboutUs': 'About Us',
    'nav.aboutHayat': 'About Hayat Concierge',
    'nav.aboutFounder': 'About Founder',
    'nav.services': 'Services',
    'nav.itineraries': 'Itineraries',
    'nav.partners': 'Partners',
    'nav.enquiry': 'Enquiry',
    'nav.contactUs': 'Contact Us',
    
    // Common
    'common.submit': 'Submit',
    'common.required': 'Required',
    'common.optional': 'Optional',
    'common.select': 'Select',
    'common.other': 'Other',
    
    // Homepage sections
    'home.hero.title': 'Your Trusted Link Between the Middle East and Thailand\'s Finest Experiences',
    'home.hero.subtitle': 'Elevate Your Journey in Thailand – Personalized Medical, Wellness & Travel Experiences, Designed Just for You',
    'home.hero.button': 'Book Your Experience',
    'home.hero.explore': 'Explore Services',
    'home.about.title': 'Elevating Luxury Travel in Thailand',
    'home.about.subtitle': 'Why Choose Us',
    'home.about.description': 'Bespoke Thai Journeys was founded with a singular mission: to provide discerning travelers with effortless access to Thailand\'s finest experiences. Our deep local connections and attention to detail ensure a seamless journey.',
    'home.about.feature1': 'Personalized service with dedicated concierge',
    'home.about.feature2': 'VIP access to premium facilities',
    'home.about.feature3': 'End-to-end journey management',
    'home.about.feature4': '24/7 support throughout your stay',
    'home.about.cta': 'Learn More About Our Approach',
    'home.services.title': 'Our Premium Services',
    'home.services.subtitle': 'Tailored Experiences',
    'home.services.description': 'We offer a comprehensive range of services to ensure your journey in Thailand is seamless, luxurious, and perfectly aligned with your needs.',
    'home.testimonials.title': 'Client Experiences',
    'home.testimonials.subtitle': 'What Our Clients Say',
    'home.partners.title': 'Our Trusted Partners',
    'home.partners.subtitle': 'Excellence Network',
    'home.partners.description': 'We collaborate with Thailand\'s finest establishments to provide you with unparalleled access and preferential treatment.',
    
    // About Founder
    'founder.culturalPerspective.title': 'A Unique Cultural Perspective',
    'founder.culturalPerspective.content': 'Born into a French-Algerian heritage, I have always been immersed in a rich blend of cultures, which has given me a deep appreciation for diversity. My profound understanding of Middle Eastern and Thai cultures allows me to bridge the gap between these two worlds, ensuring seamless and culturally attuned luxury experiences for my clients.',
    'founder.journey.title': 'A Journey Through Luxury & Hospitality',
    'founder.journey.content': 'With a strong luxury hospitality background, I\'ve worked with high-end brands like IXINA and a 5-star Parisian hotel, mastering top-tier service and client satisfaction. Over a decade in teaching honed my organization, leadership, and problem-solving skills—key to delivering exceptional concierge experiences.',
    'founder.passion.title': 'Passion for Travel & Wellness',
    'founder.passion.content': 'My love for travel and cultural exploration led me to Asia, where I fell in love with Thailand\'s hospitality, wellness traditions, and stunning landscapes. Inspired by its world-class holistic health services, I merged my passions for luxury travel, wellness, and personalized experiences.',
    'founder.inspiration.title': 'The Inspiration Behind Hayat Concierge',
    'founder.inspiration.content': 'A personal experience with Thailand\'s exceptional medical care revealed its status as a premier wellness and medical tourism destination. Inspired by its hospitality and professionalism, I founded Hayat Concierge to seamlessly connect Middle Eastern clients with Thailand\'s luxury travel, wellness, and world-class healthcare.',
    'founder.bridging.title': 'Bridging Luxury & Medical Excellence',
    'founder.bridging.content': 'With my unique background, multilingual skills, and professional training from The Travel Institute, I am ideally qualified to curate seamless, personalized experiences tailored to the specific needs of Middle Eastern travelers.',
    
    // Services
    'services.title': 'Our Premium Services',
    'services.subtitle': 'Tailored to Your Needs',
    'services.medical.title': 'Medical Tourism',
    'services.medical.subtitle': 'World-Class Healthcare',
    'services.medical.description': 'Access Thailand\'s internationally accredited hospitals and specialists with personalized medical coordination.',
    'services.wellness.title': 'Wellness Retreats',
    'services.wellness.subtitle': 'Rejuvenation & Balance',
    'services.wellness.description': 'Experience Thailand\'s renowned wellness traditions with customized retreat programs.',
    'services.luxury.title': 'Luxury Experiences',
    'services.luxury.subtitle': 'Exclusive Access',
    'services.luxury.description': 'Discover Thailand\'s hidden gems and exclusive experiences with our VIP arrangements.',
    'services.concierge.title': 'Full Concierge',
    'services.concierge.subtitle': 'End-to-End Service',
    'services.concierge.description': 'From airport arrival to departure, enjoy seamless assistance throughout your journey.',
    
    // Enquiry Form
    'enquiry.title': 'Begin Your Luxurious Thai Journey',
    'enquiry.subtitle': 'Let us craft an exceptional experience tailored to your needs, blending luxury, wellness, and world-class medical care in Thailand.',
    'enquiry.formTitle': 'Inquire Now – Personalized Assistance',
    'enquiry.formSubtitle': 'Tell us about your trip, and our team will craft a tailored experience just for you.',
    'enquiry.guestInfo': 'Guest Information',
    'enquiry.numTravelers': 'Number of travelers',
    'enquiry.soloTraveler': 'Solo Traveler',
    'enquiry.couple': 'Couple',
    'enquiry.familyWithChildren': 'Family with children',
    'enquiry.groupOfFriends': 'Group of Friends',
    'enquiry.stayLength': 'Length of stay',
    'enquiry.days1to3': '1-3 days',
    'enquiry.days4to7': '4-7 days',
    'enquiry.moreThanWeek': 'More than a week',
    'enquiry.notSureYet': 'Not sure yet',
    'enquiry.visitPurpose': 'Purpose of visit (select all that apply)',
    'enquiry.medicalTreatment': 'Medical Treatment',
    'enquiry.wellness': 'Wellness & Retreats',
    'enquiry.luxuryLeisure': 'Luxury Leisure & Exploration',
    'enquiry.businessVIP': 'Business & VIP Services',
    'enquiry.arrival': 'Expected Arrival & Urgency',
    'enquiry.plannedArrival': 'Planned arrival date',
    'enquiry.urgency': 'Urgency of visit',
    'enquiry.medicalEmergency': 'Medical emergency – Immediate assistance needed',
    'enquiry.scheduledMedical': 'Scheduled medical treatment – Pre-arranged visit',
    'enquiry.leisureFlexible': 'Leisure or wellness – Flexible dates',
    'enquiry.servicesNeeded': 'Concierge Services Needed',
    'enquiry.travelArrangements': 'Travel Arrangements',
    'enquiry.flightBooking': 'Flight Ticket Booking',
    'enquiry.privateJet': 'Private Jet Charter',
    'enquiry.vipAirport': 'VIP Airport Meet & Assist',
    'enquiry.accommodation': 'Accommodation Preferences',
    'enquiry.fiveStarHotel': '5-Star Hotel',
    'enquiry.privateVilla': 'Private Villa',
    'enquiry.familyResort': 'Family-Friendly Resort',
    'enquiry.luxuryServices': 'Luxury & Leisure Services',
    'enquiry.privateTours': 'Private Tours & Cultural Experiences',
    'enquiry.shopping': 'Personal Shopping Assistance',
    'enquiry.fineDining': 'Fine Dining Reservations & Halal Dining Options',
    'enquiry.transportation': 'High-End Transportation (Private Chauffeur, Limousine, Luxury Car Rental)',
    'enquiry.yachtRental': 'Yacht Rental',
    'enquiry.medicalWellness': 'Medical & Wellness',
    'enquiry.medicalConsultation': 'Medical Consultation & Treatment Coordination',
    'enquiry.recovery': 'Post-Treatment Recovery Arrangements',
    'enquiry.spaRetreats': 'Wellness & Spa Retreats',
    'enquiry.followUp': 'Long-Term Health & Follow-Up Planning',
    'enquiry.topNeeds': 'Your Top 3 Absolute Needs',
    'enquiry.topNeedsSubtitle': 'Please list your must-have requirements for your trip',
    'enquiry.additionalRequests': 'Additional Requests or Special Considerations',
    'enquiry.additionalRequestsSubtitle': 'Anything else we should know to personalize your experience?',
    'enquiry.submitInquiry': 'Submit Inquiry',
    'enquiry.success': 'Inquiry Submitted Successfully!',
    'enquiry.successMessage': 'Thank you for your inquiry. Our team will contact you shortly to discuss your customized Thai experience.',
    'enquiry.error': 'Something went wrong',
    'enquiry.errorMessage': 'Please try again or contact us directly.',
    'enquiry.name': 'Full Name',
    'enquiry.email': 'Email Address',
    'enquiry.phone': 'Phone Number',

    // Footer
    'footer.about': 'About Hayat Concierge',
    'footer.aboutDescription': 'Your trusted premium concierge service connecting Middle Eastern clients with Thailand\'s finest luxury, wellness, and medical experiences.',
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contact Information',
    'footer.address': 'Address',
    'footer.phone': 'Phone',
    'footer.email': 'Email',
    'footer.followUs': 'Follow Us',
    'footer.copyright': 'Copyright © {year} Hayat Concierge. All rights reserved.',
    'footer.legal': 'Legal',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.termsConditions': 'Terms & Conditions',
    'footer.cookiePolicy': 'Cookie Policy',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.aboutUs': 'من نحن',
    'nav.aboutHayat': 'عن حياة كونسيرج',
    'nav.aboutFounder': 'عن المؤسس',
    'nav.services': 'الخدمات',
    'nav.itineraries': 'رحلات',
    'nav.partners': 'شركاء',
    'nav.enquiry': 'استفسار',
    'nav.contactUs': 'اتصل بنا',
    
    // Common
    'common.submit': 'إرسال',
    'common.required': 'مطلوب',
    'common.optional': 'اختياري',
    'common.select': 'اختر',
    'common.other': 'أخرى',
    
    // Homepage sections
    'home.hero.title': 'الرابط الموثوق بين الشرق الأوسط وأفضل تجارب تايلاند',
    'home.hero.subtitle': 'ارتقِ برحلتك في تايلاند - تجارب طبية وعافية وسفر مخصصة، مصممة خصيصًا لك',
    'home.hero.button': 'احجز تجربتك',
    'home.hero.explore': 'استكشف الخدمات',
    'home.about.title': 'الارتقاء بالسفر الفاخر في تايلاند',
    'home.about.subtitle': 'لماذا تختارنا',
    'home.about.description': 'تأسست رحلات تايلاند المخصصة بمهمة فريدة: تزويد المسافرين المتميزين بوصول سهل إلى أفضل تجارب تايلاند. تضمن اتصالاتنا المحلية العميقة واهتمامنا بالتفاصيل رحلة سلسة.',
    'home.about.feature1': 'خدمة شخصية مع كونسيرج مخصص',
    'home.about.feature2': 'وصول VIP إلى المرافق المميزة',
    'home.about.feature3': 'إدارة الرحلة من البداية إلى النهاية',
    'home.about.feature4': 'دعم على مدار الساعة طوال إقامتك',
    'home.about.cta': 'تعرف أكثر على نهجنا',
    'home.services.title': 'خدماتنا المميزة',
    'home.services.subtitle': 'تجارب مخصصة',
    'home.services.description': 'نقدم مجموعة شاملة من الخدمات لضمان أن تكون رحلتك في تايلاند سلسة وفاخرة ومتوافقة تمامًا مع احتياجاتك.',
    'home.testimonials.title': 'تجارب العملاء',
    'home.testimonials.subtitle': 'ماذا يقول عملاؤنا',
    'home.partners.title': 'شركاؤنا الموثوقون',
    'home.partners.subtitle': 'شبكة التميز',
    'home.partners.description': 'نتعاون مع أفضل المؤسسات في تايلاند لتزويدك بوصول لا مثيل له ومعاملة تفضيلية.',
    
    // About Founder
    'founder.culturalPerspective.title': 'منظور ثقافي فريد',
    'founder.culturalPerspective.content': 'ولدت في تراث فرنسي-جزائري، وكنت دائمًا منغمسة في مزيج غني من الثقافات، مما أعطاني تقديرًا عميقًا للتنوع. فهمي العميق للثقافات الشرق أوسطية والتايلاندية يتيح لي جسر الفجوة بين هذين العالمين، مما يضمن تجارب فاخرة سلسة ومتناغمة ثقافيًا لعملائي.',
    'founder.journey.title': 'رحلة عبر الفخامة والضيافة',
    'founder.journey.content': 'مع خلفية قوية في ضيافة الفخامة، عملت مع علامات تجارية راقية مثل IXINA وفندق باريسي من فئة 5 نجوم، وأتقنت الخدمة من الدرجة الأولى ورضا العملاء. أكثر من عقد في التدريس صقل مهاراتي في التنظيم والقيادة وحل المشكلات - وهي أساسية لتقديم تجارب كونسيرج استثنائية.',
    'founder.passion.title': 'شغف بالسفر والعافية',
    'founder.passion.content': 'قادني حبي للسفر واستكشاف الثقافات إلى آسيا، حيث وقعت في حب ضيافة تايلاند وتقاليد العافية ومناظرها الخلابة. بإلهام من خدمات الصحة الشاملة ذات المستوى العالمي، دمجت شغفي بالسفر الفاخر والعافية والتجارب الشخصية.',
    'founder.inspiration.title': 'الإلهام وراء حياة كونسيرج',
    'founder.inspiration.content': 'كشفت تجربة شخصية مع الرعاية الطبية الاستثنائية في تايلاند عن مكانتها كوجهة رئيسية للعافية والسياحة الطبية. بإلهام من ضيافتها واحترافها، أسست حياة كونسيرج لربط العملاء من الشرق الأوسط بسلاسة مع السفر الفاخر والعافية والرعاية الصحية العالمية في تايلاند.',
    'founder.bridging.title': 'الجمع بين الفخامة والتميز الطبي',
    'founder.bridging.content': 'مع خلفيتي الفريدة، ومهاراتي متعددة اللغات، والتدريب المهني من معهد السفر، أنا مؤهلة بشكل مثالي لتنظيم تجارب سلسة ومخصصة مصممة لتلبية الاحتياجات المحددة للمسافرين من الشرق الأوسط.',
    
    // Services
    'services.title': 'خدماتنا المميزة',
    'services.subtitle': 'مصممة لتلبية احتياجاتك',
    'services.medical.title': 'السياحة الطبية',
    'services.medical.subtitle': 'رعاية صحية عالمية المستوى',
    'services.medical.description': 'الوصول إلى المستشفيات والأخصائيين المعتمدين دوليًا في تايلاند مع تنسيق طبي مخصص.',
    'services.wellness.title': 'منتجعات العافية',
    'services.wellness.subtitle': 'تجديد الشباب والتوازن',
    'services.wellness.description': 'جرّب تقاليد العافية الشهيرة في تايلاند مع برامج منتجعات مخصصة.',
    'services.luxury.title': 'تجارب فاخرة',
    'services.luxury.subtitle': 'وصول حصري',
    'services.luxury.description': 'اكتشف الجواهر المخفية والتجارب الحصرية في تايلاند مع ترتيبات VIP الخاصة بنا.',
    'services.concierge.title': 'خدمة كونسيرج كاملة',
    'services.concierge.subtitle': 'خدمة من البداية إلى النهاية',
    'services.concierge.description': 'من وصول المطار إلى المغادرة، استمتع بمساعدة سلسة طوال رحلتك.',
    
    // Enquiry Form
    'enquiry.title': 'ابدأ رحلتك الفاخرة في تايلاند',
    'enquiry.subtitle': 'دعنا نصمم تجربة استثنائية مخصصة لاحتياجاتك، تجمع بين الفخامة والعافية والرعاية الطبية العالمية في تايلاند.',
    'enquiry.formTitle': 'استفسر الآن - مساعدة شخصية',
    'enquiry.formSubtitle': 'أخبرنا عن رحلتك، وسيقوم فريقنا بتصميم تجربة مخصصة لك.',
    'enquiry.guestInfo': 'معلومات الضيف',
    'enquiry.numTravelers': 'عدد المسافرين',
    'enquiry.soloTraveler': 'مسافر منفرد',
    'enquiry.couple': 'زوجان',
    'enquiry.familyWithChildren': 'عائلة مع أطفال',
    'enquiry.groupOfFriends': 'مجموعة أصدقاء',
    'enquiry.stayLength': 'مدة الإقامة',
    'enquiry.days1to3': '1-3 أيام',
    'enquiry.days4to7': '4-7 أيام',
    'enquiry.moreThanWeek': 'أكثر من أسبوع',
    'enquiry.notSureYet': 'غير متأكد بعد',
    'enquiry.visitPurpose': 'الغرض من الزيارة (حدد كل ما ينطبق)',
    'enquiry.medicalTreatment': 'علاج طبي',
    'enquiry.wellness': 'العافية والاسترخاء',
    'enquiry.luxuryLeisure': 'الاستكشاف الفاخر',
    'enquiry.businessVIP': 'خدمات الأعمال وكبار الشخصيات',
    'enquiry.arrival': 'موعد الوصول المتوقع والأولوية',
    'enquiry.plannedArrival': 'تاريخ الوصول المخطط',
    'enquiry.urgency': 'أولوية الزيارة',
    'enquiry.medicalEmergency': 'حالة طبية طارئة - تحتاج مساعدة فورية',
    'enquiry.scheduledMedical': 'علاج طبي مجدول - زيارة مرتبة مسبقًا',
    'enquiry.leisureFlexible': 'استجمام أو عافية - تواريخ مرنة',
    'enquiry.servicesNeeded': 'خدمات الكونسيرج المطلوبة',
    'enquiry.travelArrangements': 'ترتيبات السفر',
    'enquiry.flightBooking': 'حجز تذاكر الطيران',
    'enquiry.privateJet': 'استئجار طائرة خاصة',
    'enquiry.vipAirport': 'خدمة استقبال كبار الشخصيات بالمطار',
    'enquiry.accommodation': 'تفضيلات الإقامة',
    'enquiry.fiveStarHotel': 'فندق 5 نجوم',
    'enquiry.privateVilla': 'فيلا خاصة',
    'enquiry.familyResort': 'منتجع عائلي',
    'enquiry.luxuryServices': 'خدمات الفخامة والترفيه',
    'enquiry.privateTours': 'جولات خاصة وتجارب ثقافية',
    'enquiry.shopping': 'مساعدة التسوق الشخصي',
    'enquiry.fineDining': 'حجوزات المطاعم الفاخرة وخيارات الطعام الحلال',
    'enquiry.transportation': 'وسائل نقل فاخرة (سائق خاص، ليموزين، تأجير سيارات فاخرة)',
    'enquiry.yachtRental': 'تأجير يخت',
    'enquiry.medicalWellness': 'الطب والعافية',
    'enquiry.medicalConsultation': 'استشارة طبية وتنسيق العلاج',
    'enquiry.recovery': 'ترتيبات التعافي بعد العلاج',
    'enquiry.spaRetreats': 'منتجعات العافية والسبا',
    'enquiry.followUp': 'تخطيط الصحة طويل الأجل والمتابعة',
    'enquiry.topNeeds': 'أهم 3 احتياجات أساسية لديك',
    'enquiry.topNeedsSubtitle': 'يرجى ذكر متطلباتك الأساسية للرحلة',
    'enquiry.additionalRequests': 'طلبات إضافية أو اعتبارات خاصة',
    'enquiry.additionalRequestsSubtitle': 'هل هناك أي شيء آخر يجب أن نعرفه لتخصيص تجربتك؟',
    'enquiry.submitInquiry': 'إرسال الاستفسار',
    'enquiry.success': 'تم إرسال الاستفسار بنجاح!',
    'enquiry.successMessage': 'شكرا على استفسارك. سيتواصل فريقنا معك قريبًا لمناقشة تجربتك المخصصة في تايلاند.',
    'enquiry.error': 'حدث خطأ ما',
    'enquiry.errorMessage': 'يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة.',
    'enquiry.name': 'الاسم الكامل',
    'enquiry.email': 'البريد الإلكتروني',
    'enquiry.phone': 'رقم الهاتف',

    // Footer
    'footer.about': 'عن حياة كونسيرج',
    'footer.aboutDescription': 'خدمة الكونسيرج المتميزة الموثوقة التي تربط العملاء من الشرق الأوسط بأفضل تجارب الفخامة والعافية والطب في تايلاند.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.contact': 'معلومات الاتصال',
    'footer.address': 'العنوان',
    'footer.phone': 'الهاتف',
    'footer.email': 'البريد الإلكتروني',
    'footer.followUs': 'تابعنا',
    'footer.copyright': 'حقوق النشر © {year} حياة كونسيرج. جميع الحقوق محفوظة.',
    'footer.legal': 'قانوني',
    'footer.privacyPolicy': 'سياسة الخصوصية',
    'footer.termsConditions': 'الشروط والأحكام',
    'footer.cookiePolicy': 'سياسة ملفات تعريف الارتباط',
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  toggleLanguage: () => {},
  t: (key: string) => key,
});

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Try to get language from localStorage
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage as Language) || 'en';
  });

  useEffect(() => {
    // Save language to localStorage
    localStorage.setItem('language', language);
    
    // Update document direction
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    
    // Add/remove a class for RTL styling
    if (language === 'ar') {
      document.documentElement.classList.add('rtl');
    } else {
      document.documentElement.classList.remove('rtl');
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
