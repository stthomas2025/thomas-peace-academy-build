
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Trophy, Running, Users, Calendar } from "lucide-react";

const Sports = () => {
  const facilities = [
    {
      icon: Trophy,
      title: "Indoor Sports Complex",
      description: "Multi-purpose indoor sports facility for basketball, badminton, table tennis, and other indoor games."
    },
    {
      icon: Running,
      title: "Athletic Field",
      description: "Standard 400m track for athletics with facilities for jumps, throws, and sprints."
    },
    {
      icon: Users,
      title: "Team Sports Grounds",
      description: "Dedicated fields for football, cricket, and volleyball with proper equipment."
    },
    {
      icon: Calendar,
      title: "Annual Sports Meet",
      description: "School-wide sports competition held annually to foster sportsmanship and team spirit."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-school-dark mb-4 text-center">
            Sports Facilities
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto text-center">
            Comprehensive sports facilities to promote physical fitness, teamwork, and sportsmanship.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <facility.icon className="h-12 w-12 text-school-primary mb-4" />
                <h3 className="text-xl font-bold text-school-dark mb-2">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-orange-50 rounded-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-school-dark mb-4">Our Sports Program</h2>
                <p className="text-gray-700 mb-4">
                  At St. Thomas Secondary School, we believe in the holistic development of our students. Our sports program is designed to:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                    <span>Develop physical fitness and coordination</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                    <span>Foster teamwork and leadership skills</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                    <span>Instill discipline and time management</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-school-primary/20 flex items-center justify-center text-school-primary mr-3 mt-1">✓</div>
                    <span>Build character and sportsmanship</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-[300px] rounded-xl overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1471295253337-3ceaaedca402?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80')" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-school-dark mb-3">Physical Education Classes</h3>
              <p className="text-gray-600 mb-4">
                Regular PE classes are part of our curriculum across all grades. Students learn various sports and participate in fitness activities.
              </p>
              <div className="relative h-40 rounded-lg overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')" }}
                ></div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-school-dark mb-3">Sports Competitions</h3>
              <p className="text-gray-600 mb-4">
                Inter-house and interschool sports competitions are organized regularly to encourage healthy competition.
              </p>
              <div className="relative h-40 rounded-lg overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')" }}
                ></div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-school-dark mb-3">Specialized Coaching</h3>
              <p className="text-gray-600 mb-4">
                Professional coaches for specific sports provide specialized training to students who show exceptional talent.
              </p>
              <div className="relative h-40 rounded-lg overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1336&q=80')" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-school-primary hover:bg-school-primary/90" asChild>
              <Link to="/facilities">Back to Facilities</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Sports;
