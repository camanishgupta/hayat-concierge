
export interface ContentItem {
  id: string;
  section: string;
  title: string;
  content: string;
  lastUpdated: string;
}

export interface ContentSection {
  id: string;
  name: string;
  description: string;
  items: ContentItem[];
}

export interface CMSContent {
  sections: ContentSection[];
}
