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

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-24 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left Text Section */}
          <div>
            <h2
              className={cn(
                "text-3xl md:text-4xl font-bold opacity-0",
                isVisible && "animate-fade-in"
              )}
            >
              <span className="text-gradient">10+ years</span> of experience crafting world-class digital products
            </h2>

            <p
              className={cn(
                "mt-6 text-lg text-muted-foreground opacity-0",
                isVisible && "animate-fade-in stagger-animate-1"
              )}
            >
              At Techencraft, we specialize in delivering web and mobile applications using the Agile methodology, ensuring fast iterations, flexibility, and high-quality outcomes.
            </p>

            <div className="mt-8 space-y-6">
              {[
                {
                  icon: <Laptop className="h-6 w-6 text-tech-blue-500" />,
                  title: "Web & mobile app development",
                  desc: "From concept to launch, we build robust and scalable applications.",
                },
                {
                  icon: <Code className="h-6 w-6 text-tech-blue-500" />,
                  title: "Hardware-integrated Bluetooth applications",
                  desc: "Specialized in creating seamless connections between software and hardware.",
                },
                {
                  icon: <Users className="h-6 w-6 text-tech-blue-500" />,
                  title: "User-centric design",
                  desc: "Creating intuitive and engaging user experiences using modern design tools.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "flex items-start gap-4 opacity-0",
                    isVisible && `animate-fade-in-right stagger-animate-${idx + 2}`
                  )}
                >
                  <div className="bg-tech-blue-50 p-3 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-1 text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Video Section */}
          <div
            className={cn(
              "opacity-0",
              isVisible && "animate-fade-in stagger-animate-1"
            )}
          >
            <div className="rounded-3xl overflow-hidden relative aspect-video w-full shadow-xl">
              <video
                className="w-full h-full object-cover"
                src="/lovable-uploads/techncraft_offical.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
              {/* Decorative blobs */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-tech-blue-100/30 rounded-full blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-tech-blue-200/20 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
