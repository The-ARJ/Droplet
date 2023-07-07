import React, { useEffect, useState } from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaTwitter, FaFacebook, FaInstagram, FaGlobe } from "react-icons/fa";
import CardService from "../../utils/Services/CardServices";
import { imgURL } from "../../utils/Services/UserServices";
import TemplateList from "./Templates";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

const PreviewCard = () => {
  const [latestCard, setLatestCard] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const getLatestCard = () => {
    const token = localStorage.getItem("token");
    CardService.getAllCards(token)
      .then((res) => {
        const cards = res.data.data;
        if (cards.length > 0) {
          const latestCard = cards[cards.length - 1];
          setLatestCard(latestCard);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getLatestCard();
  }, []);

  const handleTemplateClick = (template) => {
    console.log("Selected Template:", template);
    setSelectedTemplate(template);
  };

  const handlePublishClick = () => {
    if (!selectedTemplate) {
      alert("Please select a template.");
      return;
    }

    if (latestCard) {
      const token = localStorage.getItem("token");
      const requestBody = {
        template: selectedTemplate._id,
        isPublished: true,
      };

      CardService.updateCard(latestCard._id, requestBody, token)
        .then((res) => {
          alert("Card template published successfully:", res.data);
        })
        .catch((err) => {
          console.error("Error publishing card template:", err);
        });
    }
  };
  return (
    <>
      <TemplateList handleTemplateClick={handleTemplateClick} />{" "}
      {/* Passed the function as prop here */}
      {latestCard && (
        <div className="w-full md:w-96">
          <Card
            className={`rounded-3xl ${
              selectedTemplate
                ? `bg-[${selectedTemplate.color}]`
                : "bg-[#fffff]"
            }`}
          >
            <CardHeader floated={false} className="h-80">
              {latestCard.image ? (
                <img
                  className="w-full rounded-t-xl  overflow-hidden object-cover"
                  src={`${imgURL}/${latestCard.image}`}
                  alt="participant"
                />
              ) : (
                <img
                  className="w-full rounded-t-xl h-auto overflow-hidden object-cover"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                  alt="participant"
                />
              )}
              {/* <img src="/img/team-3.jpg" alt="profile-picture" /> */}
            </CardHeader>
            <CardBody className="text-center">
              <Typography
                variant="h4"
                color="blue-gray"
                className="mb-2 text-black "
              >
                {latestCard.firstName} {latestCard.lastName}
              </Typography>
              <Typography
                color="blue"
                className="font-medium mb-2 text-blue-500"
                textGradient
              >
                {latestCard.jobTitle} @ {latestCard.company}
              </Typography>
              <Typography
                color="blue"
                className="font-medium text-blue-500"
                textGradient
              >
                {latestCard.email}
              </Typography>
              <Typography
                color="blue"
                className="font-medium text-blue-500"
                textGradient
              >
                {latestCard.phone}
              </Typography>
            </CardBody>
            <CardFooter className="flex justify-center gap-7 pt-2">
              {latestCard.socialMedia.facebook && (
                <Tooltip content="Like">
                  <Typography
                    as="a"
                    href={latestCard.socialMedia.facebook}
                    target="_blank"
                    variant="lead"
                    color="blue"
                    textGradient
                    className=" text-blue-500"
                  >
                    <FaFacebook />
                  </Typography>
                </Tooltip>
              )}
              {latestCard.socialMedia.twitter && (
                <Tooltip content="Follow">
                  <Typography
                    as="a"
                    href={latestCard.socialMedia.twitter}
                    target="_blank"
                    variant="lead"
                    className=" text-blue-400"
                    textGradient
                  >
                    <FaTwitter />
                  </Typography>
                </Tooltip>
              )}
              {latestCard.socialMedia.instagram && (
                <Tooltip content="Follow">
                  <Typography
                    as="a"
                    href={latestCard.socialMedia.instagram}
                    target="_blank"
                    variant="lead"
                    className=" text-purple-500"
                    textGradient
                  >
                    <FaInstagram />
                  </Typography>
                </Tooltip>
              )}
              {latestCard.website && (
                <Tooltip content="Web">
                  <Typography
                    as="a"
                    href={latestCard.website}
                    target="_blank"
                    variant="lead"
                    className=" text-purple-500"
                    textGradient
                  >
                    <FaGlobe />
                  </Typography>
                </Tooltip>
              )}
            </CardFooter>
          </Card>
          <button
            className="bg-blue-500 px-2 py-2 rounded-md"
            onClick={handlePublishClick} // Added onClick event handler
          >
            Publish
          </button>
        </div>
      )}
    </>
  );
};

export default PreviewCard;
