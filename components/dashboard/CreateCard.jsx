import React, { useState } from "react";
import PreviewCard from "./PreviewCard";
import CardForm from "./CardForm";
import TemplateList from "./Templates";

const CreateCard = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleTemplateClick = (template) => {
    console.log("Selected Template:", template);
    setSelectedTemplate(template);
  };

  return (
    <div className="flex flex-wrap justify-center items-center w-full px-0 md:px-8">
      <div className="w-full">
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="col-span-1">
            <CardForm />
          </div>
          <div className="col-span-1">
            <PreviewCard
              handleTemplateClick={handleTemplateClick}
              selectedTemplate={selectedTemplate}
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
