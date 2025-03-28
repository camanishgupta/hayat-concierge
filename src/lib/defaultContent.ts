
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
    }
  ]
};
