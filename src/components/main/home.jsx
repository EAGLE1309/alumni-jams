"use client";

import Image from "next/image";
import React from "react";
import newsImage from "@/assets/news.webp";

import { useContext } from "react";
import { AuthsContext } from "@/context/AuthsContext";
import SideBarProfile from "./sidebar-profile";

const Home = () => {
  const { currentUser } = useContext(AuthsContext);

  return (
    <section className="h-full p-4 pt-8 lg:px-8 flex flex-col lg:flex-row bg-zinc-100 dark:bg-[#0D0D0D] items-start gap-5 w-full">
      <div className="w-full">
        <h1 className="text-2xl font-bold">
          Welcome {currentUser?.data?.name}, to Alumni Jams
        </h1>
        <HomeCTABox />
        <h1 className="text-2xl font-bold">News and Events</h1>
        <div className="flex gap-5 mt-5 flex-col lg:flex-row">
          <Card />
          <Card />
          <Card />
        </div>
        <h1 className="text-2xl mt-5 font-bold">Alumni Stories</h1>
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

export default Home;

const Card = () => {
  return (
    <div className="relative flex h-full md:max-w-[300px] cursor-pointer hover:brightness-75 md:flex-col md:rounded-xl border-[1px] dark:border-zinc-800  md:bg-zinc-900 md:p-5 md:duration-300 md:hover:bg-zinc-800 md:hover:brightness-100 transition-all ease-in">
      <div className="relative mr-4 !aspect-video max-h-[72px] min-h-[128px] min-h-[72px] w-full max-w-[128px] md:mb-3 md:min-h-[145px] md:max-w-[257px]">
        <Image quality={75} fill src={newsImage} alt="Featured Image" />
      </div>
      <div className="flex h-full w-full flex-col items-start justify-between">
        <div className="mb-3 flex w-full flex-col">
          <h3 className="line-clamp-2  text-base-m font-bold leading-5 md:text-base md:leading-normal">
            Byterunners won SIH 2024, stunnig performance
          </h3>
        </div>
        <div className="overflow-none relative flex w-full flex-wrap items-baseline justify-between gap-1">
          <p className="mb-1 whitespace-nowrap text-xs font-semibold text-zinc-400 md:text-sm">
            15th Dec, 2024
          </p>
        </div>
      </div>
    </div>
  );
};
