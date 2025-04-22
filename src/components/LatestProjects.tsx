
import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

// Animation utility
const glideAnimations = [
  "animate-fade-in",
  "animate-fade-in-right",
  "animate-fade-in-left",
  "animate-scale-in"
];

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  index: number;
}

const ProjectCard = ({ image, title, category, index }: ProjectCardProps) => {
  return (
    <Card 
      className={cn(
        "card-hover relative border-none h-full flex flex-col group cursor-pointer overflow-hidden rounded-xl shadow-lg bg-white transition-transform duration-700",
        glideAnimations[index % glideAnimations.length]
      )}
      style={{
        animationDelay: `${150 + index * 100}ms`
      }}
    >
      <div className="relative overflow-hidden h-[240px]">
        <img 
          src={image} 
          alt={title} 
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">
          <Button variant="outline" size="sm" className="bg-white/90 text-tech-blue-900 hover:bg-tech-blue-500 hover:text-white font-semibold shadow">
            <a href="#contact" className="transition-all">Get In Touch</a>
          </Button>
        </div>
      </div>
      <div className="p-5 bg-white bg-opacity-80 backdrop-blur rounded-b-xl">
        <p className="text-sm text-tech-blue-500 font-semibold tracking-wide mb-1">{category}</p>
        <h3 className="text-lg font-bold text-tech-blue-900 group-hover:text-tech-blue-600 transition-colors duration-300">
          {title}
        </h3>
      </div>
    </Card>
  );
};

const LatestProjects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      image: "/lovable-uploads/banking.jpg",
      title: "Banking Domain",
      category: "Web Development"
    },    
    {
      image: "/lovable-uploads/lowyer.jpeg",
      title: "Lowyers Diary ",
      category: "Web Development"
    },
    {
      image: "/lovable-uploads/school.png",
      title: "Schooling App",
      category: "Mobile Development"
    },
    {
      image: "/lovable-uploads/matrimoniyal.jpeg",
      title: "Indian Matrimonial",
      category: "Web Development"
    },
    {
      image: "/lovable-uploads/convergence.png",
      title: "Educational Platform",
      category: "CMS Development"
    },
    {
      image: "/lovable-uploads/mrf.jpeg",
      title: "MRF Tyre Retreading",
      category: "ERP APPLICATION"
    }
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={cn(
        "py-16 relative overflow-hidden bg-gradient-to-b from-[#f6faff] via-white/80 to-[#e5edfa]",
        isVisible ? "animate-fade-in" : "opacity-0"
      )}
      style={{ transition: 'opacity 0.9s cubic-bezier(0.4,0,0.2,1)' }}
    >
      {/* Glimmer background effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/3 top-0 w-[480px] h-[180px] bg-gradient-to-tr from-tech-blue-100 via-white/80 to-tech-blue-200 rounded-full blur-2xl opacity-40"></div>
        <div className="absolute right-0 top-1/2 w-[340px] h-[170px] bg-gradient-to-tr from-pink-100 via-white/60 to-tech-blue-100 rounded-full blur-3xl opacity-30"></div>
      </div>
      <div className="relative container mx-auto px-5 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className={cn(
            "text-3xl md:text-4xl font-extrabold text-tech-blue-900 tracking-tight drop-shadow animate-fade-in",
            isVisible && "glow"
          )}>
            Latest Projects
          </h2>
          <div className="w-20 h-1 mt-3 bg-gradient-to-r from-tech-blue-400 to-tech-blue-600 mx-auto rounded-full"></div>
          <p className={cn(
            "mt-4 text-lg text-tech-blue-600 font-medium transition-opacity opacity-90"
          )}>
            Explore our recent work across various industries and technologies
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto px-3 md:px-0">
          <Carousel
            opts={{
              align: "start",
              loop: true
            }}
            className="group max-w-full"
          >
            <CarouselContent>
              {projects.map((project, idx) => (
                <CarouselItem key={idx} className="sm:basis-1/2 lg:basis-1/3 px-2">
                  <ProjectCard
                    image={project.image}
                    title={project.title}
                    category={project.category}
                    index={idx}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="z-10 bg-white/80 shadow-lg hover:bg-tech-blue-500 hover:text-white transition-all -left-5" />
            <CarouselNext className="z-10 bg-white/80 shadow-lg hover:bg-tech-blue-500 hover:text-white transition-all -right-5" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;
