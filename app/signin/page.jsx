"use client";
import Header from "@/components/landingComponents/Header";
import { useState } from "react";
import { useRouter } from "next/navigation";
import UserService from "../../utils/UserServices";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    UserService.login({ email, password })
      .then((res) => {
        alert("Login Successful");
        window.localStorage.setItem(`token`, res.data.token);
        router.push("/home");
      })
      .catch((err) => alert("Something went wrong"));
  };
  return (
    <>
      <Header />
      <div className="flex  justify-center px-4">
        <div className="max-w-md w-full  pt-40">
          {/* Hero */}
          <img
            className="absolute top-16 left-0 z-0 w-full mx-auto object-cover"
            src="./assets/bg.svg"
            alt="cardova"
          />
          <div className="relative overflow-hidden border-2 border-purple-400 shadow-lg rounded-2xl ">
            <div className="py-12 px-4 sm:px-6">
              <div className="mx-auto">
                <h1 className="text-3xl text-gray-800 font-bold md:text-4xl md:leading-tight lg:text-4xl lg:leading-tight">
                  Sign In to
                  <span className="text-purple-900"> Cardova!</span>
                </h1>
                <p className="mt-3 text-base text-gray-500">
                  Create your digital business card and unlock your professional
                  presence.
                </p>
                {/* End Title */}
                <form onSubmit={handleLogin} className="mt-8">
                  <div className="mb-4">
                    <label
                      htmlFor="hs-hero-email-2"
                      className="block text-sm font-medium"
                    >
                      <span className="sr-only">Email address</span>
                    </label>
                    <input
                      type="email"
                      id="email"
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
                      id="hs-hero-password-2"
                      className="py-3 px-4 block w-full border border-purple-200 rounded-md text-sm focus:border-purple-500 focus:ring-purple-500"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="py-3 px-4 w-full bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
                  >
                    Sign In
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
