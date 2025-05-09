import React from "react";
import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">RajUnited Group</h3>
            <p className="text-gray-300 mb-4">
              Reliable Manpower Deployment Partner from Bangladesh – Powered by
              Local Malaysian Compliance
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-white hover:text-primary-400 transition-colors"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-white hover:text-primary-400 transition-colors"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=rzCrQIH68ew"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary-400 transition-colors"
              >
                <FaYoutube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/for-agencies"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  For License C Agencies
                </Link>
              </li>
              <li>
                <Link
                  to="/process"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Our Process
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Worker Recruitment</li>
              <li className="text-gray-300">Documentation Support</li>
              <li className="text-gray-300">Medical Screening</li>
              <li className="text-gray-300">Pre-departure Training</li>
              <li className="text-gray-300">Travel Arrangement</li>
              <li className="text-gray-300">Agency Partnership</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="h-5 w-5 text-primary-400 mt-1 mr-3" />
                <span className="text-gray-300">Kuala Lumpur, Malaysia</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="h-5 w-5 text-primary-400 mr-3" />
                <span className="text-gray-300">+60 14-721 7651</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="h-5 w-5 text-primary-400 mr-3" />
                <span className="text-gray-300">info@rajunitedgroup.com</span>
              </li>
              <li className="flex items-center">
                <FaWhatsapp className="h-5 w-5 text-primary-400 mr-3" />
                <a
                  href="https://wa.me/60147217651"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} RajUnited Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
