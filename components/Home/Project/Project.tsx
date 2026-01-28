"use client";


import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Github,
  Globe,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type ProjectType = {
  id: number;
  title: string;
  tech: string[];
  description: string;
  images: string[];
  liveUrl: string;
  githubUrl: string;
};

const projects: ProjectType[] = [
  {
    id: 1,
    title: "Double-Barrel",
    tech: ["React", "Tailwind", "TypeScript", "Redux", "MongoDB","Node.js","Express.js"],
    description:
      "Full-stack e-commerce app with cart, checkout, and admin roles.",
    images: [
      "/Screenshot 2026-01-28 094005.png",
     
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "React + Tailwind Website",
    tech: ["React", "Tailwind CSS"],
    description:
      "Modern responsive web application with clean UI and fast performance.",
    images: [
      "/Screenshot 2026-01-28 094250.png",
      "/Screenshot 2026-01-28 094314.png",
    ],
    liveUrl: "https://website-using-react-xi.vercel.app/",
    githubUrl: "https://github.com/paulsunny90/Website-Using-React",
  },
  {
    id: 3,
    title: "Contact Management Application",
    tech: ["HTML","CSS","JavaScript","Node.js","Express.js"],
    description:
      "web application is a full-featured Contact Management System.",
    images: [
      "/Screenshot 2026-01-28 103416.png",
      "/Screenshot 2026-01-28 103507.png",
    ],
    liveUrl: "https://manage-dashboard-seven.vercel.app/",
    githubUrl: "https://github.com/paulsunny90/Contact-Management-App",
  },
  {
    id: 3,
    title: "weather-app",
    tech: ["HTML","Tailwind CSS","JavaScript","API"],
    description:
      " A responsive weather application .",
    images: [
      "/Screenshot 2026-01-28 103609 copy.png",
    ],
    liveUrl: "https://weather-delta-steel.vercel.app/",
    githubUrl: "https://github.com/paulsunny90/weather-app",
  },
];

const CARD_WIDTH = 420;

/* ================= CARD ================= */

const ProjectCard = ({ project }: { project: ProjectType }) => {
  const [index, setIndex] = useState(0);
  const total = project.images.length;

  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="w-full  max-w-md sm:max-w-sm md:max-w-md lg:max-w-lg rounded-2xl border border-zinc-800 bg-zinc-950/80 shadow-xl backdrop-blur mx-auto"
    >
      {/* Image Carousel */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
        className="relative h-48 sm:h-40 w-full overflow-hidden rounded-t-2xl border-b border-zinc-800"
      >
        <Image
          src={project.images[index]}
          alt={project.title}
          fill
          className="object-cover"
        />

        {total > 1 && (
          <>
            <button
              onClick={() => setIndex((prev) => (prev - 1 + total) % total)}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 sm:p-1 text-white hover:bg-black"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => setIndex((prev) => (prev + 1) % total)}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 sm:p-1 text-white hover:bg-black"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </motion.div>

      {/* Content */}
      <div className="p-5 sm:p-4">
        <h3 className="text-lg sm:text-base font-semibold text-white">
          {project.title}
        </h3>

        <p className="mt-2 text-sm sm:text-xs text-zinc-400">
          {project.description}
        </p>

        <ul className="mt-3 flex flex-wrap gap-2 text-[10px] sm:text-[9px]">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-zinc-700 bg-zinc-900 px-2 py-0.5 sm:px-1 sm:py-0 text-zinc-300"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-3 text-sm sm:text-xs">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-zinc-700 px-3 py-1 text-zinc-300 transition hover:border-zinc-400 hover:text-white"
          >
            <Globe size={16} />
            Live
            <ExternalLink size={12} />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-zinc-400 transition hover:text-white"
          >
            <Github size={16} />
            Code
          </a>
        </div>
      </div>
    </motion.article>
  );
};

/* ================= SECTION ================= */

const Project = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const slide = (dir: "left" | "right") => {
    sliderRef.current?.scrollBy({
      left: dir === "left" ? -CARD_WIDTH : CARD_WIDTH,
      behavior: "smooth",
    });
  };

  return (
    <section id="project" className="bg-black px-4 py-20">
      <div className="mx-auto max-w-7xl relative">
        {/* Title */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-white">
            Projects
          </h2>
          <p className="mt-3 text-zinc-400">
            Interactive, animated & modern work
          </p>
        </motion.header>

        {/* Slider */}
        <div className="relative">
          <button
            onClick={() => slide("left")}
            className="absolute -left-5 top-1/2 z-10 -translate-y-1/2 rounded-full bg-zinc-900 p-2 text-white hover:bg-zinc-800"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={() => slide("right")}
            className="absolute -right-5 top-1/2 z-10 -translate-y-1/2 rounded-full bg-zinc-900 p-2 text-white hover:bg-zinc-800"
          >
            <ChevronRight size={22} />
          </button>

          <motion.div
            ref={sliderRef}
            className="flex gap-6 overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Project;
