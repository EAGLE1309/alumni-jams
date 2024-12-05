"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  return (
    <Card className="w-full h-full p-8 dark:bg-zinc-900">
      <CardHeader className="px-0 pt-0">
        <CardTitle className="text-2xl font-bold dark:text-white">About Us</CardTitle>
        <CardDescription className="text-gray-500 dark:text-gray-300">
          Learn more about <strong>Alumni Jams</strong> and our mission
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 px-0 pb-0">
        <h2 className="text-2xl font-bold text-blue-400 dark:text-blue-300 mb-4">Who We Are</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          <strong>Alumni Jams</strong> is a platform dedicated to connecting alumni with their alma mater and fellow alumni.
          We provide tools to help alumni network, access career opportunities, and give back to their communities.
        </p>

        <h2 className="text-2xl font-bold text-blue-400 dark:text-blue-300 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Our mission is to empower alumni by creating opportunities for collaboration and growth. We aim to foster
          lifelong relationships between alumni, students, and academic institutions to support professional development
          and community engagement.
        </p>

        <div className="mt-5">
          <Button
            onClick={() => router.push("/contact")}
            className="w-full"
            size="lg"
          >
            Contact Us
          </Button>
        </div>

        <div className="mt-5">
          <Button
            onClick={() => router.push("/register")}
            className="w-full"
            variant="outline"
            size="lg"
          >
            Join the Community
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}