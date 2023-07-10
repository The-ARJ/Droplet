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

const CardComponent = ({ card, deleteCard }) => {
  return (
    <div key={card.id} className="">
      <div className="flex flex-row-reverse ">
        <div className=" w-0   z-50  ">
          <DropdownMenu card={card} onDelete={() => deleteCard(card._id)} />
        </div>
        <Card
          className={`w-full  md:w-auto   ${
            card.templateData
              ? `${card.templateData.data.color} `
              : "dark:bg-[#27272a] bg-white"
          }`}
        >
          <CardHeader
            className={`flex items-center shadow-none justify-center ${
              card.templateData
                ? `${card.templateData.data.color}`
                : "dark:bg-[#27272a] bg-white"
            }shadow-none`}
            floated={false}
          >
            {card.image ? (
              <img
                className={` ${
                  card.templateData
                    ? `${card.templateData.data.borderRadius} ${card.templateData.data.width} ${card.templateData.data.height} `
                    : "rounded-xl h-64 w-full"
                }  object-cover `}
                src={`${imgURL}/${card.image}`}
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
                card.templateData
                  ? `${card.templateData.data.textcolor} ${card.templateData.data.textalignment}`
                  : "text-center dark:text-gray-100 "
              }`}
            >
              {card.firstName} {card.lastName}
            </Typography>
            <Typography
              variant="h6"
              className={` flex items-center gap-2   ${
                card.templateData
                  ? `${card.templateData.data.textcolor} ${card.templateData.data.textalignment}  `
                  : "text-center dark:text-gray-100  "
              }`}
            >
              <BriefcaseIcon className=" h-4 w-4" />
              {card.jobTitle}
            </Typography>
            <Typography
              className={`  flex items-center gap-2
                 ${
                   card.templateData
                     ? `${card.templateData.data.textcolor} ${card.templateData.data.textalignment} `
                     : "text-center dark:text-gray-100 "
                 }`}
            >
              <BuildingOffice2Icon className=" h-4 w-4 " />
              {card.company}
            </Typography>
            <Typography
              className={` flex items-center gap-2 ${
                card.templateData
                  ? `${card.templateData.data.textcolor} ${card.templateData.data.textalignment}`
                  : "text-center dark:text-gray-100 "
              }`}
            >
              <EnvelopeIcon className=" h-4 w-4" />
              {card.email}
            </Typography>
            <Typography
              className={` flex items-center gap-2 ${
                card.templateData
                  ? `${card.templateData.data.textcolor} ${card.templateData.data.textalignment}`
                  : "text-center dark:text-gray-100 "
              }`}
            >
              <DevicePhoneMobileIcon className=" h-4 w-4" />

              {card.phone}
            </Typography>
            <Typography
              className={`  flex items-center gap-2 ${
                card.templateData
                  ? `${card.templateData.data.textcolor} ${card.templateData.data.textalignment}`
                  : "text-center dark:text-gray-100 "
              }`}
            >
              <MapPinIcon className=" h-4 w-4" />

              {card.address}
            </Typography>
          </CardBody>
          <CardFooter className={`flex gap-7 pt-2 justify-center`}>
            {card.socialMedia.facebook && (
              <Tooltip content="Like">
                <Typography
                  as="a"
                  href={card.socialMedia.facebook}
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
            {card.socialMedia.twitter && (
              <Tooltip content="Follow">
                <Typography
                  as="a"
                  href={card.socialMedia.twitter}
                  target="_blank"
                  variant="lead"
                  className="text-blue-400 dark:text-blue-400"
                  textGradient
                >
                  <FaTwitter />
                </Typography>
              </Tooltip>
            )}
            {card.socialMedia.linkedIn && (
              <Tooltip content="Follow">
                <Typography
                  as="a"
                  href={card.socialMedia.linkedIn}
                  target="_blank"
                  variant="lead"
                  className="text-blue-500 dark:text-blue-500"
                  textGradient
                >
                  <FaLinkedinIn />
                </Typography>
              </Tooltip>
            )}
            {card.socialMedia.instagram && (
              <Tooltip content="Follow">
                <Typography
                  as="a"
                  href={card.socialMedia.instagram}
                  target="_blank"
                  variant="lead"
                  className="text-purple-500 dark:text-purple-500"
                  textGradient
                >
                  <FaInstagram />
                </Typography>
              </Tooltip>
            )}
            {card.website && (
              <Tooltip content="Web">
                <Typography
                  as="a"
                  href={card.website}
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

export default CardComponent;
