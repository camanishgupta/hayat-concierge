
import { CMSContent, ContentItem, ContentImage, ContentSection, Partner, PageType } from "@/types/cms";
import { toast } from "@/components/ui/use-toast";

/**
 * Collection of helper functions for content operations
 */
export const contentHelpers = {
  // Get a single content item by ID
  getContentItem: (content: CMSContent, id: string): ContentItem | undefined => {
    for (const section of content.sections) {
      const item = section.items.find(item => item.id === id);
      if (item) return item;
    }
    return undefined;
  },

  // Update a content item
  updateContentItem: (content: CMSContent, id: string, newContent: string, arContent?: string): CMSContent => {
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
      toast({
        title: "Content updated",
        description: "Your changes have been saved.",
      });
    }

    return updated ? updatedContent : content;
  },

  // Add a new content item
  addContentItem: (content: CMSContent, item: Partial<ContentItem>): CMSContent => {
    if (!item.section) return content;
    
    const updatedContent = { ...content };
    const sectionIndex = updatedContent.sections.findIndex(s => s.id === item.section);
    
    if (sectionIndex >= 0) {
      const newItem: ContentItem = {
        id: `custom-${Date.now()}`,
        section: item.section,
        title: item.title || 'New Item',
        content: item.content || '',
        arContent: item.arContent || '',
        page: item.page || 'all',
        lastUpdated: new Date().toISOString()
      };
      
      updatedContent.sections[sectionIndex].items.push(newItem);
      
      toast({
        title: "Item added",
        description: "New content item has been added.",
      });
      
      return updatedContent;
    }
    
    return content;
  },

  // Remove a content item
  removeContentItem: (content: CMSContent, id: string): CMSContent => {
    if (!confirm("Are you sure you want to remove this item?")) return content;
    
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
      toast({
        title: "Item removed",
        description: "The content item has been removed.",
      });
    }
    
    return removed ? updatedContent : content;
  },

  // Update an image URL
  updateContentImage: (content: CMSContent, id: string, newUrl: string): CMSContent => {
    const updatedContent = { ...content };
    const imageIndex = updatedContent.images.findIndex(img => img.id === id);
    
    if (imageIndex >= 0) {
      updatedContent.images[imageIndex] = {
        ...updatedContent.images[imageIndex],
        url: newUrl
      };
      
      toast({
        title: "Image updated",
        description: "Image URL has been updated.",
      });
      
      return updatedContent;
    }
    
    return content;
  },

  // Add a new image
  addContentImage: (content: CMSContent, image: Partial<ContentImage>): CMSContent => {
    const updatedContent = { ...content };
    const newImage: ContentImage = {
      id: `image-${Date.now()}`,
      name: image.name || 'New Image',
      description: image.description || '',
      url: image.url || 'https://via.placeholder.com/800x600?text=New+Image',
      page: image.page || 'all'
    };
    
    updatedContent.images.push(newImage);
    
    toast({
      title: "Image added",
      description: "New image has been added.",
    });
    
    return updatedContent;
  },

  // Remove an image
  removeContentImage: (content: CMSContent, id: string): CMSContent => {
    if (!confirm("Are you sure you want to remove this image?")) return content;
    
    const updatedContent = { ...content };
    const imageIndex = updatedContent.images.findIndex(img => img.id === id);
    
    if (imageIndex >= 0) {
      updatedContent.images.splice(imageIndex, 1);
      
      toast({
        title: "Image removed",
        description: "The image has been removed.",
      });
      
      return updatedContent;
    }
    
    return content;
  },

  // Add a new partner
  addPartner: (content: CMSContent, partner: Partner): CMSContent => {
    const updatedContent = { ...content };
    updatedContent.partners.push(partner);
    
    toast({
      title: "Partner added",
      description: "New partner has been added.",
    });
    
    return updatedContent;
  },

  // Remove a partner
  removePartner: (content: CMSContent, index: number): CMSContent => {
    if (!confirm("Are you sure you want to remove this partner?")) return content;
    
    const updatedContent = { ...content };
    updatedContent.partners.splice(index, 1);
    
    toast({
      title: "Partner removed",
      description: "The partner has been removed.",
    });
    
    return updatedContent;
  },

  // Get content filtered by page
  getContentByPage: (content: CMSContent, page: PageType) => {
    if (page === 'all') {
      return {
        sections: content.sections,
        images: content.images
      };
    }

    // Filter sections where the section's page matches the requested page
    // or where the section has 'all' as its page
    // or where section doesn't have a page specified
    const filteredSections = content.sections.filter(s => 
      !s.page || s.page === 'all' || s.page === page
    );

    // Filter images the same way
    const filteredImages = content.images.filter(i => 
      !i.page || i.page === 'all' || i.page === page
    );

    return {
      sections: filteredSections,
      images: filteredImages
    };
  }
};
