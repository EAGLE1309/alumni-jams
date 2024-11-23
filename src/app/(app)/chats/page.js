import { UserRoundPlus } from "lucide-react";
import Image from "next/image";
import TextBox from "@/components/chats/textbox";

export default function Page() {
  return (
    <div className="h-full w-full flex items-start gap-5">
      <div
        className="fixed [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-track]:bg-gray-100
        [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-gray-300
        dark:[&::-webkit-scrollbar-track]:bg-neutral-800
        dark:[&::-webkit-scrollbar-thumb]:bg-neutral-700 lg:min-w-[350px] lg:max-w-[350px] overflow-y-scroll h-full flex flex-col gap-3 bg-zinc-50 dark:bg-neutral-900 border-x-2 border-gray-200 dark:border-zinc-700 p-5"
      >
        <div className="w-full flex items-center justify-between">
          <h3 className="text-2xl font-bold">Chats</h3>
          <div className="p-2 inline-flex items-center justify-center bg-gray-200 hover:bg-gray-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-full transition-all border-2 border-gray-300 dark:border-zinc-700 cursor-pointer">
            <UserRoundPlus className="text-gray-500 dark:text-white size-5" />
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 divide-y-2">
          {Array.from({ length: 10 }).map((_, index) => (
            <Chats key={index} />
          ))}
        </div>
      </div>
      <div className="ml-[350px] w-full h-full flex flex-col justify-between">
        <div className="px-5 flex flex-col gap-5 mt-5">
          <Chat message={"This is a damn message"} />
          <Chat message={"This is a damn message"} />
          <Chat message={"This is a damn message"} />
          <Chat message={"This is a damn message"} />
          <Chat message={"This is a damn message"} />
        </div>
        <TextBox />
      </div>
    </div>
  );
}

const Chats = () => {
  return (
    <div className="w-full p-2 rounded-md hover:bg-gray-200 dark:hover:bg-zinc-800 flex items-center cursor-pointer gap-2.5">
      <Image
        className="rounded-full object-cover"
        src="https://api.dicebear.com/9.x/bottts-neutral/png"
        alt="Chats"
        width={51}
        height={51}
      />
      <div className="flex flex-col">
        <h3 className="text-lg font-bold">John Doe</h3>
        <p className="text-md text-neutral-600 dark:text-neutral-300">
          Hello there guys
        </p>
      </div>
    </div>
  );
};

const Chat = ({ message }) => {
  return (
    <div className="self-start p-2 bg-zinc-800 rounded-lg px-5">{message}</div>
  );
};
