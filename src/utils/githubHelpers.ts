
import { CMSContent } from "@/types/cms";
import { toast } from "@/components/ui/use-toast";

/**
 * Fetches content from a GitHub repository and merges it with existing content
 * @param repoOwner - GitHub repository owner name
 * @param repoName - GitHub repository name
 * @param branch - Branch to fetch from (defaults to main)
 * @param path - Path to the content file in the repository
 * @returns Updated content
 */
export const fetchContentFromGithub = async (
  repoOwner: string, 
  repoName: string, 
  branch = 'main',
  path = 'content.json'
): Promise<CMSContent | null> => {
  try {
    // Construct GitHub raw content URL
    const url = `https://raw.githubusercontent.com/${repoOwner}/${repoName}/${branch}/${path}`;
    
    // Fetch the content
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch content: ${response.status} ${response.statusText}`);
    }
    
    // Parse the JSON content
    const data = await response.json();
    
    // Basic validation to ensure it has the expected structure
    if (!data.sections || !data.images || !data.partners) {
      throw new Error('Invalid content format: missing required fields');
    }
    
    toast({
      title: "Content synced from GitHub",
      description: `Successfully fetched content from ${repoOwner}/${repoName}`,
    });
    
    return data as CMSContent;
  } catch (error) {
    console.error('Error fetching content from GitHub:', error);
    toast({
      variant: "destructive",
      title: "Sync failed",
      description: `Failed to fetch content from GitHub: ${(error as Error).message}`,
    });
    
    return null;
  }
};
