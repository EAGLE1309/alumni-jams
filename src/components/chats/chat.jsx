"use client";

import { ChatsContext } from "@/context/ChatsContext";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import TextBox from "./textbox";

const Chat = ({ message }) => {
  const { chatId, data } = useContext(ChatsContext);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    if (Object.keys(data.user).length === 0) {
      setIsChatOpen(false);
    } else {
      setIsChatOpen(true);
    }
  }, [data]);

  return (
    <div className="ml-[350px] w-full h-full flex flex-col justify-between">
      {!isChatOpen ? (
        <div className="h-full w-full flex items-center justify-center">
          <div className="p-5 bg-zinc-900 rounded-xl [background:linear-gradient(45deg,theme(colors.zinc.900),theme(colors.zinc.800)_50%,theme(colors.zinc.900))_padding-box,conic-gradient(from_var(--border-angle),theme(colors.zinc.600/.48)_80%,_theme(colors.zinc.500)_86%,_theme(colors.green.200)_90%,_theme(colors.green.500)_94%,_theme(colors.green.600/.48))_border-box] border border-transparent animate-border">
            <img
              src="https://ik.imagekit.io/eagledev/idks_tHjYdfbX3j.png?updatedAt=1732958779341"
              className="h-16 md:h-[85px] py-3 noselect md:py-5"
              alt="logo"
            />
          </div>
        </div>
      ) : (
        <>
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
          <TextBox />
        </>
      )}
    </div>
  );
};

export default Chat;
