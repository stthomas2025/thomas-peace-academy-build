
import React from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  
  // This would typically fetch from an API - for now using placeholder content
  const post = {
    title: "Celebrating Academic Excellence: Our Students' Outstanding Results",
    content: `
      We are proud to announce the exceptional academic achievements of our students in the recent board examinations. 
      Our dedicated faculty and hardworking students have once again demonstrated their commitment to excellence...
      
      Key Highlights:
      - 95% of students achieved distinction
      - 100% pass rate across all subjects
      - Multiple students ranked in top 10 positions
    `,
    date: "2024-04-15",
    author: "Principal Thomas",
    image: "/lovable-uploads/ee7faf30-f2e5-4db9-8793-45de8d71982c.png"
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <article className="pt-32 pb-20 bg-gradient-to-b from-school-primary/10 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <Button variant="outline" className="mb-8" asChild>
              <Link to="/blog">← Back to Blog</Link>
            </Button>
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-school-dark mb-4">
              {post.title}
            </h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <span className="mr-4">By {post.author}</span>
              <span>{post.date}</span>
            </div>
          </div>
          
          <div className="relative h-[400px] mb-8 rounded-xl overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="whitespace-pre-line text-gray-700 leading-relaxed">
              {post.content}
            </p>
          </div>
        </div>
      </article>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
