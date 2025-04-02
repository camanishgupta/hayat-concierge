
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
