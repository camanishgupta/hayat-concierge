
import React, { createContext, useContext, useState, useEffect } from "react";
import { CMSContent, ContentItem, ContentImage, Partner } from "@/types/cms";
import { defaultContent } from "@/lib/defaultContent";
import { toast } from "@/components/ui/use-toast";

interface ContentContextType {
  content: CMSContent;
  getContentItem: (id: string) => ContentItem | undefined;
  updateContentItem: (id: string, newContent: string, arContent?: string) => void;
  resetToDefault: () => void;
  addContentItem: (item: Partial<ContentItem>) => void;
  removeContentItem: (id: string) => void;
  updateContentImage: (id: string, newUrl: string) => void;
  addPartner: (partner: Partner) => void;
  removePartner: (index: number) => void;
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

  const updateContentItem = (id: string, newContent: string, arContent?: string) => {
    const updatedContent = { ...content };
    let updated = false;

    for (const section of updatedContent.sections) {
      const itemIndex = section.items.findIndex(item => item.id === id);
      if (itemIndex >= 0) {
        section.items[itemIndex] = {
          ...section.items[itemIndex],
          content: newContent,
          arContent: arContent !== undefined ? arContent : section.items[itemIndex].arContent,
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

  const addContentItem = (item: Partial<ContentItem>) => {
    if (!item.section) return;
    
    const updatedContent = { ...content };
    const sectionIndex = updatedContent.sections.findIndex(s => s.id === item.section);
    
    if (sectionIndex >= 0) {
      const newItem: ContentItem = {
        id: `custom-${Date.now()}`,
        section: item.section,
        title: item.title || 'New Item',
        content: item.content || '',
        arContent: item.arContent || '',
        lastUpdated: new Date().toISOString()
      };
      
      updatedContent.sections[sectionIndex].items.push(newItem);
      setContent(updatedContent);
      localStorage.setItem("hayatCMSContent", JSON.stringify(updatedContent));
      
      toast({
        title: "Item added",
        description: "New content item has been added.",
      });
    }
  };

  const removeContentItem = (id: string) => {
    if (!confirm("Are you sure you want to remove this item?")) return;
    
    const updatedContent = { ...content };
    let removed = false;
    
    for (let i = 0; i < updatedContent.sections.length; i++) {
      const section = updatedContent.sections[i];
      const itemIndex = section.items.findIndex(item => item.id === id);
      
      if (itemIndex >= 0) {
        section.items.splice(itemIndex, 1);
        removed = true;
        break;
      }
    }
    
    if (removed) {
      setContent(updatedContent);
      localStorage.setItem("hayatCMSContent", JSON.stringify(updatedContent));
      
      toast({
        title: "Item removed",
        description: "The content item has been removed.",
      });
    }
  };

  const updateContentImage = (id: string, newUrl: string) => {
    const updatedContent = { ...content };
    const imageIndex = updatedContent.images.findIndex(img => img.id === id);
    
    if (imageIndex >= 0) {
      updatedContent.images[imageIndex] = {
        ...updatedContent.images[imageIndex],
        url: newUrl
      };
      
      setContent(updatedContent);
      localStorage.setItem("hayatCMSContent", JSON.stringify(updatedContent));
      
      toast({
        title: "Image updated",
        description: "Image URL has been updated.",
      });
    }
  };

  const addPartner = (partner: Partner) => {
    const updatedContent = { ...content };
    updatedContent.partners.push(partner);
    
    setContent(updatedContent);
    localStorage.setItem("hayatCMSContent", JSON.stringify(updatedContent));
    
    toast({
      title: "Partner added",
      description: "New partner has been added.",
    });
  };

  const removePartner = (index: number) => {
    if (!confirm("Are you sure you want to remove this partner?")) return;
    
    const updatedContent = { ...content };
    updatedContent.partners.splice(index, 1);
    
    setContent(updatedContent);
    localStorage.setItem("hayatCMSContent", JSON.stringify(updatedContent));
    
    toast({
      title: "Partner removed",
      description: "The partner has been removed.",
    });
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
    <ContentContext.Provider value={{ 
      content, 
      getContentItem, 
      updateContentItem, 
      resetToDefault, 
      addContentItem, 
      removeContentItem, 
      updateContentImage,
      addPartner,
      removePartner
    }}>
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
