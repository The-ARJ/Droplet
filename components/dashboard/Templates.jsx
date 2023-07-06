import React, { useState, useEffect } from "react";
import TemplateService from "../../utils/Services/TemplateServices";
import { imgURL } from "@/utils/Services/UserServices";

const TemplateList = ({ handleTemplateClick }) => {
  // Added prop here
  const [templates, setTemplates] = useState([]);

  // Fetch templates
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
    <div>
      {templates.map((template) => (
        <div
          key={template._id}
          onClick={() => handleTemplateClick(template)}
          className="flex gap-2 cursor-pointer"
        >
          <img
            src={`${imgURL}${template.image}`}
            alt={template.name}
            className="h-10"
          />
          <div>{template.name}</div>
        </div>
      ))}
    </div>
  );
};

export default TemplateList;
