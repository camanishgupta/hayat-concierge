
import { ContentAPIEndpoints } from "@/types/cms";
import { contentApi } from "./content-api";

// This middleware intercepts fetch requests to our API endpoints
// and redirects them to our simulated API implementation
export const setupAPIMiddleware = () => {
  const originalFetch = window.fetch;
  
  window.fetch = function(input: RequestInfo | URL, init?: RequestInit) {
    const url = typeof input === 'string' ? input : input instanceof URL ? input.toString() : input.url;
    
    // Handle content save endpoint
    if (url === ContentAPIEndpoints.save) {
      return handleSaveContent(init);
    }
    
    // Handle content load endpoint
    if (url === ContentAPIEndpoints.load) {
      return handleLoadContent();
    }
    
    // Handle image upload endpoint
    if (url === ContentAPIEndpoints.uploadImage) {
      return handleImageUpload(init);
    }
    
    // Pass through all other requests to the original fetch
    return originalFetch(input, init);
  };
  
  const handleSaveContent = async (init?: RequestInit): Promise<Response> => {
    try {
      if (!init?.body) {
        return createErrorResponse("No content provided");
      }
      
      const content = JSON.parse(init.body.toString());
      await contentApi.save(content);
      
      return createResponse({ success: true });
    } catch (error) {
      console.error("API Middleware - Save Content Error:", error);
      return createErrorResponse("Failed to save content");
    }
  };
  
  const handleLoadContent = async (): Promise<Response> => {
    try {
      const content = await contentApi.load();
      
      if (!content) {
        return createErrorResponse("No content found", 404);
      }
      
      return createResponse(content);
    } catch (error) {
      console.error("API Middleware - Load Content Error:", error);
      return createErrorResponse("Failed to load content");
    }
  };
  
  const handleImageUpload = async (init?: RequestInit): Promise<Response> => {
    try {
      if (!init?.body || !(init.body instanceof FormData)) {
        return createErrorResponse("No image provided or invalid format");
      }
      
      const formData = init.body as FormData;
      const imageFile = formData.get('image') as File;
      
      if (!imageFile) {
        return createErrorResponse("No image file found in request");
      }
      
      const imageUrl = await contentApi.uploadImage(imageFile);
      
      return createResponse({ imageUrl });
    } catch (error) {
      console.error("API Middleware - Image Upload Error:", error);
      return createErrorResponse("Failed to upload image");
    }
  };
  
  const createResponse = (data: any): Response => {
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  };
  
  const createErrorResponse = (message: string, status = 400): Response => {
    return new Response(JSON.stringify({ error: message }), {
      status: status,
      headers: { 'Content-Type': 'application/json' }
    });
  };
};
