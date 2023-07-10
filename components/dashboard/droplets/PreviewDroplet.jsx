import React, { useEffect, useState } from "react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGlobe,
  FaLinkedinIn,
} from "react-icons/fa";
import DropletService from "../../../utils/Services/DropletServices";
import { imgURL } from "../../../utils/Services/UserServices";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import {
  EnvelopeIcon,
  BriefcaseIcon,
  BuildingOffice2Icon,
  DevicePhoneMobileIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { toast } from "react-toastify";

const DropletCard = ({ handleTemplateClick, selectedTemplate, latestDroplet }) => {
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

    if (latestDroplet) {
      const token = localStorage.getItem("token");
      const requestBody = {
        template: selectedTemplate._id,
        isPublished: true,
      };

      DropletService.updateDroplet(latestDroplet._id, requestBody, token)
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
            "Error publishing droplet template:",
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
      {latestDroplet && (
        <div className=" flex justify-center flex-col items-center">
          <Card
            className={` w-full  md:w-60 lg-72 xl:w-80  ${
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
              {latestDroplet.image ? (
                <img
                  className={` ${
                    selectedTemplate
                      ? `${selectedTemplate.borderRadius} ${selectedTemplate.width} ${selectedTemplate.height}`
                      : "rounded-xl h-64 w-full"
                  }  object-cover `}
                  src={`${imgURL}/${latestDroplet.image}`}
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
            <CardBody className={`space-y-2`}>
              <Typography
                variant="h4"
                className={`mb-2 flex items-center gap-2  ${
                  selectedTemplate
                    ? `${selectedTemplate.textcolor} ${selectedTemplate.textalignment}`
                    : "text-center dark:text-gray-100 "
                }`}
              >
                {latestDroplet.firstName} {latestDroplet.lastName}
              </Typography>
              <Typography
                variant="h6"
                className={` flex items-center gap-2   ${
                  selectedTemplate
                    ? `${selectedTemplate.textcolor} ${selectedTemplate.textalignment}  `
                    : "text-center dark:text-gray-100  "
                }`}
              >
                <BriefcaseIcon className=" h-4 w-4" />
                {latestDroplet.jobTitle}
              </Typography>
              <Typography
                className={`  flex items-center gap-2
                 ${
                   selectedTemplate
                     ? `${selectedTemplate.textcolor} ${selectedTemplate.textalignment} `
                     : "text-center dark:text-gray-100 "
                 }`}
              >
                <BuildingOffice2Icon className=" h-4 w-4 " />
                {latestDroplet.company}
              </Typography>
              <Typography
                className={` flex items-center gap-2 ${
                  selectedTemplate
                    ? `${selectedTemplate.textcolor} ${selectedTemplate.textalignment}`
                    : "text-center dark:text-gray-100 "
                }`}
              >
                <EnvelopeIcon className=" h-4 w-4" />
                {latestDroplet.email}
              </Typography>
              <Typography
                className={` flex items-center gap-2 ${
                  selectedTemplate
                    ? `${selectedTemplate.textcolor} ${selectedTemplate.textalignment}`
                    : "text-center dark:text-gray-100 "
                }`}
              >
                <DevicePhoneMobileIcon className=" h-4 w-4" />

                {latestDroplet.phone}
              </Typography>
              <Typography
                className={`  flex items-center gap-2 ${
                  selectedTemplate
                    ? `${selectedTemplate.textcolor} ${selectedTemplate.textalignment}`
                    : "text-center dark:text-gray-100 "
                }`}
              >
                <MapPinIcon className=" h-4 w-4" />

                {latestDroplet.address}
              </Typography>
            </CardBody>
            <CardFooter className={`flex gap-7 pt-2  justify-center `}>
              {latestDroplet.socialMedia.facebook && (
                <Tooltip content="Like">
                  <Typography
                    as="a"
                    href={latestDroplet.socialMedia.facebook}
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
              {latestDroplet.socialMedia.twitter && (
                <Tooltip content="Follow">
                  <Typography
                    as="a"
                    href={latestDroplet.socialMedia.twitter}
                    target="_blank"
                    variant="lead"
                    className="text-blue-400 dark:text-blue-400"
                    textGradient
                  >
                    <FaTwitter />
                  </Typography>
                </Tooltip>
              )}
              {latestDroplet.socialMedia.linkedIn && (
                <Tooltip content="Follow">
                  <Typography
                    as="a"
                    href={latestDroplet.socialMedia.linkedIn}
                    target="_blank"
                    variant="lead"
                    className="text-blue-500 dark:text-blue-500"
                    textGradient
                  >
                    <FaLinkedinIn />
                  </Typography>
                </Tooltip>
              )}
              {latestDroplet.socialMedia.instagram && (
                <Tooltip content="Follow">
                  <Typography
                    as="a"
                    href={latestDroplet.socialMedia.instagram}
                    target="_blank"
                    variant="lead"
                    className="text-purple-500 dark:text-purple-500"
                    textGradient
                  >
                    <FaInstagram />
                  </Typography>
                </Tooltip>
              )}
              {latestDroplet.website && (
                <Tooltip content="Web">
                  <Typography
                    as="a"
                    href={latestDroplet.website}
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

export default DropletCard;
