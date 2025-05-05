
import { Button } from "@/components/ui/button";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { LogOut } from "lucide-react";

const AdminHeader = () => {
  const { signOut, user } = useAdminAuth();

  return (
    <header className="w-full bg-school-primary text-white shadow-md">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img 
            src="/lovable-uploads/logo.jpeg" 
            alt="St. Thomas School Logo" 
            className="h-12 rounded-full"
          />
          <div>
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
            {user && <p className="text-sm opacity-90">Logged in as: {user.email}</p>}
          </div>
        </div>
        
        <Button 
          variant="outline" 
          className="bg-white/10 hover:bg-white/20 border-white/20"
          onClick={signOut}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </Button>
      </div>
    </header>
  );
};

export default AdminHeader;
