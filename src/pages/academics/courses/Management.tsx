
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Briefcase } from "lucide-react";

const Management = () => (
  <div className="min-h-screen">
    <Header />
    <section className="pt-32 pb-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center text-sm text-gray-600 mb-8">
          <Link to="/academics" className="hover:text-school-primary">Academics</Link>
          <span className="mx-2">›</span>
          <Link to="/academics/plus-two" className="hover:text-school-primary">Plus Two</Link>
          <span className="mx-2">›</span>
          <span className="text-school-primary">Management</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-school-dark mb-4">
          Management
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
          Explore modern business, commerce, and entrepreneurial skills with our Management course. Ideal for careers in business, commerce, and finance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
          <div>
            <h2 className="text-2xl font-bold text-school-dark mb-4">Course Overview</h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Business Studies & Management Principles</li>
              <li>Accountancy & Economics</li>
              <li>Leadership, Communication & Team Skills</li>
              <li>Commerce, Law, and Entrepreneurship</li>
            </ul>
            <Button className="mt-8 bg-school-primary hover:bg-school-primary/90" asChild>
              <Link to="/apply">Apply Now</Link>
            </Button>
          </div>
          <div className="relative h-[300px] rounded-xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1515168833906-d2a3b82b97b8?auto=format&fit=crop&w=600&q=80" alt="Management" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);
export default Management;
