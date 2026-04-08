/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import Subtitle from "../../Subtitle/Subtitle";


const PageHeader = ({
  watermark, // "ABOUT US"
  titleFirstLine, // "Architecting" 
  titleSecondLine, // "Digital" 
  titleThirdLine, // "Authority" 
  subtitle, 
  stats, 
}) => {
  return (
    <section className="relative pt-22 pb-20 lg:pt-36 lg:pb-32 px-6 overflow-hidden bg-[#fbf6f6]">
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e1d5fc] rounded-full blur-[120px] opacity-30 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#d5e5fd] rounded-full blur-[100px] opacity-40 translate-y-1/3 -translate-x-1/4"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Watermark Title */}
        <div className="flex justify-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black font-grotesk tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-indigo-600/20 to-indigo-600/5 opacity-50 select-none absolute top-5 md:top-0 uppercase"
          >
            {watermark}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end mt-10 lg:mt-22">
          {/* Left Side: Dynamic Title */}
          <div className="max-w-3xl">
            <motion.h4
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-indigo-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-6 font-inter"
            >
              Elite Strategic Partner
            </motion.h4>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[0.95] tracking-tighter font-grotesk"
            >
              {titleFirstLine} <br />
              <span className="text-slate-300 italic font-bold">
                {titleSecondLine}
              </span>{" "}
              <br />
              <span className="italic bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent font-grotesk">
                {titleThirdLine}
              </span>
            </motion.h1>
          </div>

          {/* Right Side: Description & Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="pb-2 lg:pb-4"
          >
            <Subtitle
              className={"leading-relaxed max-w-xl text-left font-inter"}
            >
              {subtitle}
            </Subtitle>

            <div className="mt-8 flex justify-center lg:justify-start gap-8 border-t border-slate-200 pt-8">
              {stats &&
                stats.map((stat, index) => (
                  <div key={index}>
                    <h5 className="text-2xl font-bold text-slate-900 font-grotesk">
                      {stat.label}
                    </h5>
                    <p className="text-slate-500 text-xs font-inter uppercase tracking-widest mt-1">
                      {stat.value}
                    </p>
                  </div>
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
