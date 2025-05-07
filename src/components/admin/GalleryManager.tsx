
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { 
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription 
} from "@/components/ui/dialog";
import { toast } from "@/components/ui/use-toast";
import { 
  PlusCircle, Edit, Trash2, Image, RefreshCcw, Eye
} from "lucide-react";
import { format } from "date-fns";
import { Card, CardContent } from "@/components/ui/card";

interface GalleryImage {
  id: string;
  created_at: string;
  updated_at: string;
  image_url: string;
  caption: string | null;
  is_active: boolean;
}

interface GalleryManagerProps {
  onError?: (error: string) => void;
}

const GalleryManager = ({ onError }: GalleryManagerProps) => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<Partial<GalleryImage>>({
    caption: "",
    is_active: true
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchImages = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('gallery_images')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setImages(data || []);
    } catch (error: any) {
      console.error("Error fetching gallery images:", error);
      toast({
        variant: "destructive",
        title: "Error fetching gallery",
        description: error.message || "Failed to fetch gallery images"
      });
      if (onError) onError(error.message || "Failed to fetch gallery images");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentImage({
      ...currentImage,
      [e.target.name]: e.target.value
    });
  };

  const handleSwitchChange = (checked: boolean) => {
    setCurrentImage({
      ...currentImage,
      is_active: checked
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Only allow image files
      if (file.type.startsWith("image/")) {
        setImageFile(file);
        setPreviewUrl(URL.createObjectURL(file));
      } else {
        toast({
          variant: "destructive",
          title: "Invalid file type",
          description: "Please upload an image file"
        });
        e.target.value = "";
      }
    }
  };

  const uploadImage = async () => {
    if (!imageFile) return null;
    
    setIsUploading(true);
    
    // Create a unique file path
    const fileExt = imageFile.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `${fileName}`;
    
    try {
      const { data, error } = await supabase.storage
        .from('gallery')
        .upload(filePath, imageFile, {
          cacheControl: '3600',
          upsert: false
        });
      
      if (error) throw error;
      
      // Get the public URL
      const { data: urlData } = supabase.storage
        .from('gallery')
        .getPublicUrl(filePath);
      
      return urlData.publicUrl;
    } catch (error: any) {
      console.error("Error uploading image:", error);
      toast({
        variant: "destructive",
        title: "Upload failed",
        description: error.message || "Failed to upload image"
      });
      return null;
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      let imageUrl = currentImage.image_url;
      
      // If there's a new image file, upload it first
      if (imageFile) {
        imageUrl = await uploadImage();
        if (!imageUrl) return; // Stop if upload failed
      }
      
      // Check if we have an image URL (required for new images)
      if (!imageUrl && !currentImage.id) {
        toast({
          variant: "destructive",
          title: "Missing image",
          description: "Please upload an image"
        });
        return;
      }
      
      const imageData = {
        caption: currentImage.caption,
        image_url: imageUrl,
        is_active: currentImage.is_active
      };
      
      let result;
      
      if (currentImage.id) {
        // Update existing image
        result = await supabase
          .from('gallery_images')
          .update({
            ...imageData,
            updated_at: new Date().toISOString()
          })
          .eq('id', currentImage.id);
      } else {
        // Create new image
        result = await supabase
          .from('gallery_images')
          .insert(imageData);
      }
      
      if (result.error) throw result.error;
      
      toast({
        title: currentImage.id ? "Gallery image updated" : "Gallery image added",
        description: currentImage.id 
          ? "The gallery image has been updated successfully" 
          : "The gallery image has been added successfully"
      });
      
      setIsDialogOpen(false);
      setImageFile(null);
      setPreviewUrl(null);
      fetchImages();
    } catch (error: any) {
      console.error("Error saving gallery image:", error);
      toast({
        variant: "destructive",
        title: "Error saving gallery image",
        description: error.message || "Failed to save gallery image"
      });
    }
  };

  const handleDelete = async () => {
    if (!currentImage.id) return;
    
    try {
      // If the gallery has an image, delete it from storage
      if (currentImage.image_url) {
        const imagePath = currentImage.image_url.split('/').pop();
        if (imagePath) {
          await supabase.storage
            .from('gallery')
            .remove([imagePath]);
        }
      }
      
      // Delete the image from the database
      const { error } = await supabase
        .from('gallery_images')
        .delete()
        .eq('id', currentImage.id);
      
      if (error) throw error;
      
      toast({
        title: "Gallery image deleted",
        description: "The gallery image has been deleted successfully"
      });
      
      setIsDeleteDialogOpen(false);
      fetchImages();
    } catch (error: any) {
      console.error("Error deleting gallery image:", error);
      toast({
        variant: "destructive",
        title: "Error deleting image",
        description: error.message || "Failed to delete gallery image"
      });
    }
  };

  const openEditDialog = (image: GalleryImage) => {
    setCurrentImage(image);
    setPreviewUrl(image.image_url);
    setIsDialogOpen(true);
  };

  const openDeleteDialog = (image: GalleryImage) => {
    setCurrentImage(image);
    setIsDeleteDialogOpen(true);
  };

  const openCreateDialog = () => {
    setCurrentImage({
      caption: "",
      is_active: true,
      image_url: null
    });
    setImageFile(null);
    setPreviewUrl(null);
    setIsDialogOpen(true);
  };

  const filteredImages = images.filter(img =>
    !searchTerm || 
    (img.caption && img.caption.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-school-dark">Gallery Images</h2>
        <div className="flex space-x-2">
          <div className="relative">
            <Input
              placeholder="Search by caption..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-[250px]"
            />
          </div>
          <Button onClick={openCreateDialog} className="flex items-center">
            <PlusCircle className="h-4 w-4 mr-2" />
            Add New Image
          </Button>
          <Button onClick={fetchImages} variant="outline" size="icon">
            <RefreshCcw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
          </Button>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-10">
          <RefreshCcw className="h-8 w-8 animate-spin mx-auto text-school-primary" />
          <p className="mt-2 text-gray-600">Loading gallery images...</p>
        </div>
      ) : filteredImages.length === 0 ? (
        <div className="text-center py-10 bg-gray-50 rounded-lg">
          <p className="text-gray-600">No gallery images found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <Card key={image.id} className="overflow-hidden">
              <div className="relative group">
                <img 
                  src={image.image_url} 
                  alt={image.caption || "Gallery image"} 
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex gap-2">
                    <Button 
                      variant="secondary" 
                      size="sm"
                      onClick={() => openEditDialog(image)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="destructive" 
                      size="sm"
                      onClick={() => openDeleteDialog(image)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                {!image.is_active && (
                  <div className="absolute top-2 right-2 bg-gray-800 text-white text-xs py-1 px-2 rounded">
                    Inactive
                  </div>
                )}
              </div>
              <CardContent className="p-3">
                <p className="text-sm truncate">
                  {image.caption || "No caption"}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {format(new Date(image.created_at), 'MMM d, yyyy')}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Create/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>
              {currentImage.id ? "Edit Gallery Image" : "Add New Gallery Image"}
            </DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4 pt-4">
            <div className="grid gap-4">
              <div>
                <Label htmlFor="image">Image</Label>
                <div className="mt-1">
                  {previewUrl && (
                    <div className="mb-3">
                      <img 
                        src={previewUrl} 
                        alt="Preview" 
                        className="h-48 w-full object-cover rounded-md"
                      />
                    </div>
                  )}
                  <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="caption">Caption</Label>
                <Input
                  id="caption"
                  name="caption"
                  value={currentImage.caption || ""}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch 
                  id="is_active" 
                  checked={currentImage.is_active} 
                  onCheckedChange={handleSwitchChange}
                />
                <Label htmlFor="is_active">Active</Label>
              </div>
            </div>
            
            <DialogFooter>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setIsDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isUploading}>
                {isUploading ? (
                  <>
                    <RefreshCcw className="h-4 w-4 mr-2 animate-spin" />
                    Uploading...
                  </>
                ) : currentImage.id ? "Update Image" : "Add Image"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      
      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Gallery Image</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this gallery image? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setIsDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button 
              variant="destructive" 
              onClick={handleDelete}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GalleryManager;
