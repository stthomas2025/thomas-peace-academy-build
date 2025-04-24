import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Why St. Thomas Secondary English School is the Best in Nepalgunj",
    excerpt:
      "Discover why St. Thomas stands out with its legacy of excellence, modern curriculum, and holistic development in Nepalgunj.",
    date: "2025-04-24",
    category: "Overview",
    image: "/lovable-uploads/high school/founder (21).jpg",
  },
  {
    id: 2,
    title: "From Pre-School to +2: The Complete Academic Journey at St. Thomas",
    excerpt:
      "Explore how St. Thomas nurtures students from pre-school to +2 with a seamless, supportive academic path.",
    date: "2025-04-23",
    category: "Academics",
    image: "/lovable-uploads/pre school/founder (12).jpg",
  },
  {
    id: 3,
    title: "Shaping Tomorrow's Scientists: The +2 Science Program",
    excerpt:
      "Learn about the robust +2 Science program preparing students for careers in medicine, engineering, and research.",
    date: "2025-04-22",
    category: "Academics",
    image: "/lovable-uploads/high school/lab bio.jpg",
  },
  {
    id: 4,
    title: "Empowering Tomorrow's Leaders: The +2 Management Program",
    excerpt:
      "The +2 Management stream equips students with business skills for entrepreneurship and leadership roles.",
    date: "2025-04-21",
    category: "Academics",
    image: "/lovable-uploads/high school/founder (28).jpg",
  },
  {
    id: 5,
    title: "Building the Digital Future: +2 Computer Science",
    excerpt:
      "Dive into the +2 Computer Science program, fostering coding skills and innovation for tech careers.",
    date: "2025-04-20",
    category: "Academics",
    image: "/lovable-uploads/computer lap.jpeg",
  },
  {
    id: 6,
    title: "Crafting Hospitality Professionals: The +2 Hotel Management Program",
    excerpt:
      "Discover how the +2 Hotel Management program prepares students for thriving careers in hospitality and tourism.",
    date: "2025-04-19",
    category: "Academics",
    image: "/lovable-uploads/high school/founder (32).jpg",
  },
  {
    id: 7,
    title: "The Heart of Excellence – Meet the Faculty of St. Thomas",
    excerpt:
      "Meet the dedicated faculty shaping students' futures with expertise and care at St. Thomas.",
    date: "2025-04-18",
    category: "Faculty",
    image: "/lovable-uploads/faculty.jpg",
  },
  {
    id: 8,
    title: "Learning in Harmony – The Peaceful and Supportive Environment",
    excerpt:
      "Explore the serene and nurturing environment at St. Thomas, fostering academic and emotional growth.",
    date: "2025-04-17",
    category: "Environment",
    image: "/lovable-uploads/high school/founder (37).jpg",
  },
  {
    id: 9,
    title: "Student Success Stories – Where Dreams Take Flight",
    excerpt:
      "Celebrate the inspiring achievements of St. Thomas students, from scholarships to global careers.",
    date: "2025-04-16",
    category: "Achievements",
    image: "/lovable-uploads/high school/founder (39).jpg",
  },
  {
    id: 10,
    title: "What Parents Say – Heartfelt Testimonials from Families",
    excerpt:
      "Hear from parents about their trust and satisfaction with St. Thomas's education and support.",
    date: "2025-04-15",
    category: "Community",
    image: "/lovable-uploads/high school/founder (4).jpg",
  },
  {
    id: 11,
    title: "Pre-School to Plus Two: A Seamless Academic Journey",
    excerpt:
      "Discover how St. Thomas offers a consistent educational path from pre-school to +2 for lifelong growth.",
    date: "2025-04-14",
    category: "Academics",
    image: "/lovable-uploads/pre school/founder (13).jpg",
  },
  {
    id: 12,
    title: "Why St. Thomas is the Best School in Nepalgunj: A Complete Summary",
    excerpt:
      "A summary of why St. Thomas excels with its academics, faculty, and nurturing environment.",
    date: "2025-04-13",
    category: "Overview",
    image: "/lovable-uploads/high school/founder (21).jpg",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 bg-gradient-to-b from-school-primary/10 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-school-dark mb-4 text-center">
            School Blog
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto text-center">
            Stay updated with the latest news, events, and achievements at St.
            Thomas Secondary School.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="relative h-48 mb-4 rounded-t-lg overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-school-primary font-medium">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <CardTitle className="text-xl font-bold mb-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button className="w-full" variant="outline" asChild>
                    <Link to={`/blog/${post.id}`}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
