
import { useEffect } from "react";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { useNavigate } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContactSubmissionsTable from "./ContactSubmissionsTable";
import ApplicationSubmissionsTable from "./ApplicationSubmissionsTable";
import AdminHeader from "./AdminHeader";
import { Loader2 } from "lucide-react";

const AdminLayout = () => {
  const { isAdmin, isLoading } = useAdminAuth();
  const navigate = useNavigate();

  // Prevent search engines from indexing this page
  useEffect(() => {
    // Add noindex meta tag
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);

    return () => {
      // Clean up
      document.head.removeChild(meta);
    };
  }, []);

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-school-primary" />
        <p className="mt-4 text-lg text-gray-600">Loading admin panel...</p>
      </div>
    );
  }

  // If not admin, show login page
  if (!isAdmin) {
    return <AdminLogin />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <AdminHeader />
      
      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h1 className="text-3xl font-serif font-bold text-school-dark mb-8 text-center">
            St. Thomas School Admin Panel
          </h1>
          
          <Tabs defaultValue="contacts" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="contacts">Contact Submissions</TabsTrigger>
              <TabsTrigger value="applications">Application Submissions</TabsTrigger>
            </TabsList>
            
            <TabsContent value="contacts" className="mt-6">
              <ContactSubmissionsTable />
            </TabsContent>
            
            <TabsContent value="applications" className="mt-6">
              <ApplicationSubmissionsTable />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <footer className="py-4 text-center text-sm text-gray-500 bg-white border-t">
        <p>© {new Date().getFullYear()} St. Thomas School Admin Panel - All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default AdminLayout;
