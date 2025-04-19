
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Celebrating Academic Excellence: Our Students' Outstanding Results",
    excerpt: "St. Thomas students achieve remarkable success in board examinations with exceptional grades across subjects.",
    date: "2024-04-15",
    category: "Academics",
    image: "/lovable-uploads/ee7faf30-f2e5-4db9-8793-45de8d71982c.png"
  },
  {
    id: 2,
    title: "Innovation in Education: New STEM Lab Launch",
    excerpt: "Introducing our state-of-the-art STEM laboratory equipped with cutting-edge technology for hands-on learning.",
    date: "2024-04-10",
    category: "Facilities",
    image: "/lovable-uploads/ee7faf30-f2e5-4db9-8793-45de8d71982c.png"
  },
  // ... Add 18 more blog posts with similar structure
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
            Stay updated with the latest news, events, and achievements at St. Thomas Secondary School.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="relative h-48 mb-4 rounded-t-lg overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-school-primary font-medium">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <CardTitle className="text-xl font-bold mb-2">{post.title}</CardTitle>
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
