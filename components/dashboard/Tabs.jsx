"use client";
import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import CreateDroplet from "./droplets/CreateDroplet";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  CreditCardIcon,
  Cog6ToothIcon,
  WalletIcon,
  EyeIcon,
} from "@heroicons/react/24/solid";
import AllDroplets from "./droplets/AllDroplets";
import PublishedDroplets from "./droplets/PublishedDroplet";
export default function DropletTabs() {
  const data = [
    {
      label: "Create Droplets",
      value: "html",
      icon: CreditCardIcon,
      desc: <CreateDroplet />,
    },
    {
      label: "All Droplets",
      value: "react",
      icon: WalletIcon,
      desc: <AllDroplets />,
    },
    {
      label: "Published Droplets",
      value: "vue",
      icon: EyeIcon,
      desc: <PublishedDroplets />,
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
    <Tabs value="html" className=" sm:px-4 lg:px-6">
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
