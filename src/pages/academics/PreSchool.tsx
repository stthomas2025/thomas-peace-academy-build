
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const preschoolImages = [
  {
    src: "/lovable-uploads/pre school/founder (12).jpg",
    caption: "Playful Kids' Room"
  },
  {
    src: "/lovable-uploads/pre school/founder (13).jpg",
    caption: "Interactive Learning Activities"
  },
  {
    src: "/lovable-uploads/pre school/founder (14).jpg",
    caption: "Creative Arts Time"
  },
  {
    src: "/lovable-uploads/pre school/founder (15).jpg",
    caption: "Outdoor Fun with Class"
  },
  {
    src: "/lovable-uploads/pre school/founder (16).jpg",
    caption: "Story Time Session"
  },
  {
    src: "/lovable-uploads/pre school/founder (17).jpg",
    caption: "Group Activities"
  },
  {
    src: "/lovable-uploads/pre school/founder (18).jpg",
    caption: "Circle Time"
  },
  {
    src: "/lovable-uploads/pre school/founder (19).jpg",
    caption: "Creative Play"
  },
  {
    src: "/lovable-uploads/pre school/founder (20).jpg",
    caption: "Friendship and Sharing"
  },
  {
    src: "/lovable-uploads/pre school/founder (24).jpg",
    caption: "Craft and Colors"
  },
  {
    src: "/lovable-uploads/pre school/founder (25).jpg",
    caption: "Learning Through Play"
  },
  {
    src: "/lovable-uploads/pre school/founder (26).jpg",
    caption: "Early Education"
  },
  {
    src: "/lovable-uploads/pre school/founder (30).jpg",
    caption: "Activity Time"
  }
];

const PreSchool = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20 bg-gradient-to-b from-pink-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-school-dark mb-6 text-center">
            Pre-School (Nursery - UKG)
          </h1>
          <p className="text-center text-gray-700 font-medium mb-4">
            St. Thomas English Secondary School | Established: 1990 (2047 BS)
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
            {preschoolImages.map((img, idx) => (
              <Card key={idx} className="overflow-hidden shadow-md">
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 text-center">
                  <span className="text-gray-700">{img.caption}</span>
                </div>
              </Card>
            ))}
          </div>
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-lg text-gray-600 text-center">
              Our pre-school program is designed to foster curiosity, creativity, and foundational skills in a fun, safe environment.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default PreSchool;
