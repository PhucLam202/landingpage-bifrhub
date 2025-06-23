import { cn } from "@/app/lib/utils";
import React from "react";
import { ColourfulText } from "@/app/components/ui/colourful-text";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";
import MagicButton from "@/app/components/ui/magicButton";
import { FaRocket, FaUser, FaCode } from "react-icons/fa";
import Image from "next/image";

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
      <div className="relative z-10 flex items-center">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-8">
                {/* Portfolio Badge */}
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
                  <span className="text-emerald-400 text-sm font-medium">
                    ✨ My Portfolio
                  </span>
                </div>

                {/* Main Heading */}
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                    <span className="bg-gradient-to-b from-neutral-200 to-neutral-400 bg-clip-text text-transparent">
                      Hi, I'm{" "}
                    </span>
                    <ColourfulText text="PhucLam" />
                  </h1>

                  <div className="h-2 w-24 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full"></div>
                </div>

                {/* Description */}
                <div className="max-w-2xl">
                  <TextGenerateEffect
                    className="text-xl lg:text-2xl bg-gradient-to-b from-neutral-300 to-neutral-500 bg-clip-text text-transparent leading-relaxed"
                    words="I'm a full-stack developer with 1+ years of experience in building fast, secure, and scalable web applications using Rust, TypeScript, and modern frameworks like Next.js."
                  />
                </div>

                {/* Stats */}
                <div className="flex flex-wrap gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-400">
                      1.5+
                    </div>
                    <div className="text-sm text-gray-400">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-400">
                      5+
                    </div>
                    <div className="text-sm text-gray-400">
                      Projects Completed
                    </div>
                  </div>
                  {/* <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-400">
                      100%
                    </div>
                    <div className="text-sm text-gray-400">
                      Client Satisfaction
                    </div>
                  </div> */}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <MagicButton
                    title="View My Projects"
                    icon={<FaRocket />}
                    position="right"
                    href="#projects"
                    otherClasses="py-3"
                  />
                  <MagicButton
                    title="About Me"
                    icon={<FaUser />}
                    position="right"
                    href="#about"
                    otherClasses="pr-3"
                  />
                </div>
              </div>

              {/* Right Column - Visual Content */}
              <div className="relative flex items-center justify-center">
                {/* Main Circle */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  {/* Outer Ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-emerald-400/30 animate-spin-slow"></div>

                  {/* Middle Ring */}
                  <div className="absolute inset-4 rounded-full border border-emerald-400/20 animate-pulse"></div>

                  {/* Inner Circle */}
                  <div className="absolute inset-8 rounded-full bg-gradient-to-br from-emerald-400/20 to-green-600/20 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <Image
                        src="/avatar.jpg"
                        alt="Your Profile Picture"
                        width={300}
                        height={300}
                        className="mx-auto rounded-full"
                      />
                      <div className="text-emerald-400 font-bold lg:text-4xl md:text-xl ">
                        Full-Stack
                      </div>
                      <div className="text-gray-300 text-sm">Developer</div>
                    </div>
                  </div>
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-200/40 rounded-full border border-emerald-400/30 flex items-center justify-center animate-bounce">
                    <span className="text-blue-400 font-bold">TS</span>
                  </div>

                  <div
                    className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-200/50 rounded-full border border-green-400/30 flex items-center justify-center animate-bounce"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <span className="text-orange-400 font-bold">Rust</span>
                  </div>

                  <div
                    className="absolute top-1/2 -left-8 w-12 h-12 bg-yellow-400/30 rounded-full border border-teal-400/30 flex items-center justify-center animate-bounce"
                    style={{ animationDelay: "1s" }}
                  >
                    <span className="text-yellow-400 text-sm font-bold">
                      JS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    </div>
    
  );
}
