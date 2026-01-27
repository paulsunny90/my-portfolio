"use client";
import React, { useState } from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect"


export function CardHoverEffectDemo() {
    const [isDark, setIsDark] = useState(true);
  return (
    <div className={`p-20 text-center ${isDark ? "bg-black " : " bg-white"
        }`}>
          <h1 className="` text-3xl font-bold tracking-wide text-zinc-900 dark:text-zinc-100">SKIILES</h1>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Programming Languages",
    image: "https://nixrajput.com/skills/javascript.svg",
    image1: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    description:
      "JavaScript, TypeScript, Python, and more programming languages for modern web development.",
    link: "#",
  },
  {
    title: "Frontend Development",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    image1: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    image2: "https://nixrajput.com/skills/html.svg",
    image3: "https://nixrajput.com/skills/css.svg",
    image4: "https://nixrajput.com/skills/redux.svg",
    description:
      "A JavaScript library for building user interfaces with component-based architecture.",
    link: "#",
  },
  {
    title: "Backend Development",
    image: "https://nixrajput.com/skills/nodejs.svg",
    image1: "https://nixrajput.com/skills/express.svg",
    description:
      "A React framework for production with server-side rendering and static site generation.",
    link: "#",
  },
  {
    title: "Database Management",
    image: "https://nixrajput.com/skills/mongodb.svg",
    image1: "",
    image2: "",
    description:
      "A JavaScript runtime built on Chrome's V8 JavaScript engine for server-side development.",
    link: "#",
  },
  {
    title: "Git",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    image1: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    description:
      "A distributed version control system for tracking changes in source code during software development.",
    link: "#",
  },
  {
    title: "Figma",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    image1: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
    description:
      "A vector graphics editor and prototyping tool which is primarily web-based.",
    link: "#",
  },
];