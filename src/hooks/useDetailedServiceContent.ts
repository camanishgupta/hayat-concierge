
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
    const content = getContentItem(id);
    if (content) {
      if (isRTL && content.arContent) return content.arContent;
      if (content.content) return content.content;
    }
    return isRTL ? fallbackAr : fallbackEn;
  };
  
  // Helper function to get image URL with fallback
  const getImageUrl = (id: string, fallbackUrl: string): string => {
    return pageContent.images.find(img => img.id === id)?.url || fallbackUrl;
  };
  
  return {
    getContent,
    getImageUrl,
    pageContent,
    isRTL
  };
};
