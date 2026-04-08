/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router";
import Title from "../../Shared/Title/Title";
import Subtitle from "../../Shared/Subtitle/Subtitle";
import PrimaryButton from "../../Shared/Button/PrimaryButton";
import SecondaryButton from "../../Shared/Button/SecondaryButton";

const ServiceCta = () => {
  return (
    <section className="py-24 px-6 bg-cyan-100/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[3rem] bg-[#e1d5fc] p-12 md:p-20 text-center inset-shadow-sm  inset-shadow-fuchsia-600 border border-white/20"
        >
          {/* Subtle Decorative Circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/30 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#d5e5fd] blur-3xl rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

          <div className="relative z-10 space-y-8">
            {/* Header Content */}
            <div className="space-y-4 max-w-2xl mx-auto">
              <Title
                title="Have a Specific Project "
                highlightedWord="in Mind?"
                className={`max-w-2xl mx-auto `}
              />

              <Subtitle>
                {" "}
                Whether you’re looking to build from scratch or scale an
                existing platform, our team of experts is ready to help you
                navigate the journey.
              </Subtitle>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center mx-auto w-full gap-6 pt-4">
              <Link to="/contact" className="">
                <PrimaryButton icon={FaArrowRight} className="w-full">
                  Start Your Project
                </PrimaryButton>
              </Link>

              <Link to="/contact" className=" ">
                <SecondaryButton
                  className={`rounded-lg border-slate-400 shadow-sm bg-white text-gray-900 hover:bg-slate-100 hover:scale-105  flex items-center justify-center gap-3 w-full`}
                >
                  <FaEnvelope className="text-gray-600" /> View Services
                </SecondaryButton>
              </Link>
            </div>

            {/* Response Time Badge */}
            <p className="text-sm font-semibold text-gray-600 pt-4 font-inter">
              Typical response time:{" "}
              <span className="text-black font-bold font-grotesk">Under 24 hours</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCta;
