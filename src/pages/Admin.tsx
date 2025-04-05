
import React, { useState, useCallback, useEffect } from 'react';
import { useContent } from '@/contexts/ContentContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertCircle, Save, RotateCcw, LockKeyhole, Image, Plus, Trash } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { ContentItem, ContentSection, ContentImage } from '@/types/cms';
import { useLanguage } from '@/contexts/LanguageContext';

const Admin = () => {
  const { content, updateContentItem, resetToDefault, addContentItem, removeContentItem, addPartner, removePartner, updateContentImage } = useContent();
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [editingItem, setEditingItem] = useState<ContentItem | null>(null);
  const [editContent, setEditContent] = useState("");
  const [editArContent, setEditArContent] = useState("");
  const [editingImage, setEditingImage] = useState<ContentImage | null>(null);
  const [newImageUrl, setNewImageUrl] = useState("");
  const { toast } = useToast();
  const { language } = useLanguage();
  const [newPartner, setNewPartner] = useState({
    name: '',
    type: 'Medical',
    logo: 'https://via.placeholder.com/150x80?text=New+Partner'
  });

  const [newContentItem, setNewContentItem] = useState({
    section: '',
    title: '',
    content: '',
    arContent: ''
  });

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

  const handleEdit = useCallback((item: ContentItem) => {
    setEditingItem(item);
    setEditContent(item.content);
    setEditArContent(item.arContent || '');
  }, []);

  const handleEditImage = useCallback((image: ContentImage) => {
    setEditingImage(image);
    setNewImageUrl(image.url);
  }, []);

  const handleSave = () => {
    if (editingItem) {
      updateContentItem(editingItem.id, editContent, editArContent);
      setEditingItem(null);
    }
  };

  const handleSaveImage = () => {
    if (editingImage) {
      updateContentImage(editingImage.id, newImageUrl);
      setEditingImage(null);
      setNewImageUrl("");
    }
  };

  const handleReset = () => {
    if (confirm("Are you sure you want to reset all content to default values?")) {
      resetToDefault();
    }
  };

  const handleAddItem = () => {
    if (newContentItem.section && newContentItem.title && newContentItem.content) {
      addContentItem({
        section: newContentItem.section,
        title: newContentItem.title,
        content: newContentItem.content,
        arContent: newContentItem.arContent
      });
      setNewContentItem({
        section: '',
        title: '',
        content: '',
        arContent: ''
      });
      toast({
        title: "Content Added",
        description: "New content item has been added.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Missing Information",
        description: "Please fill in all required fields.",
      });
    }
  };

  const handleAddPartner = () => {
    if (newPartner.name && newPartner.logo) {
      addPartner(newPartner);
      setNewPartner({
        name: '',
        type: 'Medical',
        logo: 'https://via.placeholder.com/150x80?text=New+Partner'
      });
      toast({
        title: "Partner Added",
        description: "New partner has been added.",
      });
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
            <TabsTrigger value="images" className="data-[state=active]:bg-navy data-[state=active]:text-white">
              Images
            </TabsTrigger>
            <TabsTrigger value="partners" className="data-[state=active]:bg-navy data-[state=active]:text-white">
              Partners
            </TabsTrigger>
            <TabsTrigger value="add-content" className="data-[state=active]:bg-navy data-[state=active]:text-white">
              Add Content
            </TabsTrigger>
          </TabsList>

          {/* Content Sections */}
          {content.sections.map((section) => (
            <TabsContent key={section.id} value={section.id} className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                {section.items.map((item) => (
                  <Card key={item.id}>
                    <CardHeader>
                      <CardTitle className="flex justify-between items-center">
                        <span>{item.title}</span>
                        <div className="flex gap-2">
                          <Button 
                            variant="ghost" 
                            onClick={() => handleEdit(item)}
                            className="text-navy hover:text-gold"
                          >
                            Edit
                          </Button>
                          <Button
                            variant="ghost"
                            onClick={() => removeContentItem(item.id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <Trash size={16} />
                          </Button>
                        </div>
                      </CardTitle>
                      <CardDescription>Last updated: {new Date(item.lastUpdated).toLocaleString()}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h3 className="font-medium mb-2">English:</h3>
                          <p className="whitespace-pre-wrap">{item.content}</p>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Arabic:</h3>
                          <p className="whitespace-pre-wrap text-right" dir="rtl">{item.arContent || "No Arabic translation available"}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}

          {/* Images Section */}
          <TabsContent value="images" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.images.map((image) => (
                <Card key={image.id}>
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>{image.name}</span>
                      <Button 
                        variant="ghost" 
                        onClick={() => handleEditImage(image)}
                        className="text-navy hover:text-gold"
                      >
                        <Image className="mr-2 h-4 w-4" />
                        Edit
                      </Button>
                    </CardTitle>
                    <CardDescription>{image.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video relative overflow-hidden rounded-md border">
                      <img 
                        src={image.url} 
                        alt={image.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Partners Section */}
          <TabsContent value="partners" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Add New Partner</CardTitle>
                <CardDescription>Add a new partner to showcase on the website</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <Label htmlFor="partnerName">Partner Name</Label>
                    <Input
                      id="partnerName"
                      value={newPartner.name}
                      onChange={(e) => setNewPartner({...newPartner, name: e.target.value})}
                      placeholder="Enter partner name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="partnerType">Partner Type</Label>
                    <Select 
                      value={newPartner.type}
                      onValueChange={(value) => setNewPartner({...newPartner, type: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Medical">Medical</SelectItem>
                        <SelectItem value="Accommodation">Accommodation</SelectItem>
                        <SelectItem value="Wellness">Wellness</SelectItem>
                        <SelectItem value="Transportation">Transportation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="partnerLogo">Partner Logo URL</Label>
                    <Input
                      id="partnerLogo"
                      value={newPartner.logo}
                      onChange={(e) => setNewPartner({...newPartner, logo: e.target.value})}
                      placeholder="https://example.com/logo.png"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="button-primary w-full" onClick={handleAddPartner}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Partner
                </Button>
              </CardFooter>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.partners.map((partner, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>{partner.name}</span>
                      <Button
                        variant="ghost"
                        onClick={() => removePartner(index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash size={16} />
                      </Button>
                    </CardTitle>
                    <CardDescription>{partner.type}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-24 flex items-center justify-center bg-gray-100 rounded-md">
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="max-h-20 max-w-full"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Add Content Section */}
          <TabsContent value="add-content" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Add New Content Item</CardTitle>
                <CardDescription>Create a new content item for any section</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <Label htmlFor="contentSection">Section</Label>
                    <Select 
                      value={newContentItem.section}
                      onValueChange={(value) => setNewContentItem({...newContentItem, section: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select section" />
                      </SelectTrigger>
                      <SelectContent>
                        {content.sections.map(section => (
                          <SelectItem key={section.id} value={section.id}>{section.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="contentTitle">Title</Label>
                    <Input
                      id="contentTitle"
                      value={newContentItem.title}
                      onChange={(e) => setNewContentItem({...newContentItem, title: e.target.value})}
                      placeholder="Enter content title"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contentValue">English Content</Label>
                    <Textarea
                      id="contentValue"
                      value={newContentItem.content}
                      onChange={(e) => setNewContentItem({...newContentItem, content: e.target.value})}
                      placeholder="Enter content in English"
                      rows={5}
                    />
                  </div>
                  <div>
                    <Label htmlFor="arContentValue">Arabic Content</Label>
                    <Textarea
                      id="arContentValue"
                      value={newContentItem.arContent}
                      onChange={(e) => setNewContentItem({...newContentItem, arContent: e.target.value})}
                      placeholder="Enter content in Arabic"
                      rows={5}
                      dir="rtl"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="button-primary w-full" onClick={handleAddItem}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Content Item
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Edit modal for text content */}
      {editingItem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50">
          <Card className="w-full max-w-3xl">
            <CardHeader>
              <CardTitle>Edit Content: {editingItem.title}</CardTitle>
              <CardDescription>Section: {editingItem.section}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="enContent">English Content:</Label>
                <Textarea
                  id="enContent"
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  className="min-h-[200px]"
                  placeholder="Enter content in English..."
                />
              </div>
              <div>
                <Label htmlFor="arContent">Arabic Content:</Label>
                <Textarea
                  id="arContent"
                  value={editArContent}
                  onChange={(e) => setEditArContent(e.target.value)}
                  className="min-h-[200px]"
                  placeholder="Enter content in Arabic..."
                  dir="rtl"
                />
              </div>
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

      {/* Edit modal for images */}
      {editingImage && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50">
          <Card className="w-full max-w-2xl">
            <CardHeader>
              <CardTitle>Edit Image: {editingImage.name}</CardTitle>
              <CardDescription>{editingImage.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="aspect-video relative overflow-hidden rounded-md border mb-4">
                  <img 
                    src={editingImage.url} 
                    alt={editingImage.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <Label htmlFor="newImageUrl">New Image URL:</Label>
                  <Input
                    id="newImageUrl"
                    value={newImageUrl}
                    onChange={(e) => setNewImageUrl(e.target.value)}
                    placeholder="Enter new image URL..."
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setEditingImage(null)}>
                Cancel
              </Button>
              <Button className="button-primary" onClick={handleSaveImage}>
                <Save className="mr-2 h-4 w-4" />
                Update Image
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Admin;
