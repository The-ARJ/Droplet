"use client";
import SidenavItems from "./items";
import { useToggle } from "../provider/context";

const style = {
  mobilePosition: {
    left: "left-0 ",
    right: "right-0 lg:left-0",
  },
  container: `pb-32 lg:pb-12`,
  close: `duration-700 ease-out hidden transition-all lg:w-24`,
  open: `absolute duration-500 ease-in transition-all w-8/12 z-40 sm:w-5/12 md:w-64`,
  default: `h-screen bg-white dark:bg-[#27272a] border-r dark:border-gray-900/5 top-0 lg:absolute lg:block lg:z-40`,
  smallProfile: `lg:pt-2 lg:pr-2`,
};

export default function SideNavigation({ mobilePosition }) {
  const { open, ref } = useToggle();
  return (
    <aside
      ref={ref}
      className={`${style.default} ${style.mobilePosition[mobilePosition]} ${
        open ? style.open : style.close
      } `}
    >
      <div className={style.container}>
        <div
          className={`flex items-center justify-start ml-4  mb-6 pb-6 pt-10 sticky top-0 z-10 font-bold text-lg md:text-xl text-gray-700 dark:text-white`}
        >
          <img src="./assets/logo.png" className="h-14 mr-2" />
          <h1
            className={`${
              open
                ? " transition-opacity duration-1000 ease-in-out block"
                : "hidden"
            } `}
          >
            Droplet
          </h1>
        </div>
        <SidenavItems />
      </div>
    </aside>
  );
}
