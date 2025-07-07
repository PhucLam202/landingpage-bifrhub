import { cn } from "@/app/lib/utils";
import React from "react";

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
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[minmax(180px,_auto)] gap-6 p-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  icon,
}: {
  id: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group flex flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-br from-[#0f0f1a] via-[#1f1f2e] to-[#000] p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_#9333ea66]",
        className
      )}
    >
      {/* Icon */}
      <div className="mb-6 text-3xl text-white drop-shadow-[0_0_6px_rgba(147,51,234,0.4)]">
        {icon}
      </div>

      {/* Content */}
      <div>
        <h3 className="font-semibold text-xl text-white mb-1">{title}</h3>
        <p className="text-sm text-neutral-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
