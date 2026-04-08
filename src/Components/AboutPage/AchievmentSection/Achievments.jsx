/* eslint-disable no-unused-vars */
import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const achievementData = [
  {
    number: 120,
    suffix: "+",
    title: "Enterprise Projects",
    desc: "High-performance digital solutions delivered globally.",
  },
  {
    number: 98,
    suffix: "%",
    title: "Client Retention",
    desc: "Long-term strategic partnerships built on elite trust.",
  },
  {
    number: 15,
    suffix: "+",
    title: "Industry Awards",
    desc: "Recognitions for excellence in UI/UX and engineering.",
  },
  {
    number: 45,
    suffix: "M",
    title: "User Reach",
    desc: "Applications scaling millions of daily active users.",
  },
];

const Achievments = () => {
  return (
    <section className="py-24 lg:py-32 bg-linear-to-br from-[#ebfdfe] to-[#f4f2fe] px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-end mb-16 md:mb-20">
          {/* Left Side: Dynamic Title */}
          <div className="max-w-3xl">
            <motion.h4
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-indigo-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-4 font-inter"
            >
              Our Impact in Numbers
            </motion.h4>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-slate-900 font-grotesk tracking-tighter"
            >
              Proven <span className="italic text-slate-300">Authority </span>{" "}
              in <br />
              <span className="bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
                The Digital Frontier.
              </span>
            </motion.h2>
          </div>

          {/* Right Side: Description text to fill the gap */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="pb-2 lg:pb-4 border-l-2 border-slate-200 pl-8"
          >
            <p className="text-slate-600 text-lg font-inter leading-relaxed max-w-xl">
              We don't just build software; we engineer scalable success
              stories. Our metrics are a testament to our commitment to turning
              ambitious visions into measurable market dominance.
            </p>
          </motion.div>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {achievementData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-[32px] bg-white border border-slate-100 hover:border-indigo-100 transition-all duration-500 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_-20px_rgba(79,70,229,0.1)] overflow-hidden"
            >
              {/* Subtle Hover Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#e1d5fc]/20 to-[#d5e5fd]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="text-4xl lg:text-5xl font-black text-slate-900 font-grotesk mb-3 flex items-baseline tracking-tighter">
                  <CountUp
                    end={item.number}
                    duration={3}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />
                  <span className="text-indigo-600 ml-1">{item.suffix}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 font-grotesk mb-3 uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-slate-500 font-inter text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Decorative Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievments;
