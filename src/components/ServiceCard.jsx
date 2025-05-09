import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-600 mb-5">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
