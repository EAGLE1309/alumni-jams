"use client";

import { AuthsContext } from "@/context/AuthsContext";
import { useContext, useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { appwriteConfig, databases } from "@/lib/appwrite/config";

const Search = () => {
  const { currentUser } = useContext(AuthsContext);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await databases.listDocuments(
          appwriteConfig.databaseId,
          appwriteConfig.userCollectionId
        );
        setData(data.documents);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [currentUser]);

  console.log(data);

  return (
    <section className="h-full p-4 pt-8 lg:px-8 w-full">
      <h1 className="text-2xl mb-5 font-bold">Directory</h1>
      <Table className="overflow-x-auto rounded-xl">
        <TableCaption className="sr-only">A list of all users.</TableCaption>
        <TableHeader className="bg-primary text-white">
          <TableRow>
            <TableHead className="text-white font-bold">Name</TableHead>
            <TableHead className="text-white font-bold">Username</TableHead>
            <TableHead className="text-white font-bold">Email</TableHead>
            <TableHead className="text-white font-bold">College</TableHead>
            <TableHead className="text-white font-bold">
              Graduation Year
            </TableHead>
            <TableHead className="text-white font-bold">Company Name</TableHead>
            <TableHead className="text-white font-bold">
              Company Location
            </TableHead>
            <TableHead className="text-white font-bold">
              Company Start Date
            </TableHead>
            <TableHead className="text-white font-bold">
              Company End Date
            </TableHead>
            <TableHead className="text-white font-bold">
              Company Position
            </TableHead>
            <TableHead className="text-white font-bold">Stream</TableHead>
            <TableHead className="text-white font-bold">University</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((user) => (
            <TableRow
              key={user.$id}
              className="odd:bg-zinc-900 even:bg-zinc-800"
            >
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.college || "-"}</TableCell>
              <TableCell>{user.graduationYear || "-"}</TableCell>
              <TableCell>{user.companyName || "-"}</TableCell>
              <TableCell>{user.companyLocation || "-"}</TableCell>
              <TableCell>
                {user.companyStartDate ? (
                  <time dateTime={user.companyStartDate} className="text-sm">
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    }).format(new Date(user.companyStartDate))}
                  </time>
                ) : (
                  "-"
                )}
              </TableCell>
              <TableCell>
                {user.companyEndDate ? (
                  <time dateTime={user.companyEndDate} className="text-sm">
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    }).format(new Date(user.companyEndDate))}
                  </time>
                ) : (
                  "-"
                )}
              </TableCell>
              <TableCell>{user.companyPos || "-"}</TableCell>
              <TableCell>{user.stream || "-"}</TableCell>
              <TableCell>{user.university || "-"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default Search;
