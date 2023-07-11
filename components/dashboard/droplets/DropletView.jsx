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

const DropletView = ({ dropletData, templateData }) => {
  console.log(dropletData);
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
          {dropletData.image ? (
            <img
              className={` ${
                templateData
                  ? `${templateData.borderRadius} ${templateData.width} ${templateData.height} `
                  : "rounded-xl h-64 w-full"
              }  object-cover `}
              src={`${imgURL}/${dropletData.image}`}
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
            {dropletData.firstName} {dropletData.lastName}
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
            {dropletData.jobTitle}
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
            {dropletData.company}
          </Typography>
          <Typography
            className={` flex items-center gap-2 ${
              templateData
                ? `${templateData.textcolor} ${templateData.textalignment}`
                : "text-center dark:text-gray-100 "
            }`}
          >
            <EnvelopeIcon className=" h-4 w-4" />
            {dropletData.email}
          </Typography>
          <Typography
            className={` flex items-center gap-2 ${
              templateData
                ? `${templateData.textcolor} ${templateData.textalignment}`
                : "text-center dark:text-gray-100 "
            }`}
          >
            <DevicePhoneMobileIcon className=" h-4 w-4" />

            {dropletData.phone}
          </Typography>
          <Typography
            className={`  flex items-center gap-2 ${
              templateData
                ? `${templateData.textcolor} ${templateData.textalignment}`
                : "text-center dark:text-gray-100 "
            }`}
          >
            <MapPinIcon className=" h-4 w-4" />

            {dropletData.address}
          </Typography>
        </CardBody>
        <CardFooter className={`flex gap-7 pt-2 justify-center`}>
          {dropletData.socialMedia.facebook && (
            <Tooltip content="Like">
              <Typography
                as="a"
                href={dropletData.socialMedia.facebook}
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
          {dropletData.socialMedia.twitter && (
            <Tooltip content="Follow">
              <Typography
                as="a"
                href={dropletData.socialMedia.twitter}
                target="_blank"
                variant="lead"
                className="text-blue-400 dark:text-blue-400"
                textGradient
              >
                <FaTwitter />
              </Typography>
            </Tooltip>
          )}
          {dropletData.socialMedia.linkedIn && (
            <Tooltip content="Follow">
              <Typography
                as="a"
                href={dropletData.socialMedia.linkedIn}
                target="_blank"
                variant="lead"
                className="text-blue-500 dark:text-blue-500"
                textGradient
              >
                <FaLinkedinIn />
              </Typography>
            </Tooltip>
          )}
          {dropletData.socialMedia.instagram && (
            <Tooltip content="Follow">
              <Typography
                as="a"
                href={dropletData.socialMedia.instagram}
                target="_blank"
                variant="lead"
                className="text-purple-500 dark:text-purple-500"
                textGradient
              >
                <FaInstagram />
              </Typography>
            </Tooltip>
          )}
          {dropletData.website && (
            <Tooltip content="Web">
              <Typography
                as="a"
                href={dropletData.website}
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

export default DropletView;
