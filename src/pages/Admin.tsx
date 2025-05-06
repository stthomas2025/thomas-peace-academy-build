
import AdminLayout from "@/components/admin/AdminLayout";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

const Admin = () => {
  const { isAdmin, user, isLoading } = useAdminAuth();
  const navigate = useNavigate();
  
  // Log authentication status to help debug
  useEffect(() => {
    console.log("Admin page - Auth status:", { isAdmin, user, isLoading });
    
    // If not loading and not admin, redirect to home
    if (!isLoading && !isAdmin) {
      console.log("Not admin, redirecting to home");
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

  // If admin, show admin layout
  if (isAdmin) {
    return <AdminLayout />;
  }
  
  // This should not render as the useEffect will redirect non-admins
  return null;
};

export default Admin;
