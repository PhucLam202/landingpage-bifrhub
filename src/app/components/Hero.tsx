"use client";

import React, { useEffect, useState } from "react";
import { Spotlight } from "./ui/Spotlight";
import { GridBackground } from "@/app/components/ui/GridBackground";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced spotlights with dynamic positioning */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        }}>
          <Spotlight
            className="top-28 left-80 h-[80vh] w-[50vh] transition-all duration-1000"
            fill="#8b5cf6"
          />
        </div>
        <Spotlight
          className="-top-20 left-80 h-[100vh] w-[20vh] transition-all duration-700"
          fill="#06d6a0"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vh] transition-all duration-1200"
          fill="#ffffff"
        />
        <Spotlight 
          className="top-10 left-50 h-[80vh] transition-all duration-800" 
          fill="#ffffff"
        />
        <Spotlight
          className="-top-48 -left-10 md:left-32 md:-top-20 h-screen transition-all duration-1500"
          fill="#ef4444"
        />
        <Spotlight
          className="-top-60 -left-20 md:left-22 md:-top-30 h-screen transition-all duration-900"
          fill="#10b981"
        />
      </div>

      {/* Enhanced GridBackground with fade-in effect */}
      <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <GridBackground />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-20 h-20 border border-white/20 rounded-full animate-spin-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-violet-400/30 rotate-45 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-gradient-to-br from-violet-500/20 to-green-500/20 rounded-lg animate-float-slow"></div>
        <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-white/10 rounded-full animate-bounce-slow"></div>
      </div>

      {/* Enhanced custom animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Hero;