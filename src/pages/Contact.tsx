import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      
      {/* Page Banner */}
      <div className="relative pt-32 pb-20 bg-gray-50">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/lovable-uploads/ee7faf30-f2e5-4db9-8793-45de8d71982c.png')" }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-school-dark">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600">
              Get in touch with St. Thomas English Secondary School. for admissions, inquiries, or feedback.
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-serif font-bold text-school-dark mb-6">Send Us a Message</h2>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="name">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-school-primary"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-school-primary"
                      placeholder="johndoe@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-school-primary"
                    placeholder="+977 XXXXXXXXXX"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-school-primary"
                    placeholder="Admission Inquiry"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2" htmlFor="message">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-school-primary"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>
                
                <Button className="bg-school-primary hover:bg-school-primary/90 text-white w-full py-3 flex items-center justify-center">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </motion.div>
            
            {/* Contact Info & Map */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-serif font-bold text-school-dark mb-6">Contact Information</h2>
              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-school-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="h-6 w-6 text-school-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Address</h3>
                      <p className="text-gray-600">
                        Dhamboji-1. Khajura Road, Nepalganj, Nepal
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-school-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="h-6 w-6 text-school-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Phone</h3>
                      <p className="text-gray-600">
                        081-534463, 533011, 9864986126, 9843173105
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-school-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="h-6 w-6 text-school-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                      <p className="text-gray-600">schoolstthoms@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-school-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="h-6 w-6 text-school-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Office Hours</h3>
                      <p className="text-gray-600">Monday to Friday: 7:00 AM - 4:00 PM</p>
                      <p className="text-gray-600">Saturday: 7:00 AM - 12:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map Embed */}
              <div className="rounded-xl overflow-hidden h-[300px] shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.5686465095426!2d81.6216!3d28.0473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a33e85dc6b885%3A0x8e47ee1a30713c8c!2sNepalgunj%2C%20Nepal!5e0!3m2!1sen!2sus!4v1625014589842!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  title="St. Thomas Secondary School Location"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-school-dark mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Find answers to common questions about St. Thomas Secondary School.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "What are the school's operating hours?",
                  answer: "The school operates from Monday to Friday, 7:00 AM to 4:00 PM, and Saturday from 7:00 AM to 12:00 PM. The administrative office is open during the same hours."
                },
                {
                  question: "How can I apply for admission?",
                  answer: "Admission applications can be submitted online through our website or in person at the school office. Please check the Admissions page for detailed information about the admission process, required documents, and important dates."
                },
                {
                  question: "Do you provide transportation services?",
                  answer: "Yes, we provide transportation services to various areas in and around Nepalganj. Transportation routes and fees can be obtained from the school office or by contacting us directly."
                },
                {
                  question: "What extracurricular activities do you offer?",
                  answer: "We offer a wide range of extracurricular activities including sports, music, dance, art, debate, and various clubs. These activities are designed to promote holistic development of our students."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-md"
                >
                  <h3 className="text-xl font-bold text-school-dark mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
