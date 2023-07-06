import React, { useState } from "react";
import { MdAdd, MdEmail, MdPhone, MdLocationOn, MdImage } from "react-icons/md";
import CardService from "../../utils/Services/CardServices";
const CardForm = () => {
  const [cardImage, setCardImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [twitter, setTwitter] = useState("");
  const [github, setGithub] = useState("");
  const [bio, setBio] = useState("");
  const [template, setTemplate] = useState("");

  const submitForm = async () => {
    const formData = new FormData();
    formData.append("cardImage", cardImage);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("jobTitle", jobTitle);
    formData.append("company", company);
    formData.append("address", address);
    formData.append("website", website);
    formData.append("socialMedia.linkedin", linkedin);
    formData.append("socialMedia.twitter", twitter);
    formData.append("socialMedia.github", github);
    formData.append("bio", bio);
    formData.append("template", template);

    try {
      const response = await CardService.createCard(formData);
      alert("Card Created Successfully");
    } catch (err) {
      alert(err);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setCardImage(file);
    const reader = new FileReader();
    reader.onload = function (event) {
      setPreviewImage(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <div className="w-full md:w-2/6">
        <div className="bg-gray-800 rounded-lg p-6">
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
              className="w-full rounded-lg h-64 overflow-hidden object-cover cursor-pointer"
            >
              {previewImage ? (
                <img
                  className="w-full h-full"
                  src={previewImage}
                  alt="participant"
                />
              ) : (
                <div className="w-full text-white h-full flex justify-center items-center">
                  <MdAdd className=" opacity-50 text-4xl" />
                  <p>Upload Your Image</p>
                </div>
              )}
            </label>
          </div>
          <div className="mt-6">
            <div className="mb-4">
              <label className="text-white font-bold mb-2">First Name</label>
              <input
                type="text"
                className="text-sm bg-transparent border-b border-white outline-none w-full text-white py-2"
                placeholder="Enter your first name"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="text-white font-bold mb-2">Last Name</label>
              <input
                type="text"
                className="text-sm bg-transparent border-b border-white outline-none w-full text-white py-2"
                placeholder="Enter your last name"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="text-white font-bold mb-2">Job Title</label>
              <input
                type="text"
                className="text-sm bg-transparent border-b border-white outline-none w-full text-white py-2"
                placeholder="Enter your job title"
                name="jobTitle"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="text-white font-bold mb-2">Company</label>
              <input
                type="text"
                className="text-sm bg-transparent border-b border-white outline-none w-full text-white py-2"
                placeholder="Enter your company name"
                name="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="text-white font-bold mb-2">Email</label>
              <input
                type="email"
                className="text-sm bg-transparent border-b border-white outline-none w-full text-white py-2"
                placeholder="Enter your email address"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="text-white font-bold mb-2">Phone</label>
              <input
                type="tel"
                className="text-sm bg-transparent border-b border-white outline-none w-full text-white py-2"
                placeholder="Enter your phone number"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="text-white font-bold mb-2">Address</label>
              <input
                type="text"
                className="text-sm bg-transparent border-b border-white outline-none w-full text-white py-2"
                placeholder="Enter your address"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="text-white font-bold mb-2">Website</label>
              <input
                type="text"
                className="text-sm bg-transparent border-b border-white outline-none w-full text-white py-2"
                placeholder="Enter your website URL"
                name="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className="text-sm rounded-lg py-2 px-4 font-bold bg-purple-600 text-white"
              onClick={handleSubmit}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardForm;
