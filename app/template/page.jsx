"use client";
import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import TemplateService from "../../utils/Services/TemplateServices";
import { toast } from "react-toastify";
import DashboardLayout from "@/components/dashboard/Dashboard";
import Select from "react-select";

const Template = () => {
  const [templateImage, setTemplateImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [borderRadius, setBorderRadius] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedWidth, setSelectedWidth] = useState(null);
  const [selectedHeight, setSelectedHeight] = useState(null);
  const [selectedTextColor, setSelectedTextColor] = useState(null);

  const borderRadiusOptions = [
    { value: "rounded-none", label: "rounded-none" },
    { value: "rounded-sm", label: "rounded-sm" },
    { value: "rounded-md", label: "rounded-md" },
    { value: "rounded-lg", label: "rounded-lg" },
    { value: "rounded-xl", label: "rounded-xl" },
    { value: "rounded-full", label: "rounded-full" },
  ];

  const colorOptions = [
    { value: "bg-red-500", label: "bg-red-500" },
    { value: "bg-blue-500", label: "bg-blue-500" },
    { value: "bg-green-500", label: "bg-green-500" },
  ];

  const widthOptions = [
    { value: "w-1/4", label: "w-1/4" },
    { value: "w-40", label: "w-40" },
    { value: "w-1/2", label: "w-1/2" },
    { value: "w-3/4", label: "w-3/4" },
    { value: "w-full", label: "w-full" },
  ];

  const heightOptions = [
    { value: "h-16", label: "h-16" },
    { value: "h-20", label: "h-20" },
    { value: "h-24", label: "h-24" },
    { value: "h-32", label: "h-32" },
    { value: "h-40", label: "h-40" },
    { value: "h-64", label: "h-64" },
  ];
  const textColorOptions = [
    { value: "text-red-500", label: "text-red-500" },
    { value: "text-blue-500", label: "text-blue-500" },
    { value: "text-green-500", label: "text-green-500" },
  ];

  const submitForm = async () => {
    const formData = new FormData();
    formData.append("templateImage", templateImage);
    formData.append("borderRadius", borderRadius);
    formData.append("width", selectedWidth?.value || "");
    formData.append("height", selectedHeight?.value || "");
    formData.append("color", selectedColor?.value || "");
    formData.append("textcolor", selectedTextColor?.value || "");

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
      // updateCardData(response.data.card);
    } catch (err) {
      alert(err);
      toast.error(
        "Error Creating Card",
        {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        },
        err
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setTemplateImage(file);
    const reader = new FileReader();
    reader.onload = function (event) {
      setPreviewImage(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <DashboardLayout>
      <div className="w-full px-60">
        <div className="bg-white dark:bg-[#27272a] border dark:border-gray-900/5 shadow-xl rounded-xl p-6">
          <div className="flex items-center justify-center">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="image-upload"
              onChange={handleImageChange}
              required
            />
            <label
              htmlFor="image-upload"
              className="w-full rounded-lg h-48 sm:h-52 md:h-64 overflow-hidden object-cover cursor-pointer"
            >
              {previewImage ? (
                <img
                  className="w-full h-full"
                  src={previewImage}
                  alt="participant"
                />
              ) : (
                <div className="w-full text-gray-800 h-full flex justify-center items-center">
                  <MdAdd className="opacity-50 text-4xl" />
                  <p>Upload Your Image</p>
                </div>
              )}
            </label>
          </div>
          <div className="mt-6">
            <div className="mb-4">
              <label className="text-gray-800 font-bold mb-2 text-xs sm:text-sm md:text-base">
                Border Radius
              </label>
              <Select
                required
                options={borderRadiusOptions}
                onChange={(selectedOption) =>
                  setBorderRadius(selectedOption.value)
                }
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-800 font-bold mb-2 text-xs sm:text-sm md:text-base">
                Color
              </label>
              <Select
                required
                options={colorOptions}
                onChange={(selectedOption) => setSelectedColor(selectedOption)}
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-800 font-bold mb-2 text-xs sm:text-sm md:text-base">
                Text Color
              </label>
              <Select
                required
                options={textColorOptions}
                onChange={(selectedOption) =>
                  setSelectedTextColor(selectedOption)
                }
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-800 font-bold mb-2 text-xs sm:text-sm md:text-base">
                Width
              </label>
              <Select
                required
                options={widthOptions}
                onChange={(selectedOption) => setSelectedWidth(selectedOption)}
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-800 font-bold mb-2 text-xs sm:text-sm md:text-base">
                Height
              </label>
              <Select
                required
                options={heightOptions}
                onChange={(selectedOption) => setSelectedHeight(selectedOption)}
              />
            </div>
            <div className="flex justify-end">
              <button
                className="text-sm rounded-lg py-2 px-4 font-bold bg-[#27272a] text-white  dark:text-gray-700 dark:bg-gray-100 hover:bg-gray-600 dark:hover:bg-gray-300"
                onClick={handleSubmit}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Template;
