"use client";
import PreviewCard from "./PreviewCard";
import DashInfo from "./DashInfo";
import CardForm from "./CardForm";
import load from "../../public/assets/load.json";
import Lottie from "lottie-react";
import TemplateList from "./Templates";

const CreateCard = ({ handleTemplateClick }) => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      <div className="w-full ml-6 ">
        <DashInfo title="Create Card" />
        <div className="mt-6">
          <div className="flex   justify-between">
            <CardForm />
            <PreviewCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCard;
