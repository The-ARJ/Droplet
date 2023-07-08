import { useState, useEffect } from "react";

const DashInfo = ({ title }) => {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const currentDate = new Date();
      const formattedDateTime = currentDate.toLocaleString("en-US", {
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
      setCurrentDateTime(formattedDateTime);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div className="bg-white dark:bg-gray-700 border dark:border-gray-900/5 shadow-xl rounded-3xl py-6 px-6">
        <div className="flex justify-between text-gray-700 dark:text-white items-center mb-8">
          <p className="md:text-2xl font-bold">{title}</p>
          <p className="text-xs md:text-base">{currentDateTime}</p>
        </div>
        <div className="flex flex-wrap justify-between items-center pb-8">
          <div className="flex text-gray-700 dark:text-white md:gap-8">
            <div className="">
              <div className="md:text-2xl font-bold">5</div>
              <div className="text-xs md:text-base">Total Cards</div>
            </div>
            <div className="">
              <div className="md:text-2xl font-bold">3</div>
              <div className="text-xs md:text-base">Active Cards</div>
            </div>
            <div className="">
              <div className="md:text-2xl font-bold">400</div>
              <div className="text-xs md:text-base">Cards Views</div>
            </div>
            <div>
              <div className="md:text-2xl font-bold">4</div>
              <div className="text-xs md:text-base">Saved Templates</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashInfo;
