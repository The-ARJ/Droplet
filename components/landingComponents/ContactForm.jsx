import React, { useState, useEffect } from "react";
import ContactService from "../../utils/Services/ContactServices";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const MAX_MESSAGE_LENGTH = 400;

  function handleChange(event) {
    const { value } = event.target;
    if (value.length <= MAX_MESSAGE_LENGTH) {
      setMessage(value);
    }
  }

  const remainingChars = MAX_MESSAGE_LENGTH - message.length;
  const charsLeftClass =
    remainingChars >= 0 ? "text-green-600" : "text-red-500";

  const submitForm = async () => {
    const formData = new FormData();
    formData.append("subject", subject);
    formData.append("message", message);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);

    try {
      const response = await ContactService.createContact(formData);
      alert("Contact sent successfully", response);
      setEmail("");
      setFirstName("");
      setLastName("");
      setMessage("");
      setSubject("");
    } catch (err) {
      alert(err);
      err;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm();
  };

  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white sm:text-4xl">
            Contact us
          </h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            We'd love to talk about how we can help you.
          </p>
        </div>

        <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:bg-[#27272a]">
          <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-white">
            Fill in the form
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="py-3 px-4 block w-full border border-purple-900 rounded-md text-sm focus:border-purple-500 focus:ring-purple-500 purple dark:bg-gray-200 dark:border-gray-600 dark:text-gray-900"
                    placeholder="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="py-3 px-4 block w-full border border-purple-900 rounded-md text-sm focus:border-purple-500 focus:ring-purple-500 purple dark:bg-gray-200 dark:border-gray-600 dark:text-gray-900"
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="py-3 px-4 block w-full border border-purple-900 rounded-md text-sm focus:border-purple-500 focus:ring-purple-500 purple dark:bg-gray-200 dark:border-gray-600 dark:text-gray-900"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  className="py-3 px-4 block w-full border border-purple-900 rounded-md text-sm focus:border-purple-500 focus:ring-purple-500 purple dark:bg-gray-200 dark:border-gray-600 dark:text-gray-900"
                  placeholder="Subject"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div>
                <span className={`text-xs md:text-base ${charsLeftClass}`}>
                  {remainingChars} characters left
                </span>
                <textarea
                  name="message"
                  rows={4}
                  className="py-3 px-4 block w-full border border-purple-900 rounded-md text-sm focus:border-purple-500 focus:ring-purple-500 purple dark:bg-gray-200 dark:border-gray-600 dark:text-gray-900"
                  placeholder="Message"
                  value={message}
                  onChange={handleChange}
                />
                {remainingChars < 0 && (
                  <p className="text-red-500 dark:text-red-400">
                    Please limit your message to 200 characters.
                  </p>
                )}
              </div>
            </div>

            <div className="mt-4 grid">
              <button
                type="submit"
                className="inline-flex justify-center items-center gap-x-3 text-center bg-purple-600 hover:bg-purple-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4"
              >
                Send inquiry
              </button>
            </div>

            <div className="mt-3 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                We'll get back to you in 1-2 business days.
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
