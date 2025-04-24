
"use client";

import React, { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const videoSrc = "/lovable-uploads/banner_9.mp4";
  const posterSrc = "/lovable-uploads/banner_7_thumbnail.jpg";
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [inView, setInView] = useState(false);
  const [highQualityLoaded, setHighQualityLoaded] = useState(false);

  // Optimize intersection observer with a higher threshold for smoother loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: [0.1, 0.3, 0.5], rootMargin: '50px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => setIsVisible(true));
  }, []);

  // Enhanced video loading strategy that doesn't use the non-existent playbackQuality property
  useEffect(() => {
    if (inView && videoRef.current) {
      // First load with lower quality settings
      videoRef.current.preload = "metadata";
      
      // Load video when in view
      const loadVideo = async () => {
        try {
          // Start playback
          await videoRef.current?.play();
          
          // After initial playback has started, we can improve quality if needed
          // by other means like loading a higher quality source or adjusting playback settings
          setTimeout(() => {
            setHighQualityLoaded(true);
            // Video is now playing in full quality
          }, 1000);
        } catch (error) {
          console.warn("Auto-play failed:", error);
        }
      };
      
      loadVideo();
    }
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <video
        ref={videoRef}
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 z-10",
          videoLoaded ? "opacity-100" : "opacity-0"
        )}
        src={videoSrc}
        poster={posterSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onLoadedData={() => setVideoLoaded(true)}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {!videoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      <div className="container mx-auto px-4 md:px-6 relative z-30">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <h1
            className={cn(
              "text-heading-2xl tracking-tight text-white transition-opacity duration-700 ease-out",
              isVisible ? "opacity-100 animate-fade-in" : "opacity-0"
            )}
          >
            <span className="text-gradient">Techencraft</span>
          </h1>

          <h2
            className={cn(
              "text-heading-lg font-semibold mt-4 text-white transition-opacity duration-700 delay-200 ease-out",
              isVisible ? "opacity-100 animate-fade-in" : "opacity-0"
            )}
          >
            Crafting Ideas for the Future of AI Technologies
          </h2>

          <p
            className={cn(
              "mt-6 text-lg text-gray-200 max-w-3xl transition-opacity duration-700 delay-300 ease-out",
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
