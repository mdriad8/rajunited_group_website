import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Since we don't have React Router in this playground, I'm using simple buttons
// Replace with Link components if using React Router
const Button = ({ children, primary, className, ...props }) => {
  return (
    <button
      className={`px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center gap-2 ${
        primary
          ? "bg-blue-600 hover:bg-blue-700 text-white"
          : "bg-white hover:bg-gray-100 text-blue-600"
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-gray-900 overflow-hidden">
      {/* Background image with gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://blogger.googleusercontent.com/img/a/AVvXsEjM-H-fk90CiyuXhlk8N7kYfx5B2I16NFnxrHqaZpjjGYGPF1FHttWF2nLmRa1uMPbOqDGPyMLqhAFsqG4e2XRs2S75ScbnjFQdqHPHG6tsIVy8U4f0ftevPYJXbnIHPgUovKy98nhgdt65R7YkVKVI9Qy_3jE0vIiqdjLKoqXuiuAu9gsgQh_0V0WVIa8')",
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-gray-900/80 to-gray-900/90"></div>
      </div>

      {/* Content container */}
      <div className="container mx-auto px-6 h-full flex items-center pt-24 relative z-10">
        <div className="max-w-3xl">
          {/* Company tag with animated underline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-md text-sm font-semibold tracking-wide">
              RajUnited Group
            </span>
          </motion.div>

          {/* Main heading with staggered animation */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            <div>Best Foreign Worker</div>
            <div>Placement from</div>
            <div className="text-blue-400">Bangladesh</div>
          </motion.h1>

          {/* Subheading with glow effect */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-blue-100 mb-8 max-w-2xl font-medium"
          >
            Powered by Malaysian Compliance - Providing skilled workforce
            solutions tailored to your industry needs
          </motion.p>

          {/* CTA buttons with hover effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button primary>
              For License C Agencies
              <ArrowRight size={18} />
            </Button>
            <Button>Contact Us</Button>
          </motion.div>

          {/* Stats or trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">500+</div>
              <div className="text-sm text-gray-300">Workers Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">15+</div>
              <div className="text-sm text-gray-300">Partner Agencies</div>
            </div>
            <div className="text-center hidden md:block">
              <div className="text-3xl font-bold text-blue-400">100%</div>
              <div className="text-sm text-gray-300">Compliance Rate</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
