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
  const [selectedTextAlignment, setSelectedTextAlignment] = useState(null);

  const borderRadiusOptions = [
    { value: "rounded-none", label: "rounded-none" },
    { value: "rounded-sm", label: "rounded-sm" },
    { value: "rounded-md", label: "rounded-md" },
    { value: "rounded-lg", label: "rounded-lg" },
    { value: "rounded-xl", label: "rounded-xl" },
    { value: "rounded-full", label: "rounded-full" },
  ];

  const colorOptions = [
    // Red
    { value: "bg-red-100", label: "bg-red-100" },
    { value: "bg-red-200", label: "bg-red-200" },
    { value: "bg-red-300", label: "bg-red-300" },
    { value: "bg-red-400", label: "bg-red-400" },
    { value: "bg-red-500", label: "bg-red-500" },

    // Blue
    { value: "bg-blue-100", label: "bg-blue-100" },
    { value: "bg-blue-200", label: "bg-blue-200" },
    { value: "bg-blue-300", label: "bg-blue-300" },
    { value: "bg-blue-400", label: "bg-blue-400" },
    { value: "bg-blue-500", label: "bg-blue-500" },

    // Green
    { value: "bg-green-100", label: "bg-green-100" },
    { value: "bg-green-200", label: "bg-green-200" },
    { value: "bg-green-300", label: "bg-green-300" },
    { value: "bg-green-400", label: "bg-green-400" },
    { value: "bg-green-500", label: "bg-green-500" },
    { value: "bg-green-600", label: "bg-green-600" },

    // Yellow
    { value: "bg-yellow-100", label: "bg-yellow-100" },
    { value: "bg-yellow-200", label: "bg-yellow-200" },
    { value: "bg-yellow-300", label: "bg-yellow-300" },
    { value: "bg-yellow-400", label: "bg-yellow-400" },
    { value: "bg-yellow-500", label: "bg-yellow-500" },
    { value: "bg-yellow-600", label: "bg-yellow-600" },

    // Orange
    { value: "bg-orange-100", label: "bg-orange-100" },
    { value: "bg-orange-200", label: "bg-orange-200" },
    { value: "bg-orange-300", label: "bg-orange-300" },
    { value: "bg-orange-400", label: "bg-orange-400" },
    { value: "bg-orange-500", label: "bg-orange-500" },

    // Purple
    { value: "bg-purple-100", label: "bg-purple-100" },
    { value: "bg-purple-200", label: "bg-purple-200" },
    { value: "bg-purple-300", label: "bg-purple-300" },
    { value: "bg-purple-400", label: "bg-purple-400" },
    { value: "bg-purple-500", label: "bg-purple-500" },

    // Pink
    { value: "bg-pink-100", label: "bg-pink-100" },
    { value: "bg-pink-200", label: "bg-pink-200" },
    { value: "bg-pink-300", label: "bg-pink-300" },
    { value: "bg-pink-400", label: "bg-pink-400" },
    { value: "bg-pink-500", label: "bg-pink-500" },

    // Gray
    { value: "bg-gray-100", label: "bg-gray-100" },
    { value: "bg-gray-200", label: "bg-gray-200" },
    { value: "bg-gray-300", label: "bg-gray-300" },
    { value: "bg-gray-400", label: "bg-gray-400" },
    { value: "bg-gray-500", label: "bg-gray-500" },
    { value: "bg-gray-600", label: "bg-gray-600" },
    { value: "bg-gray-700", label: "bg-gray-700" },
    { value: "bg-gray-800", label: "bg-gray-800" },
    { value: "bg-gray-900", label: "bg-gray-900" },

    { value: "bg-white", label: "bg-white" },
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
    { value: "text-red-100", label: "text-red-100" },
    { value: "text-red-200", label: "text-red-200" },
    { value: "text-red-300", label: "text-red-300" },
    { value: "text-red-400", label: "text-red-400" },
    { value: "text-red-500", label: "text-red-500" },

    // Blue
    { value: "text-blue-100", label: "text-blue-100" },
    { value: "text-blue-200", label: "text-blue-200" },
    { value: "text-blue-300", label: "text-blue-300" },
    { value: "text-blue-400", label: "text-blue-400" },
    { value: "text-blue-500", label: "text-blue-500" },

    // Green
    { value: "text-green-100", label: "text-green-100" },
    { value: "text-green-200", label: "text-green-200" },
    { value: "text-green-300", label: "text-green-300" },
    { value: "text-green-400", label: "text-green-400" },
    { value: "text-green-500", label: "text-green-500" },
    { value: "text-green-600", label: "text-green-600" },

    // Yellow
    { value: "text-yellow-100", label: "text-yellow-100" },
    { value: "text-yellow-200", label: "text-yellow-200" },
    { value: "text-yellow-300", label: "text-yellow-300" },
    { value: "text-yellow-400", label: "text-yellow-400" },
    { value: "text-yellow-500", label: "text-yellow-500" },
    { value: "text-yellow-600", label: "text-yellow-600" },

    // Orange
    { value: "text-orange-100", label: "text-orange-100" },
    { value: "text-orange-200", label: "text-orange-200" },
    { value: "text-orange-300", label: "text-orange-300" },
    { value: "text-orange-400", label: "text-orange-400" },
    { value: "text-orange-500", label: "text-orange-500" },

    // Purple
    { value: "text-purple-100", label: "text-purple-100" },
    { value: "text-purple-200", label: "text-purple-200" },
    { value: "text-purple-300", label: "text-purple-300" },
    { value: "text-purple-400", label: "text-purple-400" },
    { value: "text-purple-500", label: "text-purple-500" },

    // Pink
    { value: "text-pink-100", label: "text-pink-100" },
    { value: "text-pink-200", label: "text-pink-200" },
    { value: "text-pink-300", label: "text-pink-300" },
    { value: "text-pink-400", label: "text-pink-400" },
    { value: "text-pink-500", label: "text-pink-500" },

    // Gray
    { value: "text-gray-100", label: "text-gray-100" },
    { value: "text-gray-200", label: "text-gray-200" },
    { value: "text-gray-300", label: "text-gray-300" },
    { value: "text-gray-400", label: "text-gray-400" },
    { value: "text-gray-500", label: "text-gray-500" },
    { value: "text-gray-600", label: "text-gray-600" },
    { value: "text-gray-700", label: "text-gray-700" },
    { value: "text-gray-800", label: "text-gray-800" },
    { value: "text-gray-900", label: "text-gray-900" },

    { value: "text-white", label: "text-white" },
  ];
  const textAlignmentOptions = [
    { value: "justify-center", label: "justify-center" },
    { value: "justify-start", label: "justify-start" },
    { value: "justify-end", label: "justify-end" },
  ];

  const submitForm = async () => {
    const formData = new FormData();
    formData.append("templateImage", templateImage);
    formData.append("borderRadius", borderRadius);
    formData.append("width", selectedWidth?.value || "");
    formData.append("height", selectedHeight?.value || "");
    formData.append("color", selectedColor?.value || "");
    formData.append("textcolor", selectedTextColor?.value || "");
    formData.append("textalignment", selectedTextAlignment?.value || "");

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
      // updateDropletData(response.data.droplet);
    } catch (err) {
      alert(err);
      toast.error(
        "Error Creating Droplet",
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
                Text Alignement
              </label>
              <Select
                required
                options={textAlignmentOptions}
                onChange={(selectedOption) =>
                  setSelectedTextAlignment(selectedOption)
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
