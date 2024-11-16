import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import MaxWidthWrapper from "../layout/MaxWidthWrapper";

const CTABox = () => {
  return (
    <MaxWidthWrapper className="h-auto mb-[5rem] z-50">
      <div className="bg-primary flex justify-between flex-col md:flex-row items-center px-8 py-12 w-full gap-8">
        <h1 className="text-4xl text-white font-heading">
          Check out our
          <br />
          Student corner
        </h1>
        <div className="w-[350px] flex flex-col gap-4">
          <Button
            className="py-6 text-md font-bold"
            size="lg"
            variant="secondary"
          >
            Explore Now
          </Button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default CTABox;
