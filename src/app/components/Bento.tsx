import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { gridItems } from "../types/data";

export function Bento() {
  return (
    <div className="px-5 w-full relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/BG-bento.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(10px)",
        }}
      ></div>
      <section id="about" className="py-20 relative z-10">
        <BentoGrid className="w-full max-w-7xl mx-auto px-4 z-10">
          {gridItems.map((item, _) => (
            <BentoGridItem
              id={item.id}
              key={item.id}
              title={item.title}
              description={item.description}
              className={item.className}
              stack={item.stack}
            />
          ))}
        </BentoGrid>
      </section>
    </div>
  );
}