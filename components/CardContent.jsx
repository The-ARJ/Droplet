"use client";
import DashCards from "./DashCards";
import { MdAdd, MdAddCard } from "react-icons/md";
import Link from "next/link";
import DashInfo from "./DashInfo";

const CardContent = ({ title }) => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      <div className="w-full ml-6 ">
       <DashInfo title="Card"/>
        <Link href="/createcard">
          <div className="bg-gray-200 rounded-lg shadow-lg p-8 mt-4 mb-4 ">
            <div className="flex items-center justify-center mb-4">
              <MdAddCard className=" h-10 w-10" />
            </div>
            <h2 className="text-xl font-bold text-center">Create Card</h2>
          </div>
        </Link>
        <div className="mt-6 font-bold text-xl text-purple-900">
          <h>All Cards</h>
          <DashCards />
        </div>
      </div>
    </div>
  );
};

export default CardContent;
