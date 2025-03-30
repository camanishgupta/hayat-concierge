
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
          lastUpdated: new Date().toISOString(),
        },
        {
          id: "home-hero-subtitle",
          section: "home-hero",
          title: "Subtitle",
          content: "Crafting tailored luxury experiences in Thailand with seamless medical, wellness, and travel concierge services.",
          lastUpdated: new Date().toISOString(),
        },
        {
          id: "home-hero-button",
          section: "home-hero",
          title: "Button Text",
          content: "Book Your Experience",
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
          lastUpdated: new Date().toISOString(),
        },
        {
          id: "about-description",
          section: "about-section",
          title: "About Description",
          content: "At Hayat Concierge, we redefine luxury travel, wellness, and medical tourism in Thailand—tailored exclusively for Middle Eastern clients who seek the extraordinary. From private hospital referrals to bespoke retreats in Thailand's most exclusive destinations, we ensure an experience that is seamless, culturally attuned, and uncompromising in excellence.",
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
          lastUpdated: new Date().toISOString(),
        },
        {
          id: "founder-key-points",
          section: "founder-info",
          title: "Key Points",
          content: "• 15+ years in luxury hospitality and medical tourism\n• Multilingual: Arabic, English, French, Thai\n• Specialized in Middle Eastern client relations\n• Certified medical tourism consultant\n• Network of Thailand's elite medical and wellness providers",
          lastUpdated: new Date().toISOString(),
        },
        {
          id: "founder-video",
          section: "founder-info",
          title: "Video Embed URL",
          content: "https://www.youtube.com/embed/your-video-id-here",
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
          lastUpdated: new Date().toISOString(),
        },
        {
          id: "testimonial-2",
          section: "testimonials",
          title: "Fatima M. - Saudi Arabia",
          content: "The wellness retreat arranged by Hayat Concierge exceeded all expectations. Every detail was tailored to my preferences, with perfect respect for my cultural and personal needs. A transformative experience I will never forget.",
          lastUpdated: new Date().toISOString(),
        },
        {
          id: "testimonial-3",
          section: "testimonials",
          title: "Khalid & Aisha - Qatar",
          content: "Our family trip to Thailand was flawless thanks to Hayat Concierge. From private tours to excellent halal dining options, everything was arranged with our comfort in mind. We particularly appreciated the Arabic-speaking guides.",
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
          lastUpdated: new Date().toISOString(),
        },
        {
          id: "medical-partners",
          section: "partners",
          title: "Medical Partners",
          content: "Bangkok Hospital, Bumrungrad International Hospital, Samitivej Hospital, Bangkok Dusit Medical Services",
          lastUpdated: new Date().toISOString(),
        },
        {
          id: "wellness-partners",
          section: "partners",
          title: "Wellness Partners",
          content: "Chiva-Som, Kamalaya Koh Samui, RAKxa Wellness, Amanpuri Spa",
          lastUpdated: new Date().toISOString(),
        },
        {
          id: "accommodation-partners",
          section: "partners",
          title: "Accommodation Partners",
          content: "The Peninsula Bangkok, Mandarin Oriental, Four Seasons Resort Chiang Mai, Banyan Tree Phuket",
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
          content: "123 Sukhumvit Road, Bangkok, Thailand 10110",
          lastUpdated: new Date().toISOString(),
        },
        {
          id: "contact-phone",
          section: "contact-info",
          title: "Phone Number",
          content: "+66 2 345 6789",
          lastUpdated: new Date().toISOString(),
        },
        {
          id: "contact-email",
          section: "contact-info",
          title: "Email Address",
          content: "contact@hayatconcierge.com",
          lastUpdated: new Date().toISOString(),
        },
        {
          id: "contact-hours",
          section: "contact-info",
          title: "Business Hours",
          content: "Monday to Friday: 9:00 AM - 6:00 PM (GMT+7)\nSaturday: 10:00 AM - 2:00 PM\nSunday: Closed",
          lastUpdated: new Date().toISOString(),
        }
      ]
    },
    {
      id: "itineraries",
      name: "Featured Itineraries",
      description: "Sample luxury itineraries",
      items: [
        {
          id: "medical-itinerary",
          section: "itineraries",
          title: "Premium Medical Checkup Package",
          content: "A 7-day comprehensive health assessment and luxury stay in Bangkok, featuring VIP services at Bumrungrad International Hospital and accommodation at The Peninsula Bangkok.",
          lastUpdated: new Date().toISOString(),
        },
        {
          id: "wellness-itinerary",
          section: "itineraries",
          title: "Holistic Wellness Retreat",
          content: "A 10-day rejuvenation journey combining traditional Thai healing practices, modern wellness techniques, and luxurious accommodations on the pristine beaches of Koh Samui.",
          lastUpdated: new Date().toISOString(),
        },
        {
          id: "luxury-itinerary",
          section: "itineraries",
          title: "Ultimate Thailand Luxury Tour",
          content: "A 14-day exclusive experience through Bangkok, Chiang Mai, and Phuket, staying at Thailand's most prestigious properties with private guides, chefs, and transportation throughout.",
          lastUpdated: new Date().toISOString(),
        }
      ]
    }
  ]
};
