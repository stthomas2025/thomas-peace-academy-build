
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
    // Set up auth state listener first
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, currentSession) => {
        console.log("Auth state changed:", event);
        setSession(currentSession);
        setUser(currentSession?.user ?? null);
        
        // Check if user is admin when auth state changes
        if (currentSession?.user) {
          const email = currentSession.user.email || '';
          // Direct check to avoid RLS recursion
          setIsAdmin(email === 'admin@thomaspeaceacademy.edu.np');
          setIsLoading(false);
        } else {
          setIsAdmin(false);
          setIsLoading(false);
        }
      }
    );

    // Check current session on load
    supabase.auth.getSession().then(({ data: { session: currentSession } }) => {
      setSession(currentSession);
      setUser(currentSession?.user ?? null);
      
      if (currentSession?.user) {
        const email = currentSession.user.email || '';
        // Direct check to avoid RLS recursion
        setIsAdmin(email === 'admin@thomaspeaceacademy.edu.np');
      } else {
        setIsAdmin(false);
      }
      setIsLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

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
