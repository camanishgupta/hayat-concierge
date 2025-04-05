
import React, { createContext, useContext, useEffect } from "react";
import { CMSContent, ContentItem, ContentImage, Partner, PageType, ContentSection } from "@/types/cms";
import { useContentState } from "@/hooks/useContentState";
import { contentHelpers } from "@/utils/contentHelpers";

interface ContentContextType {
  content: CMSContent;
  getContentItem: (id: string) => ContentItem | undefined;
  updateContentItem: (id: string, newContent: string, arContent?: string) => void;
  resetToDefault: () => void;
  addContentItem: (item: Partial<ContentItem>) => void;
  removeContentItem: (id: string) => void;
  updateContentImage: (id: string, newUrl: string) => void;
  addContentImage: (image: Partial<ContentImage>) => void;
  removeContentImage: (id: string) => void;
  addPartner: (partner: Partner) => void;
  removePartner: (index: number) => void;
  getContentByPage: (page: PageType) => {
    sections: ContentSection[];
    images: ContentImage[];
  };
  exportContent: () => void;
  importContent: (file: File) => Promise<void>;
  uploadImage: (file: File) => Promise<string>;
  isLoading: boolean;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { 
    content, 
    updateContent, 
    resetToDefault, 
    isLoading, 
    initializeContent,
    exportContent,
    importContent,
    uploadImage
  } = useContentState();

  // Load content on initial mount
  useEffect(() => {
    initializeContent();
  }, []);

  // Wrapper functions that use the content helpers
  const getContentItem = (id: string): ContentItem | undefined => {
    return contentHelpers.getContentItem(content, id);
  };

  const updateContentItem = (id: string, newContent: string, arContent?: string) => {
    const updatedContent = contentHelpers.updateContentItem(content, id, newContent, arContent);
    if (updatedContent !== content) {
      updateContent(updatedContent);
    }
  };

  const addContentItem = (item: Partial<ContentItem>) => {
    const updatedContent = contentHelpers.addContentItem(content, item);
    if (updatedContent !== content) {
      updateContent(updatedContent);
    }
  };

  const removeContentItem = (id: string) => {
    const updatedContent = contentHelpers.removeContentItem(content, id);
    if (updatedContent !== content) {
      updateContent(updatedContent);
    }
  };

  const updateContentImage = (id: string, newUrl: string) => {
    const updatedContent = contentHelpers.updateContentImage(content, id, newUrl);
    if (updatedContent !== content) {
      updateContent(updatedContent);
    }
  };

  const addContentImage = (image: Partial<ContentImage>) => {
    const updatedContent = contentHelpers.addContentImage(content, image);
    updateContent(updatedContent);
  };

  const removeContentImage = (id: string) => {
    const updatedContent = contentHelpers.removeContentImage(content, id);
    if (updatedContent !== content) {
      updateContent(updatedContent);
    }
  };

  const addPartner = (partner: Partner) => {
    const updatedContent = contentHelpers.addPartner(content, partner);
    updateContent(updatedContent);
  };

  const removePartner = (index: number) => {
    const updatedContent = contentHelpers.removePartner(content, index);
    if (updatedContent !== content) {
      updateContent(updatedContent);
    }
  };

  const getContentByPage = (page: PageType) => {
    return contentHelpers.getContentByPage(content, page);
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
      addContentImage,
      removeContentImage,
      addPartner,
      removePartner,
      getContentByPage,
      exportContent,
      importContent,
      uploadImage,
      isLoading
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
