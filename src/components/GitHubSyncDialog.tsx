
import { useState } from "react";
import { useContent } from "@/contexts/ContentContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Github, RefreshCw } from "lucide-react";

const GitHubSyncDialog = () => {
  const { syncFromGithub } = useContent();
  const [owner, setOwner] = useState("");
  const [repo, setRepo] = useState("");
  const [branch, setBranch] = useState("main");
  const [path, setPath] = useState("content.json");
  const [isSyncing, setIsSyncing] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSync = async () => {
    if (!owner || !repo) {
      return;
    }

    setIsSyncing(true);
    try {
      await syncFromGithub(owner, repo, branch, path);
    } finally {
      setIsSyncing(false);
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Github className="h-4 w-4" />
          Sync from GitHub
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Sync Content from GitHub</DialogTitle>
          <DialogDescription>
            Fetch content data from a GitHub repository to update your site.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="owner" className="text-right">
              Owner
            </Label>
            <Input
              id="owner"
              placeholder="github-username"
              className="col-span-3"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="repo" className="text-right">
              Repository
            </Label>
            <Input
              id="repo"
              placeholder="repository-name"
              className="col-span-3"
              value={repo}
              onChange={(e) => setRepo(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="branch" className="text-right">
              Branch
            </Label>
            <Input
              id="branch"
              placeholder="main"
              className="col-span-3"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="path" className="text-right">
              File Path
            </Label>
            <Input
              id="path"
              placeholder="content.json"
              className="col-span-3"
              value={path}
              onChange={(e) => setPath(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSync} disabled={isSyncing}>
            {isSyncing ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Syncing...
              </>
            ) : (
              <>
                <Github className="mr-2 h-4 w-4" />
                Sync Content
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default GitHubSyncDialog;
