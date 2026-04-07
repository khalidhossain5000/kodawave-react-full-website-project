import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const NavCtaButton = ({ 
  text = "Contact Us", 
  bgGradient = "from-[#e4dafd] to-[#becafc]" 
}) => {
  const letters = text.split("");

  // Container variants for staggered animation
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  // Letter variants for the waving effect
  const letterVariants = {
    initial: { y: 0, opacity: 0.8 },
    animate: {
      y: [0, -3, 0],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div 
      initial="initial"
      whileHover="animate"
      className="relative inline-block"
    >
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.96 }}
        className={`
          relative flex items-center justify-center 
          px-6 py-2.5 rounded-[24px] border border-white/20
          bg-gradient-to-b ${bgGradient}
          cursor-pointer select-none overflow-hidden
          shadow-[0px_4px_10px_rgba(0,0,0,0.05),inset_0px_1px_2px_rgba(255,255,255,0.5)]
          transition-shadow duration-300 hover:shadow-lg
        `}
      >
        {/* Glow Overlay - smooth fade in on hover */}
        <motion.div 
          className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />

        {/* Magic Icon with Flicker Effect */}
        <motion.svg
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-5 h-5 mr-2.5 fill-slate-700 relative z-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
        </motion.svg>

        {/* Animated Letters Container */}
        <motion.div 
          variants={containerVariants}
          animate="animate"
          className="flex relative z-10"
        >
          {letters.map((char, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              className="inline-block text-slate-800 font-semibold text-[15px]"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

export default NavCtaButton;