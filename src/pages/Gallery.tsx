
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const galleryImages = [
  // Pre-school images
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
  // Lab images
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
  },
  // ...you can add more as needed...
];

const Gallery = () => (
  <div className="min-h-screen">
    <Header />
    <main className="pt-32 pb-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-school-dark mb-8 text-center">
          Gallery
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((img, idx) => (
            <Card key={idx} className="overflow-hidden shadow-md">
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
      </div>
    </main>
    <Footer />
  </div>
);
export default Gallery;
