
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { GraduationCap, Pen } from "lucide-react";

const levels = [
  "Pre-School (Nursery-UKG)",
  "Primary (I-V)",
  "Middle School (VI-VIII)",
  "High School (IX-X)",
  "Plus Two (XI-XII) - Science",
  "Plus Two (XI-XII) - Management",
  "Plus Two (XI-XII) - Computer Science",
  "Plus Two (XI-XII) - Hotel Management",
];

const Apply = () => {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      navigate("/");
    }, 1800);
  }

  return (
    <div className="min-h-screen">
      <Header />
      <section className="pt-32 pb-20 bg-gradient-to-b from-school-primary/10 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center mb-12">
            <GraduationCap className="mx-auto mb-3 text-school-primary h-12 w-12" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-school-dark mb-2">
              Apply to St. Thomas
            </h1>
            <p className="text-lg text-gray-700">
              Complete the form below to apply for the 2024-25 academic year. Our admissions team will contact you soon!
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-8 max-w-2xl mx-auto space-y-6">
              <div>
                <label className="block font-medium mb-2">Full Name <span className="text-red-500">*</span></label>
                <Input required name="name" placeholder="Enter applicant's name" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium mb-2">Date of Birth <span className="text-red-500">*</span></label>
                  <Input required type="date" name="dob" />
                </div>
                <div>
                  <label className="block font-medium mb-2">Applying for Level <span className="text-red-500">*</span></label>
                  <select required name="level" className="w-full border px-3 py-2 rounded" defaultValue="">
                    <option value="" disabled>
                      Select level
                    </option>
                    {levels.map((level) => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium mb-2">Parent/Guardian Name <span className="text-red-500">*</span></label>
                  <Input required name="guardian" />
                </div>
                <div>
                  <label className="block font-medium mb-2">Contact Number <span className="text-red-500">*</span></label>
                  <Input required name="phone" type="tel" />
                </div>
              </div>
              <div>
                <label className="block font-medium mb-2">Email Address</label>
                <Input name="email" type="email" />
              </div>
              <div>
                <label className="block font-medium mb-2">Permanent Address <span className="text-red-500">*</span></label>
                <Textarea required name="address" rows={2} />
              </div>
              <div>
                <label className="block font-medium mb-2">Previous School <span className="text-red-500">*</span></label>
                <Input required name="previousSchool" />
              </div>
              <div>
                <label className="block font-medium mb-2">Any Additional Notes (optional)</label>
                <Textarea name="notes" rows={2} />
              </div>
              <Button
                className="bg-school-primary hover:bg-school-primary/90 w-full flex items-center justify-center"
                type="submit"
              >
                <Pen className="mr-2 h-5 w-5" />
                Submit Application
              </Button>
            </form>
          ) : (
            <div className="text-center py-14 bg-white rounded-xl max-w-2xl mx-auto">
              <div className="text-green-600 text-3xl mb-2 font-semibold">Thank you for applying!</div>
              <p className="text-gray-700 mb-2">Your application has been received.<br /> Our team will contact you soon.</p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Apply;
