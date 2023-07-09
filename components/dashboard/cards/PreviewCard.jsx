import React, { useEffect, useState } from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaGlobe } from "react-icons/fa";
import CardService from "../../../utils/Services/CardServices";
import { imgURL } from "../../../utils/Services/UserServices";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { toast } from "react-toastify";

const PreviewCard = ({ handleTemplateClick, selectedTemplate, latestCard }) => {
  const handlePublishClick = () => {
    if (!selectedTemplate) {
      toast.error("Please select a template.", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
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
          toast.success("Card template published successfully", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        })
        .catch((err) => {
          toast.error(
            "Error publishing card template:",
            {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: true,
              closeOnClick: false,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
            },
            err
          );
        });
    }
  };
  return (
    <>
      {latestCard && (
        <div className="">
          <Card
            className={`w-full ${
              selectedTemplate
                ? `${selectedTemplate.color}`
                : "dark:bg-[#27272a] bg-white"
            }`}
          >
            <CardHeader
              floated={false}
              className={`flex items-center shadow-none justify-center ${
                selectedTemplate
                  ? `${selectedTemplate.color}`
                  : "dark:bg-[#27272a] bg-white"
              }shadow-none`}
            >
              {latestCard.image ? (
                <img
                  className={` ${
                    selectedTemplate
                      ? `${selectedTemplate.borderRadius} ${selectedTemplate.width} ${selectedTemplate.height}`
                      : "rounded-xl h-64 w-full"
                  }  object-cover `}
                  src={`${imgURL}/${latestCard.image}`}
                  alt="participant"
                />
              ) : (
                <img
                  className="w-full rounded-t-xl h-auto overflow-hidden object-contain"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                  alt="participant"
                />
              )}
            </CardHeader>
            <CardBody className="text-center dark:text-gray-100">
              <Typography variant="h4" className="mb-2">
                {latestCard.firstName} {latestCard.lastName}
              </Typography>
              <Typography
                color="blue"
                className={`"font-medium mb-2 " ${
                  selectedTemplate
                    ? `${selectedTemplate.textcolor}`
                    : "text-purple-500 dark:text-purple-400"
                }`}
                textGradient
              >
                {latestCard.jobTitle} @ {latestCard.company}
              </Typography>
              <Typography
                color="blue"
                className="font-medium text-blue-500 dark:text-blue-400"
                textGradient
              >
                {latestCard.email}
              </Typography>
              <Typography
                color="blue"
                className="font-medium text-blue-500 dark:text-blue-400"
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
                    className="text-blue-500 dark:text-blue-400"
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
                    className="text-blue-400 dark:text-blue-400"
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
                    className="text-purple-500 dark:text-purple-500"
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
                    className="text-purple-500 dark:text-purple-500"
                    textGradient
                  >
                    <FaGlobe />
                  </Typography>
                </Tooltip>
              )}
            </CardFooter>
          </Card>
          <button
            className="bg-[#27272a] text-white  dark:text-gray-700 dark:bg-gray-100 hover:bg-gray-600 dark:hover:bg-gray-300 mt-10 font-bold py-2 px-4 rounded-md shadow-md transition-colors transition-delay-200 w-full flex items-center justify-center"
            onClick={handlePublishClick}
          >
            Publish Card
          </button>
        </div>
      )}
    </>
  );
};

export default PreviewCard;
