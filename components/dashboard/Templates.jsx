import React, { useState, useEffect } from "react";
import TemplateService from "../../utils/Services/TemplateServices";
import { imgURL } from "../../utils/Services/UserServices";

const TemplateList = ({ handleTemplateClick }) => {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    TemplateService.getAllTemplates(token)
      .then((res) => {
        setTemplates(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="rounded-xl">
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
        Choose a Template
      </h2>
      <div
        className="grid grid-cols-1 shadow-xl border bg-white  dark:dark:bg-[#27272a] dark:border-gray-900 px-6 py-8 rounded-xl sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4"
        style={{ maxHeight: "400px", overflowY: "auto" }}
      >
        {templates.map((template) => (
          <div
            key={template._id}
            onClick={() => handleTemplateClick(template)}
            className="flex gap-2 items-center p-4 rounded-md bg-gray-100 dark:bg-gray-700 shadow-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <img
              src={`${imgURL}/${template.image}`}
              alt={template.name}
              className="h-14 rounded"
            />
            <div className="text-gray-800 dark:text-white">{template.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateList;
