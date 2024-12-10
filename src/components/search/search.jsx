"use client";

import { AuthsContext } from "@/context/AuthsContext";
import { useContext } from "react";

const Search = () => {
  const { currentUser } = useContext(AuthsContext);

  return (
    <section className="h-full p-4 pt-8 lg:px-8 w-full">
      <h1 className="text-2xl font-bold">Search User</h1>
    </section>
  );
};

export default Search;
