import React, { useContext } from "react";
import Link from "next/link";
import { MdLogout } from "react-icons/md";
import { UserContext } from "../../../utils/Context/UserContext";
import swal from "sweetalert2";
import { toast } from "react-toastify";
import { useToggle } from "../provider/context";
import { usePathname, useRouter } from "next/navigation";
import data from "./data";

const style = {
  title: "mx-4 text-sm",
  active: "bg-[#e5e7eb] rounded-full",
  link: "flex items-center justify-start my-1 p-3 w-full",
  close:
    "lg:duration-700 lg:ease-out lg:invisible lg:opacity-0 lg:transition-all",
  open: "lg:duration-500 lg:ease-in lg:h-auto lg:opacity-100 lg:transition-all lg:w-auto",
  activeDiv:
    "dark:bg-white bg-gray-700 text-white dark:text-[#111827] rounded-2xl",
  logoutButton:
    "flex items-center cursor-pointer justify-start my-1 p-3  bg-red-500 w-full bottom-20 absolute",
  icon: "mr-2 text-gray-700 dark:text-gray-100",
  iconActive: "mr-2 text-white dark:text-[#111827]",
  iconClose: "mr-2 text-red-500",
};

export default function SidenavItems() {
  const { open } = useToggle();
  const pathname = usePathname();
  const router = useRouter();
  const { user, loading, error, logout } = useContext(UserContext);

  const handleLogout = () => {
    swal
      .fire({
        text: "Are you sure you want to logout?",
        showCancelButton: true,
        cancelButtonColor: "#7e22ce",
        confirmButtonColor: "#ef4444",
        confirmButtonText: "Log Out",
        position: "top",
      })
      .then((result) => {
        if (result.isConfirmed) {
          logout();
          router.push("/");
          toast.success("Logged out successfully", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
  };

  return (
    <>
      <ul className="md:p-2">
        {data.map((item) => (
          <li key={item.title}>
            <div
              className={`${
                item.link === pathname ? style.activeDiv : ""
              } mr-2`}
            >
              <Link href={item.link} className={`${style.link}`}>
                <div
                  className={`p-2 ${
                    item.link === pathname ? style.iconActive : style.icon
                  }`}
                >
                  <span>{item.icon}</span>
                </div>
                <span
                  className={`${style.title} ${
                    open ? style.open : style.close
                  } ${item.link === pathname ? style.iconActive : style.icon}`}
                >
                  {item.title}
                </span>
              </Link>
            </div>
          </li>
        ))}
      </ul>

      {/* Logout Button */}
      {open ? (
        <div onClick={handleLogout} className={`${style.logoutButton}`}>
          <button
            className={`p-1 flex gap-6 ${style.title} ${
              open ? style.open : style.close
            }`}
          >
            <MdLogout
              size={20}
              className={open ? style.icon : `${style.icon} ${style.iconClose}`}
            />
            <span className="">Logout</span>
          </button>
        </div>
      ) : (
        <div
          onClick={handleLogout}
          className="flex items-center text-red-500 cursor-pointer justify-center py-4 font-bold"
        >
          <div className="fixed bottom-20">
            <MdLogout size={20}  />
          </div>
        </div>
      )}
    </>
  );
}
