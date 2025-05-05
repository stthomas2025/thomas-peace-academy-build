
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
          checkIsAdmin(session.user.email || '');
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
        checkIsAdmin(session.user.email || '');
      } else {
        setIsAdmin(false);
        setIsLoading(false);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Function to check if user is an admin - updated to avoid RLS recursion
  const checkIsAdmin = async (email: string) => {
    try {
      // Instead of checking admin_users table directly, check if email matches our admin email
      // This avoids the RLS policy recursion
      if (email === 'admin@thomaspeaceacademy.edu.np') {
        setIsAdmin(true);
      } else {
        // For any other emails, try to check via RPC function or service role if needed
        // For now, set to false
        setIsAdmin(false);
      }
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
