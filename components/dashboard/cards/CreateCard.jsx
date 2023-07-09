import React, { useState, useEffect } from "react";
import PreviewCard from "./PreviewCard";
import CardForm from "./CardForm";
import TemplateList from "../Templates";
import CardService from "../../../utils/Services/CardServices";

const CreateCard = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleTemplateClick = (template) => {
    console.log("Selected Template:", template);
    setSelectedTemplate(template);
  };
  const [latestCard, setLatestCard] = useState(null);

  useEffect(() => {
    getLatestCard();
  }, []);

  const getLatestCard = () => {
    const token = localStorage.getItem("token");
    CardService.getAllCards(token)
      .then((res) => {
        const cards = res.data.data;
        if (cards.length > 0) {
          const latestCard = cards[cards.length - 1];
          setLatestCard(latestCard);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-wrap justify-center items-center w-full px-0 md:px-8">
      <div className="w-full">
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="col-span-1">
            <CardForm updateCardData={setLatestCard} />
          </div>
          <div className="col-span-1">
            <PreviewCard
              handleTemplateClick={handleTemplateClick}
              selectedTemplate={selectedTemplate}
              latestCard={latestCard}
            />
          </div>
          <div className="col-span-1">
            <TemplateList handleTemplateClick={handleTemplateClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCard;
