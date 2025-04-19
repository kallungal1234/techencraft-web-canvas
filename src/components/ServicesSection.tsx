
import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Wrench, Smartphone, Code, Database, Briefcase, FileText } from 'lucide-react';
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
        "card-hover relative border-none p-6 opacity-0 h-full flex flex-col group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer bg-white rounded-xl overflow-hidden",
        isVisible && `animate-fade-in stagger-animate-${delay}`,
        "before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-tech-blue-100/20 before:via-tech-blue-200/20 before:to-tech-blue-100/20 before:translate-x-[-100%] before:hover:translate-x-[100%] before:transition-transform before:duration-700 before:ease-in-out"
      )}
    >
      <div className="relative z-10 bg-gradient-to-br from-tech-blue-500 to-tech-blue-600 p-3 rounded-lg w-fit mb-4 text-white group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="relative z-10 text-xl font-bold mb-3 text-tech-blue-900 group-hover:text-tech-blue-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="relative z-10 text-muted-foreground group-hover:text-tech-blue-900/80 transition-colors duration-300 text-sm leading-relaxed">
        {description}
      </p>
      <div className="absolute right-0 bottom-0 w-24 h-24 bg-gradient-to-tr from-tech-blue-100/20 to-transparent rounded-tl-full transform translate-x-6 translate-y-6 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-500" />
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
      icon: <Wrench className="h-5 w-5" />,
      title: "Custom Web Development",
      description: "We build scalable, secure, and modern web applications tailored to your business goals with cutting-edge technologies."
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Mobile App Development",
      description: "Native and cross-platform apps for Android and iOS—crafted with excellence in performance and design in mind."
    },
    {
      icon: <Code className="h-5 w-5" />,
      title: "QA & Testing",
      description: "Comprehensive testing services using advanced manual and automation techniques to ensure flawless application performance."
    },
    {
      icon: <Briefcase className="h-5 w-5" />,
      title: "CRM Solutions",
      description: "Custom CRM development to empower your sales, support, and customer engagement needs with intelligent automation."
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "CMS Development",
      description: "Open-source Content Management Systems tailored precisely to your needs using modern platforms and custom builds."
    },
    {
      icon: <Database className="h-5 w-5" />,
      title: "Porting & Migration",
      description: "Seamless migration and porting of your applications across platforms with comprehensive support and documentation."
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 code-background opacity-5"></div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold opacity-0 text-tech-blue-900",
            isVisible && "animate-fade-in"
          )}>
            Our Services
          </h2>
          <div className="w-20 h-1 bg-tech-blue-500 mx-auto my-4"></div>
          <p className={cn(
            "mt-4 text-lg text-muted-foreground opacity-0",
            isVisible && "animate-fade-in stagger-animate-1"
          )}>
            We offer a comprehensive range of services to transform your digital vision into reality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
