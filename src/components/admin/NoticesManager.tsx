import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
  PlusCircle, Edit, Trash2, FileUp, RefreshCcw, FileCheck, ExternalLink, Eye
} from "lucide-react";
import { format } from "date-fns";

interface Notice {
  id: string;
  created_at: string;
  updated_at: string;
  heading: string;
  description: string | null;
  pdf_url: string | null;
  is_active: boolean;
}

interface NoticesManagerProps {
  onError?: (error: string) => void;
}

const NoticesManager = ({ onError }: NoticesManagerProps) => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentNotice, setCurrentNotice] = useState<Partial<Notice>>({
    heading: "",
    description: "",
    is_active: true
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const fetchNotices = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('notices')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setNotices(data || []);
    } catch (error: any) {
      console.error("Error fetching notices:", error);
      toast({
        variant: "destructive",
        title: "Error fetching notices",
        description: error.message || "Failed to fetch notices"
      });
      if (onError) onError(error.message || "Failed to fetch notices");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCurrentNotice({
      ...currentNotice,
      [e.target.name]: e.target.value
    });
  };

  const handleSwitchChange = (checked: boolean) => {
    setCurrentNotice({
      ...currentNotice,
      is_active: checked
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPdfFile(file);
    }
  };

  const uploadPdf = async () => {
    if (!pdfFile) return null;
    
    setIsUploading(true);
    setUploadProgress(0);
    
    // Create a unique file path
    const fileExt = pdfFile.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `${fileName}`;
    
    try {
      const { data, error } = await supabase.storage
        .from('notices')
        .upload(filePath, pdfFile, {
          cacheControl: '3600',
          upsert: false
        });
      
      if (error) throw error;
      
      // Get the public URL
      const { data: urlData } = supabase.storage
        .from('notices')
        .getPublicUrl(filePath);
      
      setUploadProgress(100);
      return urlData.publicUrl;
    } catch (error: any) {
      console.error("Error uploading file:", error);
      toast({
        variant: "destructive",
        title: "Upload failed",
        description: error.message || "Failed to upload file"
      });
      return null;
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      let pdfUrl = currentNotice.pdf_url;
      
      // If there's a new PDF file, upload it first
      if (pdfFile) {
        pdfUrl = await uploadPdf();
        if (!pdfUrl) return; // Stop if upload failed
      }
      
      const noticeData = {
        heading: currentNotice.heading,
        description: currentNotice.description,
        pdf_url: pdfUrl,
        is_active: currentNotice.is_active
      };
      
      let result;
      
      if (currentNotice.id) {
        // Update existing notice
        result = await supabase
          .from('notices')
          .update({
            ...noticeData,
            updated_at: new Date().toISOString()
          })
          .eq('id', currentNotice.id);
      } else {
        // Create new notice
        result = await supabase
          .from('notices')
          .insert(noticeData);
      }
      
      if (result.error) throw result.error;
      
      toast({
        title: currentNotice.id ? "Notice updated" : "Notice created",
        description: currentNotice.id 
          ? "The notice has been updated successfully" 
          : "The notice has been created successfully"
      });
      
      setIsDialogOpen(false);
      setPdfFile(null);
      fetchNotices();
    } catch (error: any) {
      console.error("Error saving notice:", error);
      toast({
        variant: "destructive",
        title: "Error saving notice",
        description: error.message || "Failed to save notice"
      });
    }
  };

  const handleDelete = async () => {
    if (!currentNotice.id) return;
    
    try {
      // If the notice has a PDF, delete it from storage
      if (currentNotice.pdf_url) {
        const pdfPath = currentNotice.pdf_url.split('/').pop();
        if (pdfPath) {
          await supabase.storage
            .from('notices')
            .remove([pdfPath]);
        }
      }
      
      // Delete the notice from the database
      const { error } = await supabase
        .from('notices')
        .delete()
        .eq('id', currentNotice.id);
      
      if (error) throw error;
      
      toast({
        title: "Notice deleted",
        description: "The notice has been deleted successfully"
      });
      
      setIsDeleteDialogOpen(false);
      fetchNotices();
    } catch (error: any) {
      console.error("Error deleting notice:", error);
      toast({
        variant: "destructive",
        title: "Error deleting notice",
        description: error.message || "Failed to delete notice"
      });
    }
  };

  const openEditDialog = (notice: Notice) => {
    setCurrentNotice(notice);
    setIsDialogOpen(true);
  };

  const openDeleteDialog = (notice: Notice) => {
    setCurrentNotice(notice);
    setIsDeleteDialogOpen(true);
  };

  const openCreateDialog = () => {
    setCurrentNotice({
      heading: "",
      description: "",
      is_active: true,
      pdf_url: null
    });
    setPdfFile(null);
    setIsDialogOpen(true);
  };

  const filteredNotices = notices.filter(notice =>
    notice.heading.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (notice.description && notice.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-school-dark">School Notices</h2>
        <div className="flex space-x-2">
          <div className="relative">
            <Input
              placeholder="Search notices..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-[250px]"
            />
          </div>
          <Button onClick={openCreateDialog} className="flex items-center">
            <PlusCircle className="h-4 w-4 mr-2" />
            Add New Notice
          </Button>
          <Button onClick={fetchNotices} variant="outline" size="icon">
            <RefreshCcw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
          </Button>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-10">
          <RefreshCcw className="h-8 w-8 animate-spin mx-auto text-school-primary" />
          <p className="mt-2 text-gray-600">Loading notices...</p>
        </div>
      ) : filteredNotices.length === 0 ? (
        <div className="text-center py-10 bg-gray-50 rounded-lg">
          <p className="text-gray-600">No notices found.</p>
        </div>
      ) : (
        <div className="rounded-md border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Heading</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>PDF</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredNotices.map((notice) => (
                <TableRow key={notice.id}>
                  <TableCell className="font-medium whitespace-nowrap">
                    {format(new Date(notice.created_at), 'MMM d, yyyy')}
                  </TableCell>
                  <TableCell>{notice.heading}</TableCell>
                  <TableCell className="truncate max-w-[200px]">
                    {notice.description || "—"}
                  </TableCell>
                  <TableCell>
                    {notice.pdf_url ? (
                      <a 
                        href={notice.pdf_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 flex items-center"
                      >
                        <FileCheck className="h-4 w-4 mr-1" />
                        <span>View</span>
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    ) : (
                      "—"
                    )}
                  </TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      notice.is_active 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {notice.is_active ? "Active" : "Inactive"}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => openEditDialog(notice)}
                      >
                        <Edit className="h-4 w-4 mr-1" /> Edit
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="text-red-500 hover:text-red-700"
                        onClick={() => openDeleteDialog(notice)}
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
              {currentNotice.id ? "Edit Notice" : "Add New Notice"}
            </DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4 pt-4">
            <div className="grid gap-4">
              <div>
                <Label htmlFor="heading">Heading</Label>
                <Input
                  id="heading"
                  name="heading"
                  value={currentNotice.heading || ""}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={currentNotice.description || ""}
                  onChange={handleInputChange}
                  rows={4}
                />
              </div>
              
              <div>
                <Label htmlFor="pdf">File Attachment</Label>
                <div className="mt-1">
                  <Input
                    id="pdf"
                    type="file"
                    onChange={handleFileChange}
                  />
                  {currentNotice.pdf_url && !pdfFile && (
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">Current file:</p>
                      <a 
                        href={currentNotice.pdf_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-600 text-sm flex items-center"
                      >
                        <FileCheck className="h-4 w-4 mr-1" />
                        View File
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </div>
                  )}
                  {pdfFile && (
                    <p className="text-sm text-gray-500 mt-1">
                      Selected: {pdfFile.name}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch 
                  id="is_active" 
                  checked={currentNotice.is_active} 
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
                ) : currentNotice.id ? "Update Notice" : "Create Notice"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      
      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Notice</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this notice? This action cannot be undone.
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

export default NoticesManager;
