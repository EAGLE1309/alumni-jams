"use client";

import { useState } from "react";

import SignInCard from "./sign-in-card";
import SignUpCard from "./sign-up-card";
import { Button } from "@/components/ui/button";
import { RiArrowLeftLine } from "react-icons/ri";
import Link from "next/link";

const AuthScreen = () => {
  const [state, setState] = useState("signIn");

  return (
    <div className="h-full flex flex-col gap-y-5 items-center justify-center bg-black">
      <div className="md:h-auto md:w-[420px]">
        {state === "signIn" ? (
          <SignInCard setState={setState} />
        ) : state === "signUp" ? (
          <SignUpCard setState={setState} />
        ) : null}
      </div>
      <Button asChild className="bg-black border-[1px] border-white">
        <Link href="/">
          Go Back
          <RiArrowLeftLine />
        </Link>
      </Button>
    </div>
  );
};

export default AuthScreen;
