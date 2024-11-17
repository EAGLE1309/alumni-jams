"use client";

import { Button } from "@/components/ui/button";
import { useUserContext } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const { user, isAuthenticated, checkAuthUser } = useUserContext();

  const [data, setData] = useState(null);

  const checkAuth = async () => {
    await checkAuthUser();
  };

  useEffect(() => {
    checkAuth();

    user.name === ""
      ? toast("You are not logged in (home/page.js)")
      : setData(user);

    return () => true;
  }, [isAuthenticated]);

  return (
    <>
      <section className="h-full p-4 lg:px-8 mt-4 flex items-start flex-col w-full">
        <h1 className="text-2xl font-bold">
          Welcome {data?.name}, to Alumni Jams
        </h1>
        <HomeCTABox />
      </section>
    </>
  );
}

const HomeCTABox = () => {
  return (
    <div className="flex flex-col w-full lg:w-[50%] items-start justify-center gap-4 py-5 px-5 md:px-8 bg-primary my-8 rounded-xl">
      <h2 className="text-sm">Sinhgad Carnival 2024</h2>
      <h1 className="text-3xl font-bold">Springfest is hiring now</h1>
    </div>
  );
};
