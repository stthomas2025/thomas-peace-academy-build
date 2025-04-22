
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FacultySection = () => {
  const faculty = [
    {
      name: "Dr. Rajesh Sharma",
      position: "Principal",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      experience: "25+ years",
      qualification: "Ph.D. in Education Management",
    },
    {
      name: "Mrs. Priya Adhikari",
      position: "Vice Principal",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      experience: "18+ years",
      qualification: "M.A. in Education",
    },
    {
      name: "Mr. Dinesh Thapa",
      position: "Head of Science",
      image: "https://images.unsplash.com/photo-1577202214328-c04b77cefb5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      experience: "15+ years",
      qualification: "M.Sc. in Physics",
    },
    {
      name: "Mrs. Sunita Gurung",
      position: "English Department",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      experience: "12+ years",
      qualification: "M.A. in English Literature",
    },
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block h-1.5 w-12 bg-school-secondary mx-auto mb-4"></span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-school-dark mb-4">
            Our Distinguished Faculty
          </h2>
          <p className="text-gray-600 text-lg">
            Meet our team of highly qualified and dedicated educators committed to nurturing young minds and fostering academic excellence.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {faculty.map((member, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-medium">Experience: {member.experience}</p>
                    <p className="text-sm text-white/90">{member.qualification}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-school-dark mb-1">{member.name}</h3>
                <p className="text-school-primary font-medium">{member.position}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Faculty Stats */}
        <div className="mt-16 py-10 px-6 bg-gray-50 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-4xl font-bold text-school-primary mb-2">100+</h3>
              <p className="text-gray-600">Faculty Members</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-4xl font-bold text-school-primary mb-2">85%</h3>
              <p className="text-gray-600">With Advanced Degrees</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-4xl font-bold text-school-primary mb-2">12+</h3>
              <p className="text-gray-600">Avg. Years Experience</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-4xl font-bold text-school-primary mb-2">1:20</h3>
              <p className="text-gray-600">Teacher-Student Ratio</p>
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-600 mb-3">
            Our faculty is our greatest strength, dedicated to delivering excellence in education.
          </p>
          
        </motion.div>
      </div>
    </section>
  );
};

export default FacultySection;
