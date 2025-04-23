
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Beaker, Monitor, Microscope, Dna } from "lucide-react";

const Labs = () => {
  const facilities = [
    {
      icon: Beaker,
      title: "Chemistry Lab",
      description: "State-of-the-art chemistry laboratory equipped with modern apparatus and safety equipment.",
      img: "/lovable-uploads/high school/lab 1.jpg"
    },
    {
      icon: Microscope,
      title: "Biology Lab",
      description: "Advanced biology lab with microscopes and specimens for practical learning.",
      img: "/lovable-uploads/high school/lab bio.jpg"
    },
    {
      icon: Monitor,
      title: "Computer Lab",
      description: "Modern computer lab with latest hardware and software for digital literacy.",
      img: "/lovable-uploads/photo-1461749280684-dccba630e2f6.jpeg"
    },
    {
      icon: Dna,
      title: "Physics Lab",
      description: "Well-equipped physics laboratory for conducting experiments and research.",
      img: "/lovable-uploads/high school/founder (28).jpg"
    }
  ];

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
                {facility.img && (
                  <img
                    src={facility.img}
                    alt={facility.title}
                    className="rounded-lg mb-4 w-full h-36 object-cover"
                  />
                )}
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
