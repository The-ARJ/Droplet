import React, { useEffect, useState } from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import CardService from "../../utils/Services/CardServices";
import { imgURL } from "../../utils/Services/UserServices";

const AllCards = () => {
  const [cardsData, setCardsData] = useState([]);

  const getAllCards = () => {
    const token = localStorage.getItem("token");
    CardService.getAllCards(token)
      .then((res) => {
        setCardsData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllCards();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cardsData.map((card) => (
        <div className="w-full md:w-5/6" key={card.id}>
          <div className="rounded-3xl bg-[#111827]">
            {card.image ? (
              <img
                className="w-full rounded-t-xl h-64 overflow-hidden object-cover"
                src={`${imgURL}/${card.image}`}
                alt="participant"
              />
            ) : (
              <img
                className="w-full rounded-t-xl h-auto overflow-hidden object-cover"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                alt="participant"
              />
            )}
            <div className="mb-4 p-2 mt-5 text-white">
              <p className="text-lg font-medium ">{card.firstName}</p>
              <p className="text-base mt-2 font-medium">{card.role}</p>
            </div>
            <div>
              <div className="flex px-2 font-medium items-center mb-4">
                <MdEmail className="text-white mr-2" />
                <p className="text-base text-white ">{card.email}</p>
              </div>
              <div className="flex px-2 font-medium items-center mb-4">
                <MdPhone className="text-white mr-2" />
                <p className="text-base text-white ">{card.phone}</p>
              </div>
              <div className="flex px-2 font-medium items-center mb-4">
                <MdLocationOn className="text-white mr-2" />
                <p className="text-base text-white ">{card.address}</p>
              </div>
            </div>
            <div className="flex justify-between items-center bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364]  rounded-b-lg  py-2 relative">
              <div className="flex items-center">
                <FaTwitter className="text-white ml-3" />
                <FaLinkedin className="text-white ml-3" />
                <FaGithub className="text-white ml-3" />
              </div>
              <button className="text-base rounded-lg flex flex-shrink-0 py-2 px-4 font-medium text-yellow-600">
                Publish
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllCards;
