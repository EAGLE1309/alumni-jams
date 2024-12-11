"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import SideBarProfile from "./sidebar-profile";
import { useContext } from "react";
import { AuthsContext } from "@/context/AuthsContext";

const DonationPortal = () => {

  const { currentUser } = useContext(AuthsContext);
  const [donationAmount, setDonationAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleDonationSubmit = (e) => {
    e.preventDefault();
    setMessage(`Thank you for donating $${donationAmount} to support our students!`);
    setDonationAmount("");
  };

  return (
    <section className="h-full relative p-4 pt-8 lg:px-8 flex flex-col lg:flex-row bg-zinc-100 dark:bg-[#0D0D0D] items-start gap-5 w-full">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center mb-6">Support Our Students</h1>
        <p className="text-center text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          Your contributions help fund training programs, competitions, and student clubs.
        </p>
        <form
          onSubmit={handleDonationSubmit}
          className="flex flex-col gap-4 items-center bg-white dark:bg-zinc-900 p-6 rounded-lg shadow__card"
        >
          <label htmlFor="donation" className="text-lg font-semibold">
            Donation Amount ($):
          </label>
          <input
            type="number"
            id="donation"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
            className="w-full p-2 border rounded-md text-zinc-900 dark:text-zinc-100 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700"
            placeholder="Enter amount"
            required
          />
          <Button type="submit" className="mt-4 w-full">
            Donate Now
          </Button>
        </form>
        {message && (
          <p className="mt-4 text-center text-green-600 dark:text-green-400 font-medium">
            {message}
          </p>
        )}
      </div>
        <div className="shadow__card rounded-xl">

        <SideBarProfile user={currentUser} />
        </div>
      
    </section>
  );
};

export default DonationPortal;