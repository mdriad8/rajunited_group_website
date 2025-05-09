import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialCard = ({ name, position, company, quote, delay = 0 }) => {
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
      <FaQuoteLeft className="text-primary-300 text-3xl mb-4" />
      <p className="text-gray-700 mb-4 italic">{quote}</p>
      <div className="border-t border-gray-200 pt-4">
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-gray-600">
          {position}, {company}
        </p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
