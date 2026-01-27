"use client";
import React, { useState } from "react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { Moon, Sun } from "lucide-react";
import Navbar from "../Home/NavBar/Navbar";

export default function BackgroundRippleEffectDemo() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div
      className={`relative flex h-5xl min-h-screen w-full flex-col items-start justify-start overflow-hidden transition-colors duration-300 ${isDark ? "bg-black" : "bg-white"
        }`}
    >
      <Navbar/>
      
      <button
        onClick={() => setIsDark(!isDark)}
        className={` absolute right-10 top-4 z-20  rounded-full p-3 transition-colors duration-00 ${isDark
          ? "bg-neutral-800 text-neutral-100 hover:bg-neutral-700"
          : "bg-neutral-200 text-neutral-800 hover:bg-neutral-300"
          }`}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </button>
      <BackgroundRippleEffect isDark={isDark}  />
      <div className="mt-60 w-full">
        <h2
          className={`relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold md:text-4xl lg:text-7xl transition-colors duration-300 ${isDark ? "text-neutral-100" : "text-neutral-800"
            }`}
        >
          Paul Sunny
        </h2>
        <h4 className={`relative z-10 mx-auto  text-center text-2xl font-bold   transition-colors duration-300 ${isDark ? "text-neutral-100" : "text-neutral-800"
          }`}>MERN STACK DEVELOPER</h4>
        <p
          className={`relative z-10 mx-auto mt-4 max-w-xl text-center transition-colors duration-300 ${isDark ? "text-neutral-400" : "text-neutral-600"
            }`}
        >
          Full Stack MERN Developer with hands-on experience in building scalable e-commerce and web applications using
          React.js, Redux Toolkit, Node.js, Express.js, and MongoDB. Skilled in RESTful API development, JWT authentication,
          role-based access control, and responsive UI design.
        </p>
      </div>
    </div>
  );
}