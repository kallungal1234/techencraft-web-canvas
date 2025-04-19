
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="/" className="flex items-center opacity-90 hover:opacity-100 transition-opacity">
          <img 
            src="/lovable-uploads/62ed4bcb-70f5-4d32-95d9-bf78ea61fb8e.png" 
            alt="Techencraft Logo" 
            className="h-8 md:h-10"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="nav-link font-medium">About</a>
          <a href="#services" className="nav-link font-medium">Services</a>
          <a href="#tech-stack" className="nav-link font-medium">Tech Stack</a>
          <a href="#why-us" className="nav-link font-medium">Why Us</a>
          <Button className="bg-tech-blue-500 hover:bg-tech-blue-600 text-white">
            Contact Us
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

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 bg-white z-40 transition-transform duration-300 md:hidden pt-20",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="flex flex-col items-center space-y-6 py-8">
          <a 
            href="#about" 
            className="text-xl font-medium nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#services" 
            className="text-xl font-medium nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </a>
          <a 
            href="#tech-stack" 
            className="text-xl font-medium nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Tech Stack
          </a>
          <a 
            href="#why-us" 
            className="text-xl font-medium nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Why Us
          </a>
          <Button className="bg-tech-blue-500 hover:bg-tech-blue-600 text-white mt-4 w-48">
            Contact Us
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
