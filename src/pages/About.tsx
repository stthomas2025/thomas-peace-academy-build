import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Users, Award, Clock } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-school-dark mb-4 text-center">
            About St. Thomas Secondary School
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto text-center">
            St. Thomas Secondary School has a proud heritage of over four decades, growing from a visionary initiative in 1975 to become one of the leading educational institutions in Nepalganj. Our tradition of excellence, continual innovation, and strong community values have been at the heart of our journey.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/lovable-uploads/high school/founder (21).jpg')" }}
              ></div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-school-dark mb-4">Our Story</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Founded in 1975 by a group of visionary educators, St. Thomas Secondary School began with a mission to provide quality education to the children of Nepalganj. What started as a small institution with limited resources has grown into a comprehensive educational center with modern facilities and a reputation for academic excellence.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Throughout our journey, we have remained committed to our founding principles while adapting to the changing educational landscape. Our alumni have gone on to excel in various fields, bringing pride to their alma mater and contributing to society in meaningful ways.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <BookOpen className="h-12 w-12 text-school-primary mb-4" />
              <h3 className="text-2xl font-bold text-school-dark mb-2">Academic Excellence</h3>
              <p className="text-gray-600">
                We are committed to providing a rigorous academic program that challenges students to reach their full potential. Our curriculum is designed to develop critical thinking, creativity, and a love for learning.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <Users className="h-12 w-12 text-school-primary mb-4" />
              <h3 className="text-2xl font-bold text-school-dark mb-2">Character Development</h3>
              <p className="text-gray-600">
                We believe that education goes beyond academics. Our holistic approach focuses on nurturing values, ethics, and social responsibility to shape well-rounded individuals.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <Award className="h-12 w-12 text-school-primary mb-4" />
              <h3 className="text-2xl font-bold text-school-dark mb-2">Future Readiness</h3>
              <p className="text-gray-600">
                Our programs are designed to prepare students for the challenges of the 21st century, equipping them with the skills, knowledge, and adaptability needed to thrive in a rapidly changing world.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-school-dark mb-8 text-center">Our Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-school-primary mb-2">40+</div>
                <p className="text-gray-700">Years of Excellence</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-school-primary mb-2">10,000+</div>
                <p className="text-gray-700">Alumni Worldwide</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-school-primary mb-2">98%</div>
                <p className="text-gray-700">Board Exam Success Rate</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-school-primary mb-2">50+</div>
                <p className="text-gray-700">Awards & Recognitions</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-school-dark mb-8">Learn More About Us</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-school-primary hover:bg-school-primary/90" asChild>
                <Link to="/about/mission">Our Mission & Vision</Link>
              </Button>
              <Button variant="outline" className="border-school-primary text-school-primary hover:bg-school-primary/10" asChild>
                <Link to="/about/principal-message">Principal's Message</Link>
              </Button>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-school-dark mb-4">Visit Our Campus</h3>
                <p className="text-gray-700 mb-6">
                  We invite you to visit our campus and experience the vibrant learning environment at St. Thomas Secondary School. Our staff will be happy to give you a tour and answer any questions you may have.
                </p>
                <Button className="bg-school-secondary hover:bg-school-secondary/90" asChild>
                  <Link to="/contact">Schedule a Visit</Link>
                </Button>
              </div>
              <div className="relative h-[300px]">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/lovable-uploads/high school/founder (1).jpg')" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
