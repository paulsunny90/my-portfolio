"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Image from "next/image";

const getImageName = (src: string) => {
  const name = src.split("/").pop()?.split(".")[0] ?? "";
  return name
    .replace(/-original|-plain|-logo/g, "")
    .replace(/_/g, " ")
    .toUpperCase();
};

export const HoverEffect = ({
  items = [],
  className,
}: {
  items?: {
    title: string;
    image?: string;
    image1?: string;
    image2?: string;
    image3?: string;
    image4?: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (!items.length) return null;

  return (
    <div
      className={cn(
        // Responsive grid
        "grid gap-4 py-10 px-2",
        "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {items.map((item, idx) => {
        const images = [
          item.image,
          item.image1,
          item.image2,
          item.image3,
          item.image4,
        ].filter(Boolean) as string[];

        return (
          <a
            href={item.link}
            key={idx}
            className="relative group block p-2"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 rounded-3xl bg-neutral-200 dark:bg-slate-800/80"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.5 } }}
                  exit={{ opacity: 0, transition: { duration: 0.15 } }}
                />
              )}
            </AnimatePresence>

            <Card>
              {images.length > 0 && (
  <div
    className="
      grid mb-4 gap-3 sm:gap-4  place-items-center
      grid-cols-3
      sm:grid-cols-4
      md:grid-cols-5
    "
  >
    {images.map((img, i) => (
      <div
        key={i}
        className="flex flex-col items-center text-[10px] sm:text-[11px]
                   text-zinc-700 dark:text-zinc-300"
      >
        <div
          className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-900
                     group-hover:scale-110 transition-transform duration-300"
        >
          <Image
            src={img}
            alt={getImageName(img)}
            width={32}
            height={32}
            className="object-contain sm:h-10 sm:w-10"
          />
        </div>
        <span className="mt-1 text-center">
          {getImageName(img)}
        </span>
      </div>
    ))}
  </div>
)}


              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </a>
        );
      })}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative z-20 rounded-2xl p-3 sm:p-4 h-full transition-colors",
        "bg-white dark:bg-black",
        "border border-zinc-200 dark:border-white/10",
        "group-hover:border-zinc-400 dark:group-hover:border-zinc-600",
        className
      )}
    >
      <div className="relative z-50 p-2 sm:p-4">{children}</div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "mt-4 text-center font-bold tracking-wide text-base sm:text-lg",
        "text-zinc-900 dark:text-zinc-100",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-3 text-center text-xs sm:text-sm leading-relaxed",
        "text-zinc-600 dark:text-zinc-400",
        className
      )}
    >
      {children}
    </p>
  );
};
