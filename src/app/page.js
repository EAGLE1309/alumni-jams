"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useEffect, useState } from "react";
import { useUserContext, INITIAL_USER } from "@/context/AuthContext";

import { useSignOutAccount } from "@/lib/react-query/queries";

export default function Home() {
  const { user, isAuthenticated, setIsAuthenticated, setUser, checkAuthUser } =
    useUserContext();

  const { mutateAsync: signOutAccount } = useSignOutAccount();

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
