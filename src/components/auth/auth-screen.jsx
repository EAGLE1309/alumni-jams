"use client";

import { useEffect, useState } from "react";

import SignInCard from "./sign-in-card";
import SignUpCard from "./sign-up-card";
import { useRouter, useSearchParams } from "next/navigation";
import { useUserContext } from "@/context/AuthContext";

const AuthScreen = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { isAuthenticated } = useUserContext();

  const [state, setState] = useState("signin");

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/home");
    }

    const state = searchParams.get("state");

    if (state === "signup") {
      setState("signup");
    }

    if (state === "signin") {
      setState("signin");
    }
  }, [isAuthenticated, router, searchParams]);

  return (
    <div className="h-full flex flex-col gap-y-5 pt-12 overflow-hidden items-center justify-center bg-black">
      <div className="md:h-auto md:w-[420px]">
        {state === "signin" ? (
          <SignInCard setState={setState} />
        ) : state === "signup" ? (
          <SignUpCard setState={setState} />
        ) : (
          <div>Error</div>
        )}
      </div>
    </div>
  );
};

export default AuthScreen;
