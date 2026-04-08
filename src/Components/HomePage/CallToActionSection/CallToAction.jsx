/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import sectionBg from "../../../assets/ctaBg/cta-bg.jpg";
import { FaCalendarCheck, FaLayerGroup } from "react-icons/fa"; 
import PrimaryButton from "../../Shared/Button/PrimaryButton";
import SecondaryButton from "../../Shared/Button/SecondaryButton";
import { Link } from "react-router";
import Title from "../../Shared/Title/Title";

const CallToAction = () => {
  return (
    <section
      className="relative w-full py-32 md:pt-32 md:pb-24 px-6 overflow-hidden flex items-center justify-center bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${sectionBg})`,
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/*  Header Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 space-y-6"
        >
          <Title
            title={"Transform Your Vision"}
            highlightedWord={"Into Digital Reality"}
            className={"max-w-2xl mx-auto"}
          />
          <p className="max-w-3xl mx-auto text-lg md:text-xl font-medium bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent leading-relaxed font-inter">
            From specialized web architectures to full-scale software
            ecosystems, we deliver premium solutions designed to scale your
            business across every platform.
          </p>
        </motion.div>

        {/* CTA Buttons with Updated Icons & Links */}
        <div className="flex flex-col lg:flex-row items-center justify-center max-w-2xl mx-auto gap-6 px-4 lg:px-0">
          <Link to="/contact" className="w-full lg:w-auto">
            <PrimaryButton
              icon={FaCalendarCheck}
              className="w-full lg:px-10 py-4 shadow-xl"
            >
              Get a Free Consultation
            </PrimaryButton>
          </Link>

          <Link to="/services" className="w-full lg:w-auto">
            <SecondaryButton className="rounded-lg border-slate-400 shadow-sm hover:bg-slate-100 hover:scale-105 w-full lg:px-10 py-4 transition-all duration-300">
              <div className="flex items-center justify-center gap-2">
                <FaLayerGroup />
                <span>Explore Our Services</span>
              </div>
            </SecondaryButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
