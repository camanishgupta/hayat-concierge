
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
      // In a real app, we would send to server, but here we'll just simulate it
      // by resolving after a short delay
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, 300);
      });
      
      toast({
        title: "Content saved",
        description: "Your changes have been saved successfully.",
      });
      return true;
    } catch (error) {
      console.error("Failed to save content to server:", error);
      toast({
        title: "Content saved locally",
        description: "Changes saved successfully.",
        variant: "default"
      });
      return false;
    }
  };

  // Load content with priority: localStorage > default
  const loadContent = async (): Promise<CMSContent> => {
    try {
      // Try to load from localStorage
      const storedContent = localStorage.getItem("hayatCMSContent");
      if (storedContent) {
        const parsedContent = JSON.parse(storedContent);
        return parsedContent;
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
          await saveContent(content);
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
      // In a real app, this would upload to a server
      // For now, we'll simulate by storing in localStorage
      const reader = new FileReader();
      
      return new Promise((resolve, reject) => {
        reader.onload = () => {
          try {
            // Generate a unique filename
            const filename = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
            
            // Store the image in local storage
            const imageData = reader.result as string;
            localStorage.setItem(`cms_image_${filename}`, imageData);
            
            // Create a path that our app can reference
            const imagePath = `/images/cms/${filename}`;
            
            // Simulate network delay
            setTimeout(() => {
              resolve(imagePath);
            }, 500);
          } catch (error) {
            reject(error);
          }
        };
        
        reader.onerror = () => {
          reject(new Error('Failed to read image file'));
        };
        
        reader.readAsDataURL(file);
      });
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
