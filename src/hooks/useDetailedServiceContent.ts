
import { useContent } from "@/contexts/ContentContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { PageType } from "@/types/cms";

/**
 * Hook to manage content for specific service detail pages
 */
export const useDetailedServiceContent = (pageType: PageType) => {
  const { getContentByPage, getContentItem } = useContent();
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  
  // Get page specific content
  const pageContent = getContentByPage(pageType);
  
  // Helper function to get content with fallback
  const getContent = (id: string, fallbackEn: string, fallbackAr: string): string => {
    // First check if this ID exists specifically in the page content
    for (const section of pageContent.sections) {
      const foundItem = section.items.find(item => item.id === id);
      if (foundItem) {
        if (isRTL && foundItem.arContent) return foundItem.arContent;
        if (foundItem.content) return foundItem.content;
      }
    }
    
    // If not found in specific page content, look for a global content item
    const globalItem = getContentItem(id);
    if (globalItem) {
      if (isRTL && globalItem.arContent) return globalItem.arContent;
      if (globalItem.content) return globalItem.content;
    }
    
    // If still not found, check for items in the 'all' page type
    const allContent = getContentByPage('all');
    for (const section of allContent.sections) {
      const foundItem = section.items.find(item => item.id === id);
      if (foundItem) {
        if (isRTL && foundItem.arContent) return foundItem.arContent;
        if (foundItem.content) return foundItem.content;
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
    
    // If not found, try all images
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
