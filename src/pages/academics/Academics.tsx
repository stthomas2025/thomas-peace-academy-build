
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Academics = () => {
  const academicLevels = [
    {
      name: "Pre-School (Nursery-UKG)",
      description: "Foundation years focusing on early learning and development through play and exploration.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80",
      link: "/academics/pre-school",
      color: "from-blue-500 to-purple-500"
    },
    {
      name: "Primary School (I-V)",
      description: "Building strong foundations in core subjects with focus on holistic development.",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
      link: "/academics/primary",
      color: "from-green-500 to-teal-500"
    },
    {
      name: "Middle School (VI-VIII)",
      description: "Expanding knowledge horizons with deeper subject engagement and skill development.",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      link: "/academics/middle",
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "High School (IX-X)",
      description: "Preparing for board exams with comprehensive academic preparation and career guidance.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1232&q=80",
      link: "/academics/high",
      color: "from-red-500 to-pink-500"
    },
    {
      name: "Plus Two (XI-XII)",
      description: "Specialized streams with focus on higher education preparation and career paths.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      link: "/academics/plus-two",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const features = [
    {
      title: "Quality Education",
      description: "Experienced faculty, modern teaching methods, and comprehensive curriculum.",
      icon: "🎓"
    },
    {
      title: "Holistic Development",
      description: "Focus on academic, physical, social, and emotional development.",
      icon: "🌟"
    },
    {
      title: "Interactive Learning",
      description: "Engaging teaching methods that make learning enjoyable and effective.",
      icon: "🔄"
    },
    {
      title: "Safe Environment",
      description: "Secure campus with proper supervision and care for all students.",
      icon: "🛡️"
    },
    {
      title: "Modern Facilities",
      description: "Well-equipped classrooms, laboratories, library, and sports facilities.",
      icon: "🏫"
    },
    {
      title: "Personalized Attention",
      description: "Optimal teacher-student ratio for individual attention and guidance.",
      icon: "👨‍🏫"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-school-primary/10 to-white relative">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-school-dark mb-6">
              Academic Excellence
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              At St. Thomas Secondary School, we provide comprehensive education from pre-school to class XII, 
              focusing on academic excellence, character development, and holistic growth.
            </p>
          </motion.div>
          
          {/* Academic Levels Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {academicLevels.map((level, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Link to={level.link} className="block">
                  <div className="relative h-56 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url('${level.image}')` }}
                    ></div>
                    <div className={`absolute inset-0 bg-gradient-to-tr ${level.color} opacity-70`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-2xl font-bold text-white text-center px-4">{level.name}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{level.description}</p>
                    <div className="flex items-center text-school-primary font-medium">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-school-dark mb-4">
              Our Educational Features
            </h2>
            <p className="text-gray-600 text-lg">
              What makes St. Thomas Secondary School a preferred choice for quality education
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-school-dark mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-school-dark mb-4">
              What Parents & Students Say
            </h2>
            <p className="text-gray-600 text-lg">
              Hear from our community about their experience with our academic programs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "The academic program at St. Thomas has provided my child with not just knowledge but also essential life skills. The teachers are committed and caring.",
                author: "Rajesh Sharma",
                role: "Parent of Class V Student"
              },
              {
                quote: "I've been studying at St. Thomas since pre-school, and the supportive environment has helped me excel in both academics and extracurricular activities.",
                author: "Anisha Patel",
                role: "Class X Student"
              },
              {
                quote: "The Plus Two program prepared my son exceptionally well for his engineering entrance exams. The faculty's guidance was invaluable.",
                author: "Sunil Thapa",
                role: "Parent of Alumni"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="text-4xl text-school-primary mb-4">"</div>
                <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-bold text-school-dark">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-school-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Begin Your Educational Journey with Us
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Experience quality education in a nurturing environment. Applications for the new academic session are now open.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/admissions" 
              className="bg-white text-school-primary hover:bg-white/90 px-8 py-3 rounded-md font-medium transition-colors duration-200"
            >
              Apply for Admission
            </Link>
            <Link 
              to="/contact" 
              className="border border-white text-white hover:bg-white/10 px-8 py-3 rounded-md font-medium transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Academics;
