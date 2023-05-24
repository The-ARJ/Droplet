"use client";
import DashCards from "./DashCards";
import { MdAdd, MdAddCard } from "react-icons/md";
import Link from "next/link";
import DashInfo from "./DashInfo";
import CardForm from "./CardForm";

const CreateCard = ({ title }) => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      <div className="w-full ml-6 ">
        <DashInfo title="Create Card" />
        <div className="mt-6 font-bold text-xl text-purple-900">
          <div className="flex flex-wrap justify-around">
            <CardForm />
            <DashCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCard;
