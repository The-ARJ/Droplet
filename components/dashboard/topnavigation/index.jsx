"use client";
import { useToggle } from "../provider/context";
import { useState, useContext } from "react";
import { FiSearch, FiShare2 } from "react-icons/fi";
import { MdAddCard, MdOutlineNotifications } from "react-icons/md";
import { UserContext } from "../../../utils/Context/UserContext";
import { imgURL } from "../../../utils/Services/UserServices";
import NoUser from "../../../public/assets/nouser.jpg";
import Image from "next/image";
import DropdownMenu from "./DropDown";
import ThemeButton from "../ThemeButton";

export default function TopNavigation() {
  const { toggle } = useToggle();
  const { user, loading } = useContext(UserContext);

  return (
    <header className="h-20 items-center relative z-10 border-b dark:border-gray-900/5  bg-white dark:bg-[#27272a]">
      <div className="flex flex-center flex-col h-full justify-center mx-auto relative px-3 text-black dark:text-white z-10">
        <div className="flex items-center  pl-1 relative w-full sm:ml-0 sm:pr-2 lg:max-w-68">
          <div className="flex group h-full  ml-2 items-center relative w-12">
            <button
              type="button"
              aria-expanded="false"
              aria-label="Toggle sidenav"
              onClick={toggle}
              className="text-4xl text-gray-700 dark:text-gray-100 focus:outline-none"
            >
              &#8801;
            </button>
          </div>

          <div className="container flex left-36 relative w-3/4">
            <div className="group hidden items-center ml-8 relative w-full md:flex lg:w-72">
              <FiSearch className="absolute fill-current h-4 hidden left-0 ml-4 pointer-events-none text-gray-400 dark:text-gray-400 w-4 group-hover:text-gray-400 sm:block" />
              <input
                type="text"
                className="bg-blue-500/10 dark:bg-[#3d3d40] block leading-normal pl-10 py-1.5 pr-4 ring-opacity-90 rounded-2xl text-gray-600 dark:text-white w-full focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="Search"
              />
            </div>
            <ThemeButton />
          </div>
          <div className="flex text-gray-700 dark:text-gray-100 items-center justify-end ml-5 p-1 relative w-full sm:mr-0 sm:right-auto">
            <a href="#" className="block pr-5">
              <FiShare2 className="h-6 w-6" />
            </a>
            <a href="#" className="block pr-5">
              <MdAddCard className="h-6 w-6" />
            </a>
            <a href="#" className="block pr-5 relative">
              <MdOutlineNotifications className="h-6 w-6" />
            </a>
            <div href="#" className="block pr-5 relative">
              <DropdownMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
