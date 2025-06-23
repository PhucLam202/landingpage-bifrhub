import { Button } from "./MovingBorders";

interface CardProps {
  title: string;
  desc: string;
  // Add other properties of card if they exist and are used
}

const CyberpunkCard = ({ card, index }: { card: CardProps; index: number }) => {
  return (
    <div className="relative group h-full">
      {/* Glowing background effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-green-400 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

      <Button
        duration={Math.floor(Math.random() * 10000) + 8000}
        borderRadius="1.75rem"
        className="relative bg-gray-900 rounded-3xl h-full"
        style={{
          background:
            "linear-gradient(135deg, rgba(6,78,59,0.8) 0%, rgba(4,7,29,0.9) 50%, rgba(0,0,0,0.95) 100%)",
          borderRadius: "1.75rem",
        }}
      >
        <div className="relative p-6 h-full flex flex-col justify-between">
          {/* Cyberpunk grid overlay */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id={`cyberpunk-grid-${index}`}
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 20 0 L 0 0 0 20"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="0.5"
                    opacity="0.3"
                  />
                </pattern>
              </defs>
              <rect
                width="100%"
                height="100%"
                fill={`url(#cyberpunk-grid-${index})`}
              />
            </svg>
          </div>

          {/* Glowing corner accents */}
          <div className="absolute top-2 right-2 w-8 h-8 bg-emerald-400/20 rounded-full blur-sm animate-pulse"></div>
          <div className="absolute bottom-2 left-2 w-6 h-6 bg-green-400/20 rounded-full blur-sm animate-pulse delay-700"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-4 h-full">
            {/* Icon Container */}
            <div className="relative flex-shrink-0">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-emerald-500/20 to-green-600/20 rounded-2xl flex items-center justify-center border border-emerald-400/30 backdrop-blur-sm">
                {/* Cyberpunk icon placeholder */}
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-emerald-400 to-green-500 rounded-lg opacity-80 relative">
                  <div className="absolute inset-1 bg-gradient-to-br from-emerald-300 to-green-400 rounded opacity-60"></div>
                </div>
              </div>
              {/* Connecting line */}
              <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-emerald-400 to-transparent"></div>
            </div>

            {/* Text Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-lg lg:text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                {card.desc}
              </p>

              {/* Status indicator */}
              <div className="flex items-center mt-3 gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-emerald-400 font-mono">
                  ACTIVE
                </span>
              </div>
            </div>
          </div>

          {/* Cyberpunk corner decorations */}
          <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-emerald-400/50 rounded-tl-3xl"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-emerald-400/50 rounded-br-3xl"></div>
        </div>
      </Button>
    </div>
  );
};

export default CyberpunkCard;
