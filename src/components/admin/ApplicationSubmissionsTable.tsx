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
import { Eye, Search, Trash2, RefreshCcw, Download } from "lucide-react";
import { format } from "date-fns";

interface ApplicationSubmission {
  id: string;
  created_at: string;
  student_name: string;
  parent_name: string;
  email: string;
  phone: string;
  address: string;
  date_of_birth: string;
  gender: string;
  applying_for: string;
  previous_school: string | null;
  emergency_contact: string;
  health_conditions: string | null;
  additional_info: string | null;
  status: string;
}

interface ApplicationSubmissionsTableProps {
  onError?: (error: string) => void;
}

const ApplicationSubmissionsTable = ({ onError }: ApplicationSubmissionsTableProps) => {
  const [submissions, setSubmissions] = useState<ApplicationSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubmission, setSelectedSubmission] = useState<ApplicationSubmission | null>(null);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [currentStatus, setCurrentStatus] = useState("");

  const fetchSubmissions = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('application_submissions')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      
      setSubmissions(data);
    } catch (error: any) {
      console.error("Error fetching applications:", error);
      toast({
        variant: "destructive",
        title: "Error fetching applications",
        description: error.message || "Failed to fetch application submissions"
      });
      if (onError) onError(error.message || "Failed to fetch application submissions");
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
        .from('application_submissions')
        .update({ status: currentStatus })
        .eq('id', selectedSubmission.id);
      
      if (error) throw error;
      
      toast({
        title: "Status updated",
        description: "The application status has been updated successfully"
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
    if (!confirm("Are you sure you want to delete this application?")) return;
    
    try {
      const { error } = await supabase
        .from('application_submissions')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      
      toast({
        title: "Application deleted",
        description: "The application has been deleted successfully"
      });
      
      // Update local state
      setSubmissions(submissions.filter(sub => sub.id !== id));
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error deleting application",
        description: error.message || "Failed to delete application"
      });
    }
  };

  const handleViewSubmission = (submission: ApplicationSubmission) => {
    setSelectedSubmission(submission);
    setCurrentStatus(submission.status);
    setIsViewOpen(true);
  };

  const filteredSubmissions = submissions.filter(sub => 
    sub.student_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sub.parent_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sub.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sub.applying_for.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'reviewing': return 'bg-yellow-100 text-yellow-800';
      case 'approved': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'waitlisted': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const exportToCsv = () => {
    if (submissions.length === 0) return;
    
    // CSV Header
    const headers = [
      "Date", "Student Name", "Parent Name", "Email", "Phone", 
      "Address", "Date of Birth", "Gender", "Applying For",
      "Previous School", "Emergency Contact", "Health Conditions",
      "Additional Info", "Status"
    ];
    
    // Format the data
    const csvData = submissions.map(s => [
      format(new Date(s.created_at), 'yyyy-MM-dd'),
      s.student_name,
      s.parent_name,
      s.email,
      s.phone,
      s.address,
      s.date_of_birth,
      s.gender,
      s.applying_for,
      s.previous_school || "",
      s.emergency_contact,
      s.health_conditions || "",
      s.additional_info || "",
      s.status
    ]);
    
    // Add headers to data
    const allData = [headers, ...csvData];
    
    // Convert to CSV
    const csvContent = allData.map(row => 
      row.map(cell => {
        // Escape quotes and add quotes around fields with commas, quotes or newlines
        if (typeof cell === 'string' && (cell.includes(',') || cell.includes('"') || cell.includes('\n'))) {
          return `"${cell.replace(/"/g, '""')}"`;
        }
        return cell;
      }).join(',')
    ).join('\n');
    
    // Create and download the file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    
    link.setAttribute('href', url);
    link.setAttribute('download', `applications_${format(new Date(), 'yyyy-MM-dd')}.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-school-dark">Application Submissions</h2>
        <div className="flex space-x-2">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search applications..."
              className="pl-10 w-[300px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button onClick={exportToCsv} variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
          <Button onClick={fetchSubmissions} variant="outline" size="icon">
            <RefreshCcw className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-10">
          <RefreshCcw className="h-8 w-8 animate-spin mx-auto text-school-primary" />
          <p className="mt-2 text-gray-600">Loading applications...</p>
        </div>
      ) : filteredSubmissions.length === 0 ? (
        <div className="text-center py-10 bg-gray-50 rounded-lg">
          <p className="text-gray-600">No application submissions found.</p>
        </div>
      ) : (
        <div className="rounded-md border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Student Name</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Parent</TableHead>
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
                  <TableCell>{submission.student_name}</TableCell>
                  <TableCell>{submission.applying_for}</TableCell>
                  <TableCell>{submission.parent_name}</TableCell>
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
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-xl">Application Details</DialogTitle>
          </DialogHeader>
          
          {selectedSubmission && (
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Student Name</h3>
                  <p className="mt-1">{selectedSubmission.student_name}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Date of Birth</h3>
                  <p className="mt-1">{selectedSubmission.date_of_birth}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Gender</h3>
                  <p className="mt-1">{selectedSubmission.gender}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Applying For</h3>
                  <p className="mt-1">{selectedSubmission.applying_for}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Parent Name</h3>
                  <p className="mt-1">{selectedSubmission.parent_name}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Email</h3>
                  <p className="mt-1">{selectedSubmission.email}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                  <p className="mt-1">{selectedSubmission.phone}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Emergency Contact</h3>
                  <p className="mt-1">{selectedSubmission.emergency_contact}</p>
                </div>
                <div className="col-span-2">
                  <h3 className="text-sm font-medium text-gray-500">Address</h3>
                  <p className="mt-1">{selectedSubmission.address}</p>
                </div>
                <div className="col-span-2">
                  <h3 className="text-sm font-medium text-gray-500">Previous School</h3>
                  <p className="mt-1">{selectedSubmission.previous_school || "—"}</p>
                </div>
                <div className="col-span-2">
                  <h3 className="text-sm font-medium text-gray-500">Health Conditions</h3>
                  <p className="mt-1">{selectedSubmission.health_conditions || "None"}</p>
                </div>
                <div className="col-span-2">
                  <h3 className="text-sm font-medium text-gray-500">Additional Information</h3>
                  <p className="mt-1">{selectedSubmission.additional_info || "—"}</p>
                </div>
              </div>
              
              <div className="flex items-end gap-4 pt-2">
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Application Status</h3>
                  <Select value={currentStatus} onValueChange={setCurrentStatus}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="reviewing">Reviewing</SelectItem>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                      <SelectItem value="waitlisted">Waitlisted</SelectItem>
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

export default ApplicationSubmissionsTable;
