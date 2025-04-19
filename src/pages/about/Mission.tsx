
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Heart, Brain, Globe } from "lucide-react";

const Mission = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "Nurturing empathy and kindness towards all beings, creating a supportive and inclusive community."
    },
    {
      icon: Brain,
      title: "Excellence",
      description: "Striving for the highest standards in all endeavors, academic and beyond."
    },
    {
      icon: Target,
      title: "Integrity",
      description: "Upholding honesty, ethics, and moral principles in all actions and decisions."
    },
    {
      icon: Globe,
      title: "Global Citizenship",
      description: "Preparing students to be responsible citizens who contribute positively to society."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-school-dark mb-4 text-center">
            Our Mission & Vision
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto text-center">
            The guiding principles and aspirations that drive St. Thomas Secondary School.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-3xl font-bold text-school-dark mb-4 text-center">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To provide holistic education that nurtures intellectual curiosity, ethical values, and personal growth, 
                empowering students to become lifelong learners and responsible global citizens who contribute positively 
                to society through their knowledge, skills, and character.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-3xl font-bold text-school-dark mb-4 text-center">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To be a leading educational institution known for academic excellence, innovative teaching methods, 
                and character development, where students thrive in a supportive environment that prepares them for 
                the challenges and opportunities of the 21st century.
              </p>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-school-dark mb-8 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                  <value.icon className="h-12 w-12 mx-auto mb-4 text-school-primary" />
                  <h3 className="text-xl font-bold text-school-dark mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')" }}
              ></div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-school-dark mb-4">Educational Philosophy</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                At St. Thomas Secondary School, we believe that education goes beyond textbooks and examinations. 
                Our educational philosophy is rooted in the following principles:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                  <span><span className="font-bold">Child-Centered Learning:</span> Recognizing the unique potential and learning style of each student.</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                  <span><span className="font-bold">Holistic Development:</span> Nurturing intellectual, emotional, physical, and spiritual growth.</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                  <span><span className="font-bold">Experiential Learning:</span> Providing hands-on experiences that make learning meaningful and lasting.</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                  <span><span className="font-bold">Character Formation:</span> Instilling values that shape responsible and ethical individuals.</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                  <span><span className="font-bold">Global Perspective:</span> Preparing students to thrive in an interconnected world.</span>
                </li>
              </ul>
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

export default Mission;
