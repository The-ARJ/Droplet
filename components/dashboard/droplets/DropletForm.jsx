import React, { useState } from "react";
import { MdAdd, MdEmail, MdPhone, MdLocationOn, MdImage } from "react-icons/md";
import DropletService from "../../../utils/Services/DropletServices";
import { toast } from "react-toastify";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Textarea,
} from "@material-tailwind/react";
import {
  FaFacebook,
  FaGithub,
  FaGlobe,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
const DropletForm = ({ updateDropletData }) => {
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
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [bio, setBio] = useState("");

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
    formData.append("socialMedia.linkedIn", linkedin);
    formData.append("socialMedia.twitter", twitter);
    formData.append("socialMedia.facebook", facebook);
    formData.append("socialMedia.instagram", instagram);
    formData.append("bio", bio);

    try {
      const response = await DropletService.createDroplet(formData);
      toast.success("Card Created Successfully", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      updateDropletData(response.data.card);
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
    setCardImage(file);
    const reader = new FileReader();
    reader.onload = function (event) {
      setPreviewImage(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <div className="w-full ">
        <div className="bg-white dark:bg-[#27272a] border dark:border-gray-900/5 shadow-xl rounded-xl p-6">
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
              className="w-full rounded-lg h-48 sm:h-52 md:h-64 overflow-hidden object-cover cursor-pointer"
            >
              {previewImage ? (
                <img
                  className="w-full h-full object-cover"
                  src={previewImage}
                  alt="participant"
                />
              ) : (
                <div className="w-full text-gray-800 dark:text-white h-full flex justify-center items-center">
                  <MdAdd className=" opacity-50 text-4xl" />
                  <p>Upload Your Image</p>
                </div>
              )}
            </label>
          </div>
          <div className="mt-6">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-gray-800 dark:text-white font-bold mb-2 text-xs sm:text-sm md:text-base">
                  First Name
                </label>
                <input
                  type="text"
                  className="text-xs sm:text-sm md:text-base bg-transparent border-b border-gray-400 dark:border-gray-200 outline-none w-full text-gray-800 dark:text-white py-2"
                  placeholder="Enter your first name"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div>
                <label className="text-gray-800 dark:text-white font-bold mb-2 text-xs sm:text-sm md:text-base">
                  Last Name
                </label>
                <input
                  type="text"
                  className="text-xs sm:text-sm md:text-base bg-transparent border-b border-gray-400 dark:border-gray-200 outline-none w-full text-gray-800 dark:text-white py-2"
                  placeholder="Enter your last name"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="text-gray-800 dark:text-white font-bold mb-2 text-xs sm:text-sm md:text-base">
                Job Title
              </label>
              <input
                type="text"
                className="text-xs sm:text-sm md:text-base bg-transparent border-b border-gray-400 dark:border-gray-200 outline-none w-full text-gray-800 dark:text-white py-2"
                placeholder="Enter your job title"
                name="jobTitle"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-800 dark:text-white font-bold mb-2 text-xs sm:text-sm md:text-base">
                Company
              </label>
              <input
                type="text"
                className="text-xs sm:text-sm md:text-base bg-transparent border-b border-gray-400 dark:border-gray-200 outline-none w-full text-gray-800 dark:text-white py-2"
                placeholder="Enter your company name"
                name="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-800 dark:text-white font-bold mb-2 text-xs sm:text-sm md:text-base">
                Email
              </label>
              <input
                type="email"
                className="text-xs sm:text-sm md:text-base bg-transparent border-b border-gray-400 dark:border-gray-200 outline-none w-full text-gray-800 dark:text-white py-2"
                placeholder="Enter your email address"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-800 dark:text-white font-bold mb-2 text-xs sm:text-sm md:text-base">
                Phone
              </label>
              <input
                type="tel"
                className="text-xs sm:text-sm md:text-base bg-transparent border-b border-gray-400 dark:border-gray-200 outline-none w-full text-gray-800 dark:text-white py-2"
                placeholder="Enter your phone number"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-800 dark:text-white font-bold mb-2 text-xs sm:text-sm md:text-base">
                Address
              </label>
              <input
                type="text"
                className="text-xs sm:text-sm md:text-base bg-transparent border-b border-gray-400 dark:border-gray-200 outline-none w-full text-gray-800 dark:text-white py-2"
                placeholder="Enter your address"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-4">
              <Popover
                placement="top-start"
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <PopoverHandler>
                  <Button className="bg-purple-400 dark:bg-[#3d3d40]">
                    <FaTwitter className="text-sm md:text-xl" />
                  </Button>
                </PopoverHandler>
                <PopoverContent className="z-50">
                  <input
                    type="text"
                    className="text-xs sm:text-sm md:text-base bg-transparent border-b border-gray-400 dark:border-gray-200 outline-none w-full text-gray-800  py-2"
                    placeholder="Enter your Twitter url"
                    name="twitter"
                    value={twitter}
                    onChange={(e) => setTwitter(e.target.value)}
                  />
                </PopoverContent>
              </Popover>

              <Popover
                placement="top-start"
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <PopoverHandler>
                  <Button className="bg-purple-400 dark:bg-[#3d3d40]">
                    <FaFacebook className="text-sm md:text-xl" />
                  </Button>
                </PopoverHandler>
                <PopoverContent className="z-50">
                  <input
                    type="text"
                    className="text-xs sm:text-sm md:text-base bg-transparent border-b border-gray-400 dark:border-gray-200 outline-none w-full text-gray-800 py-2"
                    placeholder="Enter your Facebook url"
                    name="facebook"
                    value={facebook}
                    onChange={(e) => setFacebook(e.target.value)}
                  />
                </PopoverContent>
              </Popover>

              <Popover
                placement="top-start"
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <PopoverHandler>
                  <Button className="bg-purple-400 dark:bg-[#3d3d40]">
                    <FaInstagram className="text-sm md:text-xl" />
                  </Button>
                </PopoverHandler>
                <PopoverContent className="z-50">
                  <input
                    type="text"
                    className="text-xs sm:text-sm md:text-base bg-transparent border-b border-gray-400 dark:border-gray-200 outline-none w-full text-gray-800 py-2"
                    placeholder="Enter your Instagram url"
                    name="instagram"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                  />
                </PopoverContent>
              </Popover>

              <Popover
                placement="top-start"
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <PopoverHandler>
                  <Button className="bg-purple-400 dark:bg-[#3d3d40]">
                    <FaLinkedinIn className="text-sm md:text-xl" />
                  </Button>
                </PopoverHandler>
                <PopoverContent className="z-50">
                  <input
                    type="text"
                    className="text-xs sm:text-sm md:text-base bg-transparent border-b border-gray-400 dark:border-gray-200 outline-none w-full text-gray-800 py-2"
                    placeholder="Enter your LinkedIn url"
                    name="linkedin"
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                  />
                </PopoverContent>
              </Popover>

              <Popover
                placement="top-start"
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <PopoverHandler>
                  <Button className="bg-purple-400 dark:bg-[#3d3d40]">
                    <FaGlobe className="text-sm md:text-xl" />
                  </Button>
                </PopoverHandler>
                <PopoverContent className="z-50">
                  <input
                    type="text"
                    className="text-xs sm:text-sm md:text-base bg-transparent border-b border-gray-400 dark:border-gray-200 outline-none w-full text-gray-800 py-2"
                    placeholder="Enter your Website url"
                    name="website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="flex mt-4 justify-end">
              <button
                className="text-sm rounded-lg py-2 px-4 font-bold bg-[#27272a] text-white  dark:text-gray-700 dark:bg-gray-100 hover:bg-gray-600 dark:hover:bg-gray-300 "
                onClick={handleSubmit}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropletForm;
