import data from "./data";
import { useToggle } from "../provider/context";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { MdLogout } from "react-icons/md";
import React, { useContext } from "react";
import { UserContext } from "../../../utils/Context/UserContext";
import swal from "sweetalert2";
import { toast } from "react-toastify";
const style = {
  title: "mx-4 text-sm",
  active: "bg-[#e5e7eb] rounded-full",
  link: "flex items-center justify-start my-1 p-3 w-full",
  close:
    "lg:duration-700 lg:ease-out lg:invisible lg:opacity-0 lg:transition-all",
  open: "lg:duration-500 lg:ease-in lg:h-auto lg:opacity-100 lg:transition-all lg:w-auto",
  activeDiv: "bg-white text-[#111827] rounded-3xl",
  logoutButton:
    "flex items-center cursor-pointer justify-start my-1 p-3 bg-red-300   w-full bottom-20 absolute",
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
        cancelButtonColor: "#008080",
        confirmButtonColor: "#7e22ce",
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
                    item.link === pathname ? "text-[#111827]" : "text-white"
                  }`}
                >
                  <span>{item.icon}</span>
                </div>
                <span
                  className={`${style.title} ${
                    open ? style.open : style.close
                  } ${
                    item.link === pathname ? "text-[#111827]" : "text-white"
                  }`}
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
        <div className={`${style.logoutButton}`}>
          <button
            className={`p-1 flex gap-6 ${style.title} ${
              open ? style.open : style.close
            }`}
            onClick={handleLogout}
          >
            <MdLogout size={20} />
            <span className="">Logout</span>
          </button>
        </div>
      ) : (
        <div
          onClick={handleLogout}
          className="flex items-center text-red-300 cursor-pointer  justify-center py-4 font-bold"
        >
          <div className=" fixed bottom-20">
            <MdLogout size={20} />
          </div>
        </div>
      )}
    </>
  );
}
