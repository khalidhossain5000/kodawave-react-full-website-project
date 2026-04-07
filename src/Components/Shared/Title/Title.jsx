import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
const Title = ({ title, highlightedWord, className }) => {
  return (
    <motion.h2
     initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          
      className={`text-3xl lg:text-4xl xl:text-6xl  font-bold text-surface-900 font-grotesk ${className}`}
    >
      {title}{" "}
      <span className="font-inter bg-linear-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent ">
        {highlightedWord}
      </span>
    </motion.h2>
  );
};

export default Title;
