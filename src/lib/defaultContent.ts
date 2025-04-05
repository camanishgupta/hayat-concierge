
import { CMSContent } from "@/types/cms";

export const defaultContent: CMSContent = {
  sections: [
    {
      id: "home-hero",
      name: "Home Hero Section",
      description: "Main banner on the home page",
      items: [
        {
          id: "home-hero-title",
          section: "home-hero",
          title: "Main Heading",
          content: "Bespoke Thai Journeys",
          arContent: "رحلات تايلاند المخصصة",
          lastUpdated: new Date().toISOString(),
        },
        {
          id: "home-hero-subtitle",
          section: "home-hero",
          title: "Subtitle",
          content: "Crafting tailored luxury experiences in Thailand with seamless medical, wellness, and travel concierge services.",
          arContent: "نقدم تجارب فاخرة مصممة في تايلاند مع خدمات كونسيرج طبية وصحية وسفر سلسة.",
          lastUpdated: new Date().toISOString(),
        },
        {
          id: "home-hero-button",
          section: "home-hero",
          title: "Button Text",
          content: "Book Your Experience",
          arContent: "احجز تجربتك",
          lastUpdated: new Date().toISOString(),
        }
      ]
    },
    {
      id: "about-section",
      name: "About Section",
      description: "Information about Hayat Concierge",
      items: [
        {
          id: "about-title",
          section: "about-section",
          title: "About Title",
          content: "About Hayat Concierge",
          arContent: "عن حياة كونسيرج",
          lastUpdated: new Date().toISOString(),
        },
        {
          id: "about-description",
          section: "about-section",
          title: "About Description",
          content: "At Hayat Concierge, we redefine luxury travel, wellness, and medical tourism in Thailand—tailored exclusively for Middle Eastern clients who seek the extraordinary. From private hospital referrals to bespoke retreats in Thailand's most exclusive destinations, we ensure an experience that is seamless, culturally attuned, and uncompromising in excellence.",
          arContent: "في حياة كونسيرج، نعيد تعريف السفر الفاخر والعافية والسياحة الطبية في تايلاند - مصممة خصيصًا للعملاء من الشرق الأوسط الذين يسعون إلى ما هو استثنائي. من إحالات المستشفيات الخاصة إلى الملاذات المخصصة في أكثر وجهات تايلاند حصرية، نحن نضمن تجربة سلسة ومتناغمة ثقافيًا ولا تقبل المساومة في التميز.",
          lastUpdated: new Date().toISOString(),
        }
      ]
    },
    {
      id: "founder-info",
      name: "Founder Information",
      description: "Information about the founder",
      items: [
        {
          id: "founder-intro",
          section: "founder-info",
          title: "Founder Introduction",
          content: "Born into a French-Algerian heritage, I have always been immersed in a rich blend of cultures, which has given me a deep appreciation for diversity. My profound understanding of Middle Eastern and Thai cultures allows me to bridge the gap between these two worlds, ensuring seamless and culturally attuned luxury experiences for my clients.",
          arContent: "ولدت في تراث فرنسي-جزائري، وكنت دائمًا منغمسة في مزيج غني من الثقافات، مما أعطاني تقديرًا عميقًا للتنوع. فهمي العميق للثقافات الشرق أوسطية والتايلاندية يتيح لي جسر الفجوة بين هذين العالمين، مما يضمن تجارب فاخرة سلسة ومتناغمة ثقافيًا لعملائي.",
          lastUpdated: new Date().toISOString(),
        },
        {
          id: "founder-key-points",
          section: "founder-info",
          title: "Key Points",
          content: "• 15+ years in luxury hospitality and medical tourism\n• Multilingual: Arabic, English, French, Thai\n• Specialized in Middle Eastern client relations\n• Certified medical tourism consultant\n• Network of Thailand's elite medical and wellness providers",
          arContent: "• أكثر من 15 عامًا في الضيافة الفاخرة والسياحة الطبية\n• متعدد اللغات: العربية، الإنجليزية، الفرنسية، التايلاندية\n• متخصصة في علاقات العملاء من الشرق الأوسط\n• مستشارة معتمدة في السياحة الطبية\n• شبكة من مقدمي الخدمات الطبية والعافية النخبة في تايلاند",
          lastUpdated: new Date().toISOString(),
        },
        {
          id: "founder-video",
          section: "founder-info",
          title: "Video Embed URL",
          content: "https://www.youtube.com/embed/your-video-id-here",
          arContent: "https://www.youtube.com/embed/your-video-id-here",
          lastUpdated: new Date().toISOString(),
        }
      ]
    },
    {
      id: "testimonials",
      name: "Client Testimonials",
      description: "Testimonials from satisfied clients",
      items: [
        {
          id: "testimonial-1",
          section: "testimonials",
          title: "Ahmed K. - UAE",
          content: "My medical procedure in Bangkok was handled with the utmost professionalism. Hayat Concierge took care of everything, from hospital appointments to luxury accommodation. Their cultural understanding made me feel completely at ease.",
          arContent: "تم التعامل مع إجراءاتي الطبية في بانكوك بأقصى قدر من الاحترافية. تولت حياة كونسيرج كل شيء، من مواعيد المستشفى إلى الإقامة الفاخرة. جعلني فهمهم الثقافي أشعر بالراحة التامة.",
          lastUpdated: new Date().toISOString(),
        },
        {
          id: "testimonial-2",
          section: "testimonials",
          title: "Fatima M. - Saudi Arabia",
          content: "The wellness retreat arranged by Hayat Concierge exceeded all expectations. Every detail was tailored to my preferences, with perfect respect for my cultural and personal needs. A transformative experience I will never forget.",
          arContent: "تجاوز منتجع العافية الذي نظمته حياة كونسيرج كل التوقعات. تم تفصيل كل تفصيل وفقًا لتفضيلاتي، مع احترام مثالي لاحتياجاتي الثقافية والشخصية. تجربة تحويلية لن أنساها أبدًا.",
          lastUpdated: new Date().toISOString(),
        },
        {
          id: "testimonial-3",
          section: "testimonials",
          title: "Khalid & Aisha - Qatar",
          content: "Our family trip to Thailand was flawless thanks to Hayat Concierge. From private tours to excellent halal dining options, everything was arranged with our comfort in mind. We particularly appreciated the Arabic-speaking guides.",
          arContent: "كانت رحلتنا العائلية إلى تايلاند مثالية بفضل حياة كونسيرج. من الجولات الخاصة إلى خيارات الطعام الحلال الممتازة، تم ترتيب كل شيء مع وضع راحتنا في الاعتبار. قدرنا بشكل خاص المرشدين الناطقين باللغة العربية.",
          lastUpdated: new Date().toISOString(),
        }
      ]
    },
    {
      id: "partners",
      name: "Partner Information",
      description: "Details about our partner facilities",
      items: [
        {
          id: "partners-intro",
          section: "partners",
          title: "Partners Introduction",
          content: "We collaborate with Thailand's most prestigious establishments to ensure unparalleled quality and service.",
          arContent: "نتعاون مع أكثر المؤسسات المرموقة في تايلاند لضمان الجودة والخدمة التي لا مثيل لها.",
          lastUpdated: new Date().toISOString(),
        },
        {
          id: "medical-partners",
          section: "partners",
          title: "Medical Partners",
          content: "Bangkok Hospital, Bumrungrad International Hospital, Samitivej Hospital, Bangkok Dusit Medical Services",
          arContent: "مستشفى بانكوك، مستشفى بومرونجراد الدولي، مستشفى ساميتيفيج، خدمات بانكوك دوسيت الطبية",
          lastUpdated: new Date().toISOString(),
        },
        {
          id: "wellness-partners",
          section: "partners",
          title: "Wellness Partners",
          content: "Chiva-Som, Kamalaya Koh Samui, RAKxa Wellness, Amanpuri Spa",
          arContent: "شيفا-سوم، كامالايا كوه سامو، راكسا ويلنس، أمانبوري سبا",
          lastUpdated: new Date().toISOString(),
        },
        {
          id: "accommodation-partners",
          section: "partners",
          title: "Accommodation Partners",
          content: "The Peninsula Bangkok, Mandarin Oriental, Four Seasons Resort Chiang Mai, Banyan Tree Phuket",
          arContent: "ذا بنينسولا بانكوك، ماندارين أورينتال، منتجع فور سيزونز تشيانغ ماي، بانيان تري بوكيت",
          lastUpdated: new Date().toISOString(),
        }
      ]
    },
    {
      id: "contact-info",
      name: "Contact Information",
      description: "Company contact details",
      items: [
        {
          id: "contact-address",
          section: "contact-info",
          title: "Office Address",
          content: "Dubai, UAE",
          arContent: "دبي، الإمارات العربية المتحدة",
          lastUpdated: new Date().toISOString(),
        },
        {
          id: "contact-phone",
          section: "contact-info",
          title: "Phone Number",
          content: "+66 81 606 5796",
          arContent: "+٦٦ ٨١ ٦٠٦ ٥٧٩٦",
          lastUpdated: new Date().toISOString(),
        },
        {
          id: "contact-whatsapp",
          section: "contact-info",
          title: "WhatsApp",
          content: "+33 6 63 45 62 56",
          arContent: "+٣٣ ٦ ٦٣ ٤٥ ٦٢ ٥٦",
          lastUpdated: new Date().toISOString(),
        },
        {
          id: "contact-email",
          section: "contact-info",
          title: "Email Address",
          content: "info@hayatconcierge.com",
          arContent: "info@hayatconcierge.com",
          lastUpdated: new Date().toISOString(),
        },
        {
          id: "contact-website",
          section: "contact-info",
          title: "Website",
          content: "www.hayatconcierge.com",
          arContent: "www.hayatconcierge.com",
          lastUpdated: new Date().toISOString(),
        }
      ]
    }
  ],
  images: [
    {
      id: "middle-eastern-family",
      name: "Middle Eastern Family",
      description: "Image for the 'Dedicated to Middle Eastern Travelers' section",
      url: "/lovable-uploads/d2409855-1669-4389-9789-011feb333ca6.png"
    },
    {
      id: "thailand-bridge",
      name: "Thailand Bridge",
      description: "Image for the 'Your Trusted Bridge' section",
      url: "/lovable-uploads/ec9be84a-4419-47a9-8dd4-629792800ca7.png"
    },
    {
      id: "bangkok-luxury-hotel",
      name: "Bangkok Luxury Hotel",
      description: "Image for the 'Why Bangkok' section",
      url: "/lovable-uploads/c332b151-80b5-454d-87d7-34c92eced3eb.png"
    },
    {
      id: "bangkok-skyline",
      name: "Bangkok Skyline",
      description: "Secondary image for the 'Why Bangkok' section",
      url: "/lovable-uploads/d8498f7c-1210-45b9-afd8-d8ff816223a8.png"
    },
    {
      id: "luxury-spa",
      name: "Luxury Spa",
      description: "Image for the Wellness section",
      url: "/lovable-uploads/35fd8c2e-3b5d-4e47-9216-e5e210033d40.png"
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
