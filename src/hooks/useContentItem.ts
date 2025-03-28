
import { useContent } from "@/contexts/ContentContext";

export const useContentItem = (id: string): string => {
  const { getContentItem } = useContent();
  const item = getContentItem(id);
  return item?.content || "";
};
