
import React from "react";
import { Bus, BookOpen, Beaker, Trophy, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const FacilitiesSection = () => {
  const facilities = [
    {
      icon: Bus,
      title: "Transportation",
      description: "Our fleet of modern buses provides safe and convenient transportation for students from different parts of the city.",
      color: "bg-yellow-50",
      iconColor: "text-yellow-500",
      borderColor: "border-yellow-100",
    },
    {
      icon: BookOpen,
      title: "Library",
      description: "Our well-stocked library features thousands of books, journals, and digital resources to promote reading and research.",
      color: "bg-blue-50",
      iconColor: "text-blue-500",
      borderColor: "border-blue-100",
    },
    {
      icon: Beaker,
      title: "Laboratories",
      description: "State-of-the-art science, computer, and language labs provide hands-on learning experiences for students.",
      color: "bg-purple-50",
      iconColor: "text-purple-500",
      borderColor: "border-purple-100",
    },
    {
      icon: Trophy,
      title: "Sports Facilities",
      description: "Extensive sports facilities including playground, indoor games, and equipment for various athletic activities.",
      color: "bg-green-50",
      iconColor: "text-green-500",
      borderColor: "border-green-100",
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block h-1.5 w-12 bg-school-primary mx-auto mb-4"></span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-school-dark mb-4">
            World-Class Facilities
          </h2>
          <p className="text-gray-600 text-lg">
            St. Thomas Secondary School offers exceptional facilities to ensure a comprehensive learning experience for our students.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {facilities.map((facility, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className={`${facility.color} p-6 rounded-xl border ${facility.borderColor} hover:shadow-lg transition-shadow duration-300 group`}
            >
              <div className="mb-5 inline-block p-3 rounded-full bg-white">
                <facility.icon className={`h-8 w-8 ${facility.iconColor} group-hover:scale-110 transition-transform duration-300`} />
              </div>
              <h3 className="text-xl font-bold text-school-dark mb-3">{facility.title}</h3>
              <p className="text-gray-600">{facility.description}</p>
               <Button className="bg-school-primary hover:bg-school-primary/90 text-white" asChild>
                              <Link to="/facilities">
                                Learn More <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Transportation Feature */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden relative h-[400px]"
          >
            <div 
              className="w-full h-full bg-cover bg-center transform transition-transform duration-1000 hover:scale-105"
              style={{ backgroundImage: "url('/lovable-uploads/ee7faf30-f2e5-4db9-8793-45de8d71982c.png')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Safe Transportation</h3>
                <p>Our modern fleet ensures timely and safe transportation</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-bold text-school-dark mb-6">
              Convenient & Safe Transportation for All Students
            </h2>
            <p className="text-gray-600 mb-6">
              We understand the importance of safe and reliable transportation for our students. 
              Our transportation service covers various routes throughout Nepalganj and surrounding areas, 
              making it convenient for students from different locations to attend our school.
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                <span className="text-gray-700">Fleet of modern buses with safety features</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                <span className="text-gray-700">Experienced and trained drivers</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                <span className="text-gray-700">GPS tracking system for all vehicles</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                <span className="text-gray-700">Multiple routes covering all major areas</span>
              </li>
            </ul>
            
      
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
