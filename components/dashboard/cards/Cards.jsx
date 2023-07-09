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
import DropdownMenu from "./DropDown";

const CardComponent = ({ card, deleteCard }) => {
  return (
    <div key={card.id}>
      <div className="flex flex-row-reverse">
        <div className=" w-0 md:w-10 z-50">
          <DropdownMenu onDelete={() => deleteCard(card._id)} />
        </div>
        <Card
          className={`w-full  ${
            card.templateData
              ? `${card.templateData.data.color} `
              : "dark:bg-[#27272a] bg-white"
          }`}
        >
          <CardHeader
            className="flex items-center justify-center dark:bg-[#27272a] bg-white shadow-none"
            floated={false}
          >
            {card.image ? (
              <img
                className={` ${
                  card.templateData
                    ? `${card.templateData.data.borderRadius} ${card.templateData.data.width} ${card.templateData.data.height}`
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
          <CardBody className="text-center dark:text-gray-100">
            <Typography variant="h4" className="mb-2">
              {card.firstName} {card.lastName}
            </Typography>
            <Typography
              className={`"font-medium mb-2 " ${
                card.templateData
                  ? `${card.templateData.data.textcolor}`
                  : "text-purple-500 dark:text-purple-400"
              }`}
              textGradient
            >
              {card.jobTitle} @ {card.company}
            </Typography>
            <Typography
              color="blue"
              className="font-medium text-blue-500 dark:text-blue-400"
              textGradient
            >
              {card.email}
            </Typography>
            <Typography
              color="blue"
              className="font-medium text-blue-500 dark:text-blue-400"
              textGradient
            >
              {card.phone}
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
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
