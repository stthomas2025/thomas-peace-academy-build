import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

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
        { name: "Our Leadership", link: "/about/principal-message" },
      ],
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
      ],
    },
    {
      name: "Facilities",
      link: "/facilities",
      submenu: [
        { name: "Library", link: "/facilities/library" },
        { name: "Laboratories", link: "/facilities/labs" },
        { name: "Transportation", link: "/facilities/transportation" },
        { name: "Sports", link: "/facilities/sports" },
      ],
    },
    { name: "Blog", link: "/blog" },
    { name: "Admissions", link: "/admissions" },
    { name: "Gallery", link: "/gallery" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isMenuOpen
          ? "bg-white py-2"
          : isScrolled
          ? "bg-white lg:shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/logo.jpeg"
              alt="St. Thomas Secondary School"
              className="h-16 w-auto mr-3"
            />
            <div>
              <h1 className="font-serif font-bold text-xl md:text-2xl text-school-dark leading-tight">
                St. Thomas
              </h1>
              <p className="text-xs md:text-sm text-school-secondary font-medium">
                English Secondary School 
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex">
            <ul className="flex space-x-1">
              {menuItems.map((item, index) => (
                <li key={index} className="relative group">
                  <Link
                    to={item.link}
                    className="py-2 px-3 flex items-center hover:text-school-primary text-school-dark font-medium transition-colors duration-200"
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
            <Button
              className="ml-4 bg-school-secondary hover:bg-school-secondary/90 text-white"
              asChild
            >
              <Link to="/apply">Apply Now</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden z-50">
            <button
              onClick={toggleMenu}
              className="p-2 focus:outline-none"
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
      </div>

      {/* Slide-in Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="p-6 space-y-4 overflow-y-auto h-full">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                className="block font-medium text-school-dark py-2 hover:text-school-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
              {item.submenu && (
                <ul className="pl-4 space-y-1">
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        to={subItem.link}
                        className="block text-sm py-1 text-school-dark hover:text-school-primary"
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
            <Button
              className="w-full bg-school-secondary text-white hover:bg-school-secondary/90"
              asChild
            >
              <Link to="/apply" onClick={() => setIsMenuOpen(false)}>
                Apply Now
              </Link>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
