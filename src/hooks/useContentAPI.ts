
import { CMSContent } from "@/types/cms";
import { defaultContent } from "@/lib/defaultContent";
import { toast } from "@/components/ui/use-toast";

// This hook provides methods to fetch and update content data
export const useContentAPI = () => {
  // Save content to both localStorage (for immediate use) and trigger server save
  const saveContent = async (content: CMSContent) => {
    // Save to localStorage for immediate use
    localStorage.setItem("hayatCMSContent", JSON.stringify(content));
    
    try {
      // Attempt to save to server
      const response = await fetch('/api/content/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(content)
      });
      
      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}: ${await response.text()}`);
      }
      
      toast({
        title: "Content saved",
        description: "Your changes have been saved permanently to the server.",
      });
    } catch (error) {
      console.error("Failed to save content to server:", error);
      toast({
        title: "Content saved locally only",
        description: "Changes saved to browser storage only. Server save failed.",
        variant: "destructive"
      });
    }
  };

  // Load content with priority: server > localStorage > default
  const loadContent = async (): Promise<CMSContent> => {
    try {
      // First try to load from server
      const response = await fetch('/api/content/load');
      if (response.ok) {
        const content = await response.json();
        // Update localStorage with the latest from server
        localStorage.setItem("hayatCMSContent", JSON.stringify(content));
        return content;
      }
    } catch (error) {
      console.error("Failed to load content from server:", error);
      // Server load failed, continue to try localStorage
    }

    try {
      // Try to load from localStorage as fallback
      const storedContent = localStorage.getItem("hayatCMSContent");
      if (storedContent) {
        return JSON.parse(storedContent);
      }
    } catch (e) {
      console.error("Failed to parse stored content:", e);
      localStorage.removeItem("hayatCMSContent");
    }
    
    // Fallback to default content
    return defaultContent;
  };

  // Method to export content to a JSON file for backup
  const exportContent = () => {
    const content = localStorage.getItem("hayatCMSContent");
    if (!content) {
      toast({
        variant: "destructive",
        title: "Export failed",
        description: "No content found to export.",
      });
      return;
    }

    const contentObj = JSON.parse(content);
    const contentStr = JSON.stringify(contentObj, null, 2);
    const blob = new Blob([contentStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement("a");
    a.href = url;
    a.download = "hayat-cms-content.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 1000);

    toast({
      title: "Content exported",
      description: "Your content has been exported to a JSON file.",
    });
  };

  // Method to import content from a JSON file
  const importContent = (file: File) => {
    return new Promise<void>((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = async (e) => {
        try {
          const content = JSON.parse(e.target?.result as string);
          await saveContent(content); // Use the async saveContent
          toast({
            title: "Content imported",
            description: "Your content has been imported successfully.",
          });
          resolve();
        } catch (error) {
          console.error("Error importing content:", error);
          toast({
            variant: "destructive",
            title: "Import failed",
            description: "Failed to import content. Please check the file format.",
          });
          reject(error);
        }
      };
      
      reader.onerror = (error) => {
        console.error("Error reading file:", error);
        toast({
          variant: "destructive",
          title: "Import failed",
          description: "Failed to read the file.",
        });
        reject(error);
      };
      
      reader.readAsText(file);
    });
  };

  // Upload an image to the server
  const uploadImage = async (file: File): Promise<string> => {
    try {
      const formData = new FormData();
      formData.append('image', file);
      
      const response = await fetch('/api/content/upload-image', {
        method: 'POST',
        body: formData
      });
      
      if (!response.ok) {
        throw new Error(`Image upload failed with status: ${response.status}`);
      }
      
      const data = await response.json();
      return data.imageUrl;
    } catch (error) {
      console.error("Failed to upload image:", error);
      toast({
        title: "Image upload failed",
        description: "Could not upload image to server.",
        variant: "destructive"
      });
      throw error;
    }
  };

  return {
    saveContent,
    loadContent,
    exportContent,
    importContent,
    uploadImage
  };
};
