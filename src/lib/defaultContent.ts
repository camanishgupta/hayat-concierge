
// src/lib/defaultContent.ts
import { CMSContent, Partner } from "@/types/cms";

// Default partners for the website
const defaultPartners: Partner[] = [
  {
    name: "Bangkok Hospital",
    type: "Medical",
    logo: "/lovable-uploads/d5b9b92a-e6eb-4643-9ac4-3c0f949c03d5.png"
  },
  {
    name: "Bumrungrad International Hospital",
    type: "Medical",
    logo: "/lovable-uploads/21a6c5a9-6447-41f8-b35a-fb60d257b735.png"
  },
  {
    name: "Four Seasons Hotels and Resorts",
    type: "Accommodation",
    logo: "/lovable-uploads/356b783d-859e-4e71-a066-3eb7eb613b65.png"
  },
  {
    name: "Anantara Hotels & Resorts",
    type: "Accommodation",
    logo: "/lovable-uploads/71476aa2-c51c-4a0e-9497-20ded7f2aa23.png"
  }
];

// Default content for the CMS
export const defaultContent: CMSContent = {
  sections: [
    {
      id: "hero",
      name: "Hero Sections",
      description: "Main hero sections across the site",
      page: "all",
      items: [
        {
          id: "home-hero-title",
          section: "hero",
          title: "Home Hero Title",
          content: "Experience Thailand in Luxury and Comfort",
          arContent: "تجربة تايلاند بفخامة وراحة",
          page: "home",
          lastUpdated: new Date().toISOString()
        },
        {
          id: "home-hero-subtitle",
          section: "hero",
          title: "Home Hero Subtitle",
          content: "Bespoke concierge services for discerning travelers from the Middle East",
          arContent: "خدمات كونسيرج مخصصة للمسافرين المميزين من الشرق الأوسط",
          page: "home",
          lastUpdated: new Date().toISOString()
        },
        {
          id: "about-hero-title",
          section: "hero",
          title: "About Hero Title",
          content: "About Hayat Concierge",
          arContent: "عن حياة كونسيرج",
          page: "about",
          lastUpdated: new Date().toISOString()
        },
        {
          id: "services-hero-title",
          section: "hero",
          title: "Services Hero Title",
          content: "Hayat Concierge Services",
          arContent: "خدمات كونسيرج حياة",
          page: "services",
          lastUpdated: new Date().toISOString()
        },
        {
          id: "services-hero-subtitle",
          section: "hero",
          title: "Services Hero Subtitle",
          content: "Tailored to Your Needs, Designed for Excellence",
          arContent: "مصممة خصيصًا لاحتياجاتك، مصممة للتميز",
          page: "services",
          lastUpdated: new Date().toISOString()
        },
        {
          id: "healthcare-title",
          section: "hero",
          title: "Healthcare Solutions Title",
          content: "Medical Tourism Services",
          arContent: "خدمات السياحة الطبية",
          page: "healthcare-solutions",
          lastUpdated: new Date().toISOString()
        },
        {
          id: "healthcare-description",
          section: "hero",
          title: "Healthcare Solutions Description",
          content: "World-class healthcare with unparalleled personal service",
          arContent: "رعاية صحية عالمية المستوى مع خدمة شخصية لا مثيل لها",
          page: "healthcare-solutions",
          lastUpdated: new Date().toISOString()
        },
        {
          id: "luxury-title",
          section: "hero",
          title: "Luxury Experience Title",
          content: "Luxury Travel Experience",
          arContent: "تجربة سفر فاخرة",
          page: "luxury-experience",
          lastUpdated: new Date().toISOString()
        },
        {
          id: "wellness-title",
          section: "hero",
          title: "Wellness Journey Title",
          content: "Wellness Retreats & Rejuvenation",
          arContent: "منتجعات العافية والتجديد",
          page: "wellness-journey",
          lastUpdated: new Date().toISOString()
        }
      ]
    },
    {
      id: "home",
      name: "Home Page",
      description: "Content for the home page",
      page: "home",
      items: [
        {
          id: "home-welcome-title",
          section: "home",
          title: "Welcome Title",
          content: "Welcome to Hayat Concierge",
          arContent: "مرحبًا بك في حياة كونسيرج",
          page: "home",
          lastUpdated: new Date().toISOString()
        },
        {
          id: "home-welcome-text",
          section: "home",
          title: "Welcome Text",
          content: "Your gateway to exceptional experiences in Thailand, tailored specifically for Middle Eastern travelers. At Hayat Concierge, we understand your unique preferences, cultural needs, and expectations. Our premium services combine Thai hospitality with an authentic understanding of Middle Eastern values.",
          arContent: "بوابتك إلى تجارب استثنائية في تايلاند، مصممة خصيصًا للمسافرين من الشرق الأوسط. في حياة كونسيرج، نتفهم تفضيلاتك الفريدة واحتياجاتك الثقافية وتوقعاتك. تجمع خدماتنا المتميزة بين الضيافة التايلاندية والفهم الحقيقي للقيم الشرق أوسطية.",
          page: "home",
          lastUpdated: new Date().toISOString()
        }
      ]
    },
    {
      id: "services",
      name: "Services",
      description: "Content for the services section",
      page: "services",
      items: [
        {
          id: "services-title",
          section: "services",
          title: "Services Section Title",
          content: "Hayat Concierge Services",
          arContent: "خدمات كونسيرج الفاخرة",
          page: "services",
          lastUpdated: new Date().toISOString()
        },
        {
          id: "services-description",
          section: "services",
          title: "Services Section Description",
          content: "At Hayat Concierge, we don't offer standard packages—we create personalized experiences designed around your unique needs. Whether you're seeking world-class medical care, a luxury wellness retreat, or an unforgettable travel experience, we take care of every detail with a customized approach.",
          arContent: "في حياة كونسيرج، لا نقدم حزمًا قياسية - نحن نخلق تجارب شخصية مصممة حول احتياجاتك الفريدة. سواء كنت تبحث عن رعاية طبية عالمية المستوى، أو منتجع صحي فاخر، أو تجربة سفر لا تُنسى، نحن نهتم بكل التفاصيل بنهج مخصص.",
          page: "services",
          lastUpdated: new Date().toISOString()
        },
        {
          id: "service1-title",
          section: "services",
          title: "Medical Service Title",
          content: "Medical Concierge & Healthcare Coordination",
          arContent: "الخدمات الطبية وتنسيق الرعاية الصحية",
          page: "services",
          lastUpdated: new Date().toISOString()
        },
        {
          id: "service1-description",
          section: "services",
          title: "Medical Service Description",
          content: "We connect you with leading hospitals and specialists in Bangkok, ensuring a smooth medical journey from consultation to recovery.",
          arContent: "نربطك بالمستشفيات والأخصائيين الرائدين في بانكوك، مما يضمن رحلة طبية سلسة من الاستشارة إلى التعافي.",
          page: "services",
          lastUpdated: new Date().toISOString()
        },
        {
          id: "service2-title",
          section: "services",
          title: "Wellness Service Title",
          content: "Wellness & Rejuvenation Retreats",
          arContent: "منتجعات العافية والتجديد",
          page: "services",
          lastUpdated: new Date().toISOString()
        },
        {
          id: "service2-description",
          section: "services",
          title: "Wellness Service Description",
          content: "Indulge in luxury wellness retreats crafted for relaxation, healing, and rejuvenation in Thailand's top wellness resorts.",
          arContent: "استمتع بتجارب العافية الفاخرة المصممة للاسترخاء والشفاء والتجديد في أفضل منتجعات العافية في تايلاند.",
          page: "services",
          lastUpdated: new Date().toISOString()
        },
        {
          id: "service3-title",
          section: "services",
          title: "Luxury Service Title",
          content: "Exclusive Stays & Bespoke Travel",
          arContent: "الإقامات الحصرية والسفر المصمم",
          page: "services",
          lastUpdated: new Date().toISOString()
        },
        {
          id: "service3-description",
          section: "services",
          title: "Luxury Service Description",
          content: "Experience Thailand in unparalleled luxury with our handpicked premium hotels and private villas, with bespoke amenities.",
          arContent: "استمتع بتايلاند في فخامة لا مثيل لها مع فنادقنا الفاخرة المختارة بعناية والفيلات الخاصة، مع وسائل راحة مخصصة.",
          page: "services",
          lastUpdated: new Date().toISOString()
        }
      ]
    },
    {
      id: "healthcare",
      name: "Healthcare Solutions",
      description: "Content for the healthcare solutions page",
      page: "healthcare-solutions",
      items: [
        {
          id: "healthcare-main-title",
          section: "healthcare",
          title: "Healthcare Main Title",
          content: "Comprehensive Healthcare Coordination",
          arContent: "تنسيق الرعاية الصحية الشاملة",
          page: "healthcare-solutions",
          lastUpdated: new Date().toISOString()
        },
        {
          id: "healthcare-main-paragraph",
          section: "healthcare",
          title: "Healthcare Main Paragraph",
          content: "At Hayat Concierge, we understand that medical needs vary widely. Beyond our specialized services in Aesthetic Procedures, Dental Care, Orthopedic and Fertility Treatments, we are dedicated to assisting with any other medical requirements you may have. Our role is to serve as the vital link between you and Bangkok's top-tier hospitals and clinics, ensuring that every aspect of your healthcare journey is seamlessly coordinated.",
          arContent: "في حياة كونسيرج، نتفهم أن الاحتياجات الطبية تختلف على نطاق واسع. بالإضافة إلى خدماتنا المتخصصة في الإجراءات التجميلية، ورعاية الأسنان، وعلاجات العظام والخصوبة، نحن ملتزمون بالمساعدة في أي متطلبات طبية أخرى قد تكون لديك. دورنا هو أن نكون حلقة الوصل الحيوية بينك وبين أفضل المستشفيات والعيادات في بانكوك، مما يضمن رحلة طبية سلسة من الاستشارة إلى التعافي.",
          page: "healthcare-solutions",
          lastUpdated: new Date().toISOString()
        },
        {
          id: "healthcare-costs-title",
          section: "healthcare",
          title: "Healthcare Costs Title",
          content: "Overview of approximate treatment costs",
          arContent: "نظرة عامة على التكاليف التقريبية للعلاج",
          page: "healthcare-solutions",
          lastUpdated: new Date().toISOString()
        },
        {
          id: "healthcare-costs-disclaimer",
          section: "healthcare",
          title: "Healthcare Costs Disclaimer",
          content: "Please note that the treatment prices mentioned are approximate figures sourced from Bookimed, a trusted medical tourism platform. Actual costs will be determined by our partnered medical professionals based on your individual needs and circumstances.",
          arContent: "يرجى ملاحظة أن أسعار العلاج المذكورة هي أرقام تقريبية مصدرها Bookimed، وهي منصة موثوقة للسياحة الطبية. سيتم تحديد التكاليف الفعلية من قبل المهنيين الطبيين الشركاء لدينا بناءً على احتياجاتك وظروفك الفردية.",
          page: "healthcare-solutions",
          lastUpdated: new Date().toISOString()
        },
        {
          id: "healthcare-affordable-title",
          section: "healthcare",
          title: "Healthcare Affordable Title",
          content: "World-Class Care at Affordable Prices",
          arContent: "رعاية عالمية المستوى بأسعار معقولة",
          page: "healthcare-solutions",
          lastUpdated: new Date().toISOString()
        },
        {
          id: "healthcare-affordable-paragraph",
          section: "healthcare",
          title: "Healthcare Affordable Paragraph",
          content: "Our network includes world-class, highly trained specialists and leading hospitals renowned for their expertise and advanced medical technologies. You can receive top-tier treatment at affordable prices compared to other countries, ensuring exceptional care tailored to your needs.",
          arContent: "تشمل شبكتنا متخصصين مدربين على أعلى مستوى عالمي ومستشفيات رائدة معروفة بخبرتها وتقنياتها الطبية المتقدمة. يمكنك الحصول على علاج من الدرجة الأولى بأسعار معقولة مقارنة بالدول الأخرى، مما يضمن رعاية استثنائية مصممة حسب احتياجاتك.",
          page: "healthcare-solutions",
          lastUpdated: new Date().toISOString()
        },
        {
          id: "healthcare-services-list-title",
          section: "healthcare",
          title: "Healthcare Services List Title",
          content: "Our Medical Services Include:",
          arContent: "خدماتنا الطبية تشمل:",
          page: "healthcare-solutions",
          lastUpdated: new Date().toISOString()
        },
        {
          id: "healthcare-service-aesthetic",
          section: "healthcare",
          title: "Healthcare Service - Aesthetic",
          content: "Aesthetic Procedures",
          arContent: "الإجراءات التجميلية",
          page: "healthcare-solutions",
          lastUpdated: new Date().toISOString()
        },
        {
          id: "healthcare-service-dental",
          section: "healthcare",
          title: "Healthcare Service - Dental",
          content: "Dental Care",
          arContent: "رعاية الأسنان",
          page: "healthcare-solutions",
          lastUpdated: new Date().toISOString()
        },
        {
          id: "healthcare-service-orthopedic",
          section: "healthcare",
          title: "Healthcare Service - Orthopedic",
          content: "Orthopedic Treatments",
          arContent: "علاجات العظام",
          page: "healthcare-solutions",
          lastUpdated: new Date().toISOString()
        },
        {
          id: "healthcare-service-fertility",
          section: "healthcare",
          title: "Healthcare Service - Fertility",
          content: "Fertility Treatments",
          arContent: "علاجات الخصوبة",
          page: "healthcare-solutions",
          lastUpdated: new Date().toISOString()
        },
        {
          id: "healthcare-service-checkup",
          section: "healthcare",
          title: "Healthcare Service - Checkup",
          content: "Comprehensive Health Check-ups",
          arContent: "الفحوصات الصحية الشاملة",
          page: "healthcare-solutions",
          lastUpdated: new Date().toISOString()
        },
        {
          id: "healthcare-service-specialized",
          section: "healthcare",
          title: "Healthcare Service - Specialized",
          content: "Specialized Medical Treatment",
          arContent: "العلاج الطبي المتخصص",
          page: "healthcare-solutions",
          lastUpdated: new Date().toISOString()
        }
      ]
    },
    {
      id: "luxury",
      name: "Luxury Experience",
      description: "Content for the luxury experience page",
      page: "luxury-experience",
      items: [
        {
          id: "luxury-main-title",
          section: "luxury",
          title: "Luxury Main Title",
          content: "Exclusive Accommodations & Bespoke Travel",
          arContent: "إقامات حصرية وسفر مخصص",
          page: "luxury-experience",
          lastUpdated: new Date().toISOString()
        }
      ]
    },
    {
      id: "wellness",
      name: "Wellness Journey",
      description: "Content for the wellness journey page",
      page: "wellness-journey",
      items: [
        {
          id: "wellness-main-title",
          section: "wellness",
          title: "Wellness Main Title",
          content: "Rejuvenate Your Body & Spirit",
          arContent: "جدد جسمك وروحك",
          page: "wellness-journey",
          lastUpdated: new Date().toISOString()
        }
      ]
    }
  ],
  images: [
    {
      id: "home-hero",
      name: "Home Hero Image",
      description: "Main hero image for the home page",
      url: "/lovable-uploads/8da2d12f-f6e0-42d1-82c5-eda9124eaec0.png",
      page: "home"
    },
    {
      id: "service1-image",
      name: "Medical Service Image",
      description: "Image for the medical concierge service",
      url: "/lovable-uploads/c2a5eee5-a591-4abd-a19b-70f463e74556.png",
      page: "services"
    },
    {
      id: "service2-image",
      name: "Wellness Service Image",
      description: "Image for the wellness retreat service",
      url: "/lovable-uploads/35fd8c2e-3b5d-4e47-9216-e5e210033d40.png",
      page: "services"
    },
    {
      id: "service3-image",
      name: "Luxury Service Image",
      description: "Image for the luxury stays service",
      url: "/lovable-uploads/218fbae2-0f54-4b7b-a2a8-6a2cca069629.png",
      page: "services"
    },
    {
      id: "healthcare-main-image",
      name: "Healthcare Main Image",
      description: "Main image for healthcare solutions page",
      url: "/lovable-uploads/c2a5eee5-a591-4abd-a19b-70f463e74556.png",
      page: "healthcare-solutions"
    },
    {
      id: "healthcare-aesthetic-image",
      name: "Aesthetic Procedures Image",
      description: "Image for aesthetic procedures",
      url: "/lovable-uploads/4d2e5619-ebba-4ca2-9a33-97d95e97c16d.png",
      page: "healthcare-solutions"
    },
    {
      id: "healthcare-dental-image",
      name: "Dental Care Image",
      description: "Image for dental care",
      url: "/lovable-uploads/8248f807-6d1f-4c0d-862a-6e6a599acda9.png",
      page: "healthcare-solutions"
    },
    {
      id: "healthcare-checkup-image",
      name: "Health Check Image",
      description: "Image for health check-ups",
      url: "/lovable-uploads/728e0993-6177-41af-bafc-905440d60d87.png",
      page: "healthcare-solutions"
    },
    {
      id: "healthcare-fertility-image",
      name: "Fertility Treatment Image",
      description: "Image for fertility treatments",
      url: "/lovable-uploads/1f508817-53eb-4f23-a764-34eea803fa93.png",
      page: "healthcare-solutions"
    },
    {
      id: "luxury-main-image",
      name: "Luxury Main Image",
      description: "Main image for luxury experience page",
      url: "/lovable-uploads/218fbae2-0f54-4b7b-a2a8-6a2cca069629.png",
      page: "luxury-experience"
    },
    {
      id: "wellness-main-image",
      name: "Wellness Main Image",
      description: "Main image for wellness journey page",
      url: "/lovable-uploads/35fd8c2e-3b5d-4e47-9216-e5e210033d40.png",
      page: "wellness-journey"
    }
  ],
  partners: defaultPartners
};
