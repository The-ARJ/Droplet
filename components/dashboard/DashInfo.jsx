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
      <div className="bg-white dark:bg-[#27272a] border dark:border-gray-900/5 shadow-xl rounded-3xl py-6 px-6 transition-colors duration-500">
        <div className="flex justify-between text-gray-700 dark:text-white items-center mb-8 transition-colors duration-500">
          <p className="md:text-2xl font-bold">{title}</p>
          <p className="text-xs md:text-base">{currentDateTime}</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="flex flex-col items-center text-center bg-gray-100 dark:bg-[#3d3d40] p-4 rounded-lg shadow transition-colors duration-500">
            <div className="md:text-2xl font-bold text-indigo-500">5</div>
            <div className="text-xs md:text-base text-gray-700 dark:text-gray-300">
              Total Cards
            </div>
          </div>
          <div className="flex flex-col items-center text-center bg-gray-100 dark:bg-[#3d3d40] p-4 rounded-lg shadow transition-colors duration-500">
            <div className="md:text-2xl font-bold text-green-500">3</div>
            <div className="text-xs md:text-base text-gray-700 dark:text-gray-300">
              Active Cards
            </div>
          </div>
          <div className="flex flex-col items-center text-center bg-gray-100 dark:bg-[#3d3d40] p-4 rounded-lg shadow transition-colors duration-500">
            <div className="md:text-2xl font-bold text-fuchsia-500">400</div>
            <div className="text-xs md:text-base text-gray-700 dark:text-gray-300">
              Cards Views
            </div>
          </div>
          <div className="flex flex-col items-center text-center bg-gray-100 dark:bg-[#3d3d40] p-4 rounded-lg shadow transition-colors duration-500">
            <div className="md:text-2xl font-bold text-yellow-500">4</div>
            <div className="text-xs md:text-base text-gray-700 dark:text-gray-300">
              Saved Templates
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashInfo;
