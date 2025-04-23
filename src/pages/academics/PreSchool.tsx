
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen, Heart, Shield, Music, Users, Award } from "lucide-react";


const preschoolImages = [
  
   {
        icon: BookOpen,
        title: "Interactive Learning",
        description: "Age-appropriate activities that make learning fun and engaging for young minds."
      },
      {
        icon: Heart,
        title: "Nurturing Environment",
        description: "A caring atmosphere where children feel safe, loved, and encouraged to explore."
      },
      {
        icon: Shield,
        title: "Safety First",
        description: "Comprehensive safety measures to ensure the well-being of every child in our care."
      },
      {
        icon: Music,
        title: "Creative Expression",
        description: "Various activities that promote artistic development and self-expression."
      },
      {
        icon: Users,
        title: "Social Development",
        description: "Opportunities for children to develop essential social and emotional skills."
      },
      {
        icon: Award,
        title: "Growth Milestones",
        description: "Regular assessment of developmental milestones to track each child's progress."
      },
    {
    src: "/lovable-uploads/pre school/founder (12).jpg",
    caption: "Playful Kids' Room"
    },
  {
    src: "/lovable-uploads/pre school/founder (13).jpg",
    caption: "Interactive Learning Activities"
  },
  {
    src: "/lovable-uploads/pre school/founder (14).jpg",
    caption: "Creative Arts Time"
  },
  {
    src: "/lovable-uploads/pre school/founder (15).jpg",
    caption: "Outdoor Fun with Class"
  },
  {
    src: "/lovable-uploads/pre school/founder (16).jpg",
    caption: "Story Time Session"
  },
  {
    src: "/lovable-uploads/pre school/founder (17).jpg",
    caption: "Group Activities"
  },
  {
    src: "/lovable-uploads/pre school/founder (18).jpg",
    caption: "Circle Time"
  },
  {
    src: "/lovable-uploads/pre school/founder (19).jpg",
    caption: "Creative Play"
  },
  {
    src: "/lovable-uploads/pre school/founder (20).jpg",
    caption: "Friendship and Sharing"
  },
  {
    src: "/lovable-uploads/pre school/founder (24).jpg",
    caption: "Craft and Colors"
  },
  {
    src: "/lovable-uploads/pre school/founder (25).jpg",
    caption: "Learning Through Play"
  },
  {
    src: "/lovable-uploads/pre school/founder (26).jpg",
    caption: "Early Education"
  },
  {
    src: "/lovable-uploads/pre school/founder (30).jpg",
    caption: "Activity Time"
  },
  // Extra added for diversity (if existing in uploads, user can swap/remove):
  {
    src: "/lovable-uploads/pre school.jpeg",
    caption: "Pre-School Entrance"
  }
];

const PreSchool = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20 bg-gradient-to-b from-pink-50 to-white">
        
     
      </main>
      <Footer />
    </div>
  );
};
export default PreSchool;
