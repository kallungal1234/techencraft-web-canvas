
import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Wrench, Mobile, Code, Database, Briefcase, FileText } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  isVisible: boolean;
}

const ServiceCard = ({ icon, title, description, delay, isVisible }: ServiceCardProps) => {
  return (
    <Card 
      className={cn(
        "card-hover border border-tech-blue-100 p-6 opacity-0 h-full flex flex-col",
        isVisible && `animate-fade-in stagger-animate-${delay}`
      )}
    >
      <div className="bg-tech-blue-50 p-3 rounded-lg w-fit mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
};

const ServicesSection = () => {
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

  const services = [
    {
      icon: <Wrench className="h-6 w-6 text-tech-blue-500" />,
      title: "Custom Web Development",
      description: "We build scalable, secure, and modern web applications tailored to your business goals."
    },
    {
      icon: <Mobile className="h-6 w-6 text-tech-blue-500" />,
      title: "Mobile App Development",
      description: "Native and cross-platform apps for Android and iOS—crafted with performance and design in mind."
    },
    {
      icon: <Code className="h-6 w-6 text-tech-blue-500" />,
      title: "QA & Testing",
      description: "Comprehensive testing services using manual and automation techniques to ensure flawless performance."
    },
    {
      icon: <Briefcase className="h-6 w-6 text-tech-blue-500" />,
      title: "CRM Solutions",
      description: "Custom CRM development to support your sales, support, and customer engagement needs."
    },
    {
      icon: <FileText className="h-6 w-6 text-tech-blue-500" />,
      title: "CMS Development",
      description: "Open-source Content Management Systems tailored to your needs using platforms like WordPress, Drupal, or custom builds."
    },
    {
      icon: <Database className="h-6 w-6 text-tech-blue-500" />,
      title: "Porting & Migration",
      description: "Seamlessly migrate or port your applications across platforms with full support and documentation."
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 md:py-24 bg-tech-blue-50/50 relative overflow-hidden">
      <div className="absolute inset-0 code-background opacity-10"></div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold opacity-0",
            isVisible && "animate-fade-in"
          )}>
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className={cn(
            "mt-4 text-lg text-muted-foreground opacity-0",
            isVisible && "animate-fade-in stagger-animate-1"
          )}>
            We offer a comprehensive range of services to meet your digital transformation needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={Math.min(index + 1, 6)}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
