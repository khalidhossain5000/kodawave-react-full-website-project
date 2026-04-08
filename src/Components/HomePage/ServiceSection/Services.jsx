import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

// Assets import
import webImg from "../../../assets/servicesImage/finalimagereadytouse/webDev.png";
import brandImg from "../../../assets/servicesImage/finalimagereadytouse/brand.png";
import seoImg from "../../../assets/servicesImage/f/seoii.png";
import advertiseImg from "../../../assets/servicesImage/finalimagereadytouse/advitersemtn.png";
import iiidImg from "../../../assets/servicesImage/f/3d.png";
import sassImg from "../../../assets/servicesImage/f/sass.png";
import Title from "../../Shared/Title/Title";
import Subtitle from "../../Shared/Subtitle/Subtitle";

const servicesData = [
  {
    title: "Web Development",
    subtitle: "Build fast, scalable, and modern web applications.",
    features: [
      "MERN Stack",
      "Next.js Mastery",
      "Responsive Design",
      "API Integration",
    ],
    image: webImg,
    gradient: "from-[#fff5f5] to-[#f4f2fe]",
  },
  {
    title: "Branding & UI/UX",
    subtitle: "Creating premium visuals and user-centric designs.",
    features: [
      "Visual Identity",
      "Interactive Prototypes",
      "Design Systems",
      "User Research",
    ],
    image: brandImg,
    gradient: "from-[#ebfdfe] to-[#f4f2fe]",
  },
  {
    title: "SEO Optimization",
    subtitle: "Rank higher on search engines and drive organic traffic.",
    features: [
      "Keyword Strategy",
      "Technical SEO",
      "Performance Audit",
      "Backlink Strategy",
    ],
    image: seoImg,
    gradient: "from-[#f4f2fe] to-[#fff5f5]",
  },
  {
    title: "Online Advertising",
    subtitle: "Targeted campaigns to boost your brand visibility.",
    features: [
      "Google Ads",
      "Social Media Ads",
      "ROI Focused",
      "Ad Copywriting",
    ],
    image: advertiseImg,
    gradient: "from-[#ebfdfe] to-[#fff5f5]",
  },
  {
    title: "3D Motion",
    subtitle: "Engage audience with high-end 3D visual storytelling.",
    features: [
      "Product Rendering",
      "Character Animation",
      "Lottie Effects",
      "Motion Graphics",
    ],
    image: iiidImg,
    gradient: "from-[#fff5f5] to-[#ebfdfe]",
  },
  {
    title: "SaaS Solutions",
    subtitle: "Custom software architecture for your business needs.",
    features: [
      "Cloud Integration",
      "Subscription Logic",
      "Admin Dashboards",
      "Scalable Backend",
    ],
    image: sassImg,
    gradient: "from-[#f4f2fe] to-[#ebfdfe]",
  },
];

const Services = () => {
  return (
    <section className="py-12 md:py-16 lg:py-18 px-6 md:px-12 lg:px-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <Title title={`Elevated Digital`} highlightedWord={"Services"} />

        <Subtitle className={"max-w-2xl mx-auto pt-6"}>
          We provide high-end digital solutions tailored to help your business
          scale and stand out in the modern market.
        </Subtitle>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            className={`relative group p-8 md:p-10 rounded-[45px] border border-white/60 shadow-xl bg-gradient-to-br ${service.gradient} transition-all duration-300 flex flex-col h-full`}
          >
            {/* 3D Image Section */}
            <div className="w-full h-48 md:h-56 flex justify-center items-center mb-8">
              <motion.img
                whileHover={{ scale: 1.12 }}
                transition={{ type: "spring", stiffness: 300, duration: 0.9 }}
                src={service.image}
                alt={service.title}
                className="w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.12)]"
              />
            </div>

            {/* Text Content */}
            <div className="flex-grow">
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-4 tracking-tight">
                {service.title}
              </h3>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                {service.subtitle}
              </p>

              {/* Feature List (Now 4 items) */}
              <ul className="space-y-3 pt-4 border-t border-slate-200/50">
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center text-sm md:text-base font-semibold text-slate-700"
                  >
                    <FaCheckCircle className="text-indigo-500 mr-3 flex-shrink-0 opacity-80" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Subtle Glow Effect */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/30 blur-3xl rounded-full group-hover:bg-indigo-100/40 transition-colors duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
