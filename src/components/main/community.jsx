"use client";

import { Button } from "../ui/button";
import SideBarProfile from "./sidebar-profile";

import { useContext } from "react";
import { AuthsContext } from "@/context/AuthsContext";

const Community = () => {
  const { currentUser } = useContext(AuthsContext);

  return (
    <section className="h-full p-4 pt-8 lg:px-8 flex flex-col lg:flex-row bg-zinc-100 dark:bg-[#0D0D0D] items-start gap-5 w-full">
      <div className="w-full">
        <h1 className="text-2xl font-bold">Mentorship Programs:</h1>
        <div className="flex gap-5 mt-5 flex-col lg:flex-row">
          <Card />
          <Card />
          <Card />
        </div>
        <h1 className="text-2xl mt-5 font-bold">Events & Workshops</h1>
        <div className="flex gap-5 mt-5 flex-col lg:flex-row">
          <Card />
          <Card />
          <Card />
        </div>
        <h1 className="text-2xl mt-5 font-bold">Success Stories</h1>
        <div className="flex gap-5 my-5 flex-col lg:flex-row">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <SideBarProfile user={currentUser} />
    </section>
  );
};

const HomeCTABox = () => {
  return (
    <div className="flex flex-col w-full items-start justify-center gap-4 py-5 px-5 md:px-8 bg-primary text-white my-8 rounded-xl">
      <h2 className="text-sm">Sinhgad Carnival 2024</h2>
      <h1 className="text-3xl font-bold">Springfest is hiring now</h1>
    </div>
  );
};

export default Community;

const Card = () => {
  return (
    <div className="relative flex h-full md:max-w-[300px] cursor-pointer hover:brightness-75 flex-col rounded-md md:rounded-xl dark:border-2 dark:border-zinc-800  md:dark:bg-zinc-900 p-5 md:duration-300 md:dark:hover:bg-zinc-800 md:hover:bg-zinc-200 md:hover:brightness-100 transition-all shadow__card">
      <div className="flex w-full flex-wrap items-baseline justify-between">
        <p className="mb-3 self-start px-3 py-1 bg-black/5 text-zinc-500 dark:bg-white/5 rounded-lg whitespace-nowrap text-xs font-semibold dark:text-zinc-400 md:text-sm">
          15th Dec, 2024
        </p>

        <img
          className="h-12 rounded-xl bg-black/5 dark:bg-zinc-800 border-2 p-1.5"
          src="https://developers.google.com/static/community/images/colored-brackets_72.png"
          alt="google"
        />
      </div>

      <div className="flex h-full w-full flex-col items-start justify-between">
        <div className="mb-3 flex w-full flex-col">
          <h5 className="line-clamp-2 md:mb-0 mb-1 text-sm font-medium text-zinc-400 leading-5 md:leading-normal">
            Google
          </h5>
          <h3 className="line-clamp-2 md:mb-0 mb-5 text-lg font-bold leading-5 md:leading-normal">
            Google Developer Student Club
          </h3>
        </div>
        <div className="overflow-none relative flex w-full flex-wrap items-baseline gap-3">
          <span className="px-3 py-1 bg-black/5 text-zinc-500 dark:bg-white/5 rounded-lg whitespace-nowrap text-xs uppercase font-semibold dark:text-zinc-400 md:text-sm">
            gdsc
          </span>
          <span className="px-3 py-1 bg-black/5 text-zinc-500 dark:bg-white/5 rounded-lg whitespace-nowrap text-xs uppercase font-semibold dark:text-zinc-400 md:text-sm">
            Leads
          </span>
          <span className="px-3 py-1 bg-black/5 text-zinc-500 dark:bg-white/5 rounded-lg whitespace-nowrap text-xs uppercase font-semibold dark:text-zinc-400 md:text-sm">
            gsoc
          </span>
          <span className="px-3 py-1 bg-black/5 text-zinc-500 dark:bg-white/5 rounded-lg whitespace-nowrap text-xs uppercase font-semibold dark:text-zinc-400 md:text-sm">
            Remote
          </span>
          <span className="px-3 py-1 bg-black/5 text-zinc-500 dark:bg-white/5 rounded-lg whitespace-nowrap text-xs uppercase font-semibold dark:text-zinc-400 md:text-sm">
            google
          </span>
        </div>
        <Button className="mt-5 w-full">Apply</Button>
      </div>
    </div>
  );
};
