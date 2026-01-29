"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#project" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <span className="text-xl font-bold tracking-wide text-white">
          Paul<span className="text-blue-500">Sunny</span>
        </span>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.name} className="group relative">
              <Link
                href={item.href}
                className="text-sm font-medium text-neutral-300 transition hover:text-white"
              >
                {item.name}
              </Link>

              {/* Underline */}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-blue-500 blur-md opacity-0 transition-all duration-300 group-hover:w-full group-hover:opacity-100" />
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-neutral-300 hover:text-white md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden">
          <ul className="flex flex-col gap-4 border-t border-white/10 bg-black/90 px-6 py-6 backdrop-blur-xl">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-medium text-neutral-300 transition hover:text-white"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
