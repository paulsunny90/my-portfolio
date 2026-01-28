"use client";

import React from "react";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#project" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-black/60 backdrop-blur-md border-b border-neutral-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <span className="text-xl font-bold text-white">
          Paul<span className="text-blue-500">Sunny</span>
        </span>

        {/* Links */}
        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.name} className="group relative">
              <Link
                href={item.href}
                className="text-sm font-medium text-neutral-300 transition-colors hover:text-white"
              >
                {item.name}
              </Link>

              {/* Hover underline */}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>

              {/* Glow effect */}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-blue-500 blur-md opacity-0 transition-all duration-300 group-hover:w-full group-hover:opacity-100"></span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
