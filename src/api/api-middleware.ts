
import { contentApi } from './content-api';
import { defaultContent } from '@/lib/defaultContent';

/**
 * Sets up API middleware to intercept API requests and handle them client-side
 * In a production app, these would be real API calls to a server
 */
export function setupAPIMiddleware() {
  const originalFetch = window.fetch;
  
  window.fetch = async function(input: RequestInfo | URL, init?: RequestInit) {
    const url = typeof input === 'string' ? input : input instanceof URL ? input.toString() : input.url;
    
    // Handle content API endpoints
    if (url.includes('/api/content/')) {
      return handleContentAPI(url, init);
    }
    
    // For all other requests, use the original fetch
    return originalFetch(input, init);
  };
}

/**
 * Handle content API requests
 */
async function handleContentAPI(url: string, init?: RequestInit) {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 200));
  
  // Handle save content API
  if (url.includes('/api/content/save') && init?.method === 'POST') {
    try {
      const content = init.body ? JSON.parse(init.body.toString()) : null;
      if (!content) {
        return createErrorResponse('No content provided', 400);
      }
      
      await contentApi.save(content);
      return createJsonResponse({ success: true });
    } catch (error) {
      console.error('Error saving content:', error);
      return createErrorResponse('Failed to save content', 500);
    }
  }
  
  // Handle load content API
  if (url.includes('/api/content/load')) {
    try {
      const content = await contentApi.load();
      // Return default content if server returns null
      return createJsonResponse(content || defaultContent);
    } catch (error) {
      console.error('Error loading content:', error);
      // On error, return default content instead of an error
      return createJsonResponse(defaultContent);
    }
  }
  
  // Handle upload image API
  if (url.includes('/api/content/upload-image') && init?.method === 'POST') {
    try {
      if (!init.body || !(init.body instanceof FormData)) {
        return createErrorResponse('No image provided', 400);
      }
      
      const formData = init.body as FormData;
      const file = formData.get('image') as File;
      
      if (!file) {
        return createErrorResponse('No image file found', 400);
      }
      
      const imageUrl = await contentApi.uploadImage(file);
      return createJsonResponse({ imageUrl });
    } catch (error) {
      console.error('Error uploading image:', error);
      return createErrorResponse('Failed to upload image', 500);
    }
  }
  
  // If the API endpoint is not recognized
  return createErrorResponse('API endpoint not found', 404);
}

/**
 * Create a Response object with JSON data
 */
function createJsonResponse(data: any, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

/**
 * Create an error Response object
 */
function createErrorResponse(message: string, status = 500) {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
