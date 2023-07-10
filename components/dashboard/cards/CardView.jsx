import React from "react";
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
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGlobe,
  FaLinkedinIn,
} from "react-icons/fa";
import { imgURL } from "../../../utils/Services/UserServices";

const CardView = ({ cardData, templateData }) => {
    console.log(cardData)
  return (
    <>
      <Card
        className={` w-80   ${
          templateData ? `${templateData.color} ` : "dark:bg-[#27272a] bg-white"
        }`}
      >
        <CardHeader
          className={`flex items-center shadow-none justify-center ${
            templateData
              ? `${templateData.color}`
              : "dark:bg-[#27272a] bg-white"
          }shadow-none`}
          floated={false}
        >
          {cardData.image ? (
            <img
              className={` ${
                templateData
                  ? `${templateData.borderRadius} ${templateData.width} ${templateData.height} `
                  : "rounded-xl h-64 w-full"
              }  object-cover `}
              src={`${imgURL}/${cardData.image}`}
              alt="participant"
            />
          ) : (
            <img
              className="w-full rounded-t-xl h-64 overflow-hidden object-cover"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
              alt="participant"
            />
          )}
        </CardHeader>
        <CardBody className={`space-y-2`}>
          <Typography
            variant="h4"
            className={`mb-2 flex items-center gap-2  ${
              templateData
                ? `${templateData.textcolor} ${templateData.textalignment}`
                : "text-center dark:text-gray-100 "
            }`}
          >
            {cardData.firstName} {cardData.lastName}
          </Typography>
          <Typography
            variant="h6"
            className={` flex items-center gap-2   ${
              templateData
                ? `${templateData.textcolor} ${templateData.textalignment}  `
                : "text-center dark:text-gray-100  "
            }`}
          >
            <BriefcaseIcon className=" h-4 w-4" />
            {cardData.jobTitle}
          </Typography>
          <Typography
            className={`  flex items-center gap-2
                 ${
                   templateData
                     ? `${templateData.textcolor} ${templateData.textalignment} `
                     : "text-center dark:text-gray-100 "
                 }`}
          >
            <BuildingOffice2Icon className=" h-4 w-4 " />
            {cardData.company}
          </Typography>
          <Typography
            className={` flex items-center gap-2 ${
              templateData
                ? `${templateData.textcolor} ${templateData.textalignment}`
                : "text-center dark:text-gray-100 "
            }`}
          >
            <EnvelopeIcon className=" h-4 w-4" />
            {cardData.email}
          </Typography>
          <Typography
            className={` flex items-center gap-2 ${
              templateData
                ? `${templateData.textcolor} ${templateData.textalignment}`
                : "text-center dark:text-gray-100 "
            }`}
          >
            <DevicePhoneMobileIcon className=" h-4 w-4" />

            {cardData.phone}
          </Typography>
          <Typography
            className={`  flex items-center gap-2 ${
              templateData
                ? `${templateData.textcolor} ${templateData.textalignment}`
                : "text-center dark:text-gray-100 "
            }`}
          >
            <MapPinIcon className=" h-4 w-4" />

            {cardData.address}
          </Typography>
        </CardBody>
        <CardFooter className={`flex gap-7 pt-2 justify-center`}>
          {cardData.socialMedia.facebook && (
            <Tooltip content="Like">
              <Typography
                as="a"
                href={cardData.socialMedia.facebook}
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
          {cardData.socialMedia.twitter && (
            <Tooltip content="Follow">
              <Typography
                as="a"
                href={cardData.socialMedia.twitter}
                target="_blank"
                variant="lead"
                className="text-blue-400 dark:text-blue-400"
                textGradient
              >
                <FaTwitter />
              </Typography>
            </Tooltip>
          )}
          {cardData.socialMedia.linkedIn && (
            <Tooltip content="Follow">
              <Typography
                as="a"
                href={cardData.socialMedia.linkedIn}
                target="_blank"
                variant="lead"
                className="text-blue-500 dark:text-blue-500"
                textGradient
              >
                <FaLinkedinIn />
              </Typography>
            </Tooltip>
          )}
          {cardData.socialMedia.instagram && (
            <Tooltip content="Follow">
              <Typography
                as="a"
                href={cardData.socialMedia.instagram}
                target="_blank"
                variant="lead"
                className="text-purple-500 dark:text-purple-500"
                textGradient
              >
                <FaInstagram />
              </Typography>
            </Tooltip>
          )}
          {cardData.website && (
            <Tooltip content="Web">
              <Typography
                as="a"
                href={cardData.website}
                target="_blank"
                variant="lead"
                className="text-indigo-500 dark:text-indigo-500"
                textGradient
              >
                <FaGlobe />
              </Typography>
            </Tooltip>
          )}
        </CardFooter>
      </Card>
    </>
  );
};

export default CardView;
