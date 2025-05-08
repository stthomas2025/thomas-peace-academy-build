
import React, { useState, useEffect } from "react";
import { ChevronRight, Clock } from "lucide-react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

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
    <div className="bg-school-primary bg-opacity-10 py-2 px-4 border-b border-gray-200 overflow-hidden">
      <div className="container mx-auto flex flex-col sm:flex-row items-start sm:items-center">
        <div className="font-medium text-school-primary mr-4 flex items-center mb-2 sm:mb-0 whitespace-nowrap">
          <span className="mr-2">Notices</span>
          <ChevronRight className="h-4 w-4" />
        </div>
        
        <div className="flex-1 overflow-hidden">
          <div className="notice-scroll flex items-center">
            {notices.map((notice, index) => (
              <Link 
                key={notice.id} 
                to={`/notices#${notice.id}`}
                className="text-gray-700 hover:text-school-secondary transition-colors duration-200 flex items-center whitespace-nowrap mr-8"
              >
                <span className="truncate max-w-xs md:max-w-md">{notice.heading}</span>
                <span className="text-xs text-gray-500 flex items-center ml-2">
                  <Clock className="h-3 w-3 mr-1" />
                  {format(new Date(notice.created_at), "MMM d, yyyy")}
                </span>
              </Link>
            ))}
            {/* Duplicate notices for continuous scrolling effect */}
            {notices.map((notice) => (
              <Link 
                key={`duplicate-${notice.id}`} 
                to={`/notices#${notice.id}`}
                className="text-gray-700 hover:text-school-secondary transition-colors duration-200 flex items-center whitespace-nowrap mr-8"
              >
                <span className="truncate max-w-xs md:max-w-md">{notice.heading}</span>
                <span className="text-xs text-gray-500 flex items-center ml-2">
                  <Clock className="h-3 w-3 mr-1" />
                  {format(new Date(notice.created_at), "MMM d, yyyy")}
                </span>
              </Link>
            ))}
          </div>
        </div>
        
        <Link 
          to="/notices" 
          className="text-school-secondary hover:text-school-primary transition-colors ml-auto mt-2 sm:mt-0 text-sm font-medium whitespace-nowrap"
        >
          View All
        </Link>
      </div>

      <style>
        {`
          @keyframes scrollNotices {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .notice-scroll {
            animation: scrollNotices 20s linear infinite;
            width: max-content;
          }
        `}
      </style>
    </div>
  );
};

export default NoticeBar;
