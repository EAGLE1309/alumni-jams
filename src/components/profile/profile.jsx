"use client";

import { AuthsContext } from "@/context/AuthsContext";
import Image from "next/image";
import { useContext } from "react";

const Profile = () => {
  const { currentUser } = useContext(AuthsContext);

  return (
    <section className="h-full p-4 pt-8 lg:px-8 w-full">
      <h1 className="text-2xl font-bold mb-5">My Profile</h1>
      <div className="w-full space-y-5">
        <div className="w-full flex gap-9 p-5 border border-zinc-700 rounded-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image
            src={currentUser?.data?.imageUrl}
            alt={currentUser?.data?.name}
            width={95}
            height={95}
            className="w-[75px] h-[75px] rounded-full object-cover"
          />
          <div className="w-full">
            <h1 className="md:text-xl font-bold">{currentUser?.data?.name}</h1>
            <p className="text-sm md:text-normal text-zinc-400">
              @{currentUser?.data?.username}
            </p>
            <p className="text-sm md:text-normal text-zinc-400">
              {currentUser?.data?.email}
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col p-5 border border-zinc-700 rounded-xl">
          <h1 className="text-xl font-bold mb-5">Work Information</h1>
          <div className="grid grid-cols-2 gap-7">
            <Field title="College" description={currentUser?.data?.college} />
            <Field
              title="University"
              description={currentUser?.data?.university}
            />
            <Field
              title="Graduation Year"
              description={currentUser?.data?.graduationYear}
            />
            <Field
              title="Company Name"
              description={currentUser?.data?.companyName}
            />
            <Field
              title="Company Position"
              description={currentUser?.data?.companyPos}
            />
            <Field
              title="Employment Type"
              description={currentUser?.data?.employmentType}
            />
            <Field
              title="Company Location"
              description={currentUser?.data?.companyLocation}
            />
            <Field
              title="Company Start Date"
              description={
                currentUser?.data?.companyStartDate
                  ? new Intl.DateTimeFormat("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }).format(new Date(currentUser.data.companyStartDate))
                  : "N/A"
              }
            />
            <Field
              title="Is Currently Working"
              description={`${
                currentUser?.data?.isCurrentlyWorking ? "Yes" : "No"
              }`}
            />
            {!currentUser?.data?.isCurrentlyWorking ? (
              <Field
                title="Company End Date"
                description={
                  currentUser?.data?.companyEndDate
                    ? new Intl.DateTimeFormat("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      }).format(new Date(currentUser?.data?.companyEndDate))
                    : "N/A"
                }
              />
            ) : (
              <Field title="Status" description="Currently Working" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

const Field = ({ title, description }) => {
  return (
    <div className="w-full">
      <p className="text-zinc-400 font-bold md:text-md">{title}</p>
      <p className="md:text-lg">{description}</p>
    </div>
  );
};
