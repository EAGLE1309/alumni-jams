"use client";

import { ChatsContext } from "@/context/ChatsContext";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import TextBox from "./textbox";
import { useResizeObserver } from "@/hooks/use-resize-observer";
import { cn } from "@/lib/utils";
import { UtilityContext } from "@/context/UtilityContext";
import { ArrowLeft } from "lucide-react";
import useViewport from "@/hooks/useViewport";
import { appwriteConfig, databases } from "@/lib/appwrite/config";
import { Query } from "appwrite";

/*==========[CHAT SCREEN]========== */

const ChatScreen = ({ onClick }) => {
  const { data, dispatch } = useContext(ChatsContext);

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState(null);

  const { ref, width } = useResizeObserver();
  const { breakpoint } = useViewport();
  const { scrollRef, scrollToBottom } = useContext(UtilityContext);

  if (isChatOpen) scrollToBottom();

  useEffect(() => {
    if (Object.keys(data.user).length === 0) {
      setIsChatOpen(false);
    } else {
      setIsChatOpen(true);
    }
  }, [data]);

  useEffect(() => {
    scrollToBottom();
  }, [data]);

  const handleClose = () => {
    if (breakpoint == "lg" || breakpoint == "xl" || breakpoint == "2xl") {
      dispatch({ type: "CHANGE_USER", payload: {} });
    } else {
      onClick();
    }
  };

  // FETCH CHATS FROM DATABASE OF CURRENT SELECTED CONVERSATION
  const fetchMessages = async () => {
    try {
      const messages = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.userChatsCollectionId,
        [Query.equal("chatId", data.chatId)]
      );

      console.log(messages.documents[0].chats);
      setMessages(messages.documents[0].chats);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    scrollToBottom();
    fetchMessages();

    return () => {
      console.log(messages);
    };
  }, [data.chatId]);

  return (
    <div
      ref={ref}
      className="md:ml-[350px] relative w-full h-full flex flex-col overflow-y-hidden"
    >
      {!isChatOpen ? (
        <div className="h-full w-full flex items-center justify-center">
          <div className="p-5 bg-zinc-900 rounded-xl [background:linear-gradient(45deg,theme(colors.zinc.900),theme(colors.zinc.800)_50%,theme(colors.zinc.900))_padding-box,conic-gradient(from_var(--border-angle),theme(colors.zinc.600/.48)_80%,_theme(colors.zinc.500)_86%,_theme(colors.green.200)_90%,_theme(colors.green.500)_94%,_theme(colors.green.600/.48))_border-box] border border-transparent animate-border">
            {
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src="https://ik.imagekit.io/eagledev/idks_tHjYdfbX3j.png?updatedAt=1732958779341"
                className="h-16 md:h-[85px] py-3 noselect md:py-5"
                alt="logo"
              />
            }
          </div>
        </div>
      ) : (
        <>
          <div
            className="self-start w-full fixed top-0 py-3 overflow-y-hidden inline-flex gap-5 items-center justify-between bg-zinc-800 px-5"
            style={{ width: `${width}px` }}
          >
            <div className="inline-flex items-center gap-5">
              <Image
                className="rounded-full"
                src={data?.user?.imageUrl}
                alt="Chats"
                width={45}
                height={45}
              />
              <h2 className="text-lg font-semibold">{data?.user?.name}</h2>
            </div>
            <div
              className="p-2 cursor-pointer bg-zinc-700 hover:bg-zinc-600 transition-all rounded-full inline-flex items-center justify-center"
              onClick={() => handleClose()}
            >
              <ArrowLeft />
            </div>
          </div>

          <div className="flex flex-col gap-1.5 px-5 w-full h-full mt-[96px] mb-20">
            {messages?.map((message, index) => (
              <ChatBubble
                key={index}
                isRecieved={message.senderId === data.user.userId}
                message={message.text}
              />
            ))}
            <div className="h-1" ref={scrollRef} />
          </div>

          <div
            className="fixed bottom-0 mt-1 bg-zinc-100 dark:bg-[#0D0D0D] pt-3"
            style={{ width: `${width}px` }}
          >
            <TextBox />
          </div>
        </>
      )}
    </div>
  );
};

const ChatBubble = ({ message, isRecieved }) => {
  console.log(message, isRecieved);
  const recieved = "bg-zinc-800 self-start rounded-r-xl rounded-bl-xl";
  const user =
    "self-end bg-gradient-to-r from-blue-700 to-indigo-700 rounded-l-xl rounded-br-xl";

  return (
    <div className={cn(isRecieved ? recieved : user, "p-3")}>{message}</div>
  );
};

export default ChatScreen;
