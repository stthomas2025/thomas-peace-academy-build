
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { UtensilsCrossed, Home, Book, Users, Lightbulb } from "lucide-react";

const HotelManagement = () => {
  const subjects = [
    {
      name: "Food Production",
      description: "Culinary arts, food preparation techniques, kitchen operations, and menu planning.",
      icon: UtensilsCrossed
    },
    {
      name: "Accommodation Operations",
      description: "Front office procedures, housekeeping, and hotel administration.",
      icon: Home
    },
    {
      name: "Food & Beverage Service",
      description: "Restaurant service, bar operations, event management, and customer service.",
      icon: UtensilsCrossed
    },
    {
      name: "Hospitality Management",
      description: "Principles of management, marketing, accounting, and human resources in hospitality.",
      icon: Users
    },
    {
      name: "Communication Skills",
      description: "Professional communication, business correspondence, and guest relations.",
      icon: Book
    }
  ];

  const careers = [
    "Hotel Management",
    "Restaurant Management",
    "Cruise Line Operations",
    "Event Management",
    "Tourism Services",
    "Catering Management",
    "Airline Hospitality",
    "Resort Operations"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600 mb-8">
            <Link to="/academics" className="hover:text-school-primary">Academics</Link>
            <span className="mx-2">›</span>
            <Link to="/academics/plus-two" className="hover:text-school-primary">Plus Two</Link>
            <span className="mx-2">›</span>
            <span className="text-school-primary">Hotel Management</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-school-dark mb-4">
            Hotel Management
            <span className="block text-2xl md:text-3xl mt-2 text-school-primary">Plus Two (Class XI-XII)</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Comprehensive education in hospitality skills, operations, and management for the dynamic hotel industry.
          </p>
          
          <div className="flex flex-wrap justify-start gap-4 mb-16">
            <Button className="bg-school-primary hover:bg-school-primary/90" asChild>
              <Link to="/admissions">Apply for Admission</Link>
            </Button>
            <Button variant="outline" className="border-school-primary text-school-primary hover:bg-school-primary/10" asChild>
              <Link to="/contact">Schedule a Visit</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')" }}
              ></div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-school-dark mb-4">Program Overview</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The Hotel Management program at St. Thomas Secondary School provides students with comprehensive 
                training in hospitality operations, services, and management. This specialized course combines 
                theoretical knowledge with practical skills to prepare students for careers in the dynamic and 
                growing hospitality industry.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Students receive hands-on training in food production, food and beverage service, front office 
                operations, and housekeeping, along with fundamentals of hotel administration, marketing, and 
                customer service. The program emphasizes practical experience, professional etiquette, and the 
                development of soft skills essential for success in the hospitality sector.
              </p>
            </div>
          </div>
          
          <div className="bg-amber-50 rounded-xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-school-dark mb-8 text-center">Core Subjects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subjects.map((subject, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <subject.icon className="h-12 w-12 text-school-primary mb-4" />
                  <h3 className="text-xl font-bold text-school-dark mb-2">{subject.name}</h3>
                  <p className="text-gray-600">{subject.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <Lightbulb className="h-12 w-12 text-school-primary mb-4" />
              <h3 className="text-2xl font-bold text-school-dark mb-4">Program Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                  <span>Training kitchen and mock restaurant for practical learning</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                  <span>Industry partnerships with leading hotels for exposure and internships</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                  <span>Guest lectures from hospitality professionals</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                  <span>Field visits to hotels, restaurants, and hospitality establishments</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                  <span>Culinary competitions and food festivals</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                  <span>Hospitality-focused language training for international careers</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-school-dark mb-4">Career Opportunities</h3>
              <p className="text-gray-700 mb-6">
                The Hotel Management program opens doors to diverse career opportunities in the global hospitality 
                and tourism industry:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {careers.map((career, index) => (
                  <div key={index} className="bg-amber-50 p-3 rounded-lg">
                    <span className="text-school-dark font-medium">{career}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl p-8 md:p-12 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-school-dark mb-4">Admission Requirements</h2>
                <p className="text-gray-700 mb-6">
                  Admission to the Hotel Management program is based on the following criteria:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                    <span>Minimum 50% marks in Secondary Education Examination (SEE) or equivalent</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                    <span>Good communication skills and aptitude for customer service</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                    <span>Entrance examination conducted by the school</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                    <span>Personal interview focusing on aptitude for hospitality</span>
                  </li>
                </ul>
                <Button className="mt-6 bg-school-primary hover:bg-school-primary/90" asChild>
                  <Link to="/admissions">Apply Now</Link>
                </Button>
              </div>
              <div className="relative h-[300px] rounded-xl overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')" }}
                ></div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/academics/courses/management-cs" className="text-school-primary hover:underline mr-8">
              ← Management with Computer Science
            </Link>
            <Link to="/academics/plus-two" className="text-school-primary hover:underline">
              Back to Plus Two Programs →
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HotelManagement;
