import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { cn } from '@/lib/utils';

const LatestProjects = () => {
  const projects = [
    {
      image: "/lovable-uploads/banking.jpg",
      title: "Banking Domain",
      category: "Web Development"
    },
    {
      image: "/lovable-uploads/lowyer.jpeg",
      title: "Lowyers Diary",
      category: "Web Development"
    },
    {
      image: "/lovable-uploads/school.png",
      title: "Schooling App",
      category: "Mobile Development"
    },
    {
      image: "/lovable-uploads/matrimoniyal.jpeg",
      title: "Indian Matrimonial",
      category: "Web Development"
    },
    {
      image: "/lovable-uploads/convergence.png",
      title: "Educational Platform",
      category: "CMS Development"
    },
    {
      image: "/lovable-uploads/mrf.jpeg",
      title: "MRF Tyre Retreading",
      category: "ERP Application"
    },
    {
      image: "/lovable-uploads/ecommerce.jpg",
      title: "E-commerce Platform",
      category: "Web Development"
    },
    {
      image: "/lovable-uploads/portfolio.jpg",
      title: "Portfolio Showcase",
      category: "Design + Dev"
    },
    {
      image: "/lovable-uploads/restaurant.jpg",
      title: "Restaurant Ordering System",
      category: "Mobile Development"
    },
    {
      image: "/lovable-uploads/ai-dashboard.jpg",
      title: "AI Analytics Dashboard",
      category: "AI/ML"
    }
  ];

  return (
    <section id="works" className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 code-background opacity-10" />
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-tech-blue-900 drop-shadow-lg">
            Previous Works
          </h2>
          <div className="w-20 h-1 bg-tech-blue-500 mx-auto my-4 rounded-lg" />
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our featured projects delivered with precision and creativity.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          loop={true}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
          }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          className="pb-12"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="max-w-xs">
              <div className="rounded-xl overflow-hidden shadow-md group bg-white hover:shadow-xl transition-shadow duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-tech-blue-800 group-hover:text-tech-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{project.category}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="absolute w-80 h-80 bg-gradient-to-br from-tech-blue-100 via-white to-white left-[-100px] top-[-60px] blur-3xl opacity-30 rounded-full pointer-events-none" />
      <div className="absolute w-96 h-96 bg-gradient-to-r from-sky-100/40 via-white/40 to-tech-blue-100/70 right-[-180px] bottom-0 blur-2xl opacity-40 rounded-full pointer-events-none" />
    </section>
  );
};

export default LatestProjects;