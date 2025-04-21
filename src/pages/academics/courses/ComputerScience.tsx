
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Monitor } from "lucide-react";

const ComputerScience = () => (
  <div className="min-h-screen">
    <Header />
    <section className="pt-32 pb-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center text-sm text-gray-600 mb-8">
          <Link to="/academics" className="hover:text-school-primary">Academics</Link>
          <span className="mx-2">›</span>
          <Link to="/academics/plus-two" className="hover:text-school-primary">Plus Two</Link>
          <span className="mx-2">›</span>
          <span className="text-school-primary">Computer Science</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-school-dark mb-4">
          Computer Science
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
          Gain expertise in programming, algorithms, and IT skills for a future in software development, data science, or technology innovation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
          <div>
            <h2 className="text-2xl font-bold text-school-dark mb-4">Course Overview</h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Programming (Python, JavaScript, C)</li>
              <li>Web Development & Databases</li>
              <li>Data Structures & Algorithms</li>
              <li>IT Fundamentals, Networking & Security</li>
            </ul>
            <Button className="mt-8 bg-school-primary hover:bg-school-primary/90" asChild>
              <Link to="/apply">Apply Now</Link>
            </Button>
          </div>
          <div className="relative h-[300px] rounded-xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80" alt="Computer Science" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);
export default ComputerScience;
