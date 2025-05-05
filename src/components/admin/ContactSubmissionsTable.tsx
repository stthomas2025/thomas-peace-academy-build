
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger 
} from "@/components/ui/dialog";
import { 
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue 
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { Eye, Search, Trash2, RefreshCcw } from "lucide-react";
import { format } from "date-fns";

interface ContactSubmission {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string | null;
  subject: string | null;
  message: string;
  status: string;
}

const ContactSubmissionsTable = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [currentStatus, setCurrentStatus] = useState("");

  const fetchSubmissions = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      
      setSubmissions(data);
    } catch (error: any) {
      console.error("Error fetching submissions:", error);
      toast({
        variant: "destructive",
        title: "Error fetching submissions",
        description: error.message || "Failed to fetch contact submissions"
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const handleUpdateStatus = async () => {
    if (!selectedSubmission) return;
    
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .update({ status: currentStatus })
        .eq('id', selectedSubmission.id);
      
      if (error) throw error;
      
      toast({
        title: "Status updated",
        description: "The submission status has been updated successfully"
      });
      
      // Update local state
      setSubmissions(submissions.map(sub => 
        sub.id === selectedSubmission.id ? {...sub, status: currentStatus} : sub
      ));
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error updating status",
        description: error.message || "Failed to update status"
      });
    }
  };

  const handleDeleteSubmission = async (id: string) => {
    if (!confirm("Are you sure you want to delete this submission?")) return;
    
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      
      toast({
        title: "Submission deleted",
        description: "The submission has been deleted successfully"
      });
      
      // Update local state
      setSubmissions(submissions.filter(sub => sub.id !== id));
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error deleting submission",
        description: error.message || "Failed to delete submission"
      });
    }
  };

  const handleViewSubmission = (submission: ContactSubmission) => {
    setSelectedSubmission(submission);
    setCurrentStatus(submission.status);
    setIsViewOpen(true);
  };

  const filteredSubmissions = submissions.filter(sub => 
    sub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sub.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (sub.subject && sub.subject.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'spam': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-school-dark">Contact Submissions</h2>
        <div className="flex space-x-2">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search submissions..."
              className="pl-10 w-[300px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button onClick={fetchSubmissions} variant="outline" size="icon">
            <RefreshCcw className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-10">
          <RefreshCcw className="h-8 w-8 animate-spin mx-auto text-school-primary" />
          <p className="mt-2 text-gray-600">Loading submissions...</p>
        </div>
      ) : filteredSubmissions.length === 0 ? (
        <div className="text-center py-10 bg-gray-50 rounded-lg">
          <p className="text-gray-600">No contact submissions found.</p>
        </div>
      ) : (
        <div className="rounded-md border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSubmissions.map((submission) => (
                <TableRow key={submission.id}>
                  <TableCell className="font-medium whitespace-nowrap">
                    {format(new Date(submission.created_at), 'MMM d, yyyy')}
                  </TableCell>
                  <TableCell>{submission.name}</TableCell>
                  <TableCell>{submission.email}</TableCell>
                  <TableCell>{submission.subject || "—"}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(submission.status)}`}>
                      {submission.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => handleViewSubmission(submission)}
                      >
                        <Eye className="h-4 w-4 mr-1" /> View
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleDeleteSubmission(submission.id)}
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

      <Dialog open={isViewOpen} onOpenChange={setIsViewOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl">Contact Submission Details</DialogTitle>
          </DialogHeader>
          
          {selectedSubmission && (
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Name</h3>
                  <p className="mt-1">{selectedSubmission.name}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Email</h3>
                  <p className="mt-1">{selectedSubmission.email}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                  <p className="mt-1">{selectedSubmission.phone || "—"}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Date</h3>
                  <p className="mt-1">{format(new Date(selectedSubmission.created_at), 'PPP')}</p>
                </div>
                <div className="col-span-2">
                  <h3 className="text-sm font-medium text-gray-500">Subject</h3>
                  <p className="mt-1">{selectedSubmission.subject || "—"}</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Message</h3>
                <div className="p-3 bg-gray-50 rounded-md whitespace-pre-wrap">
                  {selectedSubmission.message}
                </div>
              </div>
              
              <div className="flex items-end gap-4 pt-2">
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Status</h3>
                  <Select value={currentStatus} onValueChange={setCurrentStatus}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="in-progress">In Progress</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="spam">Spam</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={handleUpdateStatus}>Update Status</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContactSubmissionsTable;
