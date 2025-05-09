import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const imageUrls = [
  "https://blogger.googleusercontent.com/img/a/AVvXsEjM-H-fk90CiyuXhlk8N7kYfx5B2I16NFnxrHqaZpjjGYGPF1FHttWF2nLmRa1uMPbOqDGPyMLqhAFsqG4e2XRs2S75ScbnjFQdqHPHG6tsIVy8U4f0ftevPYJXbnIHPgUovKy98nhgdt65R7YkVKVI9Qy_3jE0vIiqdjLKoqXuiuAu9gsgQh_0V0WVIa8",
  "https://blogger.googleusercontent.com/img/a/AVvXsEjbnKaw4a-JIuTc-MqVUYiPm1JiOMdNi9Xvybs2zcwMsoCrDR76MO9C4L9Ud1a_KVAyG7TzhB6JlR0xIDidQX1UbPllbZIjf4i5f4I1OhSubL62FYUyHdsGB1pG0_8Kv4nJQr9yaT8W8RUz8b777rDb9QP7QJovG9ChoDpimfBVNOjFurYiARJX9ksr8A8",
  "https://blogger.googleusercontent.com/img/a/AVvXsEgZacF3G4yu1A_UPSunj3agM7-NMlDnGK-ZNdfVbf_IiRsBICbxEzsdgVSFIxzIjkKukyQ61Td7C7wPR_AX4ZTYCAlIxZ5CeGUBpbcGieThU-9gc36XPmPg2HH8MB5hhyaPbI4C0TaRnWST8rtJUMiYqNyaasen9P_AXPPBHFdLn6zjHtYJGocZgr1DLl8",
  "https://blogger.googleusercontent.com/img/a/AVvXsEjGS72Loqd-zta7ri9jm1Hq98QptniMrE0wq9s6PhgIAkBKP4BFYC1xKEmmBBe-uxqFnkePx5r_1k-kRkWYEJv4brJziE2B4C4MlPaZvmvcSTWgzryy_-KOCWw32TLGcPox7V6Zdkf5k4-vnFLLsb0kXsu-MhIquI9ufzk4fHXeIrBDp4XkzGZuU6Bdzzc",
  "https://blogger.googleusercontent.com/img/a/AVvXsEiy4uGyHmM4wD1VIxdaHfHoMK8qTPATYfjPN_sYIUdQl9Gc9bWb4gNXTlPh8mlUK0cCJ3fcwLFgcncZVSWYqvEgDVJBlJVpii3tHBl3mm0azg2b_DcV7jVF91zW3tT2a5Pq4pnXVau7u7RvlGh6xZ-7SJCp0Qyq-3_yIDXPRHni6pP4ylJMKOguCCv3blg",
];

const ImageGallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {imageUrls.map((url, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src={url}
            alt={`RajUnited Group - Image ${index + 1}`}
            className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ImageGallery;
