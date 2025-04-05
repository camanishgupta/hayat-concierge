
export interface ContentItem {
  id: string;
  section: string;
  title: string;
  content: string;
  arContent?: string;
  lastUpdated: string;
  page?: string; // Adding page field to better organize content
}

export interface ContentSection {
  id: string;
  name: string;
  description: string;
  items: ContentItem[];
  page?: string; // Adding page field to better organize sections
}

export interface ContentImage {
  id: string;
  name: string;
  description: string;
  url: string;
  page?: string; // Adding page field to better organize images
}

export interface Partner {
  name: string;
  type: string;
  logo: string;
}

export interface CMSContent {
  sections: ContentSection[];
  images: ContentImage[];
  partners: Partner[];
}

// Page types to help organize content
export type PageType = 'home' | 'about' | 'services' | 'founder' | 'partners' | 'facilities' | 'all';
