import React from "react";
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <>
      <div
        id="contact"
        className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto "
      >
        <div className="relative p-6 md:p-16 dark:text-white">
          {/* Grid */}
          <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
            <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
              <h2 className="text-2xl font-bold sm:text-3xl text-gray-800 dark:text-white">
                Fully customizable rules to match your unique needs
              </h2>
              {/* Tab Navs */}
              <nav
                className="grid gap-4 mt-5 md:mt-10 dark:text-white"
                aria-label="Tabs"
                role="tablist"
              >
                <button
                  type="button"
                  className="bg-white shadow-md hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:bg-gray-700 dark:text-white"
                  id="tabs-with-card-item-1"
                  data-hs-tab="#tabs-with-card-1"
                  aria-controls="tabs-with-card-1"
                  role="tab"
                >
                  <span className="flex">
                    <svg
                      className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 text-purple-600 dark:text-purple-300"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z" />
                      <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    </svg>
                    <span className="grow ml-6">
                      <span className="block text-lg font-semibold text-purple-600 dark:text-purple-300">
                        Advanced tools
                      </span>
                      <span className="block mt-1">
                        Use Droplet thoroughly thought and automated libraries
                        to manage your businesses.
                      </span>
                    </span>
                  </span>
                </button>
                <button
                  type="button"
                  className="bg-white shadow-md hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:bg-gray-700 dark:text-white"
                  id="tabs-with-card-item-2"
                  data-hs-tab="#tabs-with-card-2"
                  aria-controls="tabs-with-card-2"
                  role="tab"
                >
                  <span className="flex">
                    <svg
                      className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 text-purple-600 dark:text-purple-300"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z" />
                      <path d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z" />
                      <path d="M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
                    </svg>
                    <span className="grow ml-6">
                      <span className="block text-lg font-semibold text-purple-600 dark:text-purple-300">
                        Smart dashboards
                      </span>
                      <span className="block mt-1">
                        Quickly Droplet sample components, copy-paste codes, and
                        start right off.
                      </span>
                    </span>
                  </span>
                </button>
                <button
                  type="button"
                  className="bg-white shadow-md hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:bg-gray-700 dark:text-white"
                  id="tabs-with-card-item-3"
                  data-hs-tab="#tabs-with-card-3"
                  aria-controls="tabs-with-card-3"
                  role="tab"
                >
                  <span className="flex">
                    <svg
                      className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 text-purple-600 dark:text-purple-300"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 1 0 0-4h2.535z" />
                      <path d="M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
                    </svg>
                    <span className="grow ml-6">
                      <span className="block text-lg font-semibold text-purple-600 dark:text-purple-300">
                        Powerful features
                      </span>
                      <span className="block mt-1">
                        Reduce time and effort on building modern look design
                        with Droplet only.
                      </span>
                    </span>
                  </span>
                </button>
              </nav>
              {/* End Tab Navs */}
            </div>
            {/* End Col */}
            <div className="lg:col-span-6">
              <div className="relative">
                {/* Tab Content */}
                <ContactForm />
                {/* End Tab Content */}
                {/* SVG Element */}
                <div className="hidden absolute top-0 right-0 translate-x-20 md:block lg:translate-x-20">
                  <svg
                    className="w-16 h-auto text-orange-500"
                    width={121}
                    height={135}
                    viewBox="0 0 121 135"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                      stroke="currentColor"
                      strokeWidth={10}
                      strokeLinecap="round"
                    />
                    <path
                      d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                      stroke="currentColor"
                      strokeWidth={10}
                      strokeLinecap="round"
                    />
                    <path
                      d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                      stroke="currentColor"
                      strokeWidth={10}
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                {/* End SVG Element */}
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
          {/* Background Color */}
          <div className="absolute inset-0 grid grid-cols-12 w-full h-full">
            <div className="col-span-full lg:col-span-7 lg:col-start-6  w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full" />
          </div>
          {/* End Background Color */}
        </div>
      </div>
      {/* End Features */}
    </>
  );
};

export default Contact;
