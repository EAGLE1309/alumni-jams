"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "", // Add feedback field
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can add form submission logic like API calls or email sending
    console.log("Form submitted", formData);
  };

  return (
    <Card className="w-full h-full p-8 dark:bg-zinc-900">
      <CardHeader className="px-0 pt-0">
        <CardTitle className="text-2xl font-bold dark:text-white">Contact Us</CardTitle>
        <CardDescription className="text-gray-500 dark:text-gray-300">
          We’d love to hear from you! Please reach out with any questions or feedback.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 px-0 pb-0">
        <h2 className="text-2xl font-bold text-blue-400 dark:text-blue-300 mb-4">Get in Touch</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full"
            />
          </div>

          <div>
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full"
            />
          </div>

          <div>
            <textarea
              name="feedback"
              placeholder="Your Feedback"
              value={formData.feedback}
              onChange={handleInputChange}
              className="w-full p-3 dark:bg-zinc-800 dark:text-white"
              rows="4"
            />
          </div>

          <div className="mt-5">
            <Button type="submit" className="w-full" size="lg">
              Send Message
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
