
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Microscope, Atom, BookOpen, Calculator, Lightbulb, Beaker } from "lucide-react";

const Science = () => {
  const subjects = [
    {
      name: "Physics",
      description: "Study of matter, energy, and the interaction between them, with a focus on mechanics, electricity, magnetism, and optics.",
      icon: Atom
    },
    {
      name: "Chemistry",
      description: "Exploration of the properties, composition, and structure of substances and the transformations they undergo.",
      icon: Beaker
    },
    {
      name: "Biology",
      description: "Study of living organisms, their structure, function, growth, origin, evolution, and distribution.",
      icon: Microscope
    },
    {
      name: "Mathematics",
      description: "Study of numbers, quantities, structure, space, and change, providing a foundation for scientific analysis.",
      icon: Calculator
    },
    {
      name: "English",
      description: "Development of language skills, literature appreciation, and effective communication abilities.",
      icon: BookOpen
    }
  ];

  const careers = [
    "Medicine & Healthcare",
    "Engineering",
    "Research & Development",
    "Environmental Science",
    "Biotechnology",
    "Pharmaceuticals",
    "Data Science",
    "Astronomy & Space Science"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600 mb-8">
            <Link to="/academics" className="hover:text-school-primary">Academics</Link>
            <span className="mx-2">›</span>
            <Link to="/academics/plus-two" className="hover:text-school-primary">Plus Two</Link>
            <span className="mx-2">›</span>
            <span className="text-school-primary">Science</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-school-dark mb-4">
            Science Stream
            <span className="block text-2xl md:text-3xl mt-2 text-school-primary">Plus Two (Class XI-XII)</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Comprehensive science education preparing students for careers in medicine, engineering, research, and more.
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
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1532094349884-543019a69b2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')" }}
              ></div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-school-dark mb-4">Program Overview</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The Science stream at St. Thomas Secondary School is designed for students with a strong aptitude for 
                scientific inquiry and analytical thinking. Our comprehensive curriculum provides a solid foundation in 
                Physics, Chemistry, Biology, and Mathematics, preparing students for higher education in science, 
                engineering, medicine, and related fields.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With state-of-the-art laboratories, experienced faculty, and a focus on both theoretical understanding 
                and practical applications, our program equips students with the knowledge, skills, and scientific 
                temperament needed to excel in competitive examinations and pursue careers in various scientific disciplines.
              </p>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-8 md:p-12 mb-16">
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
                  <span>Well-equipped laboratories for Physics, Chemistry, and Biology</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                  <span>Regular practical sessions to reinforce theoretical concepts</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                  <span>Faculty with advanced degrees and teaching experience</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                  <span>Special coaching for competitive examinations</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                  <span>Regular tests and assessments with detailed feedback</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                  <span>Educational field trips and industry visits</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-school-dark mb-4">Career Opportunities</h3>
              <p className="text-gray-700 mb-6">
                The Science stream opens doors to a wide range of career opportunities in fields that require strong 
                scientific knowledge and analytical skills:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {careers.map((career, index) => (
                  <div key={index} className="bg-blue-50 p-3 rounded-lg">
                    <span className="text-school-dark font-medium">{career}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-8 md:p-12 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-school-dark mb-4">Admission Requirements</h2>
                <p className="text-gray-700 mb-6">
                  Admission to the Science stream is based on the following criteria:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                    <span>Minimum 60% marks in Secondary Education Examination (SEE) or equivalent</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                    <span>Strong performance in Science and Mathematics in SEE</span>
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
              <div className="relative h-[300px] rounded-xl overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')" }}
                ></div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/academics/plus-two" className="text-school-primary hover:underline mr-8">
              ← Back to Plus Two Programs
            </Link>
            <Link to="/academics/courses/management-cs" className="text-school-primary hover:underline">
              View Management with Computer Science →
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Science;
