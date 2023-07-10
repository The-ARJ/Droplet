import React, { useState, useEffect } from "react";
import PreviewDroplet from "./PreviewDroplet";
import DropletForm from "./DropletForm";
import TemplateList from "../Templates";
import DropletService from "../../../utils/Services/DropletServices";

const CreateDroplet = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleTemplateClick = (template) => {
    console.log("Selected Template:", template);
    setSelectedTemplate(template);
  };
  const [latestDroplet, setLatestDroplet] = useState(null);

  useEffect(() => {
    getLatestDroplet();
  }, []);

  const getLatestDroplet = () => {
    const token = localStorage.getItem("token");
    DropletService.getAllDroplets(token)
      .then((res) => {
        const droplets = res.data.data;
        if (droplets.length > 0) {
          const latestDroplet = droplets[droplets.length - 1];
          setLatestDroplet(latestDroplet);
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
            <DropletForm updateDropletData={setLatestDroplet} />
          </div>
          <div className="col-span-1">
            <PreviewDroplet
              handleTemplateClick={handleTemplateClick}
              selectedTemplate={selectedTemplate}
              latestDroplet={latestDroplet}
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

export default CreateDroplet;
