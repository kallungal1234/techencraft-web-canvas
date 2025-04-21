"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/lovable-uploads/banner.mp4"
        poster="/lovable-uploads/banner_poster.jpg"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-0" />

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-12 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <h1
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white transition-opacity duration-700 ease-out",
              isVisible ? "opacity-100 animate-fade-in" : "opacity-0"
            )}
          >
            <span className="text-gradient">Techencraft</span>
          </h1>

          <h2
            className={cn(
              "text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 text-white transition-opacity duration-700 delay-200 ease-out",
              isVisible ? "opacity-100 animate-fade-in" : "opacity-0"
            )}
          >
            Crafting Ideas for the Future of AI Technologies
          </h2>

          <p
            className={cn(
              "mt-6 text-lg md:text-xl text-gray-200 max-w-3xl transition-opacity duration-700 delay-300 ease-out",
              isVisible ? "opacity-100 animate-fade-in" : "opacity-0"
            )}
          >
            We build high-quality web and mobile solutions for real-world business needs — from healthcare and logistics to e-learning and loyalty management.
          </p>

          <div
            className={cn(
              "flex flex-col sm:flex-row items-center gap-4 mt-10 transition-opacity duration-700 delay-500 ease-out",
              isVisible ? "opacity-100 animate-fade-in" : "opacity-0"
            )}
          >
            <Button size="lg" className="button-gradient">
              <a href="#about">Get Started</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
