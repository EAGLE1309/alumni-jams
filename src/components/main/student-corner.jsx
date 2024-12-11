"use client";

import { Button } from "../ui/button";
import SideBarProfile from "./sidebar-profile";

import { useContext } from "react";
import { AuthsContext } from "@/context/AuthsContext";

const StudentCorner = () => {
  const { currentUser } = useContext(AuthsContext);

  return (
    <section className="h-full relative p-4 pt-8 lg:px-8 flex flex-col lg:flex-row bg-zinc-100 dark:bg-[#0D0D0D] items-start gap-5 w-full">
      <div className="w-full">
        <h1 className="text-2xl font-bold">Student Training : </h1>
        <div className="flex gap-5 mt-5 flex-col lg:flex-row">
          <Reasearch />
          <Reasearch />
          <Reasearch />
        </div>
        <h1 className="text-2xl mt-5 font-bold">
          Past Competition : 
        </h1>
        <div className="flex gap-5 mt-5 flex-col lg:flex-row">
          <Reasearch2 />
          <Reasearch2 />
          <Reasearch2 />
        </div>
        <h1 className="text-2xl mt-5 font-bold">Clubs : </h1>
        <div className="flex gap-5 my-5 flex-col lg:flex-row">
          <Reasearch />
          <Reasearch />
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
    <div className="relative flex h-full md:max-w-[300px] cursor-pointer hover:brightness-75 flex-col rounded-md md:rounded-xl dark:border-2 dark:border-zinc-800  md:dark:bg-zinc-900 p-5 md:duration-300 md:dark:hover:bg-zinc-800 md:hover:bg-zinc-200 md:hover:brightness-100 transition-all shadow__card">
      <div className="flex w-full flex-wrap items-baseline justify-between">
        <p className="mb-3 self-start px-3 py-1 bg-black/5 text-zinc-500 dark:bg-white/5 rounded-lg whitespace-nowrap text-xs font-semibold dark:text-zinc-400 md:text-sm">
          15th Dec, 2024
        </p>
        <img
          className="h-12 rounded-xl bg-black/5 dark:bg-zinc-800 border-2 p-1.5"
          src="https://imgs.search.brave.com/6NIigLXOiHBQ7mxrgK2FRjZDUJbZUZxeeSxuSZZrFmw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jb2xvcmZ1bC1h/aS10ZWNoLWxvZ28t/aGlnaC1xdWFsaXR5/LWFpLWdlbmVyYXRl/ZC1pbWFnZV83MjE0/NDAtOTQ1NS5qcGc_/c2VtdD1haXNfaHli/cmlk"
          alt="google"
        />
      </div>

      <div className="flex h-full w-full flex-col items-start justify-between">
        <div className="mb-3 flex w-full flex-col">
          <h5 className="line-clamp-2 md:mb-0 mb-1 text-sm font-medium text-zinc-400 leading-5 md:leading-normal">
            Artificial Intelligence
          </h5>
          <h3 className="line-clamp-2 md:mb-0 mb-5 text-lg font-bold leading-5 md:leading-normal">
            Model Training
          </h3>
        </div>
        <div className="overflow-none relative flex w-full flex-wrap items-baseline gap-3">
          <span className="px-3 py-1 bg-black/5 text-zinc-500 dark:bg-white/5 rounded-lg whitespace-nowrap text-xs uppercase font-semibold dark:text-zinc-400 md:text-sm">
            ChatGPT
          </span>
          <span className="px-3 py-1 bg-black/5 text-zinc-500 dark:bg-white/5 rounded-lg whitespace-nowrap text-xs uppercase font-semibold dark:text-zinc-400 md:text-sm">
            Gemini
          </span>
          <span className="px-3 py-1 bg-black/5 text-zinc-500 dark:bg-white/5 rounded-lg whitespace-nowrap text-xs uppercase font-semibold dark:text-zinc-400 md:text-sm">
            Claude Ai
          </span>
          <span className="px-3 py-1 bg-black/5 text-zinc-500 dark:bg-white/5 rounded-lg whitespace-nowrap text-xs uppercase font-semibold dark:text-zinc-400 md:text-sm">
            Ollama
          </span>
          <span className="px-3 py-1 bg-black/5 text-zinc-500 dark:bg-white/5 rounded-lg whitespace-nowrap text-xs uppercase font-semibold dark:text-zinc-400 md:text-sm">
            google
          </span>
        </div>
        <Button className="mt-5 w-full">See More...</Button>
      </div>
    </div>
  );
};

const Reasearch2 = () => {
  return (
    <div className="relative flex h-full md:max-w-[300px] cursor-pointer hover:brightness-75 flex-col rounded-md md:rounded-xl dark:border-2 dark:border-zinc-800  md:dark:bg-zinc-900 p-5 md:duration-300 md:dark:hover:bg-zinc-800 md:hover:bg-zinc-200 md:hover:brightness-100 transition-all shadow__card">
      <div className="flex w-full flex-wrap items-baseline justify-between">
        <p className="mb-3 self-start px-3 py-1 bg-black/5 text-zinc-500 dark:bg-white/5 rounded-lg whitespace-nowrap text-xs font-semibold dark:text-zinc-400 md:text-sm">
          15th Dec, 2024
        </p>
        <img
          className="h-12 rounded-xl bg-black/5 dark:bg-zinc-800 border-2 p-1.5"
          src="https://imgs.search.brave.com/UJnfIwgtGpWWCsUofVJPurvCxI-IB3XRUjHJnvjrnuQ/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNjM0ZDE5MTJj/NzAzMDI1M2U3M2Qy/OWYxZWEzOTc4Yjdm/NDE5MzVhMTgyODE3/ZGVhYzU2NzRmMzVl/ZjkxMDZkZS93d3cu/c2loLmdvdi5pbi8"
          alt="google"
        />
      </div>

      <div className="flex h-full w-full flex-col items-start justify-between">
        <div className="mb-3 flex w-full flex-col">
          <h5 className="line-clamp-2 md:mb-0 mb-1 text-sm font-medium text-zinc-400 leading-5 md:leading-normal">
            Smart India Hackathon
          </h5>
          <h3 className="line-clamp-2 md:mb-0 mb-5 text-lg font-bold leading-5 md:leading-normal">
            Alumini-Jams
          </h3>
        </div>
        <div className="overflow-none relative flex w-full flex-wrap items-baseline gap-3">
          <span className="px-3 py-1 bg-black/5 text-zinc-500 dark:bg-white/5 rounded-lg whitespace-nowrap text-xs uppercase font-semibold dark:text-zinc-400 md:text-sm">
            1609
          </span>
          <span className="px-3 py-1 bg-black/5 text-zinc-500 dark:bg-white/5 rounded-lg whitespace-nowrap text-xs uppercase font-semibold dark:text-zinc-400 md:text-sm">
            Gujrat
          </span>
          <span className="px-3 py-1 bg-black/5 text-zinc-500 dark:bg-white/5 rounded-lg whitespace-nowrap text-xs uppercase font-semibold dark:text-zinc-400 md:text-sm">
            IIT GN
          </span>
          <span className="px-3 py-1 bg-black/5 text-zinc-500 dark:bg-white/5 rounded-lg whitespace-nowrap text-xs uppercase font-semibold dark:text-zinc-400 md:text-sm">
            SIH
          </span>
          <span className="px-3 py-1 bg-black/5 text-zinc-500 dark:bg-white/5 rounded-lg whitespace-nowrap text-xs uppercase font-semibold dark:text-zinc-400 md:text-sm">
            2024
          </span>
        </div>
        <Button className="mt-5 w-full">See More...</Button>
      </div>
    </div>
  );
};