
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden code-background particles">
      <div className="absolute inset-0 bg-gradient-to-b from-tech-blue-50/80 to-white/90"></div>
      
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-12 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <h1 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight opacity-0",
            isVisible && "animate-fade-in"
          )}>
            <span className="text-gradient">Techencraft</span>
          </h1>
          
          <h2 className={cn(
            "text-2xl md:text-3xl lg:text-4xl font-bold mt-2 opacity-0",
            isVisible && "animate-fade-in stagger-animate-1"
          )}>
            Crafting Ideas for the Future
          </h2>
          
          <p className={cn(
            "mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl opacity-0",
            isVisible && "animate-fade-in stagger-animate-2"
          )}>
            We build high-quality web and mobile software for real-world business needs—healthcare, logistics, e-learning, loyalty management, and more.
          </p>
          
          <div className={cn(
            "flex flex-col sm:flex-row items-center gap-4 mt-10 opacity-0",
            isVisible && "animate-fade-in stagger-animate-3"
          )}>
            <Button size="lg" className="button-gradient">
              Let's Talk
            </Button>
            <Button size="lg" variant="outline" className="border-tech-blue-400 text-tech-blue-600 hover:bg-tech-blue-50">
              Explore Services
            </Button>
          </div>
        </div>
      </div>
      
      {/* Animated shapes */}
      <div className="absolute -bottom-16 left-0 w-full h-64 bg-gradient-to-t from-white to-transparent z-0"></div>
      
      <div className={cn(
        "absolute bottom-20 right-[10%] w-24 h-24 rounded-full bg-gradient-to-tr from-tech-blue-400/20 to-tech-blue-200/30 backdrop-blur-md opacity-0 z-0",
        isVisible && "animate-float opacity-70"
      )}></div>
      
      <div className={cn(
        "absolute top-40 left-[15%] w-16 h-16 rounded-full bg-gradient-to-bl from-tech-blue-300/20 to-tech-blue-100/30 backdrop-blur-sm opacity-0 z-0",
        isVisible && "animate-float opacity-60 animation-delay-1000"
      )}></div>
    </section>
  );
};

export default HeroSection;
