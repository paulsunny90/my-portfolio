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
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-6 py-10", className)}>
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
                <div className="flex flex-wrap justify-center gap-4 mb-4">
                  {images.map((img, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center text-[11px] 
                                 text-zinc-700 dark:text-zinc-300"
                    >
                      <div
                        className="p-2 rounded-xl 
                                   bg-zinc-100 dark:bg-zinc-900
                                   group-hover:scale-110 transition"
                      >
                        <Image
                          src={img}
                          alt={getImageName(img)}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      <span className="mt-1">{getImageName(img)}</span>
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
        "relative z-20 rounded-2xl p-4 h-full transition-colors",
        "bg-white dark:bg-black",
        "border border-zinc-200 dark:border-white/10",
        "group-hover:border-zinc-400 dark:group-hover:border-zinc-600",
        className
      )}
    >
      <div className="relative z-50 p-4">{children}</div>
    </div>
  );
};

export const CardTitle = ({
  
  className,
  children,
}: 
{
  className?: string;
  children: React.ReactNode;
})=> {
  const [isDark, setIsDark] = useState(true);
  
  return (
    <h4
      className={cn(
        `mt-4 font-bold tracking-wide text-zinc-900 dark:text-zinc-100  ${isDark ? "text-neutral-100" : "text-neutral-800"
          }`)}
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
        "mt-4 text-sm leading-relaxed",
        "text-zinc-600 dark:text-zinc-400",
        className
      )}
    >
      {children}
    </p>
  );
};