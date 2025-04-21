import React from "react";
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import BoardMembersSection from "@/components/BoardMembersSection";
import CampusEnvironmentSection from "@/components/CampusEnvironmentSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const SchoolModelPlaceholder = () => (
  <div className="relative w-full h-[400px] bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
    <video
      className="w-full h-full object-cover"
      src="/lovable-uploads/high school/st video.mp4"
      controls
      poster="/lovable-uploads/high school/founder (21).jpg"
    >
      Sorry, your browser does not support embedded videos.
    </video>
    <div className="absolute inset-0 bg-school-primary/10 pointer-events-none text-white flex flex-col items-center justify-center text-center"></div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <AboutSection />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block h-1.5 w-12 bg-school-primary mx-auto mb-4"></span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-school-dark mb-4">
              Explore Our Campus
            </h2>
            <p className="text-gray-600 text-lg">
              Take a virtual tour of St. Thomas Secondary School through glimpses of our vibrant campus.
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
