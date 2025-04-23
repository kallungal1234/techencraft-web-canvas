"use client";

import React, { useEffect, useState, useRef, useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const videos = useMemo(() => [
    "/lovable-uploads/banner_new.mp4",
    "/lovable-uploads/banner_5.mp4"
  ], []);

  const [currentVideo, setCurrentVideo] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [inView, setInView] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  // Handle intersection (play video only when in view)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Fade in overlay content
  useEffect(() => {
    requestAnimationFrame(() => setIsVisible(true));
  }, []);

  const handleVideoLoaded = useCallback(() => {
    setVideoLoaded(true);
    if (inView) videoRef.current?.play().catch(() => {});
  }, [inView]);

  const handleVideoEnd = useCallback(() => {
    setVideoLoaded(false);
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  }, [videos.length]);

  // Reload video when currentVideo changes
  useEffect(() => {
    videoRef.current?.load();
  }, [currentVideo]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Thumbnail Placeholder */}
      {!videoLoaded && (
        <img
          src="/lovable-uploads/thumbnail.jpg"
          alt="Video Thumbnail"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover blur-md scale-105 z-0 transition-opacity duration-500"
        />
      )}

      {/* Spinner while loading */}
      {!videoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Video Background */}
      <video
        ref={videoRef}
        key={videos[currentVideo]}
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 z-10",
          videoLoaded ? "opacity-100" : "opacity-0"
        )}
        src={videos[currentVideo]}
        autoPlay
        muted
        playsInline
        preload="auto"
        onLoadedData={handleVideoLoaded}
        onEnded={handleVideoEnd}
      />

      {/* Overlay Content */}
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-12 relative z-30">
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
            We build high-quality web and mobile solutions for real-world business needs from healthcare and logistics to e-learning and loyalty management.
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
