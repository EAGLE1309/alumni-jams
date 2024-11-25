"use client";

import { ChatsContext } from "@/context/ChatsContext";
import Image from "next/image";
import { useContext } from "react";

const Chat = ({ message }) => {
  const { chatId, data } = useContext(ChatsContext);

  return (
    <div className="self-start py-3 inline-flex gap-5 items-center bg-zinc-800 w-full px-5">
      <Image
        className="rounded-full"
        src={data?.user?.imageUrl}
        alt="Chats"
        width={45}
        height={45}
      />
      <h2 className="text-lg font-semibold">{data?.user?.name}</h2>
    </div>
  );
};

export default Chat;
