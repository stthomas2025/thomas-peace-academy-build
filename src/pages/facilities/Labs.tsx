
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const labPhotos = [
  {
    src: "/lovable-uploads/chemistry lab.jpeg",
    caption: "Chemistry Laboratory"
  },
  {
    src: "/lovable-uploads/chemistry lab 1.jpeg",
    caption: "Advanced Chemistry Experiments"
  },
  {
    src: "/lovable-uploads/physics lab.jpeg",
    caption: "Physics Laboratory"
  },
  {
    src: "/lovable-uploads/high school/lab 1.jpg",
    caption: "High School Lab Session"
  },
  {
    src: "/lovable-uploads/high school/lab bio.jpg",
    caption: "Biology Laboratory"
  },
  {
    src: "/lovable-uploads/computer lap.jpeg",
    caption: "Computer Laboratory"
  },
];

const Labs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-school-dark mb-6 text-center">
            Laboratories
          </h1>
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-lg text-gray-600 text-center">
              Our laboratories are equipped for hands-on learning in Science, Computer, and more.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
            {labPhotos.map((img, idx) => (
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
};
export default Labs;
