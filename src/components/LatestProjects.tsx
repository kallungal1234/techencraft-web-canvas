
import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/effect-creative";
// Import required modules
import { Autoplay, Grid, EffectCreative } from "swiper/modules";

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
        "card-hover relative border-none h-full flex flex-col group cursor-pointer overflow-hidden rounded-xl shadow-lg bg-white transition-transform duration-700 hover:shadow-2xl hover:bg-gradient-to-t hover:from-white hover:to-tech-blue-50/70 ring-1 ring-tech-blue-100/70",
        glideAnimations[index % glideAnimations.length]
      )}
      style={{
        animationDelay: `${110 + index * 50}ms`
      }}
    >
      <div className="relative overflow-hidden h-[170px] md:h-[200px]">
        <img 
          src={image} 
          alt={title} 
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-8 group-hover:translate-y-1 transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]">
          <Button variant="outline" size="sm" className="bg-white/90 text-tech-blue-900 hover:bg-tech-blue-500 hover:text-white font-semibold shadow backdrop-blur">
            <a href="#contact" className="transition-all">Get In Touch</a>
          </Button>
        </div>
      </div>
      <div className="p-4 bg-white bg-opacity-90 backdrop-blur rounded-b-xl flex flex-col gap-1 z-10">
        <p className="text-xs text-tech-blue-400 font-semibold tracking-wide">{category}</p>
        <h3 className="text-base font-bold text-tech-blue-900 group-hover:text-tech-blue-600 transition-colors duration-300">
          {title}
        </h3>
      </div>
      <div className="absolute -z-10 inset-0 pointer-events-none group-hover:blur-[1px]" style={{
        background: "radial-gradient(600px circle at 60% 80%, rgba(0,96,182,0.07) 0%, transparent 100%)"
      }}/>
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
      { threshold: 0.07 }
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
        "py-16 relative overflow-hidden min-h-[670px] bg-gradient-to-b from-[#f6faff] via-white/90 to-[#e5edfa]",
        isVisible ? "animate-fade-in" : "opacity-0"
      )}
      style={{ transition: 'opacity 0.9s cubic-bezier(0.4,0,0.2,1)' }}
    >
      {/* Glimmer background effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/3 top-0 w-[480px] h-[180px] bg-gradient-to-tr from-tech-blue-100 via-white/80 to-tech-blue-200 rounded-full blur-2xl opacity-40"></div>
        <div className="absolute right-0 top-1/2 w-[340px] h-[170px] bg-gradient-to-tr from-pink-100 via-white/60 to-tech-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute left-2/3 top-1/3 w-32 h-32 bg-gradient-to-br from-[#e5edfa80] to-blue-100 rounded-full blur-2xl opacity-70"></div>
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

        <div className="relative max-w-5xl mx-auto md:px-0">
          <Swiper 
            modules={[Autoplay, Grid, EffectCreative]}
            slidesPerView={2}
            grid={{
              rows: 2,
              fill: "row"
            }}
            spaceBetween={30}
            autoplay={{
              delay: 2800,
              disableOnInteraction: false
            }}
            loop={true}
            speed={900}
            effect="creative"
            creativeEffect={{
              prev: {
                opacity: 0,
                translate: ["-60%", 0, 0],
                scale: 0.9
              },
              next: {
                opacity: 0,
                translate: ["60%", 0, 0],
                scale: 0.92
              }
            }}
            className="rounded-2xl shadow-xl mx-0"
            style={{ minHeight: 420 }}
          >
            {projects.map((project, idx) => (
              <SwiperSlide key={idx} className="pt-3 pb-5">
                <ProjectCard
                  image={project.image}
                  title={project.title}
                  category={project.category}
                  index={idx}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;
