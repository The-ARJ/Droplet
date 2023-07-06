"use client";
import DashCards from "./DashCards";
import DashInfo from "./DashInfo";
import CardForm from "./CardForm";
import load from "../../public/assets/load.json";
import Lottie from "lottie-react";

const CreateCard = ({ title }) => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      <div className="w-full ml-6 ">
        <DashInfo title="Create Card" />
        <div className="mt-6">
          <div className="flex flex-wrap  justify-between">
            <CardForm />
            {/* <Lottie animationData={load} className=" h-[100px]  "></Lottie> */}
            <DashCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCard;
