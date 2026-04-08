/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import Title from "../../Shared/Title/Title";
import Subtitle from "../../Shared/Subtitle/Subtitle";
import PrimaryButton from "../../Shared/Button/PrimaryButton";

const pricingData = [
  {
    id: 1,
    name: "Starter",
    price: "$999",
    description:
      "Perfect for startups needing a professional digital foundation.",
    features: [
      "Custom Landing Page",
      "Responsive Design",
      "SEO Optimization",
      "Basic Analytics",
      "3 Months Support",
    ],
    highlight: false,
    bg: "bg-[#fbf6f6]",
  },
  {
    id: 2,
    name: "Growth",
    price: "$2,499",
    description:
      "Designed for businesses ready to scale their digital operations.",
    features: [
      "Full Web Application",
      "E-commerce Integration",
      "Advanced Dashboard",
      "Performance Tuning",
      "1 Year Support",
    ],
    highlight: true,
    bg: "bg-[#e1d5fc]", // Your primary theme color
  },
  {
    id: 3,
    name: "Premium",
    price: "$4,999",
    description:
      "Enterprise-grade solutions for complex software requirements.",
    features: [
      "Custom Software Ecosystem",
      "AI/ML Integration",
      "High-Level Security",
      "Dedicated Account Manager",
      "Priority 24/7 Support",
    ],
    highlight: false,
    bg: "bg-[#d5e5fd]", // Your secondary theme color
  },
];

const PriceCard = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-16 space-y-4">
          <Title title="Transparent" highlightedWord="Pricing" />

          <Subtitle className={"max-w-xl mx-auto pt-6"}>
            Choose a package that fits your growth stage. No hidden fees, just
            high-performance results.
          </Subtitle>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingData.map((plan) => (
            <motion.div
              key={plan.id}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col ${plan.bg} ${plan.highlight ? "ring-2 ring-indigo-400" : ""}`}
            >
              {plan.highlight && (
                <span className="absolute top-0 right-8 -translate-y-1/2 bg-black text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                  Most Popular
                </span>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-sm min-h-[40px]">
                  {plan.description}
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 text-sm">/project</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-gray-700 font-medium"
                  >
                    <FaCheckCircle className="text-indigo-600 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-bold transition-all duration-300 shadow-lg ${
                  !plan.highlight &&
                  "bg-white text-black cursor-pointer hover:bg-slate-100 border border-slate-200 font-inter"
                }`}
              >
                {!plan.highlight && `Choose ${plan.name} Plan`}
              </button>
              {plan.highlight && (
                <PrimaryButton>Choose {plan.name} Plan</PrimaryButton>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceCard;
