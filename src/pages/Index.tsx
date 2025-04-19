import React, { Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import FacultySection from "@/components/FacultySection";
import CampusEnvironmentSection from "@/components/CampusEnvironmentSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Loader } from "lucide-react";

// Lazy load the 3D component for better performance
const SchoolModel3D = React.lazy(() => import("@/components/SchoolModel3D"));

const Index = () => {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <HeroSection />
      <AboutSection />
      
      {/* 3D Model Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block h-1.5 w-12 bg-school-primary mx-auto mb-4"></span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-school-dark mb-4">
              Explore Our Campus
            </h2>
            <p className="text-gray-600 text-lg">
              Take a virtual tour of St. Thomas Secondary School through our interactive 3D model.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Suspense fallback={
              <div className="h-[400px] flex items-center justify-center bg-gray-100 rounded-xl">
                <div className="flex flex-col items-center">
                  <Loader className="h-10 w-10 text-school-primary animate-spin mb-4" />
                  <p className="text-gray-600">Loading 3D Campus Model...</p>
                </div>
              </div>
            }>
              <SchoolModel3D />
            </Suspense>
          </div>
        </div>
      </section>
      
      <FacilitiesSection />
      <FacultySection />
      <CampusEnvironmentSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
