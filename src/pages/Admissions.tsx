
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Users, Book } from "lucide-react";

const Admissions = () => {
  const admissionSteps = [
    {
      icon: Book,
      title: "1. Application Form",
      description: "Fill out the online application form with student and parent details"
    },
    {
      icon: GraduationCap,
      title: "2. Entrance Test",
      description: "Students must pass our entrance examination"
    },
    {
      icon: Users,
      title: "3. Interview",
      description: "Personal interview with student and parents"
    }
  ];

  // Requirements per level
  const documentRequirements: Record<string, string[]> = {
    primary: [
      "Birth Certificate",
      "Parent's Identity Proof",
      "Address Proof",
      "Passport Size Photographs"
    ],
    secondary: [
      "Birth Certificate",
      "Previous School's Transfer Certificate",
      "Last Academic Year's Mark Sheet",
      "Parent's Identity Proof",
      "Address Proof",
      "Passport Size Photographs"
    ],
    plusTwo: [
      "Grade 10 Mark Sheet / SEE Certificate",
      "Transfer Certificate",
      "Character Certificate",
      "Passport Size Photographs",
      "Parent's Identity Proof"
    ],
  }

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 bg-gradient-to-b from-school-primary/10 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-school-dark mb-6">
              Admissions Open
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join St. Thomas English Secondary School and experience quality education in a nurturing environment.
            </p>
            <Button className="bg-school-primary hover:bg-school-primary/90">
              Apply Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          {/* Admission Process */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {admissionSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <step.icon className="h-12 w-12 text-school-primary mb-4" />
                <h3 className="text-xl font-bold text-school-dark mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Fee Structure */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-school-dark mb-6 text-center">Fee Structure</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-school-dark mb-4">Primary Level</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-700">For fee details, please contact:</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-semibold text-school-primary">081-534463, 533011, 9864986126, 9843173105</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-school-dark mb-4">Secondary Level</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-700">For fee details, please contact:</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-semibold text-school-primary">081-534463, 533011, 9864986126, 9843173105</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-school-dark mb-4">Plus Two</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-700">For fee details, please contact:</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-semibold text-school-primary">081-534463, 533011, 9864986126, 9843173105</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Required Documents */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-school-dark mb-6 text-center">Required Documents</h2>
            <div className="max-w-2xl mx-auto">
              <h3 className="text-lg font-bold text-school-dark mt-6">Primary Level:</h3>
              <ul className="space-y-2 mb-4">
                {documentRequirements.primary.map((doc, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <ArrowRight className="h-4 w-4 text-school-primary mr-2" />
                    {doc}
                  </li>
                ))}
              </ul>
              <h3 className="text-lg font-bold text-school-dark mt-6">Secondary Level:</h3>
              <ul className="space-y-2 mb-4">
                {documentRequirements.secondary.map((doc, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <ArrowRight className="h-4 w-4 text-school-primary mr-2" />
                    {doc}
                  </li>
                ))}
              </ul>
              <h3 className="text-lg font-bold text-school-dark mt-6">Plus Two:</h3>
              <ul className="space-y-2 mb-4">
                {documentRequirements.plusTwo.map((doc, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <ArrowRight className="h-4 w-4 text-school-primary mr-2" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Admissions;
