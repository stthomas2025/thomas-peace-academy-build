
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Mission = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-school-dark mb-4">
            Our Mission & Vision
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            The guiding principles and aspirations that drive St. Thomas Secondary School.
          </p>
          
          {/* Placeholder for detailed content */}
          <div className="mt-8 p-8 bg-blue-50 rounded-lg max-w-3xl mx-auto">
            <p className="text-lg text-gray-600">
              This page is under development. Check back soon for a detailed explanation of our mission, vision, 
              and the core values that guide our educational philosophy.
            </p>
            <Button className="mt-4 bg-school-primary hover:bg-school-primary/90" asChild>
              <Link to="/about">Back to About</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Mission;
