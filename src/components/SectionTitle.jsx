import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SectionTitle = ({ title, subtitle, center = false, light = false }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${center ? "text-center mx-auto max-w-3xl" : ""}`}
    >
      {subtitle && (
        <p
          className={`text-sm uppercase tracking-wider font-semibold mb-2 ${
            light ? "text-primary-300" : "text-primary-600"
          }`}
        >
          {subtitle}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold ${
          light ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      <div
        className={`h-1 w-20 mt-4 rounded ${center ? "mx-auto" : ""} ${
          light ? "bg-primary-400" : "bg-primary-600"
        }`}
      ></div>
    </motion.div>
  );
};

export default SectionTitle;
