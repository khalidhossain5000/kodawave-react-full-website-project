/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import Services from "../../Components/HomePage/ServiceSection/Services";
import Title from "../../Components/Shared/Title/Title";
import PriceCard from "../../Components/ServicePageComponents/PriceSection/PriceCard";
import ServiceCta from "../../Components/ServicePageComponents/ServiceCtaSection/ServiceCta";

const ServicePage = () => {
  return (
    <section>
      <div className="min-h-screen bg-white relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
        linear-gradient(to right, #f0f0f0 1px, transparent 1px),
        linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
        radial-gradient(circle 800px at 100% 200px, #d5c5ff, transparent)
      `,
            backgroundSize: "96px 64px, 96px 64px, 100% 100%",
          }}
        />

        {/*  Introduction Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden border-b border-gray-50 z-9999999 max-w-7xl mx-auto">
          <div className=" flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 max-w-3xl mx-auto"
            >
              {/* Tagline */}
              <span className="px-4 py-2 rounded-full bg-[#e1d5fc] text-gray-900 text-sm font-bold tracking-widest uppercase font-inter">
                Our Expertise
              </span>

              {/*  Title  */}

              <Title
                title={"Scalable Growth"}
                highlightedWord={"Solutions for Your Business"}
                className={" mt-9 lg:mt-12  "}
              />
              {/* Subtitle */}
              <p className="max-w-3xl mx-auto text-sm md:text-lg  bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent leading-relaxed font-inter mt-6">
                We don’t just build apps; we engineer growth. From custom
                software development to precision digital marketing, our agency
                provides the high-performance tools you need to dominate your
                industry.
              </p>
            </motion.div>
          </div>

          {/* Subtle Background Element */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-50 blur-[120px] rounded-full"></div>
          </div>
        </section>
      </div>
      {/* other section container */}
      <div className=" relative z-9999999">
        <Services />
        <PriceCard />
        <ServiceCta/>
      </div>
    </section>
  );
};

export default ServicePage;
