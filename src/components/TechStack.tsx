
import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TechItemProps {
  name: string;
  color: string;
  delay: number;
  isVisible: boolean;
}

const TechItem = ({ name, color, delay, isVisible }: TechItemProps) => {
  return (
    <div 
      className={cn(
        "flex items-center justify-center py-3 px-6 rounded-full border border-tech-blue-100 opacity-0 transition-all duration-300 hover:bg-white hover:shadow-md",
        isVisible && `animate-fade-in stagger-animate-${delay}`,
        color === 'blue' && 'bg-tech-blue-50',
        color === 'sky' && 'bg-sky-50',
        color === 'indigo' && 'bg-indigo-50',
        color === 'purple' && 'bg-purple-50',
        color === 'cyan' && 'bg-cyan-50'
      )}
    >
      <span className="font-medium">{name}</span>
    </div>
  );
};

const TechStack = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const technologies = [
    { name: 'React', color: 'blue' },
    { name: 'Flutter', color: 'sky' },
    { name: 'Laravel', color: 'indigo' },
    { name: 'Node.js', color: 'cyan' },
    { name: 'Next.js', color: 'blue' },
    { name: 'TypeScript', color: 'indigo' },
    { name: 'Firebase', color: 'purple' },
    { name: 'MySQL', color: 'sky' },
    { name: 'MongoDB', color: 'cyan' },
    { name: 'Swift', color: 'indigo' },
    { name: 'Kotlin', color: 'purple' },
    { name: 'AWS', color: 'blue' },
    { name: 'Docker', color: 'cyan' },
    { name: 'Figma', color: 'purple' },
    { name: 'TailwindCSS', color: 'sky' }
  ];

  return (
    <section id="tech-stack" ref={sectionRef} className="py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 particles opacity-40"></div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold opacity-0",
            isVisible && "animate-fade-in"
          )}>
            Our <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className={cn(
            "mt-4 text-lg text-muted-foreground opacity-0",
            isVisible && "animate-fade-in stagger-animate-1"
          )}>
            Experienced with the latest tools & platforms to deliver cutting-edge solutions
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <TechItem
              key={index}
              name={tech.name}
              color={tech.color}
              delay={Math.min(index % 6 + 1, 6)}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
