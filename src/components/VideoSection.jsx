import React from "react";
import YouTube from "react-youtube";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionTitle from "./SectionTitle";

const VideoSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const videoId = "nC7zcqrXkeg"; // Extracted from the YouTube URL

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
    },
  };

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <SectionTitle
          title="See How We Work"
          subtitle="Our Process"
          center={true}
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl"
        >
          <YouTube videoId={videoId} opts={opts} className="w-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
