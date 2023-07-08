"use client";
import { MdAddCard } from "react-icons/md";
import Link from "next/link";
import DashInfo from "./DashInfo";
import PublishedCard from "./publishedcards/PublishedCard";
import AllCards from "./AllCards";

const CardContent = ({ title }) => {
  return (
    <div className="flex  justify-center items-center">
      <div className="w-full ml-6 ">
        {/* <DashInfo title="Card" /> */}
        <h1 className=" text-2xl font-semibold">Cards</h1>
        <Link href="/create-card">
          <div className="bg-[#27272a] text-white  dark:text-gray-700 dark:bg-gray-100 hover:bg-gray-600 dark:hover:bg-gray-300  w-60 rounded-lg shadow-lg p-8 mt-4 mb-4 ">
            <div className="flex  items-center justify-center mb-4">
              <MdAddCard className=" h-10 w-10" />
            </div>
            <h2 className="text-xl font-bold text-center">Create Card</h2>
          </div>
        </Link>
        <div className="mt-6 space-y-6 font-bold text-xl text-gray-700  dark:text-white ">
          <h>All Cards</h>
          <AllCards />
        </div>
      </div>
    </div>
  );
};

export default CardContent;
