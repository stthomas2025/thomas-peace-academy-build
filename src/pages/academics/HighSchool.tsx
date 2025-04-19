
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, Bookmark, ClipboardCheck, UserCheck } from "lucide-react";

const HighSchool = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Board Exam Preparation",
      description: "Comprehensive preparation for Secondary Education Examination (SEE) with regular tests and assessments."
    },
    {
      icon: Bookmark,
      title: "Specialized Faculty",
      description: "Experienced teachers with expertise in preparing students for board examinations and competitive tests."
    },
    {
      icon: ClipboardCheck,
      title: "Career Guidance",
      description: "Personalized counseling to help students make informed decisions about their future academic paths."
    },
    {
      icon: UserCheck,
      title: "Leadership Development",
      description: "Opportunities to develop leadership skills through prefect system, clubs, and community service."
    }
  ];

  const subjects = [
    "English",
    "Nepali",
    "Mathematics",
    "Science",
    "Social Studies",
    "Health, Population & Environment",
    "Optional I (Computer Science)",
    "Optional II (Accountancy)",
    "Moral Education"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-red-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-school-dark mb-4 text-center">
            High School Education
            <span className="block text-2xl md:text-3xl mt-2 text-school-primary">Class IX to X</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-center">
            Preparing students for board exams with comprehensive academic preparation and career guidance.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button className="bg-school-primary hover:bg-school-primary/90" asChild>
              <Link to="/admissions">Apply for Admission</Link>
            </Button>
            <Button variant="outline" className="border-school-primary text-school-primary hover:bg-school-primary/10" asChild>
              <Link to="/contact">Schedule a Visit</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-school-dark mb-4">Program Overview</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The High School program at St. Thomas Secondary School is focused on preparing students for the Secondary 
                Education Examination (SEE) and building a strong foundation for higher education. This crucial phase 
                of education emphasizes academic excellence, critical thinking, and character development.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our comprehensive approach ensures that students not only excel in their board examinations but also 
                develop the knowledge, skills, and values needed for success in their future academic and professional 
                endeavors. The curriculum is designed to challenge students intellectually while providing the necessary 
                support and guidance.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')" }}
              ></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <feature.icon className="h-12 w-12 text-school-primary mb-4" />
                <h3 className="text-xl font-bold text-school-dark mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-red-50 rounded-xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-school-dark mb-8 text-center">Academic Curriculum</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-bold text-school-dark mb-4">Core Subjects</h3>
                <ul className="space-y-3">
                  {subjects.map((subject, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                      <span>{subject}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-school-dark mb-4">Our Approach</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">1</div>
                    <span><span className="font-bold">Conceptual Understanding:</span> Focus on building strong conceptual foundations rather than rote learning.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">2</div>
                    <span><span className="font-bold">Regular Assessment:</span> Frequent tests and examinations to track progress and identify areas for improvement.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">3</div>
                    <span><span className="font-bold">Doubt Clearing Sessions:</span> Additional classes for clarifying doubts and addressing challenging topics.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">4</div>
                    <span><span className="font-bold">Revision Programs:</span> Structured revision schedules to ensure thorough preparation for board exams.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-school-dark mb-3">Academic Excellence</h3>
              <p className="text-gray-600 mb-4">
                Our students consistently achieve outstanding results in the SEE, with many securing top positions 
                at the regional and national levels.
              </p>
              <div className="relative h-40 rounded-lg overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80')" }}
                ></div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-school-dark mb-3">Career Counseling</h3>
              <p className="text-gray-600 mb-4">
                Dedicated career counseling sessions to help students make informed choices about their future 
                academic and career paths after SEE.
              </p>
              <div className="relative h-40 rounded-lg overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')" }}
                ></div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-school-dark mb-3">Extracurricular Balance</h3>
              <p className="text-gray-600 mb-4">
                Balanced approach that ensures academic rigor while providing opportunities for extracurricular 
                activities and personal development.
              </p>
              <div className="relative h-40 rounded-lg overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')" }}
                ></div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/academics/middle" className="text-school-primary hover:underline mr-8">
              ← Middle School Program
            </Link>
            <Link to="/academics/plus-two" className="text-school-primary hover:underline">
              Plus Two Program →
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HighSchool;
