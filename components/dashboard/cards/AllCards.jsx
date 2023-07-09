import React, { useEffect, useState } from "react";
import CardService from "../../../utils/Services/CardServices";
import TemplateService from "../../../utils/Services/TemplateServices";
import NoData from "../NoData";
import Pagination from "./Pagination";
import CardComponent from "./Cards";
import deleteCard from "./DeleteCard";

const AllCards = () => {
  const [cardsData, setCardsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 4; // Number of cards to display per page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const getCards = () => {
    const token = localStorage.getItem("token");
    const limit = pageSize;
    const offset = (currentPage - 1) * pageSize;
    CardService.getAllCards(token, limit, offset)
      .then((res) => {
        const cards = res.data.data;
        const templatePromises = cards.map((card) => {
          if (card.isPublished) {
            return TemplateService.getTemplateById(card.template, token);
          } else {
            return Promise.resolve(null);
          }
        });
        Promise.all(templatePromises)
          .then((templateResponses) => {
            const cardsWithTemplateData = cards.map((card, index) => {
              if (card.isPublished) {
                return {
                  ...card,
                  templateData: templateResponses[index]?.data,
                };
              } else {
                return card;
              }
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
    getCards();
  }, [currentPage]);

  return (
    <>
      {cardsData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cardsData.slice(startIndex, endIndex).map((card) => (
            <CardComponent
              key={card.id}
              card={card}
              deleteCard={() => deleteCard(card._id, getCards)}
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

export default AllCards;
