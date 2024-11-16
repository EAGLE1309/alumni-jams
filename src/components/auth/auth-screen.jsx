"use client";

import { useLayoutEffect, useState } from "react";

import SignInCard from "./sign-in-card";
import SignUpCard from "./sign-up-card";
import { Button } from "@/components/ui/button";
import { RiArrowLeftLine } from "react-icons/ri";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useUserContext } from "@/context/AuthContext";

const AuthScreen = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { isAuthenticated } = useUserContext();

  const [state, setState] = useState("signin");

  useLayoutEffect(() => {
    const state = searchParams.get("state");

    if (state === "signup") {
      setState("signup");
    }

    if (state === "signin") {
      setState("signin");
    }

    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router, searchParams]);

  return (
    <div className="h-full flex flex-col gap-y-5 items-center justify-center bg-black">
      <div className="md:h-auto md:w-[420px]">
        {state === "signin" ? (
          <SignInCard setState={setState} />
        ) : state === "signup" ? (
          <SignUpCard setState={setState} />
        ) : null}
      </div>
    </div>
  );
};

export default AuthScreen;
