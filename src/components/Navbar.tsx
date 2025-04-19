import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2 animate-slide-down" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="/" className="flex items-center transition-opacity duration-300 hover:opacity-100 opacity-90">
          <img 
            src="/lovable-uploads/logo.jpg" 
            alt="Techencraft Logo" 
            className="h-8 md:h-10"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['about', 'services', 'tech-stack', 'why-us'].map(section => (
            <a 
              key={section}
              href={`#${section}`}
              className="nav-link font-medium text-tech-blue-950 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-tech-blue-500 hover:after:w-full after:transition-all after:duration-300"
            >
              {section.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </a>
          ))}
          <Button className="bg-tech-blue-500 hover:bg-tech-blue-600 text-white transition-transform transform hover:scale-105 hover:shadow-lg">
            <a href="#contact">Contact Us</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-white z-40 transform transition-transform duration-500 ease-in-out md:hidden",
        isMobileMenuOpen ? "translate-x-0 opacity-100 scale-100" : "translate-x-full opacity-0 scale-95"
      )}>
        <nav className="flex flex-col items-center space-y-6 pt-24 transition-opacity">
          {['about', 'services', 'tech-stack', 'why-us'].map(section => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl font-medium nav-link text-tech-blue-950 hover:text-tech-blue-600 transition-colors"
            >
              {section.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </a>
          ))}
          <Button className="bg-tech-blue-500 hover:bg-tech-blue-600 text-white mt-4 w-48 hover:scale-105 transition-transform">
            Contact Us
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
