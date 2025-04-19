
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Flask, Football } from "lucide-react";

const Facilities = () => {
  const facilities = [
    {
      title: "Library",
      icon: BookOpen,
      description: "Our well-stocked library with thousands of books, journals, and digital resources.",
      link: "/facilities/library",
      color: "bg-blue-50",
      buttonColor: "border-blue-500 text-blue-500 hover:bg-blue-50"
    },
    {
      title: "Laboratories",
      icon: Flask,
      description: "State-of-the-art science, computer, and language laboratories for practical learning.",
      link: "/facilities/labs",
      color: "bg-green-50",
      buttonColor: "border-green-500 text-green-500 hover:bg-green-50"
    },
    {
      title: "Sports Facilities",
      icon: Football,
      description: "Indoor and outdoor sports facilities including courts, fields, and equipment.",
      link: "/facilities/sports",
      color: "bg-orange-50",
      buttonColor: "border-orange-500 text-orange-500 hover:bg-orange-50"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-school-primary/10 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-school-dark mb-4">
            Our Facilities
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            St. Thomas Secondary School provides modern facilities to enhance the learning experience and support the holistic development of our students.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {facilities.map((facility, index) => (
              <div key={index} className={`p-8 rounded-xl shadow-md ${facility.color}`}>
                <facility.icon className="h-12 w-12 mx-auto mb-4 text-school-primary" />
                <h2 className="text-2xl font-bold text-school-dark mb-2">{facility.title}</h2>
                <p className="text-gray-600 mb-6">{facility.description}</p>
                <Button variant="outline" className={facility.buttonColor} asChild>
                  <Link to={facility.link}>Learn More</Link>
                </Button>
              </div>
            ))}
          </div>
          
          {/* Placeholder for additional facilities */}
          <div className="mt-16 p-8 bg-gray-50 rounded-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-school-dark mb-4">Additional Facilities</h2>
            <p className="text-gray-600 mb-6">
              We also offer various other facilities including an auditorium, art studio, music room, cafeteria, 
              and secure transportation services. Detailed information about these facilities will be added soon.
            </p>
            <Button className="bg-school-primary hover:bg-school-primary/90" asChild>
              <Link to="/contact">Contact for More Information</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Facilities;
