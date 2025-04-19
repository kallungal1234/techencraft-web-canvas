
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutUs from '@/components/AboutUs';
import ServicesSection from '@/components/ServicesSection';
import LatestProjects from '@/components/LatestProjects';
import WorkingStyle from '@/components/WorkingStyle';
import TechStack from '@/components/TechStack';
import WhyChooseUs from '@/components/WhyChooseUs';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <ServicesSection />
      <LatestProjects />
      <WorkingStyle />
      <TechStack />
      <WhyChooseUs />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
