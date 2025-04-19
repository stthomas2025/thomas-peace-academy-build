
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "Welcome to St. Thomas Secondary School",
      subtitle: "Providing Quality Education Since Establishment",
      description: "A premier educational institution offering classes from I to XII in a peaceful and nurturing environment.",
      cta: "Apply Now",
      ctaLink: "/admissions"
    },
    {
      id: 2,
      title: "Excellence in Education",
      subtitle: "Nurturing Minds, Shaping Futures",
      description: "Our dedicated faculty and state-of-the-art facilities ensure comprehensive development of every student.",
      cta: "Explore Programs",
      ctaLink: "/academics"
    },
    {
      id: 3,
      title: "Peaceful Learning Environment",
      subtitle: "Surrounded by Nature's Beauty",
      description: "Our campus provides a tranquil setting with beautiful gardens and green spaces for optimal learning.",
      cta: "View Campus",
      ctaLink: "/about"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with 3D Parallax Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ 
            scale: 1.05,
            transition: { 
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            } 
          }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transform transition-transform duration-1000"
            style={{ 
              backgroundImage: "url('/lovable-uploads/ee7faf30-f2e5-4db9-8793-45de8d71982c.png')" 
            }}
          ></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 md:px-12 py-12 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.p 
              className="text-sm md:text-base font-medium text-school-accent mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {slides[currentSlide].subtitle}
            </motion.p>
            <motion.h1 
              className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.p 
              className="text-base md:text-lg mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {slides[currentSlide].description}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Button 
                size="lg" 
                className="bg-school-secondary hover:bg-school-secondary/90 text-white font-medium px-8 py-3 rounded-md flex items-center"
              >
                {slides[currentSlide].cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-transparent hover:bg-white/10 text-white border-white font-medium px-8 py-3 rounded-md"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-0 right-0">
          <div className="flex justify-center space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-white scale-125" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 3D Wave Animation at Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="w-full h-auto" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0 120L48 105C96 90 192 60 288 55C384 50 480 70 576 75C672 80 768 70 864 65C960 60 1056 60 1152 70C1248 80 1344 100 1392 110L1440 120V0H0V120Z" 
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
