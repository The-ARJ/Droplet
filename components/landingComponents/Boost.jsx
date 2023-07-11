import React from "react";

const Boost = () => {
  return (
    <>
      <div className="rounded-xl max-w-[65rem] bg-gradient-to-b mb-10 from-indigo-500 to-indigo-600 dark:from-indigo-800 dark:to-indigo-900 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
        <div className="flex items-center justify-between">
          <span className="text-base  text-white font-semibold ">
            What people say’s{" "}
          </span>
          <a
            className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600"
            tabIndex={0}
            role="button"
          >
            Design
          </a>
        </div>
        <div className="mt-2">
          <h
            href="#"
            className="text-xl font-bold text-white"
            tabIndex={0}
            role="link"
          >
            Accessibility tools for Business and people
          </h>
          <p className="mt-2 text-gray-200 dark:text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
            enim reprehenderit nisi, accusamus delectus nihil quis facere in
            modi ratione libero!
          </p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="">
            <h
              href="#"
              className=" text-[#323F73] dark:text-white font-bold  text-8xl hover:underline"
              tabIndex={0}
              role="link"
            >
              50%
            </h>
            <p className=" text-4xl font-semibold text-[#323F73] dark:text-white">
              Boost in business
            </p>
          </div>
          <div className="flex items-center">
            <img
              className="hidden object-cover w-96  mx-4  sm:block"
              src="./assets/b5.png"
              alt="avatar"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Boost;
