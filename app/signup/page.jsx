"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Header from "@/components/landingComponents/Header";
import UserService from "../../utils/UserServices";

export default function Signup() {
  const router = useRouter();
  const [firstName, setFname] = useState("");
  const [lastName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [message, setMessage] = useState("");
  const handleRegister = (e) => {
    UserService.register({ email, password, firstName, lastName, phoneNumber })
      .then((res) => {
        alert("SignUp Successfull");
        router.push("/");
      })
      .catch((err) => alert("Something went wrong"));
  };
  useEffect(() => {
    if (password && confirmpassword && password !== confirmpassword) {
      setMessage("Incorrect Password");
      return;
    }
    if (password && confirmpassword && password === confirmpassword) {
      setMessage("");
      return;
    }
    setMessage("");
  }, [confirmpassword, password]);

  const messageColor = message === "Password Matched" ? "teal" : "red";
  return (
    <>
      <Header />
      <div className="flex  justify-center px-4">
        <div className="max-w-md w-full  pt-40">
          {/* Hero */}
          <Image
            height={500}
            width={500}
            className="absolute top-16 left-0 z-0 w-full mx-auto object-cover"
            src="/assets/bg.svg"
            alt="cardova"
          />
          <div className="relative overflow-hidden border-2 border-gray-400 shadow-lg rounded-2xl ">
            <div className="py-12 px-4 sm:px-6">
              <div className="mx-auto">
                {/* Title */}
                <h1 className="text-3xl text-gray-800 font-bold md:text-4xl md:leading-tight lg:text-4xl lg:leading-tight">
                  Sign Up to
                  <span className="text-purple-900"> Cardova!</span>
                </h1>
                <p className="mt-3 text-base text-gray-500">
                  Create your digital business card and unlock your professional
                  presence.
                </p>
                {/* End Title */}
                <form className="mt-8">
                  <div className=" flex gap-2">
                    <div className="mb-4">
                      <label
                        htmlFor="hs-hero-name-2"
                        className="block text-sm font-medium"
                      >
                        <span className="sr-only">Full name</span>
                      </label>
                      <input
                        type="text"
                        id="hs-hero-name-2"
                        className="py-3 px-4 block w-full  border border-purple-200 rounded-md text-sm focus:border-purple-500 focus:ring-purple-500"
                        placeholder="First name"
                        onChange={(e) => setFname(e.target.value)}
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="hs-hero-name-2"
                        className="block text-sm font-medium"
                      >
                        <span className="sr-only">Last name</span>
                      </label>
                      <input
                        type="text"
                        id="hs-hero-name-2"
                        className="py-3 px-4 block w-full border border-purple-200 rounded-md text-sm focus:border-purple-500 focus:ring-purple-500"
                        placeholder="Last name"
                        onChange={(e) => setLname(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="hs-hero-email-2"
                      className="block text-sm font-medium"
                    >
                      <span className="sr-only">Email address</span>
                    </label>
                    <input
                      type="email"
                      id="hs-hero-email-2"
                      className="py-3 px-4 block w-full border border-purple-200 rounded-md text-sm focus:border-purple-500 focus:ring-purple-500"
                      placeholder="Email address"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="hs-hero-password-2"
                      className="block text-sm font-medium"
                    >
                      <span className="sr-only">Password</span>
                    </label>
                    <input
                      type="password"
                      className="py-3 px-4 block w-full border border-purple-200 rounded-md text-sm focus:border-purple-500 focus:ring-purple-500"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="hs-hero-password-2"
                      className="block text-sm font-medium"
                    >
                      <span className="sr-only">Confirm Password</span>
                    </label>
                    <input
                      type="password"
                      className="py-3 px-4 block w-full border border-purple-200 rounded-md text-sm focus:border-purple-500 focus:ring-purple-500"
                      placeholder="Confirm Password"
                      onChange={(e) => setConfirmpassword(e.target.value)}
                    />
                  </div>
                  <div style={{ color: messageColor }}>{message}</div>
                  <button
                    type="submit"
                    className="py-3 px-4 w-full bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all text-sm"
                  >
                    Sign up
                  </button>
                </form>
                {/* End Form */}
              </div>
            </div>
          </div>
          {/* End Hero */}
        </div>
      </div>
    </>
  );
}
