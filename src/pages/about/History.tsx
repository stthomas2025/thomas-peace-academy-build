
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Award, BookOpen, Users } from "lucide-react";

const History = () => {
  const milestones = [
    {
      year: "1975",
      title: "Foundation",
      description: "St. Thomas Secondary School was established with a vision to provide quality education to the children of Nepalganj."
    },
    {
      year: "1985",
      title: "First Expansion",
      description: "The school expanded its infrastructure with new classrooms and laboratories to accommodate the growing number of students."
    },
    {
      year: "1995",
      title: "Introduction of Higher Secondary",
      description: "Plus Two program was introduced offering Science and Management streams to provide complete education under one roof."
    },
    {
      year: "2005",
      title: "Modern Infrastructure",
      description: "Comprehensive infrastructure upgrade with modern laboratories, library, and sports facilities."
    },
    {
      year: "2015",
      title: "Digital Initiative",
      description: "Integration of technology in teaching with digital classrooms and computer labs for all students."
    },
    {
      year: "2023",
      title: "New Academic Programs",
      description: "Introduction of specialized programs in Hotel Management and Computer Science to meet contemporary educational needs."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-school-dark mb-4 text-center">
            Our School History
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto text-center">
            The journey of St. Thomas Secondary School from its founding to the present day.
          </p>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-school-primary/30 hidden md:block"></div>
            
            {/* Timeline events */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-school-primary hidden md:block"></div>
                  
                  <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="md:w-1/2"></div>
                    <div className="md:w-1/2 p-6 bg-white rounded-xl shadow-md mx-0 md:mx-8 relative">
                      <div className="absolute top-0 -mt-6 text-center w-full left-0 md:left-auto">
                        <span className="inline-block px-4 py-2 bg-school-primary text-white rounded-lg font-bold">
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-school-dark mt-6 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 md:p-12 mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-school-dark mb-4">Our Heritage</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  St. Thomas Secondary School has a rich history spanning over four decades. Founded by visionary educators with a mission to provide quality education to the children of Nepalganj, the school has grown from humble beginnings to become one of the leading educational institutions in the region.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Throughout our journey, we have remained committed to our founding principles of academic excellence, character development, and community service. Our alumni have gone on to excel in various fields, bringing pride to their alma mater and contributing to society in meaningful ways.
                </p>
              </div>
              <div className="relative h-[300px] rounded-xl overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80')" }}
                ></div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <Calendar className="h-12 w-12 mx-auto mb-4 text-school-primary" />
              <h3 className="text-2xl font-bold text-school-dark mb-2">40+</h3>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-school-primary" />
              <h3 className="text-2xl font-bold text-school-dark mb-2">10,000+</h3>
              <p className="text-gray-600">Alumni Worldwide</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <Award className="h-12 w-12 mx-auto mb-4 text-school-primary" />
              <h3 className="text-2xl font-bold text-school-dark mb-2">50+</h3>
              <p className="text-gray-600">Awards & Recognitions</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-school-primary" />
              <h3 className="text-2xl font-bold text-school-dark mb-2">6</h3>
              <p className="text-gray-600">Academic Programs</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-school-primary hover:bg-school-primary/90" asChild>
              <Link to="/about">Back to About</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default History;
