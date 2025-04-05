
// Mock server-side API implementation that would normally be handled by a real backend
// In a real app, these would be API handlers or serverless functions

import { CMSContent } from "@/types/cms";

// Simulated storage - in a real app this would be a database or file storage
const contentStorageKey = "hayat_cms_server_content";
const imageBasePath = "/images/cms/"; // Base path for images

// In a real app, these functions would talk to a database or file system
export const contentApi = {
  // Save content
  async save(content: CMSContent): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        // In a real app, this would save to a database or file
        // For now, we'll simulate by using localStorage with a different key
        localStorage.setItem(contentStorageKey, JSON.stringify(content));
        
        // Simulate network delay
        setTimeout(() => {
          resolve(true);
        }, 300);
      } catch (error) {
        reject(error);
      }
    });
  },
  
  // Load content
  async load(): Promise<CMSContent | null> {
    return new Promise((resolve, reject) => {
      try {
        // Simulate network delay
        setTimeout(() => {
          const contentStr = localStorage.getItem(contentStorageKey);
          if (contentStr) {
            resolve(JSON.parse(contentStr));
          } else {
            resolve(null);
          }
        }, 300);
      } catch (error) {
        reject(error);
      }
    });
  },
  
  // Upload image
  async uploadImage(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      try {
        // In a real app, this would upload to a cloud storage service
        // For demo purposes, we'll create a temporary URL
        const reader = new FileReader();
        
        reader.onload = () => {
          // Generate a unique filename (in a real app, this would be more robust)
          const filename = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
          
          // Store the image in local storage keyed by filename
          const imageData = reader.result as string;
          localStorage.setItem(`cms_image_${filename}`, imageData);
          
          // Create a path that our app can reference
          const imagePath = `${imageBasePath}${filename}`;
          
          // Simulate network delay
          setTimeout(() => {
            resolve(imagePath);
          }, 500);
        };
        
        reader.onerror = () => {
          reject(new Error('Failed to read image file'));
        };
        
        reader.readAsDataURL(file);
      } catch (error) {
        reject(error);
      }
    });
  }
};
