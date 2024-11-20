"use client";

import Home from "@/components/main/home";
import { AppSidebar } from "@/components/main/app-sidebar";
import { AuthsContext } from "@/context/AuthsContext";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { account } from "@/lib/appwrite/config";

export default function Page() {
  const router = useRouter();
  const { currentUser, loading, logout } = useContext(AuthsContext);

  useEffect(() => {
    console.log(currentUser);

    if (!currentUser && !loading) {
      router.push("/login");
    }
  }, [currentUser, loading, router]);

  /*=====[SIGNOUT HANDLER]=====*/
  const signOutHandler = async () => {
    try {
      await logout();
      router.push("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <>
      <AppSidebar data={currentUser} handleSignOut={signOutHandler} />
      <main className="w-full"></main>
    </>
  );
}
