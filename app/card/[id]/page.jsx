"use client";
import { BiDroplet } from "react-icons/bi";
import { useState, useEffect } from "react";
import TemplateService from "../../../utils/Services/TemplateServices";
import CardService from "../../../utils/Services/CardServices";
import CardView from "@/components/dashboard/cards/CardView";
import styles from "../../../app/loading.module.css";
import Link from "next/link";
import { Tooltip, Button } from "@material-tailwind/react";
const ShareCard = ({ params }) => {
  const [cardData, setCardData] = useState(null);
  const [templateData, setTemplateData] = useState(null);
  const [bgColor, setBgColor] = useState("bg-red-200");
  const [brandingVisible, setBrandingVisible] = useState(false);

  const colors = ["bg-white", "bg-red-200", "bg-blue-200", "bg-green-200"];
  const [dropletColor, setDropletColor] = useState("text-black"); // Set the initial droplet color to black
  const [buttonBorderColor, setButtonBorderColor] = useState("border-gray-200"); // Set the initial button border color

  const changeBackgroundColor = () => {
    const currentIndex = colors.indexOf(bgColor);
    const nextIndex = (currentIndex + 1) % colors.length;
    setBgColor(colors[nextIndex]);

    // Change the droplet color based on the background color
    if (colors[nextIndex] === "bg-white") {
      setDropletColor("text-gray-400");
      setButtonBorderColor("border-gray-400");
    } else {
      setDropletColor("text-white");
      setButtonBorderColor("border-gray-200");
    }
  };

  const generateRandomPosition = () => {
    const positionX = Math.random() * (window.innerWidth - 50);
    const positionY = Math.random() * (window.innerHeight - 50);
    return { x: positionX, y: positionY };
  };

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const response = await CardService.getCardById(params.id);
        setCardData(response.data.data);
        console.log("extracting template id", response.data.data.template);
        const templateId = response.data.data.template;
        const templateResponse = await TemplateService.getTemplateById(
          templateId
        );
        setTemplateData(templateResponse.data.data);
      } catch (error) {
        console.error("Error fetching card data:", error);
      }
    };

    fetchCardData();
  }, [params.id]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Show the branding elements after a delay
    const timer = setTimeout(() => {
      setBrandingVisible(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!cardData) {
    return <div className={styles.loader}></div>;
  }

  return (
    <div
      className={`flex justify-center items-center fixed inset-0 ${bgColor} transition-all duration-500`}
    >
      {brandingVisible && (
        <>
          {Array.from({ length: 20 }, (_, index) => (
            <div
              key={index}
              className="fixed transition-all duration-500"
              style={{
                left: generateRandomPosition().x,
                top: generateRandomPosition().y,
              }}
            >
              <div className="flex items-center space-x-2 cursor-pointer">
                <Link href="/">
                  <Tooltip
                    className={` ${dropletColor}`} // Set the droplet color dynamically
                    content="Create your Droplet"
                  >
                    <Button className="bg-transparent hover:scale-125 shadow-none">
                      <BiDroplet
                        size={24}
                        className={`hover:${dropletColor} ${dropletColor}`} // Set the droplet color dynamically
                      />
                    </Button>
                  </Tooltip>
                </Link>
              </div>
            </div>
          ))}
        </>
      )}

      <button
        className={`fixed top-4 right-4 w-12 h-12 rounded-full bg-white border ${buttonBorderColor} flex items-center justify-center text-gray-700 transition-colors duration-300 focus:outline-none`}
        onClick={changeBackgroundColor}
      >
        <div
          className={`w-8 h-8 rounded-full ${bgColor} border  ${buttonBorderColor}`}
        ></div>
      </button>
      <CardView cardData={cardData} templateData={templateData} />
    </div>
  );
};

export default ShareCard;
