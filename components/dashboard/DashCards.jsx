import React, { useEffect, useState } from "react";
import { MdAdd, MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { v4 as uuid } from "uuid";

const DashCards = () => {
  const [formData, setFormData] = useState({});
  const [isPublished, setIsPublished] = useState(false);
  const [publishedId, setPublishedId] = useState("");

  const retrieveDataFromLocalStorage = () => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  };

  useEffect(() => {
    retrieveDataFromLocalStorage();
    window.addEventListener("storage", retrieveDataFromLocalStorage);
    return () => {
      window.removeEventListener("storage", retrieveDataFromLocalStorage);
    };
  }, []);

  const handlePublish = () => {
    const uniqueId = uuid();
    setIsPublished(true);
    setPublishedId(uniqueId);

    const publishedData = {
      id: uniqueId,
      formData: formData,
    };

    localStorage.setItem(uniqueId, JSON.stringify(publishedData));
  };

  return (
    <>
      <div className="w-full md:w-3/12">
        <div className="">
          <div className="rounded-3xl bg-[#111827]">
            {formData.image ? (
              <img
                className="w-full rounded-t-xl h-64 overflow-hidden object-cover"
                src={formData.image}
                alt="participant"
              />
            ) : (
              <img
                className="w-full rounded-t-xl h-auto overflow-hidden object-cover"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                alt="participant"
              />
            )}
            {formData.fullName && (
              <div className="mb-4 p-2 mt-5 text-white">
                <p className="text-base font-medium ">{formData.fullName}</p>
                <p className="text-sm mt-2 font-medium">{formData.role}</p>
              </div>
            )}
            {formData.email && formData.phone && formData.address && (
              <div>
                <div className="flex px-2 font-medium items-center mb-4">
                  <MdEmail className="text-white mr-2" />
                  <p className="text-sm text-white ">{formData.email}</p>
                </div>
                <div className="flex px-2 font-medium items-center mb-4">
                  <MdPhone className="text-white mr-2" />
                  <p className="text-sm text-white ">{formData.phone}</p>
                </div>
                <div className="flex px-2 font-medium items-center mb-4">
                  <MdLocationOn className="text-white mr-2" />
                  <p className="text-sm text-white ">{formData.address}</p>
                </div>
              </div>
            )}
            <div className="flex justify-between  pt-4 relative">
              <div className="flex items-center">
                <FaTwitter className="text-white ml-3" />
                <FaLinkedin className="text-white ml-3" />
                <FaGithub className="text-white ml-3" />
              </div>
              {!isPublished ? (
                <button
                  className="text-sm rounded-lg flex flex-shrink-0 py-2 px-4 font-medium text-yellow-600"
                  onClick={handlePublish}
                >
                  Publish
                </button>
              ) : (
                <div className="text-sm rounded-lg flex flex-shrink-0 py-2 px-4 font-medium text-green-600">
                  Published - ID: {publishedId}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashCards;
