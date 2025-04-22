import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import BoardMembersSection from "@/components/BoardMembersSection";
import CampusEnvironmentSection from "@/components/CampusEnvironmentSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

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
              Take a virtual tour of St. Thomas Secondary School through our
              campus video.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden shadow-lg">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                controls
                poster="/lovable-uploads/high school/founder (21).jpg"
              >
                <source
                  src="/lovable-uploads/high school/st video.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      <FacilitiesSection />
      <CampusEnvironmentSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
