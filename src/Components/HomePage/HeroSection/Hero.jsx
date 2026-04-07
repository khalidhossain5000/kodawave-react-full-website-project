import React from "react";
import PrimaryButton from "../../Shared/Button/PrimaryButton";
import { FaRegHandshake } from "react-icons/fa";
import SecondaryButton from "../../Shared/Button/SecondaryButton";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="py-36 xl:py-44 min-h-screen w-full bg-white relative px-0 lg:px-6 ">
      {/* graidnet background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
        radial-gradient(circle 500px at 0% 20%, rgba(139,92,246,0.3), transparent),
        radial-gradient(circle 500px at 100% 0%, rgba(59,130,246,0.3), transparent)
      `,
          backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
        }}
      />
      {/* content */}
      <div className=" max-w-2xl lg:max-w-4xl mx-auto relative z-900 ">
        {/* title and subtitle */}
        <div>
          <h1 className="text-[#242734] text-center font-grotesk text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold lg:font-bold">
            Transform Your Ideas Into
            
          </h1>

          <h1 className="text-[#242734] text-center font-grotesk text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold lg:font-bold mt-2 lg:mt-4">
            Digital Masterpieces
          </h1>

          {/* Subtitle */}
          <p className="lg:max-w-xl px-4 mx-auto text-center mt-5 lg:mt-9 text-[16px] sm:text-xl md:text-2xl text-gray-800 mb-8 xl:mb-12 ">
            We design, develop, and optimize websites and apps that help your
            brand stand out and grow online.
          </p>
        </div>
        {/* cta buttons */}
        <div className="flex flex-col lg:flex-row items-center justify-center max-w-2xl mx-auto gap-6 px-4 lg:px-0">
          <Link to="/contact" className="w-full">
            <PrimaryButton icon={FaRegHandshake} className="w-full">
              Get a Free Consultation
            </PrimaryButton>
          </Link>

          <Link to="/services" className="w-full">
            <SecondaryButton
              className={`rounded-lg border-slate-400 shadow-sm hover:bg-slate-100 hover:scale-105 w-full xl:w-auto`}
            >
              View Services
            </SecondaryButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
