import React, { useState } from "react";

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("");

  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab("");
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <>
      <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
        <div className="container px-6 py-12 mx-auto">
          <div className="lg:flex lg:-mx-12">
            <div className="lg:w-1/3 lg:px-12">
              <h1 className="text-2xl font-semibold text-center text-gray-800 dark:text-white lg:text-3xl ">
                Have any Questions?
              </h1>
              <div className="mt-8 xl:mt-16">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Table of Content
                </h1>
                <div className="mt-4 space-y-4 lg:mt-8">
                  <a href="#" className="block text-blue-500 hover:underline">
                    General
                  </a>
                  <a href="#" className="block text-gray-500 hover:underline">
                    Trust & Safety
                  </a>
                  <a href="#" className="block text-gray-500 hover:underline">
                    Services
                  </a>
                  <a href="#" className="block text-gray-500 hover:underline">
                    Billing
                  </a>
                  <a href="#" className="block text-gray-500 hover:underline">
                    Office Cleaning
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 lg:px-12 mt-8 lg:mt-0">
              <div>
                <button
                  className="flex items-center focus:outline-none"
                  onClick={() => toggleTab("appointment")}
                >
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-blue-500 dark:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 12H4"
                    />
                  </svg>
                  <h1 className="mx-4 text-xl text-gray-700 dark:text-white">
                    How can I pay for my appointment?
                  </h1>
                </button>
                {activeTab === "appointment" && (
                  <div className="flex mt-8 md:mx-10">
                    <span className="border border-blue-500" />
                    <p className="max-w-3xl px-4 text-gray-500 dark:text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magni, eum quae. Harum officiis reprehenderit ex quia
                      ducimus minima id provident molestias optio nam vel,
                      quidem iure voluptatem, repellat et ipsa.
                    </p>
                  </div>
                )}
              </div>
              <hr className="my-8 border-gray-200 dark:border-gray-800" />
              <div>
                <button
                  className="flex items-center focus:outline-none"
                  onClick={() => toggleTab("consultation")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-6 h-6 text-blue-500 dark:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <h1 className="mx-4 text-xl text-gray-700 dark:text-white">
                    What can I expect at my first consultation?
                  </h1>
                </button>
                {activeTab === "consultation" && (
                  <div className="mt-4 md:mx-10">
                    <p className="text-gray-500 dark:text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ratione, saepe odit? Officiis quod aliquid natus voluptate
                      hic ad quam eius deleniti.
                    </p>
                  </div>
                )}
              </div>
              <hr className="my-8 border-gray-200 dark:border-gray-800" />
              <div>
                <button
                  className="flex items-center focus:outline-none"
                  onClick={() => toggleTab("opening_hours")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-6 h-6 text-blue-500 dark:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <h1 className="mx-4 text-xl text-gray-700 dark:text-white">
                    What are your opening hours?
                  </h1>
                </button>
                {activeTab === "opening_hours" && (
                  <div className="mt-4 md:mx-10">
                    <p className="text-gray-500 dark:text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ratione, saepe odit? Officiis quod aliquid natus voluptate
                      hic ad quam eius deleniti.
                    </p>
                  </div>
                )}
              </div>
              <hr className="my-8 border-gray-200 dark:border-gray-800" />
              <div>
                <button
                  className="flex items-center focus:outline-none"
                  onClick={() => toggleTab("referral")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-6 h-6 text-blue-500 dark:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <h1 className="mx-4 text-xl text-gray-700 dark:text-white">
                    Do I need a referral?
                  </h1>
                </button>
                {activeTab === "referral" && (
                  <div className="mt-4 md:mx-10">
                    <p className="text-gray-500 dark:text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ratione, saepe odit? Officiis quod aliquid natus voluptate
                      hic ad quam eius deleniti.
                    </p>
                  </div>
                )}
              </div>
              <hr className="my-8 border-gray-200 dark:border-gray-800" />
              <div>
                <button
                  className="flex items-center focus:outline-none"
                  onClick={() => toggleTab("insurance")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-6 h-6 text-blue-500 dark:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <h1 className="mx-4 text-xl text-gray-700 dark:text-white">
                    Is the cost of the appointment covered by private health
                    insurance?
                  </h1>
                </button>
                {activeTab === "insurance" && (
                  <div className="mt-4 md:mx-10">
                    <p className="text-gray-500 dark:text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ratione, saepe odit? Officiis quod aliquid natus voluptate
                      hic ad quam eius deleniti.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
