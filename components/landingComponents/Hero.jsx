import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <>
      <section className="relative overflow-hidden ">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10  mt-10  z-50">
          <div className="max-w-4xl text-center mx-auto">
            <h1 className="block text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 dark:text-white">
              Unlock Your
              <span className="inline-flex items-center">
                <img
                  src="./assets/intext.png"
                  className="h-10 md:h-20 w-auto mr-2"
                  alt="Droplet"
                />
              </span>{" "}
              Digital Presence with
              <span className="text-blue-900 dark:text-blue-300">
                {" "}
                Professional Business Cards
              </span>
            </h1>

            <p className="mt-6  text-sm md:text-lg text-gray-800 dark:text-white">
              Make a Lasting Impression with Modern, Customizable, and
              Interactive Digital Business Cards
            </p>
          </div>
          <div className="mt-10 bg-center relative max-w-6xl mx-auto">
            <div className="flex flex-col  sm:flex-row items-center justify-center">
              <div className="mb-6 sm:mb-0 sm:mr-20">
                {/* Content on the left side */}
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                  1M+{" "}
                </h2>
                <p className="mb-2 text-gray-800 dark:text-white">
                  users and counting
                </p>
                <Link
                  href="/signup"
                  className="flex cursor-pointer items-center border-2 border-purple-900 dark:border-purple-300 py-2 px-2 rounded-lg text-gray-800 dark:text-white"
                >
                  Give it a Try <BsArrowRight className="ml-2" />
                </Link>
              </div>
              <div className="w-full sm:w-1/2">
                {/* Image */}
                <img
                  src="./assets/hero.png"
                  alt="Your Image"
                  className="w-full sm:h-[480px] object-fill rounded-xl"
                />
              </div>
              <div className="w-full sm:w-1/5 mt-6 sm:mt-0 text-center">
                <p className=" bg-slate-200 dark:bg-[#3d3d40] px-4 py-2 rounded-xl text-gray-600 dark:text-white">
                  create your card just in a minute
                </p>
              </div>
            </div>
            <div className="absolute inset-0 w-full h-full">
              <div className="flex flex-col justify-center items-center w-full h-full"></div>
            </div>
            <div className="absolute bottom-12 -left-20 -z-[1] w-32 sm:w-48 h-32 sm:h-48 bg-gradient-to-b from-orange-500 to-white dark:from-orange-500 dark:to-[#27272a] p-px rounded-lg :to-slate-900">
              <div className="bg-gray-100 w-32 sm:w-48 h-32 sm:h-48 rounded-lg :bg-slate-900 dark:bg-[#18181b]" />
            </div>
            <div className="absolute -top-12 -right-20 -z-[1] w-32 sm:w-48 h-32 sm:h-48 bg-gradient-to-t from-blue-600 to-cyan-400 dark:from-blue-600 dark:to-[#27272a] p-px rounded-full">
              <div className="bg-gray-100 w-32 sm:w-48 h-32 sm:h-48 rounded-full :bg-slate-900 dark:bg-[#18181b]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
