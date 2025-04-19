
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Monitor, Briefcase, BookOpen, BarChart, Lightbulb } from "lucide-react";

const ManagementCS = () => {
  const subjects = [
    {
      name: "Business Studies",
      description: "Study of business organizations, management principles, and corporate practices.",
      icon: Briefcase
    },
    {
      name: "Computer Science",
      description: "Study of programming, data structures, algorithms, and computer systems.",
      icon: Monitor
    },
    {
      name: "Accountancy",
      description: "Principles and practices of recording, classifying, and reporting financial transactions.",
      icon: BarChart
    },
    {
      name: "Economics",
      description: "Study of production, distribution, and consumption of goods and services.",
      icon: BarChart
    },
    {
      name: "English",
      description: "Development of language skills, business communication, and literature appreciation.",
      icon: BookOpen
    }
  ];

  const careers = [
    "Software Development",
    "Business Analysis",
    "Financial Management",
    "Marketing & Sales",
    "Entrepreneurship",
    "Data Analytics",
    "Banking & Finance",
    "Information Technology"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600 mb-8">
            <Link to="/academics" className="hover:text-school-primary">Academics</Link>
            <span className="mx-2">›</span>
            <Link to="/academics/plus-two" className="hover:text-school-primary">Plus Two</Link>
            <span className="mx-2">›</span>
            <span className="text-school-primary">Management with Computer Science</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-school-dark mb-4">
            Management with Computer Science
            <span className="block text-2xl md:text-3xl mt-2 text-school-primary">Plus Two (Class XI-XII)</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Blend of business management principles with computer science skills for the digital business world.
          </p>
          
          <div className="flex flex-wrap justify-start gap-4 mb-16">
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
                The Management with Computer Science program at St. Thomas Secondary School offers a unique combination 
                of business management principles and computer science skills. This interdisciplinary approach prepares 
                students for careers at the intersection of business and technology in today's digital economy.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Students gain a strong foundation in business studies, accountancy, and economics, while also developing 
                programming skills, understanding of data structures, and knowledge of computer systems. This dual focus 
                makes graduates highly adaptable in a rapidly evolving job market where technical literacy is increasingly 
                valued in business roles.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')" }}
              ></div>
            </div>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-school-dark mb-8 text-center">Core Subjects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subjects.map((subject, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <subject.icon className="h-12 w-12 text-school-primary mb-4" />
                  <h3 className="text-xl font-bold text-school-dark mb-2">{subject.name}</h3>
                  <p className="text-gray-600">{subject.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <Lightbulb className="h-12 w-12 text-school-primary mb-4" />
              <h3 className="text-2xl font-bold text-school-dark mb-4">Program Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                  <span>Modern computer laboratory with latest hardware and software</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                  <span>Practical business projects and case studies</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                  <span>Industry exposure through guest lectures and company visits</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                  <span>Entrepreneurship workshops and business plan competitions</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                  <span>Programming competitions and IT project exhibitions</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                  <span>Career guidance for higher education in management and IT</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-school-dark mb-4">Career Opportunities</h3>
              <p className="text-gray-700 mb-6">
                The Management with Computer Science program prepares students for diverse career paths in the modern 
                business landscape where technology plays a crucial role:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {careers.map((career, index) => (
                  <div key={index} className="bg-purple-50 p-3 rounded-lg">
                    <span className="text-school-dark font-medium">{career}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl p-8 md:p-12 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[300px] rounded-xl overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1447&q=80')" }}
                ></div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-school-dark mb-4">Admission Requirements</h2>
                <p className="text-gray-700 mb-6">
                  Admission to the Management with Computer Science program is based on the following criteria:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                    <span>Minimum 55% marks in Secondary Education Examination (SEE) or equivalent</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                    <span>Good performance in Mathematics and English in SEE</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                    <span>Entrance examination conducted by the school</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                    <span>Personal interview</span>
                  </li>
                </ul>
                <Button className="mt-6 bg-school-primary hover:bg-school-primary/90" asChild>
                  <Link to="/admissions">Apply Now</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/academics/courses/science" className="text-school-primary hover:underline mr-8">
              ← Science Stream
            </Link>
            <Link to="/academics/courses/hotel-management" className="text-school-primary hover:underline">
              Hotel Management →
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ManagementCS;
