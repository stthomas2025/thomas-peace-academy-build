
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-school-primary/10 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-school-dark mb-4">
            School Gallery
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Visual glimpses of our beautiful campus, facilities, and student activities.
          </p>
          
          {/* Placeholder for detailed content */}
          <div className="mt-8 p-8 bg-gray-50 rounded-lg max-w-3xl mx-auto">
            <p className="text-lg text-gray-600">
              This page is under development. Check back soon for a comprehensive gallery showcasing our campus,
              classrooms, laboratories, sports facilities, and various student activities.
            </p>
            <Button className="mt-4 bg-school-primary hover:bg-school-primary/90" asChild>
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Gallery;
