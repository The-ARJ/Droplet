import React, { useEffect, useState } from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaGlobe } from "react-icons/fa";
import CardService from "../../utils/Services/CardServices";
import { imgURL } from "../../utils/Services/UserServices";
import TemplateService from "../../utils/Services/TemplateServices";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
const PublishedCards = () => {
  const [cardsData, setCardsData] = useState([]);

  const getPublishedCards = () => {
    const token = localStorage.getItem("token");
    CardService.getAllCards(token)
      .then((res) => {
        const publishedCards = res.data.data.filter(
          (card) => card.isPublished === true
        );

        // Create an array of promises to fetch template data for each card
        const templatePromises = publishedCards.map((card) => {
          return TemplateService.getTemplateById(card.template, token);
        });

        // Execute all promises and wait for the results
        Promise.all(templatePromises)
          .then((templateResponses) => {
            // Map the template data to respective cards
            const cardsWithTemplateData = publishedCards.map((card, index) => {
              return {
                ...card,
                templateData: templateResponses[index].data,
              };
            });

            setCardsData(cardsWithTemplateData);
            console.log(cardsWithTemplateData);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPublishedCards();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cardsData.map((card) => (
        <>
          <Card
            key={card.id}
            className={`rounded-3xl w-full md:w-96 ${
              card.templateData
                ? `bg-[${card.templateData.data.color}]`
                : "bg-[#fffff]"
            }`}
          >
            <CardHeader floated={false} className="h-80">
              {card.image ? (
                <img
                  className="w-full rounded-t-xl  overflow-hidden object-cover"
                  src={`${imgURL}/${card.image}`}
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
                {card.firstName} {card.lastName}
              </Typography>
              <Typography
                color="blue"
                className="font-medium mb-2 text-blue-500"
                textGradient
              >
                {card.jobTitle} @ {card.company}
              </Typography>
              <Typography
                color="blue"
                className="font-medium text-blue-500"
                textGradient
              >
                {card.email}
              </Typography>
              <Typography
                color="blue"
                className="font-medium text-blue-500"
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
                    className=" text-blue-500"
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
                    className=" text-blue-400"
                    textGradient
                  >
                    <FaTwitter />
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
                    className=" text-purple-500"
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
                    className=" text-purple-500"
                    textGradient
                  >
                    <FaGlobe />
                  </Typography>
                </Tooltip>
              )}
            </CardFooter>
          </Card>
        </>
      ))}
    </div>
  );
};

export default PublishedCards;
