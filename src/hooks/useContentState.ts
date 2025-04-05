
import { useState } from "react";
import { CMSContent } from "@/types/cms";
import { defaultContent } from "@/lib/defaultContent";
import { useContentAPI } from "@/hooks/useContentAPI";
import { toast } from "@/components/ui/use-toast";

/**
 * Hook for managing content state and basic operations
 */
export function useContentState() {
  const [content, setContent] = useState<CMSContent>(defaultContent);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { saveContent, loadContent, exportContent: apiExportContent, 
          importContent: apiImportContent, uploadImage: apiUploadImage } = useContentAPI();

  // Initialize content data
  const initializeContent = async () => {
    setIsLoading(true);
    try {
      const contentData = await loadContent();
      setContent(contentData);
    } catch (error) {
      console.error("Failed to load initial content:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Save content state and update storage
  const updateContent = async (newContent: CMSContent) => {
    setContent(newContent);
    await saveContent(newContent);
  };

  // Reset content to default values
  const resetToDefault = async () => {
    setContent(defaultContent);
    await saveContent(defaultContent);
    localStorage.removeItem("hayatCMSContent");
    toast({
      title: "Content reset",
      description: "All content has been reset to default values.",
    });
  };

  // Export content to a file
  const exportContent = () => {
    apiExportContent();
  };

  // Import content from a file
  const importContent = async (file: File) => {
    try {
      await apiImportContent(file);
      // Reload content after import
      const contentData = await loadContent();
      setContent(contentData);
    } catch (error) {
      console.error("Import failed:", error);
    }
  };
  
  // Upload an image
  const uploadImage = async (file: File) => {
    return await apiUploadImage(file);
  };

  return {
    content,
    setContent,
    updateContent,
    resetToDefault,
    isLoading,
    setIsLoading,
    initializeContent,
    exportContent,
    importContent,
    uploadImage
  };
}
