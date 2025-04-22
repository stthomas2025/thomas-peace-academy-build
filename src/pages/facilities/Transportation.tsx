
import React from "react";
import { motion } from "framer-motion";
import { Bus, MapPin, Clock, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Transportation = () => {
  const routes = [
    {
      name: "Route A - City Center",
      areas: ["Kohalpur", "Pipari", "Dhambojhi"],
      timing: "to be updated "
    },
    {
      name: "Route B - Residential Area",
      areas: ["to be updated"],
      timing: "7:00 AM & 3:00 PM"
    },
    {
      name: "Route C - Suburban",
      areas: ["to be updated"],
      timing: "7:15 AM & 3:15 PM"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-school-primary/10 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-school-dark mb-4">
                School Transportation Service
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Safe, reliable, and comfortable transportation for our students
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="relative rounded-xl overflow-hidden shadow-2xl"
              >
                <img 
                  src="/lovable-uploads/st thomas bus.jpg" 
                  alt="St. Thomas School Bus"
                  className="w-full h-auto"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-serif font-bold text-school-dark mb-4">
                  Our Fleet
                </h2>
                <p className="text-gray-600">
                  Our transportation fleet consists of modern, well-maintained buses equipped with:
                </p>
                <ul className="space-y-4">
                  {[
                    "GPS tracking system for real-time location monitoring",
                    "Experienced and licensed drivers",
                    "First aid kits and safety equipment",
                    "Regular maintenance and safety checks",
                    "Air conditioning for comfortable travel"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Bus className="w-5 h-5 text-school-primary mt-1 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 mb-16">
              <h2 className="text-3xl font-serif font-bold text-school-dark mb-8 text-center">
                Bus Routes & Timings
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {routes.map((route, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className="bg-white p-6 rounded-lg shadow-md"
                  >
                    <h3 className="text-xl font-bold text-school-primary mb-4">{route.name}</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 text-school-primary mt-1 mr-2" />
                        <div>
                          <p className="font-medium mb-2">Covered Areas:</p>
                          <ul className="list-disc list-inside text-gray-600 pl-2">
                            {route.areas.map((area, idx) => (
                              <li key={idx}>{area}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-school-primary mr-2" />
                        <p className="text-gray-600">{route.timing}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="text-center bg-school-primary/10 rounded-xl p-8">
              <h2 className="text-3xl font-serif font-bold text-school-dark mb-4">
                Contact Transportation Department
              </h2>
              <p className="text-gray-600 mb-6">
                For queries regarding bus routes, timings, or transportation fees
              </p>
              <div className="flex justify-center items-center space-x-6">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-school-primary mr-2" />
                  <span className="text-gray-600">081-521423</span>
                </div>
                <Button className="bg-school-primary hover:bg-school-primary/90">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Transportation;
