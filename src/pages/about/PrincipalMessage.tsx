import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Quote } from "lucide-react";

const PrincipalMessage = () => {
  const leaders = [
    {
      name: "Dipen Bhusal",
      role: "Principal",
      image: "/Dipen Bhusal Principal.jpeg",
      message: `Dear Students, Parents, and Well-wishers,

As the Principal of St. Thomas Secondary School, I am honored to welcome you to our esteemed institution. Our school stands as a beacon of educational excellence, where we nurture not just academic achievement, but the holistic development of every student.

At St. Thomas, we believe in creating an environment where learning is both challenging and enjoyable. Our dedicated faculty works tirelessly to ensure that each student discovers their unique potential and develops the skills needed for success in the modern world.

We focus on fostering critical thinking, creativity, and character development, preparing our students not just for academic success, but for life itself. Our comprehensive curriculum, combined with extracurricular activities, helps shape well-rounded individuals ready to face future challenges.

I invite you to be part of our educational journey, where we transform young minds into responsible, capable, and confident individuals.`,
    },
    {
      name: "Shankhar Kumar Shrestha",
      role: "Vice Principal",
      image: "/Shankhar Kumar Shrestha Vice Principal.jpeg",
      message: `Greetings to our school community,

As Vice Principal of St. Thomas Secondary School, I am committed to supporting our students' educational journey with dedication and enthusiasm. Our focus is on creating a balanced learning environment that encourages both academic excellence and personal growth.

We believe in the power of innovative teaching methods and maintaining open communication between faculty, students, and parents. Our goal is to ensure that every student receives the guidance and support they need to excel in their studies and personal development.

Together with our excellent teaching staff, we strive to maintain high academic standards while nurturing creativity and critical thinking skills in our students. We are proud of our achievements and continue to work towards even greater success.`,
    },
    {
      name: "Nirmala Khadka",
      role: "Administrative Chief",
      image: "/Nirmala Khadka Administrative Chief.jpeg",
      message: `Dear St. Thomas Community,

As the Administrative Chief, I take pride in ensuring the smooth operation of our school's administrative functions, supporting both our academic staff and students in their pursuits of excellence.

Our administrative team is dedicated to providing efficient support services that enable our teachers to focus on education and our students to concentrate on learning. We work diligently to maintain an organized and welcoming environment that facilitates the best possible educational experience.

We are committed to maintaining clear communication channels with parents and guardians, ensuring that all administrative processes are transparent and efficient. Our door is always open to address any concerns and support the needs of our school community.`,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-school-dark mb-4 text-center">
            Messages from Our Leadership
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto text-center">
            Guidance and vision from our school's leadership team.
          </p>

          <div className="space-y-16">
            {leaders.map((leader, index) => (
              <div
                key={leader.name}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
              >
                <div className="md:col-span-1">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="relative h-[400px]">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-2xl font-bold text-school-dark mb-1">
                        {leader.name}
                      </h3>
                      <p className="text-school-primary font-medium mb-4">
                        {leader.role}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 bg-white rounded-xl shadow-md p-8">
                  <Quote className="h-16 w-16 text-school-primary/20 mb-6" />
                  <div className="space-y-6 text-gray-700 leading-relaxed">
                    {leader.message.split("\n\n").map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              className="bg-school-primary hover:bg-school-primary/90"
              asChild
            >
              <Link to="/about">Back to About</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrincipalMessage;
