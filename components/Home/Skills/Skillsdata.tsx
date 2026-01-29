"use client";

import React, { useState } from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  const [isDark] = useState(true);

  return (
    <section
      id="Skills"
      className={`
        w-full
        ${isDark ? "bg-black text-white" : "bg-white text-black"}
        px-4 sm:px-6 md:px-10
        py-12 sm:py-16 md:py-20
      `}
    >
      <div className="mx-auto max-w-7xl text-center">
        {/* Heading */}
        <h1
          className="
            mb-4
            text-2xl sm:text-3xl md:text-4xl
            font-bold tracking-widest
          "
        >
          SKILLS
        </h1>

   

        {/* Skill Cards */}
        <HoverEffect items={projects} />
      </div>
    </section>
  );
}

export const projects = [
  {
    title: "Programming Languages",
    image: "https://nixrajput.com/skills/javascript.svg",
    image1: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    description:
      "Core programming languages including JavaScript, TypeScript essential for web and software development.",
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
      "Technologies for building interactive and responsive user interfaces, including React, Next.js, HTML, CSS, and Redux.",
    link: "#",
  },
  {
    title: "Backend Development",
    image: "https://nixrajput.com/skills/nodejs.svg",
    image1: "https://nixrajput.com/skills/express.svg",
    description:
      "Server-side development with Node.js and Express for building scalable and efficient web applications.",
    link: "#",
  },
  {
    title: "Database Management",
    image: "https://nixrajput.com/skills/mongodb.svg",
    image1: "",
    image2: "",
    description:
      "Database solutions like MongoDB for storing, retrieving, and managing application data efficiently.",
    link: "#",
  },
  {
    title: "Git",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    image1: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    description:
      "Version control tools Git and GitHub for managing code changes, collaboration, and project history.",
    link: "#",
  },
  {
    title: "Figma",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    image1: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
    description:
      "Design and prototyping tools Figma and Photoshop for creating user interfaces, graphics, and visual assets.",
    link: "#",
  },
];
