/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineClock,
  HiOutlineArrowRight,
} from "react-icons/hi2";
import Title from "../../Shared/Title/Title";
import Subtitle from "../../Shared/Subtitle/Subtitle";

const OfficeLocation = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white font-inter overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {/* Centered Section Header */}
        <motion.div className="text-center mb-20" variants={itemVariants}>
          <Title title="The" highlightedWord={"Nerve Center"} />

          <Subtitle className={"max-w-2xl mx-auto pt-6"}>
            {" "}
            Based in the heart of Dhaka, our headquarters at Panthapath is
            designed to foster innovation and host our global partners.{" "}
          </Subtitle>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Side: Contact Info (Column Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Main Address Card */}
            <motion.div
              variants={itemVariants}
              className="p-10 bg-[#edfbfe]/50 border border-[#d2e2fd] rounded-[3rem] transition-all hover:shadow-xl hover:shadow-[#d2e2fd]/30 group"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-white rounded-2xl shadow-sm text-slate-900 group-hover:bg-[#e8e2f7] transition-colors duration-500">
                  <HiOutlineMapPin className="text-2xl" />
                </div>
                <div>
                  <h4 className="text-2xl font-gretosk text-slate-900 mb-2">
                    Headquarters
                  </h4>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    Level 12, Panthapath Central Tower,
                    <br />
                    68/A Panthapath, Dhaka 1205,
                    <br />
                    Bangladesh
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div
                variants={itemVariants}
                className="p-8 bg-[#e7f0fe]/40 border border-white rounded-[2.5rem] hover:bg-white transition-colors duration-300"
              >
                <HiOutlinePhone className="text-2xl text-slate-900 mb-4" />
                <h5 className="font-bold text-slate-900 mb-1">Inquiries</h5>
                <p className="text-sm text-slate-500 font-bold">
                  +880 1712-345678
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="p-8 bg-[#e8e2f7]/40 border border-white rounded-[2.5rem] hover:bg-white transition-colors duration-300"
              >
                <HiOutlineClock className="text-2xl text-slate-900 mb-4" />
                <h5 className="font-bold text-slate-900 mb-1">Working Hours</h5>
                <p className="text-sm text-slate-500 font-bold">
                  Sun - Thu: 9AM - 6PM
                </p>
              </motion.div>
            </div>

            {/* Support/Email Box */}
            <motion.a
              href="mailto:hello@khalidhossain.dev"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="mt-auto p-8 bg-slate-900 rounded-[2.5rem] text-white flex items-center justify-between group cursor-pointer shadow-2xl shadow-slate-900/20"
            >
              <div>
                <p className="text-slate-400 text-[10px] uppercase tracking-[0.2em] mb-2 font-black">
                  Direct Support
                </p>
                <h4 className="text-xl font-semibold tracking-tight">
                  hello@khalidhossain.dev
                </h4>
              </div>
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-slate-900 transition-all duration-300">
                <HiOutlineArrowRight className="text-2xl" />
              </div>
            </motion.a>
          </div>

          {/* Right Side: Map Container (Column Span 7 - Expanded Size) */}
          <motion.div
            className="lg:col-span-7 min-h-[600px] lg:min-h-full relative"
            variants={itemVariants}
          >
            {/* Soft Ambient Glows */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#d2e2fd] to-[#e8e2f7] rounded-[3.5rem] blur-3xl opacity-30 -z-10" />

            <div className="w-full h-full rounded-[3.5rem] overflow-hidden border-[12px] border-white shadow-2xl relative">
              <iframe
                title="Panthapath HQ Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9023419357424!2d90.38626661498131!3d23.750867184589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bd55555555%3A0x1b4b6b6b6b6b6b6b!2sPanthapath%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1620000000000!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.1) brightness(1.05)" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>

              {/* Status Badge */}
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-xl p-6 rounded-[2rem] border border-white/50 shadow-2xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                      Office Status
                    </p>
                    <p className="text-sm font-bold text-slate-900 uppercase tracking-tight">
                      Available Now
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default OfficeLocation;
