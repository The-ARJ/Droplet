import React, { useEffect, useState } from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaGlobe } from "react-icons/fa";
import CardService from "../../../utils/Services/CardServices";
import { imgURL } from "../../../utils/Services/UserServices";
import TemplateService from "../../../utils/Services/TemplateServices";
import swal from "sweetalert2";
import { toast } from "react-toastify";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import DropdownMenu from "./DropDown";
import NoData from "../NoData";
import Pagination from "./Pagination";

const AllCards = () => {
  const [cardsData, setCardsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 4; // Number of cards to display per page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const getAllCards = () => {
    const token = localStorage.getItem("token");
    const limit = pageSize;
    const offset = (currentPage - 1) * pageSize;

    CardService.getAllCards(token, limit, offset)
      .then((res) => {
        const allCards = res.data.data;

        // Create an array of promises to fetch template data for each card
        const templatePromises = allCards.map((card) => {
          return card.template
            ? TemplateService.getTemplateById(card.template, token)
            : Promise.resolve(null);
        });

        // Execute all promises and wait for the results
        Promise.all(templatePromises)
          .then((templateResponses) => {
            // Map the template data to respective cards
            const cardsWithTemplateData = allCards.map((card, index) => {
              return {
                ...card,
                templateData: templateResponses[index]
                  ? templateResponses[index].data
                  : null,
              };
            });

            setCardsData(cardsWithTemplateData);
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
    getAllCards();
  }, [currentPage]);

  const deleteCard = (id) => {
    const token = localStorage.getItem("token");

    swal
      .fire({
        text: "Are you sure you want to Delete?",
        showCancelButton: true,
        cancelButtonColor: "#7e22ce",
        confirmButtonColor: "#ef4444",
        confirmButtonText: "Delete",
        position: "top",
      })
      .then((result) => {
        if (result.isConfirmed) {
          CardService.deleteCardbyId(id, token)
            .then(() => {
              toast.success("Card Deleted Successfully", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              getAllCards();
            })
            .catch((err) => {
              console.error(err);
            });
        }
      });
  };

  return (
    <div>
      {cardsData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {cardsData.slice(startIndex, endIndex).map((card) => (
            <div key={card.id}>
              <div className="flex flex-row-reverse">
                <div className="w-0 md:w-10 z-50 ">
                  <DropdownMenu onDelete={() => deleteCard(card._id)} />
                </div>
                <Card
                  className={`w-full ${
                    card.templateData
                      ? `bg-${card.templateData.data.color}`
                      : "dark:bg-[#27272a] bg-white"
                  }`}
                >
                  <CardHeader floated={false}>
                    {card.image ? (
                      <img
                        className="w-full rounded-t-xl h-64 overflow-hidden object-cover"
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
                      color="blue-gray"
                      className="font-medium mb-2 text-gray-100"
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
                          className="text-purple-500 dark:text-purple-500"
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
          ))}
        </div>
      ) : (
        <NoData />
      )}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalCards={cardsData.length}
      />
    </div>
  );
};

export default AllCards;
