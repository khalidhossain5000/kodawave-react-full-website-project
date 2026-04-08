import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaChessKnight, FaLayerGroup, FaLightbulb } from "react-icons/fa";
import teamImg from "../../../assets/Aboutpage/team.png"
const strategyData = [
  {
    icon: <FaChessKnight className="text-indigo-600" />,
    title: "Strategic Precision",
    desc: "We don't believe in guesswork. Every line of code and every pixel is a calculated move toward market dominance.",
  },
  {
    icon: <FaLayerGroup className="text-indigo-600" />,
    title: "Elite Engineering",
    desc: "Our collective of full-stack experts builds scalable ecosystems that don't just work—they perform under pressure.",
  },
  {
    icon: <FaLightbulb className="text-indigo-600" />,
    title: "Visionary Growth",
    desc: "We align your digital presence with future market shifts, ensuring your legacy stays ahead of the curve.",
  },
];

const TeamStrategy = () => {
  return (
    <section className="py-24 lg:py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Side: Strategy Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl">
              {/* Placeholder for a high-end team/office image */}
              <img
                src={teamImg}
                alt="Elite Team"
                className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Luxury Gradient Accent */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gradient-to-br from-[#e1d5fc] to-[#d5e5fd] rounded-full blur-3xl opacity-60 -z-0"></div>
          </motion.div>

          {/* Right Side: Content */}
          <div>
            <motion.h4
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-indigo-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-6 font-inter"
            >
              The Blueprint of Success
            </motion.h4>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-slate-900 mb-8 font-grotesk tracking-tighter leading-tight"
            >
              Orchestrating <br />
              <span className="bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent italic">
                Elite Execution.
              </span>
            </motion.h2>

            <div className="space-y-10">
              {strategyData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#fbf6f6] flex items-center justify-center text-xl group-hover:bg-cyan-100 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 font-grotesk mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 font-inter leading-relaxed text-sm md:text-base">
                      {item.desc}
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

export default TeamStrategy;
