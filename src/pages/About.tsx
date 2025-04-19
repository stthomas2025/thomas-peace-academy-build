
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Award, Users, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      
      {/* Page Banner */}
      <div className="relative pt-32 pb-20 bg-gray-50">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/lovable-uploads/ee7faf30-f2e5-4db9-8793-45de8d71982c.png')" }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-school-dark">About Us</h1>
            <p className="text-xl text-gray-600">Learn about our history, vision, mission, and the values that guide St. Thomas Secondary School.</p>
          </div>
        </div>
      </div>
      
      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="inline-block h-1.5 w-12 bg-school-primary mb-4"></span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-school-dark mb-6">Our History</h2>
              <p className="text-gray-600 mb-6">
                St. Thomas Secondary School was established in 1990 with a vision to provide quality education to the children of Nepalganj. 
                What started as a small institution has now grown into one of the leading educational institutions in the region.
              </p>
              <p className="text-gray-600 mb-6">
                Over the years, we have continuously evolved our teaching methodologies and facilities to keep pace with the changing educational landscape. 
                Our commitment to academic excellence and holistic development has remained unwavering throughout our journey.
              </p>
              <Button className="bg-school-primary hover:bg-school-primary/90 text-white">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden"
            >
              <img 
                src="/lovable-uploads/ee7faf30-f2e5-4db9-8793-45de8d71982c.png" 
                alt="School History" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block h-1.5 w-12 bg-school-secondary mx-auto mb-4"></span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-school-dark mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-gray-600 text-lg">
              Guided by strong values and a clear vision, we strive to provide an exceptional educational experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-school-primary/10 flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-school-primary" />
              </div>
              <h3 className="text-2xl font-bold text-school-dark mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                To provide comprehensive education that empowers students with knowledge, skills, and values 
                necessary to excel in their future endeavors and contribute positively to society.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-school-primary/10 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                  <span>Deliver high-quality education</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-school-primary/10 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                  <span>Nurture well-rounded individuals</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-school-primary/10 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                  <span>Foster critical thinking and creativity</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-school-secondary/10 flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-school-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-school-dark mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-4">
                To be recognized as a premier educational institution that prepares students to become 
                responsible citizens and future leaders through a balanced and holistic approach to education.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-school-secondary/10 flex items-center justify-center text-school-secondary mr-3 mt-1">✓</div>
                  <span>Achieve academic excellence</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-school-secondary/10 flex items-center justify-center text-school-secondary mr-3 mt-1">✓</div>
                  <span>Build character and integrity</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-school-secondary/10 flex items-center justify-center text-school-secondary mr-3 mt-1">✓</div>
                  <span>Promote social responsibility</span>
                </li>
              </ul>
            </motion.div>
          </div>
          
          {/* Core Values */}
          <div className="mt-16">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-serif font-bold text-school-dark mb-4">
                Our Core Values
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Award, title: "Excellence", description: "We strive for excellence in all aspects of education" },
                { icon: Users, title: "Respect", description: "We value and respect the dignity and diversity of all individuals" },
                { icon: BookOpen, title: "Integrity", description: "We uphold the highest standards of honesty and ethics" },
                { icon: Target, title: "Innovation", description: "We encourage innovative thinking and creative problem-solving" }
              ].map((value, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow duration-300 text-center"
                >
                  <div className="mx-auto w-12 h-12 rounded-full bg-school-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-school-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-school-dark mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
