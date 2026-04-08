import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
const Subtitle = ({ children, className }) => {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`xl:font-medium text-[16px] xl:text-lg text-center font-medium bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent leading-relaxed font-inter ${className}`}
    >
      {children}
    </motion.p>
  );
};

export default Subtitle;
