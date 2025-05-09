import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaCheckCircle,
  FaUserTie,
  FaNotesMedical,
  FaGraduationCap,
  FaFileAlt,
  FaPlane,
  FaWhatsapp,
} from "react-icons/fa";

import SectionTitle from "../components/SectionTitle";

const ForAgencies = () => {
  const [processRef, processInView] = useInView({
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
              Are you a License C Agency ?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-primary-100 mb-8"
            >
              Let Us Be Your Trusted Bangladesh-Side Partner
            </motion.p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-lg leading-relaxed text-gray-700">
                At Raj United, we work exclusively with licensed Malaysian
                manpower agencies (License C agencies). Our role is to support
                you by sourcing, screening, training, and deploying workers from
                Bangladesh – with zero risk to your agency's reputation or
                employer relationships.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                We do not contact employers directly. Instead, we act as your
                back-end partner, making the recruitment process smoother,
                faster, and more profitable for you.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionTitle
            title="What We Offer You"
            subtitle="Our Services"
            center={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-start">
                <FaNotesMedical className="text-primary-600 text-2xl mt-1 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Medically Fit Workers Only
                  </h3>
                  <p className="text-gray-600">
                    We only process candidates who pass full medical
                    examinations, ensuring they are fit and ready for work upon
                    arrival.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-start">
                <FaUserTie className="text-primary-600 text-2xl mt-1 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Category Expertise
                  </h3>
                  <p className="text-gray-600">
                    Specialized recruitment for service, manufacturing,
                    construction and plantation.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-start">
                <FaFileAlt className="text-primary-600 text-2xl mt-1 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    All-In-One Bangladesh Support
                  </h3>
                  <p className="text-gray-600">
                    Complete handling of interview, medical, training, passport,
                    BMET, embassy, and ticketing processes.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-start">
                <FaCheckCircle className="text-primary-600 text-2xl mt-1 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Transparent Process
                  </h3>
                  <p className="text-gray-600">
                    No surprises – regular updates, clear documentation, and
                    verified biodata throughout the process.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="section bg-white">
        <div className="container">
          <SectionTitle
            title="How We Work with License C Agencies"
            subtitle="Our Process"
            center={true}
          />

          <motion.div
            ref={processRef}
            initial={{ opacity: 0 }}
            animate={processInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto pb-32"
          >
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 h-full w-1 bg-primary-200 transform -translate-x-1/2"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="relative">
                  <div className="flex items-center md:justify-center">
                    <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold shadow-md">
                      1
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:absolute md:left-0 md:top-0 md:w-[calc(50%-2rem)] md:pr-8 md:text-right">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        processInView
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: -20 }
                      }
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="bg-white p-6 rounded-lg shadow-md"
                    >
                      <h3 className="text-xl font-semibold mb-2">
                        Demand Reception
                      </h3>
                      <p className="text-gray-600">
                        You receive demand from your client and establish your
                        requirements.
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative">
                  <div className="flex items-center md:justify-center">
                    <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold shadow-md">
                      2
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:absolute md:right-0 md:top-0 md:w-[calc(50%-2rem)] md:pl-8">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={
                        processInView
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: 20 }
                      }
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="bg-white p-6 rounded-lg shadow-md"
                    >
                      <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
                      <p className="text-gray-600">
                        You contact us with job description and specific worker
                        requirements.
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative">
                  <div className="flex items-center md:justify-center">
                    <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold shadow-md">
                      3
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:absolute md:left-0 md:top-0 md:w-[calc(50%-2rem)] md:pr-8 md:text-right">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        processInView
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: -20 }
                      }
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="bg-white p-6 rounded-lg shadow-md"
                    >
                      <h3 className="text-xl font-semibold mb-2">
                        Biodata Provision
                      </h3>
                      <p className="text-gray-600">
                        We provide ready biodata and start processing selected
                        workers.
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="relative">
                  <div className="flex items-center md:justify-center">
                    <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold shadow-md">
                      4
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:absolute md:right-0 md:top-0 md:w-[calc(50%-2rem)] md:pl-8">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={
                        processInView
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: 20 }
                      }
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="bg-white p-6 rounded-lg shadow-md"
                    >
                      <h3 className="text-xl font-semibold mb-2">
                        Fee Collection
                      </h3>
                      <p className="text-gray-600">
                        You collect your agency fee from the employer based on
                        your margin.
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="relative">
                  <div className="flex items-center md:justify-center">
                    <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold shadow-md">
                      5
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:absolute md:left-0 md:top-0 md:w-[calc(50%-2rem)] md:pr-8 md:text-right">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        processInView
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: -20 }
                      }
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="bg-white p-6 rounded-lg shadow-md"
                    >
                      <h3 className="text-xl font-semibold mb-2">
                        Complete Recruitment
                      </h3>
                      <p className="text-gray-600">
                        We complete the entire recruitment process from
                        Bangladesh to Malaysia with full support till arrival.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container">
          <SectionTitle
            title="Why Agencies Trust Raj United"
            subtitle="Our Promise"
            center={true}
            light={true}
          />

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4">
                100% focus on License C collaboration
              </h3>
              <p className="text-white/80">
                We never deal directly with employers, ensuring your client
                relationships remain secure.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4">
                Clean track record in Bangladesh
              </h3>
              <p className="text-white/80">
                Our verified sourcing system ensures reliable and compliant
                worker recruitment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4">
                Fast communication via WhatsApp
              </h3>
              <p className="text-white/80">
                Direct access to Niaz Khan (Founder & Director) for immediate
                responses and updates.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4">
                Over 300 agencies in our network
              </h3>
              <p className="text-white/80">
                A strong foundation of partnerships across Malaysia, built on
                trust and reliability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <SectionTitle
              title="Let's Work Together"
              subtitle="Next Steps"
              center={true}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-lg text-gray-700 mb-8"
            >
              Contact us on WhatsApp or download our updated company profile
              below to learn more about how we can support your agency.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="https://wa.me/60147217651"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-green-600 text-white hover:bg-green-700 flex items-center justify-center"
              >
                <FaWhatsapp className="mr-2" />
                WhatsApp Us
              </a>

              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForAgencies;
