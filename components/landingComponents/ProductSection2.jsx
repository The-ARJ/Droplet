import React from "react";

const ProductSection2 = () => {
  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          <div>
            <img
              className="rounded-xl"
              src="./assets/b3.jpg"
              alt="Image Description"
            />
          </div>
          <div className="mt-5 sm:mt-10 lg:mt-0 dark:text-gray-300">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-white">
                  Cardova: The Ultimate Card Management Solution
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Cardova takes care of the challenges faced by start-ups and
                  provides enterprise-grade solutions for common pain points
                  encountered in various products and projects. With Cardova,
                  you can efficiently manage and organize your digital business
                  cards, saving you time and effort.
                </p>
              </div>
              <ul role="list" className="space-y-2 sm:space-y-4">
                <li className="flex space-x-3 dark:text-gray-400">
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-purple-600 dark:text-purple-400"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                      fill="currentColor"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                    <span className="font-bold text-gray-800 dark:text-white">
                      Easy &amp; fast designing
                    </span>{" "}
                    : Design and customize your digital business cards
                    effortlessly with Cardova&apos;s intuitive and user-friendly
                    interface.
                  </span>
                </li>
                <li className="flex space-x-3">
                  {/* Solid Check */}
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-purple-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                      fill="currentColor"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                    <span className="font-bold text-gray-800 dark:text-white">
                      Powerful features
                    </span>
                    : Enjoy a wide range of features that enhance the
                    functionality of your digital business cards, such as
                    contact syncing, analytics, and customizable templates.
                  </span>
                </li>
                <li className="flex space-x-3">
                  {/* Solid Check */}
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-purple-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                      fill="currentColor"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                    <span className="font-bold text-gray-800 dark:text-white">
                      User Experience Design
                    </span>
                    : Cardova provides a seamless user experience, allowing you
                    to create stunning digital business card designs that leave
                    a lasting impression on your contacts.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSection2;
