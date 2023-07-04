"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import UserService from "../../utils/UserServices";
const ContactForm = () => {
  return (
    <>
      {/* Contact Us */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl ">
            Contact us
          </h1>
          <p className="mt-1 text-gray-600 ">
            We&apos;d love to talk about how we can help you.
          </p>
        </div>
        {/* Card */}
        <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 ">
          <h2 className="mb-8 text-xl font-semibold text-gray-800 ">
            Fill in the form
          </h2>
          <form>
            <div className="grid gap-4">
              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="hs-firstname-contacts-1"
                    id="hs-firstname-contacts-1"
                    className="py-3 px-4 block w-full border  border-purple-900 rounded-md text-sm focus:border-purple-500 focus:ring-purple-500 purple "
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="hs-lastname-contacts-1"
                    id="hs-lastname-contacts-1"
                    className="py-3 px-4 block w-full border  border-purple-900 rounded-md text-sm focus:border-purple-500 focus:ring-purple-500 purple "
                    placeholder="Last Name"
                  />
                </div>
              </div>
              {/* End Grid */}
              <div>
                <label htmlFor="hs-email-contacts-1" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="hs-email-contacts-1"
                  id="hs-email-contacts-1"
                  autoComplete="email"
                  className="py-3 px-4 block w-full border  border-purple-900 rounded-md text-sm focus:border-purple-500 focus:ring-purple-500 purple "
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  className="py-3 px-4 block w-full border  border-purple-900 rounded-md text-sm focus:border-purple-500 focus:ring-purple-500 purple "
                  placeholder="Subject"
                />
              </div>
              <div>
                <textarea
                  id="hs-about-contacts-1"
                  name="hs-about-contacts-1"
                  rows={4}
                  className="py-3 px-4 block w-full border  border-purple-900 rounded-md text-sm focus:border-purple-500 focus:ring-purple-500 purple "
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
            </div>
            {/* End Grid */}
            <div className="mt-4 grid">
              <button
                type="submit"
                className="inline-flex justify-center items-center gap-x-3 text-center bg-purple-600 hover:bg-purple-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 "
              >
                Send inquiry
              </button>
            </div>
            <div className="mt-3 text-center">
              <p className="text-sm text-gray-500">
                We&apos;ll get back to you in 1-2 business days.
              </p>
            </div>
          </form>
        </div>
        {/* End Card */}
      </div>
      {/* End Contact Us */}
    </>
  );
};

export default ContactForm;
