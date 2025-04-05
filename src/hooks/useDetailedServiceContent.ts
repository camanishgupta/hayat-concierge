
import { useLanguage } from "@/contexts/LanguageContext";
import { useContent } from "@/contexts/ContentContext";
import { PageType } from "@/types/cms";

/**
 * Hook to manage content for detailed service pages
 * @param servicePage The specific service page to get content for
 */
export const useDetailedServiceContent = (servicePage: PageType) => {
  const { language } = useLanguage();
  const { getContentByPage, getContentItem } = useContent();
  const isRTL = language === 'ar';
  
  // Get page-specific content
  const pageContent = getContentByPage(servicePage);
  
  // Helper function to get content with fallback
  const getContent = (id: string, fallbackEn: string, fallbackAr: string): string => {
    // First check if item exists in page-specific content
    for (const section of pageContent.sections) {
      for (const item of section.items) {
        if (item.id === id) {
          if (isRTL && item.arContent) return item.arContent;
          if (item.content) return item.content;
        }
      }
    }
    
    // If not found, look for a global content item
    const globalItem = getContentItem(id);
    if (globalItem) {
      if (isRTL && globalItem.arContent) return globalItem.arContent;
      if (globalItem.content) return globalItem.content;
    }
    
    // Look in services page content as a fallback
    const servicesContent = getContentByPage('services');
    for (const section of servicesContent.sections) {
      for (const item of section.items) {
        if (item.id === id) {
          if (isRTL && item.arContent) return item.arContent;
          if (item.content) return item.content;
        }
      }
    }
    
    // Check for items in the 'all' page type as a last resort
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
    // First try to find in images specific to this page
    const pageImage = pageContent.images.find(img => img.id === id);
    if (pageImage) return pageImage.url;
    
    // If not found, try services page images
    const servicesImages = getContentByPage('services').images;
    const serviceImage = servicesImages.find(img => img.id === id);
    if (serviceImage) return serviceImage.url;
    
    // If still not found, try all images
    const allImages = getContentByPage('all').images;
    const globalImage = allImages.find(img => img.id === id);
    if (globalImage) return globalImage.url;
    
    return fallbackUrl;
  };
  
  return {
    getContent,
    getImageUrl,
    pageContent,
    isRTL
  };
};
