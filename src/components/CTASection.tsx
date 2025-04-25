
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with 3D Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('/lovable-uploads/919f8a27-51c6-40ec-a2bf-174699194643.png')",
            filter: "blur(5px)",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-school-primary/90 to-school-accent/90"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-white mb-6"
          >
            Begin Your Journey with St. Thomas English Secondary School
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-white/90 mb-8"
          >
            Join our community of learners in a peaceful environment with
            exceptional faculty and modern facilities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Button
              size="lg"
              className="bg-white text-school-primary hover:bg-white/90 font-medium px-8 py-3 rounded-md flex items-center"
              asChild
            >
              <Link to="/admissions">
                Apply for Admission <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white/10 font-medium px-8 py-3 rounded-md"
              asChild
            >
              <Link to="/contact">Schedule a Visit</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <p className="text-white/80">Contact us for more information</p>
            <div className="flex justify-center space-x-4 mt-2">
              <a
                href="tel:081-521423"
                className="text-white hover:text-white/90 transition-colors"
              >
                081-534463
              </a>
              <span className="text-white/40">|</span>
              <a
                href="mailto:schoolstthoms@gmail.com"
                className="text-white hover:text-white/90 transition-colors"
              >
                schoolstthoms@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 3D Wave Animation at Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 60L48 52.5C96 45 192 30 288 27.5C384 25 480 35 576 37.5C672 40 768 35 864 32.5C960 30 1056 30 1152 35C1248 40 1344 50 1392 55L1440 60V0H0V60Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default CTASection;
