
import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { Download, Clock, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Notice {
  id: string;
  heading: string;
  description: string | null;
  created_at: string;
  pdf_url: string | null;
}

const Notices = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const { data, error } = await supabase
          .from("notices")
          .select("*")
          .eq("is_active", true)
          .order("created_at", { ascending: false });

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

  // Filter notices based on search term
  const filteredNotices = notices.filter(
    (notice) =>
      notice.heading.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (notice.description && 
       notice.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20 bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-school-dark mb-8 text-center">
            School Notices
          </h1>

          <div className="max-w-3xl mx-auto mb-10">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search notices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {isLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin h-8 w-8 border-4 border-school-primary border-opacity-50 border-t-school-primary rounded-full mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading notices...</p>
              </div>
            ) : filteredNotices.length > 0 ? (
              filteredNotices.map((notice) => (
                <Card 
                  key={notice.id}
                  id={notice.id}
                  className="p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="mb-4 md:mb-0 md:mr-4">
                      <h2 className="text-xl font-bold text-school-dark">
                        {notice.heading}
                      </h2>
                      
                      <div className="text-sm text-gray-500 flex items-center mt-2">
                        <Clock className="h-4 w-4 mr-1" />
                        {format(new Date(notice.created_at), "MMMM d, yyyy")}
                      </div>
                      
                      {notice.description && (
                        <div className="mt-3 text-gray-700">
                          {notice.description}
                        </div>
                      )}
                    </div>
                    
                    {notice.pdf_url && (
                      <Button 
                        className="shrink-0 mt-4 md:mt-0" 
                        onClick={() => window.open(notice.pdf_url!, "_blank")}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                    )}
                  </div>
                </Card>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">
                  {searchTerm ? "No notices match your search." : "No notices available at this time."}
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Notices;
