
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
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.06)`;
    card.style.boxShadow = `0 7px 36px 0 rgba(0,95,220,0.13), 0 1px 9px 0 rgba(0,96,182,0.11)`;
  };

  const resetTilt = () => {
    const card = cardRef.current;
    if (card) {
      card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
      card.style.boxShadow = '';
    }
  };

  return (
    <Card
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      className={cn(
        "relative p-6 opacity-0 h-full flex flex-col group rounded-xl overflow-hidden transition-all duration-500 ease-in-out shadow-lg cursor-pointer will-change-transform bg-white hover:bg-gradient-to-bl hover:from-white/80 hover:to-blue-50",
        isVisible && `animate-fade-in stagger-animate-${delay}`,
        "hover:shadow-tech-blue-200/70"
      )}
      
      style={{
        animationDelay: `${delay * 100 + 80}ms`
      }}
    >
      {/* Gradient shimmer border on hover */}
      <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-transparent before:content-[''] before:absolute before:inset-[-3px] before:rounded-xl before:bg-gradient-to-r before:from-tech-blue-500 before:via-white/50 before:to-tech-blue-200 before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-400 z-0 pointer-events-none"></div>

      <div className="relative z-10 bg-gradient-to-tr from-tech-blue-500 to-tech-blue-300 p-3 rounded-lg w-fit mb-4 text-white group-hover:shadow-lg group-hover:shadow-tech-blue-100/50 transition-all duration-300">
        {icon}
      </div>

      <h3 className="relative z-10 text-xl font-bold mb-3 text-tech-blue-900 group-hover:text-tech-blue-600 transition-colors duration-300 drop-shadow">
        {title}
      </h3>

      <p className="relative z-10 text-muted-foreground group-hover:text-tech-blue-900/90 transition-colors duration-300 text-sm leading-relaxed">
        {description}
      </p>

      <div className="absolute right-0 bottom-0 w-24 h-24 bg-gradient-to-tr from-tech-blue-100/20 to-transparent rounded-tl-full transform translate-x-6 translate-y-6 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-500 z-0" />
      <div className="absolute left-0 top-0 w-8 h-8 bg-gradient-to-br from-tech-blue-50 via-blue-50 to-transparent rounded-br-full blur opacity-70 group-hover:scale-110 transition-transform duration-500 z-0" />
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
      { threshold: 0.12 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
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
      <div className="absolute inset-0 code-background opacity-10"></div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold opacity-0 text-tech-blue-900 drop-shadow-lg",
            isVisible && "animate-fade-in"
          )}>
            Our Services
          </h2>
          <div className="w-20 h-1 bg-tech-blue-500 mx-auto my-4 rounded-lg"></div>
          <p className={cn(
            "mt-4 text-lg text-muted-foreground opacity-0",
            isVisible && "animate-fade-in stagger-animate-1"
          )}>
            We offer a comprehensive range of services to transform your digital vision into reality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-7">
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
      <div className="absolute w-80 h-80 bg-gradient-to-br from-tech-blue-100 via-tech-blue-200/80 to-white left-[-120px] top-[-80px] blur-3xl opacity-30 rounded-full pointer-events-none"></div>
      <div className="absolute w-96 h-96 bg-gradient-to-r from-sky-200/40 via-white/40 to-tech-blue-100/70 right-[-180px] bottom-0 blur-2xl opacity-40 rounded-full pointer-events-none"></div>
    </section>
  );
};

export default ServicesSection;
