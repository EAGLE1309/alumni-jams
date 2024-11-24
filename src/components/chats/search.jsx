"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CircleAlert, UserRoundPlus } from "lucide-react";
import { Input } from "../ui/input";
import { useContext, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { appwriteConfig, databases } from "@/lib/appwrite/config";
import { Query } from "appwrite";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";
import { toast } from "sonner";
import { AuthsContext } from "@/context/AuthsContext";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const { currentUser: currentUserData, updateContext } =
    useContext(AuthsContext);

  useEffect(() => {
    setCurrentUser(currentUserData);
  }, [currentUserData]);

  useEffect(() => {
    if (searchQuery) {
      setDisabled(false);
    } else {
      setDisabled(true);
      setUser(null);
    }
  }, [searchQuery]);

  const handleSearch = async (e) => {
    e.preventDefault();

    setUser(null);
    setDisabled(true);
    setLoading(true);

    const a = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.contains("username", searchQuery)]
    );

    setUser(a.documents);

    setDisabled(false);
    setLoading(false);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setUser(null);
  };

  const handleCreateChats = async (e, userData) => {
    e.preventDefault();

    try {
      toast.info("Creating a new conversation");

      const combinedId =
        userData.$id > currentUser.$id
          ? userData.$id + currentUser.$id
          : currentUser.$id + userData.$id;

      const currentTime = new Date().toISOString();

      const updatedUserChats = [...currentUser.data.userChats];

      updatedUserChats.push({
        userId: userData.$id,
        username: userData.username,
        imageUrl: userData.imageUrl,
        name: userData.name,
        chatId: combinedId,
        timestamp: currentTime,
      });

      const res = await databases.updateDocument(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        currentUser.$id,
        {
          userChats: updatedUserChats,
        }
      );

      await updateContext();

      console.log(res);

      toast.success("Conversation created successfully");
    } catch (error) {
      console.log(JSON.stringify(error), error);
      // toast.error(error);
    } finally {
      clearSearch();
      setUser(null);
    }
  };

  return (
    <Dialog>
      <DialogTrigger onClick={clearSearch}>
        <div className="p-2 inline-flex items-center justify-center bg-gray-200 hover:bg-gray-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-full transition-all border-2 border-gray-300 dark:border-zinc-700 cursor-pointer">
          <UserRoundPlus className="searchQuery-gray-500 dark:searchQuery-white size-5" />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Search for users</DialogTitle>
          <DialogDescription>
            <p className="pb-5">
              Search for users by their userId to start conversation
            </p>
            <form
              onSubmit={(e) => handleSearch(e)}
              className="flex items-center gap-5 w-full"
            >
              <Input
                name="searchQuery"
                id="searchQuery"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoComplete="off"
                className="h-[51px] border-2 rounded-xl border-gray-200 font-normal dark:border-zinc-800 text-foreground bg-gray-200 dark:bg-zinc-900 dark:searchQuery-white p-3 md:text-md"
                placeholder="Search with username"
              />
              <Button
                disabled={disabled}
                type="submit"
                className="h-[51px] bg-blue-700 border-2 border-blue-600 rounded-xl"
              >
                Search
              </Button>
            </form>
            {loading &&
              Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="flex gap-5 items-center w-full bg-zinc-900 p-3 rounded-xl h-[72px] mt-5"
                >
                  <div className="flex items-center gap-3">
                    <Skeleton className="w-12 h-12 rounded-full" />
                    <div className="flex flex-col gap-1">
                      <Skeleton className="w-32 h-[25px]" />
                      <Skeleton className="w-28 h-[20px]" />
                    </div>
                  </div>
                </div>
              ))}
            {user &&
              user.slice(0, 3).map((user) => (
                <div
                  key={user.$id}
                  className="flex items-center justify-between gap-5 w-full bg-zinc-900 p-3 rounded-xl mt-5"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      className="rounded-full bg-black"
                      src={user?.imageUrl}
                      alt={user?.name}
                      width={48}
                      height={48}
                    />
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        {user?.name}
                      </h3>
                      <p>@{user?.username}</p>
                    </div>
                  </div>
                  <div
                    onClick={(e) => handleCreateChats(e, user)}
                    className="text-foreground font-semibold p-3 bg-zinc-800 border-2 border-zinc-700 hover:bg-zinc-700 transition-all rounded-xl cursor-pointer"
                  >
                    Click to chat
                  </div>
                </div>
              ))}

            {user && user.length === 0 && (
              <div className="text-foreground inline-flex w-full items-center gap-2 font-semibold p-3 mt-5 bg-zinc-900 border-2 border-zinc-800 hover:bg-zinc-800 transition-all rounded-xl cursor-pointer">
                <CircleAlert /> No user found
              </div>
            )}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Search;
