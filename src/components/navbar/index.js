"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className={`fixed w-full max-w-[100vw] top-0 z-50 ${
          open ? "bg-primary" : "bg-transparent backdrop-blur-[32px]"
        } px-2.5 py-2.5`}
      >
        <div className="h-auto w-full lg:mx-auto max-w-screen-xl flex justify-between items-center">
          <h1 className="text-xl text-white font-heading leading-0 mt-[-0.45rem]">
            Alumni Jams
          </h1>
          <div className="gap-4 hidden md:flex items-center">
            <Button className="text-white" variant={"ghost"}>
              About
            </Button>
            <Button className="text-white" variant={"ghost"}>
              Events
            </Button>
            <Button className="text-white">Login</Button>
            <Button className="text-white">Register</Button>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <Button size={"lg"} variant={"default"}>
              Sign Up
            </Button>
            <Button
              onClick={() => setOpen(!open)}
              className="p-2"
              variant={"secondary"}
            >
              <Menu />
            </Button>
          </div>
        </div>

        <div
          className={`md:hidden transition-all absolute w-full ${
            open ? "left-0" : "left-[-100%]"
          } ${
            open ? "w-full" : "w-0"
          } duration-300 top-0 mt-[64px] flex h-screen flex-col items-start text-left bg-primary text-white gap-2 px-2`}
        >
          <div
            onClick={() => setOpen(false)}
            className="w-full text-2xl hover:text-gray-500 transition-all font-heading py-2 self-start text-left"
          >
            {"; Explore"}
          </div>
          <div
            onClick={() => setOpen(false)}
            className="w-full text-2xl hover:text-gray-500 transition-all font-heading py-2 self-start text-left"
          >
            {"; Latest Releases"}
          </div>
          <div
            onClick={() => setOpen(false)}
            className="w-full text-2xl hover:text-gray-500 transition-all font-heading py-2 self-start text-left"
          >
            {"; Customise"}
          </div>
          <div
            onClick={() => setOpen(false)}
            className="w-full text-2xl hover:text-gray-500 transition-all font-heading py-2 self-start text-left"
          >
            {"; Pricing"}
          </div>
          <div
            onClick={() => setOpen(false)}
            className="w-full text-2xl hover:text-gray-500 transition-all font-heading py-2 self-start text-left"
          >
            {"; About Us"}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
