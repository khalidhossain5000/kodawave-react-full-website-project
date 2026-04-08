/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import Title from "../../Shared/Title/Title";
import Subtitle from "../../Shared/Subtitle/Subtitle";
import PrimaryButton from "../../Shared/Button/PrimaryButton";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Message Received!",
      text: "Our team will contact you within 24 hours.",
      icon: "success",
      confirmButtonColor: "#4f46e5",
      background: "#fbf6f6",
      customClass: {
        title: " font-black",
        content: " font-medium",
      },
    });

    e.target.reset();
  };

  return (
    <section className="py-24 px-6 lg:px-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Dark Gradient Title */}
            <h2 className="text-4xl md:text-6xl font-black font-grotesk mb-8 tracking-tighter bg-gradient-to-b from-slate-900 to-slate-500 bg-clip-text text-transparent">
              Let's Talk About <br />
              <span className="font-grotesk italic bg-linear-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
                Your Next Big Thing
              </span>
            </h2>

            <Subtitle className={"mb-12 max-w-md "}>
              {" "}
              Ready to architect your digital authority? Reach out and let’s
              build a premium solution that converts.
            </Subtitle>

            <div className="space-y-8">
              {[
                {
                  icon: <FaPhoneAlt />,
                  title: "Direct Line",
                  detail: "+880 1234 567890",
                  bg: "bg-[#e1d5fc]",
                },
                {
                  icon: <FaEnvelope />,
                  title: "Support Email",
                  detail: "hello@pixelgrow.com",
                  bg: "bg-[#d5e5fd]",
                },
                {
                  icon: <FaMapMarkerAlt />,
                  title: "HQ Location",
                  detail: "Dhaka, Bangladesh",
                  bg: "bg-[#fbf6f6]",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div
                    className={`${item.bg} p-5 rounded-[22px] text-indigo-600 text-xl shadow-sm group-hover:rotate-6 group-hover:scale-110 transition-all duration-300`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-slate-400 uppercase tracking-widest text-[10px] font-black mb-1 font-inter">
                      {item.title}
                    </h4>
                    <p className="text-slate-900 font-bold font-grotesk text-xl">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Luxury Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#fbf6f6] p-8 md:p-14 rounded-[50px] border border-slate-100 shadow-2xl relative"
          >
            {/* Subtle glow behind form */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#e1d5fc]/30 blur-[80px] -z-10 rounded-full"></div>

            <form onSubmit={handleSubmit} className="space-y-7 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-slate-900 font-black text-xs uppercase tracking-wider ml-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Mr. Alex"
                    required
                    className="w-full bg-white border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-[#e1d5fc] transition-all outline-none font-inter font-semibold text-slate-800 shadow-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-slate-900 font-black text-xs uppercase tracking-wider ml-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="alex@pixelgrow.com"
                    required
                    className="w-full bg-white border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-[#d5e5fd] transition-all outline-none font-inter font-semibold text-slate-800 shadow-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-slate-900 font-black text-xs uppercase tracking-wider ml-2">
                  Selected Service
                </label>
                <select className="w-full bg-white border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-[#e1d5fc] transition-all outline-none font-inter font-semibold text-slate-800 shadow-sm appearance-none">
                  <option>Web Development</option>
                  <option>Branding & UI/UX</option>
                  <option>SEO Optimization</option>
                  <option>3D Motion Graphics</option>
                  <option>SaaS Solutions</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-slate-900 font-black text-xs uppercase tracking-wider ml-2">
                  Project Brief
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your digital vision..."
                  required
                  className="w-full bg-white border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-[#d5e5fd] transition-all outline-none font-inter font-semibold text-slate-800 shadow-sm resize-none"
                ></textarea>
              </div>

              

              <PrimaryButton icon={FaPaperPlane} className="w-full" type="submit">
            
              Send Message
            </PrimaryButton>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
