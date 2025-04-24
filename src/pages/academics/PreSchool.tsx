
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Heart, Shield, Music, Users, Award, GraduationCap } from "lucide-react";

const PreSchool = () => {
  const preschoolImages = [
    {
      src: "/lovable-uploads/pre school/founder (12).jpg",
      caption: "Playful Kids' Room"
    },
    {
      src: "/lovable-uploads/pre school/founder (13).jpg",
      caption: "Interactive Learning Activities"
    },
    {
      src: "/lovable-uploads/pre school/founder (14).jpg",
      caption: "Creative Arts Time"
    },
    {
      src: "/lovable-uploads/pre school/founder (15).jpg",
      caption: "Outdoor Fun with Class"
    },
    {
      src: "/lovable-uploads/pre school/founder (16).jpg",
      caption: "Story Time Session"
    },
    {
      src: "/lovable-uploads/pre school/founder (17).jpg",
      caption: "Group Activities"
    },
    {
      src: "/lovable-uploads/pre school/founder (18).jpg",
      caption: "Circle Time"
    },
    {
      src: "/lovable-uploads/pre school/founder (19).jpg",
      caption: "Creative Play"
    },
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Interactive Learning",
      description: "Age-appropriate activities that make learning fun and engaging for young minds."
    },
    {
      icon: Heart,
      title: "Nurturing Environment",
      description: "A caring atmosphere where children feel safe, loved, and encouraged to explore."
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Comprehensive safety measures to ensure the well-being of every child in our care."
    },
    {
      icon: Music,
      title: "Creative Expression",
      description: "Various activities that promote artistic development and self-expression."
    },
    {
      icon: Users,
      title: "Social Development",
      description: "Opportunities for children to develop essential social and emotional skills."
    },
    {
      icon: Award,
      title: "Growth Milestones",
      description: "Regular assessment of developmental milestones to track each child's progress."
    }
  ];

  const faculty = [
    {
      name: "Mrs. Anjali Patel",
      position: "Head of Pre-School",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      experience: "15+ years",
      qualification: "M.Ed in Early Childhood Education",
    },
    {
      name: "Mr. Rajiv Shrestha",
      position: "Nursery Teacher",
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      experience: "8+ years",
      qualification: "B.Ed in Child Psychology",
    },
    {
      name: "Mrs. Sunita Gurung",
      position: "LKG Teacher",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      experience: "10+ years",
      qualification: "B.Ed in Elementary Education",
    },
    {
      name: "Ms. Prabha Thakuri",
      position: "UKG Teacher",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      experience: "7+ years",
      qualification: "B.Ed in Early Childhood Development",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-school-dark mb-4">
              Pre-School Education
              <span className="block text-2xl md:text-3xl mt-2 text-school-primary">Nursery to UKG</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Where young minds begin their educational journey in a nurturing, 
              engaging, and safe environment.
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
                <img 
                  src="/lovable-uploads/pre school/founder (14).jpg"
                  alt="Pre-School Children"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">A Joyful Beginning</h2>
                  <p className="text-white/90">Children learning through play and exploration</p>
                </div>
              </div>
            </div>
            
            {/* Stats on top of image */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <p className="text-3xl font-bold text-school-primary">3:1</p>
                <p className="text-gray-600 text-sm">Student-Teacher Ratio</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <p className="text-3xl font-bold text-school-primary">12</p>
                <p className="text-gray-600 text-sm">Students per Class</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <p className="text-3xl font-bold text-school-primary">8+</p>
                <p className="text-gray-600 text-sm">Activity Centers</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <p className="text-3xl font-bold text-school-primary">5+</p>
                <p className="text-gray-600 text-sm">Hours of Play</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full opacity-50"></div>
        <div className="absolute top-40 -left-10 w-40 h-40 bg-green-100 rounded-full opacity-50"></div>
      </section>
      
      {/* Our Approach Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <GraduationCap className="h-12 w-12 text-school-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-school-dark mb-4">
              Our Educational Approach
            </h2>
            <p className="text-gray-600 text-lg">
              We believe that young children learn best through play, exploration, and meaningful interactions. 
              Our curriculum is designed to foster curiosity and a love for learning.
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
          
          {/* Additional Info */}
          <div className="mt-16 p-8 bg-blue-50 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-school-dark mb-4">Our Unique Curriculum</h3>
                <p className="text-gray-600 mb-4">
                  Our pre-school curriculum focuses on developing:
                </p>
                <ul className="space-y-2">
                  {[
                    "Language and literacy skills through stories and rhymes",
                    "Cognitive abilities through puzzles and problem-solving activities",
                    "Motor skills through arts, crafts, and outdoor play",
                    "Social and emotional growth through group activities",
                    "Cultural awareness through festivals and celebrations"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-school-primary mr-2">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-64 overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/pre school/founder (18).jpg"
                  alt="Pre-school curriculum activities"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Daily Schedule */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-school-dark mb-4">
              A Day in Pre-School
            </h2>
            <p className="text-gray-600 text-lg">
              Our balanced daily schedule provides structure while allowing flexibility for children's interests and needs.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-school-primary/20 transform md:translate-x-px"></div>
              
              {/* Timeline Items */}
              {[
                {time: "8:30 AM", activity: "Arrival & Free Play", description: "Children arrive and engage in free play activities of their choice."},
                {time: "9:00 AM", activity: "Morning Circle", description: "Group time for greetings, calendar, weather, and introduction to the day's activities."},
                {time: "9:30 AM", activity: "Learning Centers", description: "Children rotate through various learning centers focusing on different developmental areas."},
                {time: "10:30 AM", activity: "Outdoor Play", description: "Structured and free play in our safe outdoor playground."},
                {time: "11:15 AM", activity: "Story Time", description: "Interactive storytelling to develop language and listening skills."},
                {time: "11:45 AM", activity: "Lunch Time", description: "Nutritious meal and development of social and self-help skills."},
                {time: "12:30 PM", activity: "Rest/Quiet Time", description: "Nap time for younger children, quiet activities for older ones."},
                {time: "1:30 PM", activity: "Creative Activities", description: "Art, music, and creative expression activities."},
                {time: "2:30 PM", activity: "Snack & Closing Circle", description: "Afternoon snack followed by reflection on the day's activities."},
                {time: "3:00 PM", activity: "Dismissal", description: "Children prepare to go home or join extended programs."},
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`relative flex flex-col md:flex-row items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-5 h-5 bg-school-primary rounded-full transform -translate-x-2 md:-translate-x-[10px] z-10"></div>
                  
                  {/* Content */}
                  <div className="ml-8 md:ml-0 w-full md:w-[calc(50%-20px)] p-6 bg-blue-50 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                      <div className="bg-school-primary text-white px-3 py-1 rounded text-sm font-bold mr-3">
                        {item.time}
                      </div>
                      <h3 className="text-xl font-bold text-school-dark">{item.activity}</h3>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Button className="bg-school-primary hover:bg-school-primary/90" asChild>
              <Link to="/contact">Schedule a Campus Tour</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Faculty Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-school-dark mb-4">
              Our Pre-School Faculty
            </h2>
            <p className="text-gray-600 text-lg">
              Dedicated educators with specialized training in early childhood education.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {faculty.map((teacher, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={teacher.image} 
                    alt={teacher.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-1">{teacher.name}</h3>
                  <p className="text-school-primary font-medium mb-2">{teacher.position}</p>
                  <div className="text-sm text-gray-600">
                    <p>Experience: {teacher.experience}</p>
                    <p>Qualification: {teacher.qualification}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-school-dark mb-4">
              Pre-School Gallery
            </h2>
            <p className="text-gray-600 text-lg">
              Glimpses of our vibrant pre-school environment and activities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {preschoolImages.map((img, idx) => (
              <div key={idx} className="relative overflow-hidden rounded-lg group h-64">
                <img 
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-medium">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-school-primary to-school-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Begin Your Child's Educational Journey
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Enroll your child in our pre-school program and give them the foundation they need for future academic success.
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

export default PreSchool;
