import { useContent } from "@/contexts/ContentContext";
import { useLanguage } from "@/contexts/LanguageContext";

export const useContentItem = (id: string): string => {
  const { getContentItem } = useContent();
  const { language } = useLanguage();
  const item = getContentItem(id);
  
  if (!item) return "";
  
  // Return Arabic content if language is Arabic and content exists
  if (language === 'ar' && item.arContent) {
    return item.arContent;
  }
  
  // Otherwise return English content
  return item.content;
};
