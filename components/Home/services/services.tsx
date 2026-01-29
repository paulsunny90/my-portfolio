"use client";
import MagicBento from "@/components/ui/MagicBento"
import React, { useState } from "react";


const Services = () => {
  const [isDark] = useState(true);
  return (
    <section id="services"
      className={`min-h-screen py-20 px-4 ${
        isDark ? "bg-black " : "bg-white"
      }`}
    > 
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-zinc-100">
            SERVICES
          </h1>
          <p className="mt-4 text-zinc-400">
            What I can do for you
            
          </p>
          {/* Grid */}
        <MagicBento/>
        </div>
    </section>
  );
};

export default Services;
