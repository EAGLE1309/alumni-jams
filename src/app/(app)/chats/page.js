import TextBox from "@/components/chats/textbox";
import Search from "@/components/chats/search";
import Chats from "@/components/chats/chats";
import Chat from "@/components/chats/chat";

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
        dark:[&::-webkit-scrollbar-thumb]:bg-neutral-700 lg:min-w-[350px] lg:max-w-[350px] overflow-y-scroll h-full flex flex-col gap-3 bg-zinc-50 dark:bg-zinc-900 border-x-2 border-gray-200 dark:border-zinc-700 p-5"
      >
        <div className="w-full flex items-center justify-between">
          <h3 className="text-2xl font-bold">Chats</h3>
          <Search />
        </div>
        <Chats />
      </div>
      <Chat />
    </div>
  );
}
