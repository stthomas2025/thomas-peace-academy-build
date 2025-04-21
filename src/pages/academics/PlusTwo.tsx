
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Microscope, Briefcase, Monitor, UtensilsCrossed, ArrowRight } from "lucide-react";

const courses = [
  {
    title: "Science",
    description: "Comprehensive science education preparing students for careers in medicine, engineering, research and more.",
    icon: Microscope,
    link: "/academics/courses/science",
    color: "bg-blue-50",
    iconColor: "text-blue-500",
    buttonColor: "border-blue-500 text-blue-500 hover:bg-blue-50"
  },
  {
    title: "Management",
    description: "A blend of business management principles, accountancy, and economics for aspiring future leaders.",
    icon: Briefcase,
    link: "/academics/courses/management",
    color: "bg-green-50",
    iconColor: "text-green-600",
    buttonColor: "border-green-600 text-green-600 hover:bg-green-50"
  },
  {
    title: "Computer Science",
    description: "In-depth study of programming, data structures, and IT systems for digital transformation careers.",
    icon: Monitor,
    link: "/academics/courses/computer-science",
    color: "bg-purple-50",
    iconColor: "text-purple-500",
    buttonColor: "border-purple-500 text-purple-500 hover:bg-purple-50"
  },
  {
    title: "Hotel Management",
    description: "Specialized training in hospitality operations, services, and management for careers in the hotel industry.",
    icon: UtensilsCrossed,
    link: "/academics/courses/hotel-management",
    color: "bg-amber-50",
    iconColor: "text-amber-500",
    buttonColor: "border-amber-500 text-amber-500 hover:bg-amber-50"
  }
];

const features = [
  "Experienced faculty with expertise in higher secondary education",
  "Well-equipped laboratories and modern teaching aids",
  "Regular career counseling and guidance sessions",
  "Specialized coaching for entrance examinations",
  "Industry exposure through field visits and guest lectures",
  "Regular parent-teacher meetings to track progress",
  "Focus on both academic excellence and personality development"
];

const PlusTwo = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="pt-32 pb-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-school-dark mb-4 text-center">
            Plus Two Education
            <span className="block text-2xl md:text-3xl mt-2 text-school-primary">Class XI to XII</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-center">
            Specialized streams with focus on higher education preparation and career paths.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button className="bg-school-primary hover:bg-school-primary/90" asChild>
              <Link to="/apply">Apply for Admission</Link>
            </Button>
            <Button variant="outline" className="border-school-primary text-school-primary hover:bg-school-primary/10" asChild>
              <Link to="/contact">Schedule a Visit</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-school-dark mb-4">Program Overview</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The Plus Two program at St. Thomas Secondary School represents the final stage of school education before students 
                transition to higher education. During these crucial two years, we offer specialized streams that align with students' 
                aptitudes, interests, and career aspirations.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our focus is on providing in-depth knowledge in chosen fields, developing critical thinking and analytical skills, 
                and preparing students for both board examinations and competitive entrance tests for professional courses. We believe 
                in nurturing not just academic excellence but also character, leadership, and a sense of social responsibility.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1532094349884-543019a69b2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')" }}
              ></div>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-school-dark mb-8 text-center">Our Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {courses.map((course, index) => (
              <Card key={index} className={`${course.color} border-none shadow-md hover:shadow-lg transition-all duration-300`}>
                <CardHeader>
                  <course.icon className={`h-12 w-12 ${course.iconColor} mb-4`} />
                  <CardTitle className="text-2xl font-bold">{course.title}</CardTitle>
                  <CardDescription className="text-gray-700">{course.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className={course.buttonColor} asChild>
                    <Link to={course.link} className="flex items-center">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="bg-purple-50 rounded-xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-school-dark mb-8 text-center">Program Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-school-dark mb-4">Board Results</h3>
              <p className="text-gray-700 mb-6">
                Our students consistently achieve outstanding results in the National Examination Board (NEB) examinations:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                  <span>Over 90% students score first division or higher</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                  <span>Multiple students in top 10 rank at regional level</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                  <span>100% pass rate for the last 5 consecutive years</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-amber-100 to-red-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-school-dark mb-4">Higher Education Placements</h3>
              <p className="text-gray-700 mb-6">
                Our alumni have secured admissions in prestigious institutions across Nepal and abroad:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                  <span>Medical and engineering colleges in Nepal and India</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                  <span>Leading management institutes and universities</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                  <span>International universities in USA, UK, Australia, and more</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/academics/high" className="text-school-primary hover:underline mr-8">
              ← High School Program
            </Link>
            <Link to="/academics" className="text-school-primary hover:underline">
              Back to Academics →
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PlusTwo;
