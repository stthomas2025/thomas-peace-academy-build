
import React from "react";
import { motion } from "framer-motion";
import { Calendar, Users, GraduationCap, Award, BookOpen, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  const milestones = [
    { year: "1990", event: "St. Thomas Secondary School founded" },
    { year: "1995", event: "First batch of SLC (now SEE) graduates" },
    { year: "2000", event: "Expanded to include Plus Two programs" },
    { year: "2005", event: "New campus building inaugurated" },
    { year: "2010", event: "Celebrated 20 years of educational excellence" },
    { year: "2015", event: "Modernization of facilities and technology integration" },
    { year: "2020", event: "Launch of enhanced curriculum and teaching methodologies" }
  ];

  const values = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "We strive for the highest standards of education and intellectual growth."
    },
    {
      icon: Users,
      title: "Character Development",
      description: "We nurture values, ethics, and positive character traits in our students."
    },
    {
      icon: Award,
      title: "Holistic Growth",
      description: "We focus on the all-round development of every student."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-school-primary/10 to-white relative">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-school-dark mb-6">
              About St. Thomas Secondary School
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A premier educational institution providing quality education in a peaceful environment since 1990.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-school-primary hover:bg-school-primary/90" asChild>
                <Link to="/about/history">Our History</Link>
              </Button>
              <Button variant="outline" className="border-school-primary text-school-primary hover:bg-school-primary/10" asChild>
                <Link to="/about/mission">Mission & Vision</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* School Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block h-1.5 w-12 bg-school-primary mb-4"></span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-school-dark mb-6">
                Our Educational Legacy
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                St. Thomas Secondary School was established in 1990 with a vision to provide quality education in a peaceful environment. 
                Located in Nepalganj, our school offers classes from Nursery to XII with a focus on academic excellence and holistic development.
              </p>
              <p className="text-gray-600 mb-8">
                Over the years, we have evolved into one of the most respected educational institutions in the region, 
                known for our dedication to academic excellence, character building, and holistic development of students.
              </p>
              
              <div className="flex items-center space-x-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-school-primary mb-1">2000+</div>
                  <p className="text-sm text-gray-500">Students</p>
                </div>
                <div className="h-12 w-px bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-school-primary mb-1">100+</div>
                  <p className="text-sm text-gray-500">Faculty Members</p>
                </div>
                <div className="h-12 w-px bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-school-primary mb-1">30+</div>
                  <p className="text-sm text-gray-500">Years of Excellence</p>
                </div>
              </div>
              
              <Link 
                to="/about/history" 
                className="inline-flex items-center text-school-primary font-medium hover:underline"
              >
                Read Our Full History <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-[500px] overflow-hidden rounded-xl shadow-xl">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/lovable-uploads/ee7faf30-f2e5-4db9-8793-45de8d71982c.png')" }}
                ></div>
                
                {/* School Timeline Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end p-8">
                  <div className="w-full">
                    <h3 className="text-2xl font-bold text-white mb-4">Our Journey</h3>
                    <div className="flex overflow-x-auto pb-4 space-x-4">
                      {milestones.map((milestone, index) => (
                        <div key={index} className="flex-shrink-0 bg-white/10 backdrop-blur-sm p-4 rounded-lg min-w-[150px]">
                          <div className="text-xl font-bold text-school-accent mb-1">{milestone.year}</div>
                          <p className="text-white/90 text-sm">{milestone.event}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-school-secondary/20 rounded-full -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-school-primary/20 rounded-full -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block h-1.5 w-12 bg-school-primary mx-auto mb-4"></span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-school-dark mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-lg">
              These fundamental principles guide our approach to education and shape our school culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="bg-school-primary/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-10 w-10 text-school-primary" />
                </div>
                <h3 className="text-xl font-bold text-school-dark mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="border-school-primary text-school-primary hover:bg-school-primary/10" asChild>
              <Link to="/about/mission">Learn About Our Mission & Vision</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Founder's & Principal's Message Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block h-1.5 w-12 bg-school-primary mx-auto mb-4"></span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-school-dark mb-4">
              Leadership Messages
            </h2>
            <p className="text-gray-600 text-lg">
              Words from our visionary leadership who guide our institution towards excellence.
            </p>
          </div>
          
          {/* Founder's Message */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center mb-20"
          >
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="lovable-uploads/arjun sir.jpg"
                    alt="Founder" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-school-primary/20 rounded-full -z-10"></div>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <h3 className="text-2xl font-serif font-bold text-school-dark mb-2">
                Founder's Message
              </h3>
              <h4 className="text-xl text-school-primary font-medium mb-6">Mr. Arjun Shrestha, Founder & Chairman</h4>
              <div className="text-gray-600 space-y-4">
                <p>
                  "When I established St. Thomas Secondary School in 1990, my vision was to create an educational institution 
                  that would not only impart knowledge but also instill values, ethics, and a sense of social responsibility 
                  in students. Over the years, it has been incredibly rewarding to see this vision take shape and flourish.
                </p>
                <p>
                  Our school stands as a testament to the belief that education is the most powerful tool for transformation—both 
                  for individuals and for society at large. We have consistently strived to provide a nurturing environment where 
                  students can explore their potential, develop critical thinking skills, and grow into responsible citizens.
                </p>
                <p>
                  As we continue our journey, we remain committed to our founding principles while embracing innovation and 
                  adapting to the changing educational landscape. I am proud of what St. Thomas has achieved and excited about 
                  its future. I extend my heartfelt gratitude to our dedicated staff, supportive parents, and enthusiastic students 
                  who together form the vibrant community that is St. Thomas Secondary School."
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Principal's Message */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center"
          >
            <div className="lg:col-span-3 order-2 lg:order-1">
              <h3 className="text-2xl font-serif font-bold text-school-dark mb-2">
                Principal's Message
              </h3>
              <h4 className="text-xl text-school-primary font-medium mb-6">Mr.Dhalendra Chuadhary, Principal</h4>
              <div className="text-gray-600 space-y-4">
                <p>
                  "At St. Thomas Secondary School, we believe that education is not just about academic achievements but about 
                  preparing students for life. Our goal is to nurture well-rounded individuals who excel academically while 
                  developing the character, skills, and values needed to navigate the complexities of the modern world.
                </p>
                <p>
                  Our dedicated faculty employs innovative teaching methodologies that make learning engaging, relevant, and 
                  effective. We emphasize critical thinking, creativity, collaboration, and communication—skills that are 
                  essential for success in the 21st century.
                </p>
                <p>
                  The peaceful environment of our campus, coupled with state-of-the-art facilities, creates an ideal setting 
                  for learning and growth. We foster a culture of inquiry, respect, and inclusivity where every student feels 
                  valued and supported.
                </p>
                <p>
                  As principal, I am committed to upholding the high standards of education that St. Thomas is known for while 
                  continuously seeking ways to enhance the learning experience for our students. I invite you to visit our campus 
                  and discover the St. Thomas difference for yourself."
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="relative">
                <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                  <img 
                  src="lovable-uploads/dhalendra sir.jpg"
                    alt="Principal" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-school-secondary/20 rounded-full -z-10"></div>
              </div>
            </div>
          </motion.div>
          
          <div className="text-center mt-16">
            <Button className="bg-school-primary hover:bg-school-primary/90" asChild>
              <Link to="/about/message">Read Full Messages</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Campus Environment Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block h-1.5 w-12 bg-school-primary mb-4"></span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-school-dark mb-6">
                Our Peaceful Campus Environment
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                St. Thomas Secondary School is nestled in a serene location that provides an ideal atmosphere for learning and growth.
              </p>
              <p className="text-gray-600 mb-8">
                Our campus features spacious classrooms, well-maintained gardens, and modern facilities designed to enhance the 
                educational experience. The tranquil surroundings, away from the hustle and bustle of the city, create a perfect 
                setting for focused learning and holistic development.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  "10-acre campus with green spaces and gardens",
                  "Pollution-free environment conducive to learning",
                  "Spacious, well-ventilated classrooms",
                  "Modern infrastructure with safety measures",
                  "Outdoor areas for recreation and sports"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-school-primary mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="bg-school-primary hover:bg-school-primary/90" asChild>
                <Link to="/gallery">View Campus Gallery</Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="h-64 rounded-lg overflow-hidden shadow-md">
                  <div 
                    className="w-full h-full bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513883049090-d0b7439799bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')" }}
                  ></div>
                </div>
                <div className="h-36 rounded-lg overflow-hidden shadow-md">
                  <div 
                    className="w-full h-full bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')" }}
                  ></div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-36 rounded-lg overflow-hidden shadow-md">
                  <div 
                    className="w-full h-full bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80')" }}
                  ></div>
                </div>
                <div className="h-64 rounded-lg overflow-hidden shadow-md">
                  <div 
                    className="w-full h-full bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')" }}
                  ></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-school-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Visit Our Campus
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Experience firsthand the peaceful environment and excellent facilities that make St. Thomas Secondary School special.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-school-primary hover:bg-white/90" asChild>
              <Link to="/contact">Schedule a Visit</Link>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link to="/admissions">Apply for Admission</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
