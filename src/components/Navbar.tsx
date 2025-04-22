import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // Set to true when scrolling down 20px
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
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out',
        // Set background to transparent or white depending on scroll state
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4',
        // Always white on mobile
        'md:py-2'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center transition-opacity duration-300 hover:opacity-100 opacity-90"
        >
          <img
            src="/lovable-uploads/logo-dark.png"
            alt="Techencraft Logo"
            className="h-16 md:h-20 transition-all duration-300"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['about', 'services', 'tech-stack', 'why-us'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="nav-link font-medium text-tech-blue-950 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-tech-blue-500 hover:after:w-full after:transition-all after:duration-300"
            >
              {section.replace('-', ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
            </a>
          ))}
          <Button className="bg-tech-blue-500 hover:bg-tech-blue-600 text-white transition-transform transform hover:scale-105 hover:shadow-lg">
            <a href="#contact">Contact Us</a>
          </Button>
        </nav>

        {/* Mobile Menu Button on Right */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden px-6 text-tech-blue-950"
          onClick={toggleMobileMenu}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Menu (Right slide-in) */}
      <div
        className={cn(
          'fixed inset-0 bg-white z-40 transition-transform duration-500 ease-in-out transform md:hidden',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Close Button on Right */}
        <div className="flex justify-end px-6 pt-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            className="text-tech-blue-950"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Navigation Links */}
        <nav className="flex flex-col items-center space-y-6 pt-6">
          {['about', 'services', 'tech-stack', 'why-us'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl font-medium nav-link text-tech-blue-950 hover:text-tech-blue-600 transition-colors"
            >
              {section.replace('-', ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
            </a>
          ))}
          <Button className="bg-tech-blue-500 hover:bg-tech-blue-600 text-white mt-4 w-48 hover:scale-105 transition-transform">
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              Contact Us
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
