"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useUserContext, INITIAL_USER } from "@/context/AuthContext";
import { signOutAccount } from "@/lib/appwrite/sign-out";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

export default function Home() {
  const {
    user,
    isAuthenticated,
    setIsAuthenticated,
    setUser,
    isLoading,
    checkAuthUser,
  } = useUserContext();
  const router = useRouter();

  const [name, setName] = useState("");

  const checkAuth = async () => {
    await checkAuthUser();
  };
  const handleSignOut = async (e) => {
    e.preventDefault();
    signOutAccount();
    setName("You are not logged in");
    setIsAuthenticated(false);
    setUser(INITIAL_USER);
  };

  useEffect(() => {
    if (!isAuthenticated) return;

    checkAuth();

    user.name === "" ? setName("You are not logged in") : setName(user.name);

    return () => true;
  }, [isAuthenticated]);

  return (
    <section className="h-screen flex items-center justify-center bg-black">
      <Card>
        <CardHeader>
          <CardTitle>Testing features - alpha demo v1.1</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col justify-between gap-y-2.5">
          <h1 className="text-2xl font-bold">{name}</h1>
          {!isAuthenticated ? (
            <Button asChild>
              <Link href="/auth">Login / Register</Link>
            </Button>
          ) : (
            <Button onClick={(e) => handleSignOut(e)}>Logout</Button>
          )}
          <Button className="opacity-50 pointer-events-none !cursor-no-drop">
            Chats
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
