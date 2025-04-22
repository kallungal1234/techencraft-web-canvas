"use client";
import { motion } from "framer-motion";

const processSteps = [
  {
    title: "Requirement Analysis",
    img: "/lovable-uploads/requirement_analysis.jpg",
  },
  {
    title: "Planning",
    img: "/lovable-uploads/planning.jpg",
  },
  {
    title: "Development",
    img: "/lovable-uploads/development.jpg",
  },
  {
    title: "Delivered",
    img: "/lovable-uploads/delivery.jpg",
  },
];

const WorkingStyle = () => {
  return (
  <section className="pt-10 bg-white text-center">
    {/* Section Heading */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="mb-14"
    >
      <h2 className="text-3xl font-bold mt-3">Our Working Process</h2>
      {/* New Sentence Below Heading */}
      <p className="text-lg mt-4 text-gray-600">
        From analysis to delivery, we ensure a seamless journey at every step.
      </p>
    </motion.div>

    {/* Process Items */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 px-9 max-w-7xl mx-auto">
      {processSteps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
        >
          <div className="relative w-40 h-40">
            <img
              src={step.img}
              alt={step.title}
              className="w-full h-full object-cover rounded-full border-4 border-dotted border-blue-600"
            />
          </div>
          <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
        </motion.div>
      ))}
    </div>
  </section>

  );
};

export default WorkingStyle;
