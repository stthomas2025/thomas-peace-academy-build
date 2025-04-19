
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Quote } from "lucide-react";

const PrincipalMessage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-school-dark mb-4 text-center">
            Principal's Message
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto text-center">
            Words of wisdom and guidance from our school principal.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-start">
            <div className="md:col-span-1">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative h-[400px]">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80')" }}
                  ></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-school-dark mb-1">Dr. Thomas Johnson</h3>
                  <p className="text-school-primary font-medium mb-4">Principal</p>
                  <p className="text-gray-600">
                    Ph.D. in Education<br />
                    20+ years in Educational Leadership<br />
                    National Award for Excellence in Teaching
                  </p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2 bg-white rounded-xl shadow-md p-8">
              <Quote className="h-16 w-16 text-school-primary/20 mb-6" />
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Dear Students, Parents, and Well-wishers,
                </p>
                <p>
                  It is my privilege to welcome you to St. Thomas Secondary School, an institution that has been 
                  nurturing young minds and shaping futures for over four decades. As we navigate the challenges 
                  and opportunities of the 21st century, our commitment to providing quality education remains unwavering.
                </p>
                <p>
                  At St. Thomas, we believe that education is not merely about acquiring knowledge but about 
                  transforming lives. Our holistic approach to education focuses on developing well-rounded 
                  individuals who excel academically, think critically, act ethically, and contribute meaningfully 
                  to society.
                </p>
                <p>
                  Our dedicated faculty, state-of-the-art facilities, and comprehensive curriculum create an 
                  environment where students can discover their unique talents, pursue their passions, and realize 
                  their full potential. We foster a culture of inquiry, innovation, and inclusion, preparing our 
                  students to thrive in a rapidly changing world.
                </p>
                <p>
                  To our students, I encourage you to embrace the challenges and opportunities that come your way. 
                  Learning is a lifelong journey, and the habits, skills, and values you develop here will serve you 
                  throughout your life. Be curious, be compassionate, and be courageous in your pursuit of excellence.
                </p>
                <p>
                  To our parents and guardians, I thank you for entrusting us with your children's education. 
                  Your partnership and support are invaluable in our shared mission of nurturing the next generation 
                  of leaders, thinkers, and citizens.
                </p>
                <p>
                  As we move forward together, let us continue to uphold the values and traditions that have made 
                  St. Thomas Secondary School a beacon of educational excellence while embracing the innovations that 
                  will shape our future.
                </p>
                <p className="font-bold">
                  Warm regards,<br />
                  Dr. Thomas Johnson<br />
                  Principal
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 rounded-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-school-dark mb-6 text-center">Principal's Vision</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-school-dark mb-3">Academic Excellence</h3>
                <p className="text-gray-600">
                  To maintain the highest standards of academic rigor while making learning engaging, relevant, and accessible to all students.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-school-dark mb-3">Character Development</h3>
                <p className="text-gray-600">
                  To nurture individuals of strong character who embody integrity, compassion, and responsibility in all their actions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-school-dark mb-3">Future Readiness</h3>
                <p className="text-gray-600">
                  To equip students with the skills, knowledge, and mindset they need to navigate the complexities of the modern world.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-school-primary hover:bg-school-primary/90" asChild>
              <Link to="/about">Back to About</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PrincipalMessage;
