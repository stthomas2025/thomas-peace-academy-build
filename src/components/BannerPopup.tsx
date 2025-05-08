
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

interface BannerImage {
  id: string;
  image_url: string;
  title: string | null;
  subtitle: string | null;
}

const BannerPopup = () => {
  const [bannerImage, setBannerImage] = useState<BannerImage | null>(null);
  const [isOpen, setIsOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const { data, error } = await supabase
          .from("banner_images")
          .select("*")
          .eq("is_active", true)
          .order("created_at", { ascending: false })
          .limit(1)
          .single();

        if (error && error.code !== "PGRST116") {
          // PGRST116 is 'no rows returned' error, which is fine
          console.error("Error fetching banner:", error);
        }

        // Check if we have a banner to show
        if (data) {
          setBannerImage(data);
          
          // Check if this banner has been dismissed before
          const dismissedBanners = JSON.parse(localStorage.getItem("dismissedBanners") || "[]");
          if (dismissedBanners.includes(data.id)) {
            setIsOpen(false);
          }
        }
      } catch (error) {
        console.error("Error in banner fetch:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBanner();
  }, []);

  const closeBanner = () => {
    // Save this banner ID to localStorage so we don't show it again
    if (bannerImage) {
      const dismissedBanners = JSON.parse(localStorage.getItem("dismissedBanners") || "[]");
      dismissedBanners.push(bannerImage.id);
      localStorage.setItem("dismissedBanners", JSON.stringify(dismissedBanners));
    }
    setIsOpen(false);
  };

  if (isLoading || !bannerImage || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="relative max-w-4xl w-11/12 bg-white rounded-lg shadow-xl overflow-hidden">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={closeBanner}
          className="absolute top-2 right-2 bg-white bg-opacity-70 rounded-full z-10"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
        
        <div className="relative">
          <img 
            src={bannerImage.image_url} 
            alt={bannerImage.title || "School Banner"} 
            className="w-full h-auto"
          />
          
          {(bannerImage.title || bannerImage.subtitle) && (
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
              {bannerImage.title && (
                <h2 className="text-xl font-bold">{bannerImage.title}</h2>
              )}
              {bannerImage.subtitle && (
                <p className="text-sm">{bannerImage.subtitle}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BannerPopup;
