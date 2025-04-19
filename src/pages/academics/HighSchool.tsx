
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HighSchool = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-red-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-school-dark mb-4">
            High School Education
            <span className="block text-2xl md:text-3xl mt-2 text-school-primary">Class IX to X</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Preparing students for board exams with comprehensive academic preparation and career guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-school-primary hover:bg-school-primary/90" asChild>
              <Link to="/admissions">Apply for Admission</Link>
            </Button>
            <Button variant="outline" className="border-school-primary text-school-primary hover:bg-school-primary/10" asChild>
              <Link to="/contact">Schedule a Visit</Link>
            </Button>
          </div>
          
          {/* Placeholder for detailed content */}
          <div className="mt-16 p-8 bg-red-50 rounded-lg">
            <p className="text-lg text-gray-600">
              This page is under development. Check back soon for detailed information about our high school program, 
              faculty, curriculum, and board exam preparation strategies.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HighSchool;
