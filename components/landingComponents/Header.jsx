"use client";
import Link from "next/link";
import React from "react";
import ThemeButton from "../dashboard/ThemeButton";

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {/* Header */}
      <header className="flex shadow rounded-md bg-white dark:bg-[#18181b] fixed flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm py-3 md:py-0 text-black dark:text-white">
        <nav
          className="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="relative md:flex md:items-center md:justify-between">
            <div className="flex items-center justify-between">
              <Link href="/">
                <div
                  onClick={scrollToTop}
                  className="text-2xl cursor-pointer hover:scale-105  transition-all flex items-center gap-2 justify-center font-semibold  text-gray-700 dark:text-gray-100"
                >
                  <img src="../assets/logo.png" className="h-10" />
                  <div className="">Droplet</div>
                </div>
              </Link>
              <div className="md:hidden">
                <button
                  type="button"
                  className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white dark:bg-[#27272a] text-gray-700 dark:text-gray-100 shadow-sm align-middle hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-dark focus:ring-violet-900 dark:focus:ring-violet-500 transition-all text-sm"
                  data-hs-collapse="#navbar-collapse-with-animation"
                  aria-controls="navbar-collapse-with-animation"
                  aria-label="Toggle navigation"
                >
                  <svg
                    className="hs-collapse-open:hidden w-4 h-4"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                  <svg
                    className="hs-collapse-open:block hidden w-4 h-4"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </button>
              </div>
            </div>
            <div
              id="navbar-collapse-with-animation"
              className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
            >
              <div className="overflow-hidden max-h-[75vh]">
                <div className="flex text-base flex-col gap- mt-5 divide-y divide-dashed divide-gray-200 dark:divide-gray-800 md:flex-row md:items-center md:justify-end md:gap-x-10 md:mt-0 md:pl-7 md:divide-y-0 md:divide-solid">
                  <Link
                    className="font-medium text-gray-600 dark:text-gray-100 hover:text-gray-500 dark:hover:text-gray-300 py-3 md:py-6 transform transition-all duration-300 hover:scale-105"
                    href="/"
                    aria-current="page"
                  >
                    Home
                  </Link>
                  <Link
                    className="font-medium text-gray-600 dark:text-gray-100 hover:text-gray-500 dark:hover:text-gray-300 py-3 md:py-6 transform transition-all duration-300 hover:scale-105"
                    href="#about"
                  >
                    About
                  </Link>
                  <Link
                    className="font-medium text-gray-600 dark:text-gray-100 hover:text-gray-500 dark:hover:text-gray-300 py-3 md:py-6 transform transition-all duration-300 hover:scale-105"
                    href="/#services"
                  >
                    Services
                  </Link>
                  <Link
                    className="font-medium text-gray-600 dark:text-gray-100 hover:text-gray-500 dark:hover:text-gray-300 py-3 md:py-6 transform transition-all duration-300 hover:scale-105"
                    href="/#contact"
                  >
                    Contact
                  </Link>
                  <Link
                    className="font-medium text-gray-600 dark:text-gray-100 hover:text-gray-500 dark:hover:text-gray-300 py-3 md:py-6 transform transition-all duration-300 hover:scale-105"
                    href="/signin"
                  >
                    Sign In
                  </Link>
                  <div className="pt-3 md:pt-0">
                    <Link
                      className="inline-flex justify-center rounded-xl items-center gap-x-2 text-center bg-violet-900 dark:bg-violet-700 hover:bg-violet-700 dark:hover:bg-violet-500 border border-transparent text-white dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-violet-900 dark:focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-dark  py-2.5 px-3 transform transition-all duration-300 hover:scale-105"
                      href="/signup"
                    >
                      Sign Up
                    </Link>
                  </div>
                  <ThemeButton />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
