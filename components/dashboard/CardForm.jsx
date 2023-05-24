import React, { useState } from "react";
import { MdAdd, MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const CardForm = () => {
  const [showTwitterInput, setShowTwitterInput] = useState(false);
  const [showLinkedinInput, setShowLinkedinInput] = useState(false);
  const [showGithubInput, setShowGithubInput] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    role: "",
    email: "",
    phone: "",
    address: "",
    twitter: "",
    linkedin: "",
    github: "",
    image: null,
  });

  const handleTwitterIconClick = () => {
    setShowTwitterInput((prevShowTwitterInput) => !prevShowTwitterInput);
  };

  const handleLinkedinIconClick = () => {
    setShowLinkedinInput((prevShowLinkedinInput) => !prevShowLinkedinInput);
  };

  const handleGithubIconClick = () => {
    setShowGithubInput((prevShowGithubInput) => !prevShowGithubInput);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function (event) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        image: event.target.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    alert("Data Saved Successfully");
    localStorage.setItem("formData", JSON.stringify(formData));
  };

  return (
    <>
      <div className="w-full md:w-3/12">
        <div className="p-2">
          <div className="p-4 rounded-3xl bg-[#111827]">
            <div className="flex items-center justify-center">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="image-upload"
                onChange={handleImageChange}
              />
              <label
                htmlFor="image-upload"
                className="w-32 h-32 rounded-full overflow-hidden object-cover cursor-pointer"
              >
                {formData.image ? (
                  <img
                    className="w-full h-full"
                    src={formData.image}
                    alt="participant"
                  />
                ) : (
                  <div className="w-full h-full flex justify-center items-center">
                    <MdAdd className="text-white opacity-50 text-4xl" />
                  </div>
                )}
              </label>
            </div>
            <div className="mb-4 mt-5 text-white">
              <input
                type="text"
                className="text-base font-bold opacity-70 bg-transparent border-b border-white outline-none"
                placeholder="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
              <input
                type="text"
                className="text-sm opacity-70 mt-2 bg-transparent border-b border-white outline-none"
                placeholder="Role"
                name="role"
                value={formData.role}
                onChange={handleChange}
              />
            </div>
            <div>
              <div className="flex items-center mb-4">
                <MdEmail className="text-white opacity-70 mr-2" />
                <input
                  type="email"
                  className="text-sm text-white opacity-70 bg-transparent border-b border-white outline-none"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center mb-4">
                <MdPhone className="text-white opacity-70 mr-2" />
                <input
                  type="tel"
                  className="text-sm text-white opacity-70 bg-transparent border-b border-white outline-none"
                  placeholder="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center mb-4">
                <MdLocationOn className="text-white opacity-70 mr-2" />
                <input
                  type="text"
                  className="text-sm text-white opacity-70 bg-transparent border-b border-white outline-none"
                  placeholder="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex justify-between pt-4 relative">
              <div className="flex items-center">
                <button
                  className="w-5 h-5 rounded-full border-none ml-3 p-0 flex justify-center items-center bg-white"
                  onClick={handleTwitterIconClick}
                >
                  <MdAdd />
                </button>
                {showTwitterInput && (
                  <input
                    type="text"
                    className="text-sm text-white opacity-70 ml-3 bg-transparent border-b border-white outline-none"
                    placeholder="Twitter"
                    name="twitter"
                    value={formData.twitter}
                    onChange={handleChange}
                  />
                )}
                {!showTwitterInput && (
                  <FaTwitter
                    className="text-white opacity-70 ml-3 cursor-pointer"
                    onClick={handleTwitterIconClick}
                  />
                )}
                <button
                  className="w-5 h-5 rounded-full border-none ml-3 p-0 flex justify-center items-center bg-white"
                  onClick={handleLinkedinIconClick}
                >
                  <MdAdd />
                </button>
                {showLinkedinInput && (
                  <input
                    type="text"
                    className="text-sm text-white opacity-70 ml-3 bg-transparent border-b border-white outline-none"
                    placeholder="LinkedIn"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                  />
                )}
                {!showLinkedinInput && (
                  <FaLinkedin
                    className="text-white opacity-70 ml-3 cursor-pointer"
                    onClick={handleLinkedinIconClick}
                  />
                )}
                <button
                  className="w-5 h-5 rounded-full border-none ml-3 p-0 flex justify-center items-center bg-white"
                  onClick={handleGithubIconClick}
                >
                  <MdAdd />
                </button>
                {showGithubInput && (
                  <input
                    type="text"
                    className="text-sm text-white opacity-70 ml-3 bg-transparent border-b border-white outline-none"
                    placeholder="GitHub"
                    name="github"
                    value={formData.github}
                    onChange={handleChange}
                  />
                )}
                {!showGithubInput && (
                  <FaGithub
                    className="text-white opacity-70 ml-3 cursor-pointer"
                    onClick={handleGithubIconClick}
                  />
                )}
              </div>
              <button
                className="text-sm rounded-lg flex flex-shrink-0 py-2 px-4 font-bold text-green-600"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardForm;
