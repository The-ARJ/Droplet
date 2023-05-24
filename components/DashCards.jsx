import React from "react";
import { MdAdd, MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const DashCards = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full md:w-3/12">
          <div className="p-2">
            <div className="p-4 rounded-3xl bg-[#111827]">
              <img
                className="w-32 h-32 rounded-full overflow-hidden object-cover"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                alt="participant"
              />
              <div className=" mb-4 mt-5 text-white">
                <p className="text-base font-bold opacity-70">Maria Cardova</p>
                <p className="text-sm opacity-70 mt-2">Prototyping</p>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <MdEmail className="text-white opacity-70 mr-2" />
                  <p className="text-sm text-white opacity-70">
                    maria@example.com
                  </p>
                </div>
                <div className="flex items-center mb-4">
                  <MdPhone className="text-white opacity-70 mr-2" />
                  <p className="text-sm text-white opacity-70">
                    +1 123-456-7890
                  </p>
                </div>
                <div className="flex items-center mb-4">
                  <MdLocationOn className="text-white opacity-70 mr-2" />
                  <p className="text-sm text-white opacity-70">
                    123 Main St, City, State, Country
                  </p>
                </div>
              </div>
              <div className="flex justify-between pt-4 relative">
                <div className="flex items-center">
                  <button className="w-5 h-5 rounded-full border-none ml-3 p-0 flex justify-center items-center bg-white">
                    <MdAdd />
                  </button>
                  <FaTwitter className="text-white opacity-70 ml-3" />
                  <FaLinkedin className="text-white opacity-70 ml-3" />
                  <FaGithub className="text-white opacity-70 ml-3" />
                </div>
                <div className="text-sm rounded-lg flex flex-shrink-0 py-2 px-4 font-bold text-yellow-600">
                  2 Days Left
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashCards;
