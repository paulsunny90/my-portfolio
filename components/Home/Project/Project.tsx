"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Github,
  Globe,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type ProjectType = {
  title: string;
  tech: string[];
  description: string;
  images: string[];
  liveUrl: string;
  githubUrl: string;
};

const projects: ProjectType[] = [
  {
    title: "E‑Commerce Dashboard",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    description:
      "Admin dashboard for managing products, orders, and users with secure authentication and responsive UI.",
    images: [
      "https://images.pexels.com/photos/6801641/pexels-photo-6801641.jpeg",
      "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "MERN Storefront",
    tech: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB"],
    description:
      "Full‑stack e‑commerce application with cart, checkout, and role‑based access control for admins.",
    images: [
      "https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg",
      "https://images.pexels.com/photos/5632382/pexels-photo-5632382.jpeg",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    description:
      "Modern personal portfolio with smooth animations, dark theme, and responsive layout.",
    images: [
      "https://images.pexels.com/photos/2706379/pexels-photo-2706379.jpeg",
      "https://images.pexels.com/photos/2706378/pexels-photo-2706378.jpeg",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const ProjectCard = ({ project }: { project: ProjectType }) => {
  const [index, setIndex] = useState(0);
  const total = project.images.length || 1;
  const currentImage = project.images[index] ?? project.images[0];

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-zinc-800 bg-neutral-950/70 shadow-[0_0_40px_rgba(0,0,0,0.6)] transition-transform transition-colors duration-300 hover:-translate-y-1 hover:border-zinc-600">
      {/* Image carousel */}
      <div className="relative h-44 w-full overflow-hidden rounded-t-2xl border-b border-zinc-800 bg-zinc-900">
        {currentImage && (
          <Image
            src={currentImage}
            alt={project.title}
            fill
            className="object-cover"
          />
        )}
        {total > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-1 text-zinc-100 hover:bg-black/80"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-1 text-zinc-100 hover:bg-black/80"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <div className="pointer-events-none absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
              {project.images.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 w-1.5 rounded-full ${
                    i === index ? "bg-zinc-100" : "bg-zinc-500"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-zinc-50">
          {project.title}
        </h3>
        <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2 text-[11px] font-medium text-zinc-300">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-full border border-zinc-700 bg-zinc-900/70 px-3 py-1"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center gap-4 text-sm text-zinc-300">
          <a
            href={project.liveUrl}
            className="inline-flex items-center gap-1 rounded-full border border-zinc-700 px-3 py-1 transition-colors hover:border-zinc-400 hover:text-zinc-50"
          >
            <Globe className="h-4 w-4" />
            <span>Live Demo</span>
            <ExternalLink className="h-3 w-3" />
          </a>
          <a
            href={project.githubUrl}
            className="inline-flex items-center gap-1 text-zinc-400 transition-colors hover:text-zinc-100"
          >
            <Github className="h-4 w-4" />
            <span>Code</span>
          </a>
        </div>
      </div>
    </article>
  );
};

const Project = () => {
  return (
    <section className="w-full bg-black py-20 px-4" id="project">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-zinc-100">
            Projects
          </h2>
          <p className="mt-3 text-sm md:text-base text-zinc-400">
            A selection of recent work, focused on full‑stack MERN and modern
            frontend development.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;