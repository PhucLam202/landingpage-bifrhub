import React from "react";

import { workExperience } from "@/app/types/data";
import  CyberpunkCard  from "./ui/CyberpunkCard ";

const Experience = () => {
    return (
        <div className="min-h-screen relative overflow-hidden">
          {/* Cyberpunk Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-green-900 to-black"></div>
          
          {/* Animated matrix-like background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(0deg, transparent 24%, rgba(16, 185, 129, 0.1) 25%, rgba(16, 185, 129, 0.1) 26%, transparent 27%, transparent 74%, rgba(16, 185, 129, 0.1) 75%, rgba(16, 185, 129, 0.1) 76%, transparent 77%, transparent),
                linear-gradient(90deg, transparent 24%, rgba(16, 185, 129, 0.1) 25%, rgba(16, 185, 129, 0.1) 26%, transparent 27%, transparent 74%, rgba(16, 185, 129, 0.1) 75%, rgba(16, 185, 129, 0.1) 76%, transparent 77%, transparent)
              `,
              backgroundSize: '30px 30px'
            }}></div>
          </div>
    
          {/* Floating particles */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute top-3/4 right-1/3 w-40 h-40 bg-green-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/3 left-1/2 w-24 h-24 bg-teal-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
          </div>
    
          {/* Content */}
          <div className="relative z-10 py-20 px-6 lg:px-20">
            {/* Title Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                <span className="text-white">My </span>
                <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent">
                  work experience
                </span>
              </h1>
              
              {/* Cyberpunk subtitle */}
              <div className="flex items-center justify-center gap-2 mt-4">
                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-emerald-400"></div>
                <span className="text-emerald-400 font-mono text-sm tracking-wider">NEURAL_NETWORK_ACTIVATED</span>
                <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-emerald-400"></div>
              </div>
            </div>
    
            {/* Experience Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {workExperience.map((card, index) => (
                <CyberpunkCard key={card.id} card={card} index={index} />
              ))}
            </div>
    
            {/* Bottom decoration */}
            <div className="flex justify-center mt-16">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse delay-200"></div>
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse delay-400"></div>
              </div>
            </div>
          </div>
        </div>
      )
};

export default Experience;