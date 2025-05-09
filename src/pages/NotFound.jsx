import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <section className="min-h-screen pt-40 pb-20 bg-gray-50 flex items-center">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-primary-600 mb-6">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/" className="btn btn-primary inline-block">
              Back to Home
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
