
import { CMSContent } from "@/types/cms";

export const defaultContent: CMSContent = {
  sections: [
    {
      id: "home-hero",
      name: "Home Hero Section",
      description: "Main banner on the home page",
      page: "home",
      items: [
        {
          id: "home-hero-title",
          section: "home-hero",
          title: "Main Heading",
          content: "Bespoke Thai Journeys",
          arContent: "رحلات تايلاند المخصصة",
          lastUpdated: new Date().toISOString(),
          page: "home"
        },
        {
          id: "home-hero-subtitle",
          section: "home-hero",
          title: "Subtitle",
          content: "Crafting tailored luxury experiences in Thailand with seamless medical, wellness, and travel concierge services.",
          arContent: "نقدم تجارب فاخرة مصممة في تايلاند مع خدمات كونسيرج طبية وصحية وسفر سلسة.",
          lastUpdated: new Date().toISOString(),
          page: "home"
        },
        {
          id: "home-hero-button",
          section: "home-hero",
          title: "Button Text",
          content: "Book Your Experience",
          arContent: "احجز تجربتك",
          lastUpdated: new Date().toISOString(),
          page: "home"
        }
      ]
    },
    {
      id: "about-section",
      name: "About Section",
      description: "Information about Hayat Concierge",
      page: "about",
      items: [
        {
          id: "about-title",
          section: "about-section",
          title: "About Title",
          content: "About Hayat Concierge",
          arContent: "عن حياة كونسيرج",
          lastUpdated: new Date().toISOString(),
          page: "about"
        },
        {
          id: "about-description",
          section: "about-section",
          title: "About Description",
          content: "At Hayat Concierge, we redefine luxury travel, wellness, and medical tourism in Thailand—tailored exclusively for Middle Eastern clients who seek the extraordinary. From private hospital referrals to bespoke retreats in Thailand's most exclusive destinations, we ensure an experience that is seamless, culturally attuned, and uncompromising in excellence.",
          arContent: "في حياة كونسيرج، نعيد تعريف السفر الفاخر والعافية والسياحة الطبية في تايلاند - مصممة خصيصًا للعملاء من الشرق الأوسط الذين يسعون إلى ما هو استثنائي. من إحالات المستشفيات الخاصة إلى الملاذات المخصصة في أكثر وجهات تايلاند حصرية، نحن نضمن تجربة سلسة ومتناغمة ثقافيًا ولا تقبل المساومة في التميز.",
          lastUpdated: new Date().toISOString(),
          page: "about"
        }
      ]
    },
    {
      id: "services-main",
      name: "Services Main Section",
      description: "Main services information",
      page: "services",
      items: [
        {
          id: "services-intro",
          section: "services-main",
          title: "Services Introduction",
          content: "Experience Thailand like never before with our premium concierge services tailored specifically for Middle Eastern clients. Our team of experts ensures every detail is handled with cultural sensitivity and exceptional care.",
          arContent: "استمتع بتجربة تايلاند كما لم تشهدها من قبل مع خدمات الكونسيرج الفاخرة المصممة خصيصًا للعملاء من الشرق الأوسط. يضمن فريق الخبراء لدينا التعامل مع كل التفاصيل بحساسية ثقافية ورعاية استثنائية.",
          lastUpdated: new Date().toISOString(),
          page: "services"
        },
        {
          id: "services-medical-title",
          section: "services-main",
          title: "Medical Services Title",
          content: "Premium Medical Concierge",
          arContent: "خدمات طبية فاخرة",
          lastUpdated: new Date().toISOString(),
          page: "services"
        },
        {
          id: "services-medical-description",
          section: "services-main",
          title: "Medical Services Description",
          content: "Access Thailand's world-class hospitals and specialists with our comprehensive medical concierge service. We handle everything from appointments to translation, ensuring a stress-free healthcare experience.",
          arContent: "الوصول إلى مستشفيات وأخصائيين من الطراز العالمي في تايلاند مع خدمة الكونسيرج الطبية الشاملة. نتعامل مع كل شيء من المواعيد إلى الترجمة، مما يضمن تجربة رعاية صحية خالية من التوتر.",
          lastUpdated: new Date().toISOString(),
          page: "services"
        },
        {
          id: "services-wellness-title",
          section: "services-main",
          title: "Wellness Services Title",
          content: "Luxury Wellness Retreats",
          arContent: "ملاذات العافية الفاخرة",
          lastUpdated: new Date().toISOString(),
          page: "services"
        },
        {
          id: "services-wellness-description",
          section: "services-main",
          title: "Wellness Services Description",
          content: "Discover Thailand's finest wellness resorts and treatments, carefully selected to meet the highest standards of privacy, luxury, and cultural sensitivity for our Middle Eastern guests.",
          arContent: "اكتشف أرقى منتجعات وعلاجات العافية في تايلاند، والتي تم اختيارها بعناية لتلبية أعلى معايير الخصوصية والرفاهية والحساسية الثقافية لضيوفنا من الشرق الأوسط.",
          lastUpdated: new Date().toISOString(),
          page: "services"
        },
        {
          id: "services-travel-title",
          section: "services-main",
          title: "Travel Services Title",
          content: "Bespoke Travel Experiences",
          arContent: "تجارب سفر مخصصة",
          lastUpdated: new Date().toISOString(),
          page: "services"
        },
        {
          id: "services-travel-description",
          section: "services-main",
          title: "Travel Services Description",
          content: "Experience Thailand through exclusive, customized itineraries that blend luxury, authenticity, and respect for cultural preferences, including halal dining options and Arabic-speaking guides.",
          arContent: "استمتع بتجربة تايلاند من خلال مسارات سفر حصرية ومخصصة تمزج بين الفخامة والأصالة واحترام التفضيلات الثقافية، بما في ذلك خيارات الطعام الحلال والمرشدين الناطقين بالعربية.",
          lastUpdated: new Date().toISOString(),
          page: "services"
        }
      ]
    },
    {
      id: "healthcare-solutions",
      name: "Healthcare Solutions",
      description: "Detailed healthcare services information",
      page: "healthcare-solutions",
      items: [
        {
          id: "healthcare-intro",
          section: "healthcare-solutions",
          title: "Healthcare Introduction",
          content: "Thailand has emerged as a premier destination for medical tourism, offering world-class facilities at competitive prices. At Hayat Concierge, we provide end-to-end medical concierge services tailored specifically for Middle Eastern patients seeking excellence in healthcare.",
          arContent: "برزت تايلاند كوجهة رئيسية للسياحة الطبية، حيث توفر مرافق عالمية المستوى بأسعار تنافسية. في حياة كونسيرج، نقدم خدمات كونسيرج طبية شاملة مصممة خصيصًا للمرضى من الشرق الأوسط الذين يبحثون عن التميز في الرعاية الصحية.",
          lastUpdated: new Date().toISOString(),
          page: "healthcare-solutions"
        },
        {
          id: "healthcare-services",
          section: "healthcare-solutions",
          title: "Our Healthcare Services",
          content: "• Pre-arrival medical consultations\n• Hospital selection and appointment scheduling\n• Arabic translation and interpretation services\n• Coordination with medical specialists\n• Accommodation arrangements near medical facilities\n• Transportation to and from medical appointments\n• Medical visa assistance\n• Post-treatment care coordination",
          arContent: "• استشارات طبية قبل الوصول\n• اختيار المستشفى وجدولة المواعيد\n• خدمات الترجمة والتفسير باللغة العربية\n• التنسيق مع الأخصائيين الطبيين\n• ترتيبات الإقامة بالقرب من المرافق الطبية\n• النقل من وإلى المواعيد الطبية\n• المساعدة في تأشيرة طبية\n• تنسيق الرعاية بعد العلاج",
          lastUpdated: new Date().toISOString(),
          page: "healthcare-solutions"
        },
        {
          id: "healthcare-specialties",
          section: "healthcare-solutions",
          title: "Medical Specialties",
          content: "• Cardiac surgery and cardiology\n• Orthopedic procedures\n• Cosmetic and reconstructive surgery\n• Dentistry and dental procedures\n• Fertility treatments\n• Weight management programs\n• Executive health check-ups\n• Alternative and complementary medicine",
          arContent: "• جراحة القلب وأمراض القلب\n• إجراءات العظام\n• الجراحة التجميلية والترميمية\n• طب الأسنان وإجراءات الأسنان\n• علاجات الخصوبة\n• برامج إدارة الوزن\n• الفحوصات الصحية التنفيذية\n• الطب البديل والتكميلي",
          lastUpdated: new Date().toISOString(),
          page: "healthcare-solutions"
        }
      ]
    },
    {
      id: "luxury-experience",
      name: "Luxury Experience",
      description: "Luxury accommodation and experience details",
      page: "luxury-experience",
      items: [
        {
          id: "luxury-intro",
          section: "luxury-experience",
          title: "Luxury Introduction",
          content: "Experience Thailand's legendary hospitality elevated to extraordinary heights with our luxury concierge services. We curate exceptional stays and experiences that combine Thai elegance with the specific preferences and requirements of our Middle Eastern guests.",
          arContent: "استمتع بضيافة تايلاند الأسطورية المرتفعة إلى مستويات استثنائية مع خدمات الكونسيرج الفاخرة لدينا. نحن ننسق إقامات وتجارب استثنائية تجمع بين الأناقة التايلاندية والتفضيلات والمتطلبات المحددة لضيوفنا من الشرق الأوسط.",
          lastUpdated: new Date().toISOString(),
          page: "luxury-experience"
        },
        {
          id: "luxury-accommodations",
          section: "luxury-experience",
          title: "Luxury Accommodations",
          content: "• Private villas with dedicated staff\n• Presidential suites in 5-star hotels\n• Exclusive serviced apartments\n• Beachfront resorts with halal dining options\n• Multi-room accommodations for families and entourages\n• Exclusive penthouses with panoramic city views",
          arContent: "• فيلات خاصة مع طاقم مخصص\n• أجنحة رئاسية في فنادق 5 نجوم\n• شقق خدمية حصرية\n• منتجعات على الواجهة البحرية مع خيارات طعام حلال\n• أماكن إقامة متعددة الغرف للعائلات والحاشية\n• بنتهاوس حصري مع إطلالات بانورامية على المدينة",
          lastUpdated: new Date().toISOString(),
          page: "luxury-experience"
        },
        {
          id: "luxury-experiences",
          section: "luxury-experience",
          title: "Premium Experiences",
          content: "• Private yacht charters in the Andaman Sea\n• Helicopter tours of Bangkok and coastal regions\n• VIP shopping services with personal stylists\n• Private Thai cooking classes with celebrity chefs\n• Exclusive cultural performances\n• After-hours private museum and temple tours",
          arContent: "• استئجار يخوت خاصة في بحر أندامان\n• جولات بالهليكوبتر في بانكوك والمناطق الساحلية\n• خدمات تسوق VIP مع مصممي أزياء شخصيين\n• دروس خاصة للطبخ التايلاندي مع طهاة مشهورين\n• عروض ثقافية حصرية\n• جولات خاصة في المتاحف والمعابد بعد ساعات العمل",
          lastUpdated: new Date().toISOString(),
          page: "luxury-experience"
        }
      ]
    },
    {
      id: "wellness-journey",
      name: "Wellness Journey",
      description: "Wellness and spa services information",
      page: "wellness-journey",
      items: [
        {
          id: "wellness-intro",
          section: "wellness-journey",
          title: "Wellness Introduction",
          content: "Thailand is renowned worldwide as a destination for wellness and rejuvenation. Our wellness concierge services open doors to the finest spa resorts, retreats, and healing centers, with programs adapted to respect the cultural and religious preferences of our Middle Eastern guests.",
          arContent: "تشتهر تايلاند في جميع أنحاء العالم كوجهة للعافية والتجديد. تفتح خدمات كونسيرج العافية لدينا الأبواب أمام أفضل منتجعات السبا والملاذات ومراكز الشفاء، مع برامج مكيفة لاحترام التفضيلات الثقافية والدينية لضيوفنا من الشرق الأوسط.",
          lastUpdated: new Date().toISOString(),
          page: "wellness-journey"
        },
        {
          id: "wellness-retreats",
          section: "wellness-journey",
          title: "Premium Wellness Retreats",
          content: "• Exclusive access to Thailand's top-rated wellness resorts\n• Customized detox and rejuvenation programs\n• Private wellness villas with in-villa treatments\n• Traditional Thai healing practices\n• Halal-certified nutritional programs\n• Gender-segregated facilities and treatments",
          arContent: "• وصول حصري إلى منتجعات العافية الأعلى تصنيفًا في تايلاند\n• برامج مخصصة للتخلص من السموم والتجديد\n• فيلات عافية خاصة مع علاجات داخل الفيلا\n• ممارسات الشفاء التايلاندية التقليدية\n• برامج غذائية معتمدة حلال\n• مرافق وعلاجات مفصولة حسب الجنس",
          lastUpdated: new Date().toISOString(),
          page: "wellness-journey"
        },
        {
          id: "wellness-therapies",
          section: "wellness-journey",
          title: "Holistic Therapies",
          content: "• Traditional Thai massage and therapies\n• Ayurvedic treatments\n• Mindfulness and meditation practices\n• Personalized fitness programs\n• Anti-aging and beauty treatments\n• Traditional herbal steam treatments\n• Natural hot spring therapy",
          arContent: "• التدليك والعلاجات التايلاندية التقليدية\n• علاجات الأيورفيدا\n• ممارسات اليقظة والتأمل\n• برامج لياقة بدنية مخصصة\n• علاجات مكافحة الشيخوخة والجمال\n• علاجات البخار العشبية التقليدية\n• العلاج بالينابيع الساخنة الطبيعية",
          lastUpdated: new Date().toISOString(),
          page: "wellness-journey"
        }
      ]
    },
    {
      id: "founder-info",
      name: "Founder Information",
      description: "Information about the founder",
      page: "founder",
      items: [
        {
          id: "founder-intro",
          section: "founder-info",
          title: "Founder Introduction",
          content: "Born into a French-Algerian heritage, I have always been immersed in a rich blend of cultures, which has given me a deep appreciation for diversity. My profound understanding of Middle Eastern and Thai cultures allows me to bridge the gap between these two worlds, ensuring seamless and culturally attuned luxury experiences for my clients.",
          arContent: "ولدت في تراث فرنسي-جزائري، وكنت دائمًا منغمسة في مزيج غني من الثقافات، مما أعطاني تقديرًا عميقًا للتنوع. فهمي العميق للثقافات الشرق أوسطية والتايلاندية يتيح لي جسر الفجوة بين هذين العالمين، مما يضمن تجارب فاخرة سلسة ومتناغمة ثقافيًا لعملائي.",
          lastUpdated: new Date().toISOString(),
          page: "founder"
        },
        {
          id: "founder-key-points",
          section: "founder-info",
          title: "Key Points",
          content: "• 15+ years in luxury hospitality and medical tourism\n• Multilingual: Arabic, English, French, Thai\n• Specialized in Middle Eastern client relations\n• Certified medical tourism consultant\n• Network of Thailand's elite medical and wellness providers",
          arContent: "• أكثر من 15 عامًا في الضيافة الفاخرة والسياحة الطبية\n• متعدد اللغات: العربية، الإنجليزية، الفرنسية، التايلاندية\n• متخصصة في علاقات العملاء من الشرق الأوسط\n• مستشارة معتمدة في السياحة الطبية\n• شبكة من مقدمي الخدمات الطبية والعافية النخبة في تايلاند",
          lastUpdated: new Date().toISOString(),
          page: "founder"
        },
        {
          id: "founder-video",
          section: "founder-info",
          title: "Video Embed URL",
          content: "https://www.youtube.com/embed/your-video-id-here",
          arContent: "https://www.youtube.com/embed/your-video-id-here",
          lastUpdated: new Date().toISOString(),
          page: "founder"
        }
      ]
    },
    {
      id: "testimonials",
      name: "Client Testimonials",
      description: "Testimonials from satisfied clients",
      page: "all",
      items: [
        {
          id: "testimonial-1",
          section: "testimonials",
          title: "Ahmed K. - UAE",
          content: "My medical procedure in Bangkok was handled with the utmost professionalism. Hayat Concierge took care of everything, from hospital appointments to luxury accommodation. Their cultural understanding made me feel completely at ease.",
          arContent: "تم التعامل مع إجراءاتي الطبية في بانكوك بأقصى قدر من الاحترافية. تولت حياة كونسيرج كل شيء، من مواعيد المستشفى إلى الإقامة الفاخرة. جعلني فهمهم الثقافي أشعر بالراحة التامة.",
          lastUpdated: new Date().toISOString(),
          page: "all"
        },
        {
          id: "testimonial-2",
          section: "testimonials",
          title: "Fatima M. - Saudi Arabia",
          content: "The wellness retreat arranged by Hayat Concierge exceeded all expectations. Every detail was tailored to my preferences, with perfect respect for my cultural and personal needs. A transformative experience I will never forget.",
          arContent: "تجاوز منتجع العافية الذي نظمته حياة كونسيرج كل التوقعات. تم تفصيل كل تفصيل وفقًا لتفضيلاتي، مع احترام مثالي لاحتياجاتي الثقافية والشخصية. تجربة تحويلية لن أنساها أبدًا.",
          lastUpdated: new Date().toISOString(),
          page: "all"
        },
        {
          id: "testimonial-3",
          section: "testimonials",
          title: "Khalid & Aisha - Qatar",
          content: "Our family trip to Thailand was flawless thanks to Hayat Concierge. From private tours to excellent halal dining options, everything was arranged with our comfort in mind. We particularly appreciated the Arabic-speaking guides.",
          arContent: "كانت رحلتنا العائلية إلى تايلاند مثالية بفضل حياة كونسيرج. من الجولات الخاصة إلى خيارات الطعام الحلال الممتازة، تم ترتيب كل شيء مع وضع راحتنا في الاعتبار. قدرنا بشكل خاص المرشدين الناطقين باللغة العربية.",
          lastUpdated: new Date().toISOString(),
          page: "all"
        }
      ]
    },
    {
      id: "partners",
      name: "Partner Information",
      description: "Details about our partner facilities",
      page: "partners",
      items: [
        {
          id: "partners-intro",
          section: "partners",
          title: "Partners Introduction",
          content: "We collaborate with Thailand's most prestigious establishments to ensure unparalleled quality and service.",
          arContent: "نتعاون مع أكثر المؤسسات المرموقة في تايلاند لضمان الجودة والخدمة التي لا مثيل لها.",
          lastUpdated: new Date().toISOString(),
          page: "partners"
        },
        {
          id: "medical-partners",
          section: "partners",
          title: "Medical Partners",
          content: "Bangkok Hospital, Bumrungrad International Hospital, Samitivej Hospital, Bangkok Dusit Medical Services",
          arContent: "مستشفى بانكوك، مستشفى بومرونجراد الدولي، مستشفى ساميتيفيج، خدمات بانكوك دوسيت الطبية",
          lastUpdated: new Date().toISOString(),
          page: "partners"
        },
        {
          id: "wellness-partners",
          section: "partners",
          title: "Wellness Partners",
          content: "Chiva-Som, Kamalaya Koh Samui, RAKxa Wellness, Amanpuri Spa",
          arContent: "شيفا-سوم، كامالايا كوه سامو، راكسا ويلنس، أمانبوري سبا",
          lastUpdated: new Date().toISOString(),
          page: "partners"
        },
        {
          id: "accommodation-partners",
          section: "partners",
          title: "Accommodation Partners",
          content: "The Peninsula Bangkok, Mandarin Oriental, Four Seasons Resort Chiang Mai, Banyan Tree Phuket",
          arContent: "ذا بنينسولا بانكوك، ماندارين أورينتال، منتجع فور سيزونز تشيانغ ماي، بانيان تري بوكيت",
          lastUpdated: new Date().toISOString(),
          page: "partners"
        }
      ]
    },
    {
      id: "contact-info",
      name: "Contact Information",
      description: "Company contact details",
      page: "all",
      items: [
        {
          id: "contact-address",
          section: "contact-info",
          title: "Office Address",
          content: "Dubai, UAE",
          arContent: "دبي، الإمارات العربية المتحدة",
          lastUpdated: new Date().toISOString(),
          page: "all"
        },
        {
          id: "contact-phone",
          section: "contact-info",
          title: "Phone Number",
          content: "+66 81 606 5796",
          arContent: "+٦٦ ٨١ ٦٠٦ ٥٧٩٦",
          lastUpdated: new Date().toISOString(),
          page: "all"
        },
        {
          id: "contact-whatsapp",
          section: "contact-info",
          title: "WhatsApp",
          content: "+33 6 63 45 62 56",
          arContent: "+٣٣ ٦ ٦٣ ٤٥ ٦٢ ٥٦",
          lastUpdated: new Date().toISOString(),
          page: "all"
        },
        {
          id: "contact-email",
          section: "contact-info",
          title: "Email Address",
          content: "info@hayatconcierge.com",
          arContent: "info@hayatconcierge.com",
          lastUpdated: new Date().toISOString(),
          page: "all"
        },
        {
          id: "contact-website",
          section: "contact-info",
          title: "Website",
          content: "www.hayatconcierge.com",
          arContent: "www.hayatconcierge.com",
          lastUpdated: new Date().toISOString(),
          page: "all"
        }
      ]
    }
  ],
  images: [
    {
      id: "middle-eastern-family",
      name: "Middle Eastern Family",
      description: "Image for the 'Dedicated to Middle Eastern Travelers' section",
      url: "/lovable-uploads/d2409855-1669-4389-9789-011feb333ca6.png",
      page: "home"
    },
    {
      id: "thailand-bridge",
      name: "Thailand Bridge",
      description: "Image for the 'Your Trusted Bridge' section",
      url: "/lovable-uploads/ec9be84a-4419-47a9-8dd4-629792800ca7.png",
      page: "home"
    },
    {
      id: "bangkok-luxury-hotel",
      name: "Bangkok Luxury Hotel",
      description: "Image for the 'Why Bangkok' section",
      url: "/lovable-uploads/c332b151-80b5-454d-87d7-34c92eced3eb.png",
      page: "home"
    },
    {
      id: "bangkok-skyline",
      name: "Bangkok Skyline",
      description: "Secondary image for the 'Why Bangkok' section",
      url: "/lovable-uploads/d8498f7c-1210-45b9-afd8-d8ff816223a8.png",
      page: "home"
    },
    {
      id: "luxury-spa",
      name: "Luxury Spa",
      description: "Image for the Wellness section",
      url: "/lovable-uploads/35fd8c2e-3b5d-4e47-9216-e5e210033d40.png",
      page: "wellness-journey"
    },
    {
      id: "medical-facility",
      name: "Medical Facility",
      description: "Image for the Healthcare section",
      url: "https://via.placeholder.com/800x600?text=Medical+Facility",
      page: "healthcare-solutions"
    },
    {
      id: "luxury-villa",
      name: "Luxury Villa",
      description: "Image for the Luxury Experience section",
      url: "https://via.placeholder.com/800x600?text=Luxury+Villa",
      page: "luxury-experience"
    },
    {
      id: "services-overview",
      name: "Services Overview",
      description: "Image for the main Services page",
      url: "https://via.placeholder.com/800x600?text=Our+Services",
      page: "services"
    }
  ],
  partners: [
    {
      name: "Bangkok Hospital",
      type: "Medical",
      logo: "https://via.placeholder.com/150x80?text=Bangkok+Hospital"
    },
    {
      name: "Bumrungrad International",
      type: "Medical",
      logo: "https://via.placeholder.com/150x80?text=Bumrungrad"
    },
    {
      name: "The Peninsula Bangkok",
      type: "Accommodation",
      logo: "https://via.placeholder.com/150x80?text=Peninsula"
    },
    {
      name: "Mandarin Oriental",
      type: "Accommodation",
      logo: "https://via.placeholder.com/150x80?text=Mandarin+Oriental"
    }
  ]
};
