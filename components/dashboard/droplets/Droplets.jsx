import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGlobe,
  FaLinkedinIn,
} from "react-icons/fa";
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
import DropdownMenu from "./DropDown";

const DropletComponent = ({ droplet, deleteDroplet }) => {
  return (
    <div key={droplet._id} className="">
      <div className="flex flex-row-reverse ">
        <div className="   z-50  ">
          <DropdownMenu
            droplet={droplet}
            onDelete={() => deleteDroplet(droplet._id)}
          />
        </div>
        <Card
          className={`w-full md:w-80   ${
            droplet.templateData
              ? `${droplet.templateData.data.color} `
              : "dark:bg-[#27272a] bg-white"
          }`}
        >
          <CardHeader
            className={`flex items-center shadow-none justify-center ${
              droplet.templateData
                ? `${droplet.templateData.data.color}`
                : "dark:bg-[#27272a] bg-white"
            }shadow-none`}
            floated={false}
          >
            {droplet.image ? (
              <img
                className={` ${
                  droplet.templateData
                    ? `${droplet.templateData.data.borderRadius} ${droplet.templateData.data.width} ${droplet.templateData.data.height} `
                    : "rounded-xl h-64 w-full"
                }  object-cover `}
                src={`${imgURL}/${droplet.image}`}
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
                droplet.templateData
                  ? `${droplet.templateData.data.textcolor} ${droplet.templateData.data.textalignment}`
                  : "text-center dark:text-gray-100 "
              }`}
            >
              {droplet.firstName} {droplet.lastName}
            </Typography>
            <Typography
              variant="h6"
              className={` flex items-center gap-2   ${
                droplet.templateData
                  ? `${droplet.templateData.data.textcolor} ${droplet.templateData.data.textalignment}  `
                  : "text-center dark:text-gray-100  "
              }`}
            >
              <BriefcaseIcon className=" h-4 w-4" />
              {droplet.jobTitle}
            </Typography>
            <Typography
              className={`  flex items-center gap-2
                 ${
                   droplet.templateData
                     ? `${droplet.templateData.data.textcolor} ${droplet.templateData.data.textalignment} `
                     : "text-center dark:text-gray-100 "
                 }`}
            >
              <BuildingOffice2Icon className=" h-4 w-4 " />
              {droplet.company}
            </Typography>
            <Typography
              className={` flex items-center gap-2 ${
                droplet.templateData
                  ? `${droplet.templateData.data.textcolor} ${droplet.templateData.data.textalignment}`
                  : "text-center dark:text-gray-100 "
              }`}
            >
              <EnvelopeIcon className=" h-4 w-4" />
              {droplet.email}
            </Typography>
            <Typography
              className={` flex items-center gap-2 ${
                droplet.templateData
                  ? `${droplet.templateData.data.textcolor} ${droplet.templateData.data.textalignment}`
                  : "text-center dark:text-gray-100 "
              }`}
            >
              <DevicePhoneMobileIcon className=" h-4 w-4" />

              {droplet.phone}
            </Typography>
            <Typography
              className={`  flex items-center gap-2 ${
                droplet.templateData
                  ? `${droplet.templateData.data.textcolor} ${droplet.templateData.data.textalignment}`
                  : "text-center dark:text-gray-100 "
              }`}
            >
              <MapPinIcon className=" h-4 w-4" />

              {droplet.address}
            </Typography>
          </CardBody>
          <CardFooter className={`flex gap-7 pt-2 justify-center`}>
            {droplet.socialMedia.facebook && (
              <Tooltip content="Like">
                <Typography
                  as="a"
                  href={droplet.socialMedia.facebook}
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
            {droplet.socialMedia.twitter && (
              <Tooltip content="Follow">
                <Typography
                  as="a"
                  href={droplet.socialMedia.twitter}
                  target="_blank"
                  variant="lead"
                  className="text-blue-400 dark:text-blue-400"
                  textGradient
                >
                  <FaTwitter />
                </Typography>
              </Tooltip>
            )}
            {droplet.socialMedia.linkedIn && (
              <Tooltip content="Follow">
                <Typography
                  as="a"
                  href={droplet.socialMedia.linkedIn}
                  target="_blank"
                  variant="lead"
                  className="text-blue-500 dark:text-blue-500"
                  textGradient
                >
                  <FaLinkedinIn />
                </Typography>
              </Tooltip>
            )}
            {droplet.socialMedia.instagram && (
              <Tooltip content="Follow">
                <Typography
                  as="a"
                  href={droplet.socialMedia.instagram}
                  target="_blank"
                  variant="lead"
                  className="text-purple-500 dark:text-purple-500"
                  textGradient
                >
                  <FaInstagram />
                </Typography>
              </Tooltip>
            )}
            {droplet.website && (
              <Tooltip content="Web">
                <Typography
                  as="a"
                  href={droplet.website}
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
      </div>
    </div>
  );
};

export default DropletComponent;
