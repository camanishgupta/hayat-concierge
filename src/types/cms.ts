
export interface ContentItem {
  id: string;
  section: string;
  title: string;
  content: string;
  arContent?: string;
  lastUpdated: string;
}

export interface ContentSection {
  id: string;
  name: string;
  description: string;
  items: ContentItem[];
}

export interface ContentImage {
  id: string;
  name: string;
  description: string;
  url: string;
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
