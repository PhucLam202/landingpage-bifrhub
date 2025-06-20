import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { gridItems  } from "../types/data";

const Bento = () => {
  return (
    <div className="w-full bg-linear-to-r frombg-green-950 to-cyan-950">
      <section id="about" className="py-20">
        <BentoGrid className="w-full max-w-7xl mx-auto px-4">
          {gridItems.map((item, i) => (
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
};
export default Bento;
