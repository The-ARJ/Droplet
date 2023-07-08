"use client";
import React, { useState } from "react";
import { ChromePicker } from "react-color";
import TemplateService from "../../utils/Services/TemplateServices";
import DashboardLayout from "@/components/dashboard/Dashboard";
import { toast } from "react-toastify";
import ProtectedRoute from "@/utils/Context/ProtectedRoute";
const Template = () => {
  const [templateData, setTemplateData] = useState({
    name: "",
    layout: [],
    color: "#000000",
    image: null,
  });

  const handleChange = (e) => {
    setTemplateData({ ...templateData, [e.target.name]: e.target.value });
  };

  const handleColorChange = (color) => {
    setTemplateData({
      ...templateData,
      color: color.hex,
    });
  };

  const handleImageChange = (e) => {
    setTemplateData({ ...templateData, image: e.target.files[0] });
  };

  const handleLayoutChange = (e, index) => {
    const updatedLayout = [...templateData.layout];
    updatedLayout[index] = e.target.value;
    setTemplateData({ ...templateData, layout: updatedLayout });
  };

  const handleAddLayoutField = () => {
    const updatedLayout = [...templateData.layout, ""];
    setTemplateData({ ...templateData, layout: updatedLayout });
  };

  const handleRemoveLayoutField = (index) => {
    const updatedLayout = [...templateData.layout];
    updatedLayout.splice(index, 1);
    setTemplateData({ ...templateData, layout: updatedLayout });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", templateData.name);
    formData.append("layout", JSON.stringify(templateData.layout));
    formData.append("color", templateData.color);
    formData.append("templateImage", templateData.image);

    try {
      const response = await TemplateService.createTemplate(formData);
      toast.success("Template Created Successfully", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTemplateData({
        name: "",
        layout: [],
        color: "#000000",
        image: null,
      });
    } catch (err) {
      alert("Error creating template: " + err);
    }
  };

  return (
    <DashboardLayout>
      <div className="my-6 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#27272a]  py-10 border dark:border-gray-700 shadow-sm rounded-md">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Create Template
        </h2>
        <form onSubmit={handleSubmit} className="mt-5 space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={templateData.name}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-[#27272a] dark:text-white"
            />
          </div>
          <div>
            <label
              htmlFor="layout"
              className="block text-sm font-medium text-gray-700 dark:text-white"
            >
              Layout
            </label>
            {templateData.layout.map((field, index) => (
              <div
                key={index}
                className="mt-1 flex gap-2 justify-between items-center"
              >
                <input
                  type="text"
                  value={field}
                  onChange={(e) => handleLayoutChange(e, index)}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-[#27272a] dark:text-white"
                />
                <button
                  type="button"
                  className="px-3 py-1 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                  onClick={() => handleRemoveLayoutField(index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              className="mt-2 px-3 py-1 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              type="button"
              onClick={handleAddLayoutField}
            >
              Add Field
            </button>
          </div>
          <div>
            <label
              htmlFor="color"
              className="block text-sm font-medium text-gray-700 dark:text-white"
            >
              Color
            </label>
            <div className="mt-1">
              <ChromePicker
                color={templateData.color}
                onChange={handleColorChange}
                className="mt-1"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 dark:text-white"
            >
              Image
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              name="image"
              onChange={handleImageChange}
              className="mt-1 w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-[#27272a] dark:text-white"
            />
          </div>
          <div>
            <button
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-[#27272a] text-white  dark:text-gray-700 dark:bg-gray-100  hover:bg-gray-200 dark:hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              type="submit"
            >
              Create Template
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default ProtectedRoute(Template);
