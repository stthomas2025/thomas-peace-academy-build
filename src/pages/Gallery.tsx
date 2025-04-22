
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Gallery = () => {
  const galleryImages = {
    "Campus & Infrastructure": [
      {
        src: "/lovable-uploads/6d96e37e-503b-46a2-805d-bb1eadc02ace.png",
        alt: "St. Thomas School Building",
        caption: "Our Modern School Building", 
      }
    ],
    "Academic Excellence": [
      {
        src: "/lovable-uploads/17c9bfca-b60b-4d0c-a730-31ed9457ab08.png",
        alt: "Students with Books",
        caption: "Students Ready for Learning"
      },
      {
        src: "/lovable-uploads/3f8b3119-0767-491d-ac85-6926745ad2c4.png",
        alt: "Class Photo",
        caption: "Our Dedicated Students"
      }
    ],
    "Cultural Celebrations": [
      {
        src: "/lovable-uploads/8ea5fa03-87ec-4af0-aa7b-0050bc7d9216.png",
        alt: "Cultural Event",
        caption: "Celebrating Our Culture"
      },
      {
        src: "/lovable-uploads/3a4ccf1a-9c2a-4eaf-b530-033599b19f57.png",
        alt: "Cultural Program",
        caption: "Cultural Activities"
      },
      {
        src: "/lovable-uploads/c217fa30-6ae8-4868-aff0-75dcae58ea33.png",
        alt: "Festival Celebration",
        caption: "Festival Celebrations"
      }
    ],
    "Student Achievements": [
      {
        src: "/lovable-uploads/f18fe3ea-156f-4551-a3a4-37a60b841644.png",
        alt: "Award Ceremony",
        caption: "Academic Awards"
      },
      {
        src: "/lovable-uploads/49c21ba8-9b2c-4667-8318-1a33e1284cac.png",
        alt: "Trophy Display",
        caption: "Our Achievements"
      }
    ],
    "School Life": [
      {
        src: "/lovable-uploads/1st batch photo.jpg",
        alt: "Welcome to School",
        caption: "10+2 Science First Batch "
      },
      {
        src: "/lovable-uploads/5836a4d5-ec87-4e7c-b5fc-8dd1cc76d242.png",
        alt: "Students in Traditional Dress",
        caption: "Cultural Day"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-school-dark mb-4">
              School Gallery
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Capturing moments of learning, growth, and celebration at St. Thomas Secondary School.
            </p>
          </div>

          {Object.entries(galleryImages).map(([category, images]) => (
            <section key={category} className="mb-16">
              <h2 className="text-2xl font-serif font-bold text-school-dark mb-8 border-b pb-2">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-0">
                        <div className="aspect-video relative">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4 text-center">
                          <p className="text-gray-700">{image.caption}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery;
