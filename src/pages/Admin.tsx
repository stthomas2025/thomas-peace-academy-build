
import AdminLayout from "@/components/admin/AdminLayout";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import AdminLogin from "@/components/admin/AdminLogin";

const Admin = () => {
  const { isAdmin, user, isLoading } = useAdminAuth();
  const navigate = useNavigate();
  
  // Log authentication status to help debug
  useEffect(() => {
    console.log("Admin page - Auth status:", { isAdmin, user, isLoading });
    
    // Only redirect non-admins if they're already authenticated
    if (!isLoading && !isAdmin && user) {
      console.log("Authenticated but not admin, redirecting to home");
      navigate("/");
    }
  }, [isAdmin, user, isLoading, navigate]);

  // Show loading state while checking admin status
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-school-primary" />
        <p className="mt-4 text-lg text-gray-600">Verifying admin access...</p>
      </div>
    );
  }

  // If user is not authenticated or not admin, show login page
  if (!user || !isAdmin) {
    return <AdminLogin />;
  }
  
  // If admin, show admin layout
  return <AdminLayout />;
};

export default Admin;
