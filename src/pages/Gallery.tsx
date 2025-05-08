
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";

interface GalleryImage {
  id: string;
  image_url: string;
  caption: string | null;
}

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Static gallery images (existing)
  const staticGalleryImages = [
    {
      src: "/lovable-uploads/pre school/founder (12).jpg",
      caption: "Pre-School: Playful Kids' Room"
    },
    {
      src: "/lovable-uploads/pre school/founder (13).jpg",
      caption: "Pre-School: Interactive Learning Activities"
    },
    {
      src: "/lovable-uploads/pre school/founder (14).jpg",
      caption: "Pre-School: Creative Arts Time"
    },
    {
      src: "/lovable-uploads/pre school/founder (15).jpg",
      caption: "Pre-School: Outdoor Fun with Class"
    },
    {
      src: "/lovable-uploads/pre school/founder (16).jpg",
      caption: "Pre-School: Story Time Session"
    },
    {
      src: "/lovable-uploads/chemistry lab.jpeg",
      caption: "Laboratory: Chemistry Laboratory"
    },
    {
      src: "/lovable-uploads/physics lab.jpeg",
      caption: "Laboratory: Physics Laboratory"
    },
    {
      src: "/lovable-uploads/high school/lab bio.jpg",
      caption: "Laboratory: Biology Lab"
    },
    {
      src: "/lovable-uploads/computer lap.jpeg",
      caption: "Laboratory: Computer Laboratory"
    }
  ];

  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        const { data, error } = await supabase
          .from("gallery_images")
          .select("*")
          .eq("is_active", true)
          .order("created_at", { ascending: false });

        if (error) throw error;
        
        // Convert DB format to match static format
        const dbImages = data.map((img: any) => ({
          src: img.image_url,
          caption: img.caption || "",
          id: img.id
        }));
        
        setGalleryImages(dbImages);
      } catch (error) {
        console.error("Error fetching gallery images:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGalleryImages();
  }, []);

  // Combine static and dynamic images
  const allImages = [...galleryImages, ...staticGalleryImages];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20 bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-school-dark mb-8 text-center">
            Gallery
          </h1>
          
          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin h-8 w-8 border-4 border-school-primary border-opacity-50 border-t-school-primary rounded-full mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading gallery...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allImages.map((img, idx) => (
                <Card key={img.id || idx} className="overflow-hidden shadow-md">
                  <img 
                    src={img.src} 
                    alt={img.caption} 
                    className="w-full h-56 object-cover"
                    loading="lazy"
                  />
                  <div className="p-4 text-center">
                    <span className="text-gray-700">{img.caption}</span>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
