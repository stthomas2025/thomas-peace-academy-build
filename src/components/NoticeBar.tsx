
import React, { useState, useEffect } from "react";
import { ChevronRight, Clock } from "lucide-react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Notice {
  id: string;
  heading: string;
  description: string | null;
  created_at: string;
  pdf_url: string | null;
}

const NoticeBar = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const { data, error } = await supabase
          .from("notices")
          .select("*")
          .eq("is_active", true)
          .order("created_at", { ascending: false })
          .limit(3);

        if (error) throw error;
        setNotices(data || []);
      } catch (error) {
        console.error("Error fetching notices:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotices();
  }, []);

  if (isLoading) {
    return (
      <div className="bg-school-primary bg-opacity-10 py-2 px-4">
        <div className="container mx-auto flex items-center">
          <div className="font-medium text-school-primary mr-4">Loading notices...</div>
        </div>
      </div>
    );
  }

  if (notices.length === 0) return null;

  return (
    <div className="bg-school-primary bg-opacity-10 py-2 px-4 border-b border-gray-200">
      <div className="container mx-auto flex flex-col sm:flex-row items-start sm:items-center">
        <div className="font-medium text-school-primary mr-4 flex items-center mb-2 sm:mb-0">
          <span className="mr-2">Notices</span>
          <ChevronRight className="h-4 w-4" />
        </div>
        
        <ScrollArea className="w-full max-h-12">
          <div className="flex flex-col space-y-1">
            {notices.map((notice) => (
              <div key={notice.id} className="flex items-center space-x-2">
                <Link 
                  to={`/notices#${notice.id}`} 
                  className="text-gray-700 hover:text-school-secondary transition-colors duration-200 flex-1 truncate"
                >
                  {notice.heading}
                </Link>
                <span className="text-xs text-gray-500 flex items-center whitespace-nowrap">
                  <Clock className="h-3 w-3 mr-1" />
                  {format(new Date(notice.created_at), "MMM d, yyyy")}
                </span>
              </div>
            ))}
          </div>
        </ScrollArea>
        
        <Link 
          to="/notices" 
          className="text-school-secondary hover:text-school-primary transition-colors ml-auto mt-2 sm:mt-0 text-sm font-medium"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default NoticeBar;
