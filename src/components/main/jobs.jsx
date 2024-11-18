"use client";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Button } from "../ui/button";

const Jobs = ({ data }) => {
  return (
    <section className="h-full p-4 pt-8 lg:px-8 flex flex-col lg:flex-row bg-zinc-100 dark:bg-[#0D0D0D] items-start gap-5 w-full">
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
      <SideBarProfile data={data} />
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

const SideBarProfile = ({ data }) => {
  return (
    <div className="max-w-[555px] hidden mt-5 md:mt-0 md:flex flex-col items-center border-[1px] dark:border-zinc-800 dark:bg-zinc-900 bg-zinc-100 p-4 rounded-xl gap-5">
      <div className="flex flex-col items-center w-full gap-2">
        <span className="w-full h-24 bg-primary rounded-xl" />
        <Image
          className="rounded-full bg-black border-[7px] border-zinc-900 mt-[-3.5rem]"
          src={data?.imageUrl}
          alt={data?.name}
          width={82}
          height={82}
        />
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold">{data?.name}</h1>
          <p className="text-sm text-zinc-400">@{data?.username}</p>
        </div>
        <Separator className="w-[75%] my-2 bg-zinc-800" />
        <p className="text-sm max-w-[75%] text-center text-zinc-400">
          {data?.bio ||
            "Sustainability consultant passionate about eco-innovation. 🌿"}
        </p>
        <Separator className="w-[75%] my-2 bg-zinc-800" />
        <Button className="w-full">Profile</Button>
        <Button className="w-full bg-white/5 font-semibold hover:bg-white/15">
          Chats
        </Button>
      </div>
    </div>
  );
};

export default Jobs;

const Card = () => {
  return (
    <div className="relative flex h-full md:max-w-[300px] w-full cursor-pointer hover:brightness-75 flex-col md:rounded-xl border-[1px] dark:border-zinc-800  md:bg-zinc-900 md:p-5 md:duration-300 md:hover:bg-zinc-800 md:hover:brightness-100 transition-all ease-in">
      <p className="mb-1 self-start px-3 py-1 border-[1px] border-zinc-700 bg-white/5 rounded-xl whitespace-nowrap text-xs font-semibold text-zinc-400 md:text-sm">
        15th Dec, 2024
      </p>

      <div className="flex h-full w-full flex-col items-start justify-between">
        <div className="mb-3 flex w-full flex-col">
          <h5 className="line-clamp-2 text-sm font-medium text-zinc-400 leading-5 md:leading-normal">
            Nvidia
          </h5>
          <h3 className="line-clamp-2 text-lg font-bold leading-5 md:leading-normal">
            Need a CEO at Nvidia & Google
          </h3>
        </div>
        <div className="overflow-none relative flex w-full flex-wrap items-baseline justify-between gap-3">
          <span className="px-3 py-1 border-[1px] border-zinc-700  rounded-xl whitespace-nowrap text-xs uppercase font-semibold text-zinc-400 md:text-sm">
            ceo
          </span>
          <span className="px-3 py-1 border-[1px] border-zinc-700  rounded-xl whitespace-nowrap text-xs uppercase font-semibold text-zinc-400 md:text-sm">
            Senior
          </span>
          <span className="px-3 py-1 border-[1px] border-zinc-700  rounded-xl whitespace-nowrap text-xs uppercase font-semibold text-zinc-400 md:text-sm">
            lead
          </span>
          <span className="px-3 py-1 border-[1px] border-zinc-700  rounded-xl whitespace-nowrap text-xs uppercase font-semibold text-zinc-400 md:text-sm">
            Remote
          </span>
          <span className="px-3 py-1 border-[1px] border-zinc-700  rounded-xl whitespace-nowrap text-xs uppercase font-semibold text-zinc-400 md:text-sm">
            part time
          </span>
        </div>
        <div className="flex rounded-xl mt-5 w-full border-[1px] border-zinc-700 bg-white/5 items-center justify-center">
          <img
            className="h-12"
            src="https://ik.imagekit.io/eaglenetwork/_CITYPNG.COM_HD%20Nvidia%20Eye%20Logo%20Icon%20PNG%20-%202000x2000_qcelSuRN9Z.png?updatedAt=1731955853873"
            alt="nvidia"
          />
        </div>
        <Button className="mt-5 w-full">Apply</Button>
      </div>
    </div>
  );
};
