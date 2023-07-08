"use client";
import DashboardLayout from "@/components/dashboard/Dashboard";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../utils/Context/UserContext";
import Image from "next/image";
import UserService from "../../utils/Services/UserServices";
import { imgURL } from "../../utils/Services/UserServices";
import { toast } from "react-toastify";
import ProtectedRoute from "@/utils/Context/ProtectedRoute";

const Profile = () => {
  const { user, loading, error, dispatch } = useContext(UserContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [profession, setProfession] = useState("");
  const [userImage, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  function handleImageChange(event) {
    try {
      const selectedFile = event.target.files[0];
      setPreviewImage(URL.createObjectURL(selectedFile));
      setImage(selectedFile);
    } catch (error) {
      console.error("Error while handling image change: ", error);
    }
  }

  const handleSave = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("profession", profession);
    if (userImage) {
      formData.append("userImage", userImage);
    }
    const userToken = window.localStorage.getItem("token");
    UserService.updateUser(user._id, formData, userToken)
      .then((res) => {
        if (res.status === 200) {
          // Update the user state with the new data
          const updatedUser = {
            ...user,
            firstName,
            lastName,
            email,
            imageURL: res.data.imageURL, // Update the user image URL
          };
          dispatch({ type: "SET_USER", payload: updatedUser });

          toast.success("Profile Updated Successfully", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          alert("err");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <DashboardLayout>
      <div className=" max-w-2xl mx-auto ">
        <form onSubmit={handleSave}>
          <div className="space-y-12 bg-white dark:bg-[#27272a] px-10 py-10 border dark:border-gray-700 shadow-sm rounded-md">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-2xl font-semibold leading-2 text-gray-900 dark:text-white">
                Profile
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                This information will be displayed publicly so be careful what
                you share.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                  >
                    Username
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <span className="flex select-none items-center pl-3 text-gray-500 dark:text-gray-400 sm:text-sm">
                        cardova.com/
                      </span>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        autoComplete="username"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder={user && user.firstName}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="photo"
                    className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                  >
                    Photo
                  </label>

                  <div className="mt-2 flex items-center gap-x-3">
                    {previewImage ? (
                      <Image
                        width={200}
                        height={200}
                        src={previewImage}
                        alt="User"
                        className="h-14 w-14 rounded-full"
                      />
                    ) : (
                      <>
                        {user && user.image ? (
                          <>
                            <Image
                              width={200}
                              height={200}
                              className="h-14 w-14 rounded-full object-cover"
                              src={`${imgURL}/${user.image}`}
                              alt="User"
                            />
                          </>
                        ) : (
                          <>
                            {" "}
                            <UserCircleIcon
                              className="h-12 w-12 text-gray-300 dark:text-gray-400"
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </>
                    )}

                    <label
                      htmlFor="fileInput"
                      className="rounded-md bg-white dark:bg-gray-700 px-2.5 py-1.5 text-sm font-semibold text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer"
                    >
                      Upload
                      <input
                        id="fileInput"
                        type="file"
                        className="sr-only"
                        onChange={handleImageChange}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                Personal Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                Use an actual email address where you receive mails.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      placeholder={user && user.firstName}
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                  >
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      placeholder={user && user.lastName}
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder={user && user.email}
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="sm:col-span-6">
                  <label
                    htmlFor="profession"
                    className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                  >
                    Profession
                  </label>
                  <div className="mt-2">
                    <input
                      id="profession"
                      name="profession"
                      type="text"
                      autoComplete="profession"
                      placeholder={user && user.profession}
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => setProfession(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-[#27272a] text-white  dark:text-gray-700 dark:bg-gray-100 px-3 py-2 text-sm font-semibold   shadow-sm hover:bg-gray-200 dark:hover:bg-gray-300 focus-visible:outline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-offset-2 focus-visible:ring-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};
export default ProtectedRoute(Profile);
