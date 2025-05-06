
import { useEffect, useState } from "react";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import Tabs from "@/components/ui/tabs";
import TabsContent from "@/components/ui/tabs";
import TabsList from "@/components/ui/tabs";
import TabsTrigger from "@/components/ui/tabs";
import ContactSubmissionsTable from "./ContactSubmissionsTable";
import ApplicationSubmissionsTable from "./ApplicationSubmissionsTable";
import AdminHeader from "./AdminHeader";
import { Loader2, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const AdminLayout = () => {
  const { isAdmin, isLoading } = useAdminAuth();
  const [fetchError, setFetchError] = useState<string | null>(null);

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

  // Global error handler for fetch operations
  useEffect(() => {
    const handleGlobalErrors = (event: ErrorEvent) => {
      console.error("Global error caught:", event.error);
      if (event.error && event.error.message) {
        if (event.error.message.includes("fetch") || 
            event.error.message.includes("network") ||
            event.error.message.includes("policy")) {
          setFetchError("Network or database error occurred. Please check your connection and permissions.");
        }
      }
    };

    // Handle unhandled promise rejections
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error("Unhandled promise rejection:", event.reason);
      if (event.reason && event.reason.message) {
        if (event.reason.message.includes("fetch") || 
            event.reason.message.includes("network") ||
            event.reason.message.includes("policy")) {
          setFetchError("Network or database error occurred. Please check your connection and permissions.");
        }
      }
    };

    window.addEventListener('error', handleGlobalErrors);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleGlobalErrors);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
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

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <AdminHeader />
      
      <main className="flex-1 container mx-auto py-8 px-4">
        {fetchError && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{fetchError}</AlertDescription>
          </Alert>
        )}

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
              <ContactSubmissionsTable onError={(error) => setFetchError(error)} />
            </TabsContent>
            
            <TabsContent value="applications" className="mt-6">
              <ApplicationSubmissionsTable onError={(error) => setFetchError(error)} />
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
