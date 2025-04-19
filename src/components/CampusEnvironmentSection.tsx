
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CampusEnvironmentSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const features = [
    {
      title: "Beautiful Gardens",
      description: "Our campus features meticulously maintained gardens with diverse flowers and plants, creating a serene atmosphere.",
      image: "/lovable-uploads/ee7faf30-f2e5-4db9-8793-45de8d71982c.png"
    },
    {
      title: "Clean Air & Greenery",
      description: "The abundance of trees and plants ensures fresh air and a pleasant environment that enhances focus and reduces stress.",
      image: "/lovable-uploads/ee7faf30-f2e5-4db9-8793-45de8d71982c.png"
    },
    {
      title: "Peaceful Location",
      description: "Located away from the bustle of the city center, our campus offers a tranquil setting perfect for academics.",
      image: "/lovable-uploads/ee7faf30-f2e5-4db9-8793-45de8d71982c.png"
    }
  ];

  return (
    <section className="py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block h-1.5 w-12 bg-school-garden mx-auto mb-4"></span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-school-dark mb-4">
            A Peaceful Environment for Learning
          </h2>
          <p className="text-gray-600 text-lg">
            At St. Thomas, we believe that a serene and inspiring environment is essential for effective learning and holistic development.
          </p>
        </motion.div>

        {/* 3D Parallax Hero */}
        <div className="relative h-[500px] mb-20 rounded-2xl overflow-hidden">
          <motion.div 
            style={{ y, opacity }} 
            className="absolute inset-0 bg-cover bg-center"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <div 
              className="w-full h-full bg-cover bg-fixed bg-center"
              style={{ backgroundImage: "url('/lovable-uploads/ee7faf30-f2e5-4db9-8793-45de8d71982c.png')" }}
            ></div>
            <div className="absolute inset-0 bg-black/30"></div>
          </motion.div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-white px-4 max-w-3xl"
            >
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">Experience the Perfect Learning Environment</h3>
              <p className="text-xl text-white/90 mb-6">
                Our campus offers a unique blend of natural beauty and modern facilities, creating an inspiring atmosphere for academic excellence.
              </p>
              <Button className="bg-school-garden hover:bg-school-garden/90 text-white">
                Schedule a Campus Tour <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-school-dark mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100 max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center text-center">
            <svg className="h-12 w-12 text-school-primary/30 mb-6" fill="currentColor" viewBox="0 0 32 32">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            
            <p className="text-xl md:text-2xl text-gray-600 italic mb-8">
              "The peaceful campus environment at St. Thomas Secondary School provides an ideal atmosphere for learning. 
              The beautiful gardens and green spaces create a sense of tranquility that helps students focus and excel in their studies."
            </p>
            
            <div>
              <h4 className="font-bold text-school-dark text-lg">Parent of Class X Student</h4>
              <p className="text-gray-500">5 years with St. Thomas</p>
            </div>
          </div>
        </motion.div>

        {/* Environment Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-school-garden/10 p-6 rounded-xl text-center"
          >
            <h3 className="text-4xl font-bold text-school-garden mb-2">10+</h3>
            <p className="text-gray-700">Acres of Green Campus</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-school-garden/10 p-6 rounded-xl text-center"
          >
            <h3 className="text-4xl font-bold text-school-garden mb-2">500+</h3>
            <p className="text-gray-700">Varieties of Plants & Flowers</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-school-garden/10 p-6 rounded-xl text-center"
          >
            <h3 className="text-4xl font-bold text-school-garden mb-2">100%</h3>
            <p className="text-gray-700">Eco-Friendly Campus</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CampusEnvironmentSection;
