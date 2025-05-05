
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";
import { Session, User } from "@supabase/supabase-js";

export function useAdminAuth() {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        // Check if user is admin when auth state changes
        if (session?.user) {
          checkIsAdmin(session.user.id);
        } else {
          setIsAdmin(false);
        }
      }
    );

    // Check current session on load
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        checkIsAdmin(session.user.id);
      } else {
        setIsAdmin(false);
        setIsLoading(false);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Function to check if user is an admin
  const checkIsAdmin = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('admin_users')
        .select('id')
        .eq('id', userId)
        .single();
      
      if (error) throw error;
      
      setIsAdmin(!!data);
    } catch (error) {
      console.error("Error checking admin status:", error);
      setIsAdmin(false);
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: "Signed out successfully",
        description: "You have been signed out of the admin panel"
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Sign out failed",
        description: error.message || "An error occurred during sign out"
      });
    }
  };

  return { session, user, isAdmin, isLoading, signOut };
}
