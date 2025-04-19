
import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Brain, Users, Sparkles, Medal, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PrimarySchool = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Strong Foundation",
      description: "Focus on core subjects like mathematics, science, languages, and social studies."
    },
    {
      icon: Brain,
      title: "Critical Thinking",
      description: "Activities that develop problem-solving and analytical skills."
    },
    {
      icon: Users,
      title: "Social Development",
      description: "Group projects and activities that foster teamwork and social skills."
    },
    {
      icon: Sparkles,
      title: "Creativity & Innovation",
      description: "Encouragement of creative expression through arts, crafts, and projects."
    },
    {
      icon: Medal,
      title: "Character Building",
      description: "Emphasis on values, ethics, and positive behavior."
    },
    {
      icon: Clock,
      title: "Balanced Schedule",
      description: "Well-structured timetable with a balance of academics and activities."
    }
  ];

  const faculty = [
    {
      name: "Mrs. Suman Thapa",
      position: "Head of Primary School",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      experience: "18+ years",
      qualification: "M.Ed in Primary Education",
    },
    {
      name: "Mr. Anup Rai",
      position: "Mathematics Teacher",
      image: "https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      experience: "12+ years",
      qualification: "B.Ed in Mathematics",
    },
    {
      name: "Mrs. Priti Sharma",
      position: "English Teacher",
      image: "https://images.unsplash.com/photo-1580894732930-0babd100d356?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      experience: "10+ years",
      qualification: "B.A. in English Literature",
    },
    {
      name: "Ms. Nirmala KC",
      position: "Science Teacher",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      experience: "8+ years",
      qualification: "M.Sc. in Life Sciences",
    },
  ];

  const subjects = [
    "Nepali Language", "English Language", "Mathematics", 
    "Science", "Social Studies", "Moral Education", 
    "Computer Science", "Physical Education", "Art and Craft"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-green-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-school-dark mb-4">
              Primary School Education
              <span className="block text-2xl md:text-3xl mt-2 text-school-primary">Class I to V</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Building a strong foundation through comprehensive education and holistic development.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-school-primary hover:bg-school-primary/90" asChild>
                <Link to="/admissions">Apply for Admission</Link>
              </Button>
              <Button variant="outline" className="border-school-primary text-school-primary hover:bg-school-primary/10" asChild>
                <Link to="/contact">Schedule a Visit</Link>
              </Button>
            </div>
          </motion.div>
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto relative"
          >
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <div className="relative h-[400px]">
                <div className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">Building Strong Foundations</h2>
                  <p className="text-white/90">Nurturing curious minds and developing essential skills</p>
                </div>
              </div>
            </div>
            
            {/* Stats on top of image */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <p className="text-3xl font-bold text-school-primary">1:20</p>
                <p className="text-gray-600 text-sm">Teacher-Student Ratio</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <p className="text-3xl font-bold text-school-primary">9+</p>
                <p className="text-gray-600 text-sm">Subjects Taught</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <p className="text-3xl font-bold text-school-primary">98%</p>
                <p className="text-gray-600 text-sm">Student Satisfaction</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <p className="text-3xl font-bold text-school-primary">15+</p>
                <p className="text-gray-600 text-sm">Extracurricular Activities</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-green-100 rounded-full opacity-50"></div>
        <div className="absolute top-40 -left-10 w-40 h-40 bg-yellow-100 rounded-full opacity-50"></div>
      </section>
      
      {/* Our Approach Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <BookOpen className="h-12 w-12 text-school-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-school-dark mb-4">
              Our Educational Approach
            </h2>
            <p className="text-gray-600 text-lg">
              Our primary school program focuses on developing essential academic skills while 
              nurturing critical thinking, creativity, and character.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="bg-school-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <feature.icon className="h-7 w-7 text-school-primary" />
                </div>
                <h3 className="text-xl font-bold text-school-dark mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Curriculum Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-school-dark mb-4">
              Comprehensive Curriculum
            </h2>
            <p className="text-gray-600 text-lg">
              Our curriculum is designed to provide a strong foundation in core subjects while 
              developing various skills necessary for future academic success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-school-dark mb-6">Core Subjects</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {subjects.map((subject, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center p-4 bg-white rounded-lg shadow-sm"
                  >
                    <span className="w-3 h-3 bg-school-primary rounded-full mr-3"></span>
                    <span className="font-medium">{subject}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-school-dark mb-6">Extracurricular Activities</h3>
                <ul className="space-y-3">
                  {[
                    "Sports: Cricket, Football, Basketball, Athletics",
                    "Music: Vocal and Instrumental Training",
                    "Art: Drawing, Painting, Crafts",
                    "Dance: Classical and Contemporary Forms",
                    "Chess and Mind Games",
                    "Science and Math Clubs",
                    "Literary Activities: Debate, Elocution, Creative Writing"
                  ].map((activity, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + (index * 0.1), duration: 0.5 }}
                      className="flex items-start"
                    >
                      <span className="text-school-primary mr-2">✓</span>
                      <span>{activity}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-xl overflow-hidden h-64 shadow-lg"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522661067900-ab829854a57f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">Interactive Learning</h3>
                    <p className="text-white/90">Engaging classroom activities</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="relative rounded-xl overflow-hidden h-64 shadow-lg"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1564429097439-923f83162db7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">Sports & Activities</h3>
                    <p className="text-white/90">Balanced physical development</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Faculty Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-school-dark mb-4">
              Meet Our Primary School Faculty
            </h2>
            <p className="text-gray-600 text-lg">
              Our experienced and passionate teachers are dedicated to nurturing young minds 
              and helping students reach their full potential.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {faculty.map((member, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
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
          </div>
          
          <div className="text-center mt-10">
            <Button variant="outline" className="border-school-primary text-school-primary hover:bg-school-primary/10">
              View All Faculty Members
            </Button>
          </div>
        </div>
      </section>
      
      {/* Facilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-school-dark mb-4">
              Facilities for Primary Students
            </h2>
            <p className="text-gray-600 text-lg">
              We provide state-of-the-art facilities to enhance the learning experience of our primary school students.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Modern Classrooms",
                image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
                description: "Spacious, well-ventilated classrooms equipped with modern teaching aids."
              },
              {
                title: "Science Laboratory",
                image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                description: "Age-appropriate laboratory for practical learning and scientific experiments."
              },
              {
                title: "Computer Lab",
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                description: "Computer lab with latest technology for digital literacy and educational software."
              },
              {
                title: "Library",
                image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                description: "Well-stocked library with age-appropriate books and reading areas."
              },
              {
                title: "Sports Facilities",
                image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1029&q=80",
                description: "Playgrounds and sports equipment for physical development and recreation."
              },
              {
                title: "Art & Music Room",
                image: "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                description: "Dedicated spaces for creative expression through art and music."
              }
            ].map((facility, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative rounded-xl overflow-hidden shadow-md group"
              >
                <div className="h-56 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url('${facility.image}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{facility.title}</h3>
                  <p className="text-white/90">{facility.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-school-primary hover:bg-school-primary/90" asChild>
              <Link to="/facilities">Explore All Facilities</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-school-primary to-school-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Join Our Primary School Community
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Give your child the advantage of quality education in a nurturing environment that prepares them for future success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-school-primary hover:bg-white/90" asChild>
              <Link to="/admissions">Apply for Admission</Link>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PrimarySchool;
