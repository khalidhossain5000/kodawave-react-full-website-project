/* eslint-disable no-unused-vars */
import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const statsData = [
  {
    value: 250,
    suffix: "%",
    label: "Average ROI Growth",
    subLabel: "Scalable revenue for partners.",
  },
  {
    value: 40,
    suffix: "%",
    label: "Efficiency Increase",
    subLabel: "Optimized infrastructure systems.",
  },
  {
    value: 99.9,
    suffix: "%",
    label: "System Reliability",
    subLabel: "Enterprise-grade uptime.",
  },
  {
    value: 50,
    suffix: "+",
    label: "Global Market Leaders",
    subLabel: "Trusted by elite organizations.",
  },
];

const ClientStats = () => {
  return (
    <section className="py-24 lg:py-32 bg-linear-to-bt from-[#f4f2fe] to-[#fff5f5] z-99999 relative overflow-hidden px-6">
      {/* Ambient Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#e1d5fc] rounded-full blur-[120px] opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Content Side */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <motion.h4
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-indigo-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-6 font-inter"
            >
              Success Benchmarks
            </motion.h4>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-slate-900 mb-8 font-grotesk tracking-tighter leading-tight"
            >
              Quantifying <br />
              <span className="italic text-slate-300">Unmatched</span> <br />
              <span className="bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent italic">
                Performance.
              </span>
            </motion.h2>
            <p className="text-slate-500 font-inter text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
              We measure success by the impact we create. Our metrics reflect
              the surgical precision we apply to every digital architecture.
            </p>
          </div>

          {/* Right: Stats Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-100 border border-slate-100 rounded-[40px] overflow-hidden shadow-2xl shadow-indigo-100/20">
              {statsData.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-10 lg:p-14 hover:bg-[#fbf6f6] transition-colors duration-500 group"
                >
                  <div className="flex flex-col">
                    <div className="text-5xl lg:text-6xl font-black text-slate-900 font-grotesk tracking-tighter mb-4 flex items-baseline">
                      <CountUp
                        end={stat.value}
                        decimals={stat.value % 1 !== 0 ? 1 : 0}
                        duration={2.5}
                        enableScrollSpy
                        scrollSpyOnce
                      />
                      <span className="text-indigo-600 text-3xl ml-1 group-hover:scale-110 transition-transform duration-300">
                        {stat.suffix}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest font-inter mb-2">
                      {stat.label}
                    </h3>
                    <p className="text-slate-400 text-xs font-inter">
                      {stat.subLabel}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientStats;
