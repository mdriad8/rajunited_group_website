import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "For Agencies", path: "/for-agencies" },
  { name: "Process", path: "/process" },
  { name: "Contact", path: "/contact" },
];

const Navbar = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-1 text-2xl font-bold"
          >
            <span className="text-white">RajUnited</span>
            <span className="text-amber-500">Group</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-colors duration-200 ${
                    isScrolled
                      ? isActive
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                      : isActive
                      ? "text-white"
                      : "text-white/90 hover:text-white"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <a
              href="https://wa.me/60147217651"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                isScrolled
                  ? "bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-green-600/30"
                  : "bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
              }`}
            >
              WhatsApp Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100/50 transition duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100"
          >
            <nav className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-700 hover:bg-gray-50"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
                <a
                  href="https://wa.me/60147217651"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-4 py-3 bg-green-600 text-white rounded-lg text-sm font-medium text-center hover:bg-green-700 transition-colors duration-200"
                >
                  WhatsApp Us
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
