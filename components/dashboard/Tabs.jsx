"use client";
import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import CreateCard from "./cards/CreateCard";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  CreditCardIcon,
  Cog6ToothIcon,
  WalletIcon,
  EyeIcon,
} from "@heroicons/react/24/solid";
import AllCards from "./cards/AllCards";
import PublishedCards from "./cards/PublishedCard";
export default function CardTabs() {
  const data = [
    {
      label: "Create Cards",
      value: "html",
      icon: CreditCardIcon,
      desc: <CreateCard />,
    },
    {
      label: "All Cards",
      value: "react",
      icon: WalletIcon,
      desc: <AllCards />,
    },
    {
      label: "Published Cards",
      value: "vue",
      icon: EyeIcon,
      desc: <PublishedCards />,
    },
    // {
    //   label: "Angular",
    //   value: "angular",
    //   icon: Cog6ToothIcon,

    //   desc: `Because it's about motivating the doers. Because I'm here
    //     to follow my dreams and inspire other people to follow their dreams, too.`,
    // },
  ];

  return (
    <Tabs value="html" className="sm:py-4 sm:px-4 lg:py-6 lg:px-6">
      <TabsHeader
        indicatorProps={{
          className: "bg-blue-500/10 shadow-none text-blue-500",
        }}
        className="bg-white dark:bg-[#27272a] py-2 px-2 sm:py-2 sm:px-2 lg:py-2 lg:px-2"
      >
        {data.map(({ label, value, icon }) => (
          <Tab
            key={value}
            value={value}
            className="dark:text-gray-100 text-xs sm:text-sm md:text-base"
          >
            <div className="flex items-center gap-2 py-2">
              {React.createElement(icon, { className: "w-5 h-5" })}
              <div className="hidden lg:block">{label}</div>
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
        animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}
      >
        {data.map(({ value, desc }) => (
          <TabPanel
            key={value}
            value={value}
            className="text-xs sm:text-sm md:text-base "
          >
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
