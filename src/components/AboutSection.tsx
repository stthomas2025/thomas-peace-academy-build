
import React from "react";
import { ArrowRight, GraduationCap, Users, School, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const AboutSection = () => {
  const stats = [
    { icon: GraduationCap, value: "2000+", label: "Students" },
    { icon: Users, value: "100+", label: "Faculty Members" },
    { icon: School, value: "1990", label: "Established" },
    { icon: MapPin, value: "10 Acres", label: "Campus Area" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="relative mb-6">
              <span className="inline-block h-1.5 w-12 bg-school-secondary mb-2"></span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-school-dark leading-tight mb-6">
                Nurturing Excellence in a <br /> Peaceful Environment
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                St. Thomas Secondary School was established with a vision to provide quality education in a peaceful environment. Located in Nepalganj, our school offers classes from I to XII with a focus on academic excellence and holistic development.
              </p>
              <p className="text-gray-600 mb-6">
                Our serene campus, surrounded by beautiful gardens and greenery, creates an ideal atmosphere for learning and growth. We take pride in our dedicated faculty, modern facilities, and commitment to nurturing each student's potential.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-xl font-bold text-school-dark mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To provide comprehensive education that empowers students with knowledge, skills, and values necessary to excel in their future endeavors and contribute positively to society.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Button className="bg-school-primary hover:bg-school-primary/90 text-white">
                Discover More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Image Side with 3D Effect */}
          <div className="relative h-full flex items-center justify-center overflow-hidden">
            <div className="relative h-[500px] w-full max-w-[500px] rounded-2xl overflow-hidden transform perspective-1000">
              <motion.div
                initial={{ rotateY: 5, rotateX: 10, scale: 0.95 }}
                whileInView={{ 
                  rotateY: 0, 
                  rotateX: 0,
                  scale: 1,
                  transition: { duration: 1.5, ease: "easeOut" }
                }}
                className="absolute inset-0"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center shadow-2xl rounded-2xl"
                  style={{ 
                    backgroundImage: "url('/lovable-uploads/ee7faf30-f2e5-4db9-8793-45de8d71982c.png')",
                    transformStyle: "preserve-3d",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              </motion.div>
              
              {/* 3D Floating Caption */}
              <motion.div 
                className="absolute bottom-0 left-0 w-full p-6 z-10"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <p className="text-white text-lg font-medium">Experience our beautiful campus</p>
                <p className="text-white/80 text-sm">A peaceful environment for effective learning</p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="h-12 w-12 text-school-primary" />
              </div>
              <h3 className="text-3xl font-bold text-school-dark mb-1">{stat.value}</h3>
              <p className="text-gray-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
