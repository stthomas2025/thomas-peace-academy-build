import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import BoardMembersSection from "@/components/BoardMembersSection";
import CampusEnvironmentSection from "@/components/CampusEnvironmentSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Loader } from "lucide-react";

const SchoolModelPlaceholder = () => (
  <div className="relative w-full h-[400px] bg-gray-100 rounded-xl overflow-hidden">
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/lovable-uploads/ee7faf30-f2e5-4db9-8793-45de8d71982c.png')" }}></div>
    <div className="absolute inset-0 bg-school-primary/30 flex flex-col items-center justify-center text-white p-6 text-center">
      <h3 className="text-2xl font-bold mb-2">3D Campus Tour</h3>
      <p>Our interactive 3D campus model is currently being updated.</p>
      <p className="mt-2">Please check back later for the virtual tour experience.</p>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <HeroSection />
      <AboutSection />
      
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
            <SchoolModelPlaceholder />
          </div>
        </div>
      </section>
      
      <FacilitiesSection />
      <BoardMembersSection />
      <CampusEnvironmentSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
