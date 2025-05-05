
import AdminLayout from "@/components/admin/AdminLayout";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { useEffect } from "react";

const Admin = () => {
  const { isAdmin, user } = useAdminAuth();
  
  // Log authentication status to help debug
  useEffect(() => {
    console.log("Admin page - Auth status:", { isAdmin, user });
  }, [isAdmin, user]);

  return <AdminLayout />;
};

export default Admin;
