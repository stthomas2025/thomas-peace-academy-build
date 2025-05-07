
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { 
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription 
} from "@/components/ui/dialog";
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { toast } from "@/components/ui/use-toast";
import { 
  PlusCircle, Edit, Trash2, Image, RefreshCcw, Eye
} from "lucide-react";
import { format } from "date-fns";

interface BannerImage {
  id: string;
  created_at: string;
  updated_at: string;
  image_url: string;
  title: string | null;
  subtitle: string | null;
  is_active: boolean;
}

interface BannerManagerProps {
  onError?: (error: string) => void;
}

const BannerManager = ({ onError }: BannerManagerProps) => {
  const [banners, setBanners] = useState<BannerImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentBanner, setCurrentBanner] = useState<Partial<BannerImage>>({
    title: "",
    subtitle: "",
    is_active: true
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const fetchBanners = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('banner_images')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setBanners(data || []);
    } catch (error: any) {
      console.error("Error fetching banners:", error);
      toast({
        variant: "destructive",
        title: "Error fetching banners",
        description: error.message || "Failed to fetch banner images"
      });
      if (onError) onError(error.message || "Failed to fetch banner images");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentBanner({
      ...currentBanner,
      [e.target.name]: e.target.value
    });
  };

  const handleSwitchChange = (checked: boolean) => {
    setCurrentBanner({
      ...currentBanner,
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
        .from('banners')
        .upload(filePath, imageFile, {
          cacheControl: '3600',
          upsert: false
        });
      
      if (error) throw error;
      
      // Get the public URL
      const { data: urlData } = supabase.storage
        .from('banners')
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
      let imageUrl = currentBanner.image_url;
      
      // If there's a new image file, upload it first
      if (imageFile) {
        imageUrl = await uploadImage();
        if (!imageUrl) return; // Stop if upload failed
      }
      
      // Check if we have an image URL (required for new banners)
      if (!imageUrl && !currentBanner.id) {
        toast({
          variant: "destructive",
          title: "Missing image",
          description: "Please upload an image for the banner"
        });
        return;
      }
      
      const bannerData = {
        title: currentBanner.title,
        subtitle: currentBanner.subtitle,
        image_url: imageUrl,
        is_active: currentBanner.is_active
      };
      
      let result;
      
      if (currentBanner.id) {
        // Update existing banner
        result = await supabase
          .from('banner_images')
          .update({
            ...bannerData,
            updated_at: new Date().toISOString()
          })
          .eq('id', currentBanner.id);
      } else {
        // Create new banner
        result = await supabase
          .from('banner_images')
          .insert(bannerData);
      }
      
      if (result.error) throw result.error;
      
      toast({
        title: currentBanner.id ? "Banner updated" : "Banner created",
        description: currentBanner.id 
          ? "The banner has been updated successfully" 
          : "The banner has been created successfully"
      });
      
      setIsDialogOpen(false);
      setImageFile(null);
      setPreviewUrl(null);
      fetchBanners();
    } catch (error: any) {
      console.error("Error saving banner:", error);
      toast({
        variant: "destructive",
        title: "Error saving banner",
        description: error.message || "Failed to save banner"
      });
    }
  };

  const handleDelete = async () => {
    if (!currentBanner.id) return;
    
    try {
      // If the banner has an image, delete it from storage
      if (currentBanner.image_url) {
        const imagePath = currentBanner.image_url.split('/').pop();
        if (imagePath) {
          await supabase.storage
            .from('banners')
            .remove([imagePath]);
        }
      }
      
      // Delete the banner from the database
      const { error } = await supabase
        .from('banner_images')
        .delete()
        .eq('id', currentBanner.id);
      
      if (error) throw error;
      
      toast({
        title: "Banner deleted",
        description: "The banner has been deleted successfully"
      });
      
      setIsDeleteDialogOpen(false);
      fetchBanners();
    } catch (error: any) {
      console.error("Error deleting banner:", error);
      toast({
        variant: "destructive",
        title: "Error deleting banner",
        description: error.message || "Failed to delete banner"
      });
    }
  };

  const openEditDialog = (banner: BannerImage) => {
    setCurrentBanner(banner);
    setPreviewUrl(banner.image_url);
    setIsDialogOpen(true);
  };

  const openDeleteDialog = (banner: BannerImage) => {
    setCurrentBanner(banner);
    setIsDeleteDialogOpen(true);
  };

  const openCreateDialog = () => {
    setCurrentBanner({
      title: "",
      subtitle: "",
      is_active: true,
      image_url: null
    });
    setImageFile(null);
    setPreviewUrl(null);
    setIsDialogOpen(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-school-dark">Banner Images</h2>
        <div className="flex space-x-2">
          <Button onClick={openCreateDialog} className="flex items-center">
            <PlusCircle className="h-4 w-4 mr-2" />
            Add New Banner
          </Button>
          <Button onClick={fetchBanners} variant="outline" size="icon">
            <RefreshCcw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
          </Button>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-10">
          <RefreshCcw className="h-8 w-8 animate-spin mx-auto text-school-primary" />
          <p className="mt-2 text-gray-600">Loading banners...</p>
        </div>
      ) : banners.length === 0 ? (
        <div className="text-center py-10 bg-gray-50 rounded-lg">
          <p className="text-gray-600">No banner images found.</p>
        </div>
      ) : (
        <div className="rounded-md border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Subtitle</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date Added</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {banners.map((banner) => (
                <TableRow key={banner.id}>
                  <TableCell>
                    <img 
                      src={banner.image_url} 
                      alt={banner.title || "Banner"} 
                      className="w-16 h-10 object-cover rounded-sm"
                    />
                  </TableCell>
                  <TableCell>{banner.title || "—"}</TableCell>
                  <TableCell className="truncate max-w-[200px]">
                    {banner.subtitle || "—"}
                  </TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      banner.is_active 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {banner.is_active ? "Active" : "Inactive"}
                    </span>
                  </TableCell>
                  <TableCell>
                    {format(new Date(banner.created_at), 'MMM d, yyyy')}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => openEditDialog(banner)}
                      >
                        <Edit className="h-4 w-4 mr-1" /> Edit
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="text-red-500 hover:text-red-700"
                        onClick={() => openDeleteDialog(banner)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      {/* Create/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              {currentBanner.id ? "Edit Banner" : "Add New Banner"}
            </DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4 pt-4">
            <div className="grid gap-4">
              <div>
                <Label htmlFor="image">Banner Image</Label>
                <div className="mt-1">
                  {previewUrl && (
                    <div className="mb-3">
                      <img 
                        src={previewUrl} 
                        alt="Preview" 
                        className="h-40 object-cover rounded-md"
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
                <Label htmlFor="title">Title (Optional)</Label>
                <Input
                  id="title"
                  name="title"
                  value={currentBanner.title || ""}
                  onChange={handleInputChange}
                />
              </div>
              
              <div>
                <Label htmlFor="subtitle">Subtitle (Optional)</Label>
                <Input
                  id="subtitle"
                  name="subtitle"
                  value={currentBanner.subtitle || ""}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch 
                  id="is_active" 
                  checked={currentBanner.is_active} 
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
                ) : currentBanner.id ? "Update Banner" : "Create Banner"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      
      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Banner</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this banner? This action cannot be undone.
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

export default BannerManager;
