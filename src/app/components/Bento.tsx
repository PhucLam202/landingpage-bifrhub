"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { gridItems } from "../types/data";

export function Bento() {
  return (
    <div className="relative w-full px-4 py-20 z-10">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#1a0826] to-[#181024]" />

      {/* Optional Grid Background */}
      <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] opacity-10" />

      {/* Bento Grid */}
      <section id="features" className="relative z-10 max-w-7xl mx-auto">
        <BentoGrid>
          {gridItems.map((item) => (
            <BentoGridItem
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              icon={item.icon}
              className={item.className}
            />
          ))}
        </BentoGrid>
      </section>
    </div>
  );
}
