import React, { useEffect, useState, useRef } from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaDownload,
  FaTrash,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import html2canvas from "html2canvas";
import { v4 as uuid } from "uuid";

const CardList = () => {
  const [cardData, setCardData] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const router = useRouter();
  const downloadLinkRef = useRef(null);

  useEffect(() => {
    const retrievedData = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!isNaN(parseInt(key))) {
        const storedData = localStorage.getItem(key);
        if (storedData) {
          retrievedData.push(JSON.parse(storedData));
        }
      }
    }
    setCardData(retrievedData);
  }, []);

  const handleShare = (id) => {
    const uniqueId = uuid();
    const shareableURL = `/card/${uniqueId}`;
    localStorage.setItem(uniqueId, localStorage.getItem(id));
    router.push(shareableURL);
    console.log("Shareable URL:", shareableURL);
  };

  const handleDownload = () => {
    const cardElement = document.getElementById("card-container");

    html2canvas(cardElement).then((canvas) => {
      const cardImage = canvas.toDataURL("image/png");
      downloadLinkRef.current.href = cardImage;
      downloadLinkRef.current.download = "card.png";
      downloadLinkRef.current.click();
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function (event) {
      setSelectedImage(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDelete = (id) => {
    const shouldDelete = window.confirm("Are you sure you want to delete this card?");
    if (shouldDelete) {
      localStorage.removeItem(id);
      setCardData((prevCardData) =>
        prevCardData.filter((card) => card.id !== id)
      );
    }
  };

  return (
    <>
      <div className="flex flex-wrap">
        {cardData.map((card) => (
          <div className="w-full md:w-3/12" key={card.id}>
            <div className="p-2">
              <div className="p-4 rounded-3xl bg-[#111827]" id="card-container">
                <div className="flex justify-center">
                  {selectedImage ? (
                    <img
                      className="w-32 h-32 rounded-full overflow-hidden object-cover"
                      src={selectedImage}
                      alt="participant"
                    />
                  ) : (
                    <img
                      className="w-32 h-32 rounded-full overflow-hidden object-cover"
                      src={card.formData.image}
                      alt="participant"
                    />
                  )}
                </div>
                <div className="mb-4 mt-5 text-white">
                  <p className="text-base font-bold opacity-70">
                    {card.formData.fullName}
                  </p>
                  <p className="text-sm opacity-70 mt-2">
                    {card.formData.role}
                  </p>
                </div>
                <div>
                  <div className="flex items-center mb-4">
                    <MdEmail className="text-white opacity-70 mr-2" />
                    <p className="text-sm text-white opacity-70">
                      {card.formData.email}
                    </p>
                  </div>
                  <div className="flex items-center mb-4">
                    <MdPhone className="text-white opacity-70 mr-2" />
                    <p className="text-sm text-white opacity-70">
                      {card.formData.phone}
                    </p>
                  </div>
                  <div className="flex items-center mb-4">
                    <MdLocationOn className="text-white opacity-70 mr-2" />
                    <p className="text-sm text-white opacity-70">
                      {card.formData.address}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between pt-4 relative">
                  <div className="flex items-center">
                    <FaTwitter className="text-white opacity-70 ml-3" />
                    <FaLinkedin className="text-white opacity-70 ml-3" />
                    <FaGithub className="text-white opacity-70 ml-3" />
                  </div>
                  <div>
                    <div className=" flex">
                      <div className="text-sm rounded-lg flex flex-shrink-0 py-2 font-bold text-red-600 cursor-pointer">
                        <FaTrash onClick={() => handleDelete(card.id)} />
                      </div>
                      <div className="text-sm rounded-lg flex flex-shrink-0 py-2 px-4 font-bold text-blue-600 cursor-pointer">
                        <FaDownload onClick={handleDownload} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <input
        type="file"
        accept="image/*"
        className="hidden"
        id="image-upload"
        onChange={handleImageChange}
      />
      <a
        href="#"
        ref={downloadLinkRef}
        style={{ display: "none" }}
        download
      ></a>
    </>
  );
};

export default CardList;
