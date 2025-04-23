"use client";

import React, { useEffect, useState, useRef, useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  const videos = useMemo(() => [
    "/lovable-uploads/banner_new.mp4",
    "/lovable-uploads/banner_7.mp4"
  ], []);

  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState([false, false]);
  const [isVisible, setIsVisible] = useState(false);
  const [inView, setInView] = useState(false);

  const videoRefs = [useRef<HTMLVideoElement | null>(null), useRef<HTMLVideoElement | null>(null)];
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollY } = useScroll();
  const yOffset = useTransform(scrollY, [0, 400], [0, -50]);

  // Intersection observer to detect section in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => setIsVisible(true));
  }, []);

  const handleVideoLoaded = useCallback((index: number) => {
    setVideoLoaded((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
    if (inView) videoRefs[index].current?.play().catch(() => {});
  }, [inView]);

  const handleTransition = useCallback(() => {
    const nextIndex = (activeIndex + 1) % videos.length;

    // Start loading next video
    setFadeIn(false);
    videoRefs[nextIndex].current?.load();

    setTimeout(() => {
      setActiveIndex(nextIndex);
      setFadeIn(true);
    }, 500); // duration of fade
  }, [activeIndex, videos.length]);

  useEffect(() => {
    const interval = setInterval(handleTransition, 15000);
    return () => clearInterval(interval);
  }, [handleTransition]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Fallback Thumbnail */}
      {!videoLoaded.includes(true) && (
        <img
          src="/lovable-uploads/thumbnail.jpg"
          alt="Thumbnail"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover blur-md scale-105 z-0"
        />
      )}

      {/* Spinner */}
      {!videoLoaded.includes(true) && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Dual Video Layered Background */}
      {videos.map((src, index) => (
        <video
          key={src}
          ref={videoRefs[index]}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",
            index === activeIndex
              ? fadeIn
                ? "opacity-100 z-10"
                : "opacity-0 z-20"
              : fadeIn
              ? "opacity-0 z-20"
              : "opacity-100 z-10"
          )}
          src={src}
          autoPlay
          muted
          playsInline
          preload="auto"
          onLoadedData={() => handleVideoLoaded(index)}
          onEnded={handleTransition}
        />
      ))}

      {/* Overlay Content with Parallax */}
      <motion.div
        style={{ y: yOffset }}
        className="container mx-auto px-4 md:px-6 pt-24 pb-12 relative z-30"
      >
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <h1 className={cn("text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white", isVisible && "animate-fade-in")}>
            <span className="text-gradient">Techencraft</span>
          </h1>
          <h2 className={cn("text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 text-white", isVisible && "animate-fade-in delay-100")}>
            Crafting Ideas for the Future of AI Technologies
          </h2>
          <p className={cn("mt-6 text-lg md:text-xl text-gray-200 max-w-3xl", isVisible && "animate-fade-in delay-200")}>
            We build high-quality web and mobile solutions for real-world business needs from healthcare and logistics to e-learning and loyalty management.
          </p>
          <div className={cn("flex flex-col sm:flex-row items-center gap-4 mt-10", isVisible && "animate-fade-in delay-300")}>
            <Button size="lg" className="button-gradient">
              <a href="#about">Get Started</a>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
