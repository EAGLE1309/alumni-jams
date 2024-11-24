"use client";

import { AuthsContext } from "@/context/AuthsContext";
import Image from "next/image";
import { useContext } from "react";

const Chats = () => {
  const { currentUser } = useContext(AuthsContext);

  console.log(currentUser?.data?.userChats);

  return (
    <div className="w-full flex flex-col gap-2 divide-y-2">
      {currentUser?.data?.userChats.length > 0 ? (
        currentUser?.data?.userChats.map((data, index) => (
          <Chat
            key={index}
            lastMessage={data?.lastMessage || "Hello, this is a message."}
            imageUrl={data?.imageUrl}
            name={data?.name}
          />
        ))
      ) : (
        <p className="text-md text-neutral-600 dark:text-neutral-300">
          No chats here, start a conversation
        </p>
      )}
    </div>
  );
};

const Chat = ({ lastMessage, imageUrl, name }) => {
  return (
    <div className="w-full p-2 rounded-md hover:bg-gray-200 dark:hover:bg-zinc-800 flex items-center cursor-pointer gap-2.5">
      <Image
        className="rounded-full object-cover"
        src={imageUrl}
        alt="Chats"
        width={51}
        height={51}
      />
      <div className="flex flex-col">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-md text-neutral-600 dark:text-neutral-300">
          {lastMessage}
        </p>
      </div>
    </div>
  );
};

export default Chats;
