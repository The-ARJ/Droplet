"use client";
import DashInfo from "./DashInfo";
import PublishedCards from "./publishedcards/PublishedCard";

const Content = ({ title }) => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      <div className="w-full ml-6 ">
        <DashInfo title="Home" />
        <div className="mt-6 space-y-6 font-bold text-xl text-gray-700 dark:text-white">
          <h>Active Cards</h>
          <PublishedCards />
        </div>
      </div>
    </div>
  );
};

export default Content;
