"use client";

import { AppSidebar } from "@/components/main/app-sidebar";
import Home from "@/components/main/home";
import { useUserContext, INITIAL_USER } from "@/context/AuthContext";
import { useSignOutAccount } from "@/lib/react-query/queries";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Page() {
  const { user, setIsAuthenticated, setUser, isAuthenticated, checkAuthUser } =
    useUserContext();
  const router = useRouter();

  const { mutateAsync: signOutAccount } = useSignOutAccount();
  const [data, setData] = useState(INITIAL_USER);

  const checkAuth = async () => {
    await checkAuthUser();
  };

  const handleSignOut = async () => {
    await signOutAccount();
    setIsAuthenticated(false);
    setUser(INITIAL_USER);
    setData(INITIAL_USER);
    toast("You are signed out (handle sign out async function(s))");
    router.push("/auth");
  };

  useEffect(() => {
    checkAuth();

    user.name === ""
      ? toast("You are not logged in (home/page.js)")
      : setData(user);

    return () => true;
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    toast("You are not logged in (home/page.js)");
    return;
  }
  return (
    <>
      <AppSidebar data={data} handleSignOut={handleSignOut} />
      <main className="w-full">
        <Home data={data} />
      </main>
    </>
  );
}
