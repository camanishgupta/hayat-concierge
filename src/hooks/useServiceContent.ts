
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
    // Check if this ID exists specifically in the services page content
    for (const section of servicesContent.sections) {
      for (const item of section.items) {
        if (item.id === id) {
          if (isRTL && item.arContent) return item.arContent;
          if (item.content) return item.content;
        }
      }
    }
    
    // If not found in services page content, look for a global content item
    const globalItem = getContentItem(id);
    if (globalItem) {
      if (isRTL && globalItem.arContent) return globalItem.arContent;
      if (globalItem.content) return globalItem.content;
    }
    
    // If still not found, check for items in the 'all' page type
    const allContent = getContentByPage('all');
    for (const section of allContent.sections) {
      for (const item of section.items) {
        if (item.id === id) {
          if (isRTL && item.arContent) return item.arContent;
          if (item.content) return item.content;
        }
      }
    }
    
    // If still not found, return fallback
    return isRTL ? fallbackAr : fallbackEn;
  };
  
  // Helper function to get image URL with fallback
  const getImageUrl = (id: string, fallbackUrl: string): string => {
    // First try to find in images specific to the services page
    const serviceImage = servicesContent.images.find(img => img.id === id);
    if (serviceImage) return serviceImage.url;
    
    // If not found, try all images
    const allImages = getContentByPage('all').images;
    const globalImage = allImages.find(img => img.id === id);
    if (globalImage) return globalImage.url;
    
    return fallbackUrl;
  };
  
  return {
    getContent,
    getImageUrl,
    servicesContent,
    isRTL
  };
};
