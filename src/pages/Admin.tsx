
import React, { useState } from 'react';
import { useContent } from '@/contexts/ContentContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Save, RotateCcw, LockKeyhole } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { ContentItem } from '@/types/cms';

const Admin = () => {
  const { content, updateContentItem, resetToDefault } = useContent();
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [editingItem, setEditingItem] = useState<ContentItem | null>(null);
  const [editContent, setEditContent] = useState("");
  const { toast } = useToast();

  // This is a simple authentication - in a real app, you would want something more secure
  const authenticate = () => {
    if (password === "hayatadmin") { // Simple password for demo
      setAuthenticated(true);
      toast({
        title: "Authenticated",
        description: "Welcome to the Hayat Concierge CMS",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Authentication failed",
        description: "Please check your password and try again",
      });
    }
  };

  const handleEdit = (item: ContentItem) => {
    setEditingItem(item);
    setEditContent(item.content);
  };

  const handleSave = () => {
    if (editingItem) {
      updateContentItem(editingItem.id, editContent);
      setEditingItem(null);
    }
  };

  const handleReset = () => {
    if (confirm("Are you sure you want to reset all content to default values?")) {
      resetToDefault();
    }
  };

  // Simple login screen
  if (!authenticated) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center p-6">
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-navy">Hayat Concierge CMS</CardTitle>
            <CardDescription className="text-center">
              Please enter your password to access the content management system.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && authenticate()}
                  placeholder="Enter your password"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full button-primary" onClick={authenticate}>
              <LockKeyhole className="mr-2 h-4 w-4" />
              Login
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream p-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="heading-xl text-navy">Hayat Concierge CMS</h1>
          <Button variant="outline" className="text-red-600" onClick={handleReset}>
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset to Default
          </Button>
        </div>

        <Alert className="mb-8">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Important Note</AlertTitle>
          <AlertDescription>
            Changes made here will be stored in your browser's local storage. 
            This means they will persist between sessions but will be lost if you clear your browser data.
          </AlertDescription>
        </Alert>

        <Tabs defaultValue={content.sections[0].id}>
          <TabsList className="mb-8 flex flex-wrap bg-transparent">
            {content.sections.map((section) => (
              <TabsTrigger 
                key={section.id} 
                value={section.id}
                className="data-[state=active]:bg-navy data-[state=active]:text-white"
              >
                {section.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {content.sections.map((section) => (
            <TabsContent key={section.id} value={section.id} className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                {section.items.map((item) => (
                  <Card key={item.id}>
                    <CardHeader>
                      <CardTitle className="flex justify-between items-center">
                        <span>{item.title}</span>
                        <Button 
                          variant="ghost" 
                          onClick={() => handleEdit(item)}
                          className="text-navy hover:text-gold"
                        >
                          Edit
                        </Button>
                      </CardTitle>
                      <CardDescription>Last updated: {new Date(item.lastUpdated).toLocaleString()}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="whitespace-pre-wrap">{item.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Edit modal */}
      {editingItem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50">
          <Card className="w-full max-w-2xl">
            <CardHeader>
              <CardTitle>Edit Content: {editingItem.title}</CardTitle>
              <CardDescription>Section: {editingItem.section}</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                className="min-h-[200px]"
                placeholder="Enter content here..."
              />
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setEditingItem(null)}>
                Cancel
              </Button>
              <Button className="button-primary" onClick={handleSave}>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Admin;
