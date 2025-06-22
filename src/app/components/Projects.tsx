"use client";

import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/app/types/data";
import { PinContainer } from "./ui/pin";

const Projects = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Background - Forest Green Theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(16,46,29,1)] from-0% via-[rgba(39,74,54,1)] via-46% via-[rgba(37,84,60,1)] via-73% to-[rgba(75,92,72,1)] to-100%"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-green-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-teal-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-500"></div>
      </div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 py-20 px-4">
        <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
            A small selection of{" "}
          </span>
          <span className="bg-gradient-to-r from-emerald-300 via-green-400 to-emerald-500 bg-clip-text text-transparent">
            recent projects
          </span>
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 mt-16">
          {projects.map((item) => (
            <div
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
              key={item.id}
            >
              <PinContainer title="View Project" href={item.link}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  {/* Enhanced Background Container */}
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl rounded-2xl">
                    {/* Gradient Background - Forest Green */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-800 via-emerald-700 to-green-900"></div>

                    {/* Animated Grid Pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent animate-pulse"></div>
                      <svg
                        className="w-full h-full"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <pattern
                            id={`smallGrid-${item.id}`}
                            width="20"
                            height="20"
                            patternUnits="userSpaceOnUse"
                          >
                            <path
                              d="M 20 0 L 0 0 0 20"
                              fill="none"
                              stroke="rgba(16, 185, 129, 0.4)"
                              strokeWidth="0.5"
                            />
                          </pattern>
                        </defs>
                        <rect
                          width="100%"
                          height="100%"
                          fill={`url(#smallGrid-${item.id})`}
                        />
                      </svg>
                    </div>

                    {/* Glowing Orbs - Green Theme */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-emerald-300/50 rounded-full blur-sm animate-pulse"></div>
                    <div className="absolute bottom-4 left-4 w-6 h-6 bg-green-300/50 rounded-full blur-sm animate-pulse delay-1000"></div>

                    {/* Tech Stack Floating Elements */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="grid grid-cols-3 gap-4 opacity-30">
                      {item.iconLists.slice(0, 6).map((icon, index) => (
                          <div
                            key={index}
                            className={`w-8 h-8 flex justify-center items-center`}
                            style={{ animationDelay: `${index * 200}ms` }}
                          >
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Project Image with Enhanced Styling */}
                  <div className="z-10 absolute bottom-0 w-full h-full flex items-end justify-center">
                    <div className="w-full h-3/4 bg-gradient-to-t from-green-800/90 to-transparent rounded-t-3xl flex items-end justify-center pb-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-emerald-400/30 to-green-400/30 rounded-2xl border border-emerald-300/20 flex items-center justify-center backdrop-blur-sm">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl opacity-70"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white mb-2">
                  {item.title}
                </h1>
                <p className="lg:text-lg lg:font-normal font-light text-sm line-clamp-2 text-gray-300 mb-6">
                  {item.des}
                </p>

                {/* Bottom Section */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center group cursor-pointer">
                    <p className="flex lg:text-lg md:text-sm text-xs text-emerald-300 group-hover:text-emerald-200 transition-colors">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3 text-emerald-400 group-hover:text-emerald-300 transition-colors group-hover:translate-x-1 duration-300" />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
