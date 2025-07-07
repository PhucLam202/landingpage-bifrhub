import { cn } from "@/app/lib/utils";
import React from "react";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";
import MagicButton from "@/app/components/ui/magicButton";
import { FaRocket, FaShieldAlt, FaChartLine, FaCoins } from "react-icons/fa";

export function GridBackground() {
  return (
    <div className="absolute top-0 left-0 flex min-h-screen w-full items-center justify-center bg-white dark:bg-black overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-violet-800 to-black animate-gradient">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-lg"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-float-slow" />
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-violet-300/40 rounded-full animate-float-medium" />
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white/50 rounded-full animate-float-fast" />
          <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-violet-200/30 rounded-full animate-float-slow" />
        </div>
      </div>

      {/* Grid Lines */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:100px_100px]",
          "[background-image:linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)]",
          "animate-pulse-slow"
        )}
      />

      {/* Mask effect */}
      <div className="pointer-events-none absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      {/* Glass Card */}
      <div className="relative z-10 w-[90vw] max-w-7xl p-10 bg-white/15 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-xl text-white space-y-10">
        {/* Stats */}
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
            <FaCoins className="text-yellow-400" />
            <span className="text-sm">$127M+ TVL</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
            <FaChartLine className="text-green-400" />
            <span className="text-sm">15.2% APY</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
            <FaShieldAlt className="text-blue-400" />
            <span className="text-sm">Audited & Secure</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight bg-gradient-to-b from-white via-white to-violet-200 bg-clip-text text-transparent drop-shadow-lg">
        Bifrhub – Liquid Staking, Redefined
        </h1>

        <div className="h-1 w-20 bg-gradient-to-r from-violet-500 to-violet-700 rounded-full animate-pulse-glow" />

        {/* Subtitle */}
        <TextGenerateEffect
          className="text-lg lg:text-xl leading-relaxed max-w-3xl text-white/90"
          words="Stake smarter, not harder. Convert your assets to vTokens and earn passive income – all while maintaining full liquidity and control."
        />

        {/* Paragraph */}
        <p className="text-sm md:text-base text-white/80 max-w-2xl">
          Whether you're a DeFi native, institutional investor, or new to staking, bifrhub helps you tracking rewards, APY. Just in one screen.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              icon: <FaCoins className="text-white text-sm" />,
              title: "No Lock-ups",
              desc: "Maintain full liquidity while earning rewards",
              color: "from-violet-500 to-violet-700",
            },
            {
              icon: <FaChartLine className="text-white text-sm" />,
              title: "Passive Income",
              desc: "Earn rewards automatically 24/7",
              color: "from-green-500 to-green-700",
            },

          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 p-4 rounded-xl border border-white/10 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-8 h-8 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center`}>
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
              </div>
              <p className="text-sm text-white/80">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <MagicButton
          title="Start Earning Now"
          icon={<FaRocket />}
          position="right"
          href="https://bifrost-mint-lst-learning-a43m8szrh.vercel.app/"
          aria-label="Start earning with Dotheon"
          otherClasses="px-6 py-3 text-lg font-semibold hover:scale-105 transition-transform"
        />

          
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(90deg); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(270deg); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes text-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 5px rgba(139, 92, 246, 0.5); }
          50% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.8); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 4s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 3s ease-in-out infinite; }
        .animate-gradient { animation: gradient 12s ease infinite; background-size: 400% 400%; }
        .animate-text-shimmer { animation: text-shimmer 4s ease-in-out infinite; background-size: 200% auto; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
