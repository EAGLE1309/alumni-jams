"use client";

import { Button } from "../ui/button";
import { useContext } from "react";
import { AuthsContext } from "@/context/AuthsContext";
import SideBarProfile from "./sidebar-profile";

const Jobs = () => {
  const { currentUser } = useContext(AuthsContext);

  return (
    <section className="h-full relative p-4 pt-8 lg:px-8 flex flex-col lg:flex-row bg-zinc-100 dark:bg-[#0D0D0D] items-start gap-5 w-full">
      <div className="w-full">
        <h1 className="text-2xl font-bold">Recommended Jobs</h1>
        <div className="flex gap-5 mt-5 flex-col lg:flex-row">
          <Card />
          <Card />
          <Card />
        </div>
        <h1 className="text-2xl mt-5 font-bold">
          Jobs According to your preferences
        </h1>
        <div className="flex gap-5 mt-5 flex-col lg:flex-row">
          <Card />
          <Card />
          <Card />
        </div>
        <h1 className="text-2xl mt-5 font-bold">Jobs based on your skills</h1>
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

export default Jobs;

const Card = () => {
  return (
    <div className="relative flex h-full md:max-w-[300px] cursor-pointer hover:brightness-75 flex-col rounded-md md:rounded-xl dark:border-2 dark:border-zinc-800  md:dark:bg-zinc-900 p-5 md:duration-300 md:dark:hover:bg-zinc-800 md:hover:bg-zinc-200 md:hover:brightness-100 transition-all shadow__card">
      <div className="flex w-full flex-wrap items-baseline justify-between">
        <p className="mb-3 self-start px-3 py-1 bg-black/5 text-zinc-500 dark:bg-white/5 rounded-lg whitespace-nowrap text-xs font-semibold dark:text-zinc-400 md:text-sm">
          15th Dec, 2024
        </p>
        <img
          className="h-12 rounded-xl bg-black/5 dark:bg-zinc-800 border-2 p-1.5"
          src="https://ik.imagekit.io/eaglenetwork/_CITYPNG.COM_HD%20Nvidia%20Eye%20Logo%20Icon%20PNG%20-%202000x2000_qcelSuRN9Z.png?updatedAt=1731955853873"
          alt="nvidia"
        />
      </div>

      <div className="flex h-full w-full flex-col items-start justify-between">
        <div className="mb-3 flex w-full flex-col">
          <h5 className="line-clamp-2 md:mb-0 mb-1 text-sm font-medium text-zinc-400 leading-5 md:leading-normal">
            Nvidia
          </h5>
          <h3 className="line-clamp-2 md:mb-0 mb-5 text-lg font-bold leading-5 md:leading-normal">
            Need a CEO at Nvidia & Google
          </h3>
        </div>
        <div className="overflow-none relative flex w-full flex-wrap items-baseline gap-3">
          <span className="px-3 py-1 bg-black/5 text-zinc-500 dark:bg-white/5 rounded-lg whitespace-nowrap text-xs uppercase font-semibold dark:text-zinc-400 md:text-sm">
            ceo
          </span>
          <span className="px-3 py-1 bg-black/5 text-zinc-500 dark:bg-white/5 rounded-lg whitespace-nowrap text-xs uppercase font-semibold dark:text-zinc-400 md:text-sm">
            Senior
          </span>
          <span className="px-3 py-1 bg-black/5 text-zinc-500 dark:bg-white/5 rounded-lg whitespace-nowrap text-xs uppercase font-semibold dark:text-zinc-400 md:text-sm">
            lead
          </span>
          <span className="px-3 py-1 bg-black/5 text-zinc-500 dark:bg-white/5 rounded-lg whitespace-nowrap text-xs uppercase font-semibold dark:text-zinc-400 md:text-sm">
            Remote
          </span>
          <span className="px-3 py-1 bg-black/5 text-zinc-500 dark:bg-white/5 rounded-lg whitespace-nowrap text-xs uppercase font-semibold dark:text-zinc-400 md:text-sm">
            part time
          </span>
        </div>
        <Button className="mt-5 w-full">Apply</Button>
      </div>
    </div>
  );
};
