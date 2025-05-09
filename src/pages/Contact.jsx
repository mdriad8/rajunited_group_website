import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

import SectionTitle from "../components/SectionTitle";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const [infoRef, infoInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-primary-100 mb-8"
            >
              We're Here to Support Your Manpower Needs
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle
                title="Get in Touch"
                subtitle="Contact Information"
              />

              <motion.div
                ref={infoRef}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  infoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-600 mr-4">
                      <FaMapMarkerAlt className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      Office Location
                    </h3>
                    <p className="text-gray-600">Kuala Lumpur, Malaysia</p>
                    <p className="text-gray-600">Dhaka, Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-600 mr-4">
                      <FaEnvelope className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Email Us</h3>
                    <a
                      href="mailto:info@rajunitedgroup.com"
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      info@rajunitedgroup.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-600 mr-4">
                      <FaPhone className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Call Us</h3>
                    <p className="text-gray-600">Malaysia: +60 14-721 7651</p>
                    <p className="text-gray-600">
                      Bangladesh: +880 1XXX-XXXXXX
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600 mr-4">
                      <FaWhatsapp className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">WhatsApp</h3>
                    <p className="text-gray-600 mb-2">
                      For fastest response, contact us on WhatsApp
                    </p>
                    <a
                      href="https://wa.me/60147217651"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <FaWhatsapp className="mr-2" />
                      Start Chat
                    </a>
                  </div>
                </div>
              </motion.div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 1:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
                <p className="text-gray-500 mt-4 text-sm">
                  Note: All times are in local time zone (Malaysia/Bangladesh)
                </p>
              </div>
            </div>

            <div>
              <SectionTitle title="Send us a Message" subtitle="Contact Form" />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Using a placeholder image instead of actual map */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <SectionTitle
                title="Visit Our Office"
                subtitle="Office Locations"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">
                    Malaysia Office
                  </h3>
                  <p className="text-gray-600 mb-4">Kuala Lumpur, Malaysia</p>
                  <div className="flex items-center text-primary-600">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>Main Headquarters</span>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">
                    Bangladesh Office
                  </h3>
                  <p className="text-gray-600 mb-4">Dhaka, Bangladesh</p>
                  <div className="flex items-center text-primary-600">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>Recruitment & Processing Center</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2 rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src="https://blogger.googleusercontent.com/img/a/AVvXsEjbnKaw4a-JIuTc-MqVUYiPm1JiOMdNi9Xvybs2zcwMsoCrDR76MO9C4L9Ud1a_KVAyG7TzhB6JlR0xIDidQX1UbPllbZIjf4i5f4I1OhSubL62FYUyHdsGB1pG0_8Kv4nJQr9yaT8W8RUz8b777rDb9QP7QJovG9ChoDpimfBVNOjFurYiARJX9ksr8A8"
                alt="Office Location Map"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Contact FAQs"
            center={true}
          />

          <div className="max-w-3xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-2">
                What is the best way to reach you?
              </h3>
              <p className="text-gray-600">
                For fastest response, we recommend contacting us via WhatsApp at
                +60 14-721 7651. For formal inquiries, you can also email us at
                info@rajunitedgroup.com.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-2">
                How quickly can I expect a response?
              </h3>
              <p className="text-gray-600">
                We typically respond to all inquiries within 24 hours during
                business days. WhatsApp messages usually receive a response
                within a few hours or even minutes during business hours.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-2">
                Can I schedule a meeting or consultation?
              </h3>
              <p className="text-gray-600">
                Yes, we welcome meetings with potential agency partners. You can
                request a meeting through our contact form, email, or WhatsApp.
                We offer both in-person meetings at our offices and virtual
                consultations via video call.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
