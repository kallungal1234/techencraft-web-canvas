import React from 'react';
import { Mail, Phone, Github, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-tech-blue-900 text-white py-16 relative overflow-hidden">
      {/* Animated background glimmer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 code-background opacity-10"></div>
        <div className="absolute left-1/2 top-0 w-[380px] h-40 bg-gradient-to-br from-white/20 via-tech-blue-400/20 to-tech-blue-900/10 rounded-full blur-2xl opacity-60 -translate-x-1/2"></div>
        <div className="absolute bottom-[-40px] right-[12%] w-[320px] h-32 bg-gradient-to-t from-pink-100/25 to-blue-100/10 rounded-full blur-3xl opacity-25"></div>
        <div className="absolute top-[26%] left-4 w-32 h-16 bg-gradient-to-br from-tech-blue-300 via-white/10 to-tech-blue-100/10 rounded-full blur-2xl opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/logo-white.png" 
              alt="Techencraft Logo" 
              className="h-12 md:h-14"
            />
            <p className="text-tech-blue-100">
              Crafting innovative digital solutions for businesses around the world.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-tech-blue-100 hover:text-white hover:bg-tech-blue-800">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-tech-blue-100 hover:text-white hover:bg-tech-blue-800">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-tech-blue-100 hover:text-white hover:bg-tech-blue-800">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#web-development" className="text-tech-blue-100 hover:text-white transition-colors duration-200">Web Development</a>
              </li>
              <li>
                <a href="#web-designing" className="text-tech-blue-100 hover:text-white transition-colors duration-200">Web Designing</a>
              </li>
              <li>
                <a href="#logo-designing" className="text-tech-blue-100 hover:text-white transition-colors duration-200">Logo Designing</a>
              </li>
              <li>
                <a href="#cloud-devops" className="text-tech-blue-100 hover:text-white transition-colors duration-200">Cloud and DevOps</a>
              </li>
              <li>
                <a href="#project-design" className="text-tech-blue-100 hover:text-white transition-colors duration-200">Project Design</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-tech-blue-200" />
                <a href="mailto:info@techencraft.com" className="text-tech-blue-100 hover:text-white transition-colors duration-200">
                  info@techencraft.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-tech-blue-200" />
                <a href="tel:+1234567890" className="text-tech-blue-100 hover:text-white transition-colors duration-200">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-tech-blue-800 mt-10 pt-6 text-center text-tech-blue-200">
          <p>&copy; {new Date().getFullYear()} Techencraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
