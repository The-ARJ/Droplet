"use client";
import { useToggle } from '../provider/context';
import { FiSearch, FiShare2 } from 'react-icons/fi';
import { MdOutlineNotifications } from 'react-icons/md';
import { GrAddCircle } from 'react-icons/gr';

export default function TopNavigation() {
  const { toggle } = useToggle();
  return (
    <header className="h-20 items-center relative z-10 border-2 border-gray-300">
      <div className="flex flex-center flex-col h-full justify-center mx-auto relative px-3 text-black z-10">
        <div className="flex items-center  pl-1 relative w-full sm:ml-0 sm:pr-2 lg:max-w-68">
          <div className="flex group h-full  ml-2 items-center relative w-12">
            <button
              type="button"
              aria-expanded="false"
              aria-label="Toggle sidenav"
              onClick={toggle}
              className="text-4xl text-black focus:outline-none"
            >
              &#8801;
            </button>
          </div>
          <div className="container flex left-36 relative w-3/4">
            <div className="group hidden items-center ml-8 relative w-full md:flex lg:w-72">
              <FiSearch className='absolute fill-current h-4 hidden left-0 ml-4 pointer-events-none text-gray-500 w-4 group-hover:text-gray-400 sm:block' />
              <input
                type="text"
                className="bg-gray-800 block leading-normal pl-10 py-1.5 pr-4 ring-opacity-90 rounded-2xl text-gray-400 w-full focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="flex items-center justify-end ml-5 p-1 relative w-full sm:mr-0 sm:right-auto">
            <a href="#" className="block pr-5">
              <FiShare2 className="h-6 w-6"
              />
            </a>
            <a href="#" className="block pr-5">
              <GrAddCircle className="h-6 w-6" />

            </a>
            <a href="#" className="block pr-5 relative">
              <MdOutlineNotifications className="h-6 w-6" />
            </a>
            <a href="#" className="block relative">
              <img
                alt="Maurice Lokumba"
                src="./assets/b2.jpg"
                className="h-10 mx-auto object-cover rounded-full w-10"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
