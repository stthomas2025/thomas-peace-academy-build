
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Heart, Shield, Music, Users, Award } from "lucide-react";

const labPhotos = [
  {
    src: "/lovable-uploads/chemistry lab.jpeg",
    caption: "Chemistry Laboratory"
  },
  {
    src: "/lovable-uploads/chemistry lab 1.jpeg",
    caption: "Advanced Chemistry Experiments"
  },
  {
    src: "/lovable-uploads/physics lab.jpeg",
    caption: "Physics Laboratory"
  },
  {
    src: "/lovable-uploads/high school/lab 1.jpg",
    caption: "High School Lab Session"
  },
  {
    src: "/lovable-uploads/high school/lab bio.jpg",
    caption: "Biology Laboratory"
  },
  {
    src: "/lovable-uploads/computer lap.jpeg",
    caption: "Computer Laboratory"
  },
];

const facilities = [
  {
    icon: BookOpen,
    title: "Interactive Learning",
    description: "Modern equipment for hands-on experimentation and learning."
  },
  {
    icon: Heart,
    title: "Nurturing Environment",
    description: "Safe spaces for students to explore scientific concepts."
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Safety protocols and equipment in all laboratory settings."
  },
  {
    icon: Music,
    title: "Creative Expression",
    description: "Labs designed to encourage creative problem-solving."
  },
];

const Labs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="pt-32 pb-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-school-dark mb-4 text-center">
            Our Laboratories
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto text-center">
            State-of-the-art laboratories for hands-on learning and practical education.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <facility.icon className="h-12 w-12 text-school-primary mb-4" />
                <h3 className="text-xl font-bold text-school-dark mb-2">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-green-50 rounded-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-school-dark mb-4">Laboratory Features</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                    <span>Modern equipment and instruments</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                    <span>Qualified lab assistants</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                    <span>Safety equipment and protocols</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                    <span>Regular practical sessions</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-[300px] rounded-xl overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/lovable-uploads/ee7faf30-f2e5-4db9-8793-45de8d71982c.png')" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
            {labPhotos.map((img, idx) => (
              <Card key={idx} className="overflow-hidden shadow-md">
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
                <div className="p-4 text-center">
                  <span className="text-gray-700">{img.caption}</span>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-school-primary hover:bg-school-primary/90" asChild>
              <Link to="/facilities">Back to Facilities</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Labs;
