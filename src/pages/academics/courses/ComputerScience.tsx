
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, Cpu, ChevronRight, ArrowRight, Check } from "lucide-react";

const ComputerScience = () => {
  const subjects = [
    "Computer Science",
    "Programming in C++/Java",
    "Web Development",
    "Database Management",
    "Mathematics",
    "Physics",
    "English"
  ];

  const careerOptions = [
    "Software Development",
    "Web Development",
    "Database Administration",
    "Network Engineering",
    "Artificial Intelligence",
    "Cybersecurity"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-school-dark mb-4">
                Computer Science
                <span className="block text-2xl md:text-3xl mt-2 text-purple-600">Plus Two Stream</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Build a strong foundation in technology and programming for the digital future
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white" asChild>
                  <Link to="/apply">Apply for Admission</Link>
                </Button>
                <Button variant="outline" className="border-purple-600 text-purple-600" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
                  alt="Computer Science Class" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-school-dark mb-4">Program Overview</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The Computer Science stream at St. Thomas Secondary School is designed to prepare students 
                  for careers in the rapidly evolving field of information technology. Our comprehensive curriculum 
                  covers programming, web development, database management, and other essential aspects of computer science.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Students gain hands-on experience through practical sessions in our state-of-the-art computer labs, 
                  working on real-world projects, and participating in coding competitions. We emphasize both theoretical 
                  knowledge and practical skills to ensure our students are ready for higher education and employment in the tech industry.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
              <h2 className="text-3xl font-bold text-school-dark mb-8 text-center">Core Subjects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {subjects.map((subject, index) => (
                  <div key={index} className="flex items-center bg-purple-50 p-4 rounded-lg">
                    <ChevronRight className="text-purple-600 mr-3 h-5 w-5" />
                    <span className="text-gray-800 font-medium">{subject}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-purple-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-school-dark mb-6 flex items-center">
                  <Cpu className="text-purple-600 mr-3 h-6 w-6" />
                  Learning Environment
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-3 mt-1">✓</div>
                    <span className="text-gray-700">Modern computer labs with the latest hardware and software</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-3 mt-1">✓</div>
                    <span className="text-gray-700">Project-based learning with real-world applications</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-3 mt-1">✓</div>
                    <span className="text-gray-700">Coding bootcamps and hackathons</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-3 mt-1">✓</div>
                    <span className="text-gray-700">Guest lectures from industry professionals</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-3 mt-1">✓</div>
                    <span className="text-gray-700">Participation in regional and national level tech competitions</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-purple-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-school-dark mb-6">Career Opportunities</h3>
                <p className="text-gray-700 mb-4">
                  The Computer Science stream opens doors to various undergraduate courses and career paths in the tech industry:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {careerOptions.map((career, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="text-purple-600 mr-2 h-5 w-5" />
                      <span className="text-gray-700">{career}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center bg-white rounded-xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-school-dark mb-6">Ready to Join?</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Apply now for the Computer Science stream at St. Thomas Secondary School and start your journey toward a successful tech career.
              </p>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white" asChild>
                <Link to="/apply">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ComputerScience;
