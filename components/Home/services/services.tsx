"use client";

import React, { useState } from "react";
import {
  Code,
  Globe,
  Database,
  Palette,
  Zap,
  ShieldCheck,
} from "lucide-react";

const Services = () => {
  const [isDark] = useState(true);

  const servicesData = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description:
        "Custom web applications built with React, Next.js, and Node.js. Responsive, fast, and scalable solutions.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Authentication & Security",
      description:
        "Secure login and signup systems using JWT authentication with role-based access control. Protected routes ensure user data safety.",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      description:
        "Robust server-side solutions with RESTful APIs, database design, and secure scalable architecture.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI Design",
      description:
        "Clean, modern, and intuitive user interfaces focused on usability and user experience.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Full Stack Solutions",
      description:
        "End-to-end MERN stack development from frontend to backend for complete applications.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description:
        "Improve speed and performance with optimized code, best practices, and efficient workflows.",
    },
  ];

  return (
    <section
      className={`min-h-screen py-20 px-4 ${
        isDark ? "bg-black " : "bg-white"
      }`}
    >
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-zinc-100">
            SERVICES
          </h1>
          <p className="mt-4 text-zinc-400">
            What I can do for you
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, idx) => (
            <div
              key={idx}
              className="group relative p-6 rounded-2xl border border-zinc-800 bg-neutral-900 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:bg-neutral-800"
            >
              <div className="mb-4 text-blue-400">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold text-zinc-100 mb-3">
                {service.title}
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
