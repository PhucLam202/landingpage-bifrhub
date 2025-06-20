import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { GridBackground } from "@/app/components/ui/GridBackground";

const Hero = () => {
  return (
    <div>
      <div
        className="overflow-hidden"
        style={{ minHeight: "100vh" }}
      >
        <Spotlight
          className=" absolute  top-28 left-80 h-[80vh] w-[50vh]"
          fill="#34eb98"
        />
        <Spotlight
          className="-top-20 left-80 h-[100vh] w-[20vh]"
          fill="green"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vh]"
          fill="white"
        />
        <Spotlight className="top-10 left-50 h-[80vh]" fill="white" />
        <Spotlight
          className="-top-48 -left-10 md:=left-32 md:-top-20 h-screen"
          fill="red"
        />
        <Spotlight
          className="-top-60 -left-20 md:=left-22 md:-top-30 h-screen"
          fill="green"
        />
        <GridBackground />

      </div>
    </div>
  );
};

export default Hero;
