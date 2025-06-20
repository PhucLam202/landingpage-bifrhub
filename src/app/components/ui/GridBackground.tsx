import { cn } from "@/app/lib/utils";
import React from "react";
import { ColourfulText } from "@/app/components/ui/colourful-text";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import MagicButton from "@/app/components/ui/magicButton";
import { FaLocationArrow } from "react-icons/fa";
export function GridBackground() {
  return (
    <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-black dark:bg-emerald-950">
      <div
        className={cn(
          "absolute inset-2",
          "[background-size:100px_100px]",
          "[background-image:linear-gradient(to_right,rgba(180,255,180,0.25)_2px,transparent_2px),linear-gradient(to_bottom,rgba(180,255,180,0.25)_2px,transparent_2px)]",
          "dark:[background-image:linear-gradient(to_right,rgba(100,255,100,0.3)_2px,transparent_2px),linear-gradient(to_bottom,rgba(100,255,100,0.3)_2px,transparent_2px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      <div className="">
        <p className="relative z-20 bg-gradient-to-b from-green-200 to-neutral-500 bg-clip-text py-8 text-m font-bold text-transparent sm:text-sm">
          My portpolio <br />
        </p>
        <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-1 text-4xl font-bold text-transparent sm:text-7xl">
          Hi i'm <ColourfulText text="PhucLam" /> <br />
        </p>
        <div className="relative z-10 max-w-3xl mx-auto text-lelf bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-5 text-xl font-bold text-transparent sm:text-xl">
          <TextGenerateEffect
            className=""
            words="I'm a full-stack developer with 3+ years of experience in building fast, secure, and scalable web applications using Rust, TypeScript, and modern frameworks like Next.js."
          />
        </div>
        <div className="flex justify-center at-4">
          <a href="#about">
            <MagicButton
              title="Show my project"
              icon={<FaLocationArrow />}
              position="righ"
              otherClasses="py-2"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
