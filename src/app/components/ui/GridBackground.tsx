import { cn } from "@/app/lib/utils";
import React from "react";
import { ColourfulText } from "@/app/components/ui/colourful-text";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";
import MagicButton from "@/app/components/ui/magicButton";
import { FaRocket, FaUser, FaCode } from "react-icons/fa";
import Image from "next/image";

export function GridBackground() {
  return (
    <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-white dark:bg-black">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-violet-400 via-violet-700 to-violet-900">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-2xl"></div>
      </div>
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:100px_100px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="relative z-10 flex items-start justify-start w-[90vw] h-[80vh] bg-white/30 rounded-2xl">
        <div className="container mx-auto px-6 lg:px-20 pt-32">
          {/* Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-left mb-4">
            <span className="bg-gradient-to-b from-violet-200 to-violet-400 bg-clip-text text-transparent">
              Hi, I'm{" "}
            </span>
            PhucLam
          </h1>
          {/* Underline gradient */}
          <div className="h-2 w-24 bg-gradient-to-r from-violet-500 to-violet-700 rounded-full mb-8"></div>
          {/* Description */}
          <div className="max-w-2xl mb-8">
            <TextGenerateEffect
              className="text-xl lg:text-2xl bg-gradient-to-b from-violet-300 to-violet-500 bg-clip-text text-transparent leading-relaxed text-left"
              words="I'm a full-stack developer with 1+ years of experience in building fast, secure, and scalable web applications using Rust, TypeScript, and modern frameworks like Next.js."
            />
          </div>
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <MagicButton
              title="View My Projects"
              icon={<FaRocket />}
              position="right"
              href="#projects"
              otherClasses="py-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
