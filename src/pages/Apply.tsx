
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  studentName: z.string().min(2, {
    message: "Student name must be at least 2 characters.",
  }),
  dateOfBirth: z.string({
    required_error: "Date of birth is required.",
  }),
  gender: z.enum(["male", "female", "other"], {
    required_error: "Please select a gender.",
  }),
  applyingFor: z.string({
    required_error: "Please select a class level.",
  }),
  previousSchool: z.string().optional(),
  parentName: z.string().min(2, {
    message: "Parent name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  address: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
  emergencyContact: z.string().min(10, {
    message: "Emergency contact number must be at least 10 digits.",
  }),
  healthConditions: z.string().optional(),
  additionalInfo: z.string().optional(),
});

const Apply = () => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentName: "",
      gender: undefined,
      previousSchool: "",
      parentName: "",
      email: "",
      phone: "",
      address: "",
      emergencyContact: "",
      healthConditions: "",
      additionalInfo: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Application Submitted",
      description: "Thank you for applying to St. Thomas Secondary School. We will contact you shortly.",
    });
    form.reset();
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
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-school-dark mb-4">
              Apply for Admission
            </h1>
            <p className="text-xl text-gray-600">
              Fill out the form below to apply for admission to St. Thomas Secondary School.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 md:p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="bg-school-primary/5 p-4 rounded-lg mb-8">
                      <h2 className="text-xl font-bold text-school-dark mb-2">Student Information</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="studentName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Student Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="dateOfBirth"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Date of Birth</FormLabel>
                              <FormControl>
                                <Input type="date" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="gender"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel>Gender</FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="flex space-x-4"
                                >
                                  <FormItem className="flex items-center space-x-2">
                                    <FormControl>
                                      <RadioGroupItem value="male" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      Male
                                    </FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-2">
                                    <FormControl>
                                      <RadioGroupItem value="female" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      Female
                                    </FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-2">
                                    <FormControl>
                                      <RadioGroupItem value="other" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      Other
                                    </FormLabel>
                                  </FormItem>
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="applyingFor"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Applying For</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select class level" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="pre-school">Pre-School (Nursery-UKG)</SelectItem>
                                  <SelectItem value="primary">Primary School (I-V)</SelectItem>
                                  <SelectItem value="middle">Middle School (VI-VIII)</SelectItem>
                                  <SelectItem value="high">High School (IX-X)</SelectItem>
                                  <SelectItem value="plus-two">Plus Two (XI-XII)</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="previousSchool"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Previous School (if applicable)</FormLabel>
                              <FormControl>
                                <Input placeholder="Previous school name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    
                    <div className="bg-school-primary/5 p-4 rounded-lg mb-8">
                      <h2 className="text-xl font-bold text-school-dark mb-2">Parent/Guardian Information</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="parentName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Parent/Guardian Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Jane Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="email@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="9812345678" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="address"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Address</FormLabel>
                              <FormControl>
                                <Input placeholder="Dhamboji-1, Khajura Road" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="emergencyContact"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Emergency Contact Number</FormLabel>
                              <FormControl>
                                <Input placeholder="9812345678" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    
                    <div className="bg-school-primary/5 p-4 rounded-lg mb-8">
                      <h2 className="text-xl font-bold text-school-dark mb-2">Additional Information</h2>
                      <div className="grid grid-cols-1 gap-6">
                        <FormField
                          control={form.control}
                          name="healthConditions"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Health Conditions (if any)</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Please mention any allergies, medication, or conditions the school should be aware of." 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="additionalInfo"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Any Additional Information</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Any other information you would like to share with us." 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    
                    <div className="p-4 rounded-lg border border-amber-200 bg-amber-50">
                      <div className="flex items-start">
                        <Check className="text-amber-600 mt-1 mr-2 h-5 w-5" />
                        <p className="text-sm text-amber-800">
                          By submitting this form, you confirm that all the information provided is accurate and complete. 
                          The school will contact you for the next steps of the admission process.
                        </p>
                      </div>
                    </div>
                    
                    <Button type="submit" className="w-full md:w-auto bg-school-primary hover:bg-school-primary/90">
                      Submit Application <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                For any queries regarding the admission process, please contact us:
              </p>
              <p className="font-medium">081-521423 | nileshshrestha19@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Apply;
