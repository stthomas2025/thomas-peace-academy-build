
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PrincipalMessage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-school-dark mb-4">
            Principal's Message
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Words of wisdom and guidance from our school principal.
          </p>
          
          {/* Placeholder for detailed content */}
          <div className="mt-8 p-8 bg-green-50 rounded-lg max-w-3xl mx-auto">
            <p className="text-lg text-gray-600">
              This page is under development. Check back soon for the full message from our principal 
              about the school's educational philosophy, achievements, and vision for the future.
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

export default PrincipalMessage;
