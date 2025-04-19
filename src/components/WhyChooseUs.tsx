
import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle } from 'lucide-react';

interface FeatureItemProps {
  title: string;
  delay: number;
  isVisible: boolean;
}

const FeatureItem = ({ title, delay, isVisible }: FeatureItemProps) => {
  return (
    <div 
      className={cn(
        "flex items-center gap-3 opacity-0",
        isVisible && `animate-fade-in-left stagger-animate-${delay}`
      )}
    >
      <CheckCircle className="h-6 w-6 text-tech-blue-500 flex-shrink-0" />
      <span className="text-lg">{title}</span>
    </div>
  );
};

const WhyChooseUs = () => {
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

  const features = [
    "6+ Years of Experience",
    "Agile Methodology",
    "Customer-Centric Approach",
    "Skilled Team with Hands-on Hardware Integration",
    "Cross-platform Expertise"
  ];

  return (
    <section id="why-us" ref={sectionRef} className="py-20 md:py-24 bg-gradient-to-b from-white to-tech-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 code-background opacity-10"></div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className={cn(
            "relative w-full h-full min-h-[400px] opacity-0 order-2 md:order-1",
            isVisible && "animate-fade-in"
          )}>
            <div className="absolute inset-0 bg-gradient-to-tr from-tech-blue-500/10 to-tech-blue-400/5 rounded-3xl overflow-hidden backdrop-blur-sm border border-tech-blue-100">
              <div className="p-8 h-full flex flex-col justify-center">
                <div className={cn(
                  "text-7xl font-bold text-tech-blue-500 opacity-0",
                  isVisible && "animate-fade-in stagger-animate-1"
                )}>
                  100%
                </div>
                <div className={cn(
                  "text-2xl font-medium mt-2 opacity-0",
                  isVisible && "animate-fade-in stagger-animate-2"
                )}>
                  Client Satisfaction
                </div>
                <p className={cn(
                  "mt-4 text-muted-foreground opacity-0",
                  isVisible && "animate-fade-in stagger-animate-3"
                )}>
                  Our commitment to excellence ensures your project's success
                </p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-tech-blue-100/30 rounded-full blur-xl"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-tech-blue-200/20 rounded-full blur-lg"></div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className={cn(
              "text-3xl md:text-4xl font-bold opacity-0",
              isVisible && "animate-fade-in"
            )}>
              Why Choose <span className="text-gradient">Techencraft</span>
            </h2>
            
            <p className={cn(
              "mt-6 text-lg text-muted-foreground opacity-0",
              isVisible && "animate-fade-in stagger-animate-1"
            )}>
              Partner with us to bring your digital vision to life with our expert team and proven approach to software development.
            </p>
            
            <div className="mt-8 space-y-5">
              {features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  title={feature}
                  delay={index + 2}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
