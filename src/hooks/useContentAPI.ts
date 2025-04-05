
import { CMSContent } from "@/types/cms";
import { defaultContent } from "@/lib/defaultContent";
import { toast } from "@/components/ui/use-toast";

// This hook provides methods to fetch and update content data
export const useContentAPI = () => {
  const saveContent = (content: CMSContent) => {
    localStorage.setItem("hayatCMSContent", JSON.stringify(content));
    toast({
      title: "Content saved",
      description: "Your changes have been saved to local storage.",
    });
  };

  const loadContent = (): CMSContent => {
    try {
      const storedContent = localStorage.getItem("hayatCMSContent");
      if (storedContent) {
        return JSON.parse(storedContent);
      }
      return defaultContent;
    } catch (e) {
      console.error("Failed to parse stored content:", e);
      localStorage.removeItem("hayatCMSContent");
      return defaultContent;
    }
  };

  // Method to export content to a JSON file for backup
  const exportContent = () => {
    const content = loadContent();
    const contentStr = JSON.stringify(content, null, 2);
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
      
      reader.onload = (e) => {
        try {
          const content = JSON.parse(e.target?.result as string);
          saveContent(content);
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

  return {
    saveContent,
    loadContent,
    exportContent,
    importContent
  };
};
