
import { useContent } from "@/contexts/ContentContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { PageType } from "@/types/cms";

export const useContentItem = (id: string, page?: PageType): string => {
  const { getContentItem, getContentByPage } = useContent();
  const { language } = useLanguage();
  
  // First try to get from a specific content item with this ID
  const item = getContentItem(id);
  
  if (item) {
    // Return Arabic content if language is Arabic and content exists
    if (language === 'ar' && item.arContent) {
      return item.arContent;
    }
    
    // Otherwise return English content
    return item.content;
  }
  
  // If no direct item found but page is specified, check page content
  if (page) {
    const pageContent = getContentByPage(page);
    
    for (const section of pageContent.sections) {
      const foundItem = section.items.find(item => item.id === id);
      if (foundItem) {
        if (language === 'ar' && foundItem.arContent) {
          return foundItem.arContent;
        }
        return foundItem.content || "";
      }
    }
  }
  
  // If still not found, return empty string
  return "";
};
