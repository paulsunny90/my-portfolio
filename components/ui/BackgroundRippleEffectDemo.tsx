"use client";

import React from "react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import Navbar from "../Home/NavBar/Navbar";

export default function BackgroundRippleEffectDemo() {
  return (
    <div id="about" className="relative min-h-screen w-full overflow-hidden bg-black">
      <Navbar />

      {/* Background Effect (always dark) */}
      <BackgroundRippleEffect isDark />

      {/* Hero Content */}
      <div className="relative z-10 mt-40 md:mt-60 w-full px-4 text-center">
        <h2 className="mx-auto max-w-4xl text-3xl font-bold text-neutral-100 md:text-5xl lg:text-7xl">
          Paul Sunny
        </h2>

        <h4 className="mt-3 text-xl font-semibold tracking-wide text-neutral-300">
          MERN STACK DEVELOPER
        </h4>

        <p className="mx-auto mt-6 max-w-xl text-sm md:text-base leading-relaxed text-neutral-400">
          Full Stack MERN Developer with hands-on experience in building scalable
          e-commerce and web applications using React.js, Redux Toolkit,
          Node.js, Express.js, and MongoDB. Skilled in RESTful API development,
          JWT authentication, role-based access control, and responsive UI
          design.
        </p>
      </div>
    </div>
  );
}
