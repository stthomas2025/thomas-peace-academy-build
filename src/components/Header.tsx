import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: "Home", link: "/" },
    { 
      name: "About", 
      link: "/about",
      submenu: [
        { name: "Mission & Vision", link: "/about/mission" },
        { name: "Principal's Message", link: "/about/principal-message" },
      ] 
    },
    { 
      name: "Academics", 
      link: "/academics",
      submenu: [
        { name: "Pre-School (Nursery-UKG)", link: "/academics/pre-school" },
        { name: "Primary School (I-V)", link: "/academics/primary" },
        { name: "Middle School (VI-VIII)", link: "/academics/middle" },
        { name: "High School (IX-X)", link: "/academics/high" },
        { name: "Plus Two (XI-XII)", link: "/academics/plus-two" },
      ] 
    },
    { 
      name: "Facilities", 
      link: "/facilities",
      submenu: [
        { name: "Library", link: "/facilities/library" },
        { name: "Laboratories", link: "/facilities/labs" },
        { name: "Transportation", link: "/facilities/transportation" },
        { name: "Sports", link: "/facilities/sports" },
      ] 
    },
    { name: "Blog", link: "/blog" },
    { name: "Admissions", link: "/admissions" },
    { name: "Gallery", link: "/gallery" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}>
      {/* Top Header with Contact Info */}
      <div className="bg-school-primary text-white py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>081-521423</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>nileshshrestha19@gmail.com</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>Dhamboji-1. Khajura Road, Nepalganj, Nepal</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="w-16 h-16 mr-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-school-primary rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-serif font-bold text-xl">ST</span>
                </div>
              </div>
              <div>
                <h1 className="font-serif font-bold text-xl md:text-2xl text-school-dark leading-tight">
                  St. Thomas
                </h1>
                <p className="text-xs md:text-sm text-school-secondary font-medium">
                  Secondary School & College
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex">
            <ul className="flex space-x-1">
              {menuItems.map((item, index) => (
                <li key={index} className="relative group">
                  <Link 
                    to={item.link} 
                    className={`py-2 px-3 flex items-center hover:text-school-primary ${isScrolled ? "text-school-dark" : "text-school-dark"} font-medium transition-colors duration-200`}
                  >
                    {item.name}
                    {item.submenu && <ChevronDown className="ml-1 w-4 h-4" />}
                  </Link>
                  
                  {item.submenu && (
                    <ul className="absolute left-0 mt-0 w-56 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform translate-y-2 group-hover:translate-y-0">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            to={subItem.link}
                            className="block px-4 py-2 text-school-dark hover:bg-gray-50 hover:text-school-primary transition-colors duration-200"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <Button className="ml-4 bg-school-secondary hover:bg-school-secondary/90 text-white" asChild>
              <Link to="/apply">Apply Now</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-school-dark" />
            ) : (
              <Menu className="w-6 h-6 text-school-dark" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-md transition-transform duration-300 transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index} className="py-2 border-b border-gray-100">
                <Link
                  to={item.link}
                  className="block text-school-dark font-medium hover:text-school-primary transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <ul className="pl-4 mt-2 space-y-1">
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          to={subItem.link}
                          className="block py-1 text-sm text-school-dark hover:text-school-primary transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <Button className="w-full mt-4 bg-school-secondary hover:bg-school-secondary/90 text-white" asChild>
                <Link to="/apply" onClick={() => setIsMenuOpen(false)}>Apply Now</Link>
              </Button>
            </li>
          </ul>

          {/* Mobile Contact Info */}
          <div className="mt-6 space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-school-primary" />
              <span>081-521423</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-school-primary" />
              <span>nileshshrestha19@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-school-primary" />
              <span>Dhamboji-1. Khajura Road, Nepalganj, Nepal</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
