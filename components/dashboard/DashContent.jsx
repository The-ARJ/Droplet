"use client";
import DashCards from "./PreviewCard";
import DashInfo from "./DashInfo";

const Content = ({ title }) => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      <div className="w-full ml-6 ">
        <DashInfo title="Home" />
        <div className="mt-6 font-bold text-xl text-purple-900">
          <h>Active Cards</h>
          <DashCards />
        </div>
      </div>
    </div>
  );
};

export default Content;
