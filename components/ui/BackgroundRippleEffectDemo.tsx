"use client";
import React, { useState } from "react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { Moon, Sun } from "lucide-react";

export default function BackgroundRippleEffectDemo() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div
      className={`relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      <button
        onClick={() => setIsDark(!isDark)}
        className={`absolute right-4 top-4 z-20 rounded-full p-3 transition-colors duration-300 ${
          isDark
            ? "bg-neutral-800 text-neutral-100 hover:bg-neutral-700"
            : "bg-neutral-200 text-neutral-800 hover:bg-neutral-300"
        }`}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </button>
      <BackgroundRippleEffect isDark={isDark} />
      <div className="mt-60 w-full">
        <h2
          className={`relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold md:text-4xl lg:text-7xl transition-colors duration-300 ${
            isDark ? "text-neutral-100" : "text-neutral-800"
          }`}
        >
          Interactive Background Boxes Ripple Effect
        </h2>
        <p
          className={`relative z-10 mx-auto mt-4 max-w-xl text-center transition-colors duration-300 ${
            isDark ? "text-neutral-400" : "text-neutral-600"
          }`}
        >
          Hover over the boxes above and click. To be used on backgrounds of hero
          sections OR Call to Action sections. I beg you don&apos;t use it
          everywhere.
        </p>
      </div>
    </div>
  );
}