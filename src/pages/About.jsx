import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaUsers,
  FaHandshake,
  FaGlobe,
  FaCheckCircle,
  FaUserTie,
} from "react-icons/fa";

import SectionTitle from "../components/SectionTitle";
import ImageGallery from "../components/ImageGallery";

const About = () => {
  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [teamRef, teamInView] = useInView({
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
              About RajUnited Group
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-primary-100 mb-8"
            >
              Your Trusted Partner in Manpower Deployment
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src="https://blogger.googleusercontent.com/img/a/AVvXsEiy4uGyHmM4wD1VIxdaHfHoMK8qTPATYfjPN_sYIUdQl9Gc9bWb4gNXTlPh8mlUK0cCJ3fcwLFgcncZVSWYqvEgDVJBlJVpii3tHBl3mm0azg2b_DcV7jVF91zW3tT2a5Pq4pnXVau7u7RvlGh6xZ-7SJCp0Qyq-3_yIDXPRHni6pP4ylJMKOguCCv3blg"
                alt="RajUnited Group Team"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div>
              <SectionTitle title="Our Story" subtitle="Who We Are" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <p className="text-gray-700">
                  RajUnited Group was founded with a vision to bridge the gap
                  between Malaysian employers' manpower needs and Bangladesh's
                  skilled workforce. Over the years, we have established
                  ourselves as a trusted name in the industry.
                </p>
                <p className="text-gray-700">
                  Our founder, Niaz Khan, recognized the challenges faced by
                  both Malaysian agencies and Bangladeshi workers in the
                  international recruitment process. With a deep understanding
                  of both countries' regulations and cultural nuances, he
                  established RajUnited Group to create a seamless connection.
                </p>
                <p className="text-gray-700">
                  Today, we are proud to be the preferred partner for numerous
                  License C agencies in Malaysia, helping them fulfill their
                  manpower requirements efficiently and ethically.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionTitle
            title="Our Core Values"
            subtitle="What Drives Us"
            center={true}
          />

          <motion.div
            ref={valuesRef}
            initial={{ opacity: 0 }}
            animate={valuesInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <FaHandshake className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We operate with complete transparency and honesty in all our
                dealings, ensuring trust at every step of the process.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <FaCheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We are committed to delivering the highest quality service,
                ensuring that both agencies and workers benefit from our
                expertise.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <FaGlobe className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Responsibility</h3>
              <p className="text-gray-600">
                We take our role in international labor migration seriously,
                ensuring ethical practices and worker welfare at all times.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="section bg-white">
        <div className="container">
          <SectionTitle
            title="Our Leadership Team"
            subtitle="Meet The Experts"
            center={true}
          />

          <motion.div
            ref={teamRef}
            initial={{ opacity: 0 }}
            animate={teamInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src="https://blogger.googleusercontent.com/img/a/AVvXsEjGS72Loqd-zta7ri9jm1Hq98QptniMrE0wq9s6PhgIAkBKP4BFYC1xKEmmBBe-uxqFnkePx5r_1k-kRkWYEJv4brJziE2B4C4MlPaZvmvcSTWgzryy_-KOCWw32TLGcPox7V6Zdkf5k4-vnFLLsb0kXsu-MhIquI9ufzk4fHXeIrBDp4XkzGZuU6Bdzzc"
                  alt="Niaz Khan"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Niaz Khan</h3>
                <p className="text-primary-600 mb-3">Founder & Director</p>
                <p className="text-gray-600">
                  With over 15 years of experience in international recruitment,
                  Niaz leads our operations with expertise and vision.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src="https://blogger.googleusercontent.com/img/a/AVvXsEgZacF3G4yu1A_UPSunj3agM7-NMlDnGK-ZNdfVbf_IiRsBICbxEzsdgVSFIxzIjkKukyQ61Td7C7wPR_AX4ZTYCAlIxZ5CeGUBpbcGieThU-9gc36XPmPg2HH8MB5hhyaPbI4C0TaRnWST8rtJUMiYqNyaasen9P_AXPPBHFdLn6zjHtYJGocZgr1DLl8"
                  alt="Sarah Rahman"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Sarah Rahman</h3>
                <p className="text-primary-600 mb-3">Operations Manager</p>
                <p className="text-gray-600">
                  Sarah ensures smooth day-to-day operations and maintains our
                  high standards of service delivery.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src="https://blogger.googleusercontent.com/img/a/AVvXsEjbnKaw4a-JIuTc-MqVUYiPm1JiOMdNi9Xvybs2zcwMsoCrDR76MO9C4L9Ud1a_KVAyG7TzhB6JlR0xIDidQX1UbPllbZIjf4i5f4I1OhSubL62FYUyHdsGB1pG0_8Kv4nJQr9yaT8W8RUz8b777rDb9QP7QJovG9ChoDpimfBVNOjFurYiARJX9ksr8A8"
                  alt="Mohammad Ali"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Mohammad Ali</h3>
                <p className="text-primary-600 mb-3">Recruitment Specialist</p>
                <p className="text-gray-600">
                  Mohammad leads our recruitment team, ensuring we source the
                  right candidates for every position.
                </p>
              </div>
            </motion.div>
          </motion.div>
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

      {/* Stats Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
