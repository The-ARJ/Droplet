import React, { useEffect, useState } from "react";
import CardService from "../../../utils/Services/CardServices";
import TemplateService from "../../../utils/Services/TemplateServices";
import NoData from "../NoData";
import Pagination from "./Pagination";
import CardComponent from "./Cards";
import deleteCard from "./DeleteCard";

const PublishedCards = () => {
  const [cardsData, setCardsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 4; // Number of cards to display per page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const getPublishedCards = () => {
    const token = localStorage.getItem("token");
    const limit = pageSize;
    const offset = (currentPage - 1) * pageSize;
    CardService.getAllCards(token, limit, offset)
      .then((res) => {
        const publishedCards = res.data.data.filter(
          (card) => card.isPublished === true
        );
        const templatePromises = publishedCards.map((card) => {
          return TemplateService.getTemplateById(card.template, token);
        });
        Promise.all(templatePromises)
          .then((templateResponses) => {
            const cardsWithTemplateData = publishedCards.map((card, index) => {
              return {
                ...card,
                templateData: templateResponses[index].data,
              };
            });

            console.log(cardsWithTemplateData[0].templateData.data.color);
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
    getPublishedCards();
  }, [currentPage]);

  return (
    <>
      {cardsData.length > 0 ? (
        <div
          key={cardsData._id}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {cardsData.slice(startIndex, endIndex).map((card) => (
            <CardComponent
              key={card.id}
              card={card}
              deleteCard={() => deleteCard(card._id, getPublishedCards)}
            />
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
    </>
  );
};

export default PublishedCards;
