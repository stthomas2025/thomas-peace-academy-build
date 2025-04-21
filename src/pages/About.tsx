
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-school-primary/10 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-school-dark mb-4">
              About St. Thomas Secondary School
            </h1>
            <p className="text-xl text-gray-600">
              Committed to academic excellence and holistic development since our founding
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative h-[400px] rounded-xl overflow-hidden shadow-xl"
            >
              <img 
                src="/lovable-uploads/919f8a27-51c6-40ec-a2bf-174699194643.png" 
                alt="St. Thomas School Building" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-school-dark mb-6">Our School History</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                St. Thomas Secondary School was established in 1995 with a vision to provide quality education in the Nepalganj region. 
                What started as a small institution with just a few classrooms has now grown into one of the most prestigious educational 
                institutions in the area. Throughout our journey, we have maintained our commitment to academic excellence, character 
                building, and holistic development.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Over the years, we have expanded our facilities, enriched our curriculum, and strengthened our faculty to meet the 
                evolving educational needs of our students. Today, we pride ourselves on our state-of-the-art infrastructure, 
                comprehensive academic programs, and a nurturing environment that helps students realize their full potential.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our alumni have gone on to achieve remarkable success in various fields, both nationally and internationally, 
                testament to the strong foundation they received at St. Thomas.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-school-dark mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-6">
                To provide quality education that fosters academic excellence, ethical values, and social responsibility, 
                preparing students to become competent, compassionate, and responsible global citizens.
              </p>
              <Button variant="outline" className="border-school-primary text-school-primary" asChild>
                <Link to="/about/mission">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-school-dark mb-4">Principal's Message</h3>
              <p className="text-gray-700 mb-6">
                Welcome to St. Thomas Secondary School. We are committed to providing a nurturing environment 
                where students can grow intellectually, emotionally, and ethically.
              </p>
              <Button variant="outline" className="border-school-primary text-school-primary" asChild>
                <Link to="/about/principal-message">
                  Read Message <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-school-dark mb-6">Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-school-primary/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-school-dark mb-2">Excellence</h3>
                <p className="text-gray-700">Striving for the highest standards in all endeavors.</p>
              </div>
              <div className="bg-school-primary/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-school-dark mb-2">Integrity</h3>
                <p className="text-gray-700">Acting with honesty, ethics, and responsibility.</p>
              </div>
              <div className="bg-school-primary/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-school-dark mb-2">Respect</h3>
                <p className="text-gray-700">Valuing diversity and treating others with dignity.</p>
              </div>
              <div className="bg-school-primary/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-school-dark mb-2">Leadership</h3>
                <p className="text-gray-700">Empowering students to lead with vision and purpose.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-lg text-center"
          >
            <h2 className="text-3xl font-bold text-school-dark mb-6">Visit Our School</h2>
            <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
              We invite you to visit our campus and experience firsthand the enriching learning environment at St. Thomas Secondary School.
            </p>
            <Button className="bg-school-primary hover:bg-school-primary/90" asChild>
              <Link to="/contact">Schedule a Visit</Link>
            </Button>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
