"use client";
import DashInfo from "./DashInfo";
import PublishedCards from "./PublishedCard";

const Content = ({ title }) => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      <div className="w-full ml-6 ">
        <DashInfo title="Home" />
        <div className="mt-6 font-bold text-xl text-purple-900">
          <h>Active Cards</h>
          <PublishedCards />
        </div>
      </div>
    </div>
  );
};

export default Content;
