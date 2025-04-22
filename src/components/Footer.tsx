import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUp, Facebook, Twitter, Instagram, Youtube, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Admissions", link: "/admissions" },
    { name: "Academics", link: "/academics" },
    { name: "Facilities", link: "/facilities" },
    { name: "Gallery", link: "/gallery" },
    { name: "Contact", link: "/contact" },
  ];
  
  const academics = [
    { name: "Primary School (I-V)", link: "/academics/primary" },
    { name: "Middle School (VI-VIII)", link: "/academics/middle" },
    { name: "High School (IX-X)", link: "/academics/high" },
    { name: "Higher Secondary (XI-XII)", link: "/academics/higher" },
  ];
  
  const facilities = [
    { name: "Transportation", link: "/facilities/transportation" },
    { name: "Library", link: "/facilities/library" },
    { name: "Laboratories", link: "/facilities/labs" },
    { name: "Sports", link: "/facilities/sports" },
    { name: "Computer Lab", link: "/facilities/computer-lab" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-school-dark text-white pt-16 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 mr-3 bg-white rounded-full flex items-center justify-center">
                <span className="text-school-primary font-serif font-bold text-xl">ST</span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl leading-tight">
                  St. Thomas
                </h3>
                <p className="text-sm text-gray-300">
                  Secondary School & College
                </p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6">
              Providing quality education from Class I to XII in a peaceful and nurturing environment since establishment.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-school-accent mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Dhamboji-1. Khajura Road, Nepalganj, Nepal</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-school-accent mr-3 flex-shrink-0" />
                <span className="text-gray-300">081-521423</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-school-accent mr-3 flex-shrink-0" />
                <span className="text-gray-300">nileshshrestha19@gmail.com</span>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 text-school-accent mr-3 flex-shrink-0" />
                <span className="text-gray-300">Mon-Fri: 7:00AM - 4:00PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 pb-2 border-b border-gray-700">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.link}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <span className="mr-2">›</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 pb-2 border-b border-gray-700">Academics</h3>
            <ul className="space-y-2">
              {academics.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.link}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <span className="mr-2">›</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-bold mt-8 mb-4 pb-2 border-b border-gray-700">Facilities</h3>
            <ul className="space-y-2">
              {facilities.slice(0, 3).map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.link}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <span className="mr-2">›</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 pb-2 border-b border-gray-700">Stay Connected</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter to receive the latest updates and news from St. Thomas Secondary School.
            </p>
            
            <form className="mb-8">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none w-full"
                />
                <button 
                  type="submit" 
                  className="bg-school-primary text-white px-4 py-2 rounded-r-md hover:bg-school-primary/90 transition-colors duration-200"
                >
                  Subscribe
                </button>
              </div>
            </form>
            
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-700 hover:bg-school-primary transition-colors duration-200 text-white"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-700 hover:bg-school-primary transition-colors duration-200 text-white"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-700 hover:bg-school-primary transition-colors duration-200 text-white"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-700 hover:bg-school-primary transition-colors duration-200 text-white"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} St. Thomas Secondary School. All rights reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm mx-3 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm mx-3 transition-colors duration-200">
              Terms of Use
            </Link>
            <button 
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-700 hover:bg-school-primary transition-colors duration-200 text-white ml-3"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
