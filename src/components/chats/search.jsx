"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UserRoundPlus } from "lucide-react";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { appwriteConfig, databases } from "@/lib/appwrite/config";
import { Query } from "appwrite";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState(null);

  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

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
    setDisabled(true);
    setLoading(true);

    const a = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.contains("username", searchQuery)]
    );

    console.log(a.documents[0]);
    setUser(a.documents[0]);

    setDisabled(false);
    setLoading(false);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setUser(null);
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
                placeholder="Search with ID..."
              />
              <Button
                disabled={disabled}
                type="submit"
                className="h-[51px] bg-blue-700 border-2 border-blue-600 rounded-xl"
              >
                Search
              </Button>
            </form>
            {loading && (
              <div className="flex gap-5 items-center w-full bg-zinc-900 p-3 rounded-xl h-[72px] mt-5">
                <div className="flex items-center gap-3">
                  <Skeleton className="w-12 h-12 rounded-full" />
                  <div className="flex flex-col gap-1">
                    <Skeleton className="w-32 h-[25px]" />
                    <Skeleton className="w-28 h-[20px]" />
                  </div>
                </div>
              </div>
            )}
            {user && (
              <div className="flex items-center justify-between gap-5 w-full bg-zinc-900 p-3 rounded-xl mt-5">
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
                <div className="text-foreground font-semibold p-3 bg-zinc-800 border-2 border-zinc-700 hover:bg-zinc-700 transition-all rounded-xl cursor-pointer">
                  Click to chat
                </div>
              </div>
            )}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Search;
