"use client";

import { Button } from "../ui/button";
import SideBarProfile from "./sidebar-profile";

import { useContext } from "react";
import { AuthsContext } from "@/context/AuthsContext";

const StudentCorner = () => {
  const { currentUser } = useContext(AuthsContext);

  return (
    <section className="h-full p-4 pt-8 lg:px-8 flex flex-col lg:flex-row bg-zinc-100 dark:bg-[#0D0D0D] items-start gap-5 justify-between w-full">
      <div className="w-full">
        <h1 className="text-2xl font-bold">Student Research:</h1>
        <div className="flex gap-5 mt-5 flex-col lg:flex-row">
          <Reasearch />
        </div>
      </div>
      <SideBarProfile user={currentUser} />
    </section>
  );
};

export default StudentCorner;

const Reasearch = () => {
  return (
    <div className="relative flex h-full md:max-w-[300px] w-full cursor-pointer hover:brightness-75 flex-col rounded-xl border-[1px] dark:border-zinc-800  md:bg-zinc-900 p-5 md:duration-300 md:hover:bg-zinc-800 md:hover:brightness-100 transition-all ease-in">
      <p className="mb-3 self-start px-3 py-1 border-[1px] border-zinc-700 bg-white/5 rounded-xl whitespace-nowrap text-xs font-semibold text-zinc-400 md:text-sm">
        15th Dec, 2024
      </p>

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
          <span className="px-3 py-1 border-[1px] border-zinc-700  rounded-xl whitespace-nowrap text-xs uppercase font-semibold text-zinc-400 md:text-sm">
            gdsc
          </span>
          <span className="px-3 py-1 border-[1px] border-zinc-700  rounded-xl whitespace-nowrap text-xs uppercase font-semibold text-zinc-400 md:text-sm">
            Leads
          </span>
          <span className="px-3 py-1 border-[1px] border-zinc-700  rounded-xl whitespace-nowrap text-xs uppercase font-semibold text-zinc-400 md:text-sm">
            gsoc
          </span>
          <span className="px-3 py-1 border-[1px] border-zinc-700  rounded-xl whitespace-nowrap text-xs uppercase font-semibold text-zinc-400 md:text-sm">
            Remote
          </span>
          <span className="px-3 py-1 border-[1px] border-zinc-700  rounded-xl whitespace-nowrap text-xs uppercase font-semibold text-zinc-400 md:text-sm">
            google
          </span>
        </div>
        <div className="flex rounded-xl mt-5 w-full border-[1px] border-zinc-700 bg-white/5 items-center justify-center">
          <img
            className="h-12"
            src="https://gdscmpstme.com/images/gdsc-logo.png"
            alt="google"
          />
        </div>
        <Button className="mt-5 w-full">Apply</Button>
      </div>
    </div>
  );
};
