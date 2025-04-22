
import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  delay: number;
  isVisible: boolean;
}

const ProjectCard = ({ image, title, category, delay, isVisible }: ProjectCardProps) => {
  return (
    <Card 
      className={cn(
        "card-hover relative border-none opacity-0 h-full flex flex-col group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer overflow-hidden rounded-xl",
        isVisible && `animate-fade-in stagger-animate-${delay}`
      )}
    >
      <div className="relative overflow-hidden h-[240px]">
        <img 
          src={image} 
          alt={title} 
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Button variant="outline" size="sm" className="bg-white text-tech-blue-900 hover:bg-tech-blue-500 hover:text-white">
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>
      <div className="p-5 bg-white">
        <p className="text-sm text-tech-blue-500 font-medium">{category}</p>
        <h3 className="text-lg font-bold mt-1 text-tech-blue-900 group-hover:text-tech-blue-600 transition-colors duration-300">
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
    <section id="projects" ref={sectionRef} className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold opacity-0 text-tech-blue-900",
            isVisible && "animate-fade-in"
          )}>
            Latest Projects
          </h2>
          <div className="w-20 h-1 bg-tech-blue-500 mx-auto my-4"></div>
          <p className={cn(
            "mt-4 text-lg text-muted-foreground opacity-0",
            isVisible && "animate-fade-in stagger-animate-1"
          )}>
            Explore our recent work across various industries and technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              category={project.category}
              delay={Math.min(index + 1, 6)}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;

