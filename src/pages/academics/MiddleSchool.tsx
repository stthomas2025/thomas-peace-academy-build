
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Users, Brain, Award } from "lucide-react";

const MiddleSchool = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Well-rounded curriculum covering core subjects with emphasis on conceptual understanding and practical application."
    },
    {
      icon: Users,
      title: "Experienced Faculty",
      description: "Dedicated teachers with expertise in teaching middle school students and understanding their developmental needs."
    },
    {
      icon: Brain,
      title: "Critical Thinking",
      description: "Focus on developing analytical skills, problem-solving abilities, and independent thinking."
    },
    {
      icon: Award,
      title: "Co-Curricular Activities",
      description: "Wide range of activities to develop talents, interests, and social skills beyond academics."
    }
  ];

  const subjects = [
    "English Language & Literature",
    "Mathematics",
    "Science",
    "Social Studies",
    "Nepali Language",
    "Computer Science",
    "Art & Craft",
    "Music & Performing Arts",
    "Physical Education",
    "Moral Science"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-yellow-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-school-dark mb-4 text-center">
            Middle School Education
            <span className="block text-2xl md:text-3xl mt-2 text-school-primary">Class VI to VIII</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-center">
            Expanding horizons through comprehensive education and skill development for adolescents.
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
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80')" }}
              ></div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-school-dark mb-4">Program Overview</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The Middle School program at St. Thomas Secondary School is designed to meet the unique academic, social, 
                and emotional needs of students in Classes VI to VIII. During these formative years, we focus on building 
                strong foundations in core subjects while nurturing critical thinking, creativity, and character development.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our curriculum provides a balanced approach to education, combining rigorous academic standards with 
                opportunities for exploration and discovery. Students are encouraged to take ownership of their learning, 
                ask questions, collaborate with peers, and apply their knowledge to real-world situations.
              </p>
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
          
          <div className="bg-yellow-50 rounded-xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-school-dark mb-8 text-center">Academic Curriculum</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-school-dark mb-4">Core Subjects</h3>
                <ul className="space-y-3">
                  {subjects.slice(0, 5).map((subject, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                      <span>{subject}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-school-dark mb-4">Co-Curricular Subjects</h3>
                <ul className="space-y-3">
                  {subjects.slice(5).map((subject, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                      <span>{subject}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-school-dark mb-3">Project-Based Learning</h3>
              <p className="text-gray-600 mb-4">
                Students engage in hands-on projects that connect classroom learning to real-world applications, 
                fostering deeper understanding and practical skills.
              </p>
              <div className="relative h-40 rounded-lg overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1232&q=80')" }}
                ></div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-school-dark mb-3">Talent Development</h3>
              <p className="text-gray-600 mb-4">
                Various clubs, competitions, and cultural activities help students discover and develop their 
                unique talents and interests outside the classroom.
              </p>
              <div className="relative h-40 rounded-lg overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522543558187-768b6df7c25c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')" }}
                ></div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-school-dark mb-3">Personal Development</h3>
              <p className="text-gray-600 mb-4">
                Life skills, value education, and counseling programs support the socio-emotional development and 
                character formation of students.
              </p>
              <div className="relative h-40 rounded-lg overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')" }}
                ></div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/academics" className="text-school-primary hover:underline mr-8">
              ← Back to Academics
            </Link>
            <Link to="/academics/high" className="text-school-primary hover:underline">
              High School Program →
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default MiddleSchool;
