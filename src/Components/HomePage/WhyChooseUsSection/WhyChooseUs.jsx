import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaRocket, FaShieldAlt, FaGem } from "react-icons/fa";

const reasons = [
  {
    icon: <FaRocket className="text-orange-500 text-3xl" />,
    title: "Fast-Track Delivery",
    desc: "We don't just build; we accelerate. Our MERN stack expertise ensures high-performance apps delivered on time.",
    bgColor: "bg-[#fff5f5]",
    cardBg:"bg-[#f0eafd]"
  },
  {
    icon: <FaGem className="text-indigo-500 text-3xl" />,
    title: "Premium UI/UX Only",
    desc: "Pixel-perfect designs with fluid animations using Framer Motion and GSAP. We make your brand look expensive.",
    bgColor: "bg-[#f4f2fe]",
      cardBg:"bg-[#d7c8ff]"
  },
  {
    icon: <FaShieldAlt className="text-cyan-500 text-3xl" />,
    title: "Scalable & Secure",
    desc: "From Stripe integration to secure Auth, we build architectures that grow with your business without breaking.",
    bgColor: "bg-[#ebfdfe]",
      cardBg:"bg-[#e9f2f8]"
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-32 px-6 lg:px-20 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4 font-inter">
              Why PixelGrow?
            </h4>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight font-grotesk">
              We fuel digital growth
              <br />
              <span className="text-slate-400">that drives real results.</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed font-inter">
              At PixelGrow, we combine creative strategy with premium aesthetics
              across web development, UI/UX design, branding, SEO, 3D motion,
              advertising, and SaaS solutions. Whether it's a sleek startup
              landing page or a complex enterprise platform, we ensure your
              digital presence is both highly functional and visually
              breathtaking.
            </p>

            <div className="flex gap-8">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 font-inter">
                  99%
                </h3>
                <p className="text-slate-500 text-sm">Client Satisfaction</p>
              </div>
              <div className="border-l border-slate-300 h-12"></div>
              <div>
                <h3 className="text-3xl font-bold text-slate-900">50+</h3>
                <p className="text-slate-500 text-sm">Projects Delivered</p>
              </div>
              {/* country served stats */}
              <div className="border-l border-slate-300 h-12"></div>
              <div>
                <h3 className="text-3xl font-bold text-slate-900">95+</h3>
                <p className="text-slate-500 text-sm">Countries Served</p>
              </div>
              {/* rating  stats */}
            </div>
          </motion.div>

          {/* Right Side: Feature Cards */}
          <div className="space-y-6">
            {reasons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ x: 10 }}
                className={`flex items-start p-6 ${item.bgColor} rounded-3xl border border-slate-100 shadow-sm transition-all`}
              >
                <div
                  className={`p-4 rounded-2xl ${item.bgColor} mr-6 flex-shrink-0`}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
