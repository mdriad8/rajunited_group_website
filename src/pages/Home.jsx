import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaUsers,
  FaHandshake,
  FaPassport,
  FaPlane,
  FaMedkit,
  FaGraduationCap,
  FaWhatsapp,
} from "react-icons/fa";

import HeroSection from "../components/HeroSection";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import VideoSection from "../components/VideoSection";
import ImageGallery from "../components/ImageGallery";
import TestimonialCard from "../components/TestimonialCard";

const services = [
  {
    icon: FaUsers,
    title: "Worker Recruitment",
    description:
      "Sourcing qualified candidates from Bangladesh across various industries including manufacturing, construction, and service sectors.",
  },
  {
    icon: FaMedkit,
    title: "Medical Screening",
    description:
      "Comprehensive medical examinations ensuring all workers are medically fit before deployment to Malaysia.",
  },
  {
    icon: FaGraduationCap,
    title: "Pre-departure Training",
    description:
      "Thorough training programs preparing workers for their roles and cultural adaptation in Malaysia.",
  },
  {
    icon: FaPassport,
    title: "Documentation Support",
    description:
      "Complete assistance with passports, visas, work permits, and all necessary legal documentation.",
  },
  {
    icon: FaPlane,
    title: "Travel Arrangement",
    description:
      "End-to-end travel coordination from Bangladesh to Malaysia, ensuring smooth transitions for workers.",
  },
  {
    icon: FaHandshake,
    title: "Agency Partnership",
    description:
      "Exclusive collaboration with License C agencies in Malaysia, providing backend support for seamless operations.",
  },
];

const testimonials = [
  {
    name: "Ahmad Rahman",
    position: "Director",
    company: "Global HR Solutions Sdn Bhd",
    quote:
      "Working with RajUnited Group has transformed our recruitment process. Their efficiency and reliability have helped us meet our clients' manpower needs consistently.",
  },
  {
    name: "Lim Wei Ming",
    position: "Managing Partner",
    company: "Malaysia Manpower Services",
    quote:
      "Their commitment to providing only medically fit and well-trained workers has significantly reduced our onboarding time and improved worker retention rates.",
  },
  {
    name: "Sarah Tan",
    position: "Operations Manager",
    company: "Workforce International",
    quote:
      "RajUnited's transparent process and regular updates make them stand out from other agencies. We always know exactly where we are in the recruitment process.",
  },
];

const Home = () => {
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <HeroSection />

      {/* About Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Your Trusted Manpower Partner"
                subtitle="About RajUnited Group"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <p className="text-gray-700">
                  At RajUnited Group, we specialize in providing comprehensive
                  manpower solutions from Bangladesh to Malaysia. With years of
                  experience in the industry, we have established ourselves as a
                  reliable partner for Licensed Malaysian manpower agencies.
                </p>
                <p className="text-gray-700">
                  Our expertise lies in sourcing, screening, training, and
                  deploying workers across various sectors, ensuring they meet
                  the specific requirements of Malaysian employers.
                </p>
                <p className="text-gray-700">
                  We understand the complexities of international recruitment
                  and make the process smooth, transparent, and efficient for
                  our agency partners.
                </p>
                <div className="pt-4">
                  <Link to="/about" className="btn btn-primary">
                    Learn More About Us
                  </Link>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src="https://blogger.googleusercontent.com/img/a/AVvXsEiy4uGyHmM4wD1VIxdaHfHoMK8qTPATYfjPN_sYIUdQl9Gc9bWb4gNXTlPh8mlUK0cCJ3fcwLFgcncZVSWYqvEgDVJBlJVpii3tHBl3mm0azg2b_DcV7jVF91zW3tT2a5Pq4pnXVau7u7RvlGh6xZ-7SJCp0Qyq-3_yIDXPRHni6pP4ylJMKOguCCv3blg"
                alt="RajUnited Group Team"
                className="w-full h-80 object-cover object-top rounded-lg shadow"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container">
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          >
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">300+</div>
              <p className="text-primary-100">Agency Partners</p>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">5,000+</div>
              <p className="text-primary-100">Workers Deployed</p>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <p className="text-primary-100">Years Experience</p>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <p className="text-primary-100">Compliance Rate</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionTitle
            title="Our Comprehensive Services"
            subtitle="What We Offer"
            center={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* For License C Agencies Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src="https://blogger.googleusercontent.com/img/a/AVvXsEgZacF3G4yu1A_UPSunj3agM7-NMlDnGK-ZNdfVbf_IiRsBICbxEzsdgVSFIxzIjkKukyQ61Td7C7wPR_AX4ZTYCAlIxZ5CeGUBpbcGieThU-9gc36XPmPg2HH8MB5hhyaPbI4C0TaRnWST8rtJUMiYqNyaasen9P_AXPPBHFdLn6zjHtYJGocZgr1DLl8"
                alt="License C Partnership"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="order-1 lg:order-2">
              <SectionTitle
                title="For License C Agencies"
                subtitle="Exclusive Partnership"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <p className="text-gray-700">
                  At RajUnited Group, we work exclusively with licensed
                  Malaysian manpower agencies (License C holders). Our role is
                  to support you by handling everything on the Bangladesh side.
                </p>
                <p className="text-gray-700">
                  We do not contact employers directly. Instead, we act as your
                  back-end partner, making the recruitment process smoother,
                  faster, and more profitable for you.
                </p>
                <ul className="space-y-2 ml-6 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    Medically Fit Workers Only
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    All-In-One Bangladesh Support
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    Transparent Process
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    Flexible Commission Models
                  </li>
                </ul>
                <div className="pt-4">
                  <Link to="/for-agencies" className="btn btn-primary">
                    Learn More
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection />

      {/* Testimonials Section */}
      <section className="section bg-white">
        <div className="container">
          <SectionTitle
            title="What Our Partners Say"
            subtitle="Testimonials"
            center={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                position={testimonial.position}
                company={testimonial.company}
                quote={testimonial.quote}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionTitle
            title="Our Work in Action"
            subtitle="Gallery"
            center={true}
          />
          <ImageGallery />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container">
          <motion.div
            ref={ctaRef}
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Contact us today to discuss how we can support your manpower
              needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
