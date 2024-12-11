"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { useContext, useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { AuthsContext } from "@/context/AuthsContext";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function GettingStarted() {
  const router = useRouter();

  const {
    currentUser,
    loading: isLoading,
    register,
  } = useContext(AuthsContext);

  useEffect(() => {
    if (currentUser && !isLoading) {
      router.replace("/home");
    }
  });

  const [university, setUniversity] = useState("");
  const [college, setCollege] = useState("");
  const [graduationYear, setGraduationYear] = useState(null);
  const [companyName, setCompanyName] = useState("");
  const [companyPos, setCompanyPos] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");
  const [companyStartDate, setCompanyStartDate] = useState("");
  const [isCurrentlyWorking, setIsCurrentlyWorking] = useState(false);
  const [companyEndDate, setCompanyEndDate] = useState("");

  /*========[NOTFICATION SYSTEM]========*/
  const errNotification = (err) => toast.error(err);
  const infoNotification = (info) => toast.info(info);

  const changeEyeIcon = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  /*=====[AUTHENTICATION SYSTEM]=====*/
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    /*=====[ NEW USER CREATION ]=====*/
    try {
      // Input Validation
      if (!email || !password || !name || !username) {
        throw new Error("All fields are required.");
      }

      if (password.length < 8) {
        throw new Error("Password must be at least 8 characters.");
      }

      await register(email, password, name, username);

      /*=====[ Set loading to false & navigate to home ]=====*/
      setLoading(false);
      infoNotification("Loading app...");
      router.push("/home");

      /*=====[ ERROR HANDLING ]=====*/
    } catch (err) {
      console.log(err);
      errNotification(err.message);
      setLoading(false);
    }
  };

  return (
    <Card className="relative w-full h-full p-8 dark:bg-zinc-900">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Getting Started</CardTitle>
        <CardDescription>
          Lets start setting up things before starting your journies
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 px-0 pb-0 h-auto">
        <form className="w-full flex gap-5 space-y-1.5">
          <div>
            <div className="space-y-1">
              <Label htmlFor="univesity">
                University<span className="text-red-500">*</span>
              </Label>
              <Input
                disabled={loading}
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                placeholder="Name of your university"
                type="text"
                required
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="univesity">
                College<span className="text-red-500">*</span>
              </Label>
              <Input
                disabled={loading}
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                placeholder="Name of your college"
                type="text"
                required
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="graduationYear">
                Graduation Year<span className="text-red-500">*</span>
              </Label>
              <Input
                disabled={loading}
                value={graduationYear}
                onChange={(e) => setGraduationYear(e.target.value)}
                placeholder="2024"
                type="number"
                required
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="companyName">
                Company Name<span className="text-red-500">*</span>
              </Label>
              <Input
                disabled={loading}
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Name of your company"
                type="text"
                required
              />
            </div>
          </div>
          <div>
            <div className="space-y-1">
              <Label htmlFor="companyPos">
                Company Position<span className="text-red-500">*</span>
              </Label>
              <Input
                disabled={loading}
                value={companyPos}
                onChange={(e) => setCompanyPos(e.target.value)}
                placeholder="Your position in the company"
                type="text"
                required
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="employmentType">
                Employment Type<span className="text-red-500">*</span>
              </Label>
              <Input
                disabled={loading}
                value={employmentType}
                onChange={(e) => setEmploymentType(e.target.value)}
                placeholder="Part-time, Full-time, Intern, etc."
                type="text"
                required
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="companyLocation">
                Company Location<span className="text-red-500">*</span>
              </Label>
              <Input
                disabled={loading}
                value={companyLocation}
                onChange={(e) => setCompanyLocation(e.target.value)}
                placeholder="City, State, Country"
                type="text"
                required
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="companyStartDate">
                Company Start Date<span className="text-red-500">*</span>
              </Label>
              <Input
                disabled={loading}
                value={companyStartDate}
                onChange={(e) => setCompanyStartDate(e.target.value)}
                placeholder="YYYY-MM-DD"
                type="date"
                required
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="isCurrentlyWorking">
                Are you currently working in the company?
                <span className="text-red-500">*</span>
              </Label>
              <Checkbox
                disabled={loading}
                checked={isCurrentlyWorking}
                onChange={(e) => setIsCurrentlyWorking(e.target.checked)}
                className="mt-2"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="companyEndDate">Company End Date</Label>
              <Input
                disabled={loading || !isCurrentlyWorking}
                value={companyEndDate}
                onChange={(e) => setCompanyEndDate(e.target.value)}
                placeholder="YYYY-MM-DD"
                type="date"
              />
            </div>
          </div>
          <Button
            onClick={(e) => handleSubmit(e)}
            className="w-full"
            size="lg"
            disabled={loading}
          >
            Continue
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
