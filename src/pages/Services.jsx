import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaUsers,
  FaUserTie,
  FaPassport,
  FaPlane,
  FaMedkit,
  FaGraduationCap,
  FaBuilding,
  FaIndustry,
  FaHammer,
  FaTree,
  FaHandshake,
} from "react-icons/fa";

import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";

const services = [
  {
    icon: FaUsers,
    title: "Worker Recruitment",
    description:
      "Comprehensive sourcing, screening, and selection of qualified workers based on specific job requirements and employer needs.",
    detail:
      "We maintain an extensive database of pre-screened candidates across various sectors, allowing for quick and efficient matching with job requirements. Our rigorous selection process involves skills assessment, background checks, and face-to-face interviews.",
  },
  {
    icon: FaMedkit,
    title: "Medical Screening",
    description:
      "Thorough medical examinations ensuring all workers are fit and healthy before deployment to Malaysia.",
    detail:
      "We partner with accredited medical facilities to conduct comprehensive health screenings, including general health assessment, infectious disease testing, and specialized examinations based on job requirements. Only candidates who pass all medical requirements proceed in the recruitment process.",
  },
  {
    icon: FaGraduationCap,
    title: "Pre-departure Training",
    description:
      "Specialized training programs preparing workers for their specific roles and cultural adaptation in Malaysia.",
    detail:
      "Our training programs include job-specific skills development, basic language training, cultural orientation, workplace safety, and legal awareness. This ensures workers arrive ready to integrate smoothly into their new work environment.",
  },
  {
    icon: FaPassport,
    title: "Documentation Support",
    description:
      "End-to-end assistance with all required documentation for legal employment in Malaysia.",
    detail:
      "We handle the complete documentation process, including passport processing, visa applications, work permit arrangements, BMET clearance, and embassy attestations. Our expertise ensures all paperwork complies with both Bangladeshi and Malaysian regulations.",
  },
  {
    icon: FaPlane,
    title: "Travel Arrangement",
    description:
      "Complete coordination of travel from Bangladesh to Malaysia, ensuring smooth transitions.",
    detail:
      "From flight bookings to airport assistance and coordination with receiving parties in Malaysia, we manage the entire travel process. We also provide pre-departure briefings and ensure workers have all necessary travel documents and information.",
  },
  {
    icon: FaHandshake,
    title: "Agency Partnership",
    description:
      "Exclusive collaboration with License C agencies in Malaysia, providing comprehensive backend support.",
    detail:
      "We work solely with licensed Malaysian agencies, handling all Bangladesh-side operations while our partners manage employer relations. This partnership model ensures compliance with regulations and creates a win-win situation for all parties involved.",
  },
];

const sectors = [
  {
    icon: FaBuilding,
    title: "Service Sector",
    workers: "Restaurant staff, hotel workers, cleaners, security personnel",
  },
  {
    icon: FaIndustry,
    title: "Manufacturing",
    workers: "Factory operators, production line workers, quality controllers",
  },
  {
    icon: FaHammer,
    title: "Construction",
    workers: "Laborers, masons, carpenters, electricians, welders",
  },
  {
    icon: FaTree,
    title: "Plantation",
    workers: "Harvesters, field workers, processing staff",
  },
];

const Services = () => {
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [sectorsRef, sectorsInView] = useInView({
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
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-primary-100 mb-8"
            >
              Comprehensive Manpower Solutions for License C Agencies
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="section bg-white" ref={servicesRef}>
        <div className="container">
          <SectionTitle
            title="Our Comprehensive Services"
            subtitle="What We Offer"
            center={true}
          />

          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center"
              >
                <div className="md:col-span-1 flex flex-col items-center md:items-start">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary-100 text-primary-600 mb-4">
                    <service.icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-semibold text-center md:text-left">
                    {service.title}
                  </h3>
                </div>
                <div className="md:col-span-4 bg-gray-50 rounded-lg p-8">
                  <p className="text-xl text-gray-700 mb-4">
                    {service.description}
                  </p>
                  <p className="text-gray-600">{service.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Sectors Section */}
      <section className="section bg-gray-50" ref={sectorsRef}>
        <div className="container">
          <SectionTitle
            title="Industry Sectors We Serve"
            subtitle="Our Specializations"
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  sectorsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-600 mr-4">
                      <sector.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {sector.title}
                    </h3>
                    <p className="text-gray-600">{sector.workers}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview Section */}
      <section className="section bg-white">
        <div className="container">
          <SectionTitle
            title="Our Recruitment Process"
            subtitle="How We Work"
            center={true}
          />

          <div className="max-w-4xl mx-auto pt-10 pb-24">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 h-full w-1 bg-primary-200 transform -translate-x-1/2"></div>

              {/* Timeline Items */}
              <div className="space-y-24">
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
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="bg-white p-6 rounded-lg shadow-md"
                    >
                      <h3 className="text-xl font-semibold mb-2">
                        Requirements Analysis
                      </h3>
                      <p className="text-gray-600">
                        We work with agencies to understand specific job
                        requirements and worker profiles.
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
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="bg-white p-6 rounded-lg shadow-md"
                    >
                      <h3 className="text-xl font-semibold mb-2">
                        Candidate Sourcing & Screening
                      </h3>
                      <p className="text-gray-600">
                        We identify, interview, and assess candidates based on
                        the specific requirements.
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
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="bg-white p-6 rounded-lg shadow-md"
                    >
                      <h3 className="text-xl font-semibold mb-2">
                        Medical Examination
                      </h3>
                      <p className="text-gray-600">
                        All selected candidates undergo comprehensive medical
                        tests to ensure fitness for work.
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
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="bg-white p-6 rounded-lg shadow-md"
                    >
                      <h3 className="text-xl font-semibold mb-2">
                        Documentation & Legal Processing
                      </h3>
                      <p className="text-gray-600">
                        We handle all paperwork including passports, visas, and
                        work permits.
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
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="bg-white p-6 rounded-lg shadow-md"
                    >
                      <h3 className="text-xl font-semibold mb-2">
                        Pre-departure Training
                      </h3>
                      <p className="text-gray-600">
                        Workers receive job-specific training and cultural
                        orientation before departure.
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="relative">
                  <div className="flex items-center md:justify-center">
                    <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold shadow-md">
                      6
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:absolute md:right-0 md:top-0 md:w-[calc(50%-2rem)] md:pl-8">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="bg-white p-6 rounded-lg shadow-md"
                    >
                      <h3 className="text-xl font-semibold mb-2">
                        Deployment & Arrival Support
                      </h3>
                      <p className="text-gray-600">
                        We coordinate travel arrangements and ensure smooth
                        arrival in Malaysia.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
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
              Ready to Streamline Your Recruitment Process?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-primary-100 mb-8"
            >
              Contact us today to discuss how we can support your manpower
              needs.
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
              <Link
                to="/for-agencies"
                className="btn bg-transparent border border-white text-white hover:bg-white/10"
              >
                Learn More About Our Partnership
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
