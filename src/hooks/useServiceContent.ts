
import { useContent } from "@/contexts/ContentContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { PageType } from "@/types/cms";

/**
 * Hook to manage content for the services page
 */
export const useServiceContent = () => {
  const { getContentByPage, getContentItem } = useContent();
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  
  // Get services page content - explicitly use 'services' as page type
  const servicesContent = getContentByPage('services');
  
  // Helper function to get content with fallback
  const getContent = (id: string, fallbackEn: string, fallbackAr: string): string => {
    // First try to get from specific content item
    const content = getContentItem(id);
    if (content) {
      if (isRTL && content.arContent) return content.arContent;
      if (content.content) return content.content;
    }
    
    // If no specific item, look through all services page sections
    for (const section of servicesContent.sections) {
      for (const item of section.items) {
        if (item.id === id) {
          if (isRTL && item.arContent) return item.arContent;
          if (item.content) return item.content;
        }
      }
    }
    
    return isRTL ? fallbackAr : fallbackEn;
  };
  
  // Helper function to get image URL with fallback
  const getImageUrl = (id: string, fallbackUrl: string): string => {
    const image = servicesContent.images.find(img => img.id === id);
    if (image) return image.url;
    return fallbackUrl;
  };
  
  return {
    getContent,
    getImageUrl,
    servicesContent,
    isRTL
  };
};
