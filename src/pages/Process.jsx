import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaUsers,
  FaFileAlt,
  FaMedkit,
  FaGraduationCap,
  FaPassport,
  FaPlane,
  FaWhatsapp,
} from "react-icons/fa";

import SectionTitle from "../components/SectionTitle";
import VideoSection from "../components/VideoSection";

const Process = () => {
  const [processRef, processInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const processSteps = [
    {
      icon: FaUsers,
      title: "Candidate Selection",
      description:
        "We source and screen candidates based on job requirements, conducting thorough interviews and skill assessments.",
      timeframe: "1-2 weeks",
    },
    {
      icon: FaMedkit,
      title: "Medical Examination",
      description:
        "Selected candidates undergo comprehensive medical tests at authorized medical centers to ensure they are fit for work.",
      timeframe: "1 week",
    },
    {
      icon: FaGraduationCap,
      title: "Training & Orientation",
      description:
        "Workers receive job-specific training and cultural orientation to prepare them for work in Malaysia.",
      timeframe: "2-3 weeks",
    },
    {
      icon: FaPassport,
      title: "Documentation",
      description:
        "We handle all paperwork including passport processing, visa applications, and work permit arrangements.",
      timeframe: "3-4 weeks",
    },
    {
      icon: FaFileAlt,
      title: "Legal Clearances",
      description:
        "Obtaining necessary approvals from BMET, the Malaysian embassy, and other regulatory bodies.",
      timeframe: "2-3 weeks",
    },
    {
      icon: FaPlane,
      title: "Deployment",
      description:
        "Coordination of travel arrangements and ensuring smooth arrival in Malaysia with proper handover to the agency.",
      timeframe: "1 week",
    },
  ];

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
              Our Recruitment Process
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-primary-100 mb-8"
            >
              Efficient, Transparent, and Reliable
            </motion.p>
          </div>
        </div>
      </section>

      {/* Process Overview Section */}
      <section className="section bg-white">
        <div className="container">
          <SectionTitle
            title="Our End-to-End Process"
            subtitle="How We Work"
            center={true}
          />

          <motion.div
            ref={processRef}
            initial={{ opacity: 0 }}
            animate={processInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-5xl mx-auto pt-10 pb-32"
          >
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 h-full w-1 bg-primary-200 transform -translate-x-1/2"></div>

            {/* Timeline Items */}
            <div className="space-y-20">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center md:justify-center">
                    <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </div>

                  <div
                    className={`mt-6 md:mt-0 md:absolute md:top-0 ${
                      index % 2 === 0
                        ? "md:left-0 md:w-[calc(50%-3rem)] md:pr-8 md:text-right"
                        : "md:right-0 md:w-[calc(50%-3rem)] md:pl-8"
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      animate={
                        processInView
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }
                      }
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
                    >
                      <div
                        className={`flex items-start ${
                          index % 2 === 0 ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <div
                          className={`flex-shrink-0 ${
                            index % 2 === 0 ? "md:ml-4" : "mr-4"
                          }`}
                        >
                          <div className="flex items-center justify-center h-14 w-14 rounded-full bg-primary-100 text-primary-600">
                            <step.icon className="h-7 w-7" />
                          </div>
                        </div>
                        <div className={index % 2 === 0 ? "md:text-right" : ""}>
                          <h3 className="text-xl font-semibold mb-2">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 mb-3">
                            {step.description}
                          </p>
                          <div className="inline-block bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                            Timeframe: {step.timeframe}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection />

      {/* Agency Collaboration Section */}
      <section className="section bg-white">
        <div className="container">
          <SectionTitle
            title="How We Collaborate with Agencies"
            subtitle="Our Partnership Model"
            center={true}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src="https://blogger.googleusercontent.com/img/a/AVvXsEjGS72Loqd-zta7ri9jm1Hq98QptniMrE0wq9s6PhgIAkBKP4BFYC1xKEmmBBe-uxqFnkePx5r_1k-kRkWYEJv4brJziE2B4C4MlPaZvmvcSTWgzryy_-KOCWw32TLGcPox7V6Zdkf5k4-vnFLLsb0kXsu-MhIquI9ufzk4fHXeIrBDp4XkzGZuU6Bdzzc"
                alt="Agency Collaboration"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Agency's Role</h3>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      Manage direct relationship with employers
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      Collect agency fees from employers
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      Provide job specifications and requirements
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      Handle worker placement and onboarding in Malaysia
                    </li>
                  </ul>
                </div>

                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    RajUnited's Role
                  </h3>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      Handle all Bangladesh-side operations
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      Source, screen, and prepare workers
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      Process all documentation and clearances
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      Coordinate worker travel and deployment
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      Provide regular updates and transparent communication
                    </li>
                  </ul>
                </div>

                <p className="text-gray-700">
                  This clear division of responsibilities ensures a smooth,
                  efficient process where each party focuses on their area of
                  expertise.
                </p>

                <div className="pt-4">
                  <Link to="/for-agencies" className="btn btn-primary">
                    Learn More About Our Partnership
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Process Clarifications"
            center={true}
          />

          <div className="max-w-3xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">
                What is the typical timeline for the entire recruitment process?
              </h3>
              <p className="text-gray-600">
                The complete process typically takes 8-12 weeks from initial
                requirements to worker arrival in Malaysia. This timeline can
                vary based on the number of workers, specific documentation
                requirements, and current processing times at various government
                offices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">
                How do you ensure worker quality and reduce dropout rates?
              </h3>
              <p className="text-gray-600">
                We implement a rigorous screening process with multiple
                checkpoints, including skill verification, background checks,
                and thorough interviews. We also maintain ongoing communication
                with candidates throughout the process and provide comprehensive
                pre-departure orientation to set clear expectations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">
                What updates can agencies expect during the process?
              </h3>
              <p className="text-gray-600">
                We provide weekly status updates via email or WhatsApp,
                including progress reports on each batch of workers. Critical
                milestones such as medical clearances, visa approvals, and
                flight confirmations are communicated immediately. We also offer
                a dedicated point of contact for any urgent inquiries.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">
                What happens if a worker fails medical or security clearance?
              </h3>
              <p className="text-gray-600">
                If a worker fails any clearance check, we immediately notify the
                agency and promptly arrange for a replacement candidate. We
                maintain a buffer pool of pre-screened candidates to minimize
                delays in such situations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to Start the Process?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-primary-100 mb-8"
            >
              Contact us today to discuss your manpower needs and initiate our
              efficient recruitment process.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="btn bg-white text-primary-600 hover:bg-primary-50 hover:text-primary-700"
              >
                Contact Us
              </Link>
              <a
                href="https://wa.me/60147217651"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-green-600 text-white hover:bg-green-700 flex items-center justify-center"
              >
                <FaWhatsapp className="mr-2" />
                WhatsApp Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Process;
