
import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Code, Laptop, Users } from 'lucide-react';

const AboutUs = () => {
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

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h2 className={cn(
              "text-3xl md:text-4xl font-bold opacity-0",
              isVisible && "animate-fade-in"
            )}>
              <span className="text-gradient">6+ years</span> of experience crafting world-class digital products
            </h2>
            
            <p className={cn(
              "mt-6 text-lg text-muted-foreground opacity-0",
              isVisible && "animate-fade-in stagger-animate-1"
            )}>
              At Techencraft, we specialize in delivering web and mobile applications using the Agile methodology, ensuring fast iterations, flexibility, and high-quality outcomes.
            </p>
            
            <div className="mt-8 space-y-6">
              <div className={cn(
                "flex items-start gap-4 opacity-0",
                isVisible && "animate-fade-in-right stagger-animate-2"
              )}>
                <div className="bg-tech-blue-50 p-3 rounded-lg">
                  <Laptop className="h-6 w-6 text-tech-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Web & mobile app development</h3>
                  <p className="mt-1 text-muted-foreground">
                    From concept to launch, we build robust and scalable applications.
                  </p>
                </div>
              </div>
              
              <div className={cn(
                "flex items-start gap-4 opacity-0",
                isVisible && "animate-fade-in-right stagger-animate-3"
              )}>
                <div className="bg-tech-blue-50 p-3 rounded-lg">
                  <Code className="h-6 w-6 text-tech-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Hardware-integrated Bluetooth applications</h3>
                  <p className="mt-1 text-muted-foreground">
                    Specialized in creating seamless connections between software and hardware.
                  </p>
                </div>
              </div>
              
              <div className={cn(
                "flex items-start gap-4 opacity-0",
                isVisible && "animate-fade-in-right stagger-animate-4"
              )}>
                <div className="bg-tech-blue-50 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-tech-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">User-centric design</h3>
                  <p className="mt-1 text-muted-foreground">
                    Creating intuitive and engaging user experiences using modern design tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={cn(
            "relative w-full h-full min-h-[400px] opacity-0",
            isVisible && "animate-fade-in stagger-animate-1"
          )}>
            <div className="absolute inset-0 bg-gradient-to-tr from-tech-blue-100/50 to-tech-blue-50/50 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 code-background opacity-20"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-7xl font-bold text-tech-blue-500">6+</div>
                <div className="text-xl font-medium mt-2">Years of Excellence</div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-tech-blue-100/30 rounded-full blur-xl"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-tech-blue-200/20 rounded-full blur-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
