import React from "react";
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineCalendarDays,
} from "react-icons/hi2";
import PrimaryButton from "../../Shared/Button/PrimaryButton";
import SecondaryButton from "../../Shared/Button/SecondaryButton";

const ConsultationCTA = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#edfbfe] font-inter">
      <div className="max-w-6xl mx-auto relative">
        {/* Background Decorative Elements */}
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#d2e2fd] rounded-full blur-[100px] opacity-40 animate-pulse" />
        <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-[#e8e2f7] rounded-full blur-[100px] opacity-40 animate-pulse" />

        {/* Main Glass Card */}
        <div className="relative z-10 bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[3rem] p-8 md:p-16 text-center shadow-xl shadow-[#d2e2fd]/20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full border border-[#d2e2fd] mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">
              Open for New Projects
            </span>
          </div>

          <h2 className="text-4xl md:text-7xl font-gretosk text-slate-900 leading-[1.1] mb-6">
            Ready to bring your <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#6366f1] via-[#a855f7] to-[#d2e2fd]">
              ideas to life?
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-slate-500 text-lg md:text-xl leading-relaxed mb-12">
            Whether you have a specific inquiry or just want to explore
            possibilities, I'm here to help you navigate the next steps of your
            digital journey.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Primary Action */}

            <PrimaryButton icon={HiOutlineCalendarDays} className="w-full">
              Book a Consultation
            </PrimaryButton>

            {/* Secondary Action */}

            <SecondaryButton
              className={` border-slate-400 shadow-sm hover:bg-slate-100 hover:scale-105 w-full rounded-full`}
            >
              General Inquiry
            </SecondaryButton>
          </div>

          {/* Trust Footer */}
          <div className="mt-16 pt-8 border-t border-[#d2e2fd]/50 flex flex-wrap justify-center gap-8 text-slate-400 font-medium text-sm">
            <span className="flex items-center gap-2">✔ High Performance</span>
            <span className="flex items-center gap-2">✔ Modern Tech Stack</span>
            <span className="flex items-center gap-2">✔ 24h Response Time</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
