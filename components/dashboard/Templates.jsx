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
      <div className="grid grid-cols-2 shadow-xl border bg-white dark:bg-[#27272a] dark:border-gray-900 px-6 py-8 rounded-xl md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-3 gap-4 overflow-y-auto max-h-[600px]">
        {templates.map((template) => (
          <div
            key={template._id}
            onClick={() => handleTemplateClick(template)}
            className="flex gap-2 items-center px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 shadow-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <img
              src={`${imgURL}/${template.image}`}
              alt={template.name}
              className="h-6 w-6 md:h-10 md:w-10 lg:h-10 lg:w-10 xl:h-20 xl:w-20 rounded"
            />
            {/* <div className=" md:block hidden text-xs md:text-base lg:text-lg xl:text-xl text-gray-800 dark:text-white">
              {template.name}
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateList;
