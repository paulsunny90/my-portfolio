"use client";
import React, { useState } from "react";
import { Code, Globe, Smartphone, Database, Palette, Zap } from "lucide-react";

const Services = () => {
  const [isDark] = useState(true);

  const servicesData = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description:
        "Custom web applications built with modern frameworks like React, Next.js, and Node.js. Responsive, fast, and scalable solutions.",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description:
        "Cross-platform mobile applications using React Native. Native performance with a single codebase for iOS and Android.",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      description:
        "Robust server-side solutions with RESTful APIs, database design, and cloud integration. Secure and scalable architecture.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description:
        "Beautiful and intuitive user interfaces. User-centered design that enhances user experience and drives engagement.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Full Stack Solutions",
      description:
        "End-to-end development from frontend to backend. Complete MERN stack solutions for your business needs.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description:
        "Speed up your applications with code optimization, caching strategies, and performance monitoring.",
    },
  ];

  return (
    <div
      className={`min-h-screen py-20 px-4 transition-colors duration-300 ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1
            className={`text-4xl md:text-5xl font-bold tracking-wide mb-4 transition-colors duration-300 ${
              isDark ? "text-zinc-100" : "text-zinc-900"
            }`}
          >
            SERVICES
          </h1>
          <p
            className={`text-lg transition-colors duration-300 ${
              isDark ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            What I can do for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, idx) => (
            <div
              key={idx}
              className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:scale-105 cursor-pointer ${
                isDark
                  ? "bg-neutral-900 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800"
                  : "bg-white border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50"
              }`}
            >
              <div
                className={`mb-4 transition-colors duration-300 ${
                  isDark ? "text-blue-400" : "text-blue-600"
                }`}
              >
                {service.icon}
              </div>
              <h3
                className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                  isDark ? "text-zinc-100" : "text-zinc-900"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`text-sm leading-relaxed transition-colors duration-300 ${
                  isDark ? "text-zinc-400" : "text-zinc-600"
                }`}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
