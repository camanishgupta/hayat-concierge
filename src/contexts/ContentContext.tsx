
import React, { createContext, useContext, useState, useEffect } from "react";
import { CMSContent, ContentItem } from "@/types/cms";
import { defaultContent } from "@/lib/defaultContent";
import { toast } from "@/components/ui/use-toast";

interface ContentContextType {
  content: CMSContent;
  getContentItem: (id: string) => ContentItem | undefined;
  updateContentItem: (id: string, newContent: string) => void;
  resetToDefault: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<CMSContent>(defaultContent);

  useEffect(() => {
    const storedContent = localStorage.getItem("hayatCMSContent");
    if (storedContent) {
      try {
        setContent(JSON.parse(storedContent));
      } catch (e) {
        console.error("Failed to parse stored content:", e);
        localStorage.removeItem("hayatCMSContent");
      }
    }
  }, []);

  const getContentItem = (id: string): ContentItem | undefined => {
    for (const section of content.sections) {
      const item = section.items.find(item => item.id === id);
      if (item) return item;
    }
    return undefined;
  };

  const updateContentItem = (id: string, newContent: string) => {
    const updatedContent = { ...content };
    let updated = false;

    for (const section of updatedContent.sections) {
      const itemIndex = section.items.findIndex(item => item.id === id);
      if (itemIndex >= 0) {
        section.items[itemIndex] = {
          ...section.items[itemIndex],
          content: newContent,
          lastUpdated: new Date().toISOString()
        };
        updated = true;
        break;
      }
    }

    if (updated) {
      setContent(updatedContent);
      localStorage.setItem("hayatCMSContent", JSON.stringify(updatedContent));
      toast({
        title: "Content updated",
        description: "Your changes have been saved.",
      });
    }
  };

  const resetToDefault = () => {
    setContent(defaultContent);
    localStorage.removeItem("hayatCMSContent");
    toast({
      title: "Content reset",
      description: "All content has been reset to default values.",
    });
  };

  return (
    <ContentContext.Provider value={{ content, getContentItem, updateContentItem, resetToDefault }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = (): ContentContextType => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error("useContent must be used within a ContentProvider");
  }
  return context;
};
