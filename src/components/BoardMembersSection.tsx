
import React from "react";
import { motion } from "framer-motion";

const BoardMembersSection = () => {
  const boardMembers = [
    {
      name: "Mr. Ram Prasad Sharma",
      position: "Chairman",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3",
      experience: "30+ years",
      qualification: "Ph.D. in Educational Leadership",
    },
    {
      name: "Mrs. Sita Adhikari",
      position: "Vice Chairman",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3",
      experience: "25+ years",
      qualification: "M.A. in Education Management",
    },
    {
      name: "Mr. Hari Thapa",
      position: "Secretary",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3",
      experience: "20+ years",
      qualification: "M.B.A.",
    },
    {
      name: "Dr. Maya Gurung",
      position: "Treasurer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3",
      experience: "22+ years",
      qualification: "Ph.D. in Finance",
    },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
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
            Our Board Members
          </h2>
          <p className="text-gray-600 text-lg">
            Meet our distinguished board members who guide our institution towards excellence.
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div 
            className="flex space-x-8 pb-8"
            animate={{ x: [0, -1500] }}
            transition={{
              x: {
                duration: 20,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear"
              }
            }}
          >
            {[...boardMembers, ...boardMembers].map((member, index) => (
              <motion.div 
                key={index}
                className="flex-none w-72"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
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
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BoardMembersSection;
