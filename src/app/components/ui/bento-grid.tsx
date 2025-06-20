"use client";

import { cn } from "@/app/lib/utils";
import { useState } from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 w-full",
        className
      )}
    >
      {children}
    </div>
  );
};
const rightLists = ["VueJS", "NuxtJS", "GraphQL"];

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  header,
  icon,
  stack,
  timeZones,
}: {
  id: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  stack?: string[];
  timeZones?: string[];
}) => {
  const [copiedText, setCopiedText] = useState("");
  const rightLists = ["VueJS", "NuxtJS", "GraphQL", "MongoDB"];
  const leftLists = ["ReactJS", "Typescript", "NodeJS", "Rust","Move"];

  const handleCopy = () => {
    navigator.clipboard.writeText("your-email@example.com");
    setCopiedText("Email copied!");
    setTimeout(() => setCopiedText(""), 2000);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background:
          "linear-gradient(135deg, #0a0f0d 0%, #1a2f23 50%, #2d4a35 100%)",
      }}
    >
      {id === 1 && (
        <div className="relative flex flex-col md:flex-row h-full p-6 justify-between items-center">
          {/* Left text: My tech stack */}
          <div className="text-left w-full md:w-1/2 lg:w-2/5 flex flex-col justify-center z-10">
            <h1 className="text-lg md:text-xl lg:text-2xl font-light text-neutral-400 mb-2">
              I constantly try to improve
            </h1>
            <h1 className="text-3xl md:text-3xl lg:text-6xl font-extrabold text-white leading-tight relative z-20">
              My tech
              <br />
              stack
            </h1>
          </div>

          {/* Right: tech stack bubbles */}
          <div className="absolute right-0 top-10 md:top-0 w-full md:w-3/5 lg:w-1/2 flex justify-end items-center z-0 pr-4">
            <div className="flex gap-6">
              {/* Left column */}
              <div className="flex flex-col gap-10 overflow-hidden">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="p-7 text-lg lg:text-xl font-medium text-white bg-[#10132E] rounded-xl "
                  >
                    {item}
                  </span>
                ))}
              </div>
              {/* Right column */}
              <div className="flex flex-col gap-10 overflow-hidden mt-15">
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="p-7 text-lg lg:text-xl font-medium text-white bg-[#10132E] rounded-xl "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Client Collaboration Item */}
      {id === 2 && (
        <div className="flex flex-col h-full p-6">
          <div className="flex-1 flex items-center justify-center">
            <div className="relative">
              {/* Laptop illustration */}
              <div className="w-40 h-24 bg-gray-800 rounded-lg border-2 border-gray-600 relative overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-900 to-blue-600 rounded-md flex items-center justify-center">
                  <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full"></div>
              </div>

              {/* Communication lines */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-green-300 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-bold text-white leading-tight">
              {title}
            </h3>
          </div>
        </div>
      )}

      {/* Time Zone Communications Item */}
      {id === 3 && (
        <div className="flex flex-col h-full p-6">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-white leading-tight">
              {title}
            </h3>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            {/* World map dots representation */}
            <div className="relative mb-6">
              <div className="grid grid-cols-4 gap-2 opacity-20">
                {[...Array(16)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-gray-400 rounded-full"
                  ></div>
                ))}
              </div>

              {/* Active timezone indicators */}
              <div className="absolute inset-0">
                <div className="absolute top-2 left-4 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 right-6 w-3 h-3 bg-green-400 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-6 right-2 w-3 h-3 bg-green-400 rounded-full animate-pulse delay-500"></div>
              </div>
            </div>

            {/* Time zone tags */}
            <div className="flex flex-wrap gap-2">
              {timeZones?.slice(0, 6).map((zone, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-green-500/20 text-green-300 rounded-md text-xs border border-green-500/30"
                >
                  {zone}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Default content for other items */}
      {id > 3 && (
        <>
          {header}
          <div className="transition duration-200 group-hover/bento:translate-x-2 p-6">
            {icon}
            <div className="mt-2 mb-2 font-sans font-bold text-neutral-200">
              {title}
            </div>
            <div className="font-sans text-xs font-normal text-neutral-300">
              {description}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
