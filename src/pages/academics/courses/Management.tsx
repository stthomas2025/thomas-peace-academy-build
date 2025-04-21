
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Monitor, ChevronRight, ArrowRight, Check } from "lucide-react";

const Management = () => {
  const subjects = [
    "Business Studies",
    "Accountancy",
    "Economics",
    "Marketing",
    "Business Mathematics",
    "English",
    "Computer Applications"
  ];

  const careerOptions = [
    "Business Administration",
    "Chartered Accountancy",
    "Banking and Finance",
    "Marketing and Sales",
    "Human Resource Management",
    "Entrepreneurship"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-school-dark mb-4">
                Management
                <span className="block text-2xl md:text-3xl mt-2 text-green-600">Plus Two Stream</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Develop business acumen and leadership skills for a successful career in management
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button className="bg-green-600 hover:bg-green-700 text-white" asChild>
                  <Link to="/apply">Apply for Admission</Link>
                </Button>
                <Button variant="outline" className="border-green-600 text-green-600" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold text-school-dark mb-4">Program Overview</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The Management stream at St. Thomas Secondary School provides a comprehensive foundation in business studies, 
                  accounting, economics, and related subjects. This program is designed to develop business acumen, analytical 
                  thinking, and leadership skills essential for success in the corporate world.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our curriculum combines theoretical knowledge with practical applications through case studies, business 
                  simulations, and industry interactions. Students are encouraged to develop entrepreneurial thinking and 
                  understand global business trends.
                </p>
              </div>
              <div className="order-1 lg:order-2 relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Management Class" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
              <h2 className="text-3xl font-bold text-school-dark mb-8 text-center">Core Subjects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {subjects.map((subject, index) => (
                  <div key={index} className="flex items-center bg-green-50 p-4 rounded-lg">
                    <ChevronRight className="text-green-600 mr-3 h-5 w-5" />
                    <span className="text-gray-800 font-medium">{subject}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-green-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-school-dark mb-6 flex items-center">
                  <Monitor className="text-green-600 mr-3 h-6 w-6" />
                  Learning Approach
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3 mt-1">✓</div>
                    <span className="text-gray-700">Case study-based learning from real business scenarios</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3 mt-1">✓</div>
                    <span className="text-gray-700">Business plan development and project work</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3 mt-1">✓</div>
                    <span className="text-gray-700">Industry expert lectures and workshops</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3 mt-1">✓</div>
                    <span className="text-gray-700">Business competitions and simulations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3 mt-1">✓</div>
                    <span className="text-gray-700">Field trips to corporate offices and business establishments</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-school-dark mb-6">Career Opportunities</h3>
                <p className="text-gray-700 mb-4">
                  The Management stream opens doors to various undergraduate courses and career paths, including:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {careerOptions.map((career, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="text-green-600 mr-2 h-5 w-5" />
                      <span className="text-gray-700">{career}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center bg-white rounded-xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-school-dark mb-6">Ready to Join?</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Apply now for the Management stream at St. Thomas Secondary School and start your journey toward a successful business career.
              </p>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
                <Link to="/apply">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Management;
